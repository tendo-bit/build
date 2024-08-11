"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[6719],{13310:(e,t,n)=>{n.d(t,{Z:()=>d});var i=n(45779),o=n(68090),r=n.n(o);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=(0,i.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,r=e.size,l=void 0===r?24:r,d=a(e,["color","size"]);return i.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.createElement("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),i.createElement("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}))}));l.propTypes={color:r().string,size:r().oneOfType([r().string,r().number])},l.displayName="Inbox";const d=l},27279:(e,t,n)=>{n.d(t,{r:()=>d});var i,o,r,s=n(45779);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a.apply(this,arguments)}function l(e,t){let{title:n,titleId:l,...d}=e;return s.createElement("svg",a({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":l},d),n?s.createElement("title",{id:l},n):null,i||(i=s.createElement("path",{d:"M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),o||(o=s.createElement("path",{d:"M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),r||(r=s.createElement("path",{d:"M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}const d=s.forwardRef(l);n.p},17889:(e,t,n)=>{n.d(t,{q:()=>i,v:()=>g});var i,o=n(92936),r=n(45779),s=n(43454),a=n(14411),l=n(54972),d=n(27279),c=n(30520),p=n(1356);!function(e){e.LEFT="LEFT",e.RIGHT="RIGHT"}(i||(i={}));const u=(0,a.default)(d.r).withConfig({displayName:"Menu__StyledMenuIcon",componentId:"sc-6640503f-0"})`
  path {
    stroke: ${({theme:e})=>e.neutral1};
  }
`,h=a.default.div.withConfig({displayName:"Menu__StyledMenu",componentId:"sc-6640503f-1"})`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;
`,m=a.default.span.withConfig({displayName:"Menu__MenuFlyout",componentId:"sc-6640503f-2"})`
  min-width: 196px;
  max-height: 350px;
  overflow: auto;
  background-color: ${({theme:e})=>e.surface1};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 12px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  position: absolute;
  top: 3rem;
  z-index: 100;

  ${({flyoutAlignment:e=i.RIGHT})=>e===i.RIGHT?a.css`
          right: 0rem;
        `:a.css`
          left: 0rem;
        `};
`,f=(0,a.default)(l.dL).withConfig({displayName:"Menu__MenuItem",componentId:"sc-6640503f-3"})`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 0.5rem;
  justify-content: space-between;
  color: ${({theme:e})=>e.neutral2};
  :hover {
    color: ${({theme:e})=>e.neutral1};
    cursor: pointer;
    text-decoration: none;
  }
`,x=(0,a.default)(s.rU).withConfig({displayName:"Menu__InternalMenuItem",componentId:"sc-6640503f-4"})`
  flex: 1;
  padding: 0.5rem 0.5rem;
  color: ${({theme:e})=>e.neutral2};
  width: max-content;
  text-decoration: none;
  :hover {
    color: ${({theme:e})=>e.neutral1};
    cursor: pointer;
    text-decoration: none;
  }
  > svg {
    margin-right: 8px;
  }
`,y=(0,a.default)(f).withConfig({displayName:"Menu__ExternalMenuItem",componentId:"sc-6640503f-5"})`
  width: max-content;
  text-decoration: none;
`,g=({modal:e,flyoutAlignment:t=i.RIGHT,ToggleUI:n,menuItems:s,...a})=>{const l=(0,r.useRef)(),d=(0,p.Wt)(e),f=(0,p.xk)(e);(0,c.t)(l,d?f:void 0);const g=n||u;return(0,o.jsxs)(h,{ref:l,...a,children:[(0,o.jsx)(g,{onClick:f}),d&&(0,o.jsx)(m,{flyoutAlignment:t,onClick:f,children:s.map((({content:e,link:t,external:n},i)=>n?(0,o.jsx)(y,{href:t,children:e},i):(0,o.jsx)(x,{to:t,children:e},i)))})]})}},81069:(e,t,n)=>{n.d(t,{G:()=>a});var i=n(57852),o=n(95625),r=n(39063),s=n(590);function a(){const{chainId:e}=(0,s.m)(),t=(0,r.ye)(o.FeatureFlags.V2Everywhere);return e&&(t&&i.Ep.includes(e)||i.$6.includes(e))}},83755:(e,t,n)=>{n.r(t),n.d(t,{default:()=>He});var i=n(92936),o=n(5985),r=n(26729),s=n(47583),a=n(25320),l=n(69780),d=n(44591),c=n(17889),p=n(90652),u=n(6823),h=n(45779),m=n(14411),f=n(66869);const x=m.default.div.withConfig({displayName:"PositionList__DesktopHeader",componentId:"sc-14f71bf4-0"})`
  display: none;
  font-size: 14px;
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};

  @media screen and (min-width: ${f.e.deprecated_upToSmall}px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
    & > div:last-child {
      text-align: right;
      margin-right: 12px;
    }
  }
`,y=m.default.div.withConfig({displayName:"PositionList__MobileHeader",componentId:"sc-14f71bf4-1"})`
  font-weight: medium;
  padding: 8px;
  font-weight: 535;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};

  @media screen and (min-width: ${f.e.deprecated_upToSmall}px) {
    display: none;
  }

  @media screen and (max-width: ${f.e.deprecated_upToExtraSmall}px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`,g=m.default.div.withConfig({displayName:"PositionList__ToggleWrap",componentId:"sc-14f71bf4-2"})`
  display: flex;
  flex-direction: row;
  align-items: center;
`,v=m.default.button.withConfig({displayName:"PositionList__ToggleLabel",componentId:"sc-14f71bf4-3"})`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${({theme:e})=>e.accent1};
  font-size: 14px;
  font-weight: 485;
`;function b({positions:e,setUserHideClosedPositions:t,userHideClosedPositions:n}){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(x,{children:[(0,i.jsxs)("div",{children:[(0,i.jsx)(u.cC,{children:"Your positions"}),e&&" ("+e.length+")"]}),(0,i.jsx)(v,{id:"desktop-hide-closed-positions",onClick:()=>{t(!n)},children:n?(0,i.jsx)(u.cC,{children:"Show closed positions"}):(0,i.jsx)(u.cC,{children:"Hide closed positions"})})]}),(0,i.jsxs)(y,{children:[(0,i.jsx)(u.cC,{children:"Your positions"}),(0,i.jsx)(g,{children:(0,i.jsx)(v,{onClick:()=>{t(!n)},children:n?(0,i.jsx)(u.cC,{children:"Show closed positions"}):(0,i.jsx)(u.cC,{children:"Hide closed positions"})})})]}),e.map((e=>(0,i.jsx)(p.Z,{...e},e.tokenId.toString())))]})}var w=n(94284),j=n(10672),C=n(57852),T=n(60910),k=n(78070),_=n(51128),O=n(22105);function I(e,t){return e.filter((e=>!t.includes(e)))}var P=class extends _.l{#e;#t;#n;#i;#o;constructor(e,t,n){super(),this.#e=e,this.#n=[],this.#i=[],this.#t=[],this.setQueries(t)}onSubscribe(){1===this.listeners.size&&this.#i.forEach((e=>{e.subscribe((t=>{this.#r(e,t)}))}))}onUnsubscribe(){this.listeners.size||this.destroy()}destroy(){this.listeners=new Set,this.#i.forEach((e=>{e.destroy()}))}setQueries(e,t,n){this.#n=e,T.V.batch((()=>{const e=this.#i,t=this.#s(this.#n);t.forEach((e=>e.observer.setOptions(e.defaultedQueryOptions,n)));const i=t.map((e=>e.observer)),o=i.map((e=>e.getCurrentResult())),r=i.some(((t,n)=>t!==e[n]));(e.length!==i.length||r)&&(this.#i=i,this.#t=o,this.hasListeners()&&(I(e,i).forEach((e=>{e.destroy()})),I(i,e).forEach((e=>{e.subscribe((t=>{this.#r(e,t)}))})),this.#a()))}))}getCurrentResult(){return this.#t}getQueries(){return this.#i.map((e=>e.getCurrentQuery()))}getObservers(){return this.#i}getOptimisticResult(e,t){const n=this.#s(e),i=n.map((e=>e.observer.getOptimisticResult(e.defaultedQueryOptions)));return[i,e=>this.#l(e??i,t),()=>n.map(((e,t)=>{const o=i[t];return e.defaultedQueryOptions.notifyOnChangeProps?o:e.observer.trackResult(o,(e=>{n.forEach((t=>{t.observer.trackProp(e)}))}))}))]}#l(e,t){return t?(0,O.Q$)(this.#o,t(e)):e}#s(e){const t=this.#i,n=new Map(t.map((e=>[e.options.queryHash,e]))),i=e.map((e=>this.#e.defaultQueryOptions(e))),o=i.flatMap((e=>{const t=n.get(e.queryHash);return null!=t?[{defaultedQueryOptions:e,observer:t}]:[]})),r=new Set(o.map((e=>e.defaultedQueryOptions.queryHash))),s=i.filter((e=>!r.has(e.queryHash))),a=e=>{const t=this.#e.defaultQueryOptions(e);return this.#i.find((e=>e.options.queryHash===t.queryHash))??new k.z(this.#e,t)},l=s.map((e=>({defaultedQueryOptions:e,observer:a(e)})));return o.concat(l).sort(((e,t)=>i.indexOf(e.defaultedQueryOptions)-i.indexOf(t.defaultedQueryOptions)))}#r(e,t){const n=this.#i.indexOf(e);-1!==n&&(this.#t=function(e,t,n){const i=e.slice(0);return i[t]=n,i}(this.#t,n,t),this.#a())}#a(){T.V.batch((()=>{this.listeners.forEach((e=>{e(this.#t)}))}))}},$=n(95042),L=n(2143),N=n(43602),E=n(67221),M=n(40583);var z=n(70408),q=n(55238),S=n(18569),R=n(70854);function H(e){if(!e)return!1;return new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?").test(e)}var V=n(72993),B=n(51371),A=n(84938),Q=n(22286);const W=new B.vU(Q);function Z(e,t,n,i,o,r,s){try{var a=e[r](s),l=a.value}catch(d){return void n(d)}a.done?t(l):Promise.resolve(l).then(i,o)}function G(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var r=e.apply(t,n);function s(e){Z(r,i,o,s,a,"next",e)}function a(e){Z(r,i,o,s,a,"throw",e)}s(void 0)}))}}function U(e){const t=(0,V.x)(),n=(0,h.useMemo)((()=>function(e){return Array.from(new Set(e.reduce(((e,t)=>e.concat(t.token0,t.token1)),[])))}(e)),[e]),i=function({queries:e,...t},n){const i=(0,$.NL)(n),o=(0,L.S)(),r=(0,N._)(),s=h.useMemo((()=>e.map((e=>{const t=i.defaultQueryOptions(e);return t._optimisticResults=o?"isRestoring":"optimistic",t}))),[e,i,o]);s.forEach((e=>{(0,M.Fb)(e),(0,E.pf)(e,r)})),(0,E.JN)(r);const[a]=h.useState((()=>new P(i,s,t))),[l,d,c]=a.getOptimisticResult(s,t.combine);h.useSyncExternalStore(h.useCallback((e=>o?()=>{}:a.subscribe(T.V.batchCalls(e))),[a,o]),(()=>a.getCurrentResult()),(()=>a.getCurrentResult())),h.useEffect((()=>{a.setQueries(s,t,{listeners:!1})}),[s,t,a]);const p=l.some(((e,t)=>(0,M.SB)(s[t],e)))?l.flatMap(((e,t)=>{const n=s[t];if(n){const t=new k.z(i,n);if((0,M.SB)(n,e))return(0,M.j8)(n,t,r);(0,M.Z$)(e,o)&&(0,M.j8)(n,t,r)}return[]})):[];if(p.length>0)throw Promise.all(p);const u=l.find(((e,t)=>{const n=s[t];return n&&(0,E.KJ)({result:e,errorResetBoundary:r,throwOnError:n.throwOnError,query:i.getQueryCache().get(n.queryHash)})}));if(u?.error)throw u.error;return d(c())}({queries:e.map((e=>function(e,t){return(0,S.TJ)({queryKey:["positionCurrencyInfo",e],queryFn:G((function*(){const n=[z.l.query({query:R.vVl,variables:{address:e.token0,chain:(0,C.tq)({chainId:t})},fetchPolicy:"cache-first"}),z.l.query({query:R.vVl,variables:{address:e.token1,chain:(0,C.tq)({chainId:t})},fetchPolicy:"cache-first"})],[i,o]=yield Promise.all(n);return{position:e,currency0Info:(0,q.l)(i.data.token),currency1Info:(0,q.l)(o.data.token)}}))})}(e,t)))}),o=(r=n,s="symbol",(0,A._Y)(r,W,s,void 0,A.DB));var r,s;const a=(0,h.useMemo)((()=>{const e={};for(let i=0;i<n.length;i++){var t;const r=null===(t=o[i])||void 0===t?void 0:t.result;if(!r)continue;e[n[i]]=r}return e}),[n,o]);return(0,h.useMemo)((()=>i.map((e=>{var t,n,i,o,r,s,l,d;if(!e.data)return;const{currency0Info:c,currency1Info:p,position:u}=e.data;let h=0;if((null===(t=c)||void 0===t?void 0:t.isSpam)||(null===(n=c)||void 0===n?void 0:n.safetyLevel)!==R.wEf.Verified||h++,(null===(i=p)||void 0===i?void 0:i.isSpam)||(null===(o=p)||void 0===o?void 0:o.safetyLevel)!==R.wEf.Verified||h++,2===h)return u;let m=0;return H((null===(s=c)||void 0===s||null===(r=s.currency)||void 0===r?void 0:r.symbol)??a[u.token0])&&m++,H((null===(d=p)||void 0===d||null===(l=d.currency)||void 0===l?void 0:l.symbol)??a[u.token1])&&m++,1===h&&m<2||0===m?u:void 0})).filter((e=>!!e))),[a,i])}var F=n(81069),D=n(40413),X=n(75512),J=n(57221),Y=n(13310),K=n(74928),ee=n(68090),te=n.n(ee);function ne(){return ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},ne.apply(this,arguments)}function ie(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var oe=(0,h.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,o=e.size,r=void 0===o?24:o,s=ie(e,["color","size"]);return h.createElement("svg",ne({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),h.createElement("polygon",{points:"12 2 2 7 12 12 22 7 12 2"}),h.createElement("polyline",{points:"2 17 12 22 22 17"}),h.createElement("polyline",{points:"2 12 12 17 22 12"}))}));oe.propTypes={color:te().string,size:te().oneOfType([te().string,te().number])},oe.displayName="Layers";const re=oe;function se(){return se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},se.apply(this,arguments)}function ae(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var le=(0,h.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,o=e.size,r=void 0===o?24:o,s=ae(e,["color","size"]);return h.createElement("svg",se({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),h.createElement("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),h.createElement("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"}))}));le.propTypes={color:te().string,size:te().oneOfType([te().string,te().number])},le.displayName="BookOpen";const de=le;var ce=n(86082),pe=n(43454),ue=n(29021),he=n(28098),me=n(54972),fe=n(76078);const xe=m.default.section.withConfig({displayName:"CTACards__CTASection",componentId:"sc-367748bb-0"})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  opacity: 0.8;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    grid-template-columns: auto;
    grid-template-rows: auto;
  `};
`,ye=m.css`
  padding: 16px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.surface3};
  text-decoration: none;

  * {
    color: ${({theme:e})=>e.neutral1};
    text-decoration: none !important;
  }

  :hover {
    border: 1px solid ${({theme:e})=>e.surface3};

    * {
      text-decoration: none !important;
    }
  }
`,ge=(0,m.default)(me.dL).withConfig({displayName:"CTACards__CTAExternalLink",componentId:"sc-367748bb-1"})`
  ${ye}
`,ve=(0,m.default)(me.m_).withConfig({displayName:"CTACards__CTALink",componentId:"sc-367748bb-2"})`
  ${ye}
`,be=(0,m.default)(me.Tv.DeprecatedLabel).withConfig({displayName:"CTACards__HeaderText",componentId:"sc-367748bb-3"})`
  align-items: center;
  display: flex;
  font-size: 16px;
  font-weight: 535 !important;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    font-size: 16px;
  `};
`,we=(0,m.default)(d.Tz).withConfig({displayName:"CTACards__ResponsiveColumn",componentId:"sc-367748bb-4"})`
  grid-template-columns: 1fr;
  width: 100%;
  gap: 8px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    gap: 8px;
  `};
  justify-content: space-between;
`;function je(){const e=(0,V.x)(),t=C.T_[(0,C.Jw)(e)??fe.ChainId.MAINNET];return(0,i.jsxs)(xe,{children:[(0,i.jsx)(ge,{href:"https://support.uniswap.org/hc/en-us/categories/8122334631437-Providing-Liquidity-",children:(0,i.jsxs)(we,{children:[(0,i.jsxs)(be,{children:[(0,i.jsx)(u.cC,{children:"Learn about providing liquidity"})," \u2197"]}),(0,i.jsx)(me.Tv.DeprecatedBody,{style:{alignItems:"center",display:"flex",fontWeight:485},children:(0,i.jsx)(u.cC,{children:"Check out our v3 LP walkthrough and migration guides."})})]})}),(0,i.jsx)(ve,{"data-testid":"cta-poolslink",to:`/explore/pools/${t.urlParam}`,children:(0,i.jsxs)(we,{children:[(0,i.jsxs)(be,{style:{alignSelf:"flex-start"},children:[(0,i.jsx)(u.cC,{children:"Top pools"})," \u2197"]}),(0,i.jsx)(me.Tv.DeprecatedBody,{style:{alignSelf:"flex-start",fontWeight:485},children:(0,i.jsx)(u.cC,{children:"Explore Uniswap Analytics."})})]})})]})}var Ce=n(40926);const Te=(0,m.default)(d.Tz).withConfig({displayName:"Pool__PageWrapper",componentId:"sc-1cfc2685-0"})`
  padding: 68px 8px 0px;
  max-width: 870px;
  width: 100%;

  @media (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    max-width: 800px;
    padding-top: 48px;
  }

  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    max-width: 500px;
    padding-top: 20px;
  }
