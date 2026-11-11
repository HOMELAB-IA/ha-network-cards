import { LitElement, html, css, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import type { Hass, Mx64DualWanCardConfig } from './types.js';
import { getState } from './utils.js';

export class Mx64DualWanCard extends LitElement {
  @property({ attribute: false }) hass?: Hass;
  @state() private _config?: Mx64DualWanCardConfig;

  static styles = css`
    :host {
      display: block;
      container-type: inline-size;
    }
    ha-card {
      overflow: hidden;
    }
    svg {
      display: block;
      width: 100%;
      height: auto;
    }
  `;

  static getConfigElement(): HTMLElement {
    return document.createElement('mx64-dual-wan-card-editor');
  }

  static getStubConfig(): Mx64DualWanCardConfig {
    return { type: 'custom:mx64-dual-wan-card' };
  }

  setConfig(config: Mx64DualWanCardConfig) {
    this._config = config;
  }

  static getCardSize(): number {
    return 5;
  }

  render() {
    if (!this._config) return nothing;

    const wan1 = this._config.wan1_status
      ? getState(this.hass!, this._config.wan1_status)
      : 'active';
    const isFailover = wan1 === 'failed' || wan1 === 'not connected';

    return html`<ha-card>${this._renderSvg(isFailover)}</ha-card>`;
  }

  private _renderSvg(failover: boolean) {
    const fo = failover;
    const nom = !failover;

    const bg = '#161B22';
    const cardFill = '#1C222B';
    const cardStroke = '#2F3743';

    const activeStroke = '#4ADE9B';
    const standbyStroke = '#59636F';
    const downStroke = '#FF8A8A';
    const activeBorder = 'rgba(74,222,155,.45)';
    const downBorder = 'rgba(248,113,113,.45)';

    // WAN1 link: active en nominal, down en failover
    const l1Stroke = fo ? downStroke : activeStroke;
    const l1Dash = fo ? 'none' : '10 4';
    const l1Anim = fo ? 'none' : 'flow .9s linear infinite';

    // WAN2 link: standby en nominal, active en failover
    const l2Stroke = fo ? activeStroke : standbyStroke;
    const l2Dash = fo ? '10 4' : '2 7';
    const l2Anim = fo ? 'flow .9s linear infinite' : 'none';

    // Bordures des blocs
    const c1Border = fo ? downBorder : activeBorder;
    const c2Border = fo ? activeBorder : cardStroke;

    // Dot WAN1
    const dot1Color = fo ? '#FF8A8A' : '#4ADE9B';
    const dot1Anim = fo ? 'none' : 'pulse 1.6s ease-in-out infinite';
    const dot1Label = fo ? 'Down' : 'Up';
    const dot1TextColor = fo ? '#FF8A8A' : '#4ADE9B';
    const dot1Bg = fo ? 'rgba(248,113,113,.16)' : 'rgba(52,211,153,.14)';
    const dot1BadgeW = fo ? 64 : 50;

    // Dot WAN2
    const dot2Color = fo ? '#4ADE9B' : '#B4BCC8';
    const dot2Anim = fo ? 'pulse 1.6s ease-in-out infinite' : 'none';
    const dot2Label = fo ? 'Up' : 'Standby';
    const dot2TextColor = fo ? '#4ADE9B' : '#B4BCC8';
    const dot2Bg = fo ? 'rgba(52,211,153,.14)' : 'rgba(180,188,200,.14)';
    const dot2BadgeW = fo ? 50 : 78;

    return html`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        viewBox="0 0 390 480"
        font-family="Inter, system-ui, -apple-system, sans-serif"
        role="img"
        aria-label="MX64 Double WAN — ${fo ? 'Failover actif' : 'WAN 1 en service'}"
      >
        <style>
          @keyframes flow { to { stroke-dashoffset: -28; } }
          @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: .35; } }
          @media (prefers-reduced-motion: reduce) { * { animation: none !important; } }
        </style>

        <rect x="0.5" y="0.5" width="389" height="479" rx="20" fill="${bg}" stroke="${cardStroke}"/>

        <text x="20" y="50" font-size="22" font-weight="700" fill="#E6EDF3">MX64 · Double WAN</text>
        <text x="20" y="82" font-size="14" fill="#9AA4B2">
          ${fo ? 'Failover actif : WAN 1 perdu,' : 'WAN 1 fibre en service, WAN 2 LTE prêt'}
        </text>
        <text x="20" y="102" font-size="14" fill="#9AA4B2">
          ${fo ? 'le trafic passe par le LTE' : 'à prendre le relais'}
        </text>

        <!-- Liens -->
        <path
          d="M112 188 H176"
          fill="none"
          stroke="${l1Stroke}"
          stroke-width="3"
          stroke-linecap="round"
          stroke-dasharray="${l1Dash}"
          style="animation:${l1Anim}"
        />
        <path
          d="M112 324 H176"
          fill="none"
          stroke="${l2Stroke}"
          stroke-width="3"
          stroke-linecap="round"
          stroke-dasharray="${l2Dash}"
          style="animation:${l2Anim}"
        />
        <text x="144" y="172" font-size="12" text-anchor="middle" fill="#9AA4B2">WAN 1</text>
        <text x="144" y="308" font-size="12" text-anchor="middle" fill="#9AA4B2">WAN 2</text>

        <!-- MX64 -->
        <rect fill="${cardFill}" stroke="${cardStroke}" stroke-width="1" x="20.5" y="140.5" width="91" height="231" rx="16"/>
        <g transform="translate(38 218) scale(2.333)" fill="none" stroke="#E6EDF3" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="8" width="20" height="8" rx="2"/><path d="M6 12h.01"/><path d="M9 12h.01"/><path d="M14 12h4"/><path d="M12 4v4"/><path d="M8 5l4-1 4 1"/>
        </g>
        <text x="66" y="300" font-size="17" font-weight="700" text-anchor="middle" fill="#E6EDF3">MX64</text>

        <!-- WAN 1 bloc -->
        <rect fill="${cardFill}" stroke="${c1Border}" stroke-width="1" x="176.5" y="140.5" width="193" height="95" rx="14"/>
        <g transform="translate(190 176)" fill="none" stroke="#5B9BFF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 12h4l2-6 4 12 2-6h6"/>
        </g>
        <text x="224" y="170" font-size="12" fill="#9AA4B2">WAN 1</text>
        <text x="224" y="190" font-size="16" font-weight="700" fill="#E6EDF3">Fibre Orange</text>
        <rect x="224" y="199" width="${dot1BadgeW}" height="20" rx="10" fill="${dot1Bg}"/>
        <circle cx="236" cy="209" r="3.5" fill="${dot1Color}" style="animation:${dot1Anim}"/>
        <text x="245" y="213" font-size="12" font-weight="600" fill="${dot1TextColor}">${dot1Label}</text>

        <!-- WAN 2 bloc -->
        <rect fill="${cardFill}" stroke="${c2Border}" stroke-width="1" x="176.5" y="276.5" width="193" height="95" rx="14"/>
        <g transform="translate(190 312)" fill="none" stroke="#F5A623" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 20v-4"/><path d="M10 20v-8"/><path d="M15 20v-12"/><path d="M20 20V4"/>
        </g>
        <text x="224" y="306" font-size="12" fill="#9AA4B2">WAN 2</text>
        <text x="224" y="326" font-size="16" font-weight="700" fill="#E6EDF3">LTE Orange</text>
        <rect x="224" y="335" width="${dot2BadgeW}" height="20" rx="10" fill="${dot2Bg}"/>
        <circle cx="236" cy="345" r="3.5" fill="${dot2Color}" style="animation:${dot2Anim}"/>
        <text x="245" y="349" font-size="12" font-weight="600" fill="${dot2TextColor}">${dot2Label}</text>

        <!-- Légende -->
        <g font-size="13" fill="#9AA4B2">
          <path d="M45 422 H69" stroke="#4ADE9B" stroke-width="3" stroke-dasharray="6 3"/>
          <text x="75" y="426">Trafic actif</text>
          <path d="M168 422 H192" stroke="#59636F" stroke-width="3" stroke-dasharray="2 4" stroke-linecap="round"/>
          <text x="198" y="426">Standby</text>
          <path d="M270 422 H294" stroke="#FF8A8A" stroke-width="3"/>
          <text x="300" y="426">Down</text>
        </g>
      </svg>
    `;
  }
}
