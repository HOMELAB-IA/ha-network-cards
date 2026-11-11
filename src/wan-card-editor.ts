import { LitElement, html, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import type { WanCardConfig, Hass } from './types.js';

const SCHEMA = [
  { name: 'wan_status', selector: { entity: { domain: 'binary_sensor' } } },
  { name: 'speed_down', selector: { entity: { domain: 'sensor' } } },
  { name: 'speed_up', selector: { entity: { domain: 'sensor' } } },
  { name: 'latency', selector: { entity: { domain: 'sensor' } } },
  { name: 'jitter', selector: { entity: { domain: 'sensor' } } },
  { name: 'isp', selector: { entity: { domain: 'sensor' } } },
  { name: 'ip_public', selector: { entity: { domain: 'sensor' } } },
  { name: 'gpon_rx', selector: { entity: { domain: 'sensor' } } },
  { name: 'gpon_tx', selector: { entity: { domain: 'sensor' } } },
  { name: 'optical_rx', selector: { entity: { domain: 'sensor' } } },
  { name: 'optical_tx', selector: { entity: { domain: 'sensor' } } },
  { name: 'uptime', selector: { entity: { domain: 'sensor' } } },
  { name: 'dhcp_leases', selector: { entity: { domain: 'sensor' } } },
  { name: 'dhcp_guest', selector: { entity: { domain: 'sensor' } } },
  { name: 'restart_button', selector: { entity: { domain: 'button' } } },
  { name: 'cloudflared_version', selector: { entity: { domain: 'update' } } },
  { name: 'cloudflared_running', selector: { entity: { domain: 'binary_sensor' } } },
  { name: 'speedtest_trigger', selector: { entity: { domain: 'sensor' } } },
];

const LABELS: Record<string, string> = {
  wan_status: 'État WAN (binary_sensor) ✱',
  speed_down: 'Débit descendant Cloudflare Speed Test ✱',
  speed_up: 'Débit montant Cloudflare Speed Test ✱',
  latency: 'Latence ✱',
  jitter: 'Jitter ✱',
  isp: 'FAI ✱',
  ip_public: 'IP publique ✱',
  gpon_rx: 'Débit GPON max descendant',
  gpon_tx: 'Débit GPON max montant',
  optical_rx: 'Puissance optique RX',
  optical_tx: 'Puissance optique TX',
  uptime: 'Uptime de la box',
  dhcp_leases: 'Baux DHCP LAN',
  dhcp_guest: 'Baux DHCP invités',
  restart_button: 'Bouton de redémarrage Livebox',
  cloudflared_version: 'Mise à jour cloudflared',
  cloudflared_running: 'État cloudflared',
  speedtest_trigger: 'Entité pour déclencher un speed test',
};

export class WanCardEditor extends LitElement {
  @property({ attribute: false }) hass?: Hass;
  @state() private _config?: WanCardConfig;

  setConfig(config: WanCardConfig) {
    this._config = config;
  }

  render() {
    if (!this._config) return nothing;
    return html`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${SCHEMA}
        .computeLabel=${(s: { name: string }) => LABELS[s.name] ?? s.name}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
  }

  private _valueChanged(ev: CustomEvent) {
    this.dispatchEvent(
      new CustomEvent('config-changed', {
        detail: { config: ev.detail.value },
        bubbles: true,
        composed: true,
      }),
    );
  }
}

if (typeof customElements !== 'undefined') {
  customElements.define('wan-card-editor', WanCardEditor);
}