`,ke=(0,m.default)(w.m0).withConfig({displayName:"Pool__TitleRow",componentId:"sc-1cfc2685-1"})`
  color: ${({theme:e})=>e.neutral2};
  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex-wrap: wrap;
    gap: 12px;
    width: 100%;
  }
`,_e=(0,m.default)(w.DA).withConfig({displayName:"Pool__ButtonRow",componentId:"sc-1cfc2685-2"})`
  & > *:not(:last-child) {
    margin-left: 8px;
  }

  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`,Oe=(0,m.default)(c.v).withConfig({displayName:"Pool__PoolMenu",componentId:"sc-1cfc2685-3"})`
  margin-left: 0;
  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex: 1 1 auto;
    width: 50%;
  }

  a {
    width: 100%;
  }
`,Ie=m.default.div.withConfig({displayName:"Pool__PoolMenuItem",componentId:"sc-1cfc2685-4"})`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-weight: 535;
`,Pe=(0,m.default)(l.Ux).withConfig({displayName:"Pool__MoreOptionsButton",componentId:"sc-1cfc2685-5"})`
  border-radius: 12px;
  flex: 1 1 auto;
  padding: 6px 8px;
  width: 100%;
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  margin-right: 8px;
`,$e=(0,m.default)(me.Tv.BodyPrimary).withConfig({displayName:"Pool__MoreOptionsText",componentId:"sc-1cfc2685-6"})`
  align-items: center;
  display: flex;
