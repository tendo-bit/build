"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[3464],{23173:(e,t,n)=>{n.d(t,{L:()=>s,S:()=>i});n(57995),n(45814);var i="_2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3",s="_2kdvfw1"},45814:()=>{},3464:(e,t,n)=>{n.d(t,{ZI:()=>Tt,zD:()=>At,ZP:()=>jt});var i=n(92936),s=n(5985),r=n(47583),a=n(54690),o=n(6823),d=n(3805),c=n(15288),l=n(66284),u=n(76078),p=n(26729),g=n(25320),m=n(44591),h=n(63415),x=n(5967),f=n(94284),I=n(85824),C=n(82743),_=n(86059),N=n(57852),v=n(41390),T=n(70854);var A=n(39671),w=n(2802),b=n(32682),y=n(83102),E=n(68566),j=n(89882),k=n(64538),P=n(52384),R=n(5670),S=n(78635),O=n(45779),L=n(32115),B=n(91325);var z=n(47263),D=n(78129),F=n(59036),$=n(25408);function U(e,t,n){const{hasPriceAdjustment:i,updatedAssets:s}=(0,F.$)(e,t),r=i&&n,{unchanged:a,priceChanged:o,unavailable:d}=(0,$.K)(s),c=s.length>0,l=o.length>0,u=d.length>0,p=l||u,g=function(e,t,n){return[...e.map((e=>({asset:e,status:z.ZJ.UNAVAILABLE}))),...t.map((e=>({asset:e,status:z.ZJ.REVIEWING_PRICE_CHANGE}))),...n.map((e=>({asset:e,status:z.ZJ.REVIEWED})))]}(d,o,a),m=function(e,t,n,i){return e?t?n?z.s.IN_REVIEW:z.s.CONFIRM_REVIEW:i?z.s.CONFIRM_QUOTE:z.s.CONFIRMING_IN_WALLET:z.s.ADDING_TO_BAG}(c,p,l,r);return{newBagItems:g,nextBagStatus:m}}function H(e){return{action:z.lQ.Buy,marketplace:e.marketplace.toLowerCase(),amountIn:e.price.value,assetIn:{ETHPrice:e.price.value,baseAsset:e.price.currency,basePrice:e.price.value,baseDecimals:"18"},amountOut:e.amount.toString(),assetOut:{id:e.id,decimals:18,address:e.contractAddress,priceInfo:{ETHPrice:e.price.value,baseAsset:e.price.currency,basePrice:e.price.value,baseDecimals:"18"},tokenType:e.tokenType,tokenId:e.tokenId,amount:e.amount.toString(),marketplace:e.marketplace.toLowerCase(),orderSource:"api"}}}function G(e,t){const n=e.route?e.route.map(H):[];return{route:n,routeResponse:{route:n,valueToSend:t?void 0:e.sendAmount.value,data:e.calldata,to:e.toAddress}}}var M=n(51001),W=n(27009),V=n(32027);function Z(e,t,n,i,s,r,a){try{var o=e[r](a),d=o.value}catch(c){return void n(c)}o.done?t(d):Promise.resolve(d).then(i,s)}function q(){const e=(0,M.z)(),t=(0,W.p)((e=>e.sendTransaction)),n=(0,V.J)((e=>e.setTransactionResponse)),{setLocked:i,setBagExpanded:s,reset:r}=(0,k.c)((({setLocked:e,setBagExpanded:t,reset:n})=>({setLocked:e,setBagExpanded:t,reset:n})));return(0,O.useCallback)(function(){var a,o=(a=function*(a,o,d=!1){if(!e)return;const c=yield t(e,o,a,d);c&&(i(!1),n(c),s({bagExpanded:!1}),r())},function(){var e=this,t=arguments;return new Promise((function(n,i){var s=a.apply(e,t);function r(e){Z(s,n,i,r,o,"next",e)}function o(e){Z(s,n,i,r,o,"throw",e)}r(void 0)}))});return function(e,t){return o.apply(this,arguments)}}(),[e,r,t,s,i,n])}var X=n(47832),Y=n(92532);const K=(0,n(92490).F)()((0,X.mW)((e=>({inputCurrency:void 0,tokenTradeInput:void 0,setInputCurrency:t=>e((()=>({inputCurrency:t}))),clearInputCurrency:()=>e((()=>({inputCurrency:void 0}))),setTokenTradeInput:t=>e((()=>({tokenTradeInput:t})))})),{name:"useTokenInput"}),Y.X);function J(e,t,n,i,s,r,a){try{var o=e[r](a),d=o.value}catch(c){return void n(c)}o.done?t(d):Promise.resolve(d).then(i,s)}function Q(e){return function(){var t=this,n=arguments;return new Promise((function(i,s){var r=e.apply(t,n);function a(e){J(r,i,s,a,o,"next",e)}function o(e){J(r,i,s,a,o,"throw",e)}a(void 0)}))}}function ee(){const{account:e}=(0,p.G)(),{itemsInBag:t,setBagStatus:n,didOpenUnavailableAssets:i,setDidOpenUnavailableAssets:s,isLocked:r,setLocked:a,setItemsInBag:o}=(0,k.c)((({itemsInBag:e,setBagStatus:t,didOpenUnavailableAssets:n,setDidOpenUnavailableAssets:i,isLocked:s,setLocked:r,setItemsInBag:a})=>({itemsInBag:e,setBagStatus:t,didOpenUnavailableAssets:n,setDidOpenUnavailableAssets:i,isLocked:s,setLocked:r,setItemsInBag:a}))),d=K((e=>e.tokenTradeInput)),c=(0,O.useMemo)((()=>(0,D.G7)(t)),[t]),[l]=(0,T.yoq)(),u=q(),g=(0,O.useCallback)((()=>{i&&s(!1),!r&&a(!0),n(z.s.FETCHING_ROUTE)}),[r,i,a,n,s]);return(0,O.useCallback)(Q((function*(){g(),l({variables:{senderAddress:e||"",nftTrades:(0,D.hI)(c),tokenTrades:d||void 0},onCompleted:e=>{if(!e.nftRoute||!e.nftRoute.route)return n(z.s.ADDING_TO_BAG),void a(!1);const t=function(e){return e.filter((e=>e.status!==z.ZJ.UNAVAILABLE)).map((e=>e.asset))}(c),i=!!d,{route:s,routeResponse:r}=G(e.nftRoute,i),{newBagItems:l,nextBagStatus:p}=U(t,s,i);if(o(l),n(p),p===z.s.CONFIRMING_IN_WALLET)return u(r,t,i),void a(!0);a(!1)}})})),[e,l,c,u,g,a,n,o,d])}var te=n(92650);function ne(e){return{...(n={inputAmount:e.inputAmount,outputAmount:e.outputAmount},{inputAmount:{amount:n.inputAmount.quotient.toString(),token:{address:n.inputAmount.currency.isToken?n.inputAmount.currency.address:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",chainId:n.inputAmount.currency.chainId,decimals:n.inputAmount.currency.decimals,isNative:n.inputAmount.currency.isNative}},outputAmount:{amount:n.outputAmount.quotient.toString(),token:{address:n.outputAmount.currency.isToken?n.outputAmount.currency.address:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",chainId:n.outputAmount.currency.chainId,decimals:n.outputAmount.currency.decimals,isNative:n.outputAmount.currency.isNative}}}),pools:(t=e.route.pools,t.map((e=>function(e){const t="fee"in e;return{pair:t?void 0:{tokenAmountA:{amount:e.reserve0.quotient.toString(),token:{address:e.token0.address,chainId:e.token0.chainId,decimals:e.token0.decimals,isNative:e.token0.isNative}},tokenAmountB:{amount:e.reserve1.quotient.toString(),token:{address:e.token1.address,chainId:e.token1.chainId,decimals:e.token1.decimals,isNative:e.token1.isNative}}},pool:t?{fee:e.fee,liquidity:e.liquidity.toString(),sqrtRatioX96:e.sqrtRatioX96.toString(),tickCurrent:e.tickCurrent.toString(),tokenA:{address:e.token0.address,chainId:e.token0.chainId,decimals:e.token0.decimals,isNative:e.token0.isNative},tokenB:{address:e.token1.address,chainId:e.token1.chainId,decimals:e.token1.decimals,isNative:e.token1.isNative}}:void 0}}(e))))};var t,n}function ie(e,t,n){const i=K((e=>e.setTokenTradeInput)),s=(0,B.pG)(e)&&e.routes,r=!!e&&!!e.inputAmount&&e.inputAmount.currency.isToken,a=!!n&&!!t;(0,O.useEffect)((()=>{if(!s||!r||!a)return void i(void 0);const o=parseInt(n.multiply(100).toSignificant(2)),{mixedTokenTradeRouteInputs:d,v2TokenTradeRouteInputs:c,v3TokenTradeRouteInputs:l}=function(e){const t=[],n=[],i=[],s=e.swaps;for(const r of s)r.route.protocol===te.Protocol.MIXED?t.push(ne(r)):r.route.protocol===te.Protocol.V2?n.push(ne(r)):i.push(ne(r));return{mixedTokenTradeRouteInputs:t.length>0?t:void 0,v2TokenTradeRouteInputs:n.length>0?n:void 0,v3TokenTradeRouteInputs:i.length>0?i:void 0}}(e),u={mixedRoutes:d,tradeType:T.NSL.ExactOutput,v2Routes:c,v3Routes:l},p="permitSignature"in t&&t.permitSignature?{details:{amount:t.permitSignature.details.amount.toString(),expiration:t.permitSignature.details.expiration.toString(),nonce:t.permitSignature.details.nonce.toString(),token:t.permitSignature.details.token},sigDeadline:t.permitSignature.sigDeadline.toString(),signature:t.permitSignature.signature,spender:t.permitSignature.spender}:void 0;i({permit:p,routes:u,slippageToleranceBasisPoints:o,tokenAmount:{amount:e.inputAmount.quotient.toString(),token:{address:e.inputAmount.currency.address,chainId:e.inputAmount.currency.chainId,decimals:e.inputAmount.currency.decimals,isNative:e.inputAmount.currency.isNative}}})}),[t,n,a,r,s,i,e])}var se=n(14411),re=n(66136),ae=n(2721);var oe,de=n(43827),ce=n(57221),le=n(86082),ue=n(54972);function pe(e,t,n,s,r){const a={handleClick:()=>{},buttonText:(0,i.jsx)(o.cC,{children:"Something went wrong"}),disabled:!0,warningText:void 0,warningTextColor:t.deprecated_accentWarning,helperText:void 0,helperTextColor:t.neutral2,buttonColor:t.accent1,buttonTextColor:t.deprecated_accentTextLightPrimary};return{[oe.WALLET_NOT_CONNECTED]:{...a,handleClick:n??(()=>{}),disabled:!1,buttonText:(0,i.jsx)(o.cC,{children:"Connect wallet"})},[oe.NOT_SUPPORTED_CHAIN]:{...a,handleClick:n??(()=>{}),buttonText:(0,i.jsx)(o.cC,{children:"Switch networks"}),disabled:!1,warningText:(0,i.jsx)(o.cC,{children:"Wrong network"})},[oe.INSUFFICIENT_BALANCE]:{...a,buttonText:(0,i.jsx)(o.cC,{children:"Pay"}),warningText:(0,i.jsx)(o.cC,{children:"Insufficient funds"})},[oe.ERROR]:{...a,warningText:(0,i.jsx)(o.cC,{children:"Something went wrong. Please try again."})},[oe.IN_WALLET_CONFIRMATION]:{...a,buttonText:(0,i.jsx)(o.cC,{children:"Proceed in wallet"})},[oe.PROCESSING_TRANSACTION]:{...a,buttonText:(0,i.jsx)(o.cC,{children:"Transaction pending"})},[oe.FETCHING_TOKEN_ROUTE]:{...a,buttonText:(0,i.jsx)(o.cC,{children:"Fetching route"})},[oe.INVALID_TOKEN_ROUTE]:{...a,buttonText:(0,i.jsx)(o.cC,{children:"Pay"})},[oe.NO_TOKEN_ROUTE_FOUND]:{...a,buttonText:(0,i.jsx)(o.cC,{children:"Insufficient liquidity"}),buttonColor:t.surface3,buttonTextColor:t.neutral1,helperText:(0,i.jsx)(o.cC,{children:"Insufficient pool liquidity to complete transaction"})},[oe.LOADING_ALLOWANCE]:{...a,buttonText:(0,i.jsx)(o.cC,{children:"Loading allowance"})},[oe.IN_WALLET_ALLOWANCE_APPROVAL]:{...a,buttonText:(0,i.jsx)(o.cC,{children:"Approve in your wallet"})},[oe.PROCESSING_APPROVAL]:{...a,buttonText:(0,i.jsx)(o.cC,{children:"Approval pending"})},[oe.REQUIRE_APPROVAL]:{...a,disabled:!1,handleClick:n??(()=>{}),helperText:(0,i.jsx)(o.cC,{children:"An approval is needed to use this token. "}),buttonText:(0,i.jsx)(o.cC,{children:"Approve"})},[oe.CONFIRM_UPDATED_PRICE]:{...a,handleClick:n??(()=>{}),disabled:!1,warningTextColor:t.accent1,warningText:(0,i.jsx)(o.cC,{children:"Price updated"}),buttonText:(0,i.jsx)(o.cC,{children:"Pay"})},[oe.PRICE_IMPACT_HIGH]:{...a,handleClick:n??(()=>{}),disabled:!1,buttonColor:r?r.priceImpactSeverity.color:a.buttonColor,helperText:(0,i.jsx)(o.cC,{children:"Price impact warning"}),helperTextColor:r?r.priceImpactSeverity.color:a.helperTextColor,buttonText:(0,i.jsx)(o.cC,{children:"Pay Anyway"})},[oe.PAY]:{...a,handleClick:n??(()=>{}),disabled:!1,buttonText:(0,i.jsx)(o.cC,{children:"Pay"}),helperText:s?(0,i.jsx)(o.cC,{children:"Refunds for unavailable items will be given in ETH"}):void 0}}[e]}!function(e){e[e.WALLET_NOT_CONNECTED=0]="WALLET_NOT_CONNECTED",e[e.NOT_SUPPORTED_CHAIN=1]="NOT_SUPPORTED_CHAIN",e[e.INSUFFICIENT_BALANCE=2]="INSUFFICIENT_BALANCE",e[e.ERROR=3]="ERROR",e[e.IN_WALLET_CONFIRMATION=4]="IN_WALLET_CONFIRMATION",e[e.PROCESSING_TRANSACTION=5]="PROCESSING_TRANSACTION",e[e.FETCHING_TOKEN_ROUTE=6]="FETCHING_TOKEN_ROUTE",e[e.INVALID_TOKEN_ROUTE=7]="INVALID_TOKEN_ROUTE",e[e.NO_TOKEN_ROUTE_FOUND=8]="NO_TOKEN_ROUTE_FOUND",e[e.LOADING_ALLOWANCE=9]="LOADING_ALLOWANCE",e[e.IN_WALLET_ALLOWANCE_APPROVAL=10]="IN_WALLET_ALLOWANCE_APPROVAL",e[e.PROCESSING_APPROVAL=11]="PROCESSING_APPROVAL",e[e.REQUIRE_APPROVAL=12]="REQUIRE_APPROVAL",e[e.CONFIRM_UPDATED_PRICE=13]="CONFIRM_UPDATED_PRICE",e[e.PRICE_IMPACT_HIGH=14]="PRICE_IMPACT_HIGH",e[e.PAY=15]="PAY"}(oe||(oe={}));const ge=se.default.div.withConfig({displayName:"BagFooter__FooterContainer",componentId:"sc-358ea9ad-0"})`
  padding: 0px 12px;
`,me=se.default.div.withConfig({displayName:"BagFooter__Footer",componentId:"sc-358ea9ad-1"})`
  border-top: 1px solid ${({theme:e})=>e.surface3};
  color: ${({theme:e})=>e.neutral1};
  display: flex;
  flex-direction: column;
  margin: 0px 16px 8px;
  padding: 12px 0px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`,he=(0,se.default)(m.ZP).withConfig({displayName:"BagFooter__FooterHeader",componentId:"sc-358ea9ad-2"})`
  padding-top: 8px;
  padding-bottom: 16px;
`,xe=(0,se.default)(f.ZP).withConfig({displayName:"BagFooter__CurrencyRow",componentId:"sc-358ea9ad-3"})`
  justify-content: space-between;
  align-items: start;
  gap: 8px;
`,fe=(0,se.default)(m.ZP).withConfig({displayName:"BagFooter__TotalColumn",componentId:"sc-358ea9ad-4"})`
  text-align: end;
  overflow: hidden;
`,Ie=(0,se.default)(ce.Z).withConfig({displayName:"BagFooter__WarningIcon",componentId:"sc-358ea9ad-5"})`
  width: 14px;
  margin-right: 4px;
  color: inherit;
`,Ce=(0,se.default)(ue.Tv.BodyPrimary).withConfig({displayName:"BagFooter__WarningText",componentId:"sc-358ea9ad-6"})`
  align-items: center;
  color: ${({$color:e})=>e};
  display: flex;
  justify-content: center;
  margin-bottom: 10px !important;
  text-align: center;
`,_e=(0,se.default)(ue.Tv.BodySmall).withConfig({displayName:"BagFooter__HelperText",componentId:"sc-358ea9ad-7"})`
  color: ${({$color:e})=>e};
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 10px !important;
`,Ne=(0,se.default)(f.ZP).withConfig({displayName:"BagFooter__CurrencyInput",componentId:"sc-358ea9ad-8"})`
  gap: 8px;
  cursor: pointer;
`,ve=se.default.button.withConfig({displayName:"BagFooter__ActionButton",componentId:"sc-358ea9ad-9"})`
  display: flex;
  background: ${({$backgroundColor:e})=>e};
  color: ${({$color:e})=>e};
  font-weight: 535;
  line-height: 24px;
  font-size: 16px;
  gap: 16px;
  justify-content: center;
  border: none;
  border-radius: 12px;
  padding: 12px 0px;
  cursor: pointer;
  align-items: center;

  &:disabled {
    opacity: 0.6;
    cursor: auto;
  }
`,Te=(0,se.default)(C.X).withConfig({displayName:"BagFooter__FiatLoadingBubble",componentId:"sc-358ea9ad-10"})`
  border-radius: 4px;
  width: 4rem;
  height: 20px;
  align-self: end;
`,Ae=(0,se.default)(f.ZP).withConfig({displayName:"BagFooter__PriceImpactContainer",componentId:"sc-358ea9ad-11"})`
  align-items: center;
  gap: 8px;
  width: 100%;
  justify-content: flex-end;
`,we=(0,se.default)(f.ZP).withConfig({displayName:"BagFooter__PriceImpactRow",componentId:"sc-358ea9ad-12"})`
  align-items: center;
  gap: 8px;
`,be=(0,se.default)(ue.Tv.BodyPrimary).withConfig({displayName:"BagFooter__ValueText",componentId:"sc-358ea9ad-13"})`
  line-height: 20px;
  font-weight: 535;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`,ye=({color:e,children:t})=>t?(0,i.jsxs)(Ce,{"data-testid":"nft-buy-button-warning",fontSize:"14px",lineHeight:"20px",$color:e,children:[(0,i.jsx)(Ie,{}),t]}):null,Ee=({children:e,color:t})=>e?(0,i.jsx)(_e,{lineHeight:"16px",$color:t,children:e}):null,je={onlyShowCurrenciesWithBalance:!0},ke=({usingPayWithAnyToken:e,totalEthPrice:t,activeCurrency:n,tradeState:s,trade:r})=>{var a;const{formatEther:d,formatNumberOrString:c}=(0,re.Gb)();var l;return e?s!==L.qx.LOADING||r?(0,i.jsx)(be,{color:s===L.qx.LOADING?"neutral3":"neutral1",children:c({input:null===(a=r)||void 0===a?void 0:a.inputAmount.toExact(),type:re.sw.NFTToken})}):(0,i.jsx)(ue.Tv.BodyPrimary,{color:"neutral3",lineHeight:"20px",fontWeight:"535",children:(0,i.jsx)(o.cC,{children:"Fetching price..."})}):(0,i.jsxs)(ue.Tv.BodyPrimary,{lineHeight:"20px",fontWeight:"535",children:[d({input:t.toString(),type:re.sw.NFTToken}),"\xa0",(null===(l=n)||void 0===l?void 0:l.symbol)??"ETH"]})},Pe=({usdcValue:e,priceImpact:t,tradeState:n,usingPayWithAnyToken:s})=>{var r;const{formatNumberOrString:a}=(0,re.Gb)();return e?(0,i.jsxs)(Ae,{children:[t&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(_.ud,{text:o.t`The estimated difference between the USD values of input and output amounts.`,children:(0,i.jsxs)(we,{children:[(0,i.jsx)(ce.Z,{color:t.priceImpactSeverity.color,size:"16px"}),(0,i.jsxs)(ue.Tv.BodySmall,{style:{color:t.priceImpactSeverity.color},lineHeight:"20px",children:["(",t.displayPercentage(),")"]})]})})}),(0,i.jsx)(ue.Tv.BodySmall,{color:"neutral3",lineHeight:"20px",children:`${a({input:null===(r=e)||void 0===r?void 0:r.toExact(),type:re.sw.FiatNFTToken})}`})]}):!s||n!==L.qx.INVALID&&n!==L.qx.NO_ROUTE_FOUND?(0,i.jsx)(Te,{}):null},Re=[z.s.FETCHING_ROUTE,z.s.CONFIRMING_IN_WALLET,z.s.FETCHING_FINAL_ROUTE,z.s.PROCESSING_TRANSACTION],Se=({setModalIsOpen:e,eventProperties:t})=>{var n,a,d,c;const f=(0,g.LK)(),C=(0,se.useTheme)(),{account:_,chainId:D}=(0,p.G)(),F=(0,N.Nb)(D),$=Boolean(_&&D),U=(0,P.P)(),{inputCurrency:H}=K((({inputCurrency:e})=>({inputCurrency:e}))),G=K((e=>e.setInputCurrency)),M=(0,A.U8)("ETH"),V=(0,E.mM)(_??void 0,H&&H.isToken?H:void 0),{isLocked:Z,bagStatus:q,setBagExpanded:X,setBagStatus:Y}=(0,k.c)((({isLocked:e,bagStatus:t,setBagExpanded:n,setBagStatus:i})=>({isLocked:e,bagStatus:t,setBagExpanded:n,setBagStatus:i}))),[J,Q]=(0,O.useState)(!1),te=Re.includes(q),ne=H??M,ce=!!H&&D===u.ChainId.MAINNET,{universalRouterAddress:Ie,universalRouterAddressIsLoading:Ce}=function(){var e,t;const{data:n,loading:i}=(0,T.Z6i)({fetchPolicy:"no-cache"});return{universalRouterAddress:null===(t=n)||void 0===t||null===(e=t.nftRoute)||void 0===e?void 0:e.toAddress,universalRouterAddressIsLoading:i}}();!function(e){const t=(0,W.p)((e=>e.state)),n=(0,W.p)((e=>e.setState)),i=(0,O.useRef)(t),{setBagStatus:s,setLocked:r}=(0,k.c)((({setBagExpanded:e,setBagStatus:t,setLocked:n})=>({setBagExpanded:e,setBagStatus:t,setLocked:n})));(0,O.useEffect)((()=>{W.p.subscribe((e=>i.current=e.state))}),[]),(0,O.useEffect)((()=>{i.current===z.c$.Confirming&&s(z.s.PROCESSING_TRANSACTION),i.current!==z.c$.Denied&&i.current!==z.c$.Invalid||(i.current===z.c$.Invalid?s(z.s.WARNING):s(z.s.CONFIRM_REVIEW),n(z.c$.New),r(!1),e(!1))}),[r,s,e,n,i.current])}(e);const _e=ee(),Te=(0,O.useMemo)((()=>(0,j.Z)((0,l.formatEther)(U.toString()),M??void 0)),[M,U]),{state:Ae,trade:we,maximumAmountIn:be,allowedSlippage:Se}=function(e,t){const{state:n,trade:i}=(0,S.C)(u.TradeType.EXACT_OUTPUT,t,e??void 0,L.R5.API),s=(0,R.Z)((0,B.pG)(i)?i:void 0),r=(0,O.useMemo)((()=>{var e,t;const n=null===(e=i)||void 0===e?void 0:e.maximumAmountIn(s);return(null===(t=n)||void 0===t?void 0:t.currency.isToken)?n:void 0}),[s,i]);return(0,O.useMemo)((()=>({state:n,trade:i,maximumAmountIn:r,allowedSlippage:s})),[s,r,n,i])}(ce?H:void 0,Te),Oe=(0,w.Z)(be,function(e,t){if(e)return e===u.ChainId.MAINNET?t??(0,v.UNIVERSAL_ROUTER_ADDRESS)(e):(0,v.UNIVERSAL_ROUTER_ADDRESS)(e)}(F?D:void 0,Ie),L.d7.Classic),Le=Oe.state===w.K.LOADING||Ce;ie(we,Oe,Se);const Be=function(e){const t=(0,se.useTheme)(),{formatPercent:n}=(0,re.Gb)();return(0,O.useMemo)((()=>{const i=e?(0,ae.QW)(e):void 0,s=i?(0,ae.BK)(i):void 0,r="error"===s?t.critical:"warning"===s?t.deprecated_accentWarning:void 0;return i&&s&&r?{priceImpactSeverity:{type:s,color:r},displayPercentage:()=>n(i)}:void 0}),[n,t.critical,t.deprecated_accentWarning,e])}(we),ze=(0,b.sq)(null===(n=we)||void 0===n?void 0:n.inputAmount),De=(0,b.sq)(Te),Fe=ce?ze:De,{balance:$e}=(0,de.t)(),Ue=(0,O.useMemo)((()=>{if($&&D===u.ChainId.MAINNET){if(H){var e;const t=null===(e=we)||void 0===e?void 0:e.inputAmount;if(!V||!t)return;return!V.lessThan(t)}return(0,l.parseEther)($e).gte(U)}}),[$,D,H,$e,U,null===(a=we)||void 0===a?void 0:a.inputAmount,V]);(0,O.useEffect)((()=>{Y(z.s.ADDING_TO_BAG)}),[H,Y]);const He=(0,y.o)(),{buttonText:Ge,buttonTextColor:Me,disabled:We,warningText:Ve,warningTextColor:Ze,helperText:qe,helperTextColor:Xe,handleClick:Ye,buttonColor:Ke}=(0,O.useMemo)((()=>{if($&&D!==u.ChainId.MAINNET){const e=()=>He(u.ChainId.MAINNET);return pe(oe.NOT_SUPPORTED_CHAIN,C,e)}if(!1===Ue)return pe(oe.INSUFFICIENT_BALANCE,C);if(q===z.s.WARNING)return pe(oe.ERROR,C);if(!$){const e=()=>{f(),X({bagExpanded:!1})};return pe(oe.WALLET_NOT_CONNECTED,C,e)}if(q===z.s.FETCHING_FINAL_ROUTE||q===z.s.CONFIRMING_IN_WALLET)return pe(oe.IN_WALLET_CONFIRMATION,C);if(q===z.s.PROCESSING_TRANSACTION)return pe(oe.PROCESSING_TRANSACTION,C);if(ce&&Ae!==L.qx.VALID)return Ae===L.qx.INVALID?pe(oe.INVALID_TOKEN_ROUTE,C):Ae===L.qx.NO_ROUTE_FOUND?pe(oe.NO_TOKEN_ROUTE_FOUND,C):pe(oe.FETCHING_TOKEN_ROUTE,C);const e=Oe.state===w.K.REQUIRED,t=()=>e&&Oe.approveAndPermit();return Le?pe(oe.LOADING_ALLOWANCE,C,t):e?Oe.isApprovalPending?pe(oe.IN_WALLET_ALLOWANCE_APPROVAL,C,t):Oe.isApprovalLoading?pe(oe.PROCESSING_APPROVAL,C,t):pe(oe.REQUIRE_APPROVAL,C,t):q===z.s.CONFIRM_QUOTE?pe(oe.CONFIRM_UPDATED_PRICE,C,_e):Be&&"error"===Be.priceImpactSeverity.type?pe(oe.PRICE_IMPACT_HIGH,C,_e,ce,Be):pe(oe.PAY,C,_e,ce)}),[$,D,Ue,q,ce,Ae,Le,Oe,Be,C,_e,He,f,X]),Je={usd_value:null===(d=Fe)||void 0===d?void 0:d.toExact(),using_erc20:!!H,...t};return(0,i.jsxs)(ge,{children:[(0,i.jsxs)(me,{children:[(0,i.jsxs)(he,{gap:"xs",children:[(0,i.jsxs)(xe,{children:[(0,i.jsx)(m.ZP,{gap:"xs",children:F&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(ue.Tv.SubHeaderSmall,{children:(0,i.jsx)(o.cC,{children:"Pay with"})}),(0,i.jsxs)(Ne,{onClick:()=>{Z||(Q(!0),(0,r._P)(s.Yz.NFT_BUY_TOKEN_SELECTOR_CLICKED))},children:[(0,i.jsx)(x.Z,{currency:ne,size:24}),(0,i.jsx)(ue.Tv.HeadlineSmall,{fontWeight:535,lineHeight:"24px",children:null===(c=ne)||void 0===c?void 0:c.symbol}),(0,i.jsx)(le.Z,{size:20,color:C.neutral2})]})]})}),(0,i.jsxs)(fe,{gap:"xs",children:[(0,i.jsx)(ue.Tv.SubHeaderSmall,{children:(0,i.jsx)(o.cC,{children:"Total"})}),(0,i.jsx)(ke,{usingPayWithAnyToken:ce,totalEthPrice:U,activeCurrency:ne,tradeState:Ae,trade:we})]})]}),(0,i.jsx)(Pe,{usdcValue:Fe,priceImpact:Be,tradeState:Ae,usingPayWithAnyToken:ce})]}),(0,i.jsxs)(r.M8,{events:[s.TM.onClick],name:s.Yz.NFT_BUY_BAG_PAY,element:s.xo.NFT_BUY_BAG_PAY_BUTTON,properties:{...Je},shouldLogImpression:$&&!We,children:[(0,i.jsx)(ye,{color:Ze,children:Ve}),(0,i.jsx)(Ee,{color:Xe,children:qe}),(0,i.jsxs)(ve,{"data-testid":"nft-buy-button",onClick:Ye,disabled:We||te,$backgroundColor:Ke,$color:Me,children:[te&&(0,i.jsx)(h.ZP,{size:"20px",stroke:"white"}),Ge]})]})]}),(0,i.jsx)(I.Z,{isOpen:J,onDismiss:()=>Q(!1),onCurrencySelect:e=>{G(e.isNative?void 0:e),e.isToken&&(0,r._P)(s.Yz.NFT_BUY_TOKEN_SELECTED,{token_address:e.address,token_symbol:e.symbol})},selectedCurrency:ne??void 0,currencySearchFilters:je})]})};var Oe=n(60040),Le=n(70518),Be=n(79132),ze=n(62587),De=n(97341),Fe=(n(57995),n(11604)),$e=n(21989),Ue=n(69780);const He=se.keyframes`
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
`,Ge=se.default.circle.withConfig({displayName:"TimedLoader__Circle",componentId:"sc-40ed38f8-0"})`
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
  -webkit-animation: ${He} linear;
  animation: ${He} linear;
  animation-duration: 160s;
  stroke: ${({theme:e})=>e.accent1};
`,Me=()=>(0,i.jsx)(d.n,{display:"flex",position:"absolute",children:(0,i.jsx)("svg",{height:"18px",width:"18px",children:(0,i.jsx)(Ge,{strokeWidth:"1.5",strokeLinecap:"round",style:{transform:"rotate(90deg)",transformOrigin:"50% 50%"},fill:"transparent",r:"8px",cx:"9px",cy:"9px"})})});var We=n(62293),Ve=n(58690),Ze=n(68113),qe=n(23173),Xe=n(43454),Ye=(n(49484),"_1kuawcb rgw6ezbf rgw6ezd9 rgw6ez8bh rgw6ez45r rgw6ez45l"),Ke="_1kuawc1 rgw6ez2dr rgw6ez2j9 rgw6ez2of rgw6ez27x rgw6ez4b9 rgw6ez3tf rgw6ez7zd rgw6ez1dr rgw6ez80x",Je="rgw6ez149 rgw6ez1b9 rgw6ez49l rgw6ez80p",Qe="rgw6ezd3 rgw6ezb9 rgw6eze3 rgw6ez8bh rgw6ez45l rgw6ez45r rgw6ez4bf",et="_1kuawc7",tt="rgw6ez3xr";const nt=(0,se.default)(Ue.UH).withConfig({displayName:"BagRow__RemoveButton",componentId:"sc-2ecf14d3-0"})`
  border-radius: 12px;
  font-size: 14px;
  line-height: 16px;
  margin-left: 16px;
  padding: 12px 14px;
`,it=(0,se.default)(Ue.UH).withConfig({displayName:"BagRow__ReviewButton",componentId:"sc-2ecf14d3-1"})`
  border-radius: 12px;
  flex: 1 1 auto;
  font-size: 14px;
  padding: 8px;
  width: 50%;
`,st=se.default.div.withConfig({displayName:"BagRow__RemoveAssetOverlay",componentId:"sc-2ecf14d3-2"})`
  position: absolute;
  display: block;
  right: -11px;
  top: -11px;
  z-index: 1;
  transition: 250ms;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`,rt=({onClick:e})=>(0,i.jsx)(st,{onClick:e,children:(0,i.jsx)(Ve.Xv,{})}),at=()=>(0,i.jsx)(d.n,{position:"relative",background:"loadingBackground",className:Je,children:(0,i.jsxs)(d.n,{position:"absolute",textAlign:"center",left:"1/2",top:"1/2",style:{transform:"translate3d(-50%, -50%, 0)"},color:"gray500",fontSize:"12",fontWeight:"book",children:["Image",(0,i.jsx)("br",{}),"not",(0,i.jsx)("br",{}),"available"]})}),ot=({asset:e,usdPrice:t,removeAsset:n,showRemove:s,grayscale:r,isMobile:a})=>{const{formatEther:o,formatNumberOrString:u}=(0,re.Gb)(),[p,g]=(0,O.useState)(!1),[m,h]=(0,O.useState)(!e.smallImageUrl),[x,f]=(0,O.useState)(!1),I=(0,O.useCallback)((()=>f(!0)),[]),C=(0,O.useCallback)((()=>f(!1)),[]),_=Boolean(s&&x&&!a),N=e.updatedPriceInfo?e.updatedPriceInfo.ETHPrice:e.priceInfo.ETHPrice,v=o({input:N,type:re.sw.NFTToken}),T=u({input:t?parseFloat((0,l.formatEther)(N))*t:t,type:re.sw.FiatNFTToken}),A=(0,O.useCallback)((t=>{t.preventDefault(),t.stopPropagation(),n([e])}),[e,n]);return(0,i.jsx)(Xe.rU,{to:(0,D.PZ)(e),style:{textDecoration:"none"},children:(0,i.jsxs)(c.X2,{className:Ke,onMouseEnter:I,onMouseLeave:C,children:[(0,i.jsxs)(d.n,{position:"relative",display:"flex",children:[s&&a&&(0,i.jsx)(rt,{onClick:A}),!m&&(0,i.jsx)(d.n,{as:"img",src:e.smallImageUrl,alt:e.name,className:(0,$e.default)(Je,r&&!x&&et),onLoad:()=>{g(!0)},onError:()=>{h(!0)},visibility:p?"visible":"hidden"}),!p&&(0,i.jsx)(d.n,{position:"absolute",className:`${Je} ${qe.L}`}),m&&(0,i.jsx)(at,{})]}),(0,i.jsxs)(c.sg,{overflow:"hidden",width:"full",color:r?"neutral2":"neutral1",children:[(0,i.jsxs)(c.X2,{overflow:"hidden",width:"full",whiteSpace:"nowrap",children:[(0,i.jsx)(d.n,{className:Ye,children:e.name??`#${e.tokenId}`}),e.susFlag&&(0,i.jsx)(We.yT,{})]}),(0,i.jsxs)(c.X2,{overflow:"hidden",whiteSpace:"nowrap",gap:"2",children:[(0,i.jsx)(d.n,{className:Qe,children:e.collectionName}),e.collectionIsVerified&&(0,i.jsx)(Ve.SA,{className:tt})]})]}),_&&(0,i.jsx)(nt,{onClick:A,emphasis:Ue.eI.medium,size:Ue.qE.medium,children:"Remove"}),(!_||a)&&(0,i.jsxs)(c.sg,{flexShrink:"0",alignItems:"flex-end",children:[(0,i.jsxs)(d.n,{className:"_1kuawc9 rgw6ez3sr rgw6ezbf rgw6ezd9 rgw6ez3xr",children:[v,"\xa0ETH"]}),(0,i.jsx)(d.n,{className:Qe,children:T})]})]})})},dt=({asset:e,usdPrice:t,markAssetAsReviewed:n,top:s,isMobile:r})=>{var a;const{formatEther:o}=(0,re.Gb)(),l=Fe.O$.from(null===(a=e.updatedPriceInfo)||void 0===a?void 0:a.ETHPrice).gt(Fe.O$.from(e.priceInfo.ETHPrice)),u=(0,O.useCallback)((t=>{t.preventDefault(),t.stopPropagation();n(e,!1)}),[e,n]),p=(0,O.useCallback)((t=>{t.preventDefault(),t.stopPropagation();n(e,!0)}),[e,n]);return(0,i.jsxs)(c.sg,{className:"rgw6ez2p3 rgw6ez28l rgw6ezlf rgw6ezqx rgw6ez4ux rgw6ez3t3 rgw6ez4b9 rgw6ez7zp rgw6ez895 rgw6ez59f rgw6ez5yr rgw6ez1dr rgw6ez7zd",borderTopColor:s?"surface3":"transparent",children:[(0,i.jsxs)(c.X2,{className:"rgw6ezd3 rgw6ezb9 rgw6eze3 rgw6ez4dr rgw6ez3sr",children:[l?(0,i.jsx)(Ve.PH,{}):(0,i.jsx)(Ve.HE,{}),(0,i.jsx)(d.n,{children:`Price ${l?"increased":"decreased"} from ${o({input:e.priceInfo.ETHPrice,type:re.sw.NFTToken})} ETH`})]}),(0,i.jsx)(d.n,{style:{marginLeft:"-8px",marginRight:"-8px"},children:(0,i.jsx)(ot,{asset:e,usdPrice:t,removeAsset:()=>{},isMobile:r})}),(0,i.jsxs)(c.X2,{gap:"8",justifyContent:"space-between",children:[(0,i.jsx)(it,{onClick:u,emphasis:Ue.eI.medium,size:Ue.qE.small,children:"Remove"}),(0,i.jsx)(it,{onClick:p,emphasis:Ue.eI.high,size:Ue.qE.small,children:"Keep"})]})]})},ct=({assets:e})=>(0,i.jsx)(c.sg,{display:"grid",style:{gridTemplateColumns:`repeat(${e.length}, 20px)`,width:32+20*(e.length-1)+"px"},children:e.map(((e,t)=>(0,i.jsx)(d.n,{as:"img",src:e.smallImageUrl,width:"32",height:"32",borderStyle:"solid",borderWidth:"1px",borderColor:"surface1",borderRadius:"4",style:{zIndex:t},className:et},`${e.address}-${e.tokenId}`)))}),lt=({assets:e,usdPrice:t,clearUnavailableAssets:n,didOpenUnavailableAssets:s,setDidOpenUnavailableAssets:r,isMobile:a})=>{const[o,d]=(0,O.useReducer)((e=>!e),!1),[l,u]=(0,O.useState)(8);if((0,O.useEffect)((()=>{if(!l)return void(s||(n(),r(!1)));const e=setInterval((()=>{u(l-1)}),1e3);return()=>clearInterval(e)}),[l,n,s,r]),!e||0===e.length)return null;const p=e.length>1,g=o||!p;return(0,i.jsx)(c.sg,{className:"rgw6ez2p3 rgw6ez28l rgw6ezlf rgw6ezqx rgw6ez4ux rgw6ez3tf rgw6ez4b9 rgw6ez7zp rgw6ez895 rgw6ez59f rgw6ez6df rgw6ez5yr rgw6ez1dr",children:(0,i.jsxs)(c.sg,{children:[(0,i.jsxs)(c.X2,{justifyContent:"space-between",marginBottom:g?"12":"0",cursor:p?"pointer":"default",onClick:()=>{p&&(!s&&r(!0),d())},children:[(0,i.jsxs)(c.X2,{gap:"12",color:"neutral2",className:Ze.Km,children:[!g&&(0,i.jsx)(ct,{assets:e.slice(0,5)}),"No longer available"]}),p&&(0,i.jsx)(c.X2,{color:"neutral2",children:o?(0,i.jsx)(Ve.X_,{}):(0,i.jsx)(Ve.Xs,{})}),!s&&(0,i.jsxs)(c.X2,{position:"relative",width:"20",height:"20",color:"neutral1",justifyContent:"center",cursor:"pointer",onClick:n,children:[(0,i.jsx)(Me,{}),(0,i.jsx)(Ve.Nb,{})]})]}),(0,i.jsx)(c.sg,{gap:"8",style:{marginLeft:"-8px",marginRight:"-8px"},children:g&&e.map((e=>(0,i.jsx)(ot,{asset:e,usdPrice:t,removeAsset:()=>{},grayscale:!0,isMobile:a},e.id)))})]})})},ut=()=>{const e=(0,Be.cP)((e=>e.bagStatus)),t=(0,Be.cP)((e=>e.setBagStatus)),n=(0,Be.cP)((e=>e.markAssetAsReviewed)),a=(0,Be.cP)((e=>e.didOpenUnavailableAssets)),o=(0,Be.cP)((e=>e.setDidOpenUnavailableAssets)),d=(0,Be.cP)((e=>e.itemsInBag)),l=(0,Be.cP)((e=>e.setItemsInBag)),u=(0,Be.cP)((e=>e.removeAssetsFromBag)),p=(0,De.dD)(),g=(0,O.useMemo)((()=>(0,D.G7)(d)),[d]),m=(0,Be.$N)(),{unchangedAssets:h,priceChangedAssets:x,unavailableAssets:f,availableItems:I}=(0,O.useMemo)((()=>({unchangedAssets:g.filter((e=>e.status===z.ZJ.ADDED_TO_BAG||e.status===z.ZJ.REVIEWED)).map((e=>e.asset)),priceChangedAssets:g.filter((e=>e.status===z.ZJ.REVIEWING_PRICE_CHANGE)).map((e=>e.asset)),unavailableAssets:g.filter((e=>e.status===z.ZJ.UNAVAILABLE)).map((e=>e.asset)),availableItems:g.filter((e=>e.status!==z.ZJ.UNAVAILABLE))})),[g]);return(0,O.useEffect)((()=>{const n=x.length>0,i=g.length>0;n&&(0,r._P)(s.Yz.NFT_BUY_BAG_CHANGED,{usd_value:m,bag_quantity:g,...(0,D.Hj)(x)}),e!==z.s.IN_REVIEW||n||t(i?z.s.CONFIRM_REVIEW:z.s.ADDING_TO_BAG),e!==z.s.CONFIRM_REVIEW||i||t(z.s.ADDING_TO_BAG)}),[e,g,x,t,m]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(c.sg,{display:x.length>0||f.length>0?"flex":"none",children:[f.length>0&&(0,i.jsx)(r.fM,{name:s.Yz.NFT_BUY_BAG_CHANGED,properties:{usd_value:m,bag_quantity:g.length,...(0,D.Hj)(f)},shouldLogImpression:!0,children:(0,i.jsx)(lt,{assets:f,usdPrice:m,clearUnavailableAssets:()=>l(I),didOpenUnavailableAssets:a,setDidOpenUnavailableAssets:o,isMobile:p})}),x.map(((e,t)=>(0,i.jsx)(dt,{asset:e,usdPrice:m,markAssetAsReviewed:n,top:0===t&&0===f.length,isMobile:p},e.id)))]}),(0,i.jsx)(c.sg,{children:h.slice(0).reverse().map((e=>(0,i.jsx)(ot,{asset:e,usdPrice:m,removeAsset:u,showRemove:!0,isMobile:p},e.id)))})]})};var pt=n(68588);const gt=(0,se.default)(ue.oD).withConfig({displayName:"BagHeader__ClearButton",componentId:"sc-6b7a6dca-0"})`
  color: ${({theme:e})=>e.neutral2};
  cursor: pointer;
  font-weight: 535;
  font-size: 14px;
  line-height: 16px;

  :active {
    text-decoration: none;
  }
`,mt=se.default.button.withConfig({displayName:"BagHeader__IconWrapper",componentId:"sc-6b7a6dca-1"})`
  align-items: center;
  background-color: transparent;
  border-radius: 8px;
  border: none;
  color: ${({theme:e})=>e.neutral1};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: auto;
  padding: 2px;
  opacity: 1;

  ${pt.cR}
`,ht=se.default.div.withConfig({displayName:"BagHeader__CounterDot",componentId:"sc-6b7a6dca-2"})`
  align-items: center;
  background-color: ${({theme:e})=>e.accent1};
  border-radius: 100px;
  font-weight: bold;
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  display: flex;
  font-size: 10px;
  justify-content: center;
  min-width: ${({sizing:e})=>e};
  min-height: ${({sizing:e})=>e};
  padding: 4px 6px;
`,xt=se.default.div.withConfig({displayName:"BagHeader__Wrapper",componentId:"sc-6b7a6dca-3"})`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  margin: 16px 28px;
  text-align: center;
`,ft=({numberOfAssets:e,closeBag:t,resetFlow:n,isProfilePage:s})=>{const r=(0,O.useMemo)((()=>(e=>17+6*e.toString().length+"px")(e)),[e]);return(0,i.jsxs)(xt,{children:[(0,i.jsx)(ue.Tv.HeadlineSmall,{children:s?(0,i.jsx)(o.cC,{children:"Sell"}):(0,i.jsx)(o.cC,{children:"Bag"})}),e>0&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(ht,{sizing:r,children:e}),(0,i.jsx)(gt,{onClick:n,children:(0,i.jsx)(o.cC,{children:"Clear all"})})]}),(0,i.jsx)(mt,{onClick:t,children:(0,i.jsx)(Ve.BW,{"data-testid":"nft-bag-close-icon"})})]})};var It=n(27389);const Ct=(0,se.default)(c.sg).withConfig({displayName:"EmptyContent__StyledColumn",componentId:"sc-3568c728-0"})`
  gap: 12px;
  margin-top: 68px;
`,_t=()=>{const e=(0,a.e5)();return(0,i.jsxs)(Ct,{children:[(0,i.jsx)(c.M5,{children:e?(0,i.jsx)(Ve.JP,{color:It.Z4.colors.neutral3}):(0,i.jsx)(Ve.Ln,{color:It.Z4.colors.neutral3,height:"96px",width:"96px",strokeWidth:"1px"})}),e?(0,i.jsx)(c.M5,{"data-testid":"nft-no-nfts-selected",className:Ze.v4,children:"No NFTs selected"}):(0,i.jsxs)(c.sg,{gap:"16",children:[(0,i.jsx)(c.M5,{"data-testid":"nft-empty-bag",className:Ze.v4,style:{lineHeight:"24px"},children:"Your bag is empty"}),(0,i.jsx)(c.M5,{fontSize:"12",fontWeight:"book",color:"neutral2",style:{lineHeight:"16px"},children:"Selected NFTs will appear here"})]})]})},Nt=({asset:e})=>{const t=(0,Be.Pc)((e=>e.removeSellAsset)),n=(0,De.dD)(),[s,r]=(0,O.useState)(!1),a=()=>r(!s),o=n=>{n.preventDefault(),n.stopPropagation(),t(e)};return(0,i.jsxs)(c.X2,{className:Ke,onMouseEnter:a,onMouseLeave:a,children:[(0,i.jsxs)(d.n,{position:"relative",display:"flex",children:[n&&(0,i.jsx)(rt,{onClick:o}),(0,i.jsx)("img",{src:e.smallImageUrl,alt:e.name,className:Je})]}),(0,i.jsxs)(c.sg,{overflow:"hidden",width:"full",color:"neutral1",children:[(0,i.jsx)(c.X2,{overflow:"hidden",width:"full",justifyContent:"space-between",whiteSpace:"nowrap",gap:"16",children:(0,i.jsx)(d.n,{className:Ye,children:e.name||`#${e.tokenId}`})}),(0,i.jsxs)(c.X2,{overflow:"hidden",whiteSpace:"nowrap",gap:"2",children:[(0,i.jsx)(d.n,{className:Qe,children:e.asset_contract.name}),e.collectionIsVerified&&(0,i.jsx)(Ve.SA,{className:tt})]})]}),s&&!n&&(0,i.jsx)(nt,{onClick:o,emphasis:Ue.eI.medium,size:Ue.qE.medium,children:"Remove"})]})},vt=()=>{const e=(0,Be.Pc)((e=>e.sellAssets));return(0,i.jsx)(c.sg,{children:e.length?e.map(((e,t)=>(0,i.jsx)(Nt,{asset:e},t))):null})},Tt=320,At=360,wt=se.default.div.withConfig({displayName:"Bag__BagContainer",componentId:"sc-f9dd5313-0"})`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 88px;
  right: 20px;
  width: ${Tt}px;
  height: calc(100vh - 108px);
  background: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 16px;
  box-shadow: ${({theme:e})=>e.deprecated_shallowShadow};
  z-index: ${({raiseZIndex:e,isProfilePage:t})=>e?t?ze.k.modalOverTooltip:ze.k.modalBackdrop-1:3};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    right: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    border-radius: 0px;
    border: none;
  }

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.xxxl}px`}) {
    width: ${At}px;
  }
`,bt=se.default.div.withConfig({displayName:"Bag__DetailsPageBackground",componentId:"sc-f9dd5313-1"})`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  top: 0px;
  width: 100%;
  height: 100%;
`,yt=se.default.div.withConfig({displayName:"Bag__ContinueButton",componentId:"sc-f9dd5313-2"})`
  background: ${({theme:e})=>e.accent1};
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  margin: 32px 28px 16px;
  padding: 10px 0px;
  border-radius: 12px;
  text-align: center;
  font-size: 16px;
  font-weight: 535;
  line-height: 20px;
  cursor: pointer;
  transition: ${({theme:e})=>e.transition.duration.medium};

  :hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,Et=({top:e,show:t})=>(0,i.jsx)(d.n,{marginX:"24",borderWidth:"1px",borderStyle:"solid",borderColor:"transparent",borderTopColor:e?"transparent":"surface3",borderBottomColor:e?"surface3":"transparent",opacity:t?"1":"0",transition:"250"}),jt=()=>{const{resetSellAssets:e,sellAssets:t}=(0,Be.Pc)((({reset:e,sellAssets:t})=>({resetSellAssets:e,sellAssets:t}))),{setProfilePageState:n}=(0,Be.aO)((({setProfilePageState:e})=>({setProfilePageState:e}))),{bagStatus:d,bagIsLocked:l,reset:u,bagExpanded:p,toggleBag:g,setBagExpanded:m}=(0,Be.cP)((e=>({...e,bagIsLocked:e.isLocked,uncheckedItemsInBag:e.itemsInBag}))),{uncheckedItemsInBag:h}=(0,Be.cP)((({itemsInBag:e})=>({uncheckedItemsInBag:e}))),x=(0,a.e5)(),f=(0,a._3)(),I=(0,a.GZ)(),C=(0,De.dD)(),_=(0,O.useMemo)((()=>(0,D.G7)(h)),[h]),[N,v]=(0,O.useState)(!1),{userCanScroll:T,scrollRef:A,scrollProgress:w,scrollHandler:b}=(0,Be.uh)(),y=(0,O.useCallback)((()=>{m({bagExpanded:!1,manualClose:!0})}),[m]);(0,O.useEffect)((()=>{l&&!N&&v(!0)}),[l,N]);const E=_.length>0,j=_.length>0,k=t.length>0,P=Boolean(!x&&!j&&d===z.s.ADDING_TO_BAG||x&&!k),R=(0,O.useMemo)((()=>({...(0,D.Hj)(_.map((e=>e.asset)))})),[_]);return p&&I?(0,i.jsxs)(Oe.h,{children:[(0,i.jsxs)(wt,{"data-testid":"nft-bag",raiseZIndex:C||N,isProfilePage:x,children:[(0,i.jsx)(ft,{numberOfAssets:x?t.length:_.length,closeBag:y,resetFlow:x?e:u,isProfilePage:x}),P&&(0,i.jsx)(_t,{}),(0,i.jsx)(Et,{top:!0,show:T&&w>0}),(0,i.jsx)(c.sg,{ref:A,className:"_1jcz50r1 rgw6ez2ef rgw6ez2jx rgw6ez1yr rgw6ez8ct",onScroll:b,gap:"12",children:x?(0,i.jsx)(vt,{}):(0,i.jsx)(ut,{})}),E&&!x&&(0,i.jsx)(Se,{setModalIsOpen:v,eventProperties:R}),k&&x&&(0,i.jsx)(yt,{onClick:()=>{g(),n(z.HA.LISTING),(0,r._P)(s.Yz.NFT_PROFILE_PAGE_START_SELL,{list_quantity:t.length,collection_addresses:t.map((e=>e.asset_contract.address)),token_ids:t.map((e=>e.tokenId))})},children:(0,i.jsx)(o.cC,{children:"Continue"})})]}),f?(0,i.jsx)(bt,{onClick:g}):N&&(0,i.jsx)(Le.a,{onClick:()=>l?void 0:v(!1)})]}):null}},62293:(e,t,n)=>{n.d(t,{Ie:()=>I,SD:()=>T,yT:()=>w});var i=n(92936),s=n(94284),r=n(86059),a=n(6823),o=n(42601),d=n(58690),c=n(7797),l=n(69947),u=n(57221),p=n(14411),g=n(54972),m=n(70854),h=n(66136);const x=p.default.div.withConfig({displayName:"icons__StyledMarketplaceContainer",componentId:"sc-8cdcee0d-0"})`
  position: absolute;
  display: flex;
  top: 12px;
  left: 12px;
  height: 32px;
  width: ${({isText:e})=>e?"auto":"32px"};
  padding: ${({isText:e})=>e?"0px 8px":"0px"};
  background: rgba(93, 103, 133, 0.24);
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  z-index: 2;
`,f=(0,p.default)(s.ZP).withConfig({displayName:"icons__ListPriceRowContainer",componentId:"sc-8cdcee0d-1"})`
  gap: 6px;
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  font-size: 14px;
  font-weight: 535;
  line-height: 16px;
  text-shadow: 1px 1px 3px rgba(51, 53, 72, 0.54);
