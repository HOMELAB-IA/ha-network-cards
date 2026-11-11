import { LitElement, html, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import type { LanMerakiCardConfig, Hass } from './types.js';

const SCHEMA = [
  { name: 'dashboard_url', selector: { text: { type: 'url' } } },
];

const LABELS: Record<string, string> = {
  dashboard_url: 'URL du dashboard Meraki',
};

const HELPERS: Record<string, string> = {
  dashboard_url: 'Ex: https://dashboard.meraki.com — affiché comme lien en bas de la carte.',
};

export class LanMerakiCardEditor extends LitElement {
  @property({ attribute: false }) hass?: Hass;
  @state() private _config?: LanMerakiCardConfig;

  setConfig(config: LanMerakiCardConfig) {
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
      <p style="font-size:0.85em;color:var(--secondary-text-color);margin:12px 4px 0">
        La liste des appareils (<code>devices</code>) doit être configurée en YAML.
      </p>
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
  customElements.define('lan-meraki-card-editor', LanMerakiCardEditor);
}
