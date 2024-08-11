"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[155],{16709:(e,n,i)=>{i.d(n,{Z:()=>s});i(45779);const s=i.p+"static/media/blue-loader.249140daf016adc355cfb029ec67de19.svg"},99819:(e,n,i)=>{i.d(n,{p:()=>xe,Z:()=>je});var s=i(92936),o=i(76078),r=i(26729),t=i(61077),c=i(33932),a=i(57852),d=i(39671),l=i(6823),u=i(45779),m=i(33882),p=i(19733),x=i(10404),h=i(99454),f=i(14411),j=i(54972),y=i(2148),g=i(54703),C=i(72993),b=i(70854),v=i(16709),w=i(68707),I=i(61592),T=i.n(I),A=i(64370),_=i(27179),k=i(53286),S=i(47186);function N(e,n,i){return new o.Fraction(e,T().exponentiate(T().BigInt(10),T().BigInt(n))).toSignificant(i)}function E({rawAmount:e,symbol:n,decimals:i,sigFigs:o}){return(0,s.jsxs)(s.Fragment,{children:[N(e,i,o)," ",n]})}function D({rawAmount:e,currencyId:n,sigFigs:i=6}){const o=(0,d.U8)(n);return o?(0,s.jsx)(E,{rawAmount:e,decimals:o.decimals,sigFigs:i,symbol:o.symbol??"???"}):null}function L({info:{recipient:e,uniAmountRaw:n}}){const{ENSName:i}=(0,_.Z)(),o=i??e;return"string"===typeof n?(0,s.jsxs)(l.cC,{children:["Claim ",(0,s.jsx)(E,{rawAmount:n,symbol:"UNI",decimals:18,sigFigs:4})," for ",{name:o}]}):(0,s.jsxs)(l.cC,{children:["Claim UNI reward for ",{name:o}]})}function R(){return(0,s.jsx)(l.cC,{children:"Submit new proposal"})}function F({info:e}){var n,i,o;const r=(0,d.dQ)(e.tokenAddress);return(null===(n=w.BigNumber.from(e.amount))||void 0===n?void 0:n.eq(0))?(0,s.jsxs)(l.cC,{children:["Revoke ",{sym:null===(i=r)||void 0===i?void 0:i.symbol}]}):(0,s.jsxs)(l.cC,{children:["Approve ",{sym:null===(o=r)||void 0===o?void 0:o.symbol}]})}function U({info:e}){const n=`${e.governorAddress}/${e.proposalId}`;if(e.reason&&e.reason.trim().length>0)switch(e.decision){case k.N.For:return(0,s.jsxs)(l.cC,{children:["Vote for proposal ",{proposalKey:n}]});case k.N.Abstain:return(0,s.jsxs)(l.cC,{children:["Vote to abstain on proposal ",{proposalKey:n}]});case k.N.Against:return(0,s.jsxs)(l.cC,{children:["Vote against proposal ",{proposalKey:n}]})}else switch(e.decision){case k.N.For:return(0,s.jsxs)(l.cC,{children:["Vote for proposal ",{proposalKey:n},' with reason "',{reason:e.reason},'"']});case k.N.Abstain:return(0,s.jsxs)(l.cC,{children:["Vote to abstain on proposal ",{proposalKey:n},' with reason "',{reason:e.reason},'"']});case k.N.Against:return(0,s.jsxs)(l.cC,{children:["Vote against proposal ",{proposalKey:n},' with reason "',{reason:e.reason},'"']})}}function V({info:e}){const n=`${e.governorAddress}/${e.proposalId}`;return(0,s.jsxs)(l.cC,{children:["Queue proposal ",{proposalKey:n},"."]})}function $({info:e}){const n=`${e.governorAddress}/${e.proposalId}`;return(0,s.jsxs)(l.cC,{children:["Execute proposal ",{proposalKey:n},"."]})}function O({info:{delegatee:e}}){const{ENSName:n}=(0,_.Z)(e),i=n??e;return(0,s.jsxs)(l.cC,{children:["Delegate voting power to ",{name:i}]})}function W({info:{chainId:e,currencyAmountRaw:n,unwrapped:i}}){const o=e?(0,A.gX)(e):void 0;var r,t,c,a,d,u;return i?(0,s.jsxs)(l.cC,{children:["Unwrap"," ",(0,s.jsx)(E,{rawAmount:n,symbol:(null===(t=o)||void 0===t||null===(r=t.wrapped)||void 0===r?void 0:r.symbol)??"WETH",decimals:18,sigFigs:6})," ","to ",{symbol:(null===(c=o)||void 0===c?void 0:c.symbol)??"ETH"}]}):(0,s.jsxs)(l.cC,{children:["Wrap"," ",(0,s.jsx)(E,{rawAmount:n,symbol:(null===(a=o)||void 0===a?void 0:a.symbol)??"ETH",decimals:18,sigFigs:6})," ","to ",{symbol:(null===(u=o)||void 0===u||null===(d=u.wrapped)||void 0===d?void 0:d.symbol)??"WETH"}]})}function q(){return(0,s.jsx)(l.cC,{children:"Deposit liquidity"})}function H(){return(0,s.jsx)(l.cC,{children:"Withdraw deposited liquidity"})}function M({info:{baseCurrencyId:e,quoteCurrencyId:n}}){var i,o;const r=(0,d.U8)(e),t=(0,d.U8)(n);return(0,s.jsxs)(l.cC,{children:["Migrate ",{baseSymbol:null===(i=r)||void 0===i?void 0:i.symbol},"/",{quoteSymbol:null===(o=t)||void 0===o?void 0:o.symbol}," liquidity to V3"]})}function P({info:{quoteCurrencyId:e,baseCurrencyId:n}}){var i,o;const r=(0,d.U8)(n),t=(0,d.U8)(e);return(0,s.jsxs)(l.cC,{children:["Create ",{baseSymbol:null===(i=r)||void 0===i?void 0:i.symbol},"/",{quoteSymbol:null===(o=t)||void 0===o?void 0:o.symbol}," V3 pool"]})}function z({info:{currencyId0:e,currencyId1:n}}){var i,o;const r=(0,d.U8)(e),t=(0,d.U8)(n);return(0,s.jsxs)(l.cC,{children:["Collect ",{symbol0:null===(i=r)||void 0===i?void 0:i.symbol},"/",{symbol1:null===(o=t)||void 0===o?void 0:o.symbol}," fees"]})}function B({info:{baseCurrencyId:e,quoteCurrencyId:n,expectedAmountBaseRaw:i,expectedAmountQuoteRaw:o}}){return(0,s.jsxs)(l.cC,{children:["Remove"," ",(0,s.jsx)(D,{rawAmount:i,currencyId:e,sigFigs:3})," and"," ",(0,s.jsx)(D,{rawAmount:o,currencyId:n,sigFigs:3})]})}function Z({info:{createPool:e,quoteCurrencyId:n,baseCurrencyId:i}}){var o,r,t,c;const a=(0,d.U8)(i),u=(0,d.U8)(n);return e?(0,s.jsxs)(l.cC,{children:["Create pool and add ",{baseSymbol:null===(o=a)||void 0===o?void 0:o.symbol},"/",{quoteSymbol:null===(r=u)||void 0===r?void 0:r.symbol}," V3 liquidity"]}):(0,s.jsxs)(l.cC,{children:["Add ",{baseSymbol:null===(t=a)||void 0===t?void 0:t.symbol},"/",{quoteSymbol:null===(c=u)||void 0===c?void 0:c.symbol}," V3 liquidity"]})}function Q({info:{quoteCurrencyId:e,expectedAmountBaseRaw:n,expectedAmountQuoteRaw:i,baseCurrencyId:o}}){return(0,s.jsxs)(l.cC,{children:["Add ",(0,s.jsx)(D,{rawAmount:n,currencyId:o,sigFigs:3})," ","and ",(0,s.jsx)(D,{rawAmount:i,currencyId:e,sigFigs:3})," ","to Uniswap V2"]})}function K({info:e}){return(0,s.jsxs)(l.cC,{children:["Sent",(0,s.jsx)(D,{rawAmount:e.amount,currencyId:e.currencyId,sigFigs:6})," to"," ",{recipient:e.recipient}]})}function Y({info:e}){return e.tradeType===o.TradeType.EXACT_INPUT?(0,s.jsxs)(l.cC,{children:["Swap exactly"," ",(0,s.jsx)(D,{rawAmount:e.inputCurrencyAmountRaw,currencyId:e.inputCurrencyId,sigFigs:6})," ","for"," ",(0,s.jsx)(D,{rawAmount:e.settledOutputCurrencyAmountRaw??e.expectedOutputCurrencyAmountRaw,currencyId:e.outputCurrencyId,sigFigs:6})]}):(0,s.jsxs)(l.cC,{children:["Swap"," ",(0,s.jsx)(D,{rawAmount:e.expectedInputCurrencyAmountRaw,currencyId:e.inputCurrencyId,sigFigs:6})," ","for exactly"," ",(0,s.jsx)(D,{rawAmount:e.outputCurrencyAmountRaw,currencyId:e.outputCurrencyId,sigFigs:6})]})}function G({info:e}){switch(e.type){case S.i.ADD_LIQUIDITY_V3_POOL:return(0,s.jsx)(Z,{info:e});case S.i.ADD_LIQUIDITY_V2_POOL:return(0,s.jsx)(Q,{info:e});case S.i.CLAIM:return(0,s.jsx)(L,{info:e});case S.i.DEPOSIT_LIQUIDITY_STAKING:return(0,s.jsx)(q,{});case S.i.WITHDRAW_LIQUIDITY_STAKING:return(0,s.jsx)(H,{});case S.i.SWAP:return(0,s.jsx)(Y,{info:e});case S.i.APPROVAL:return(0,s.jsx)(F,{info:e});case S.i.VOTE:return(0,s.jsx)(U,{info:e});case S.i.DELEGATE:return(0,s.jsx)(O,{info:e});case S.i.WRAP:return(0,s.jsx)(W,{info:e});case S.i.CREATE_V3_POOL:return(0,s.jsx)(P,{info:e});case S.i.MIGRATE_LIQUIDITY_V3:return(0,s.jsx)(M,{info:e});case S.i.COLLECT_FEES:return(0,s.jsx)(z,{info:e});case S.i.REMOVE_LIQUIDITY_V3:return(0,s.jsx)(B,{info:e});case S.i.QUEUE:return(0,s.jsx)(V,{info:e});case S.i.EXECUTE:return(0,s.jsx)($,{info:e});case S.i.SUBMIT_PROPOSAL:return(0,s.jsx)(R,{});case S.i.SEND:return(0,s.jsx)(K,{info:e})}}var X=i(69780),J=i(44591),ee=i(2562),ne=i(94284);const ie=f.default.div.withConfig({displayName:"AnimatedConfirmation__Wrapper",componentId:"sc-5616b2b8-0"})`
  height: 90px;
  width: 90px;
