import { WanCard } from './wan-card.js';
import { LanMerakiCard } from './lan-meraki-card.js';
import { Mx64DualWanCard } from './mx64-dual-wan-card.js';
import './wan-card-editor.js';
import './lan-meraki-card-editor.js';
import './mx64-dual-wan-card-editor.js';

if (typeof customElements !== 'undefined') {
  customElements.define('wan-card', WanCard);
  customElements.define('lan-meraki-card', LanMerakiCard);
  customElements.define('mx64-dual-wan-card', Mx64DualWanCard);
}
