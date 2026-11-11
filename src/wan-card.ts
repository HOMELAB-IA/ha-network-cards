import { LitElement, html, css, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import type { Hass, WanCardConfig } from './types.js';
import {
  getState,
  getAttr,
  getFloat,
  isOn,
  formatMbps,
  formatDecimal,
  maskIp,
  formatUptime,
  clampPct,
} from './utils.js';
import {
  iconGlobe,
  iconArrowDown,
  iconArrowUp,
  iconCloud,
  iconPower,
  iconRefresh,
} from './icons.js';

export class WanCard extends LitElement {
  @property({ attribute: false }) hass?: Hass;
  @state() private _config?: WanCardConfig;

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
    /* Header */
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
      color: #5b9bff;
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
    }
    .badge-online {
      background: rgba(74, 222, 155, 0.14);
      color: #4ade9b;
    }
    .badge-offline {
      background: rgba(255, 138, 138, 0.16);
      color: #ff8a8a;
    }
    .dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
    }
    .dot-online {
      background: #4ade9b;
      animation: pulse 1.6s ease-in-out infinite;
    }
    .dot-offline {
      background: #ff8a8a;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.35; }
    }
    /* Speed blocks */
    .speed-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }
    .speed-block {
      background: #1c222b;
      border: 1px solid #2f3743;
      border-radius: 12px;
      padding: 10px 12px;
    }
    .speed-label {
      font-size: 11px;
      color: #9aa4b2;
      display: flex;
      align-items: center;
      gap: 4px;
      margin-bottom: 4px;
    }
    .speed-value {
      font-size: 26px;
      font-weight: 700;
      line-height: 1;
    }
    .speed-unit {
      font-size: 13px;
      font-weight: 400;
      color: #9aa4b2;
      margin-left: 2px;
    }
    .speed-down { color: #5b9bff; }
    .speed-up { color: #f5a623; }
    .bar-track {
      height: 4px;
      background: #2f3743;
      border-radius: 2px;
      margin-top: 6px;
      overflow: hidden;
    }
    .bar-fill-down {
      height: 100%;
      border-radius: 2px;
      background: #5b9bff;
      transition: width 0.4s ease;
    }
    .bar-fill-up {
      height: 100%;
      border-radius: 2px;
      background: #f5a623;
      transition: width 0.4s ease;
    }
    .bar-pct {
      font-size: 11px;
      color: #9aa4b2;
      margin-top: 3px;
    }
    /* Stats row */
    .stats-row {
      display: flex;
      gap: 16px;
      justify-content: flex-start;
    }
    .stat-item {
      display: flex;
      flex-direction: column;
      gap: 1px;
    }
    .stat-label {
      font-size: 11px;
      color: #9aa4b2;
    }
    .stat-value {
      font-size: 15px;
      font-weight: 600;
    }
    /* Details table */
    .details {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .detail-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 13px;
    }
    .detail-key {
      color: #9aa4b2;
    }
    .detail-val {
      font-weight: 500;
      text-align: right;
    }
    /* Cloudflared */
    .cloudflared-row {
      background: #1c222b;
      border: 1px solid #2f3743;
      border-radius: 10px;
      padding: 10px 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .cloudflared-left {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #9aa4b2;
    }
    .cloudflared-info {
      font-size: 13px;
    }
    .cloudflared-name {
      font-weight: 600;
      color: #e6edf3;
    }
    .cloudflared-meta {
      font-size: 11px;
      color: #9aa4b2;
    }
    /* Boutons */
    .actions {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }
    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      padding: 10px;
      border: 1px solid #2f3743;
      border-radius: 10px;
      background: #1c222b;
      color: #e6edf3;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      font-family: inherit;
      transition: background 0.15s;
    }
    .btn:hover {
      background: #262d36;
    }
    .btn-danger {
      color: #ff8a8a;
      border-color: rgba(255, 138, 138, 0.3);
    }
    .btn-danger:hover {
      background: rgba(255, 138, 138, 0.08);
    }
    .divider {
      height: 1px;
      background: #2f3743;
    }
  `;

  setConfig(config: WanCardConfig) {
    if (!config.wan_status) throw new Error('wan_status est requis');
    if (!config.speed_down) throw new Error('speed_down est requis');
    if (!config.speed_up) throw new Error('speed_up est requis');
    this._config = config;
  }

  static getCardSize(): number {
    return 6;
  }

  render() {
    if (!this._config || !this.hass) return nothing;
    const cfg = this._config;
    const hass = this.hass;

    const isOnline = isOn(hass, cfg.wan_status) || getState(hass, cfg.wan_status) === 'connected';
    const speedDown = getFloat(hass, cfg.speed_down);
    const speedUp = getFloat(hass, cfg.speed_up);
    const latency = getFloat(hass, cfg.latency);
    const jitter = getFloat(hass, cfg.jitter);
    const isp = getState(hass, cfg.isp);
    const ip = cfg.ip_public ? maskIp(getState(hass, cfg.ip_public)) : '';

    const gponRx = cfg.gpon_rx ? getFloat(hass, cfg.gpon_rx) : 0;
    const gponTx = cfg.gpon_tx ? getFloat(hass, cfg.gpon_tx) : 0;
    const downPct = gponRx > 0 ? clampPct(speedDown, gponRx) : 0;
    const upPct = gponTx > 0 ? clampPct(speedUp, gponTx) : 0;

    const optRx = cfg.optical_rx ? getFloat(hass, cfg.optical_rx) : null;
    const optTx = cfg.optical_tx ? getFloat(hass, cfg.optical_tx) : null;
    const uptime = cfg.uptime ? getFloat(hass, cfg.uptime) : null;
    const dhcp = cfg.dhcp_leases ? getFloat(hass, cfg.dhcp_leases) : null;
    const dhcpGuest = cfg.dhcp_guest ? getFloat(hass, cfg.dhcp_guest) : null;

    const cfVersion = cfg.cloudflared_version
      ? String(getAttr(hass, cfg.cloudflared_version, 'installed_version') ?? '')
      : null;
    const cfLatest = cfg.cloudflared_version
      ? String(getAttr(hass, cfg.cloudflared_version, 'latest_version') ?? '')
      : null;
    const cfRunning = cfg.cloudflared_running ? isOn(hass, cfg.cloudflared_running) : null;

    return html`
      <ha-card>
        <div class="card-body">
          <!-- En-tête -->
          <div class="header">
            <div class="header-left">
              <span class="header-icon">${iconGlobe}</span>
              <div>
                <div class="title">WAN</div>
                <div class="subtitle">Livebox Fibre · GPON · DS-Lite</div>
              </div>
            </div>
            <div class="badge ${isOnline ? 'badge-online' : 'badge-offline'}">
              <div class="dot ${isOnline ? 'dot-online' : 'dot-offline'}"></div>
              ${isOnline ? 'En ligne' : 'Hors ligne'}
            </div>
          </div>

          <!-- Débits -->
          <div class="speed-row">
            <div class="speed-block">
              <div class="speed-label">${iconArrowDown} Descendant · P90</div>
              <div>
                <span class="speed-value speed-down">${formatMbps(speedDown)}</span>
                <span class="speed-unit">Mb/s</span>
              </div>
              ${gponRx > 0
                ? html`
                    <div class="bar-track">
                      <div class="bar-fill-down" style="width:${downPct}%"></div>
                    </div>
                    <div class="bar-pct">${downPct} % du débit GPON</div>
                  `
                : nothing}
            </div>
            <div class="speed-block">
              <div class="speed-label">${iconArrowUp} Montant · P90</div>
              <div>
                <span class="speed-value speed-up">${formatMbps(speedUp)}</span>
                <span class="speed-unit">Mb/s</span>
              </div>
              ${gponTx > 0
                ? html`
                    <div class="bar-track">
                      <div class="bar-fill-up" style="width:${upPct}%"></div>
                    </div>
                    <div class="bar-pct">${upPct} % du débit GPON</div>
                  `
                : nothing}
            </div>
          </div>

          <!-- Latence / Gigue / FAI -->
          <div class="stats-row">
            <div class="stat-item">
              <span class="stat-label">Latence</span>
              <span class="stat-value">${formatDecimal(latency, 0)} ms</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Gigue</span>
              <span class="stat-value">${formatDecimal(jitter, 1)} ms</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">FAI</span>
              <span class="stat-value">${isp || '—'}</span>
            </div>
          </div>

          <div class="divider"></div>

          <!-- Détails -->
          <div class="details">
            ${ip
              ? html`<div class="detail-row">
                  <span class="detail-key">IP publique</span>
                  <span class="detail-val">${ip}</span>
                </div>`
              : nothing}
            ${gponRx > 0 && gponTx > 0
              ? html`<div class="detail-row">
                  <span class="detail-key">Débit GPON</span>
                  <span class="detail-val">↓ ${formatMbps(gponRx)} · ↑ ${formatMbps(gponTx)} Mb/s</span>
                </div>`
              : nothing}
            ${optRx !== null && optTx !== null
              ? html`<div class="detail-row">
                  <span class="detail-key">Puissance optique</span>
                  <span class="detail-val">Rx ${formatDecimal(optRx)} · Tx ${formatDecimal(optTx)} dBm</span>
                </div>`
              : nothing}
            ${uptime !== null
              ? html`<div class="detail-row">
                  <span class="detail-key">Uptime Livebox</span>
                  <span class="detail-val">${formatUptime(uptime)}</span>
                </div>`
              : nothing}
            ${dhcp !== null
              ? html`<div class="detail-row">
                  <span class="detail-key">Baux DHCP · invités</span>
                  <span class="detail-val">${dhcp} · ${dhcpGuest ?? '—'}</span>
                </div>`
              : nothing}
          </div>

          <!-- Cloudflared -->
          ${cfVersion !== null
            ? html`
                <div class="divider"></div>
                <div class="cloudflared-row">
                  <div class="cloudflared-left">
                    <span style="color:#9aa4b2">${iconCloud}</span>
                    <div>
                      <div class="cloudflared-name">Cloudflared</div>
                      <div class="cloudflared-meta">
                        App HA · v${cfVersion}
                        ${cfLatest && cfLatest !== cfVersion ? html` → v${cfLatest}` : ' · à jour'}
                      </div>
                    </div>
                  </div>
                  ${cfRunning !== null
                    ? html`<div class="badge ${cfRunning ? 'badge-online' : 'badge-offline'}">
                        <div class="dot ${cfRunning ? 'dot-online' : 'dot-offline'}"></div>
                        ${cfRunning ? 'En marche' : 'Arrêté'}
                      </div>`
                    : nothing}
                </div>
              `
            : nothing}

          <!-- Actions -->
          <div class="actions">
            <button
              class="btn"
              @click=${() => this._triggerSpeedTest()}
              ?disabled=${!cfg.speedtest_trigger}
            >
              ${iconRefresh} Speed test
            </button>
            <button
              class="btn btn-danger"
              @click=${() => this._restartLivebox()}
              ?disabled=${!cfg.restart_button}
            >
              ${iconPower} Redémarrer Livebox
            </button>
          </div>
        </div>
      </ha-card>
    `;
  }

  private _triggerSpeedTest() {
    if (!this._config?.speedtest_trigger || !this.hass) return;
    this.hass.callService('homeassistant', 'update_entity', {
      entity_id: this._config.speedtest_trigger,
    });
  }

  private _restartLivebox() {
    if (!this._config?.restart_button || !this.hass) return;
    this.hass.callService('button', 'press', {
      entity_id: this._config.restart_button,
    });
  }
}