`,se=f.keyframes`
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
`,oe=f.keyframes`
  0% {
    stroke-dashoffset: -100;
  }
  100% {
    stroke-dashoffset: 900;
  }
`,re=f.default.circle.withConfig({displayName:"AnimatedConfirmation__Circle",componentId:"sc-5616b2b8-1"})`
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
  -webkit-animation: ${se} 0.9s ease-in-out;
  animation: ${se} 0.9s ease-in-out;
`,te=f.default.polyline.withConfig({displayName:"AnimatedConfirmation__PolyLine",componentId:"sc-5616b2b8-2"})`
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
  stroke-dashoffset: -100;
  -webkit-animation: ${oe} 0.9s 0.35s ease-in-out forwards;
  animation: ${oe} 0.9s 0.35s ease-in-out forwards;
`;function ce({className:e}){const n=(0,f.useTheme)();return(0,s.jsx)(ie,{className:e,"data-testid":"animated-confirmation",children:(0,s.jsxs)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 130.2 130.2",children:[(0,s.jsx)(re,{className:"path circle",fill:"none",stroke:n.success,strokeWidth:"6",strokeMiterlimit:"10",cx:"65.1",cy:"65.1",r:"62.1"}),(0,s.jsx)(te,{className:"path check",fill:"none",stroke:n.success,strokeWidth:"6",strokeLinecap:"round",strokeMiterlimit:"10",points:"100.2,40.2 51.5,88.8 29.8,67.5 "})]})})}const ae=f.default.div.withConfig({displayName:"TransactionConfirmationModal__Wrapper",componentId:"sc-ad7a7442-0"})`
  background-color: ${({theme:e})=>e.surface1};
  border-radius: 20px;
  outline: 1px solid ${({theme:e})=>e.surface3};
  width: 100%;
  padding: 16px;