`,Le=m.default.div.withConfig({displayName:"Pool__ErrorContainer",componentId:"sc-1cfc2685-7"})`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  max-width: 300px;
  min-height: 25vh;
`,Ne=m.css`
  width: 48px;
  height: 48px;
  margin-bottom: 0.5rem;
`,Ee=(0,m.default)(J.Z).withConfig({displayName:"Pool__NetworkIcon",componentId:"sc-1cfc2685-8"})`
  ${Ne}
`,Me=(0,m.default)(Y.Z).withConfig({displayName:"Pool__InboxIcon",componentId:"sc-1cfc2685-9"})`
  ${Ne}
`,ze=(0,m.default)(l.DF).withConfig({displayName:"Pool__ResponsiveButtonPrimary",componentId:"sc-1cfc2685-10"})`
  border-radius: 12px;
  font-size: 16px;
  padding: 6px 8px;
  width: fit-content;
  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex: 1 1 auto;
    width: 50%;
  }
`,qe=m.default.main.withConfig({displayName:"Pool__MainContentWrapper",componentId:"sc-1cfc2685-11"})`
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  padding: 0;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;function Se(){return(0,i.jsxs)(Ce.pr,{children:[(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{})]})}function Re(){const e=(0,m.useTheme)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Te,{children:(0,i.jsx)(d.Tz,{gap:"lg",justify:"center",children:(0,i.jsxs)(d.Tz,{gap:"lg",style:{width:"100%"},children:[(0,i.jsx)(ke,{padding:"0",children:(0,i.jsx)(me.Tv.H1Large,{children:(0,i.jsx)(u.cC,{children:"Positions"})})}),(0,i.jsx)(qe,{children:(0,i.jsx)(Le,{children:(0,i.jsxs)(me.Tv.BodyPrimary,{color:e.neutral3,textAlign:"center",children:[(0,i.jsx)(Ee,{strokeWidth:1.2}),(0,i.jsx)("div",{"data-testid":"pools-unsupported-err",children:(0,i.jsx)(u.cC,{children:"Your connected network is unsupported."})})]})})})]})})}),(0,i.jsx)(j.c,{})]})}function He(){var e;const{account:t,chainId:n}=(0,r.G)(),p=(0,C.Nb)(n),f=(0,F.G)(),x=(0,a.LK)(),y=(0,m.useTheme)(),[g,v]=(0,he.QP)(),{positions:T,loading:k}=(0,D.W)(t),[_,O]=(null===(e=T)||void 0===e?void 0:e.reduce(((e,t)=>{var n;return e[(null===(n=t.liquidity)||void 0===n?void 0:n.isZero())?1:0].push(t),e}),[[],[]]))??[[],[]],I=U((0,h.useMemo)((()=>[..._,...g?[]:O]),[O,_,g]));if(!p)return(0,i.jsx)(Re,{});const P=Boolean(!t),$=[{content:(0,i.jsxs)(Ie,{children:[(0,i.jsx)(u.cC,{children:"Migrate"}),(0,i.jsx)(K.Z,{size:16})]}),link:"/migrate/v2",external:!1},{content:(0,i.jsxs)(Ie,{children:[(0,i.jsx)(u.cC,{children:"V2 liquidity"}),(0,i.jsx)(re,{size:16})]}),link:"/pools/v2",external:!1},{content:(0,i.jsxs)(Ie,{children:[(0,i.jsx)(u.cC,{children:"Learn"}),(0,i.jsx)(de,{size:16})]}),link:"https://support.uniswap.org/hc/en-us/categories/8122334631437-Providing-Liquidity-",external:!0}];return(0,i.jsxs)(s.fM,{page:o.yJ.POOL_PAGE,shouldLogImpression:!0,children:[(0,i.jsx)(Te,{children:(0,i.jsx)(d.Tz,{gap:"lg",justify:"center",children:(0,i.jsxs)(d.Tz,{gap:"lg",style:{width:"100%"},children:[(0,i.jsxs)(ke,{padding:"0",children:[(0,i.jsxs)(w.ZP,{gap:"md",width:"min-content",children:[(0,i.jsx)(me.Tv.LargeHeader,{children:(0,i.jsx)(u.cC,{children:"Positions"})}),(0,i.jsx)(X.p,{protocolVersion:R.Qeo.V3})]}),(0,i.jsxs)(_e,{children:[f&&(0,i.jsx)(Oe,{modal:ue.Lk.POOL_OVERVIEW_OPTIONS,menuItems:$,flyoutAlignment:c.q.LEFT,ToggleUI:e=>(0,i.jsx)(Pe,{...e,children:(0,i.jsxs)($e,{children:[(0,i.jsx)(u.cC,{children:"More"}),(0,i.jsx)(ce.Z,{size:15})]})})}),(0,i.jsxs)(ze,{"data-cy":"join-pool-button",id:"join-pool-button",as:pe.rU,to:"/add/ETH",children:["+ ",(0,i.jsx)(u.cC,{children:"New position"})]})]})]}),(0,i.jsx)(qe,{children:k?(0,i.jsx)(Se,{}):I&&O&&I.length>0?(0,i.jsx)(b,{positions:I,setUserHideClosedPositions:v,userHideClosedPositions:g}):(0,i.jsxs)(Le,{children:[(0,i.jsxs)(me.Tv.BodyPrimary,{color:y.neutral3,textAlign:"center",children:[(0,i.jsx)(Me,{strokeWidth:1,style:{marginTop:"2em"}}),(0,i.jsx)("div",{children:(0,i.jsx)(u.cC,{children:"Your active V3 liquidity positions will appear here."})})]}),!P&&O.length>0&&(0,i.jsx)(l.oD,{style:{marginTop:".5rem"},onClick:()=>v(!g),children:(0,i.jsx)(u.cC,{children:"Show closed positions"})}),P&&(0,i.jsx)(s.M8,{events:[o.TM.onClick],name:o.Je.CONNECT_WALLET_BUTTON_CLICKED,properties:{received_swap_quote:!1},element:o.xo.CONNECT_WALLET_BUTTON,children:(0,i.jsx)(l.DF,{style:{marginTop:"2em",marginBottom:"2em",padding:"8px 16px"},onClick:x,children:(0,i.jsx)(u.cC,{children:"Connect a wallet"})})})]})}),(0,i.jsx)(me.Pw,{children:(0,i.jsx)(je,{})})]})})}),(0,i.jsx)(j.c,{})]})}},75512:(e,t,n)=>{n.d(t,{p:()=>v});var i=n(92936),o=n(69780);const r=e=>(0,i.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,i.jsx)("path",{d:"M5.2971 7.20007H12.4971V3.19995C12.4971 1.43263 13.9298 0 15.6971 0C17.4644 0 18.8972 1.43263 18.8972 3.19995H17.2971C17.2971 2.31631 16.5807 1.60005 15.6971 1.60005C14.8134 1.60005 14.0972 2.31631 14.0972 3.19995V12.0001H12.4971V8.80012H5.2971V10.4001H3.69705V3.20002C3.69705 1.4327 5.12982 6.80089e-05 6.89715 6.80089e-05C8.66447 6.80089e-05 10.0971 1.4327 10.0971 3.20002H8.49705C8.49705 2.31638 7.78079 1.60011 6.89715 1.60011C6.0135 1.60011 5.2971 2.31638 5.2971 3.20002V7.20007ZM1.59424 14.3428L1 12.8573C3.85069 11.717 6.97772 11.717 10.3501 12.8411C13.3778 13.8503 16.1173 13.8503 18.5999 12.8573L19.1942 14.3428C16.3435 15.4831 13.2164 15.4831 9.84407 14.3589C6.81633 13.3497 4.07687 13.3497 1.59424 14.3428ZM1.59424 18.3426L1 16.8571C3.85069 15.7168 6.97772 15.7168 10.3501 16.841C13.3778 17.8502 16.1173 17.8502 18.5999 16.8571L19.1942 18.3426C16.3435 19.4829 13.2164 19.4829 9.84407 18.3588C6.81633 17.3497 4.07687 17.3497 1.59424 18.3426Z",fill:e.fill||"currentColor"})});var s=n(17889),a=n(6823),l=n(86082),d=n(1356),c=n(29021),p=n(14411),u=n(54972),h=n(70854);const m=p.default.div.withConfig({displayName:"shared__PoolVersionItem",componentId:"sc-6b54c76f-0"})`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 12px;
`,f=(0,p.default)(o.Ux).withConfig({displayName:"shared__PoolOptionsButton",componentId:"sc-6b54c76f-1"})`
  flex: 1 1 auto;
  padding: 6px 8px 6px 12px;
  width: 100%;
  background-color: ${({theme:e})=>e.surface3};
  border: none;
  border-radius: 8px;
  gap: 6px;

  &:hover {
    background-color: ${({theme:e,$isOpen:t})=>t?e.surface1:e.surface3};
    opacity: 0.9;
  }

  ${({$isOpen:e})=>e&&p.css`
      background-color: ${({theme:e})=>e.surface1};
      border: ${({theme:e})=>`1.5px solid ${e.neutral3}`};
    `}
`,x=(0,p.default)(l.Z).withConfig({displayName:"shared__StyledChevron",componentId:"sc-6b54c76f-2"})`
  transform: ${({$isOpen:e})=>e?"rotate(180deg)":"rotate(0deg)"};
  transition: ${({theme:{transition:{duration:e,timing:t}}})=>`transform ${e.fast} ${t.ease}`};
`,y={[h.Qeo.V3]:{content:(0,i.jsxs)(m,{children:[(0,i.jsx)(r,{width:"20px",height:"20px"}),(0,i.jsx)(u.Tv.BodyPrimary,{lineHeight:"24px",color:"currentColor",children:(0,i.jsx)(a.cC,{children:"v3 pools"})})]}),link:"/pool",external:!1},[h.Qeo.V2]:{content:(0,i.jsxs)(m,{children:[(0,i.jsx)(r,{width:"20px",height:"20px"}),(0,i.jsx)(u.Tv.BodyPrimary,{lineHeight:"24px",color:"currentColor",children:(0,i.jsx)(a.cC,{children:"v2 pools"})})]}),link:"/pools/v2",external:!1}},g={[h.Qeo.V3]:a.t`v3`,[h.Qeo.V2]:a.t`v2`};function v({protocolVersion:e}){const t=(0,d.Wt)(c.Lk.POOL_VERSION);return(0,i.jsx)(s.v,{modal:c.Lk.POOL_VERSION,menuItems:[y[e===h.Qeo.V3?h.Qeo.V2:h.Qeo.V3]],flyoutAlignment:s.q.LEFT,ToggleUI:n=>(0,i.jsxs)(f,{...n,$isOpen:t,children:[(0,i.jsx)(u.Tv.BodyPrimary,{color:"neutral2",children:g[e]}),(0,i.jsx)(x,{$isOpen:t})]})})}},40926:(e,t,n)=>{n.d(t,{DC:()=>a,ER:()=>l,bb:()=>d,im:()=>s,pr:()=>c});var i=n(32546),o=n(22953),r=n(14411);const s=r.default.div.withConfig({displayName:"styled__Wrapper",componentId:"sc-bfb6c8b8-0"})`
  position: relative;
  padding: 20px;
`,a=(0,r.default)(o.xv).withConfig({displayName:"styled__ClickableText",componentId:"sc-bfb6c8b8-1"})`
  :hover {
    cursor: pointer;
  }
  color: ${({theme:e})=>e.accent1};
`,l=r.default.button.withConfig({displayName:"styled__MaxButton",componentId:"sc-bfb6c8b8-2"})`
  padding: 0.5rem 1rem;
  background-color: ${({theme:e})=>e.accent2};
  border: 1px solid ${({theme:e})=>e.accent2};
  border-radius: 0.5rem;
  font-size: 1rem;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    padding: 0.25rem 0.5rem;
  `};
  font-weight: 535;
  cursor: pointer;
  margin: 0.25rem;
  overflow: hidden;
  color: ${({theme:e})=>e.accent1};
  :hover {
    border: 1px solid ${({theme:e})=>e.accent1};
  }
  :focus {
    border: 1px solid ${({theme:e})=>e.accent1};
    outline: none;
  }
