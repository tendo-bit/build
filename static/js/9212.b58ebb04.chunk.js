"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[9212],{21891:(e,t,n)=>{n.d(t,{Hn:()=>g,SO:()=>f,Vr:()=>x,g4:()=>m});var i=n(76078),o=n(20090),r=n(66650),s=n(26729),d=n(57852),l=n(95315),a=n(18569),c=(n(32682),n(45779)),u=n(70854),p=n(25302),h=n(71997);function f(e,t,n){const{chainId:i,provider:o}=(0,s.G)(),r=(0,d.Q2)();return(0,c.useMemo)((()=>(n??Object.keys(e).map((e=>parseInt(e))).filter((e=>r(e)))).reduce(((n,s)=>{const d=o&&i===s?o:r(s)?l.v[s]:void 0;return d&&(n[s]=(0,p.u)(e[s]??"",t,d)),n}),{})),[t,e,n,r,i,o])}function m(e){return f(i.NONFUNGIBLE_POSITION_MANAGER_ADDRESSES,o.abi,e)}function x(e){return f(i.MULTICALL_ADDRESSES,r.abi,e)}function g(e){var t;const n=(0,c.useMemo)((()=>{if(!e||!e.length)return[];const t=e.reduce(((e,{pool:{token0:t,token1:n}})=>(e[(0,h.x7)(t)]=(0,a.PT)(t),e[(0,h.x7)(n)]=(0,a.PT)(n),e)),{});return Object.values(t)}),[e]),{data:i,loading:o}=(0,u.SJT)({variables:{contracts:n},skip:!n.length}),r=(0,c.useMemo)((()=>{var e,t;return(null===(t=i)||void 0===t||null===(e=t.tokens)||void 0===e?void 0:e.reduce(((e,t)=>{var n,i,o,r;return t&&(e[(0,h.Ec)(t)]=null===(r=t.project)||void 0===r||null===(o=r.markets)||void 0===o||null===(i=o[0])||void 0===i||null===(n=i.price)||void 0===n?void 0:n.value),e}),{}))??{}}),[null===(t=i)||void 0===t?void 0:t.tokens]);return{priceMap:r,pricesLoading:o&&!i}}},73499:(e,t,n)=>{n.d(t,{Z:()=>h});var i=n(92936),o=n(6823),r=n(30335),s=n(57221),d=n(14411),l=n(86059);const a=d.default.div.withConfig({displayName:"RangeBadge__BadgeWrapper",componentId:"sc-52eeb7ae-0"})`
  font-size: 14px;
  display: flex;
  justify-content: flex-end;
`,c=d.default.div.withConfig({displayName:"RangeBadge__BadgeText",componentId:"sc-52eeb7ae-1"})`
  font-weight: 535;
  font-size: 12px;
  line-height: 14px;
  margin-right: 8px;
`,u=d.default.span.withConfig({displayName:"RangeBadge__ActiveDot",componentId:"sc-52eeb7ae-2"})`
  background-color: ${({theme:e})=>e.success};
  border-radius: 50%;
  height: 8px;
  width: 8px;