`,de=(0,f.default)(J.Tz).withConfig({displayName:"TransactionConfirmationModal__BottomSection",componentId:"sc-ad7a7442-1"})`
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`,le=(0,f.default)(J.lg).withConfig({displayName:"TransactionConfirmationModal__ConfirmedIcon",componentId:"sc-ad7a7442-2"})`
  padding: ${({inline:e})=>e?"20px 0":"32px 0;"};
`,ue=(0,f.default)(J.Tz).withConfig({displayName:"TransactionConfirmationModal__ConfirmationModalContentWrapper",componentId:"sc-ad7a7442-3"})`
  padding-bottom: 12px;
`;function me({onDismiss:e,pendingText:n,inline:i}){return(0,s.jsx)(ae,{children:(0,s.jsxs)(J.Tz,{gap:"md",children:[!i&&(0,s.jsxs)(ne.m0,{children:[(0,s.jsx)("div",{}),(0,s.jsx)(j.Tw,{onClick:e})]}),(0,s.jsx)(le,{inline:i,children:(0,s.jsx)(j._1,{src:v.Z,alt:"loader",size:i?"40px":"90px"})}),(0,s.jsxs)(J.Tz,{gap:"md",justify:"center",children:[(0,s.jsx)(j.Tv.SubHeaderLarge,{color:"neutral1",textAlign:"center",children:(0,s.jsx)(l.cC,{children:"Waiting for confirmation"})}),(0,s.jsx)(j.Tv.SubHeader,{color:"neutral1",textAlign:"center",children:n}),(0,s.jsx)(j.Tv.SubHeaderSmall,{color:"neutral2",textAlign:"center",marginBottom:"12px",children:(0,s.jsx)(l.cC,{children:"Confirm this transaction in your wallet"})})]})]})})}function pe({onDismiss:e,chainId:n,hash:i,currencyToAdd:t,inline:c}){var a,x;const h=(0,f.useTheme)(),{connector:y}=(0,r.G)(),C=null===(a=t)||void 0===a?void 0:a.wrapped,b=(null===(x=(0,d.J3)(C))||void 0===x?void 0:x.logoUrl)??"",[v,w]=(0,u.useState)(),I=(0,u.useCallback)((()=>{var e;(null===(e=C)||void 0===e?void 0:e.symbol)&&y.watchAsset&&y.watchAsset({address:C.address,symbol:C.symbol,decimals:C.decimals,image:b}).then((()=>w(!0))).catch((()=>w(!1)))}),[y,b,C]),T=n===o.ChainId.MAINNET?l.t`View on  Etherscan`:l.t`View on Block Explorer`;return(0,s.jsx)(ae,{children:(0,s.jsxs)(J.Tz,{children:[!c&&(0,s.jsxs)(ne.m0,{children:[(0,s.jsx)("div",{}),(0,s.jsx)(j.Tw,{onClick:e})]}),(0,s.jsx)(le,{inline:c,children:(0,s.jsx)(m.Z,{strokeWidth:1,size:c?"40px":"75px",color:h.accent1})}),(0,s.jsxs)(ue,{gap:"md",justify:"center",children:[(0,s.jsx)(j.Tv.MediumHeader,{textAlign:"center",children:(0,s.jsx)(l.cC,{children:"Transaction submitted"})}),t&&y.watchAsset&&(0,s.jsx)(X.Sy,{mt:"12px",padding:"6px 12px",width:"fit-content",onClick:I,children:v?(0,s.jsxs)(ne.DA,{children:[(0,s.jsxs)(l.cC,{children:["Added ",{sym:t.symbol}," "]}),(0,s.jsx)(p.Z,{size:"16px",stroke:h.success,style:{marginLeft:"6px"}})]}):(0,s.jsx)(ne.DA,{children:(0,s.jsxs)(l.cC,{children:["Add ",{sym:t.symbol}]})})}),(0,s.jsx)(X.DF,{onClick:e,style:{margin:"20px 0 0 0"},"data-testid":"dismiss-tx-confirmation",children:(0,s.jsx)(j.Tv.HeadlineSmall,{color:h.deprecated_accentTextLightPrimary,children:c?(0,s.jsx)(l.cC,{children:"Return"}):(0,s.jsx)(l.cC,{children:"Close"})})}),n&&i&&(0,s.jsx)(j.dL,{href:(0,g.E)(n,i,g.r.TRANSACTION),children:(0,s.jsx)(j.Tv.Link,{color:h.accent1,children:T})})]})]})})}function xe({title:e,bottomContent:n,onDismiss:i,topContent:o,headerContent:r}){var t;return(0,s.jsxs)(ae,{children:[(0,s.jsxs)(J.Tz,{gap:"sm",children:[(0,s.jsxs)(ne.ZP,{children:[null===(t=r)||void 0===t?void 0:t(),(0,s.jsx)(ne.ZP,{justify:"center",marginLeft:"24px",children:(0,s.jsx)(j.Tv.SubHeader,{children:e})}),(0,s.jsx)(j.Tw,{onClick:i,"data-testid":"confirmation-close-icon"})]}),o()]}),n&&(0,s.jsx)(de,{gap:"16px",children:n()})]})}const he=(0,f.default)(t.Z).withConfig({displayName:"TransactionConfirmationModal__StyledL2Badge",componentId:"sc-ad7a7442-4"})`
  padding: 6px 8px;
