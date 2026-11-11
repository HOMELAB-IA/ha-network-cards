import { WanCard } from './wan-card.js';
import { LanMerakiCard } from './lan-meraki-card.js';
import { Mx64DualWanCard } from './mx64-dual-wan-card.js';

if (typeof customElements !== 'undefined') {
  customElements.define('wan-card', WanCard);
  customElements.define('lan-meraki-card', LanMerakiCard);
  customElements.define('mx64-dual-wan-card', Mx64DualWanCard);
}
