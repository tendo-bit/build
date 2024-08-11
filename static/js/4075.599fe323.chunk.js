"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[4075],{52223:(e,i,n)=>{n.d(i,{WP:()=>$,ZP:()=>W,rG:()=>_});var t=n(92936),r=n(76078),o=n(26729),d=n(6823),s=n(61592),a=n.n(s),l=n(36399),c=n(45779),h=n(37525),u=n(86082),x=n(43454),p=n(22953),g=n(14411),f=n(54972),j=n(47841),v=n(13820),m=n(3359),y=n(83416),b=n(73720),S=n(17202),w=n(5347),C=n(69780),k=n(61182),z=n(44591),A=n(5967),T=n(94284),q=n(82731),I=n(56536);const _=(0,g.default)(T.m0).withConfig({displayName:"PositionCard__FixedHeightRow",componentId:"sc-dcf5d43e-0"})`
  height: 24px;
`,D=(0,g.default)(k.hl).withConfig({displayName:"PositionCard__StyledPositionCard",componentId:"sc-dcf5d43e-1"})`
  border: none;
  background: ${({theme:e,bgColor:i})=>`radial-gradient(91.85% 100% at 1.84% 0%, ${(0,l.DZ)(.8,i)} 0%, ${e.surface2} 100%) `};
  position: relative;
  overflow: hidden;