`,I=({isSelected:e,marketplace:t,tokenType:n,listedPrice:s,hidePrice:r})=>e?t?(0,i.jsx)(x,{children:(0,i.jsx)(d.U1,{width:"20px",height:"20px",viewBox:"0 0 20 20"})}):(0,i.jsx)(x,{children:(0,i.jsx)(c.Z,{size:20})}):s&&!r?(0,i.jsx)(x,{isText:!0,children:(0,i.jsxs)(f,{children:[(0,i.jsx)(l.Z,{size:20}),s," ETH"]})}):t&&n!==m.hgB.Erc1155?(0,i.jsx)(x,{children:(0,o.Dp)(t)}):null,C=(0,p.default)(u.Z).withConfig({displayName:"icons__SuspiciousIcon",componentId:"sc-8cdcee0d-2"})`
  width: 16px;
  height: 16px;
  color: ${({theme:e})=>e.critical};
`,_=(0,p.default)(s.ZP).withConfig({displayName:"icons__RarityLogoContainer",componentId:"sc-8cdcee0d-3"})`
  margin-right: 8px;
  width: 16px;
`,N=(0,p.default)(g.Tv.BodySmall).withConfig({displayName:"icons__RarityText",componentId:"sc-8cdcee0d-4"})`
  display: flex;