`;function fe({onDismiss:e,chainId:n,hash:i,pendingText:o,inline:r}){var t;const d=(0,f.useTheme)(),u=(0,h.kF)(i),m=u&&(0,h.qy)(u),p=(null===(t=u)||void 0===t?void 0:t.status)===b.LND.Confirmed,y=m&&u.confirmedTime?(u.confirmedTime-u.addedTime)/1e3:void 0,C=a.T_[n];return(0,s.jsx)(ae,{children:(0,s.jsxs)(J.Tz,{children:[!r&&(0,s.jsxs)(ne.m0,{mb:"16px",children:[(0,s.jsx)(he,{children:(0,s.jsxs)(ne.DA,{gap:"sm",children:[(0,s.jsx)(c.E,{chainId:n}),(0,s.jsx)(j.Tv.SubHeaderSmall,{children:C.label})]})}),(0,s.jsx)(j.Tw,{onClick:e})]}),(0,s.jsx)(le,{inline:r,children:m?p?(0,s.jsx)(ce,{}):(0,s.jsx)(x.Z,{strokeWidth:1,size:r?"40px":"90px",color:d.critical}):(0,s.jsx)(j._1,{src:v.Z,alt:"loader",size:r?"40px":"90px"})}),(0,s.jsxs)(J.Tz,{gap:"md",justify:"center",children:[(0,s.jsx)(j.Tv.SubHeaderLarge,{textAlign:"center",children:i?m?p?(0,s.jsx)(l.cC,{children:"Success"}):(0,s.jsx)(l.cC,{children:"Error"}):(0,s.jsx)(l.cC,{children:"Transaction submitted"}):(0,s.jsx)(l.cC,{children:"Confirm transaction in wallet"})}),(0,s.jsx)(j.Tv.BodySecondary,{textAlign:"center",children:u?(0,s.jsx)(G,{info:u.info}):o}),n&&i?(0,s.jsx)(j.dL,{href:(0,g.E)(n,i,g.r.TRANSACTION),children:(0,s.jsx)(j.Tv.SubHeaderSmall,{color:d.accent1,children:(0,s.jsx)(l.cC,{children:"View on Explorer"})})}):(0,s.jsx)("div",{style:{height:"17px"}}),(0,s.jsx)(j.Tv.SubHeaderSmall,{color:d.neutral3,marginTop:"20px",children:y?(0,s.jsxs)("div",{children:[(0,s.jsx)(l.cC,{children:"Transaction completed in "}),(0,s.jsxs)("span",{style:{fontWeight:535,marginLeft:"4px",color:d.neutral1},children:[y," seconds \ud83c\udf89"]})]}):(0,s.jsx)("div",{style:{height:"24px"}})}),(0,s.jsx)(X.DF,{onClick:e,style:{margin:"4px 0 0 0"},children:r?(0,s.jsx)(l.cC,{children:"Return"}):(0,s.jsx)(l.cC,{children:"Close"})})]})]})})}function je({isOpen:e,onDismiss:n,attemptingTxn:i,hash:o,pendingText:r,reviewContent:t,currencyToAdd:c}){const d=(0,C.x)(),l=(0,a.Nb)(d);return d&&l?(0,s.jsx)(ee.Z,{isOpen:e,$scrollOverlay:!0,onDismiss:n,maxHeight:90,children:(0,y.p)(d)&&(o||i)?(0,s.jsx)(fe,{chainId:d,hash:o,onDismiss:n,pendingText:r}):i?(0,s.jsx)(me,{onDismiss:n,pendingText:r}):o?(0,s.jsx)(pe,{chainId:d,hash:o,onDismiss:n,currencyToAdd:c}):t()}):null}},40926:(e,n,i)=>{i.d(n,{DC:()=>c,ER:()=>a,bb:()=>d,im:()=>t,pr:()=>l});var s=i(32546),o=i(22953),r=i(14411);const t=r.default.div.withConfig({displayName:"styled__Wrapper",componentId:"sc-bfb6c8b8-0"})`
  position: relative;
  padding: 20px;
`,c=(0,r.default)(o.xv).withConfig({displayName:"styled__ClickableText",componentId:"sc-bfb6c8b8-1"})`
  :hover {
    cursor: pointer;
  }
  color: ${({theme:e})=>e.accent1};
`,a=r.default.button.withConfig({displayName:"styled__MaxButton",componentId:"sc-bfb6c8b8-2"})`
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
`,l=(0,r.default)(s.pr).withConfig({displayName:"styled__LoadingRows",componentId:"sc-bfb6c8b8-4"})`
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
`},53286:(e,n,i)=>{var s;i.d(n,{N:()=>s}),function(e){e[e.Against=0]="Against",e[e.For=1]="For",e[e.Abstain=2]="Abstain"}(s||(s={}))}}]);
//# sourceMappingURL=155.83fb8129.chunk.js.map