`;function $({pair:e,showUnwrapped:i=!1,border:n}){var s,l;const{account:h}=(0,o.G)(),u=i?e.token0:(0,w.B)(e.token0),x=i?e.token1:(0,w.B)(e.token1),[g,v]=(0,c.useState)(!1),m=(0,b.mM)(h??void 0,e.liquidityToken),S=(0,y.A)(e.liquidityToken),C=m&&S&&a().greaterThanOrEqual(S.quotient,m.quotient)?new r.Percent(m.quotient,S.quotient):void 0,[A,q]=e&&S&&m&&a().greaterThanOrEqual(S.quotient,m.quotient)?[e.getLiquidityValue(e.token0,S,m,!1),e.getLiquidityValue(e.token1,S,m,!1)]:[void 0,void 0];return(0,t.jsx)(t.Fragment,{children:m&&a().greaterThan(m.quotient,a().BigInt(0))?(0,t.jsx)(k.rd,{border:n,children:(0,t.jsxs)(z.Tz,{gap:"md",children:[(0,t.jsx)(_,{children:(0,t.jsx)(T.DA,{children:(0,t.jsx)(p.xv,{fontWeight:535,fontSize:16,children:(0,t.jsx)(d.cC,{children:"Your position"})})})}),(0,t.jsxs)(_,{onClick:()=>v(!g),children:[(0,t.jsxs)(T.DA,{children:[(0,t.jsx)(j.ge,{currencies:[u,x],size:20}),(0,t.jsxs)(p.xv,{fontWeight:535,fontSize:20,children:[u.symbol,"/",x.symbol]})]}),(0,t.jsx)(T.DA,{children:(0,t.jsx)(p.xv,{fontWeight:535,fontSize:20,children:m?m.toSignificant(4):"-"})})]}),(0,t.jsxs)(z.Tz,{gap:"4px",children:[(0,t.jsxs)(_,{children:[(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(d.cC,{children:"Your pool share:"})}),(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,children:C?C.toFixed(6)+"%":"-"})]}),(0,t.jsxs)(_,{children:[(0,t.jsxs)(p.xv,{fontSize:16,fontWeight:535,children:[u.symbol,":"]}),A?(0,t.jsx)(T.DA,{children:(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:null===(s=A)||void 0===s?void 0:s.toSignificant(6)})}):"-"]}),(0,t.jsxs)(_,{children:[(0,t.jsxs)(p.xv,{fontSize:16,fontWeight:535,children:[x.symbol,":"]}),q?(0,t.jsx)(T.DA,{children:(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:null===(l=q)||void 0===l?void 0:l.toSignificant(6)})}):"-"]})]})]})}):(0,t.jsx)(k.hl,{children:(0,t.jsxs)(f.Tv.DeprecatedSubHeader,{style:{textAlign:"center"},children:[(0,t.jsx)("span",{role:"img","aria-label":"wizard-icon",children:"\u2b50\ufe0f"})," ",(0,t.jsx)(d.cC,{children:"By adding liquidity you'll earn 0.3% of all trades on this pair proportional to your share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity."})," "]})})})}function W({pair:e,border:i,stakedBalance:n}){var s,l,g,k;const{account:$}=(0,o.G)(),W=(0,w.B)(e.token0),L=(0,w.B)(e.token1),[N,F]=(0,c.useState)(!1),R=(0,b.mM)($??void 0,e.liquidityToken),E=(0,y.A)(e.liquidityToken),B=n?null===(s=R)||void 0===s?void 0:s.add(n):R,O=B&&E&&a().greaterThanOrEqual(E.quotient,B.quotient)?new r.Percent(B.quotient,E.quotient):void 0,[V,P]=e&&E&&B&&a().greaterThanOrEqual(E.quotient,B.quotient)?[e.getLiquidityValue(e.token0,E,B,!1),e.getLiquidityValue(e.token1,E,B,!1)]:[void 0,void 0],M=(0,m.r)(null===(l=e)||void 0===l?void 0:l.token0);return(0,t.jsxs)(D,{border:i,bgColor:M,children:[(0,t.jsx)(q.RF,{}),(0,t.jsxs)(z.Tz,{gap:"md",children:[(0,t.jsxs)(_,{children:[(0,t.jsxs)(T.BA,{gap:"8px",style:{marginLeft:"8px"},children:[(0,t.jsx)(j.ge,{currencies:[W,L],size:20}),(0,t.jsx)(p.xv,{fontWeight:535,fontSize:20,children:W&&L?`${W.symbol}/${L.symbol}`:(0,t.jsx)(I.bb,{children:(0,t.jsx)(d.cC,{children:"Loading"})})})]}),(0,t.jsx)(T.DA,{gap:"8px",style:{marginRight:"4px"},children:(0,t.jsx)(C.qL,{padding:"6px 8px",$borderRadius:"12px",width:"100%",onClick:()=>F(!N),children:N?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.cC,{children:"Manage"}),(0,t.jsx)(h.Z,{size:"20",style:{marginLeft:"8px",height:"20px",minWidth:"20px"}})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.cC,{children:"Manage"}),(0,t.jsx)(u.Z,{size:"20",style:{marginLeft:"8px",height:"20px",minWidth:"20px"}})]})})})]}),N&&(0,t.jsxs)(z.Tz,{gap:"sm",children:[(0,t.jsxs)(_,{children:[(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(d.cC,{children:"Your total pool tokens:"})}),(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,children:B?B.toSignificant(4):"-"})]}),n&&(0,t.jsxs)(_,{children:[(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(d.cC,{children:"Pool tokens in rewards pool:"})}),(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,children:n.toSignificant(4)})]}),(0,t.jsxs)(_,{children:[(0,t.jsx)(T.DA,{children:(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,children:(0,t.jsxs)(d.cC,{children:["Pooled ",{sym:W.symbol},":"]})})}),V?(0,t.jsxs)(T.DA,{children:[(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:null===(g=V)||void 0===g?void 0:g.toSignificant(6)}),(0,t.jsx)(A.Z,{size:20,style:{marginLeft:"8px"},currency:W})]}):"-"]}),(0,t.jsxs)(_,{children:[(0,t.jsx)(T.DA,{children:(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,children:(0,t.jsxs)(d.cC,{children:["Pooled ",{sym:L.symbol},":"]})})}),P?(0,t.jsxs)(T.DA,{children:[(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:null===(k=P)||void 0===k?void 0:k.toSignificant(6)}),(0,t.jsx)(A.Z,{size:20,style:{marginLeft:"8px"},currency:L})]}):"-"]}),(0,t.jsxs)(_,{children:[(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(d.cC,{children:"Your pool share:"})}),(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,children:O?(0,t.jsxs)(d.cC,{children:[{amt:"0.00"===O.toFixed(2)?"<0.01":O.toFixed(2)},"%"]}):"-"})]}),(0,t.jsx)(C.PL,{padding:"8px",$borderRadius:"8px",children:(0,t.jsx)(f.dL,{style:{width:"100%",textAlign:"center"},href:`https://v2.info.uniswap.org/account/${$}`,children:(0,t.jsxs)(d.cC,{children:["View accrued fees and analytics",(0,t.jsx)("span",{style:{fontSize:"11px"},children:"\u2197"})]})})}),R&&a().greaterThan(R.quotient,v.iV)&&(0,t.jsxs)(T.m0,{marginTop:"10px",children:[(0,t.jsx)(C.DF,{padding:"8px",$borderRadius:"8px",as:x.rU,to:`/migrate/v2/${e.liquidityToken.address}`,width:"32%",children:(0,t.jsx)(d.cC,{children:"Migrate"})}),(0,t.jsx)(C.DF,{padding:"8px",$borderRadius:"8px",as:x.rU,to:`/add/v2/${(0,S.H)(W)}/${(0,S.H)(L)}`,width:"32%",children:(0,t.jsx)(d.cC,{children:"Add"})}),(0,t.jsx)(C.DF,{padding:"8px",$borderRadius:"8px",as:x.rU,width:"32%",to:`/remove/v2/${(0,S.H)(W)}/${(0,S.H)(L)}`,children:(0,t.jsx)(d.cC,{children:"Remove"})})]}),n&&a().greaterThan(n.quotient,v.iV)&&(0,t.jsx)(C.DF,{padding:"8px",$borderRadius:"8px",as:x.rU,to:`/uni/${(0,S.H)(W)}/${(0,S.H)(L)}`,width:"100%",children:(0,t.jsx)(d.cC,{children:"Manage liquidity in rewards pool"})})]})]})]})}},26073:(e,i,n)=>{n.d(i,{A:()=>l});var t=n(92936),r=n(44591),o=n(6823),d=n(14411),s=n(54972);const a=d.default.div.withConfig({displayName:"V2Unsupported__TextWrapper",componentId:"sc-5efcffe7-0"})`
  border: 1px solid ${({theme:e})=>e.neutral3};
  padding: 16px 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;function l(){return(0,t.jsx)(r.Tz,{gap:"lg",justify:"center",children:(0,t.jsx)(r.Tz,{gap:"md",style:{width:"100%"},children:(0,t.jsx)(a,{children:(0,t.jsx)(s.Tv.BodySecondary,{color:"neutral2",textAlign:"center",children:(0,t.jsx)(o.cC,{children:"Uniswap V2 is not available on this network."})})})})})}},82731:(e,i,n)=>{n.d(i,{SS:()=>x,sq:()=>l,MN:()=>c,RF:()=>h,uO:()=>u,I8:()=>a});var t=n(14411);const r=n.p+"static/media/big_unicorn.595c49962d708abbaaec.png",o=n.p+"static/media/noise.3c7efafc83614205bd1a.png",d=n.p+"static/media/xl_uni.9c9e061bed67e15ad3c8.png";var s=n(44591);const a=(0,t.default)(s.Tz).withConfig({displayName:"styled__DataCard",componentId:"sc-6a13bc9-0"})`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #2172e5 100%);
  border-radius: 12px;
  width: 100%;
  position: relative;
  overflow: hidden;
`,l=t.default.span.withConfig({displayName:"styled__CardBGImage",componentId:"sc-6a13bc9-1"})`
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
`,c=t.default.span.withConfig({displayName:"styled__CardBGImageSmaller",componentId:"sc-6a13bc9-2"})`
  background: url(${d});
  width: 1200px;
  height: 1200px;
  position: absolute;
  border-radius: 12px;
  top: -300px;
  left: -300px;
  opacity: 0.4;
  user-select: none;

  ${({desaturate:e})=>e&&"filter: saturate(0)"}
`,h=t.default.span.withConfig({displayName:"styled__CardNoise",componentId:"sc-6a13bc9-3"})`
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
`,u=(0,t.default)(s.Tz).withConfig({displayName:"styled__CardSection",componentId:"sc-6a13bc9-4"})`
  padding: 1rem;
  z-index: 1;
  opacity: ${({disabled:e})=>e&&"0.4"};
`,x=t.default.div.withConfig({displayName:"styled__Break",componentId:"sc-6a13bc9-5"})`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
`},81069:(e,i,n)=>{n.d(i,{G:()=>s});var t=n(57852),r=n(95625),o=n(39063),d=n(590);function s(){const{chainId:e}=(0,d.m)(),i=(0,o.ye)(r.FeatureFlags.V2Everywhere);return e&&(i&&t.Ep.includes(e)||t.$6.includes(e))}},83416:(e,i,n)=>{n.d(i,{A:()=>s});var t=n(76078),r=n(84938),o=n(45779),d=n(7151);function s(e){var i,n,s,a;const l=(0,d.Ib)((null===(i=e)||void 0===i?void 0:i.isToken)?e.address:void 0,!1),c=null===(a=(0,r.Wk)(l,"totalSupply"))||void 0===a||null===(s=a.result)||void 0===s||null===(n=s[0])||void 0===n?void 0:n.toString();return(0,o.useMemo)((()=>{var i;return(null===(i=e)||void 0===i?void 0:i.isToken)&&c?t.CurrencyAmount.fromRawAmount(e,c):void 0}),[e,c])}},41047:(e,i,n)=>{n.d(i,{OY:()=>h,Oo:()=>u,_G:()=>c});var t=n(51371),r=n(76078),o=n(40148),d=n(12972),s=n(84938),a=n(45779);const l=new t.vU(o.abi);var c;function h(e){const i=(0,a.useMemo)((()=>e.map((([e,i])=>{var n,t;return[null===(n=e)||void 0===n?void 0:n.wrapped,null===(t=i)||void 0===t?void 0:t.wrapped]}))),[e]),n=(0,a.useMemo)((()=>i.map((([e,i])=>e&&i&&e.chainId===i.chainId&&!e.equals(i)&&r.V2_FACTORY_ADDRESSES[e.chainId]?(0,d.computePairAddress)({factoryAddress:r.V2_FACTORY_ADDRESSES[e.chainId],tokenA:e,tokenB:i}):void 0))),[i]),t=(0,s._Y)(n,l,"getReserves");return(0,a.useMemo)((()=>t.map(((e,n)=>{const{result:t,loading:o}=e,s=i[n][0],a=i[n][1];if(o)return[c.LOADING,null];if(!s||!a||s.equals(a))return[c.INVALID,null];if(!t)return[c.NOT_EXISTS,null];const{reserve0:l,reserve1:h}=t,[u,x]=s.sortsBefore(a)?[s,a]:[a,s];return[c.EXISTS,new d.Pair(r.CurrencyAmount.fromRawAmount(u,l.toString()),r.CurrencyAmount.fromRawAmount(x,h.toString()))]}))),[t,i])}function u(e,i){return h((0,a.useMemo)((()=>[[e,i]]),[e,i]))[0]}!function(e){e[e.LOADING=0]="LOADING",e[e.NOT_EXISTS=1]="NOT_EXISTS",e[e.EXISTS=2]="EXISTS",e[e.INVALID=3]="INVALID"}(c||(c={}))},5347:(e,i,n)=>{n.d(i,{B:()=>r});var t=n(64370);function r(e){var i;return e.isNative?e:(null===(i=t.Fl[e.chainId])||void 0===i?void 0:i.equals(e))?(0,t.gX)(e.chainId):e}}}]);
//# sourceMappingURL=4075.599fe323.chunk.js.map