`,p=d.default.div.withConfig({displayName:"RangeBadge__LabelText",componentId:"sc-52eeb7ae-3"})`
  align-items: center;
  color: ${({color:e})=>e};
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;function h({removed:e,inRange:t}){const n=(0,d.useTheme)();return(0,i.jsx)(a,{children:e?(0,i.jsx)(l.ud,{text:(0,i.jsx)(o.cC,{children:"Your position has 0 liquidity, and is not earning fees."}),children:(0,i.jsxs)(p,{color:n.neutral2,children:[(0,i.jsx)(c,{children:(0,i.jsx)(o.cC,{children:"Closed"})}),(0,i.jsx)(r.Z,{width:12,height:12})]})}):t?(0,i.jsx)(l.ud,{text:(0,i.jsx)(o.cC,{children:"The price of this pool is within your selected range. Your position is currently earning fees."}),children:(0,i.jsxs)(p,{color:n.success,children:[(0,i.jsx)(c,{children:(0,i.jsx)(o.cC,{children:"In range"})}),(0,i.jsx)(u,{})]})}):(0,i.jsx)(l.ud,{text:(0,i.jsx)(o.cC,{children:"The price of this pool is outside of your selected range. Your position is not currently earning fees."}),children:(0,i.jsxs)(p,{color:n.deprecated_accentWarning,children:[(0,i.jsx)(c,{children:(0,i.jsx)(o.cC,{children:"Out of range"})}),(0,i.jsx)(s.Z,{width:12,height:12})]})})})}},23116:(e,t,n)=>{n.d(t,{Z:()=>d});var i=n(92936),o=n(86059),r=n(45779);const s=n(14411).default.span.withConfig({displayName:"HoverInlineText__TextWrapper",componentId:"sc-707bc6e1-0"})`
  margin-left: ${({margin:e})=>e&&"4px"};
  font-size: ${({fontSize:e})=>e??"inherit"};

  @media screen and (max-width: 600px) {
    font-size: ${({adjustSize:e})=>e&&"12px"};
  }
`,d=({text:e,maxCharacters:t=20,margin:n=!1,adjustSize:d=!1,fontSize:l,textColor:a,link:c,...u})=>{const[p,h]=(0,r.useState)(!1);return e?e.length>t?(0,i.jsx)(o.ZP,{text:e,show:p,children:(0,i.jsx)(s,{onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),margin:n,adjustSize:d,textColor:a,link:c,fontSize:l,...u,children:" "+e.slice(0,t-1)+"..."})}):(0,i.jsx)(s,{margin:n,adjustSize:d,link:c,fontSize:l,textColor:a,...u,children:e}):(0,i.jsx)("span",{})}},90652:(e,t,n)=>{n.d(t,{N:()=>b,Z:()=>A});var i=n(92936),o=n(76078),r=n(21651),s=n(73499),d=n(23116),l=n(63415),a=n(94284),c=n(39671),u=n(57899),p=n(55660),h=n(6823),f=n(45779),m=n(43454),x=n(31744),g=n(14411),v=n(66869),I=n(54972),w=n(66136),k=n(5347),y=n(47841),S=n(64370);const _=(0,g.default)(m.rU).withConfig({displayName:"PositionListItem__LinkRow",componentId:"sc-597d0797-0"})`
  align-items: center;
  display: flex;
  cursor: pointer;
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${({theme:e})=>e.neutral1};
  padding: 16px;
  text-decoration: none;
  font-weight: 535;

  & > div:not(:first-child) {
    text-align: center;
  }
  :hover {
    background-color: ${({theme:e})=>e.deprecated_hoverDefault};
  }

  @media screen and (min-width: ${v.e.deprecated_upToSmall}px) {
    /* flex-direction: row; */
  }

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    flex-direction: column;
    row-gap: 8px;
  `};
`,j=g.default.div.withConfig({displayName:"PositionListItem__DataLineItem",componentId:"sc-597d0797-1"})`
  font-size: 14px;
`,T=(0,g.default)(j).withConfig({displayName:"PositionListItem__RangeLineItem",componentId:"sc-597d0797-2"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
  width: 100%;
`,L=g.default.span.withConfig({displayName:"PositionListItem__DoubleArrow",componentId:"sc-597d0797-3"})`
  font-size: 12px;
  margin: 0 2px;
  color: ${({theme:e})=>e.neutral1};
`,N=(0,g.default)(I.Tv.BodySmall).withConfig({displayName:"PositionListItem__RangeText",componentId:"sc-597d0797-4"})`
  font-size: 14px !important;
  word-break: break-word;
  padding: 0.25rem 0.25rem;
  border-radius: 8px;
`,P=(0,g.default)(I.Tv.BodyPrimary).withConfig({displayName:"PositionListItem__FeeTierText",componentId:"sc-597d0797-5"})`
  margin-left: 8px !important;
  line-height: 12px;
  color: ${({theme:e})=>e.neutral3};
`,C=(0,g.default)(I.Tv.BodySmall).withConfig({displayName:"PositionListItem__ExtentsText",componentId:"sc-597d0797-6"})`
  color: ${({theme:e})=>e.neutral2};
  display: inline-block;
  line-height: 16px;
  margin-right: 4px !important;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    display: none;
  `};
