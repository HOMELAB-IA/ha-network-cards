/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=globalThis,e$2=t$1.ShadowRoot&&(void 0===t$1.ShadyCSS||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$4=new WeakMap;let n$3 = class n{constructor(t,e,o){if(this._$cssResult$=true,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$2&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$4.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$4.set(s,t));}return t}toString(){return this.cssText}};const r$4=t=>new n$3("string"==typeof t?t:t+"",void 0,s$2),i$3=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,s,o)=>e+(t=>{if(true===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1],t[0]);return new n$3(o,t,s$2)},S$1=(s,o)=>{if(e$2)s.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of o){const o=document.createElement("style"),n=t$1.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$4(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$2,defineProperty:e$1,getOwnPropertyDescriptor:h$1,getOwnPropertyNames:r$3,getOwnPropertySymbols:o$3,getPrototypeOf:n$2}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$2(t,s),b$1={attribute:true,type:String,converter:u$1,reflect:false,useDefault:false,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;let y$1 = class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=b$1){if(s.state&&(s.attribute=false),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=true),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),h=this.getPropertyDescriptor(t,i,s);void 0!==h&&e$1(this.prototype,t,h);}}static getPropertyDescriptor(t,s,i){const{get:e,set:r}=h$1(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get:e,set(s){const h=e?.call(this);r?.call(this,s),this.requestUpdate(t,h,i);},configurable:true,enumerable:true}}static getPropertyOptions(t){return this.elementProperties.get(t)??b$1}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$2(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=true,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...r$3(t),...o$3(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return  false===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=false,this.hasUpdated=false,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(true),this._$EO?.forEach(t=>t.hostConnected?.());}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.());}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$ET(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&true===i.reflect){const h=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==h?this.removeAttribute(e):this.setAttribute(e,h),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e;const r=h.fromAttribute(s,t.type);this[e]=r??this._$Ej?.get(e)??r,this._$Em=null;}}requestUpdate(t,s,i,e=false,h){if(void 0!==t){const r=this.constructor;if(false===e&&(h=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??f$1)(h,s)||i.useDefault&&i.reflect&&h===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,s,i);} false===this.isUpdatePending&&(this._$ES=this._$EP());}C(t,s,{useDefault:i,reflect:e,wrapped:h},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??s??this[t]),true!==h||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),true===e&&this._$Em!==t&&(this._$Eq??=new Set).add(t));}async _$EP(){this.isUpdatePending=true;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t){const{wrapped:t}=i,e=this[s];true!==t||this._$AL.has(s)||void 0===e||this.C(s,void 0,i,e);}}let t=false;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(s)):this._$EM();}catch(s){throw t=false,this._$EM(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=true,this.firstUpdated(t)),this.updated(t);}_$EM(){this._$AL=new Map,this.isUpdatePending=false;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return  true}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM();}updated(t){}firstUpdated(t){}};y$1.elementStyles=[],y$1.shadowRootOptions={mode:"open"},y$1[d$1("elementProperties")]=new Map,y$1[d$1("finalized")]=new Map,p$1?.({ReactiveElement:y$1}),(a$1.reactiveElementVersions??=[]).push("2.1.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,i$1=t=>t,s$1=t.trustedTypes,e=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,h="$lit$",o$2=`lit$${Math.random().toFixed(9).slice(2)}$`,n$1="?"+o$2,r$2=`<${n$1}>`,l=document,c=()=>l.createComment(""),a=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,d=t=>u(t)||"function"==typeof t?.[Symbol.iterator],f="[ \t\n\f\r]",v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,x=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),b=x(1),E=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),C=new WeakMap,P=l.createTreeWalker(l,129);function V(t,i){if(!u(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e?e.createHTML(i):i}const N=(t,i)=>{const s=t.length-1,e=[];let n,l=2===i?"<svg>":3===i?"<math>":"",c=v;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,f=0;for(;f<s.length&&(c.lastIndex=f,u=c.exec(s),null!==u);)f=c.lastIndex,c===v?"!--"===u[1]?c=_:void 0!==u[1]?c=m:void 0!==u[2]?(y.test(u[2])&&(n=RegExp("</"+u[2],"g")),c=p):void 0!==u[3]&&(c=p):c===p?">"===u[0]?(c=n??v,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?p:'"'===u[3]?$:g):c===$||c===g?c=p:c===_||c===m?c=v:(c=p,n=void 0);const x=c===p&&t[i+1].startsWith("/>")?" ":"";l+=c===v?s+r$2:d>=0?(e.push(a),s.slice(0,d)+h+s.slice(d)+o$2+x):s+o$2+(-2===d?i:x);}return [V(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),e]};class S{constructor({strings:t,_$litType$:i},e){let r;this.parts=[];let l=0,a=0;const u=t.length-1,d=this.parts,[f,v]=N(t,i);if(this.el=S.createElement(f,e),P.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=P.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(h)){const i=v[a++],s=r.getAttribute(t).split(o$2),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:l,name:e[2],strings:s,ctor:"."===e[1]?I:"?"===e[1]?L:"@"===e[1]?z:H}),r.removeAttribute(t);}else t.startsWith(o$2)&&(d.push({type:6,index:l}),r.removeAttribute(t));if(y.test(r.tagName)){const t=r.textContent.split(o$2),i=t.length-1;if(i>0){r.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)r.append(t[s],c()),P.nextNode(),d.push({type:2,index:++l});r.append(t[i],c());}}}else if(8===r.nodeType)if(r.data===n$1)d.push({type:2,index:l});else {let t=-1;for(;-1!==(t=r.data.indexOf(o$2,t+1));)d.push({type:7,index:l}),t+=o$2.length-1;}l++;}}static createElement(t,i){const s=l.createElement("template");return s.innerHTML=t,s}}function M(t,i,s=t,e){if(i===E)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=a(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(false),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=M(t,h._$AS(t,i.values),h,e)),i}class R{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??l).importNode(i,true);P.currentNode=e;let h=P.nextNode(),o=0,n=0,r=s[0];for(;void 0!==r;){if(o===r.index){let i;2===r.type?i=new k(h,h.nextSibling,this,t):1===r.type?i=new r.ctor(h,r.name,r.strings,this,t):6===r.type&&(i=new Z(h,this,t)),this._$AV.push(i),r=s[++n];}o!==r?.index&&(h=P.nextNode(),o++);}return P.currentNode=l,e}p(t){let i=0;for(const s of this._$AV) void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??true;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=M(this,t,i),a(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==E&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):d(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==A&&a(this._$AH)?this._$AA.nextSibling.data=t:this.T(l.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=S.createElement(V(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new R(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=C.get(t.strings);return void 0===i&&C.set(t.strings,i=new S(t)),i}k(t){u(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new k(this.O(c()),this.O(c()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(false,true,s);t!==this._$AB;){const s=i$1(t).nextSibling;i$1(t).remove(),t=s;}}setConnected(t){ void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}_$AI(t,i=this,s,e){const h=this.strings;let o=false;if(void 0===h)t=M(this,t,i,0),o=!a(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=M(this,e[s+n],i,n),r===E&&(r=this._$AH[n]),o||=!a(r)||r!==this._$AH[n],r===A?t=A:t!==A&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class I extends H{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}class L extends H{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==A);}}class z extends H{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=M(this,t,i,0)??A)===E)return;const s=this._$AH,e=t===A&&s!==A||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==A&&(s===A||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t);}}const B=t.litHtmlPolyfillSupport;B?.(S,k),(t.litHtmlVersions??=[]).push("3.3.3");const D=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new k(i.insertBefore(c(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=globalThis;class i extends y$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(r,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(true);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(false);}render(){return E}}i._$litElement$=true,i["finalized"]=true,s.litElementHydrateSupport?.({LitElement:i});const o$1=s.litElementPolyfillSupport;o$1?.({LitElement:i});(s.litElementVersions??=[]).push("4.2.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o={attribute:true,type:String,converter:u$1,reflect:false,hasChanged:f$1},r$1=(t=o,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),"setter"===n&&((t=Object.create(t)).wrapped=true),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t,true,r);},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t,true,r);}}throw Error("Unsupported decorator location: "+n)};function n(t){return (e,o)=>"object"==typeof o?r$1(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function r(r){return n({...r,state:true,attribute:false})}

function getState(hass, entityId) {
    return hass.states[entityId]?.state ?? '';
}
function getAttr(hass, entityId, attr) {
    return hass.states[entityId]?.attributes[attr];
}
function getFloat(hass, entityId) {
    const val = parseFloat(getState(hass, entityId));
    return isNaN(val) ? 0 : val;
}
function isOn(hass, entityId) {
    return getState(hass, entityId) === 'on';
}
function formatMbps(val) {
    return Math.round(val).toLocaleString('fr-FR');
}
function formatDecimal(val, decimals = 1) {
    return val.toFixed(decimals).replace('.', ',');
}
function maskIp(ip) {
    const p = ip.split('.');
    if (p.length !== 4)
        return ip;
    return `${p[0]}.xxx.xxx.${p[3]}`;
}
function formatUptime(seconds) {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    if (days > 0)
        return `${days} j ${String(hours).padStart(2, '0')} h`;
    const mins = Math.floor((seconds % 3600) / 60);
    return `${hours} h ${String(mins).padStart(2, '0')} min`;
}
function clampPct(value, max) {
    if (max <= 0)
        return 0;
    return Math.min(100, Math.max(0, Math.round((value / max) * 100)));
}
function merakiStatusColor(state) {
    switch (state.toLowerCase()) {
        case 'online':
            return '#4ADE9B';
        case 'alerting':
            return '#FBBF24';
        case 'offline':
            return '#FF8A8A';
        default:
            return '#9AA4B2';
    }
}
function merakiStatusLabel(state) {
    switch (state.toLowerCase()) {
        case 'online':
            return 'Online';
        case 'alerting':
            return 'Alerte';
        case 'offline':
            return 'Hors ligne';
        default:
            return 'Dormant';
    }
}

const iconGlobe = b `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18"/><path d="M12 3a14 14 0 0 0 0 18"/></svg>`;
const iconArrowDown = b `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v16"/><path d="M6 14l6 6 6-6"/></svg>`;
const iconArrowUp = b `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20V4"/><path d="M6 10l6-6 6 6"/></svg>`;
const iconCloud = b `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a5 5 0 0 1-.6-9.96A6 6 0 0 1 18 9a4.5 4.5 0 0 1-.5 9H7z"/></svg>`;
const iconPower = b `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v9"/><path d="M6.3 7.3a8 8 0 1 0 11.4 0"/></svg>`;
const iconRefresh = b `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 4v5h-5"/></svg>`;
const iconTopology = b `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="5" rx="1"/><rect x="3" y="16" width="6" height="5" rx="1"/><rect x="15" y="16" width="6" height="5" rx="1"/><path d="M12 8v4"/><path d="M6 16v-4h12v4"/></svg>`;
const iconSwitch = b `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="10" rx="2"/><path d="M6 11h1"/><path d="M9 11h1"/><path d="M12 11h1"/><path d="M15 11h1"/><path d="M6 14h12"/></svg>`;
const iconWifi = b `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5a10 10 0 0 1 14 0"/><path d="M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r="1"/><path d="M2 9a14 14 0 0 1 20 0"/></svg>`;
const iconExternalLink = b `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7"/><path d="M8 7h9v9"/></svg>`;

class WanCard extends i {
    static getConfigElement() {
        return document.createElement('wan-card-editor');
    }
    static getStubConfig() {
        return {
            type: 'custom:wan-card',
            wan_status: '',
            speed_down: '',
            speed_up: '',
            latency: '',
            jitter: '',
            isp: '',
            ip_public: '',
        };
    }
    setConfig(config) {
        if (!config.wan_status)
            throw new Error('wan_status est requis');
        if (!config.speed_down)
            throw new Error('speed_down est requis');
        if (!config.speed_up)
            throw new Error('speed_up est requis');
        this._config = config;
    }
    static getCardSize() {
        return 6;
    }
    render() {
        if (!this._config || !this.hass)
            return A;
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
        return b `
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
            ? b `
                    <div class="bar-track">
                      <div class="bar-fill-down" style="width:${downPct}%"></div>
                    </div>
                    <div class="bar-pct">${downPct} % du débit GPON</div>
                  `
            : A}
            </div>
            <div class="speed-block">
              <div class="speed-label">${iconArrowUp} Montant · P90</div>
              <div>
                <span class="speed-value speed-up">${formatMbps(speedUp)}</span>
                <span class="speed-unit">Mb/s</span>
              </div>
              ${gponTx > 0
            ? b `
                    <div class="bar-track">
                      <div class="bar-fill-up" style="width:${upPct}%"></div>
                    </div>
                    <div class="bar-pct">${upPct} % du débit GPON</div>
                  `
            : A}
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
            ? b `<div class="detail-row">
                  <span class="detail-key">IP publique</span>
                  <span class="detail-val">${ip}</span>
                </div>`
            : A}
            ${gponRx > 0 && gponTx > 0
            ? b `<div class="detail-row">
                  <span class="detail-key">Débit GPON</span>
                  <span class="detail-val">↓ ${formatMbps(gponRx)} · ↑ ${formatMbps(gponTx)} Mb/s</span>
                </div>`
            : A}
            ${optRx !== null && optTx !== null
            ? b `<div class="detail-row">
                  <span class="detail-key">Puissance optique</span>
                  <span class="detail-val">Rx ${formatDecimal(optRx)} · Tx ${formatDecimal(optTx)} dBm</span>
                </div>`
            : A}
            ${uptime !== null
            ? b `<div class="detail-row">
                  <span class="detail-key">Uptime Livebox</span>
                  <span class="detail-val">${formatUptime(uptime)}</span>
                </div>`
            : A}
            ${dhcp !== null
            ? b `<div class="detail-row">
                  <span class="detail-key">Baux DHCP · invités</span>
                  <span class="detail-val">${dhcp} · ${dhcpGuest ?? '—'}</span>
                </div>`
            : A}
          </div>

          <!-- Cloudflared -->
          ${cfVersion !== null
            ? b `
                <div class="divider"></div>
                <div class="cloudflared-row">
                  <div class="cloudflared-left">
                    <span style="color:#9aa4b2">${iconCloud}</span>
                    <div>
                      <div class="cloudflared-name">Cloudflared</div>
                      <div class="cloudflared-meta">
                        App HA · v${cfVersion}
                        ${cfLatest && cfLatest !== cfVersion ? b ` → v${cfLatest}` : ' · à jour'}
                      </div>
                    </div>
                  </div>
                  ${cfRunning !== null
                ? b `<div class="badge ${cfRunning ? 'badge-online' : 'badge-offline'}">
                        <div class="dot ${cfRunning ? 'dot-online' : 'dot-offline'}"></div>
                        ${cfRunning ? 'En marche' : 'Arrêté'}
                      </div>`
                : A}
                </div>
              `
            : A}

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
    _triggerSpeedTest() {
        if (!this._config?.speedtest_trigger || !this.hass)
            return;
        this.hass.callService('homeassistant', 'update_entity', {
            entity_id: this._config.speedtest_trigger,
        });
    }
    _restartLivebox() {
        if (!this._config?.restart_button || !this.hass)
            return;
        this.hass.callService('button', 'press', {
            entity_id: this._config.restart_button,
        });
    }
}
WanCard.styles = i$3 `
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
__decorate([
    n({ attribute: false })
], WanCard.prototype, "hass", void 0);
__decorate([
    r()
], WanCard.prototype, "_config", void 0);

class LanMerakiCard extends i {
    static getConfigElement() {
        return document.createElement('lan-meraki-card-editor');
    }
    static getStubConfig() {
        return { type: 'custom:lan-meraki-card', devices: [] };
    }
    setConfig(config) {
        if (!config.devices || !Array.isArray(config.devices))
            throw new Error('devices est requis');
        this._config = config;
    }
    static getCardSize() {
        return 4;
    }
    render() {
        if (!this._config || !this.hass)
            return A;
        const cfg = this._config;
        const hass = this.hass;
        const statuses = cfg.devices.map((d) => getState(hass, d.entity).toLowerCase());
        const online = statuses.filter((s) => s === 'online').length;
        const alerting = statuses.filter((s) => s === 'alerting').length;
        const offline = statuses.filter((s) => s === 'offline').length;
        const dormant = statuses.filter((s) => s !== 'online' && s !== 'alerting' && s !== 'offline').length;
        const total = cfg.devices.length;
        return b `
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
            return b `
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
            ? b `
                <button class="btn-link" @click=${() => window.open(cfg.dashboard_url, '_blank')}>
                  Ouvrir le dashboard Meraki ${iconExternalLink}
                </button>
              `
            : A}
        </div>
      </ha-card>
    `;
    }
    _summaryItem(count, label, color) {
        return b `
      <div class="summary-item">
        <div class="summary-count" style="color:${count > 0 && label !== 'En ligne' ? color : count > 0 ? color : '#e6edf3'}">${count}</div>
        <div class="summary-label">${label}</div>
      </div>
    `;
    }
}
LanMerakiCard.styles = i$3 `
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
__decorate([
    n({ attribute: false })
], LanMerakiCard.prototype, "hass", void 0);
__decorate([
    r()
], LanMerakiCard.prototype, "_config", void 0);

class Mx64DualWanCard extends i {
    static getConfigElement() {
        return document.createElement('mx64-dual-wan-card-editor');
    }
    static getStubConfig() {
        return { type: 'custom:mx64-dual-wan-card' };
    }
    setConfig(config) {
        this._config = config;
    }
    static getCardSize() {
        return 5;
    }
    render() {
        if (!this._config)
            return A;
        const wan1 = this._config.wan1_status
            ? getState(this.hass, this._config.wan1_status)
            : 'active';
        const isFailover = wan1 === 'failed' || wan1 === 'not connected';
        return b `<ha-card>${this._renderSvg(isFailover)}</ha-card>`;
    }
    _renderSvg(failover) {
        const fo = failover;
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
        return b `
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
Mx64DualWanCard.styles = i$3 `
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
__decorate([
    n({ attribute: false })
], Mx64DualWanCard.prototype, "hass", void 0);
__decorate([
    r()
], Mx64DualWanCard.prototype, "_config", void 0);

const SCHEMA$2 = [
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
const LABELS$2 = {
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
class WanCardEditor extends i {
    setConfig(config) {
        this._config = config;
    }
    render() {
        if (!this._config)
            return A;
        return b `
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${SCHEMA$2}
        .computeLabel=${(s) => LABELS$2[s.name] ?? s.name}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
    }
    _valueChanged(ev) {
        this.dispatchEvent(new CustomEvent('config-changed', {
            detail: { config: ev.detail.value },
            bubbles: true,
            composed: true,
        }));
    }
}
__decorate([
    n({ attribute: false })
], WanCardEditor.prototype, "hass", void 0);
__decorate([
    r()
], WanCardEditor.prototype, "_config", void 0);
if (typeof customElements !== 'undefined') {
    customElements.define('wan-card-editor', WanCardEditor);
}

const SCHEMA$1 = [
    { name: 'dashboard_url', selector: { text: { type: 'url' } } },
];
const LABELS$1 = {
    dashboard_url: 'URL du dashboard Meraki',
};
const HELPERS$1 = {
    dashboard_url: 'Ex: https://dashboard.meraki.com — affiché comme lien en bas de la carte.',
};
class LanMerakiCardEditor extends i {
    setConfig(config) {
        this._config = config;
    }
    render() {
        if (!this._config)
            return A;
        return b `
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${SCHEMA$1}
        .computeLabel=${(s) => LABELS$1[s.name] ?? s.name}
        .computeHelper=${(s) => HELPERS$1[s.name] ?? ''}
        @value-changed=${this._valueChanged}
      ></ha-form>
      <p style="font-size:0.85em;color:var(--secondary-text-color);margin:12px 4px 0">
        La liste des appareils (<code>devices</code>) doit être configurée en YAML.
      </p>
    `;
    }
    _valueChanged(ev) {
        this.dispatchEvent(new CustomEvent('config-changed', {
            detail: { config: ev.detail.value },
            bubbles: true,
            composed: true,
        }));
    }
}
__decorate([
    n({ attribute: false })
], LanMerakiCardEditor.prototype, "hass", void 0);
__decorate([
    r()
], LanMerakiCardEditor.prototype, "_config", void 0);
if (typeof customElements !== 'undefined') {
    customElements.define('lan-meraki-card-editor', LanMerakiCardEditor);
}

const SCHEMA = [
    { name: 'wan1_status', selector: { entity: { domain: 'sensor' } } },
    { name: 'wan2_status', selector: { entity: { domain: 'sensor' } } },
];
const LABELS = {
    wan1_status: 'Statut WAN 1 (Meraki MX)',
    wan2_status: 'Statut WAN 2 (Meraki MX)',
};
const HELPERS = {
    wan1_status: "Valeurs attendues : active · ready · failed · not connected",
    wan2_status: "Valeurs attendues : active · ready · failed · not connected",
};
class Mx64DualWanCardEditor extends i {
    setConfig(config) {
        this._config = config;
    }
    render() {
        if (!this._config)
            return A;
        return b `
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${SCHEMA}
        .computeLabel=${(s) => LABELS[s.name] ?? s.name}
        .computeHelper=${(s) => HELPERS[s.name] ?? ''}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
    }
    _valueChanged(ev) {
        this.dispatchEvent(new CustomEvent('config-changed', {
            detail: { config: ev.detail.value },
            bubbles: true,
            composed: true,
        }));
    }
}
__decorate([
    n({ attribute: false })
], Mx64DualWanCardEditor.prototype, "hass", void 0);
__decorate([
    r()
], Mx64DualWanCardEditor.prototype, "_config", void 0);
if (typeof customElements !== 'undefined') {
    customElements.define('mx64-dual-wan-card-editor', Mx64DualWanCardEditor);
}

if (typeof customElements !== 'undefined') {
    customElements.define('wan-card', WanCard);
    customElements.define('lan-meraki-card', LanMerakiCard);
    customElements.define('mx64-dual-wan-card', Mx64DualWanCard);
}
