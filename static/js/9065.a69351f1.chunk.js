"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[9065],{74293:(e,i,t)=>{t.d(i,{Z:()=>M});var n=t(92936),r=t(5985),o=t(26729),a=t(47583),s=t(32546),l=t(57852),d=t(6823),c=t(36399),u=t(45779),p=t(14411),h=t(66869),x=t(54972),m=t(55874),g=t(66136),v=t(47841),f=t(93741),y=t(96326),j=t(73720),C=t(69780),b=t(5967),w=t(17706),N=t(94284),_=t(85824),R=t(19996);const I=p.default.div.withConfig({displayName:"CurrencyInputPanel__InputPanel",componentId:"sc-2f6dc0b6-0"})`
  ${m.lt};
  position: relative;
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  background-color: ${({theme:e,hideInput:i})=>i?"transparent":e.surface2};

  z-index: 1;
  width: ${({hideInput:e})=>e?"100%":"initial"};
  transition: height 1s ease;
  will-change: height;
`,A=p.default.div.withConfig({displayName:"CurrencyInputPanel__Container",componentId:"sc-2f6dc0b6-1"})`
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  border: 1px solid ${({theme:e})=>e.surface3};
  background-color: ${({theme:e})=>e.surface2};
  width: ${({hideInput:e})=>e?"100%":"initial"};
  ${({theme:e,hideInput:i,disabled:t})=>!t&&`\n    :focus,\n    :hover {\n      border: 1px solid ${i?" transparent":e.surface2};\n    }\n  `}
`,T=(0,p.default)(C.Ux).withConfig({displayName:"CurrencyInputPanel__CurrencySelect",componentId:"sc-2f6dc0b6-2"})`
  align-items: center;
  background-color: ${({selected:e,theme:i})=>e?i.surface1:i.accent1};
  opacity: ${({disabled:e})=>e?.4:1};
  box-shadow: ${({theme:e})=>e.deprecated_shallowShadow};
  color: ${({selected:e,theme:i})=>e?i.neutral1:i.white};
  cursor: pointer;
  border-radius: 16px;
  outline: none;
  user-select: none;
  border: none;
  font-size: 24px;
  font-weight: 535;
  height: ${({hideInput:e})=>e?"2.8rem":"2.4rem"};
  width: ${({hideInput:e})=>e?"100%":"initial"};
  padding: 0 8px;
  justify-content: space-between;
  margin-left: ${({hideInput:e})=>e?"0":"12px"};
  :focus,
  :hover {
    background-color: ${({selected:e,theme:i})=>e?i.surface2:(0,c._j)(.05,i.accent1)};
  }
  visibility: ${({visible:e})=>e?"visible":"hidden"};
  ${({pointerEvents:e})=>e&&"pointer-events: none"}
`,k=p.default.div.withConfig({displayName:"CurrencyInputPanel__InputRow",componentId:"sc-2f6dc0b6-3"})`
  ${m.MG};
  align-items: center;
  justify-content: space-between;
  padding: ${({selected:e})=>e?" 1rem 1rem 0.75rem 1rem":"1rem 1rem 1rem 1rem"};
`,S=p.default.div.withConfig({displayName:"CurrencyInputPanel__LabelRow",componentId:"sc-2f6dc0b6-4"})`
  ${m.MG};
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0 1rem 1rem;
  span:hover {
    cursor: pointer;
    color: ${({theme:e})=>(0,c._j)(.2,e.neutral2)};
  }
`,E=(0,p.default)(S).withConfig({displayName:"CurrencyInputPanel__FiatRow",componentId:"sc-2f6dc0b6-5"})`
  justify-content: flex-end;
  padding: 0px 1rem 0.75rem;
  height: 32px;
