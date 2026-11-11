import { LitElement, html, css, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import type { Hass, LanMerakiCardConfig } from './types.js';
import { getState, merakiStatusColor, merakiStatusLabel } from './utils.js';
import { iconTopology, iconSwitch, iconWifi, iconExternalLink } from './icons.js';

export class LanMerakiCard extends LitElement {
  @property({ attribute: false }) hass?: Hass;
  @state() private _config?: LanMerakiCardConfig;

  static styles = css`
    :host {
      display: block;
      container-type: inline-size;
    }
    ha-card {
      background: #161b22;
      color: #e6edf3;
      border-radius: 16px;
      overflow: hidden;
      font-family: Inter, system-ui, -apple-system, sans-serif;
    }
    .card-body {
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
    }
    .header-left {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .header-icon {
      color: #4ade9b;
    }
    .title {
      font-size: 18px;
      font-weight: 700;
      line-height: 1.2;
    }
    .subtitle {
      font-size: 12px;
      color: #9aa4b2;
      margin-top: 2px;
    }
    .badge {
      font-size: 12px;
      font-weight: 600;
      padding: 3px 10px;
      border-radius: 20px;
      display: flex;
      align-items: center;
      gap: 5px;
      background: rgba(74, 222, 155, 0.14);
      color: #4ade9b;
    }
    .dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #4ade9b;
      animation: pulse 1.6s ease-in-out infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.35; }
    }
    .summary {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 8px;
    }
    .summary-item {
      background: #1c222b;
      border: 1px solid #2f3743;
      border-radius: 10px;
      padding: 8px 10px;
      text-align: center;
    }
    .summary-count {
      font-size: 22px;
      font-weight: 700;
      line-height: 1;
    }
    .summary-label {
      font-size: 11px;
      color: #9aa4b2;
      margin-top: 2px;
    }
    .divider {
      height: 1px;
      background: #2f3743;
    }
    .device-list {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .device-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #1c222b;
      border: 1px solid #2f3743;
      border-radius: 10px;
      padding: 10px 12px;
    }
    .device-left {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .device-icon {
      color: #9aa4b2;
    }
    .device-name {
      font-size: 14px;
      font-weight: 600;
    }
    .device-type {
      font-size: 11px;
      color: #9aa4b2;
    }
    .status-pill {
      font-size: 12px;
      font-weight: 600;
      padding: 3px 10px;
      border-radius: 20px;
      display: flex;
      align-items: center;
      gap: 5px;
    }
    .status-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
    }
    .btn-link {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      padding: 10px;
      border: 1px solid #2f3743;
      border-radius: 10px;
      background: #1c222b;
      color: #9aa4b2;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      font-family: inherit;
      transition: background 0.15s;
      width: 100%;
    }
    .btn-link:hover {
      background: #262d36;
      color: #e6edf3;
    }
  `;

  static getConfigElement(): HTMLElement {
    return document.createElement('lan-meraki-card-editor');
  }

  static getStubConfig(): LanMerakiCardConfig {
    return { type: 'custom:lan-meraki-card', devices: [] };
  }

  setConfig(config: LanMerakiCardConfig) {
    if (!config.devices || !Array.isArray(config.devices)) throw new Error('devices est requis');
    this._config = config;
  }

  static getCardSize(): number {
    return 4;
  }

  render() {
    if (!this._config || !this.hass) return nothing;
    const cfg = this._config;
    const hass = this.hass;

    const statuses = cfg.devices.map((d) => getState(hass, d.entity).toLowerCase());
    const online = statuses.filter((s) => s === 'online').length;
    const alerting = statuses.filter((s) => s === 'alerting').length;
    const offline = statuses.filter((s) => s === 'offline').length;
    const dormant = statuses.filter((s) => s !== 'online' && s !== 'alerting' && s !== 'offline').length;
    const total = cfg.devices.length;

    return html`
      <ha-card>
        <div class="card-body">
          <div class="header">
            <div class="header-left">
              <span class="header-icon">${iconTopology}</span>
              <div>
                <div class="title">LAN</div>
                <div class="subtitle">Cisco Meraki · Dashboard cloud</div>
              </div>
            </div>
            <div class="badge">
              <div class="dot"></div>
              ${online}/${total} en ligne
            </div>
          </div>

          <div class="summary">
            ${this._summaryItem(online, 'En ligne', '#4ade9b')}
            ${this._summaryItem(alerting, 'Alerte', '#fbbf24')}
            ${this._summaryItem(offline, 'Hors ligne', '#ff8a8a')}
            ${this._summaryItem(dormant, 'Dormant', '#9aa4b2')}
          </div>

          <div class="divider"></div>

          <div class="device-list">
            ${cfg.devices.map((device) => {
              const status = getState(hass, device.entity);
              const color = merakiStatusColor(status);
              const label = merakiStatusLabel(status);
              const isAp = device.type === 'access_point';
              return html`
                <div class="device-row">
                  <div class="device-left">
                    <span class="device-icon">${isAp ? iconWifi : iconSwitch}</span>
                    <div>
                      <div class="device-name">${device.name}</div>
                      <div class="device-type">
                        ${isAp ? "Point d'accès Wi-Fi" : 'Switch'}
                      </div>
                    </div>
                  </div>
                  <div
                    class="status-pill"
                    style="background:${color}22;color:${color}"
                  >
                    <div class="status-dot" style="background:${color}"></div>
                    ${label}
                  </div>
                </div>
              `;
            })}
          </div>

          ${cfg.dashboard_url
            ? html`
                <button class="btn-link" @click=${() => window.open(cfg.dashboard_url, '_blank')}>
                  Ouvrir le dashboard Meraki ${iconExternalLink}
                </button>
              `
            : nothing}
        </div>
      </ha-card>
    `;
  }

  private _summaryItem(count: number, label: string, color: string) {
    return html`
      <div class="summary-item">
        <div class="summary-count" style="color:${count > 0 && label !== 'En ligne' ? color : count > 0 ? color : '#e6edf3'}">${count}</div>
        <div class="summary-label">${label}</div>
      </div>
    `;
  }
}