`,v=(0,p.default)(g.Tv.BodySmall).withConfig({displayName:"icons__RarityInfo",componentId:"sc-8cdcee0d-5"})`
  flex-shrink: 0;
  color: ${({theme:e})=>e.neutral2};
  background: ${({theme:e})=>e.surface3};
  padding: 4px 6px;
  border-radius: 4px;
  font-weight: 535 !important;
  line-height: 12px;
  text-align: right;
  cursor: pointer;
`,T=({provider:e})=>{const{formatNumber:t}=(0,h.Gb)();return e.rank?(0,i.jsx)(v,{children:(0,i.jsxs)(r.ud,{text:(0,i.jsxs)(s.ZP,{children:[(0,i.jsx)(_,{children:(0,i.jsx)("img",{src:"/nft/svgs/gem.svg",width:16,height:16})}),(0,i.jsx)(N,{children:"Ranking by Rarity Sniper"})]}),placement:"top",children:["# ",t({input:e.rank,type:h.sw.WholeNumber})]})}):null},A=(0,p.default)(s.ZP).withConfig({displayName:"icons__SuspiciousIconContainer",componentId:"sc-8cdcee0d-6"})`
  flex-shrink: 0;
`,w=()=>(0,i.jsx)(r.ud,{text:(0,i.jsx)(g.Tv.BodySmall,{children:(0,i.jsx)(a.cC,{children:"Blocked on OpenSea"})}),placement:"top",children:(0,i.jsx)(A,{children:(0,i.jsx)(C,{})})})},53184:(e,t,n)=>{n.d(t,{Dp:()=>C,XN:()=>x,Yo:()=>I,cX:()=>A});var i=n(92936),s=n(94284),r=n(6823),a=n(42601),o=n(47263),d=n(45779),c=n(85297),l=n(52538),u=n(14411),p=n(66869),g=n(76623),m=n(54972);const h=u.default.div.withConfig({displayName:"media__StyledImageContainer",componentId:"sc-fe0adba3-0"})`
  position: relative;
  pointer-events: auto;
  &:hover {
    opacity: ${({isDisabled:e,theme:t})=>e?t.opacity.disabled:t.opacity.enabled};
  }
  cursor: ${({isDisabled:e})=>e?"default":"pointer"};
