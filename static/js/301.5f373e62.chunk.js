"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[301,5118,3904],{10404:(e,n,t)=>{t.d(n,{Z:()=>s});var i=t(45779),r=t(68090),o=t.n(r);function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},l.apply(this,arguments)}function a(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=(0,i.forwardRef)((function(e,n){var t=e.color,r=void 0===t?"currentColor":t,o=e.size,d=void 0===o?24:o,s=a(e,["color","size"]);return i.createElement("svg",l({ref:n,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),i.createElement("circle",{cx:"12",cy:"12",r:"10"}),i.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),i.createElement("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"}))}));d.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},d.displayName="AlertCircle";const s=d},33882:(e,n,t)=>{t.d(n,{Z:()=>s});var i=t(45779),r=t(68090),o=t.n(r);function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},l.apply(this,arguments)}function a(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=(0,i.forwardRef)((function(e,n){var t=e.color,r=void 0===t?"currentColor":t,o=e.size,d=void 0===o?24:o,s=a(e,["color","size"]);return i.createElement("svg",l({ref:n,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),i.createElement("circle",{cx:"12",cy:"12",r:"10"}),i.createElement("polyline",{points:"16 12 12 8 8 12"}),i.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"8"}))}));d.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},d.displayName="ArrowUpCircle";const s=d},39753:(e,n,t)=>{t.d(n,{q:()=>w,w:()=>k});var i=t(92936),r=t(69751),o=t(6823),l=t(21926),a=t(43454),d=t(6282),s=t(22953),c=t(47856),u=t(47632),p=t(31744),m=t(14411),y=t(54972),x=t(55874),h=t(72993),f=t(94284);const v=m.default.div.withConfig({displayName:"NavigationTabs__Tabs",componentId:"sc-b5b2ff8c-0"})`
  ${x.MG};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,g=(0,m.default)(a.rU).withConfig({displayName:"NavigationTabs__StyledLink",componentId:"sc-b5b2ff8c-1"})`
  flex: ${({flex:e})=>e??"none"};
  display: flex;
  align-items: center;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `};