`,E=g.default.div.withConfig({displayName:"PositionListItem__PrimaryPositionIdData",componentId:"sc-597d0797-7"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  > * {
    margin-right: 8px;
  }
`;function b(e){if(!e)return{};const t=e.amount0.currency,n=e.amount1.currency;if([S.h1,S.Hz,S.AA].some((e=>e.equals(t))))return{priceLower:e.token0PriceUpper.invert(),priceUpper:e.token0PriceLower.invert(),quote:t,base:n};return[...Object.values(S.Fl),S.ML].some((e=>e&&e.equals(n)))||e.token0PriceUpper.lessThan(1)?{priceLower:e.token0PriceUpper.invert(),priceUpper:e.token0PriceLower.invert(),quote:t,base:n}:{priceLower:e.token0PriceLower,priceUpper:e.token0PriceUpper,quote:n,base:t}}function A({token0:e,token1:t,tokenId:n,fee:m,liquidity:g,tickLower:v,tickUpper:S}){var j,A,M,O,R,D,X;const{formatDelta:q,formatTickPrice:$}=(0,w.Gb)(),U=(0,c.dQ)(e),z=(0,c.dQ)(t),B=U?(0,k.B)(U):void 0,G=z?(0,k.B)(z):void 0,[,Z]=(0,p.AI)(B??void 0,G??void 0,m),V=(0,f.useMemo)((()=>{if(Z)return new r.Position({pool:Z,liquidity:g.toString(),tickLower:v,tickUpper:S})}),[g,Z,v,S]),W=(0,u.Z)(m,v,S),{priceLower:Y,priceUpper:F,quote:K,base:Q}=b(V),H=K&&(0,k.B)(K),J=Q&&(0,k.B)(Q),ee=!!Z&&(Z.tickCurrent<v||Z.tickCurrent>=S),te="/pools/"+n,ne=null===(j=g)||void 0===j?void 0:j.eq(0);return(0,i.jsxs)(_,{to:te,children:[(0,i.jsxs)(a.m0,{children:[(0,i.jsxs)(E,{children:[(0,i.jsx)(y.ge,{currencies:[J,H],size:18}),(0,i.jsxs)(I.Tv.SubHeader,{children:["\xa0",null===(A=H)||void 0===A?void 0:A.symbol,"\xa0/\xa0",null===(M=J)||void 0===M?void 0:M.symbol]}),(0,i.jsx)(P,{children:q(parseFloat(new o.Percent(m,1e6).toSignificant()))})]}),(0,i.jsx)(s.Z,{removed:ne,inRange:!ee})]}),Y&&F?(0,i.jsxs)(T,{children:[(0,i.jsxs)(N,{children:[(0,i.jsx)(C,{children:(0,i.jsx)(h.cC,{children:"Min: "})}),(0,i.jsxs)("span",{children:[$({price:Y,atLimit:W,direction:x.Mb.LOWER})," "]}),(0,i.jsxs)(h.cC,{children:[(0,i.jsx)(d.Z,{text:null===(O=H)||void 0===O?void 0:O.symbol})," per ",(0,i.jsx)(d.Z,{text:(null===(R=J)||void 0===R?void 0:R.symbol)??""})]})]})," ",(0,i.jsxs)(I.Pw,{children:[(0,i.jsx)(L,{children:"\u2194"})," "]}),(0,i.jsxs)(I.Z,{children:[(0,i.jsx)(L,{children:"\u2194"})," "]}),(0,i.jsxs)(N,{children:[(0,i.jsx)(C,{children:(0,i.jsx)(h.cC,{children:"Max:"})}),(0,i.jsxs)("span",{children:[$({price:F,atLimit:W,direction:x.Mb.UPPER})," "]}),(0,i.jsxs)(h.cC,{children:[(0,i.jsx)(d.Z,{text:null===(D=H)||void 0===D?void 0:D.symbol})," per"," ",(0,i.jsx)(d.Z,{maxCharacters:10,text:null===(X=J)||void 0===X?void 0:X.symbol})]})]})]}):(0,i.jsx)(l.ZP,{})]})}},57899:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(21651),o=n(45779),r=n(31744);function s(e,t,n){return(0,o.useMemo)((()=>({[r.Mb.LOWER]:e&&t?t===(0,i.nearestUsableTick)(i.TickMath.MIN_TICK,i.TICK_SPACINGS[e]):void 0,[r.Mb.UPPER]:e&&n?n===(0,i.nearestUsableTick)(i.TickMath.MAX_TICK,i.TICK_SPACINGS[e]):void 0})),[e,t,n])}},55660:(e,t,n)=>{n.d(t,{$o:()=>I,AI:()=>v,Oh:()=>g,tK:()=>x});var i=n(51371),o=n(76078),r=n(87270),s=n(21651),d=n(21891),l=n(61592),a=n.n(l),c=n(84938),u=n(45779),p=n(72993);function h(e,t,n,i,o,r,s){try{var d=e[r](s),l=d.value}catch(a){return void n(a)}d.done?t(l):Promise.resolve(l).then(i,o)}const f=new i.vU(r.Mt);let m=class{static MAX_ENTRIES=128;static pools=[];static addresses=[];static getPoolAddress(e,t,n,i){this.addresses.length>this.MAX_ENTRIES&&(this.addresses=this.addresses.slice(0,this.MAX_ENTRIES/2));const{address:o}=t,{address:r}=n,d=`${e}:${o}:${r}:${i.toString()}`,l=this.addresses.find((e=>e.key===d));if(l)return l.address;const a={key:d,address:(0,s.computePoolAddress)({factoryAddress:e,tokenA:t,tokenB:n,fee:i})};return this.addresses.unshift(a),a.address}static getPool(e,t,n,i,o,r){this.pools.length>this.MAX_ENTRIES&&(this.pools=this.pools.slice(0,this.MAX_ENTRIES/2));const d=this.pools.find((s=>s.token0===e&&s.token1===t&&s.fee===n&&a().EQ(s.sqrtRatioX96,i)&&a().EQ(s.liquidity,o)&&s.tickCurrent===r));if(d)return d;const l=new s.Pool(e,t,n,i,o,r);return this.pools.unshift(l),l}};var x;function g(e){const t=(0,p.x)(),n=(0,u.useMemo)((()=>t?e.map((([e,t,n])=>{if(e&&t&&n){const i=e.wrapped,o=t.wrapped;if(i.equals(o))return;return i.sortsBefore(o)?[i,o,n]:[o,i,n]}})):new Array(e.length)),[t,e]),i=(0,u.useMemo)((()=>{const e=t&&o.V3_CORE_FACTORY_ADDRESSES[t];return e?n.map((t=>t&&m.getPoolAddress(e,...t))):new Array(n.length)}),[t,n]),r=(0,c._Y)(i,f,"slot0"),s=(0,c._Y)(i,f,"liquidity");return(0,u.useMemo)((()=>e.map(((e,t)=>{const i=n[t];if(!i)return[x.INVALID,null];const[o,d,l]=i;if(!r[t])return[x.INVALID,null];const{result:a,loading:c,valid:u}=r[t];if(!s[t])return[x.INVALID,null];const{result:p,loading:h,valid:f}=s[t];if(!i||!u||!f)return[x.INVALID,null];if(c||h)return[x.LOADING,null];if(!a||!p)return[x.NOT_EXISTS,null];if(!a.sqrtPriceX96||a.sqrtPriceX96.eq(0))return[x.NOT_EXISTS,null];try{const e=m.getPool(o,d,l,a.sqrtPriceX96,p[0],a.tick);return[x.EXISTS,e]}catch(g){return console.error("Error when constructing the pool",g),[x.NOT_EXISTS,null]}}))),[s,e,r,n])}function v(e,t,n){return g((0,u.useMemo)((()=>[[e,t,n]]),[e,t,n]))[0]}function I(e,t,n,i){const l=(0,u.useRef)([x.LOADING,null]),a=e&&t&&n?m.getPoolAddress(o.V3_CORE_FACTORY_ADDRESSES[i],e,t,n):void 0,c=(0,u.useMemo)((()=>a?{[i]:a}:{}),[i,a]),p=(0,d.SO)(c,r.Mt)[i];return(0,u.useEffect)((()=>{function i(){var o;return o=function*(){try{if(!e||!t||!n||!a||!p)return void(l.current=[x.INVALID,null]);const i=yield p.slot0(),o=yield p.liquidity();l.current=[x.NOT_EXISTS,null];const r=new s.Pool(e,t,n,i.sqrtPriceX96.toString(),o.toString(),i.tick);l.current=[x.EXISTS,r]}catch(i){l.current=[x.INVALID,null]}},i=function(){var e=this,t=arguments;return new Promise((function(n,i){var r=o.apply(e,t);function s(e){h(r,n,i,s,d,"next",e)}function d(e){h(r,n,i,s,d,"throw",e)}s(void 0)}))},i.apply(this,arguments)}!function(){i.apply(this,arguments)}()}),[p,n,a,e,t]),l.current}!function(e){e[e.LOADING=0]="LOADING",e[e.NOT_EXISTS=1]="NOT_EXISTS",e[e.EXISTS=2]="EXISTS",e[e.INVALID=3]="INVALID"}(x||(x={}))},40413:(e,t,n)=>{n.d(t,{W:()=>a,n:()=>l});var i=n(11604),o=n(84938),r=n(45779),s=n(7151);function d(e){var t;const n=(0,s.GL)(),d=(0,r.useMemo)((()=>e?e.map((e=>[i.O$.from(e)])):[]),[e]),l=(0,o.es)(n,"positions",d),a=(0,r.useMemo)((()=>l.some((({loading:e})=>e))),[l]),c=(0,r.useMemo)((()=>l.some((({error:e})=>e))),[l]),u=(0,r.useMemo)((()=>{if(!a&&!c&&e)return l.map(((t,n)=>{const i=e[n],o=t.result;return{tokenId:i,fee:o.fee,feeGrowthInside0LastX128:o.feeGrowthInside0LastX128,feeGrowthInside1LastX128:o.feeGrowthInside1LastX128,liquidity:o.liquidity,nonce:o.nonce,operator:o.operator,tickLower:o.tickLower,tickUpper:o.tickUpper,token0:o.token0,token1:o.token1,tokensOwed0:o.tokensOwed0,tokensOwed1:o.tokensOwed1}}))}),[a,c,l,e]);return{loading:a,positions:null===(t=u)||void 0===t?void 0:t.map(((e,t)=>({...e,tokenId:d[t][0]})))}}function l(e){var t;const n=d(e?[e]:void 0);return{loading:n.loading,position:null===(t=n.positions)||void 0===t?void 0:t[0]}}function a(e){var t,n;const l=(0,s.GL)(),{loading:a,result:c}=(0,o.Wk)(l,"balanceOf",[e??void 0]),u=null===(n=c)||void 0===n||null===(t=n[0])||void 0===t?void 0:t.toNumber(),p=(0,r.useMemo)((()=>{if(u&&e){const t=[];for(let n=0;n<u;n++)t.push([e,n]);return t}return[]}),[e,u]),h=(0,o.es)(l,"tokenOfOwnerByIndex",p),f=(0,r.useMemo)((()=>h.some((({loading:e})=>e))),[h]),m=(0,r.useMemo)((()=>e?h.map((({result:e})=>e)).filter((e=>!!e)).map((e=>i.O$.from(e[0]))):[]),[e,h]),{positions:x,loading:g}=d(m);return{loading:f||a||g,positions:x}}},71997:(e,t,n)=>{n.d(t,{Ec:()=>l,mn:()=>s,x7:()=>d});var i=n(64370),o=n(18569),r=n(70854);function s(e,t){return`${e}-${t.toLowerCase()}`}function d(e){return s(e.chainId,e.isToken?e.address:i.dt)}function l(e){const t=(0,o.Tz)(e.chain),n=e.standard===r.Yn6.Native?i.dt:e.address;if(!n)throw new Error("Non-native token missing address");if(!t)throw new Error("Unsupported chain from pools query");return s(t,n)}}}]);
//# sourceMappingURL=9212.b58ebb04.chunk.js.map