`,x=({isDisabled:e,children:t})=>(0,i.jsx)(h,{isDisabled:e,children:t}),f=(0,u.default)(s.ZP).withConfig({displayName:"media__StyledMediaContainer",componentId:"sc-fe0adba3-1"})`
  overflow: hidden;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`,I=u.default.img.withConfig({displayName:"media__StyledImage",componentId:"sc-fe0adba3-2"})`
  width: 100%;
  aspect-ratio: ${({$aspectRatio:e})=>e};
  transition: ${({theme:e})=>`${e.transition.duration.medium} ${e.transition.timing.ease} transform`};
  will-change: transform;
  object-fit: contain;
  visibility: ${({$hidden:e})=>e?"hidden":"visible"};
  background: ${({theme:e,imageLoading:t})=>t&&`linear-gradient(270deg, ${e.surface3} 0%, ${e.surface1} 100%)`};
`,C=({src:e,uniformAspectRatio:t=o.Yp.square,setUniformAspectRatio:n,renderedHeight:s,setRenderedHeight:r})=>{const[c,l]=(0,d.useState)(!e),[u,p]=(0,d.useState)(!1);return c?(0,i.jsx)(y,{height:(0,a.bn)(t,s)}):(0,i.jsx)(f,{children:(0,i.jsx)(I,{src:e,$aspectRatio:(0,a.Xm)(t,n),imageLoading:!u,draggable:!1,onError:()=>l(!0),onLoad:e=>{(0,a.lb)(t,e,n,s,r),p(!0)}})})},_=u.default.div.withConfig({displayName:"media__PlaybackButton",componentId:"sc-fe0adba3-3"})`
  display: ${({pauseButton:e})=>e?"block":"none"};
  color: ${({theme:e})=>e.accent1};
  position: absolute;
  height: 40px;
  width: 40px;
  z-index: 1;
  margin-left: calc(100% - 50px);
  transform: translateY(-76px);

  @media screen and (max-width: ${p.j$.sm}px) {
    display: block;
  }

  ${h}:hover & {
    display: block;
  }