`,b=(0,m.default)(y.Tv.H1Small).withConfig({displayName:"NavigationTabs__FindPoolTabsText",componentId:"sc-b5b2ff8c-2"})`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,j=(0,m.default)(l.Z).withConfig({displayName:"NavigationTabs__StyledArrowLeft",componentId:"sc-b5b2ff8c-3"})`
  color: ${({theme:e})=>e.neutral1};
`;function w({origin:e}){return(0,i.jsx)(v,{children:(0,i.jsxs)(f.m0,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,i.jsx)(a.rU,{to:e,children:(0,i.jsx)(j,{})}),(0,i.jsx)(b,{children:(0,i.jsx)(o.cC,{children:"Import V2 pool"})})]})})}const C=(0,m.default)(y.Tv.H1Small).withConfig({displayName:"NavigationTabs__AddRemoveTitleText",componentId:"sc-b5b2ff8c-4"})`
  flex: 1;
  margin: auto;
  text-align: ${({$center:e})=>e?"center":"start"};
`;function k({adding:e,creating:n,autoSlippage:t,children:l}){const a=(0,h.x)(),y=(0,m.useTheme)(),x=(0,c.T)(),b=(0,d.s0)();return(0,i.jsx)(v,{children:(0,i.jsxs)(f.m0,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,i.jsx)(g,{to:"..",onClick:n=>{n.preventDefault(),b(-1),e&&(x((0,u.dA)()),x((0,p.dA)()))},flex:l?"1":void 0,children:(0,i.jsx)(j,{stroke:y.neutral2})}),(0,i.jsx)(C,{$center:!l,children:n?(0,i.jsx)(o.cC,{children:"Create a pair"}):e?(0,i.jsx)(o.cC,{children:"Add liquidity"}):(0,i.jsx)(o.cC,{children:"Remove liquidity"})}),l&&(0,i.jsx)(s.xu,{style:{marginRight:".5rem"},children:l}),(0,i.jsx)(r.Z,{autoSlippage:t,chainId:a,hideRoutingSettings:!0})]})})}},3094:(e,n,t)=>{t.d(n,{Z:()=>l});var i=t(92936),r=t(45779);const o=t(14411).default.input.withConfig({displayName:"Slider__StyledRangeInput",componentId:"sc-2b24fd52-0"})`
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  width: 100%; /* Specific width is required for Firefox. */
  background: transparent; /* Otherwise white in Chrome */
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &::-moz-focus-outer {
    border: 0;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: ${({size:e})=>e}px;
    width: ${({size:e})=>e}px;
    background-color: ${({theme:e})=>e.accent1};
    border-radius: 100%;
    border: none;
    transform: translateY(-50%);
    color: ${({theme:e})=>e.surface1};

    &:hover,
    &:focus {
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-moz-range-thumb {
    height: ${({size:e})=>e}px;
    width: ${({size:e})=>e}px;
    background-color: #565a69;
    border-radius: 100%;
    border: none;
    color: ${({theme:e})=>e.surface1};

    &:hover,
    &:focus {
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-ms-thumb {
    height: ${({size:e})=>e}px;
    width: ${({size:e})=>e}px;
    background-color: #565a69;
    border-radius: 100%;
    color: ${({theme:e})=>e.surface1};

    &:hover,
    &:focus {
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-webkit-slider-runnable-track {
    background: linear-gradient(90deg, ${({theme:e})=>e.accent1}, ${({theme:e})=>e.accent1});
    height: 2px;
  }

  &::-moz-range-track {
    background: linear-gradient(90deg, ${({theme:e})=>e.surface4}, ${({theme:e})=>e.surface2});
    height: 2px;
  }

  &::-ms-track {
    width: 100%;
    border-color: transparent;
    color: transparent;

    background: ${({theme:e})=>e.surface4};
    height: 2px;
  }
  &::-ms-fill-lower {
    background: ${({theme:e})=>e.surface4};
  }
  &::-ms-fill-upper {
    background: ${({theme:e})=>e.surface2};
  }
`;function l({value:e,onChange:n,min:t=0,step:l=1,max:a=100,size:d=28,...s}){const c=(0,r.useCallback)((e=>{n(parseInt(e.target.value))}),[n]);return(0,i.jsx)(o,{size:d,...s,type:"range",value:e,style:{padding:"15px 0"},onChange:c,"aria-labelledby":"input slider",step:l,min:t,max:a})}},82731:(e,n,t)=>{t.d(n,{SS:()=>m,sq:()=>s,MN:()=>c,RF:()=>u,uO:()=>p,I8:()=>d});var i=t(14411);const r=t.p+"static/media/big_unicorn.595c49962d708abbaaec.png",o=t.p+"static/media/noise.3c7efafc83614205bd1a.png",l=t.p+"static/media/xl_uni.9c9e061bed67e15ad3c8.png";var a=t(44591);const d=(0,i.default)(a.Tz).withConfig({displayName:"styled__DataCard",componentId:"sc-6a13bc9-0"})`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #2172e5 100%);
  border-radius: 12px;
  width: 100%;
  position: relative;
  overflow: hidden;
`,s=i.default.span.withConfig({displayName:"styled__CardBGImage",componentId:"sc-6a13bc9-1"})`
  background: url(${r});
  width: 1000px;
  height: 600px;
  position: absolute;
  border-radius: 12px;
  opacity: 0.4;
  top: -100px;
  left: -100px;
  transform: rotate(-15deg);
  user-select: none;
  ${({desaturate:e})=>e&&"filter: saturate(0)"}
`,c=i.default.span.withConfig({displayName:"styled__CardBGImageSmaller",componentId:"sc-6a13bc9-2"})`
  background: url(${l});
  width: 1200px;
  height: 1200px;
  position: absolute;
  border-radius: 12px;
  top: -300px;
  left: -300px;
  opacity: 0.4;
  user-select: none;

  ${({desaturate:e})=>e&&"filter: saturate(0)"}
`,u=i.default.span.withConfig({displayName:"styled__CardNoise",componentId:"sc-6a13bc9-3"})`
  background: url(${o});
  background-size: cover;
  mix-blend-mode: overlay;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  opacity: 0.15;
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
`,p=(0,i.default)(a.Tz).withConfig({displayName:"styled__CardSection",componentId:"sc-6a13bc9-4"})`
  padding: 1rem;
  z-index: 1;
  opacity: ${({disabled:e})=>e&&"0.4"};
`,m=i.default.div.withConfig({displayName:"styled__Break",componentId:"sc-6a13bc9-5"})`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
`},47848:(e,n,t)=>{t.d(n,{Z:()=>r});var i=t(45779);function r(e,n,t=100){const[r,o]=(0,i.useState)((()=>e)),l=(0,i.useRef)(),a=(0,i.useCallback)((e=>{o(e),l.current&&clearTimeout(l.current),l.current=setTimeout((()=>{n(e),l.current=void 0}),t)}),[t,n]);return(0,i.useEffect)((()=>{l.current&&(clearTimeout(l.current),l.current=void 0),o(e)}),[e]),[r,a]}},65118:(e,n,t)=>{t.d(n,{Z:()=>a,e:()=>l});var i=t(92936),r=t(14411),o=t(62587);const l=r.default.main.withConfig({displayName:"AppBody__BodyWrapper",componentId:"sc-e9d30a3e-0"})`
  position: relative;
  margin-top: ${({$margin:e})=>e??"0px"};
  max-width: ${({$maxWidth:e})=>e??"420px"};
  width: 100%;
  background: ${({theme:e})=>e.surface1};
  border-radius: 16px;
  border: 1px solid ${({theme:e})=>e.surface3};
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  z-index: ${o.k.default};
`;function a(e){return(0,i.jsx)(l,{...e})}},32219:(e,n,t)=>{t.r(n),t.d(n,{default:()=>de});var i=t(92936),r=t(11604),o=t(5985),l=t(76078),a=t(21651),d=t(47583),s=t(73499),c=t(69780),u=t(61182),p=t(44591),m=t(47841),y=t(63415),x=t(5967),h=t(39753),f=t(94284),v=t(3094),g=t(67716),b=t(82731),j=t(57852),w=t(7151),C=t(47848),k=t(40413),T=t(6823),z=t(24509),S=t(26522),$=t(45779),I=t(6282),_=t(26729),O=t(39671),q=t(55660),A=t(42938),N=t(47856),P=t(5347),L=t(54542);function W(){return(0,N.C)((e=>e.burnV3))}var R=t(99454),E=t(28098),M=t(54972),Z=t(63420),D=t(66136),G=t(51001),B=t(4650),F=t(5931),V=t(590),U=t(99819),X=t(64370),H=t(47186),Q=t(64510),Y=t(17202),J=t(65118),K=t(40926),ee=t(22953),ne=t(14411);const te=ne.default.div.withConfig({displayName:"styled__Wrapper",componentId:"sc-53ad7253-0"})`
  position: relative;
  padding: 20px;
  min-width: 460px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToExtraSmall`
    min-width: 340px;
  `};
`,ie=(0,ne.default)(K.ER).withConfig({displayName:"styled__SmallMaxButton",componentId:"sc-53ad7253-1"})`
  font-size: 12px;
`,re=(0,ne.default)(ee.xv).withConfig({displayName:"styled__ResponsiveHeaderText",componentId:"sc-53ad7253-2"})`
  font-size: 40px;
  font-weight: 535;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToExtraSmall`
     font-size: 24px
  `};
`;function oe(e,n,t,i,r,o,l){try{var a=e[o](l),d=a.value}catch(s){return void t(s)}a.done?n(d):Promise.resolve(d).then(i,r)}function le(e){return function(){var n=this,t=arguments;return new Promise((function(i,r){var o=e.apply(n,t);function l(e){oe(o,i,r,l,a,"next",e)}function a(e){oe(o,i,r,l,a,"throw",e)}l(void 0)}))}}const ae=new l.Percent(50,1e4);function de(){const e=(0,V.m)(),n=(0,j.Nb)(e.chainId),{tokenId:t}=(0,I.UO)(),o=(0,I.TH)(),l=(0,$.useMemo)((()=>{try{return r.O$.from(t)}catch{return null}}),[t]),{position:a,loading:d}=(0,k.n)(l??void 0);return null===l||l.eq(0)?(0,i.jsx)(I.Fg,{to:{...o,pathname:"/pools"},replace:!0}):n&&(d||a)?(0,i.jsx)(se,{tokenId:l}):(0,i.jsx)(S.PositionPageUnsupportedContent,{})}function se({tokenId:e}){var n,t,r,j,S,I,K,ee,ne,oe,de,se,ce,ue,pe,me,ye,xe,he,fe,ve,ge,be,je,we,Ce,ke,Te,ze,Se,$e,Ie;const{position:_e}=(0,k.n)(e),Oe=(0,V.m)(),qe=(0,G.z)(),Ae=(0,d.oO)(),{formatCurrencyAmount:Ne}=(0,D.Gb)(),[Pe,Le]=(0,$.useState)(!1),We=(0,z.Z)(Oe.chainId).wrapped.symbol,{percent:Re}=W(),{position:Ee,liquidityPercentage:Me,liquidityValue0:Ze,liquidityValue1:De,feeValue0:Ge,feeValue1:Be,outOfRange:Fe,error:Ve}=function(e,n=!1){var t,r,o,d;const{account:s}=(0,_.G)(),{percent:c}=W(),u=(0,O.dQ)(null===(t=e)||void 0===t?void 0:t.token0),p=(0,O.dQ)(null===(r=e)||void 0===r?void 0:r.token1),[,m]=(0,q.AI)(u??void 0,p??void 0,null===(o=e)||void 0===o?void 0:o.fee),y=(0,$.useMemo)((()=>{var n,t,i;return m&&(null===(n=e)||void 0===n?void 0:n.liquidity)&&"number"===typeof(null===(t=e)||void 0===t?void 0:t.tickLower)&&"number"===typeof(null===(i=e)||void 0===i?void 0:i.tickUpper)?new a.Position({pool:m,liquidity:e.liquidity.toString(),tickLower:e.tickLower,tickUpper:e.tickUpper}):void 0}),[m,e]),x=new l.Percent(c,100),h=y?x.multiply(y.amount0.quotient).quotient:void 0,f=y?x.multiply(y.amount1.quotient).quotient:void 0,v=u&&h?l.CurrencyAmount.fromRawAmount(n?u:(0,P.B)(u),h):void 0,g=p&&f?l.CurrencyAmount.fromRawAmount(n?p:(0,P.B)(p),f):void 0,[b,j]=(0,A.t)(m??void 0,null===(d=e)||void 0===d?void 0:d.tokenId,n),w=!(!m||!e)&&(m.tickCurrent<e.tickLower||m.tickCurrent>e.tickUpper);let C;return s||(C=(0,i.jsx)(T.cC,{children:"Connect wallet"})),0===c&&(C=C??(0,i.jsx)(T.cC,{children:"Enter a percent"})),{position:y,liquidityPercentage:x,liquidityValue0:v,liquidityValue1:g,feeValue0:b,feeValue1:j,outOfRange:w,error:C}}(_e,Pe),{onPercentSelect:Ue}=function(){const e=(0,N.T)();return{onPercentSelect:(0,$.useCallback)((n=>{e((0,L.o)({percent:n}))}),[e])}}(),Xe=null===(t=_e)||void 0===t||null===(n=t.liquidity)||void 0===n?void 0:n.eq(0),[He,Qe]=(0,C.Z)(Re,Ue),Ye=(0,B.n)(),Je=(0,E.eq)(ae),[Ke,en]=(0,$.useState)(!1),[nn,tn]=(0,$.useState)(!1),[rn,on]=(0,$.useState)(),ln=(0,R.h7)(),an=(0,w.GL)(),dn=(0,$.useCallback)(le((function*(){if(tn(!0),!an||!Ze||!De||"connected"!==Oe.status||!Ee||!Me||!qe)return;const n=yield Ye();if(!n)throw new Error("could not get deadline");const{calldata:t,value:i}=a.NonfungiblePositionManager.removeCallParameters(Ee,{tokenId:e.toString(),liquidityPercentage:Me,slippageTolerance:Je,deadline:n.toString(),collectOptions:{expectedCurrencyOwed0:Ge??l.CurrencyAmount.fromRawAmount(Ze.currency,0),expectedCurrencyOwed1:Be??l.CurrencyAmount.fromRawAmount(De.currency,0),recipient:Oe.address}}),r={to:an.address,data:t,value:i},s=yield qe.getChainId();if(Oe.chainId!==s)throw new Z.CJ;qe.estimateGas(r).then((e=>{const n={...r,gasLimit:(0,Q.y)(e)};return qe.sendTransaction(n).then((e=>{(0,d._P)(o.vp.REMOVE_LIQUIDITY_SUBMITTED,{source:o.GM.V3,label:[Ze.currency.symbol,De.currency.symbol].join("/"),...Ae}),on(e.hash),tn(!1),ln(e,{type:H.i.REMOVE_LIQUIDITY_V3,baseCurrencyId:(0,Y.H)(Ze.currency),quoteCurrencyId:(0,Y.H)(De.currency),expectedAmountBaseRaw:Ze.quotient.toString(),expectedAmountQuoteRaw:De.quotient.toString()})}))})).catch((e=>{tn(!1),console.error(e)}))})),[an,Ze,De,Oe.status,Oe.address,Oe.chainId,Ee,Me,qe,Ye,e,Je,Ge,Be,Ae,ln]),sn=(0,$.useCallback)((()=>{en(!1),rn&&Qe(0),tn(!1),on("")}),[Qe,rn]),cn=(0,i.jsxs)(T.cC,{children:["Removing ",{amt:null===(r=Ze)||void 0===r?void 0:r.toSignificant(6)}," ",{sym:null===(S=Ze)||void 0===S||null===(j=S.currency)||void 0===j?void 0:j.symbol}," and"," ",{amt2:null===(I=De)||void 0===I?void 0:I.toSignificant(6)}," ",{sym2:null===(ee=De)||void 0===ee||null===(K=ee.currency)||void 0===K?void 0:K.symbol}]});function un(){var e,n,t,r,o,l,a,d,s,u,m,y,h,v;return(0,i.jsxs)(p.Tz,{gap:"sm",style:{padding:"16px"},children:[(0,i.jsxs)(f.m0,{align:"flex-end",children:[(0,i.jsx)(F.xv,{fontSize:16,fontWeight:"$medium",children:(0,i.jsxs)(T.cC,{children:["Pooled ",{sym:null===(n=Ze)||void 0===n||null===(e=n.currency)||void 0===e?void 0:e.symbol},":"]})}),(0,i.jsxs)(f.DA,{children:[(0,i.jsx)(F.xv,{fontSize:16,fontWeight:"$medium",ml:6,children:Ze&&Ne({amount:Ze})}),(0,i.jsx)(x.Z,{size:20,style:{marginLeft:"8px"},currency:null===(t=Ze)||void 0===t?void 0:t.currency})]})]}),(0,i.jsxs)(f.m0,{align:"flex-end",children:[(0,i.jsx)(F.xv,{fontSize:16,fontWeight:"$medium",children:(0,i.jsxs)(T.cC,{children:["Pooled ",{sym:null===(o=De)||void 0===o||null===(r=o.currency)||void 0===r?void 0:r.symbol},":"]})}),(0,i.jsxs)(f.DA,{children:[(0,i.jsx)(F.xv,{fontSize:16,fontWeight:"$medium",ml:6,children:De&&Ne({amount:De})}),(0,i.jsx)(x.Z,{size:20,style:{marginLeft:"8px"},currency:null===(l=De)||void 0===l?void 0:l.currency})]})]}),(null===(a=Ge)||void 0===a?void 0:a.greaterThan(0))||(null===(d=Be)||void 0===d?void 0:d.greaterThan(0))?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(F.xv,{fontSize:12,color:"$neutral2",textAlign:"left",pt:8,children:(0,i.jsx)(T.cC,{children:"You will also collect fees earned from this position."})}),(0,i.jsxs)(f.m0,{children:[(0,i.jsx)(F.xv,{fontSize:16,fontWeight:"$medium",children:(0,i.jsxs)(T.cC,{children:[{sym:null===(u=Ge)||void 0===u||null===(s=u.currency)||void 0===s?void 0:s.symbol}," Fees Earned:"]})}),(0,i.jsxs)(f.DA,{children:[(0,i.jsx)(F.xv,{fontSize:16,fontWeight:"$medium",ml:6,children:Ge&&Ne({amount:Ge})}),(0,i.jsx)(x.Z,{size:20,style:{marginLeft:"8px"},currency:null===(m=Ge)||void 0===m?void 0:m.currency})]})]}),(0,i.jsxs)(f.m0,{children:[(0,i.jsx)(F.xv,{fontSize:16,fontWeight:"$medium",children:(0,i.jsxs)(T.cC,{children:[{sym:null===(h=Be)||void 0===h||null===(y=h.currency)||void 0===y?void 0:y.symbol}," Fees Earned:"]})}),(0,i.jsxs)(f.DA,{children:[(0,i.jsx)(F.xv,{fontSize:16,fontWeight:"$medium",ml:6,children:Be&&Ne({amount:Be})}),(0,i.jsx)(x.Z,{size:20,style:{marginLeft:"8px"},currency:null===(v=Be)||void 0===v?void 0:v.currency})]})]})]}):null,(0,i.jsx)(c.DF,{mt:"16px",onClick:dn,children:(0,i.jsx)(T.cC,{children:"Remove"})})]})}const pn=Boolean((null===(ne=Ze)||void 0===ne?void 0:ne.currency)&&(null===(oe=De)||void 0===oe?void 0:oe.currency)&&(Ze.currency.isNative||De.currency.isNative||(null===(de=X.Fl[Ze.currency.chainId])||void 0===de?void 0:de.equals(Ze.currency.wrapped))||(null===(se=X.Fl[De.currency.chainId])||void 0===se?void 0:se.equals(De.currency.wrapped))));return(0,i.jsxs)(p.Tz,{children:[(0,i.jsx)(U.Z,{isOpen:Ke,onDismiss:sn,attemptingTxn:nn,hash:rn??"",reviewContent:()=>(0,i.jsx)(U.p,{title:(0,i.jsx)(T.cC,{children:"Remove liquidity"}),onDismiss:sn,topContent:un}),pendingText:cn}),(0,i.jsxs)(J.Z,{$maxWidth:"unset",children:[(0,i.jsx)(h.w,{creating:!1,adding:!1,autoSlippage:ae}),(0,i.jsx)(te,{children:_e?(0,i.jsxs)(p.Tz,{gap:"lg",children:[(0,i.jsxs)(f.m0,{children:[(0,i.jsxs)(f.DA,{children:[(0,i.jsx)(m.ge,{currencies:[null===(ce=Ze)||void 0===ce?void 0:ce.currency,null===(ue=De)||void 0===ue?void 0:ue.currency],size:20}),(0,i.jsx)(M.Tv.DeprecatedLabel,{ml:"10px",fontSize:"20px",id:"remove-liquidity-tokens",children:`${null===(me=Ze)||void 0===me||null===(pe=me.currency)||void 0===pe?void 0:pe.symbol}/${null===(xe=De)||void 0===xe||null===(ye=xe.currency)||void 0===ye?void 0:ye.symbol}`})]}),(0,i.jsx)(s.Z,{removed:Xe,inRange:!Fe})]}),(0,i.jsx)(u.hl,{children:(0,i.jsxs)(p.Tz,{gap:"md",children:[(0,i.jsx)(M.Tv.DeprecatedMain,{fontWeight:485,children:(0,i.jsx)(T.cC,{children:"Amount"})}),(0,i.jsxs)(f.m0,{children:[(0,i.jsx)(re,{children:(0,i.jsxs)(T.cC,{children:[{percentForSlider:He},"%"]})}),(0,i.jsxs)(f.BA,{gap:"4px",justify:"flex-end",children:[(0,i.jsx)(ie,{onClick:()=>Ue(25),width:"20%",children:(0,i.jsx)(T.cC,{children:"25%"})}),(0,i.jsx)(ie,{onClick:()=>Ue(50),width:"20%",children:(0,i.jsx)(T.cC,{children:"50%"})}),(0,i.jsx)(ie,{onClick:()=>Ue(75),width:"20%",children:(0,i.jsx)(T.cC,{children:"75%"})}),(0,i.jsx)(ie,{onClick:()=>Ue(100),width:"20%",children:(0,i.jsx)(T.cC,{children:"Max"})})]})]}),(0,i.jsx)(v.Z,{value:He,onChange:Qe})]})}),(0,i.jsx)(u.hl,{children:(0,i.jsxs)(p.Tz,{gap:"md",children:[(0,i.jsxs)(f.m0,{children:[(0,i.jsx)(F.xv,{fontSize:16,fontWeight:"$medium",id:"remove-pooled-tokena-symbol",children:(0,i.jsxs)(T.cC,{children:["Pooled ",{symbol:null===(fe=Ze)||void 0===fe||null===(he=fe.currency)||void 0===he?void 0:he.symbol},":"]})}),(0,i.jsxs)(f.DA,{children:[(0,i.jsx)(F.xv,{fontSize:16,fontWeight:"$medium",ml:6,children:Ze&&Ne({amount:Ze})}),(0,i.jsx)(x.Z,{size:20,style:{marginLeft:"8px"},currency:null===(ve=Ze)||void 0===ve?void 0:ve.currency})]})]}),(0,i.jsxs)(f.m0,{children:[(0,i.jsx)(F.xv,{fontSize:16,fontWeight:"$medium",id:"remove-pooled-tokenb-symbol",children:(0,i.jsxs)(T.cC,{children:["Pooled ",{symbol:null===(be=De)||void 0===be||null===(ge=be.currency)||void 0===ge?void 0:ge.symbol},":"]})}),(0,i.jsxs)(f.DA,{children:[(0,i.jsx)(F.xv,{fontSize:16,fontWeight:"$medium",ml:6,children:De&&Ne({amount:De})}),(0,i.jsx)(x.Z,{size:20,style:{marginLeft:"8px"},currency:null===(je=De)||void 0===je?void 0:je.currency})]})]}),(null===(we=Ge)||void 0===we?void 0:we.greaterThan(0))||(null===(Ce=Be)||void 0===Ce?void 0:Ce.greaterThan(0))?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(b.SS,{}),(0,i.jsxs)(f.m0,{children:[(0,i.jsx)(F.xv,{fontSize:16,fontWeight:"$medium",children:(0,i.jsxs)(T.cC,{children:[{symbol:null===(Te=Ge)||void 0===Te||null===(ke=Te.currency)||void 0===ke?void 0:ke.symbol}," Fees Earned:"]})}),(0,i.jsxs)(f.DA,{children:[(0,i.jsx)(F.xv,{fontSize:16,fontWeight:"$medium",ml:6,children:Ge&&Ne({amount:Ge})}),(0,i.jsx)(x.Z,{size:20,style:{marginLeft:"8px"},currency:null===(ze=Ge)||void 0===ze?void 0:ze.currency})]})]}),(0,i.jsxs)(f.m0,{children:[(0,i.jsx)(F.xv,{fontSize:16,fontWeight:"$medium",children:(0,i.jsxs)(T.cC,{children:[{symbol:null===($e=Be)||void 0===$e||null===(Se=$e.currency)||void 0===Se?void 0:Se.symbol}," Fees Earned:"]})}),(0,i.jsxs)(f.DA,{children:[(0,i.jsx)(F.xv,{fontSize:16,fontWeight:"$medium",ml:6,children:Be&&Ne({amount:Be})}),(0,i.jsx)(x.Z,{size:20,style:{marginLeft:"8px"},currency:null===(Ie=Be)||void 0===Ie?void 0:Ie.currency})]})]})]}):null]})}),pn&&(0,i.jsxs)(f.m0,{children:[(0,i.jsx)(M.Tv.DeprecatedMain,{children:(0,i.jsxs)(T.cC,{children:["Collect as ",{nativeWrappedSymbol:We}]})}),(0,i.jsx)(g.Z,{id:"receive-as-weth",isActive:Pe,toggle:()=>Le((e=>!e))})]}),(0,i.jsx)("div",{style:{display:"flex"},children:(0,i.jsx)(p.Tz,{gap:"md",style:{flex:"1"},children:(0,i.jsx)(c.gn,{confirmed:!1,disabled:Xe||0===Re||!Ze,onClick:()=>en(!0),children:Xe?(0,i.jsx)(T.cC,{children:"Closed"}):Ve??(0,i.jsx)(T.cC,{children:"Remove"})})})})]}):(0,i.jsx)(y.ZP,{})})]})]})}},5347:(e,n,t)=>{t.d(n,{B:()=>r});var i=t(64370);function r(e){var n;return e.isNative?e:(null===(n=i.Fl[e.chainId])||void 0===n?void 0:n.equals(e))?(0,i.gX)(e.chainId):e}},87270:e=>{e.exports=JSON.parse('{"Mt":[{"inputs":[],"name":"feeGrowthGlobal0X128","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeGrowthGlobal1X128","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidity","outputs":[{"internalType":"uint128","name":"","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"observations","outputs":[{"internalType":"uint32","name":"blockTimestamp","type":"uint32"},{"internalType":"int56","name":"tickCumulative","type":"int56"},{"internalType":"uint160","name":"secondsPerLiquidityCumulativeX128","type":"uint160"},{"internalType":"bool","name":"initialized","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"positions","outputs":[{"internalType":"uint128","name":"_liquidity","type":"uint128"},{"internalType":"uint256","name":"feeGrowthInside0LastX128","type":"uint256"},{"internalType":"uint256","name":"feeGrowthInside1LastX128","type":"uint256"},{"internalType":"uint128","name":"tokensOwed0","type":"uint128"},{"internalType":"uint128","name":"tokensOwed1","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"protocolFees","outputs":[{"internalType":"uint128","name":"token0","type":"uint128"},{"internalType":"uint128","name":"token1","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"slot0","outputs":[{"internalType":"uint160","name":"sqrtPriceX96","type":"uint160"},{"internalType":"int24","name":"tick","type":"int24"},{"internalType":"uint16","name":"observationIndex","type":"uint16"},{"internalType":"uint16","name":"observationCardinality","type":"uint16"},{"internalType":"uint16","name":"observationCardinalityNext","type":"uint16"},{"internalType":"uint8","name":"feeProtocol","type":"uint8"},{"internalType":"bool","name":"unlocked","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"int16","name":"wordPosition","type":"int16"}],"name":"tickBitmap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"int24","name":"tick","type":"int24"}],"name":"ticks","outputs":[{"internalType":"uint128","name":"liquidityGross","type":"uint128"},{"internalType":"int128","name":"liquidityNet","type":"int128"},{"internalType":"uint256","name":"feeGrowthOutside0X128","type":"uint256"},{"internalType":"uint256","name":"feeGrowthOutside1X128","type":"uint256"},{"internalType":"int56","name":"tickCumulativeOutside","type":"int56"},{"internalType":"uint160","name":"secondsPerLiquidityOutsideX128","type":"uint160"},{"internalType":"uint32","name":"secondsOutside","type":"uint32"},{"internalType":"bool","name":"initialized","type":"bool"}],"stateMutability":"view","type":"function"}]}')}}]);
//# sourceMappingURL=301.5f373e62.chunk.js.map