`,d=r.default.span.withConfig({displayName:"styled__Dots",componentId:"sc-bfb6c8b8-3"})`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: '.';
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`,c=(0,r.default)(i.pr).withConfig({displayName:"styled__LoadingRows",componentId:"sc-bfb6c8b8-4"})`
  padding-top: 36px;
  min-width: 75%;
  max-width: 960px;
  grid-column-gap: 0.5em;
  grid-row-gap: 0.8em;
  grid-template-columns: repeat(3, 1fr);
  padding: 8px;

  & > div:nth-child(4n + 1) {
    grid-column: 1 / 3;
  }
  & > div:nth-child(4n) {
    grid-column: 3 / 4;
    margin-bottom: 2em;
  }
`},5347:(e,t,n)=>{n.d(t,{B:()=>o});var i=n(64370);function o(e){var t;return e.isNative?e:(null===(t=i.Fl[e.chainId])||void 0===t?void 0:t.equals(e))?(0,i.gX)(e.chainId):e}},87270:e=>{e.exports=JSON.parse('{"Mt":[{"inputs":[],"name":"feeGrowthGlobal0X128","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeGrowthGlobal1X128","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidity","outputs":[{"internalType":"uint128","name":"","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"observations","outputs":[{"internalType":"uint32","name":"blockTimestamp","type":"uint32"},{"internalType":"int56","name":"tickCumulative","type":"int56"},{"internalType":"uint160","name":"secondsPerLiquidityCumulativeX128","type":"uint160"},{"internalType":"bool","name":"initialized","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"positions","outputs":[{"internalType":"uint128","name":"_liquidity","type":"uint128"},{"internalType":"uint256","name":"feeGrowthInside0LastX128","type":"uint256"},{"internalType":"uint256","name":"feeGrowthInside1LastX128","type":"uint256"},{"internalType":"uint128","name":"tokensOwed0","type":"uint128"},{"internalType":"uint128","name":"tokensOwed1","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"protocolFees","outputs":[{"internalType":"uint128","name":"token0","type":"uint128"},{"internalType":"uint128","name":"token1","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"slot0","outputs":[{"internalType":"uint160","name":"sqrtPriceX96","type":"uint160"},{"internalType":"int24","name":"tick","type":"int24"},{"internalType":"uint16","name":"observationIndex","type":"uint16"},{"internalType":"uint16","name":"observationCardinality","type":"uint16"},{"internalType":"uint16","name":"observationCardinalityNext","type":"uint16"},{"internalType":"uint8","name":"feeProtocol","type":"uint8"},{"internalType":"bool","name":"unlocked","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"int16","name":"wordPosition","type":"int16"}],"name":"tickBitmap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"int24","name":"tick","type":"int24"}],"name":"ticks","outputs":[{"internalType":"uint128","name":"liquidityGross","type":"uint128"},{"internalType":"int128","name":"liquidityNet","type":"int128"},{"internalType":"uint256","name":"feeGrowthOutside0X128","type":"uint256"},{"internalType":"uint256","name":"feeGrowthOutside1X128","type":"uint256"},{"internalType":"int56","name":"tickCumulativeOutside","type":"int56"},{"internalType":"uint160","name":"secondsPerLiquidityOutsideX128","type":"uint160"},{"internalType":"uint32","name":"secondsOutside","type":"uint32"},{"internalType":"bool","name":"initialized","type":"bool"}],"stateMutability":"view","type":"function"}]}')}}]);
//# sourceMappingURL=6719.bcd48a48.chunk.js.map