`,N=u.default.video.withConfig({displayName:"media__StyledVideo",componentId:"sc-fe0adba3-4"})`
  width: 100%;
  aspect-ratio: ${({$aspectRatio:e})=>e};
`,v=(0,u.default)(s.ZP).withConfig({displayName:"media__StyledInnerMediaContainer",componentId:"sc-fe0adba3-5"})`
  position: absolute;
  left: 0px;
  top: 0px;
`,T=u.default.audio.withConfig({displayName:"media__StyledAudio",componentId:"sc-fe0adba3-6"})`
  width: 100%;
  height: 100%;
`,A=({isAudio:e,src:t,mediaSrc:n,tokenId:s,uniformAspectRatio:r=o.Yp.square,setUniformAspectRatio:u,renderedHeight:p,setRenderedHeight:g,shouldPlay:m,setCurrentTokenPlayingMedia:h})=>{const x=(0,d.useRef)(null),[C,A]=(0,d.useState)(!t),[w,b]=(0,d.useState)(!1);return(0,d.useEffect)((()=>{m&&x.current?x.current.play():!m&&x.current&&x.current.pause()}),[m]),C?(0,i.jsx)(y,{height:(0,a.bn)(r,p)}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f,{children:(0,i.jsx)(I,{src:t,$aspectRatio:(0,a.Xm)(r,u),imageLoading:!w,draggable:!1,onError:()=>A(!0),onLoad:e=>{(0,a.lb)(r,e,u,p,g),b(!0)},$hidden:m&&!e})}),m?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(_,{pauseButton:!0,children:(0,i.jsx)(c.Z,{size:"24px",onClick:e=>{e.preventDefault(),e.stopPropagation(),h(void 0)}})}),(0,i.jsx)(v,{children:e?(0,i.jsx)(T,{ref:x,onEnded:e=>{e.preventDefault(),h(void 0)},children:(0,i.jsx)("source",{src:n})}):(0,i.jsx)(N,{$aspectRatio:(0,a.Xm)(r,u),ref:x,onEnded:e=>{e.preventDefault(),h(void 0)},loop:!0,playsInline:!0,children:(0,i.jsx)("source",{src:n})})})]}):(0,i.jsx)(_,{children:(0,i.jsx)(l.Z,{size:"24px",onClick:e=>{e.preventDefault(),e.stopPropagation(),h(s)}})})]})},w=u.default.div.withConfig({displayName:"media__NoContentContainerBackground",componentId:"sc-fe0adba3-7"})`
  position: relative;
  width: 100%;
  height: ${({$height:e})=>e?`${e}px`:"auto"};
  padding-top: 100%;
  background: ${({theme:e})=>`linear-gradient(90deg, ${e.surface1} 0%, ${e.surface3} 95.83%)`};
