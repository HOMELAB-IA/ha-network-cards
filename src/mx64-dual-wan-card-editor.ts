import { LitElement, html, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import type { Mx64DualWanCardConfig, Hass } from './types.js';

const SCHEMA = [
  { name: 'wan1_status', selector: { entity: { domain: 'sensor' } } },
  { name: 'wan2_status', selector: { entity: { domain: 'sensor' } } },
];

const LABELS: Record<string, string> = {
  wan1_status: 'Statut WAN 1 (Meraki MX)',
  wan2_status: 'Statut WAN 2 (Meraki MX)',
};

const HELPERS: Record<string, string> = {
  wan1_status: "Valeurs attendues : active · ready · failed · not connected",
  wan2_status: "Valeurs attendues : active · ready · failed · not connected",
};

export class Mx64DualWanCardEditor extends LitElement {
  @property({ attribute: false }) hass?: Hass;
  @state() private _config?: Mx64DualWanCardConfig;

  setConfig(config: Mx64DualWanCardConfig) {
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
        .computeHelper=${(s: { name: string }) => HELPERS[s.name] ?? ''}
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
  customElements.define('mx64-dual-wan-card-editor', Mx64DualWanCardEditor);
}