`,$=p.default.span.withConfig({displayName:"CurrencyInputPanel__Aligner",componentId:"sc-2f6dc0b6-6"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  line-height: 0px;
`,B=(0,p.default)(y.r).withConfig({displayName:"CurrencyInputPanel__StyledDropDown",componentId:"sc-2f6dc0b6-7"})`
  margin: 0 0.25rem 0 0.35rem;
  height: 35%;

  path {
    stroke: ${({selected:e,theme:i})=>e?i.neutral1:i.white};
    stroke-width: 1.5px;
  }
`,U=p.default.span.withConfig({displayName:"CurrencyInputPanel__StyledTokenName",componentId:"sc-2f6dc0b6-8"})`
  ${({active:e})=>"  margin: 0 0.25rem 0 0.25rem;"}
  font-size: 20px;
  white-space: nowrap;

  @media screen and (max-width: ${h.j$.sm}px) {
    font-size: 16px;
  }
`,D=p.default.button.withConfig({displayName:"CurrencyInputPanel__StyledBalanceMax",componentId:"sc-2f6dc0b6-9"})`
  background-color: transparent;
  background-color: ${({theme:e})=>e.accent2};
  border: none;
  border-radius: 12px;
  color: ${({theme:e})=>e.accent1};
  cursor: pointer;
  font-size: 11px;
  font-weight: 535;
  margin-left: 0.25rem;
  opacity: ${({disabled:e})=>e?.4:1};
  padding: 4px 6px;
  pointer-events: ${({disabled:e})=>e?"none":"initial"};

  :hover {
    opacity: ${({disabled:e})=>e?.4:.8};
  }

  :focus {
    outline: none;
  }
`,L=(0,p.default)(w.I).withConfig({displayName:"CurrencyInputPanel__StyledNumericalInput",componentId:"sc-2f6dc0b6-10"})`
  ${s._Q};
  text-align: left;
`,P=(0,p.default)(f.Kh).withConfig({displayName:"CurrencyInputPanel__StyledPrefetchBalancesWrapper",componentId:"sc-2f6dc0b6-11"})`
  width: ${({$fullWidth:e})=>e?"100%":"auto"};
`;function M({value:e,onUserInput:i,onMax:t,showMaxButton:c,onCurrencySelect:h,currency:m,otherCurrency:f,id:y,currencySearchFilters:C,showCurrencyAmount:w,renderBalance:S,fiatValue:M,hideBalance:z=!1,pair:F=null,hideInput:O=!1,locked:Y=!1,loading:q=!1,...W}){var H,Z,G,V,K;const[X,J]=(0,u.useState)(!1),{account:Q,chainId:ee}=(0,o.G)(),ie=(0,l.Nb)(ee),te=(0,j._h)(Q??void 0,m??void 0),ne=(0,p.useTheme)(),{formatCurrencyAmount:re}=(0,g.Gb)(),oe=(0,u.useCallback)((()=>{J(!1)}),[J]);return(0,n.jsxs)(I,{id:y,hideInput:O,...W,children:[!Y&&(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(A,{hideInput:O,disabled:!ie,children:[(0,n.jsxs)(k,{style:O?{padding:"0",borderRadius:"8px"}:{},selected:!h,children:[!O&&(0,n.jsx)(L,{className:"token-amount-input",value:e,onUserInput:i,disabled:!ie,$loading:q,maxDecimals:null===(H=m)||void 0===H?void 0:H.decimals}),(0,n.jsx)(P,{$fullWidth:O,children:(0,n.jsx)(T,{disabled:!ie,visible:void 0!==m,selected:!!m,hideInput:O,className:"open-currency-select-button",onClick:()=>{h&&J(!0)},pointerEvents:h?void 0:"none",children:(0,n.jsxs)($,{children:[(0,n.jsxs)(N.DA,{children:[F?(0,n.jsx)("span",{style:{marginRight:"0.5rem"},children:(0,n.jsx)(v.ge,{currencies:[F.token0,F.token1],size:24})}):m&&(0,n.jsx)(b.Z,{style:{marginRight:"0.5rem"},currency:m,size:24}),F?(0,n.jsxs)(U,{className:"pair-name-container",children:[null===(Z=F)||void 0===Z?void 0:Z.token0.symbol,":",null===(G=F)||void 0===G?void 0:G.token1.symbol]}):(0,n.jsx)(U,{className:"token-symbol-container",active:Boolean(m&&m.symbol),children:(m&&m.symbol&&m.symbol.length>20?m.symbol.slice(0,4)+"..."+m.symbol.slice(m.symbol.length-5,m.symbol.length):null===(V=m)||void 0===V?void 0:V.symbol)||(0,n.jsx)(d.cC,{children:"Select a token"})})]}),h&&(0,n.jsx)(B,{selected:!!m})]})})})]}),Boolean(!O&&!z&&m)&&(0,n.jsx)(E,{children:(0,n.jsxs)(N.m0,{children:[(0,n.jsx)(s.EG,{$loading:q,children:M&&(0,n.jsx)(R.x,{fiatValue:M})}),Q&&(0,n.jsxs)(N.DA,{style:{height:"17px"},children:[(0,n.jsx)(x.Tv.DeprecatedBody,{onClick:t,color:ne.neutral3,fontWeight:535,fontSize:14,style:{display:"inline",cursor:"pointer"},children:Boolean(!z&&m&&te)&&((null===(K=S)||void 0===K?void 0:K(te))||(0,n.jsxs)(d.cC,{children:["Balance:"," ",{amount:re({amount:te,type:g.sw.TokenNonTx})}]}))}),Boolean(c&&te)&&(0,n.jsx)(a.M8,{events:[r.TM.onClick],name:r.Q0.SWAP_MAX_TOKEN_AMOUNT_SELECTED,element:r.xo.MAX_TOKEN_AMOUNT_BUTTON,children:(0,n.jsx)(D,{onClick:t,children:(0,n.jsx)(d.cC,{children:"MAX"})})})]})]})})]})}),h&&(0,n.jsx)(_.Z,{isOpen:X,onDismiss:oe,onCurrencySelect:h,selectedCurrency:m,otherSelectedCurrency:f,showCurrencyAmount:w,currencySearchFilters:C})]})}},39753:(e,i,t)=>{t.d(i,{q:()=>b,w:()=>N});var n=t(92936),r=t(69751),o=t(6823),a=t(21926),s=t(43454),l=t(6282),d=t(22953),c=t(47856),u=t(47632),p=t(31744),h=t(14411),x=t(54972),m=t(55874),g=t(72993),v=t(94284);const f=h.default.div.withConfig({displayName:"NavigationTabs__Tabs",componentId:"sc-b5b2ff8c-0"})`
  ${m.MG};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,y=(0,h.default)(s.rU).withConfig({displayName:"NavigationTabs__StyledLink",componentId:"sc-b5b2ff8c-1"})`
  flex: ${({flex:e})=>e??"none"};
  display: flex;
  align-items: center;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `};
`,j=(0,h.default)(x.Tv.H1Small).withConfig({displayName:"NavigationTabs__FindPoolTabsText",componentId:"sc-b5b2ff8c-2"})`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,C=(0,h.default)(a.Z).withConfig({displayName:"NavigationTabs__StyledArrowLeft",componentId:"sc-b5b2ff8c-3"})`
  color: ${({theme:e})=>e.neutral1};
`;function b({origin:e}){return(0,n.jsx)(f,{children:(0,n.jsxs)(v.m0,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,n.jsx)(s.rU,{to:e,children:(0,n.jsx)(C,{})}),(0,n.jsx)(j,{children:(0,n.jsx)(o.cC,{children:"Import V2 pool"})})]})})}const w=(0,h.default)(x.Tv.H1Small).withConfig({displayName:"NavigationTabs__AddRemoveTitleText",componentId:"sc-b5b2ff8c-4"})`
  flex: 1;
  margin: auto;
  text-align: ${({$center:e})=>e?"center":"start"};
`;function N({adding:e,creating:i,autoSlippage:t,children:a}){const s=(0,g.x)(),x=(0,h.useTheme)(),m=(0,c.T)(),j=(0,l.s0)();return(0,n.jsx)(f,{children:(0,n.jsxs)(v.m0,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,n.jsx)(y,{to:"..",onClick:i=>{i.preventDefault(),j(-1),e&&(m((0,u.dA)()),m((0,p.dA)()))},flex:a?"1":void 0,children:(0,n.jsx)(C,{stroke:x.neutral2})}),(0,n.jsx)(w,{$center:!a,children:i?(0,n.jsx)(o.cC,{children:"Create a pair"}):e?(0,n.jsx)(o.cC,{children:"Add liquidity"}):(0,n.jsx)(o.cC,{children:"Remove liquidity"})}),a&&(0,n.jsx)(d.xu,{style:{marginRight:".5rem"},children:a}),(0,n.jsx)(r.Z,{autoSlippage:t,chainId:s,hideRoutingSettings:!0})]})})}},82731:(e,i,t)=>{t.d(i,{SS:()=>h,sq:()=>d,MN:()=>c,RF:()=>u,uO:()=>p,I8:()=>l});var n=t(14411);const r=t.p+"static/media/big_unicorn.595c49962d708abbaaec.png",o=t.p+"static/media/noise.3c7efafc83614205bd1a.png",a=t.p+"static/media/xl_uni.9c9e061bed67e15ad3c8.png";var s=t(44591);const l=(0,n.default)(s.Tz).withConfig({displayName:"styled__DataCard",componentId:"sc-6a13bc9-0"})`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #2172e5 100%);
  border-radius: 12px;
  width: 100%;
  position: relative;
  overflow: hidden;
`,d=n.default.span.withConfig({displayName:"styled__CardBGImage",componentId:"sc-6a13bc9-1"})`
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
`,c=n.default.span.withConfig({displayName:"styled__CardBGImageSmaller",componentId:"sc-6a13bc9-2"})`
  background: url(${a});
  width: 1200px;
  height: 1200px;
  position: absolute;
  border-radius: 12px;
  top: -300px;
  left: -300px;
  opacity: 0.4;
  user-select: none;

  ${({desaturate:e})=>e&&"filter: saturate(0)"}
`,u=n.default.span.withConfig({displayName:"styled__CardNoise",componentId:"sc-6a13bc9-3"})`
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
`,p=(0,n.default)(s.Tz).withConfig({displayName:"styled__CardSection",componentId:"sc-6a13bc9-4"})`
  padding: 1rem;
  z-index: 1;
  opacity: ${({disabled:e})=>e&&"0.4"};
`,h=n.default.div.withConfig({displayName:"styled__Break",componentId:"sc-6a13bc9-5"})`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
`},31508:(e,i,t)=>{t.d(i,{Z:()=>w});var n=t(92936),r=t(69780),o=t(61182),a=t(44591),s=t(5967),l=t(2562),d=t(94284),c=t(39671),u=t(6823),p=t(45779),h=t(14411),x=t(54972),m=t(62587),g=t(5931),v=t(70854),f=t(72993),y=t(54703);const j=h.default.div.withConfig({displayName:"UnsupportedCurrencyFooter__DetailsFooter",componentId:"sc-9edf5df5-0"})`
  padding-top: calc(16px + 2rem);
  padding-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -2rem;
  width: 100%;
  max-width: 400px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  color: ${({theme:e})=>e.neutral2};
  background-color: ${({theme:e})=>e.surface2};
  z-index: ${m.k.deprecated_zero};

  transform: ${({show:e})=>e?"translateY(0%)":"translateY(-100%)"};
  transition: transform 300ms ease-in-out;
  text-align: center;
`,C=(0,h.default)(r.qL).withConfig({displayName:"UnsupportedCurrencyFooter__StyledButtonEmpty",componentId:"sc-9edf5df5-1"})`
  text-decoration: none;
`,b=(0,h.default)(g.xv).withConfig({displayName:"UnsupportedCurrencyFooter__AddressText",componentId:"sc-9edf5df5-2"})`
  color: ${({theme:e})=>e.accent1};
  font-size: 12px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    font-size: 10px;
`}
`;function w({show:e,currencies:i}){const t=(0,f.x)(),[r,s]=(0,p.useState)(!1),c=t&&i?i.map((e=>{var i;return null===(i=e)||void 0===i?void 0:i.wrapped})):[];return(0,n.jsxs)(j,{show:e,children:[(0,n.jsx)(l.Z,{isOpen:r,onDismiss:()=>s(!1),children:(0,n.jsx)(o.ZP,{padding:"2rem",children:(0,n.jsxs)(a.Tz,{gap:"lg",children:[(0,n.jsxs)(d.m0,{children:[(0,n.jsx)(x.Tv.DeprecatedMediumHeader,{children:(0,n.jsx)(u.cC,{children:"Unsupported assets"})}),(0,n.jsx)(x.Tw,{onClick:()=>s(!1),"data-testid":"close-icon"})]}),c.map((e=>{var i,r;return(0,n.jsx)(N,{token:e,chainId:t},null===(r=e)||void 0===r||null===(i=r.address)||void 0===i?void 0:i.concat("not-supported"))})),(0,n.jsx)(a.Tz,{gap:"lg",children:(0,n.jsx)(x.Tv.DeprecatedBody,{fontWeight:535,children:(0,n.jsx)(u.cC,{children:"Some assets are not available through this interface because they may not work well with the smart contracts or we are unable to allow trading for legal reasons."})})})]})})}),(0,n.jsx)(C,{padding:"0",onClick:()=>s(!0),"data-testid":"read-more-button",children:(0,n.jsx)(g.xv,{color:"$accent1",children:(0,n.jsx)(u.cC,{children:"Read more about unsupported assets"})})})]})}function N({token:e,chainId:i}){var t,r,l,u;const p=(0,c.J3)(e);return!e||!(null===(t=p)||void 0===t?void 0:t.isSpam)&&(null===(r=p)||void 0===r?void 0:r.safetyLevel)===v.wEf.Verified?null:(0,n.jsx)(o.nq,{"data-testid":"unsupported-token-card",children:(0,n.jsxs)(a.Tz,{gap:"10px",children:[(0,n.jsxs)(d.BA,{gap:"5px",align:"center",children:[(0,n.jsx)(s.Z,{currency:e,size:24}),(0,n.jsx)(x.Tv.DeprecatedBody,{fontWeight:535,children:e.symbol})]}),i&&(0,n.jsx)(x.dL,{href:(0,y.E)(i,e.address,y.r.ADDRESS),children:(0,n.jsx)(b,{children:e.address})})]})},null===(u=e)||void 0===u||null===(l=u.address)||void 0===l?void 0:l.concat("not-supported"))}},36813:(e,i,t)=>{t.d(i,{K:()=>j});var n=t(76078),r=t(21651),o=t(26729),a=t(63945),s=t(61592),l=t.n(s),d=t(63490),c=t.n(d),u=t(45779);const p=8;function h(e,i,t,n,o,a){let s={...t},d=[];for(let c=o+(a?1:-1);a?c<n.length:c>=0;a?c++:c--){const t=Number(n[c].tick),o=(0,r.tickToPrice)(e,i,t),u={liquidityActive:s.liquidityActive,tick:t,liquidityNet:l().BigInt(n[c].liquidityNet),price0:o.toFixed(p),sdkPrice:o};a?u.liquidityActive=l().add(s.liquidityActive,l().BigInt(n[c].liquidityNet)):!a&&l().notEqual(s.liquidityNet,l().BigInt(0))&&(u.liquidityActive=l().subtract(s.liquidityActive,s.liquidityNet)),d.push(u),s=u}return a||(d=d.reverse()),d}var x=t(25321),m=t(55660);const g=8,v=(e,i)=>e&&i?Math.floor(e/r.TICK_SPACINGS[i])*r.TICK_SPACINGS[i]:void 0;const f=1e3;function y(e,i,t,o){var s,l;const[d,p]=(0,u.useState)(0),[h,m]=(0,u.useState)([]),{data:g,error:v,loading:y}=function(e,i,t,o=0,s){var l,d,u;const p=x.u[s],h=e&&i&&t?r.Pool.getAddress(null===(l=e)||void 0===l?void 0:l.wrapped,null===(d=i)||void 0===d?void 0:d.wrapped,t,void 0,s?n.V3_CORE_FACTORY_ADDRESSES[s]:void 0):void 0;return(0,a.K_)({variables:{poolAddress:null===(u=h)||void 0===u?void 0:u.toLowerCase(),skip:o},skip:!h,pollInterval:c()("30s"),client:p})}(e,i,t,d,o);return(0,u.useEffect)((()=>{var e;(null===(e=g)||void 0===e?void 0:e.ticks.length)&&(m((e=>[...e,...g.ticks])),g.ticks.length===f&&p((e=>e+f)))}),[null===(s=g)||void 0===s?void 0:s.ticks]),{isLoading:y||(null===(l=g)||void 0===l?void 0:l.ticks.length)===f,error:v,ticks:h}}function j(e,i,t,a){var s,d,c,p,x;const f=(0,o.G)().chainId??n.ChainId.MAINNET,j=(0,m.$o)(null===(s=e)||void 0===s?void 0:s.wrapped,null===(d=i)||void 0===d?void 0:d.wrapped,t,a??f),C=null===(c=j[1])||void 0===c?void 0:c.liquidity,b=null===(p=j[1])||void 0===p?void 0:p.sqrtRatioX96,w=null===(x=j[1])||void 0===x?void 0:x.tickCurrent,N=(0,u.useMemo)((()=>v(w,t)),[w,t]),{isLoading:_,error:R,ticks:I}=y(e,i,t,a??f);return(0,u.useMemo)((()=>{var t,n,o;if(!e||!i||void 0===N||j[0]!==m.tK.EXISTS||!I||0===I.length||_)return{isLoading:_||j[0]===m.tK.LOADING,error:R,activeTick:N,data:void 0};const a=null===(t=e)||void 0===t?void 0:t.wrapped,s=null===(n=i)||void 0===n?void 0:n.wrapped,d=I.findIndex((({tick:e})=>e>N))-1;if(d<0)return console.error("TickData pivot not found"),{isLoading:_,error:R,activeTick:N,data:void 0};const c=(0,r.tickToPrice)(a,s,N),u={liquidityActive:l().BigInt((null===(o=j[1])||void 0===o?void 0:o.liquidity)??0),tick:N,liquidityNet:Number(I[d].tick)===N?l().BigInt(I[d].liquidityNet):l().BigInt(0),price0:c.toFixed(g),sdkPrice:c},p=h(a,s,u,I,d,!0),x=h(a,s,u,I,d,!1).concat(u).concat(p);return{isLoading:_,error:R,currentTick:w,activeTick:N,liquidity:C,sqrtPriceX96:b,data:x}}),[e,i,N,j,I,_,R,w,C,b])}},45381:(e,i,t)=>{t.r(i),t.d(i,{default:()=>Xi});var n=t(92936),r=t(6282),o=t(72993),a=t(64370),s=t(11604),l=t(5985),d=t(76078),c=t(21651),u=t(47583),p=t(25320),h=t(6823),x=t(57221),m=t(14411),g=t(54972);const v=m.default.div.withConfig({displayName:"OwnershipWarning__ExplainerText",componentId:"sc-2941511d-0"})`
  color: ${({theme:e})=>e.neutral2};
`,f=m.default.div.withConfig({displayName:"OwnershipWarning__TitleRow",componentId:"sc-2941511d-1"})`
  align-items: center;
  display: flex;
  flex-direction: row;
  color: ${({theme:e})=>e.deprecated_accentWarning};
  margin-bottom: 8px;
`,y=m.default.div.withConfig({displayName:"OwnershipWarning__Wrapper",componentId:"sc-2941511d-2"})`
  background-color: ${({theme:e})=>e.deprecated_accentWarningSoft};
  border-radius: 16px;
  margin-top: 12px;
  max-width: 480px;
  padding: 12px 20px;
  width: 100%;
`,j=({ownerAddress:e})=>(0,n.jsxs)(y,{children:[(0,n.jsxs)(f,{children:[(0,n.jsx)(x.Z,{style:{marginRight:"8px"}}),(0,n.jsx)(g.Tv.SubHeader,{color:"deprecated_accentWarning",children:(0,n.jsx)(h.cC,{children:"Warning"})})]}),(0,n.jsx)(v,{children:(0,n.jsxs)(h.cC,{children:["You are not the owner of this LP position. You will not be able to withdraw the liquidity from this position unless you own the following address: ",{ownerAddress:e}]})})]});var C=t(31508),b=t(57852),w=t(33986),N=t(84938),_=t(65118),R=t(26522),I=t(45779),A=t(437),T=t(43454),k=t(56360),S=t(5931),E=t(38004),$=t(63420),B=t(66136),U=t(44591),D=t(94284),L=t(28561),P=t(59293);const M=m.default.div.withConfig({displayName:"PoolWarning__Container",componentId:"sc-14fa9577-0"})`
  height: 100%;
  width: 100%;
  max-width: 550px;
  padding: 12px;
  border-radius: 20px;
  border: 1px solid ${({theme:e})=>e.surface3};
  background: ${({theme:e})=>e.surface2};
`,z=(0,m.default)(U.ZP).withConfig({displayName:"PoolWarning__StyledColumn",componentId:"sc-14fa9577-1"})`
  height: 100%;
`,F=m.default.div.withConfig({displayName:"PoolWarning__IconContainer",componentId:"sc-14fa9577-2"})`
  height: 40px;
  width: 40px;
  padding: 10px;
  border-radius: 12px;
  background: ${({theme:e})=>e.critical2};
`;function O({title:e,subtitle:i,link:t}){return(0,n.jsx)(M,{children:(0,n.jsxs)(D.ZP,{gap:"md",height:"100%",children:[(0,n.jsx)(z,{children:(0,n.jsx)(F,{children:(0,n.jsx)(L.u,{color:"$statusCritical",size:P._.icon20})})}),(0,n.jsxs)(z,{gap:"xs",children:[(0,n.jsx)(S.xv,{variant:"body3",color:"$neutral1",children:e}),(0,n.jsx)(S.xv,{variant:"body3",color:"$neutral2",children:i}),(0,n.jsx)(g.dL,{href:t,children:(0,n.jsx)(S.xv,{variant:"buttonLabel4",color:"$neutral1",children:(0,n.jsx)(h.cC,{children:"Learn more"})})})]})]})})}var Y=t(32207),q=t(85579);function W(){return(0,n.jsx)(O,{title:(0,n.jsx)(q.cC,{children:"Pool out of sync"}),subtitle:(0,n.jsx)(q.cC,{children:"This pool is out of sync with market prices. Adding liquidity at the suggested ratios may result in loss of funds."}),link:Y.c.IMPERMANENT_LOSS})}function H(){return(0,n.jsx)(O,{title:(0,n.jsx)(q.cC,{children:"Token taxes"}),subtitle:(0,n.jsx)(q.cC,{children:"One or more of these tokens have taxes on transfers. Adding liquidity with V3 may result in loss of funds. Try using V2 instead."}),link:Y.c.TOKEN_FEE_ON_TRANSFER})}var Z=t(51001),G=t(80182),V=t(61592),K=t.n(V),X=t(32682),J=t(25564);const Q=new d.Fraction(5,100),ee=K().exponentiate(K().BigInt(10),K().BigInt(18));function ie(e){var i,t,n,r;const o=function(e,i){var t,n;const r=(0,J.L)(e?d.CurrencyAmount.fromRawAmount(e,K().BigInt((0,G.parseUnits)("1",null===(t=e)||void 0===t?void 0:t.decimals))):void 0,e),o=(0,X.cM)(r.data),a=(0,J.L)(i?d.CurrencyAmount.fromRawAmount(i,K().BigInt((0,G.parseUnits)("1",null===(n=i)||void 0===n?void 0:n.decimals))):void 0,i),s=(0,X.cM)(a.data);if(!o||!s)return;return new d.Fraction(o.multiply(ee).toFixed(0),s.multiply(ee).toFixed(0))}(null===(i=e)||void 0===i?void 0:i.baseCurrency,null===(t=e)||void 0===t?void 0:t.quoteCurrency);if(!e||!o)return!1;const a=K().BigInt(o.multiply(ee).toFixed(0)),s=K().BigInt(e.quote(d.CurrencyAmount.fromRawAmount(null===(n=e.baseCurrency)||void 0===n?void 0:n.wrapped,K().BigInt((0,G.parseUnits)("1",null===(r=e.baseCurrency)||void 0===r?void 0:r.decimals)))).multiply(ee).toFixed(0)),l=K().lessThan(a,s)?K().subtract(s,a):K().subtract(a,s);return new d.Fraction(l,a).greaterThan(Q)}var te=t(64505),ne=t(91762),re=t(45556),oe=t(86082);const ae=(0,m.default)(re.Z).withConfig({displayName:"blastAlerts__StyledAlertIcon",componentId:"sc-aef4997a-0"})`
  path {
    fill: ${({theme:e})=>e.neutral2};
  }
`,se=(0,m.default)(D.ZP).withConfig({displayName:"blastAlerts__AlertContainer",componentId:"sc-aef4997a-1"})`
  background-color: ${({theme:e})=>e.surface2};
  padding: 12px;
  border-radius: 20px;
  gap: 12px;
  justify-content: space-between;
  align-items: flex-start;
`,le=m.default.div.withConfig({displayName:"blastAlerts__AlertIconContainer",componentId:"sc-aef4997a-2"})`
  display: flex;
  flex-shrink: 0;
  background-color: ${({theme:e})=>e.surface3};
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`,de=(0,m.default)(g.dL).withConfig({displayName:"blastAlerts__StyledLearnMore",componentId:"sc-aef4997a-3"})`
  display: inline-block;
`;function ce({currencyIdA:e,currencyIdB:i,onContinue:t}){const o=(0,r.s0)();return(0,n.jsx)(ne.Vq,{isVisible:!0,icon:(0,n.jsx)(ae,{size:"28px"}),title:(0,n.jsx)(g.Tv.HeadlineMedium,{fontSize:"24px",children:(0,n.jsx)(h.cC,{children:"Rebasing is unavailable on v3"})}),description:(0,n.jsx)(h.cC,{children:"On Blast, USDB and WETH are rebasing tokens that automatically earn yield. Due to incompatibility with Uniswap v3, LP positions with USDB or WETH won't earn rebasing yield, but will in Uniswap v2."}),body:(0,n.jsx)(g.dL,{href:"https://support.uniswap.org/hc/en-us/articles/25351747812109-Blast-Rebase-Tokens",children:(0,n.jsx)(g.Tv.BodyPrimary,{fontWeight:535,lineHeight:"24px",children:"Learn more"})}),onCancel:t,buttonsConfig:{left:{title:(0,n.jsx)(h.cC,{children:"Continue on v3"}),onClick:t},right:{title:(0,n.jsx)(h.cC,{children:"Switch to v2"}),onClick:()=>o(`/add/v2/${e??"ETH"}/${i??""}`),type:ne.bj.Accent},gap:"sm"}})}const ue=(0,m.default)(g.Tv.SubHeaderSmall).withConfig({displayName:"blastAlerts__TextWrapper",componentId:"sc-aef4997a-4"})`
  display: -webkit-box;
  -webkit-line-clamp: ${({$expanded:e})=>e?"none":2};
  -webkit-box-orient: vertical;
  overflow: hidden;
`,pe=(0,m.default)(g.oD).withConfig({displayName:"blastAlerts__ReadMore",componentId:"sc-aef4997a-5"})`
  display: flex;
  color: ${({theme:e})=>e.neutral2};
  justify-content: flex-start;
  gap: 4px;
  align-items: center;

  :focus {
    text-decoration: none;
  }
`,he=(0,m.default)(oe.Z).withConfig({displayName:"blastAlerts__StyledChevronDown",componentId:"sc-aef4997a-6"})`
  transform: ${({$expanded:e})=>e&&"rotate(-180deg)"};
  transition: ${({theme:{transition:{duration:e,timing:i}}})=>`transform ${e.fast} ${i.inOut}`};
`;function xe(){const[e,i]=(0,I.useState)(!1),t=(0,I.useCallback)((()=>i(!e)),[e]);return(0,n.jsxs)(se,{children:[(0,n.jsx)(le,{children:(0,n.jsx)(ae,{size:"20px"})}),(0,n.jsxs)(U.ZP,{gap:"xs",children:[(0,n.jsx)(g.Tv.SubHeader,{lineHeight:"24px",children:(0,n.jsx)(h.cC,{children:"Rebasing unavailable on v3"})}),(0,n.jsxs)(ue,{lineHeight:"20px",$expanded:e,children:[(0,n.jsx)(h.cC,{children:"On Blast, USDB and WETH are rebasing tokens that automatically earn yield. Due to incompatibility with Uniswap v3, LP positions with USDB or WETH won't earn rebasing yield, but will in Uniswap v2."})," ",(0,n.jsx)(de,{href:"https://support.uniswap.org/hc/en-us/articles/25351747812109-Blast-Rebase-Tokens",children:(0,n.jsx)(g.Tv.SubHeaderSmall,{fontWeight:535,lineHeight:"20px",color:"neutral1",children:(0,n.jsx)(h.cC,{children:"Learn more"})})})]}),(0,n.jsxs)(pe,{onClick:t,children:[(0,n.jsx)(g.Tv.SubHeaderSmall,{lineHeight:"20px",fontWeight:535,children:e?(0,h.t)("Read less"):(0,h.t)("Read more")}),(0,n.jsx)(he,{$expanded:e,size:16})]})]})]})}var me=t(590),ge=t(69780),ve=t(61182),fe=t(74293),ye=t(89482),je=t(23116),Ce=t(63415),be=t(3359),we=t(36399),Ne=t(13310),_e=t(70576),Re=t(28324),Ie=t(506),Ae=t(31744),Te=t(37399);const ke=m.default.path.withConfig({displayName:"Area__Path",componentId:"sc-c8247e1b-0"})`
  opacity: 0.5;
  stroke: ${({fill:e,theme:i})=>e??i.accent1};
  fill: ${({fill:e,theme:i})=>e??i.accent1};
`,Se=({series:e,xScale:i,yScale:t,xValue:r,yValue:o,fill:a})=>(0,I.useMemo)((()=>(0,n.jsx)(ke,{fill:a,d:(0,Te.SOn)().curve(Te.jsv).x((e=>i(r(e)))).y1((e=>t(o(e)))).y0(t(0))(e.filter((e=>{const t=i(r(e));return t>0&&t<=window.innerWidth})))??void 0})),[a,e,i,r,t,o]),Ee=m.default.g.withConfig({displayName:"AxisBottom__StyledGroup",componentId:"sc-1b9173d1-0"})`
  line {
    display: none;
  }

  text {
    color: ${({theme:e})=>e.neutral2};
    transform: translateY(5px);
  }
`,$e=({axisGenerator:e})=>(0,n.jsx)("g",{ref:i=>{i&&(0,Te.Ys)(i).call(e).call((e=>e.select(".domain").remove()))}}),Be=({xScale:e,innerHeight:i,offset:t=0})=>(0,I.useMemo)((()=>(0,n.jsx)(Ee,{transform:`translate(0, ${i+t})`,children:(0,n.jsx)($e,{axisGenerator:(0,Te.LLu)(e).ticks(6)})})),[i,t,e]),Ue=e=>["M 0 0",`v ${e}`,"m 1 0","V 0","M 0 1","h 12","q 2 0, 2 2","v 22","q 0 2 -2 2","h -12","z"].join(" "),De=()=>["m 5 7","v 14","M 0 0","m 9 7","v 14","z"].join(" "),Le=({color:e,size:i=10,margin:t=10})=>(0,n.jsx)("polygon",{points:`0 0, ${i} ${i}, 0 ${i}`,transform:` translate(${i+t}, ${t}) rotate(45) `,fill:e,stroke:e,strokeWidth:"4",strokeLinejoin:"round"}),Pe=m.default.path.withConfig({displayName:"Brush__Handle",componentId:"sc-ed435ec7-0"})`
  cursor: ew-resize;
  pointer-events: none;

  stroke-width: 3;
  stroke: ${({color:e})=>e};
  fill: ${({color:e})=>e};
`,Me=m.default.path.withConfig({displayName:"Brush__HandleAccent",componentId:"sc-ed435ec7-1"})`
  cursor: ew-resize;
  pointer-events: none;

  stroke-width: 1.5;
  stroke: ${({theme:e})=>e.white};
  opacity: ${({theme:e})=>e.opacity.hover};
`,ze=m.default.g.withConfig({displayName:"Brush__LabelGroup",componentId:"sc-ed435ec7-2"})`
  opacity: ${({visible:e})=>e?"1":"0"};
  transition: opacity 300ms;
`,Fe=m.default.rect.withConfig({displayName:"Brush__TooltipBackground",componentId:"sc-ed435ec7-3"})`
  fill: ${({theme:e})=>e.surface3};
`,Oe=m.default.text.withConfig({displayName:"Brush__Tooltip",componentId:"sc-ed435ec7-4"})`
  text-anchor: middle;
  font-size: 13px;
  fill: ${({theme:e})=>e.neutral1};
`,Ye=(e,i,t)=>{const n=e.map((e=>t(e).toFixed(1))),r=i.map((e=>t(e).toFixed(1)));return n.every(((e,i)=>e===r[i]))},qe=({id:e,xScale:i,interactive:t,brushLabelValue:r,brushExtent:o,setBrushExtent:a,innerWidth:s,innerHeight:l,westHandleColor:d,eastHandleColor:c})=>{const u=(0,I.useRef)(null),p=(0,I.useRef)(null),[h,x]=(0,I.useState)(o),[m,g]=(0,I.useState)(!1),[v,f]=(0,I.useState)(!1),y=(0,w.Z)(o),j=(0,I.useCallback)((e=>{const{type:t,selection:n,mode:r}=e;if(!n)return void x(null);const s=n.map(i.invert);"end"!==t||Ye(o,s,i)||a(s,r),x(s)}),[i,o,a]);(0,I.useEffect)((()=>{x(o)}),[o]),(0,I.useEffect)((()=>{u.current&&(p.current=(0,Te.Yud)().extent([[Math.max(2,i(0)),0],[s-2,l]]).handleSize(30).filter((()=>t)).on("brush end",j),p.current((0,Te.Ys)(u.current)),y&&Ye(o,y,i)&&(0,Te.Ys)(u.current).transition().call(p.current.move,o.map(i)),(0,Te.Ys)(u.current).selectAll(".selection").attr("stroke","none").attr("fill-opacity","0.1").attr("fill",`url(#${e}-gradient-selection)`))}),[o,j,e,l,s,t,y,i]),(0,I.useEffect)((()=>{u.current&&p.current&&p.current.move((0,Te.Ys)(u.current),o.map(i))}),[o,i]),(0,I.useEffect)((()=>{g(!0);const e=setTimeout((()=>g(!1)),1500);return()=>clearTimeout(e)}),[h]);const C=h&&i(h[0])>20,b=h&&i(h[1])>s-20,N=h&&(i(h[0])<0||i(h[1])<0),_=h&&(i(h[0])>s||i(h[1])>s),R=h&&i(h[0])>=0&&i(h[0])<=s,A=h&&i(h[1])>=0&&i(h[1])<=s;return(0,I.useMemo)((()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("defs",{children:[(0,n.jsxs)("linearGradient",{id:`${e}-gradient-selection`,x1:"0%",y1:"100%",x2:"100%",y2:"100%",children:[(0,n.jsx)("stop",{stopColor:d}),(0,n.jsx)("stop",{stopColor:c,offset:"1"})]}),(0,n.jsx)("clipPath",{id:`${e}-brush-clip`,children:(0,n.jsx)("rect",{x:"0",y:"0",width:s,height:l})})]}),(0,n.jsx)("g",{ref:u,clipPath:`url(#${e}-brush-clip)`,onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1)}),h&&(0,n.jsxs)(n.Fragment,{children:[R?(0,n.jsxs)("g",{transform:`translate(${Math.max(0,i(h[0]))}, 0), scale(${C?"-1":"1"}, 1)`,children:[(0,n.jsxs)("g",{children:[(0,n.jsx)(Pe,{color:d,d:Ue(l)}),(0,n.jsx)(Me,{d:De()})]}),(0,n.jsxs)(ze,{transform:`translate(50,0), scale(${C?"1":"-1"}, 1)`,visible:m||v,children:[(0,n.jsx)(Fe,{y:"0",x:"-30",height:"30",width:"60",rx:"8"}),(0,n.jsx)(Oe,{transform:"scale(-1, 1)",y:"15",dominantBaseline:"middle",children:r("w",h[0])})]})]}):null,A?(0,n.jsxs)("g",{transform:`translate(${i(h[1])}, 0), scale(${b?"-1":"1"}, 1)`,children:[(0,n.jsxs)("g",{children:[(0,n.jsx)(Pe,{color:c,d:Ue(l)}),(0,n.jsx)(Me,{d:De()})]}),(0,n.jsxs)(ze,{transform:`translate(50,0), scale(${b?"-1":"1"}, 1)`,visible:m||v,children:[(0,n.jsx)(Fe,{y:"0",x:"-30",height:"30",width:"60",rx:"8"}),(0,n.jsx)(Oe,{y:"15",dominantBaseline:"middle",children:r("e",h[1])})]})]}):null,N&&(0,n.jsx)(Le,{color:d}),_&&(0,n.jsx)("g",{transform:`translate(${s}, 0) scale(-1, 1)`,children:(0,n.jsx)(Le,{color:c})})]})]})),[r,c,A,b,C,v,e,l,s,h,_,m,N,d,R,i])},We=m.default.line.withConfig({displayName:"Line__StyledLine",componentId:"sc-2ba89400-0"})`
  opacity: 0.5;
  stroke-width: 2;
  stroke: ${({theme:e})=>e.neutral1};
  fill: none;
`,He=({value:e,xScale:i,innerHeight:t})=>(0,I.useMemo)((()=>(0,n.jsx)(We,{x1:i(e),y1:"0",x2:i(e),y2:t})),[e,i,t]);var Ze=t(63929),Ge=t(18887),Ve=t(87002);const Ke=m.default.div.withConfig({displayName:"Zoom__Wrapper",componentId:"sc-226f9ef9-0"})`
  display: grid;
  grid-template-columns: repeat(${({count:e})=>e.toString()}, 1fr);
  grid-gap: 6px;

  position: absolute;
  top: -32px;
  right: 0;
`,Xe=(0,m.default)(ge.Ux).withConfig({displayName:"Zoom__Button",componentId:"sc-226f9ef9-1"})`
  &:hover {
    background-color: ${({theme:e})=>e.surface3};
    color: ${({theme:e})=>e.neutral1};
  }

  width: 32px;
  height: 32px;
  padding: 4px;
`,Je=m.default.rect.withConfig({displayName:"Zoom__ZoomOverlay",componentId:"sc-226f9ef9-2"})`
  fill: transparent;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;function Qe({svg:e,xScale:i,setZoom:t,width:r,height:o,resetBrush:a,showResetButton:s,zoomLevels:l}){const d=(0,I.useRef)(),[c,u,p,h]=(0,I.useMemo)((()=>[()=>e&&d.current&&(0,Te.Ys)(e).transition().call(d.current.scaleBy,2),()=>e&&d.current&&(0,Te.Ys)(e).transition().call(d.current.scaleBy,.5),()=>e&&d.current&&(0,Te.Ys)(e).transition().call(d.current.scaleTo,.5),()=>e&&d.current&&(0,Te.Ys)(e).call(d.current.transform,Te.CRH.translate(0,0).scale(1)).transition().call(d.current.scaleTo,.5)]),[e]);return(0,I.useEffect)((()=>{e&&(d.current=(0,Te.sPX)().scaleExtent([l.min,l.max]).extent([[0,0],[r,o]]).on("zoom",(({transform:e})=>t(e))),(0,Te.Ys)(e).call(d.current))}),[o,r,t,e,i,d,l,l.max,l.min]),(0,I.useEffect)((()=>{p()}),[p,l]),(0,n.jsxs)(Ke,{count:s?3:2,children:[s&&(0,n.jsx)(Xe,{onClick:()=>{a(),h()},disabled:!1,children:(0,n.jsx)(Ze.Z,{size:16})}),(0,n.jsx)(Xe,{onClick:c,disabled:!1,children:(0,n.jsx)(Ge.Z,{size:16})}),(0,n.jsx)(Xe,{onClick:u,disabled:!1,children:(0,n.jsx)(Ve.Z,{size:16})})]})}const ei=e=>e.price0,ii=e=>e.activeLiquidity;function ti({id:e="liquidityChartRangeInput",data:{series:i,current:t},ticksAtLimit:r,styles:o,dimensions:{width:a,height:s},margins:l,interactive:d=!0,brushDomain:c,brushLabels:u,onBrushDomainChange:p,zoomLevels:h}){const x=(0,I.useRef)(null),[m,g]=(0,I.useState)(null),[v,f]=(0,I.useMemo)((()=>[s-l.top-l.bottom,a-l.left-l.right]),[a,s,l]),{xScale:y,yScale:j}=(0,I.useMemo)((()=>{const e={xScale:(0,Te.BYU)().domain([t*h.initialMin,t*h.initialMax]).range([0,f]),yScale:(0,Te.BYU)().domain([0,(0,Te.Fp7)(i,ii)]).range([v,0])};if(m){const i=m.rescaleX(e.xScale);e.xScale.domain(i.domain())}return e}),[t,h.initialMin,h.initialMax,f,i,v,m]);return(0,I.useEffect)((()=>{g(null)}),[h]),(0,I.useEffect)((()=>{c||p(y.domain(),void 0)}),[c,p,y]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Qe,{svg:x.current,xScale:y,setZoom:g,width:f,height:s,resetBrush:()=>{p([t*h.initialMin,t*h.initialMax],"reset")},showResetButton:Boolean(r[Ae.Mb.LOWER]||r[Ae.Mb.UPPER]),zoomLevels:h}),(0,n.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${a} ${s}`,style:{overflow:"visible"},children:[(0,n.jsxs)("defs",{children:[(0,n.jsx)("clipPath",{id:`${e}-chart-clip`,children:(0,n.jsx)("rect",{x:"0",y:"0",width:f,height:s})}),c&&(0,n.jsx)("mask",{id:`${e}-chart-area-mask`,children:(0,n.jsx)("rect",{fill:"white",x:y(c[0]),y:"0",width:y(c[1])-y(c[0]),height:v})})]}),(0,n.jsxs)("g",{transform:`translate(${l.left},${l.top})`,children:[(0,n.jsxs)("g",{clipPath:`url(#${e}-chart-clip)`,children:[(0,n.jsx)(Se,{series:i,xScale:y,yScale:j,xValue:ei,yValue:ii}),c&&(0,n.jsx)("g",{mask:`url(#${e}-chart-area-mask)`,children:(0,n.jsx)(Se,{series:i,xScale:y,yScale:j,xValue:ei,yValue:ii,fill:o.area.selection})}),(0,n.jsx)(He,{value:t,xScale:y,innerHeight:v}),(0,n.jsx)(Be,{xScale:y,innerHeight:v})]}),(0,n.jsx)(Je,{width:f,height:s,ref:x}),(0,n.jsx)(qe,{id:e,xScale:y,interactive:d,brushLabelValue:u,brushExtent:c??y.domain(),innerWidth:f,innerHeight:v,setBrushExtent:p,westHandleColor:o.brush.handle.west,eastHandleColor:o.brush.handle.east})]})]})]})}var ni=t(36813);const ri={[c.FeeAmount.LOWEST]:{initialMin:.999,initialMax:1.001,min:1e-5,max:1.5},[c.FeeAmount.LOW]:{initialMin:.999,initialMax:1.001,min:1e-5,max:1.5},[c.FeeAmount.MEDIUM]:{initialMin:.5,initialMax:2,min:1e-5,max:20},[c.FeeAmount.HIGH]:{initialMin:.5,initialMax:2,min:1e-5,max:20}},oi=m.default.div.withConfig({displayName:"LiquidityChartRangeInput__ChartWrapper",componentId:"sc-4d264c64-0"})`
  position: relative;
  width: 100%;
  max-height: 200px;
  justify-content: center;
  align-content: center;
`;function ai({message:e,icon:i}){return(0,n.jsxs)(U.lg,{style:{height:"100%",justifyContent:"center"},children:[i,e&&(0,n.jsx)(g.Tv.DeprecatedMediumHeader,{padding:10,marginTop:"20px",textAlign:"center",children:e})]})}function si({currencyA:e,currencyB:i,feeAmount:t,ticksAtLimit:r,price:o,priceLower:a,priceUpper:s,onLeftRangeInput:l,onRightRangeInput:d,interactive:u}){var p,x,g;const v=(0,m.useTheme)(),f=(0,be.r)(e),y=(0,be.r)(i),j=e&&i&&(null===(x=e)||void 0===x?void 0:x.wrapped.sortsBefore(null===(p=i)||void 0===p?void 0:p.wrapped)),{isLoading:C,error:b,formattedData:w}=function({currencyA:e,currencyB:i,feeAmount:t}){const{isLoading:n,error:r,data:o}=(0,ni.K)(e,i,t),a=(0,I.useCallback)((()=>{var e;if(!(null===(e=o)||void 0===e?void 0:e.length))return;const i=[];for(let t=0;t<o.length;t++){const e=o[t],n={activeLiquidity:parseFloat(e.liquidityActive.toString()),price0:parseFloat(e.price0)};n.activeLiquidity>0&&i.push(n)}return i}),[o]);return(0,I.useMemo)((()=>({isLoading:n,error:r,formattedData:n?void 0:a()})),[n,r,a])}({currencyA:e,currencyB:i,feeAmount:t}),N=(0,I.useCallback)(((e,i)=>{let t=Number(e[0]);const n=Number(e[1]);t<=0&&(t=1/10**6),(0,Ie.dC)((()=>{(!r[j?Ae.Mb.LOWER:Ae.Mb.UPPER]||"handle"===i||"reset"===i)&&t>0&&l(t.toFixed(6)),(!r[j?Ae.Mb.UPPER:Ae.Mb.LOWER]||"reset"===i)&&n>0&&n<1e35&&d(n.toFixed(6))}))}),[j,l,d,r]);u=u&&Boolean(null===(g=w)||void 0===g?void 0:g.length);const _=(0,I.useMemo)((()=>{var e,i,t,n;const r=j?a:null===(e=s)||void 0===e?void 0:e.invert(),o=j?s:null===(i=a)||void 0===i?void 0:i.invert();return r&&o?[parseFloat(null===(t=r)||void 0===t?void 0:t.toSignificant(6)),parseFloat(null===(n=o)||void 0===n?void 0:n.toSignificant(6))]:void 0}),[j,a,s]),{formatDelta:R}=(0,B.Gb)(),A=(0,I.useCallback)(((e,i)=>{if(!o)return"";if("w"===e&&r[j?Ae.Mb.LOWER:Ae.Mb.UPPER])return"0";if("e"===e&&r[j?Ae.Mb.UPPER:Ae.Mb.LOWER])return"\u221e";const t=(i<o?-1:1)*((Math.max(i,o)-Math.min(i,o))/o)*100;return o?""+((Math.sign(t)<0?"-":"")+R(t)):""}),[R,j,o,r]),T=!e||!i||void 0===w&&!C;return(0,n.jsx)(U.Tz,{gap:"md",style:{minHeight:"200px"},children:T?(0,n.jsx)(ai,{message:(0,n.jsx)(h.cC,{children:"Your position will appear here."}),icon:(0,n.jsx)(Ne.Z,{size:56,stroke:v.neutral1})}):C?(0,n.jsx)(ai,{icon:(0,n.jsx)(Ce.ZP,{size:"40px",stroke:v.neutral2})}):b?(0,n.jsx)(ai,{message:(0,n.jsx)(h.cC,{children:"Liquidity data not available."}),icon:(0,n.jsx)(_e.Z,{size:56,stroke:v.neutral2})}):w&&0!==w.length&&o?(0,n.jsx)(oi,{children:(0,n.jsx)(ti,{data:{series:w,current:o},dimensions:{width:560,height:200},margins:{top:10,right:2,bottom:20,left:0},styles:{area:{selection:v.accent1},brush:{handle:{west:(0,we.p_)(.1,f)??v.critical,east:(0,we.p_)(.1,y)??v.accent1}}},interactive:u,brushLabels:A,brushDomain:_,onBrushDomainChange:N,zoomLevels:ri[t??c.FeeAmount.MEDIUM],ticksAtLimit:r})}):(0,n.jsx)(ai,{message:(0,n.jsx)(h.cC,{children:"There is no liquidity data."}),icon:(0,n.jsx)(Re.Z,{size:56,stroke:v.neutral2})})})}var li=t(39753),di=t(73499),ci=t(47841),ui=t(5967),pi=t(8963),hi=t(82731),xi=t(13820),mi=t(5347);const gi=({position:e,title:i,inRange:t,baseCurrencyDefault:r,ticksAtLimit:o,showBlastAlert:a})=>{var s,l,d,c,u,p,x,m,v,f;const{formatCurrencyAmount:y,formatDelta:j,formatPrice:C,formatTickPrice:b}=(0,B.Gb)(),w=(0,mi.B)(e.pool.token0),N=(0,mi.B)(e.pool.token1),[_,R]=(0,I.useState)(r?r===w?w:r===N?N:w:w),A=_===w,T=A?N:w,k=A?e.pool.priceOf(e.pool.token0):e.pool.priceOf(e.pool.token1),E=A?e.token0PriceLower:e.token0PriceUpper.invert(),$=A?e.token0PriceUpper:e.token0PriceLower.invert(),L=(0,I.useCallback)((()=>{R(T)}),[T]),P=(null===(s=e)||void 0===s?void 0:s.liquidity)&&K().equal(null===(l=e)||void 0===l?void 0:l.liquidity,K().BigInt(0));return(0,n.jsxs)(U.Tz,{gap:"md",style:{marginTop:"0.5rem"},children:[(0,n.jsxs)(D.m0,{style:{marginBottom:"0.5rem"},children:[(0,n.jsxs)(D.DA,{children:[(0,n.jsx)(ci.ge,{currencies:[w,N],size:24}),(0,n.jsxs)(g.Tv.DeprecatedLabel,{ml:"10px",fontSize:"24px",children:[null===(d=w)||void 0===d?void 0:d.symbol," / ",null===(c=N)||void 0===c?void 0:c.symbol]})]}),(0,n.jsx)(di.Z,{removed:P,inRange:t})]}),a&&(0,n.jsx)(xe,{}),(0,n.jsx)(ve.hl,{children:(0,n.jsxs)(U.Tz,{gap:"md",children:[(0,n.jsxs)(D.m0,{children:[(0,n.jsxs)(D.DA,{children:[(0,n.jsx)(ui.Z,{currency:w}),(0,n.jsx)(g.Tv.DeprecatedLabel,{ml:"8px",children:null===(u=w)||void 0===u?void 0:u.symbol})]}),(0,n.jsx)(D.DA,{children:(0,n.jsx)(g.Tv.DeprecatedLabel,{mr:"8px",children:y({amount:e.amount0})})})]}),(0,n.jsxs)(D.m0,{children:[(0,n.jsxs)(D.DA,{children:[(0,n.jsx)(ui.Z,{currency:N}),(0,n.jsx)(g.Tv.DeprecatedLabel,{ml:"8px",children:null===(p=N)||void 0===p?void 0:p.symbol})]}),(0,n.jsx)(D.DA,{children:(0,n.jsx)(g.Tv.DeprecatedLabel,{mr:"8px",children:y({amount:e.amount1})})})]}),(0,n.jsx)(hi.SS,{}),(0,n.jsxs)(D.m0,{children:[(0,n.jsx)(g.Tv.DeprecatedLabel,{children:(0,n.jsx)(h.cC,{children:"Fee tier"})}),(0,n.jsx)(g.Tv.DeprecatedLabel,{children:j((null===(m=e)||void 0===m||null===(x=m.pool)||void 0===x?void 0:x.fee)/xi.PM)})]})]})}),(0,n.jsxs)(U.Tz,{gap:"md",children:[(0,n.jsxs)(D.m0,{children:[i?(0,n.jsx)(g.Tv.DeprecatedMain,{children:i}):(0,n.jsx)("div",{}),(0,n.jsx)(pi.Z,{currencyA:A?w:N,currencyB:A?N:w,handleRateToggle:L})]}),(0,n.jsxs)(D.m0,{children:[(0,n.jsx)(ve.hl,{width:"48%",padding:"8px",children:(0,n.jsxs)(U.Tz,{gap:"4px",justify:"center",children:[(0,n.jsx)(g.Tv.DeprecatedMain,{fontSize:"12px",children:(0,n.jsx)(h.cC,{children:"Min price"})}),(0,n.jsx)(g.Tv.DeprecatedMediumHeader,{textAlign:"center",children:b({price:E,atLimit:o,direction:Ae.Mb.LOWER})}),(0,n.jsx)(g.Tv.DeprecatedMain,{textAlign:"center",fontSize:"12px",children:(0,n.jsxs)(h.cC,{children:[{sym:T.symbol}," per ",{symB:_.symbol}]})}),(0,n.jsx)(S.xv,{fontSize:11,textAlign:"center",color:"$neutral3",mt:4,children:(0,n.jsxs)(h.cC,{children:["Your position will be 100% composed of ",{sym:null===(v=_)||void 0===v?void 0:v.symbol}," at this price"]})})]})}),(0,n.jsx)(ve.hl,{width:"48%",padding:"8px",children:(0,n.jsxs)(U.Tz,{gap:"4px",justify:"center",children:[(0,n.jsx)(g.Tv.DeprecatedMain,{fontSize:"12px",children:(0,n.jsx)(h.cC,{children:"Max price"})}),(0,n.jsx)(g.Tv.DeprecatedMediumHeader,{textAlign:"center",children:b({price:$,atLimit:o,direction:Ae.Mb.UPPER})}),(0,n.jsx)(g.Tv.DeprecatedMain,{textAlign:"center",fontSize:"12px",children:(0,n.jsxs)(h.cC,{children:[{sym:T.symbol}," per ",{symB:_.symbol}]})}),(0,n.jsx)(S.xv,{fontSize:11,textAlign:"center",color:"$neutral3",mt:4,children:(0,n.jsxs)(h.cC,{children:["Your position will be 100% composed of ",{sym:null===(f=T)||void 0===f?void 0:f.symbol}," at this price"]})})]})})]}),(0,n.jsx)(ve.hl,{padding:"12px ",children:(0,n.jsxs)(U.Tz,{gap:"4px",justify:"center",children:[(0,n.jsx)(g.Tv.DeprecatedMain,{fontSize:"12px",children:(0,n.jsx)(h.cC,{children:"Current price"})}),(0,n.jsx)(g.Tv.DeprecatedMediumHeader,{children:`${C({price:k,type:B.sw.TokenTx})} `}),(0,n.jsx)(g.Tv.DeprecatedMain,{textAlign:"center",fontSize:"12px",children:(0,n.jsxs)(h.cC,{children:[{sym:T.symbol}," per ",{symB:_.symbol}]})})]})})]})]})};var vi=t(29165);const fi=(0,m.default)(ge.JU).attrs((()=>({padding:"6px",$borderRadius:"8px"}))).withConfig({displayName:"PresetsButtons__Button",componentId:"sc-6676f567-0"})`
  color: ${({theme:e})=>e.neutral1};
  flex: 1;
`;function yi({onSetFullRange:e}){return(0,n.jsx)(D.BA,{gap:"4px",width:"auto",children:(0,n.jsx)(fi,{"data-testid":"set-full-range",onClick:e,children:(0,n.jsx)(g.Tv.DeprecatedBody,{fontSize:12,children:(0,n.jsx)(h.cC,{children:"Full range"})})})})}var ji=t(10672),Ci=t(99819),bi=t(39671),wi=t(29025),Ni=t(26729);const _i=JSON.parse('[{"inputs":[{"components":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"_transactions","type":"tuple[]"}],"name":"wc_multiCall","outputs":[{"internalType":"bytes[]","name":"","type":"bytes[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_msgHash","type":"bytes32"},{"internalType":"bytes","name":"_signature","type":"bytes"}],"name":"isValidSignature","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"view","type":"function"}]');var Ri=t(7151),Ii=t(69583);var Ai=t(55660);var Ti=t(13919),ki=t(4650),Si=t(40413),Ei=t(99454),$i=t(47186),Bi=t(28098);const Ui=new(t(51371).vU)([{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}]);function Di(e,i){if(!e.currency.isToken)throw new Error("Must call with an amount of token");const t=Ui.encodeFunctionData("approve",[i,(0,c.toHex)(e.quotient)]);return{to:e.currency.address,data:t,value:"0x0"}}var Li=t(64510),Pi=t(17202),Mi=t(7501),zi=t(40926);const Fi=m.default.div.withConfig({displayName:"Review__Wrapper",componentId:"sc-66673065-0"})`
  padding-top: 12px;
`;function Oi({position:e,outOfRange:i,ticksAtLimit:t}){return(0,n.jsx)(Fi,{children:(0,n.jsx)(U.Tz,{gap:"lg",children:e?(0,n.jsx)(gi,{position:e,inRange:!i,ticksAtLimit:t,title:"Selected Range"}):null})})}var Yi=t(41075);function qi(e,i,t,n,r,o,a){try{var s=e[o](a),l=s.value}catch(d){return void t(d)}s.done?i(l):Promise.resolve(l).then(n,r)}const Wi=new d.Percent(50,1e4),Hi=(0,te.O4)("shouldShowBlastRebasingAlert",!0),Zi=(0,m.default)(_.e).withConfig({displayName:"AddLiquidity__StyledBodyWrapper",componentId:"sc-e32b70ba-0"})`
  padding: ${({$hasExistingPosition:e})=>e?"10px":0};
  max-width: 640px;
`,Gi=["ETH","0x4300000000000000000000000000000000000004","0x4300000000000000000000000000000000000003"];function Vi(){const e=(0,me.m)();return(0,b.Nb)(e.chainId)?(0,n.jsx)(Ki,{}):(0,n.jsx)(R.PositionPageUnsupportedContent,{})}function Ki(){var e,i,t,o,v,f,y,_,R,L,P,M,z,F,O,Y,q,G,V;const K=(0,r.s0)(),{currencyIdA:J,currencyIdB:Q,feeAmount:ee,tokenId:ne}=(0,r.UO)(),re=(0,me.m)(),oe=(0,Z.z)(),ae=(0,m.useTheme)(),se=(0,u.oO)(),le=(0,p.LK)(),de=(0,Ei.h7)(),ue=(0,Ri.GL)(),{position:pe,loading:he}=(0,Si.n)(ne?s.O$.from(ne):void 0),Ce=!!pe&&!he,{position:be}=function(e){var i,t,n;const r=(0,bi.U8)(null===(i=e)||void 0===i?void 0:i.token0),o=(0,bi.U8)(null===(t=e)||void 0===t?void 0:t.token1),[,a]=(0,Ai.AI)(r??void 0,o??void 0,null===(n=e)||void 0===n?void 0:n.fee);let s;return a&&e&&(s=new c.Position({pool:a,liquidity:e.liquidity.toString(),tickLower:e.tickLower,tickUpper:e.tickUpper})),{position:s,pool:a??void 0}}(pe),we=ee&&Object.values(c.FeeAmount).includes(parseFloat(ee))?parseFloat(ee):void 0,Ne=(0,bi.U8)(J),_e=(0,bi.U8)(Q),Re=Ne&&_e&&Ne.wrapped.equals(_e.wrapped)?void 0:_e,{independentField:Ie,typedValue:Te,startPriceTypedValue:ke}=(0,k.KS)(),{pool:Se,ticks:Ee,dependentField:$e,price:Be,pricesAtTicks:Ue,pricesAtLimit:De,parsedAmounts:Le,currencyBalances:Pe,position:Me,noLiquidity:ze,currencies:Fe,errorMessage:Oe,invalidPool:Ye,invalidRange:qe,outOfRange:We,depositADisabled:He,depositBDisabled:Ze,invertPrice:Ge,ticksAtLimit:Ve,isTaxed:Ke}=(0,k.m2)(Ne??void 0,Re??void 0,we,Ne??void 0,be),{formatPrice:Xe}=(0,B.Gb)(),Je=Xe({price:Ge?null===(e=Be)||void 0===e?void 0:e.invert():Be,type:B.sw.TokenTx}),{onFieldAInput:Qe,onFieldBInput:ei,onLeftRangeInput:ii,onRightRangeInput:ti,onStartPriceInput:ni}=(0,k.EG)(ze),ri=!Oe&&!qe,[oi,ai]=(0,I.useState)(!1),[di,ci]=(0,I.useState)(!1),ui=(0,ki.n)(),[hi,mi]=(0,I.useState)(""),fi={[Ie]:Te,[$e]:(null===(i=Le[$e])||void 0===i?void 0:i.toSignificant(6))??""},Ui={[Ae.gN.CURRENCY_A]:(0,X.sq)(Le[Ae.gN.CURRENCY_A]),[Ae.gN.CURRENCY_B]:(0,X.sq)(Le[Ae.gN.CURRENCY_B])},Fi=[Ae.gN.CURRENCY_A,Ae.gN.CURRENCY_B].reduce(((e,i)=>({...e,[i]:(0,Mi.i)(Pe[i])})),{}),Vi=[Ae.gN.CURRENCY_A,Ae.gN.CURRENCY_B].reduce(((e,i)=>{var t;return{...e,[i]:null===(t=Fi[i])||void 0===t?void 0:t.equalTo(Le[i]??"0")}}),{}),Ki=function(){const{account:e}=(0,Ni.G)(),i=(0,Ii.Z)();return(0,Ri.cq)(i?e??void 0:void 0,_i,!0)}(),[Xi,Ji]=(0,wi.q)(Ki?void 0:Le[Ae.gN.CURRENCY_A],"connected"===re.status?d.NONFUNGIBLE_POSITION_MANAGER_ADDRESSES[re.chainId]:void 0),[Qi,et]=(0,wi.q)(Ki?void 0:Le[Ae.gN.CURRENCY_B],"connected"===re.status?d.NONFUNGIBLE_POSITION_MANAGER_ADDRESSES[re.chainId]:void 0),it=(0,Bi.eq)(We?xi.fI:Wi);function tt(){return nt.apply(this,arguments)}function nt(){var e;return e=function*(){if("connected"!==re.status||!oe)return;if(!ue||!Ne||!Re)return;const e=yield ui();if(Me&&e){const i=Ne.isNative?Ne:Re.isNative?Re:void 0,{calldata:t,value:n}=Ce&&ne?c.NonfungiblePositionManager.addCallParameters(Me,{tokenId:ne,slippageTolerance:it,deadline:e.toString(),useNative:i}):c.NonfungiblePositionManager.addCallParameters(Me,{slippageTolerance:it,recipient:re.address,deadline:e.toString(),useNative:i,createPool:ze});let r={to:d.NONFUNGIBLE_POSITION_MANAGER_ADDRESSES[re.chainId],data:t,value:n};if(Ki){const e=Le[Ae.gN.CURRENCY_A],i=Le[Ae.gN.CURRENCY_B],t=[...e&&e.currency.isToken?[Di(e,d.NONFUNGIBLE_POSITION_MANAGER_ADDRESSES[re.chainId])]:[],...i&&i.currency.isToken?[Di(i,d.NONFUNGIBLE_POSITION_MANAGER_ADDRESSES[re.chainId])]:[],{to:r.to,data:r.data,value:r.value}],n=Ki.interface.encodeFunctionData("wc_multiCall",[t]);r={to:Ki.address,data:n,value:"0x0"}}const o=yield oe.getChainId();if(re.chainId!==o)throw new $.CJ;ci(!0),oe.estimateGas(r).then((e=>{const i={...r,gasLimit:(0,Li.y)(e)};return oe.sendTransaction(i).then((e=>{var i,t,n,r,o,a;ci(!1);const s={type:$i.i.ADD_LIQUIDITY_V3_POOL,baseCurrencyId:(0,Pi.H)(Ne),quoteCurrencyId:(0,Pi.H)(Re),createPool:Boolean(ze),expectedAmountBaseRaw:(null===(t=Le[Ae.gN.CURRENCY_A])||void 0===t||null===(i=t.quotient)||void 0===i?void 0:i.toString())??"0",expectedAmountQuoteRaw:(null===(r=Le[Ae.gN.CURRENCY_B])||void 0===r||null===(n=r.quotient)||void 0===n?void 0:n.toString())??"0",feeAmount:Me.pool.fee};de(e,s),mi(e.hash),(0,u._P)(l.vp.ADD_LIQUIDITY_SUBMITTED,{label:[null===(o=Fe[Ae.gN.CURRENCY_A])||void 0===o?void 0:o.symbol,null===(a=Fe[Ae.gN.CURRENCY_B])||void 0===a?void 0:a.symbol].join("/"),...se,...s})}))})).catch((e=>{var i;console.error("Failed to send transaction",e),ci(!1),4001!==(null===(i=e)||void 0===i?void 0:i.code)&&console.error(e)}))}},nt=function(){var i=this,t=arguments;return new Promise((function(n,r){var o=e.apply(i,t);function a(e){qi(o,n,r,a,s,"next",e)}function s(e){qi(o,n,r,a,s,"throw",e)}a(void 0)}))},nt.apply(this,arguments)}const rt=(0,I.useCallback)(((e,i)=>{const t=(0,Pi.H)(e);if(t===i)return[t,void 0];{var n,r;const e="ETH"===t||"connected"===re.status&&t===(null===(n=a.Fl[re.chainId])||void 0===n?void 0:n.address),o=void 0!==i&&("ETH"===i||"connected"===re.status&&i===(null===(r=a.Fl[re.chainId])||void 0===r?void 0:r.address));return e&&o?[t,void 0]:[t,i]}}),[re.chainId,re.status]),ot=(0,I.useCallback)((e=>{const[i,t]=rt(e,Q);K(void 0===t?`/add/${i}`:`/add/${i}/${t}`)}),[rt,Q,K]),at=(0,I.useCallback)((e=>{const[i,t]=rt(e,J);K(void 0===t?`/add/${i}`:`/add/${t}/${i}`)}),[rt,J,K]),st=(0,I.useCallback)((e=>{ii(""),ti(""),K(`/add/${J}/${Q}/${e}`)}),[J,Q,K,ii,ti]),lt=(0,I.useCallback)((()=>{ai(!1),hi&&(Qe(""),K("/pools")),mi("")}),[K,Qe,hi]),dt=(0,Ti.G)(null===(t=Fe)||void 0===t?void 0:t.CURRENCY_A,null===(o=Fe)||void 0===o?void 0:o.CURRENCY_B),ct=(0,I.useCallback)((()=>{Qe(""),ei(""),ii(""),ti(""),K("/add")}),[K,Qe,ei,ii,ti]),{[Ae.Mb.LOWER]:ut,[Ae.Mb.UPPER]:pt}=Ee,{[Ae.Mb.LOWER]:ht,[Ae.Mb.UPPER]:xt}=Ue,{getDecrementLower:mt,getIncrementLower:gt,getDecrementUpper:vt,getIncrementUpper:ft,getSetFullRange:yt}=(0,k.a6)(Ne??void 0,Re??void 0,we,ut,pt,Se),jt=!Ki&&Xi!==wi.U.APPROVED&&!!Le[Ae.gN.CURRENCY_A],Ct=!Ki&&Qi!==wi.U.APPROVED&&!!Le[Ae.gN.CURRENCY_B],bt=`Supplying ${He?"":null===(v=Le[Ae.gN.CURRENCY_A])||void 0===v?void 0:v.toSignificant(6)} ${He?"":null===(f=Fe[Ae.gN.CURRENCY_A])||void 0===f?void 0:f.symbol} ${We?"":"and"} ${Ze?"":null===(y=Le[Ae.gN.CURRENCY_B])||void 0===y?void 0:y.toSignificant(6)} ${Ze?"":null===(_=Fe[Ae.gN.CURRENCY_B])||void 0===_?void 0:_.symbol}`,[wt,Nt]=(0,T.lr)(),_t=(0,I.useCallback)((()=>{yt();const e=De[Ae.Mb.LOWER];e&&wt.set("minPrice",e.toSignificant(5));const i=De[Ae.Mb.UPPER];i&&wt.set("maxPrice",i.toSignificant(5)),Nt(wt)}),[yt,De,wt,Nt]),Rt=(0,w.Z)(wt);(0,I.useEffect)((()=>{var e;const i=wt.get("minPrice"),t=null===(e=Rt)||void 0===e?void 0:e.get("minPrice");!i||"string"!==typeof i||isNaN(i)||t&&t===i||ii(i)}),[wt]),(0,I.useEffect)((()=>{var e;const i=wt.get("maxPrice"),t=null===(e=Rt)||void 0===e?void 0:e.get("maxPrice");!i||"string"!==typeof i||isNaN(i)||t&&t===i||ti(i)}),[wt]);const It=()=>{var e,i,t,r;return dt?(0,n.jsx)(ge.DF,{disabled:!0,$borderRadius:"12px",padding:"12px",children:(0,n.jsx)(g.Tv.DeprecatedMain,{mb:"4px",children:(0,n.jsx)(h.cC,{children:"Unsupported Asset"})})}):"connected"!==re.status?(0,n.jsx)(u.M8,{events:[l.TM.onClick],name:l.Je.CONNECT_WALLET_BUTTON_CLICKED,properties:{received_swap_quote:!1},element:l.xo.CONNECT_WALLET_BUTTON,children:(0,n.jsx)(ge.Sy,{onClick:le,$borderRadius:"12px",padding:"12px",children:(0,n.jsx)(h.cC,{children:"Connect wallet"})})}):(0,n.jsxs)(U.Tz,{gap:"md",children:[(Xi===wi.U.NOT_APPROVED||Xi===wi.U.PENDING||Qi===wi.U.NOT_APPROVED||Qi===wi.U.PENDING)&&ri&&(0,n.jsxs)(D.m0,{children:[jt&&(0,n.jsx)(ge.DF,{onClick:Ji,disabled:Xi===wi.U.PENDING,width:Ct?"48%":"100%",children:Xi===wi.U.PENDING?(0,n.jsx)(zi.bb,{children:(0,n.jsxs)(h.cC,{children:["Approving ",{amount:null===(e=Fe[Ae.gN.CURRENCY_A])||void 0===e?void 0:e.symbol}]})}):(0,n.jsxs)(h.cC,{children:["Approve ",{amount:null===(i=Fe[Ae.gN.CURRENCY_A])||void 0===i?void 0:i.symbol}]})}),Ct&&(0,n.jsx)(ge.DF,{onClick:et,disabled:Qi===wi.U.PENDING,width:jt?"48%":"100%",children:Qi===wi.U.PENDING?(0,n.jsx)(zi.bb,{children:(0,n.jsxs)(h.cC,{children:["Approving ",{amount:null===(t=Fe[Ae.gN.CURRENCY_B])||void 0===t?void 0:t.symbol}]})}):(0,n.jsxs)(h.cC,{children:["Approve ",{amount:null===(r=Fe[Ae.gN.CURRENCY_B])||void 0===r?void 0:r.symbol}]})})]}),(0,n.jsx)(ge.Kd,{onClick:()=>{ai(!0)},disabled:!ri||!Ki&&Xi!==wi.U.APPROVED&&!He||!Ki&&Qi!==wi.U.APPROVED&&!Ze,error:!ri&&!!Le[Ae.gN.CURRENCY_A]&&!!Le[Ae.gN.CURRENCY_B],children:(0,n.jsx)(S.xv,{fontWeight:"$medium",children:Oe||(0,n.jsx)(h.cC,{children:"Preview"})})})]})},At=Ui[Ae.gN.CURRENCY_A],Tt=Ui[Ae.gN.CURRENCY_B],kt=(0,I.useMemo)((()=>({data:At?parseFloat(At.toSignificant()):void 0,isLoading:!1})),[At]),St=(0,I.useMemo)((()=>({data:Tt?parseFloat(Tt.toSignificant()):void 0,isLoading:!1})),[Tt]),Et=null===(R=(0,N.Wk)(ne?ue:null,"ownerOf",[ne]).result)||void 0===R?void 0:R[0],$t=(0,E.K)(Et,re.address)||(0,E.K)(null===(L=pe)||void 0===L?void 0:L.operator,re.address),Bt=Boolean(Ce&&re.address&&!$t),Ut=re.chainId===d.ChainId.BLAST&&(!!J&&Gi.includes(J)||!!Q&&Gi.includes(Q)),Dt=(0,te.Dv)(Hi)&&Ut,Lt=(0,te.yW)(Hi),Pt=(0,I.useCallback)((()=>{Lt(!1)}),[Lt]),Mt=ie(Be);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(A.Helmet,{children:(0,n.jsx)("title",{children:(0,h.t)("Add liquidity to {{token pair}} ({{chain}}) on Uniswap",{tokenPair:`${null===(P=Re)||void 0===P?void 0:P.symbol}/${null===(M=Ne)||void 0===M?void 0:M.symbol}`,chain:b.T_[(0,b.ht)(re.chainId)?re.chainId:d.ChainId.MAINNET].label})})}),(0,n.jsxs)(Yi.zH,{children:[(0,n.jsx)(Ci.Z,{isOpen:oi,onDismiss:lt,attemptingTxn:di,hash:hi,reviewContent:()=>(0,n.jsx)(Ci.p,{title:(0,n.jsx)(h.cC,{children:"Add Liquidity"}),onDismiss:lt,topContent:()=>(0,n.jsx)(Oi,{parsedAmounts:Le,position:Me,existingPosition:be,priceLower:ht,priceUpper:xt,outOfRange:We,ticksAtLimit:Ve}),bottomContent:()=>(0,n.jsx)(ge.DF,{style:{marginTop:"1rem"},onClick:tt,children:(0,n.jsx)(S.xv,{fontWeight:"$medium",fontSize:20,children:(0,n.jsx)(h.cC,{children:"Add"})})})}),pendingText:bt}),(0,n.jsxs)(Zi,{$hasExistingPosition:Ce,children:[(0,n.jsx)(li.w,{creating:!1,adding:!0,autoSlippage:Wi,showBackLink:!Ce,children:!Ce&&(0,n.jsx)(D.ZP,{justify:"flex-end",style:{width:"fit-content",minWidth:"fit-content"},children:(0,n.jsx)(Yi.SF,{children:(0,n.jsx)(ge.oD,{onClick:ct,children:(0,n.jsx)(S.xv,{color:"$accent1",fontSize:"12px",children:(0,n.jsx)(h.cC,{children:"Clear all"})})})})})}),(0,n.jsx)(Yi.im,{children:(0,n.jsxs)(Yi.Sx,{wide:!Ce,children:[(0,n.jsxs)(U.Tz,{gap:"lg",children:[!Ce&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(U.Tz,{gap:"md",children:[Mt&&(0,n.jsx)(D.m0,{paddingBottom:"20px",children:(0,n.jsx)(W,{})}),Ke&&(0,n.jsx)(D.m0,{paddingBottom:"20px",children:(0,n.jsx)(H,{})}),(0,n.jsx)(D.m0,{paddingBottom:"20px",children:(0,n.jsx)(g.Tv.DeprecatedLabel,{children:(0,n.jsx)(h.cC,{children:"Select pair"})})}),(0,n.jsxs)(D.m0,{gap:"md",children:[(0,n.jsx)(fe.Z,{value:fi[Ae.gN.CURRENCY_A],onUserInput:Qe,hideInput:!0,onMax:()=>{var e;Qe((null===(e=Fi[Ae.gN.CURRENCY_A])||void 0===e?void 0:e.toExact())??"")},onCurrencySelect:ot,showMaxButton:!Vi[Ae.gN.CURRENCY_A],currency:Fe[Ae.gN.CURRENCY_A]??null,id:"add-liquidity-input-tokena"}),(0,n.jsx)(fe.Z,{value:fi[Ae.gN.CURRENCY_B],hideInput:!0,onUserInput:ei,onCurrencySelect:at,onMax:()=>{var e;ei((null===(e=Fi[Ae.gN.CURRENCY_B])||void 0===e?void 0:e.toExact())??"")},showMaxButton:!Vi[Ae.gN.CURRENCY_B],currency:Fe[Ae.gN.CURRENCY_B]??null,id:"add-liquidity-input-tokenb"})]}),Ut&&(0,n.jsx)(xe,{}),(0,n.jsx)(ye.Z,{disabled:!Re||!Ne,feeAmount:we,handleFeePoolSelect:st,currencyA:Ne??void 0,currencyB:Re??void 0})]})," "]}),Ce&&be&&(0,n.jsx)(gi,{position:be,title:(0,n.jsx)(h.cC,{children:"Selected range"}),inRange:!We,ticksAtLimit:Ve,showBlastAlert:Ut})]}),!Ce&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(Yi.DD,{gap:"md",disabled:!we||Ye,children:[(0,n.jsxs)(D.m0,{children:[(0,n.jsx)(g.Tv.DeprecatedLabel,{children:(0,n.jsx)(h.cC,{children:"Set price range"})}),Boolean(Ne&&Re)&&(0,n.jsxs)(D.DA,{gap:"8px",children:[(0,n.jsx)(yi,{onSetFullRange:_t}),(0,n.jsx)(pi.Z,{currencyA:Ne,currencyB:Re,handleRateToggle:()=>{var e,i,t,n;Ve[Ae.Mb.LOWER]||Ve[Ae.Mb.UPPER]||(ii((null===(e=Ge?ht:null===(i=xt)||void 0===i?void 0:i.invert())||void 0===e?void 0:e.toSignificant(6))??""),ti((null===(t=Ge?xt:null===(n=ht)||void 0===n?void 0:n.invert())||void 0===t?void 0:t.toSignificant(6))??""),Qe(fi[Ae.gN.CURRENCY_B]??""));K(`/add/${Q}/${J}${we?"/"+we:""}`)}})]})]}),(0,n.jsx)(vi.Z,{priceLower:ht,priceUpper:xt,getDecrementLower:mt,getIncrementLower:gt,getDecrementUpper:vt,getIncrementUpper:ft,onLeftRangeInput:ii,onRightRangeInput:ti,currencyA:Ne,currencyB:Re,feeAmount:we,ticksAtLimit:Ve}),We&&(0,n.jsx)(ve.U2,{padding:"8px 12px",$borderRadius:"12px",children:(0,n.jsxs)(D.m0,{children:[(0,n.jsx)(x.Z,{stroke:ae.deprecated_yellow3,size:"16px"}),(0,n.jsx)(S.xv,{color:"$yellow600",ml:"12px",fontSize:"12px",children:(0,n.jsx)(h.cC,{children:"Your position will not earn fees or be used in trades until the market price moves into your range."})})]})}),qe&&(0,n.jsx)(ve.U2,{padding:"8px 12px",$borderRadius:"12px",children:(0,n.jsxs)(D.m0,{children:[(0,n.jsx)(x.Z,{stroke:ae.deprecated_yellow3,size:"16px"}),(0,n.jsx)(S.xv,{color:"$yellow600",ml:"12px",fontSize:"12px",children:(0,n.jsx)(h.cC,{children:"Invalid range selected. The min price must be lower than the max price."})})]})})]}),(0,n.jsx)(Yi.DD,{gap:"md",disabled:!we||Ye,children:ze?(0,n.jsxs)(U.Tz,{gap:"md",children:[ze&&(0,n.jsx)(ve.Pj,{style:{display:"flex",flexDirection:"row",alignItems:"center",padding:"1rem 1rem"},children:(0,n.jsx)(g.Tv.DeprecatedBody,{fontSize:14,style:{fontWeight:535},textAlign:"left",color:ae.accent1,children:(0,n.jsx)(h.cC,{children:"This pool must be initialized before you can add liquidity. To initialize, select a starting price for the pool. Then, enter your liquidity price range and deposit amount. Gas fees will be higher than usual due to the initialization transaction."})})}),(0,n.jsx)(ve.nq,{padding:"12px",children:(0,n.jsx)(Yi.Fy,{className:"start-price-input",value:ke,onUserInput:ni})}),(0,n.jsxs)(D.m0,{style:{backgroundColor:ae.surface1,padding:"12px",borderRadius:"12px"},children:[(0,n.jsx)(g.Tv.DeprecatedMain,{children:(0,n.jsxs)(h.cC,{children:["Starting ",{sym:null===(F=Ne)||void 0===F?void 0:F.symbol}," Price:"]})}),(0,n.jsx)(g.Tv.DeprecatedMain,{children:Be?(0,n.jsx)(g.Tv.DeprecatedMain,{children:(0,n.jsxs)(D.DA,{children:[(0,n.jsx)(je.Z,{maxCharacters:20,text:Ge?null===(Y=Be)||void 0===Y||null===(O=Y.invert())||void 0===O?void 0:O.toSignificant(8):null===(q=Be)||void 0===q?void 0:q.toSignificant(8)})," ",(0,n.jsxs)("span",{style:{marginLeft:"4px"},children:[null===(G=Re)||void 0===G?void 0:G.symbol," per ",null===(V=Ne)||void 0===V?void 0:V.symbol]})]})}):"-"})]})]}):(0,n.jsxs)(n.Fragment,{children:[Boolean(Be&&Ne&&Re&&!ze)&&(0,n.jsxs)(U.Tz,{gap:"2px",style:{marginTop:"0.5rem"},children:[(0,n.jsx)(g.Tv.DeprecatedMain,{fontWeight:535,fontSize:12,color:"text1",children:(0,n.jsx)(h.cC,{children:"Current price:"})}),(0,n.jsx)(g.Tv.DeprecatedBody,{fontWeight:535,fontSize:20,color:"text1",children:Be&&(0,n.jsx)(je.Z,{maxCharacters:20,text:Je})}),Ne&&(0,n.jsxs)(g.Tv.DeprecatedBody,{color:"text2",fontSize:12,children:[null===(z=Re)||void 0===z?void 0:z.symbol," ",(0,n.jsx)(h.cC,{children:"per"})," ",Ne.symbol]})]}),(0,n.jsx)(si,{currencyA:Ne??void 0,currencyB:Re??void 0,feeAmount:we,ticksAtLimit:Ve,price:Be?parseFloat((Ge?Be.invert():Be).toSignificant(8)):void 0,priceLower:ht,priceUpper:xt,onLeftRangeInput:ii,onRightRangeInput:ti,interactive:!Ce})]})})]}),(0,n.jsx)("div",{children:(0,n.jsx)(Yi.DD,{disabled:Ye||qe||ze&&!ke,children:(0,n.jsxs)(U.Tz,{gap:"md",children:[(0,n.jsx)(g.Tv.DeprecatedLabel,{children:Ce?(0,n.jsx)(h.cC,{children:"Add more liquidity"}):(0,n.jsx)(h.cC,{children:"Deposit amounts"})}),(0,n.jsx)(fe.Z,{value:fi[Ae.gN.CURRENCY_A],onUserInput:Qe,onMax:()=>{var e;Qe((null===(e=Fi[Ae.gN.CURRENCY_A])||void 0===e?void 0:e.toExact())??"")},showMaxButton:!Vi[Ae.gN.CURRENCY_A],currency:Fe[Ae.gN.CURRENCY_A]??null,id:"add-liquidity-input-tokena",fiatValue:kt,locked:He}),(0,n.jsx)(fe.Z,{value:fi[Ae.gN.CURRENCY_B],onUserInput:ei,onMax:()=>{var e;ei((null===(e=Fi[Ae.gN.CURRENCY_B])||void 0===e?void 0:e.toExact())??"")},showMaxButton:!Vi[Ae.gN.CURRENCY_B],fiatValue:St,currency:Fe[Ae.gN.CURRENCY_B]??null,id:"add-liquidity-input-tokenb",locked:Ze})]})})}),(0,n.jsx)(It,{})]})})]}),Bt&&(0,n.jsx)(j,{ownerAddress:Et}),dt&&(0,n.jsx)(C.Z,{show:dt,currencies:[Fe.CURRENCY_A,Fe.CURRENCY_B]})]}),(0,n.jsx)(ji.c,{}),Dt&&(0,n.jsx)(ce,{currencyIdA:J,currencyIdB:Q,onContinue:Pt})]})}function Xi(){var e,i;const{currencyIdA:t,currencyIdB:s}=(0,r.UO)(),l=(0,o.x)(),d="ETH"===t||void 0!==l&&t===(null===(e=a.Fl[l])||void 0===e?void 0:e.address),c="ETH"===s||void 0!==l&&s===(null===(i=a.Fl[l])||void 0===i?void 0:i.address);return t&&s&&(t.toLowerCase()===s.toLowerCase()||d&&c)?(0,n.jsx)(r.Fg,{to:`/add/${t}`,replace:!0}):(0,n.jsx)(Vi,{})}},38004:(e,i,t)=>{function n(e,i){return!(!e||!i)&&(e===i||e.toLowerCase()===i.toLowerCase())}t.d(i,{K:()=>n})},5347:(e,i,t)=>{t.d(i,{B:()=>r});var n=t(64370);function r(e){var i;return e.isNative?e:(null===(i=n.Fl[e.chainId])||void 0===i?void 0:i.equals(e))?(0,n.gX)(e.chainId):e}}}]);
//# sourceMappingURL=9065.a69351f1.chunk.js.map