`,b=(0,u.default)(m.Tv.BodyPrimary).withConfig({displayName:"media__NoContentText",componentId:"sc-fe0adba3-8"})`
  position: absolute;
  text-align: center;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  color: ${g.O9.gray500};
`,y=({height:e})=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(w,{$height:e,children:(0,i.jsxs)(b,{children:[(0,i.jsx)(r.cC,{children:"Content not"}),(0,i.jsx)("br",{}),(0,i.jsx)(r.cC,{children:"available yet"})]})})})},42601:(e,t,n)=>{n.d(t,{Dp:()=>h,VL:()=>p,Xm:()=>I,bn:()=>f,i2:()=>g,lb:()=>x,xY:()=>m});var i,s=n(92936),r=n(53184),a=n(58690),o=n(47263),d=n(78129),c=n(45779);function l(e){return e.imageUrl||e.smallImageUrl}function u(e){return e.animationUrl}function p(e){return"address"in e?`/nfts/asset/${e.address}/${e.tokenId}?origin=collection`:"asset_contract"in e?`/nfts/asset/${e.asset_contract.address}/${e.tokenId}?origin=profile`:"/nfts/profile"}function g(e,t,n,a,o,c,p){switch(function(e){let t=i.Image;return e.animationUrl&&((0,d.F0)(e.animationUrl)?t=i.Audio:(0,d.Wv)(e.animationUrl)&&(t=i.Video)),t}(e)){case i.Image:return(0,s.jsx)(r.Dp,{src:l(e),uniformAspectRatio:a,setUniformAspectRatio:o,renderedHeight:c,setRenderedHeight:p});case i.Video:return(0,s.jsx)(r.cX,{src:l(e),mediaSrc:u(e),tokenId:e.tokenId,shouldPlay:t,setCurrentTokenPlayingMedia:n,uniformAspectRatio:a,setUniformAspectRatio:o,renderedHeight:c,setRenderedHeight:p});case i.Audio:return(0,s.jsx)(r.cX,{isAudio:!0,src:l(e),mediaSrc:u(e),tokenId:e.tokenId,shouldPlay:t,setCurrentTokenPlayingMedia:n,uniformAspectRatio:a,setUniformAspectRatio:o,renderedHeight:c,setRenderedHeight:p})}}function m({selectAsset:e,unselectAsset:t,isSelected:n,isDisabled:i,onClick:s}){return(0,c.useCallback)((r=>{var a,o;if(r.stopPropagation(),r.preventDefault(),!i){if(!s)return n?null===(a=t)||void 0===a?void 0:a():null===(o=e)||void 0===o?void 0:o();s()}}),[e,i,s,t,n])}function h(e){switch(e){case o.Fz.Opensea:return(0,s.jsx)(a.fP,{});case o.Fz.LooksRare:return(0,s.jsx)(a.XM,{});case o.Fz.X2Y2:return(0,s.jsx)(a.Bl,{});case o.Fz.Sudoswap:return(0,s.jsx)(a.OD,{});case o.Fz.NFT20:return(0,s.jsx)(a.p8,{});case o.Fz.NFTX:return(0,s.jsx)(a.R2,{});case o.Fz.Cryptopunks:return(0,s.jsx)(a.f7,{});default:return null}}!function(e){e[e.Image=0]="Image",e[e.Video=1]="Video",e[e.Audio=2]="Audio"}(i||(i={}));const x=(e,t,n,i,s)=>{if(e!==o.Yp.square&&n){const r=t.currentTarget.clientHeight,a=t.currentTarget.clientWidth/r;(!i||i!==r)&&a<1&&e!==o.Yp.square&&s&&s(r);const d=.05;e===o.Yp.unset?n(a>=1?o.Yp.square:a):(a>e+d||a<e-d)&&(n(o.Yp.square),s&&s(void 0))}};function f(e,t){return e===o.Yp.square||e===o.Yp.unset?void 0:t}function I(e,t){return e!==o.Yp.square&&t?"auto":"1"}},70518:(e,t,n)=>{n.d(t,{a:()=>o,U:()=>a});var i=n(92936),s=n(15511),r=n(3805);n(57995);const a=e=>{e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()},o=({onClick:e=s.Z})=>(0,i.jsx)(r.n,{className:"_199qdl71 rgw6ez3f3 rgw6ez343 rgw6ez17l rgw6ez1ef rgw6ez48r rgw6ez44l rgw6ez4u3",onClick:e})},52384:(e,t,n)=>{n.d(t,{B:()=>p,P:()=>u});var i=n(11604),s=n(66284),r=n(39671),a=n(32682),o=n(89882),d=n(47263),c=n(45779),l=n(64538);function u(){const e=(0,l.c)((e=>e.itemsInBag));return(0,c.useMemo)((()=>e.reduce(((e,t)=>t.status!==d.ZJ.UNAVAILABLE?e.add(i.O$.from(t.asset.updatedPriceInfo?t.asset.updatedPriceInfo.ETHPrice:t.asset.priceInfo.ETHPrice)):e),i.O$.from(0))),[e])}function p(){const e=u(),t=(0,r.U8)("ETH"),n=(0,c.useMemo)((()=>(0,o.Z)((0,s.formatEther)(e.toString()),t??void 0)),[t,e]),i=(0,a.sq)(n);return(0,c.useMemo)((()=>{var e;return null===(e=i)||void 0===e?void 0:e.toExact()}),[i])}}}]);
//# sourceMappingURL=3464.8d71af0e.chunk.js.map