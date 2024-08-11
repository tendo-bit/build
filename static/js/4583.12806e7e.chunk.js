"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[4583],{34583:(e,n,i)=>{i.r(n),i.d(n,{default:()=>gn});var o=i(92936),t=i(76078),a=i(26729),r=i(5985),l=i(47583),d=i(98961),s=i(79833),c=i(55575),u=i(26431),h=i(67968),v=i(71805),p=i(64370),m=i(18569),x=i(39671),f=i(97341),y=i(76110),C=i(6823),j=i(52115),k=i(76437),g=i(45779),w=i(51578),b=i(6282),T=i(14411),I=i(38004),N=i(57852),B=i(13446),M=i(25160);function _(e,n,i,o){const t=(0,N.ht)(n)?(0,N.bt)({chainId:n}).assetRepoNetworkName??"ethereum":"ethereum",a=(0,B.UJ)(e);return n&&(0,p.NL)(n)&&e===(0,p.gX)(n).wrapped.address?M.Z:a?`https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/${t}/assets/${a}/logo.png`:o??void 0}var P=i(94284),S=i(35607),V=i(60847),$=i(95564),A=i(75748),E=i(70854),L=i(95625),F=i(39063);const D=20;var U=i(64505);const W=[V.Oz.Transactions];function Z({chainId:e,referenceToken:n}){const i=(0,U.Dv)(V.AY),a=(0,U.Dv)(V.$E),r=(0,g.useMemo)((()=>({sortBy:i,sortDirection:a?m.N9.Asc:m.N9.Desc})),[a,i]),{pools:l,loading:d,errorV2:s,errorV3:c,loadMore:u}=function(e,n,i){var o,a,r,l;const d=(0,F.ye)(L.FeatureFlags.V2Explore),{loading:s,error:c,data:u,fetchMore:h}=(0,E.p71)({variables:{first:D,tokenAddress:e,chain:(0,N.tq)({chainId:i,withFallback:!0})}}),{loading:v,error:p,data:m,fetchMore:x}=(0,E.wMB)({variables:{first:D,tokenAddress:e,chain:(0,N.tq)({chainId:i,withFallback:!0})},skip:!i||i!==t.ChainId.MAINNET&&!d}),f=s||v,y=(0,g.useRef)(!1),C=(0,g.useRef)(!1),j=(0,g.useRef)(D),k=(0,g.useCallback)((({onComplete:e})=>{var n,o,a,r,l,s,c,v;y.current||C.current&&(i===t.ChainId.MAINNET||d)||(y.current=!0,C.current=!0,j.current+=D,h({variables:{cursor:null===(r=u)||void 0===r||null===(a=r.topV3Pools)||void 0===a||null===(o=a[u.topV3Pools.length-1])||void 0===o||null===(n=o.totalLiquidity)||void 0===n?void 0:n.value},updateQuery:(n,{fetchMoreResult:o})=>{var a;if(!o||!n||!Object.keys(n).length)return n;C.current&&(i===t.ChainId.MAINNET||d)||null===(a=e)||void 0===a||a();const r={topV3Pools:[...(n.topV3Pools??[]).slice(),...(o.topV3Pools??[]).slice()]};return y.current=!1,r}}),(i===t.ChainId.MAINNET||d)&&x({variables:{cursor:null===(v=m)||void 0===v||null===(c=v.topV2Pairs)||void 0===c||null===(s=c[m.topV2Pairs.length-1])||void 0===s||null===(l=s.totalLiquidity)||void 0===l?void 0:l.value},updateQuery:(n,{fetchMoreResult:i})=>{var o;if(!i||!n||!Object.keys(n).length)return n;y.current||null===(o=e)||void 0===o||o();const t={topV2Pairs:[...(n.topV2Pairs??[]).slice(),...(i.topV2Pairs??[]).slice()]};return C.current=!1,t}}))}),[i,null===(o=m)||void 0===o?void 0:o.topV2Pairs,null===(a=u)||void 0===a?void 0:a.topV3Pools,x,h,d]);return(0,g.useMemo)((()=>{var e,i,o,t;const a=(null===(i=u)||void 0===i||null===(e=i.topV3Pools)||void 0===e?void 0:e.map((e=>{var n,i,o,t,a;return{hash:e.address,token0:e.token0,token1:e.token1,txCount:e.txCount,tvl:null===(n=e.totalLiquidity)||void 0===n?void 0:n.value,volume24h:null===(i=e.volume24h)||void 0===i?void 0:i.value,volumeWeek:null===(o=e.volumeWeek)||void 0===o?void 0:o.value,oneDayApr:(0,A.zl)(null===(t=e.volume24h)||void 0===t?void 0:t.value,null===(a=e.totalLiquidity)||void 0===a?void 0:a.value,e.feeTier),feeTier:e.feeTier,protocolVersion:e.protocolVersion}})))??[],r=(null===(t=m)||void 0===t||null===(o=t.topV2Pairs)||void 0===o?void 0:o.map((e=>{var n,i,o,t,a;return{hash:e.address,token0:e.token0,token1:e.token1,txCount:e.txCount,tvl:null===(n=e.totalLiquidity)||void 0===n?void 0:n.value,volume24h:null===(i=e.volume24h)||void 0===i?void 0:i.value,volumeWeek:null===(o=e.volumeWeek)||void 0===o?void 0:o.value,oneDayApr:(0,A.zl)(null===(t=e.volume24h)||void 0===t?void 0:t.value,null===(a=e.totalLiquidity)||void 0===a?void 0:a.value,A.y9),feeTier:A.y9,protocolVersion:e.protocolVersion}})))??[],l=(0,A.s$)([...a,...r],n).slice(0,j.current);return{loading:f,errorV2:p,errorV3:c,pools:l,loadMore:k}}),[null===(r=m)||void 0===r?void 0:r.topV2Pairs,null===(l=u)||void 0===l?void 0:l.topV3Pools,p,c,k,f,n])}(n.address,r,e),h=s&&c?new S.cA({errorMessage:`Could not retrieve V2 and V3 Pools for token ${n.address} on chain: ${e}`}):void 0,v=d&&!l.length;(0,$.cn)({chainId:e,errorV3:c,errorV2:s});const p=(0,U.oC)(V.AY),x=(0,U.oC)(V.$E);return(0,g.useEffect)((()=>{p(),x()}),[x,p]),(0,o.jsx)("div",{"data-testid":`tdp-pools-table-${n.address.toLowerCase()}`,children:(0,o.jsx)(V.NE,{pools:l,loading:v,error:h,chainId:e,maxHeight:600,hiddenColumns:W,loadMore:u})})}var O,R=i(54972),q=i(73705),z=i(66789),H=i(53083),G=i(57144),Q=i(23388);!function(e){e.BUY="Buy",e.SELL="Sell"}(O||(O={}));const Y=25;var X=i(63945),J=i(95685),K=i(66136),ee=i(54703);const ne=(0,T.default)(R.Tv.BodyPrimary).withConfig({displayName:"TransactionsTable__StyledSwapAmount",componentId:"sc-42ab2e91-0"})`
  display: inline-block;
  ${R.cw}
  max-width: 75px;
`,ie=T.default.div.withConfig({displayName:"TransactionsTable__TableWrapper",componentId:"sc-42ab2e91-1"})`
  min-height: 158px;
`;function oe({chainId:e,referenceToken:n}){const i=(0,J.XB)(),{formatNumber:a,formatFiatPrice:r}=(0,K.Gb)(),[l,d]=(0,g.useReducer)((e=>!e),!1),[s,c]=(0,g.useState)([O.BUY,O.SELL]),[u]=(0,g.useState)({sortBy:X.AI.Timestamp,sortDirection:X.N9.Desc}),{transactions:h,loading:v,loadMore:p,errorV2:x,errorV3:f}=function(e,n,i=[O.BUY,O.SELL]){var o,a,r,l,d,s,c,u;const h=(0,F.ye)(L.FeatureFlags.V2Explore),{data:v,loading:p,fetchMore:m,error:x}=(0,E.KfE)({variables:{address:e.toLowerCase(),chain:(0,N.tq)({chainId:n,withFallback:!0}),first:Y}}),{data:f,loading:y,error:C,fetchMore:j}=(0,E.t5Z)({variables:{address:e.toLowerCase(),first:Y,chain:(0,N.tq)({chainId:n})},skip:n!==t.ChainId.MAINNET&&!h}),k=(0,g.useRef)(!1),w=(0,g.useRef)(!1),b=(0,g.useRef)(Y),T=(0,g.useCallback)((({onComplete:e})=>{var i,o,a,r,l,d,s,c,u,p;k.current||w.current&&(n===t.ChainId.MAINNET||h)||(k.current=!0,w.current=!0,b.current+=Y,m({variables:{cursor:null===(l=v)||void 0===l||null===(r=l.token)||void 0===r||null===(a=r.v3Transactions)||void 0===a||null===(i=a[(null===(o=v.token)||void 0===o?void 0:o.v3Transactions.length)-1])||void 0===i?void 0:i.timestamp},updateQuery:(i,{fetchMoreResult:o})=>{var a,r,l,d,s,c,u;if(!o)return i;w.current&&(n===t.ChainId.MAINNET||h)||null===(a=e)||void 0===a||a();const v={token:{...i.token,id:(null===(l=i)||void 0===l||null===(r=l.token)||void 0===r?void 0:r.id)??"",chain:(null===(s=i)||void 0===s||null===(d=s.token)||void 0===d?void 0:d.chain)??E.qop.Ethereum,v3Transactions:[...(null===(c=i.token)||void 0===c?void 0:c.v3Transactions)??[],...(null===(u=o.token)||void 0===u?void 0:u.v3Transactions)??[]]}};return k.current=!1,v}}),(n===t.ChainId.MAINNET||h)&&j({variables:{cursor:null===(p=f)||void 0===p||null===(u=p.token)||void 0===u||null===(c=u.v2Transactions)||void 0===c||null===(d=c[(null===(s=f.token)||void 0===s?void 0:s.v2Transactions.length)-1])||void 0===d?void 0:d.timestamp},updateQuery:(n,{fetchMoreResult:i})=>{var o,t,a,r,l,d,s;if(!i)return n;k.current||null===(o=e)||void 0===o||o();const c={token:{...n.token,id:(null===(a=n)||void 0===a||null===(t=a.token)||void 0===t?void 0:t.id)??"",chain:(null===(l=n)||void 0===l||null===(r=l.token)||void 0===r?void 0:r.chain)??E.qop.Ethereum,v2Transactions:[...(null===(d=n.token)||void 0===d?void 0:d.v2Transactions)??[],...(null===(s=i.token)||void 0===s?void 0:s.v2Transactions)??[]]}};return w.current=!1,c}}))}),[n,null===(a=f)||void 0===a||null===(o=a.token)||void 0===o?void 0:o.v2Transactions,null===(l=v)||void 0===l||null===(r=l.token)||void 0===r?void 0:r.v3Transactions,j,m,h]),I=(0,g.useMemo)((()=>{var n,o,t,a,r,l;return[...(null===(t=v)||void 0===t||null===(o=t.token)||void 0===o||null===(n=o.v3Transactions)||void 0===n?void 0:n.filter((n=>{var o;if(!n)return!1;const t=(null===(o=(parseFloat(n.token0Quantity)<0?n.token0:n.token1).address)||void 0===o?void 0:o.toLowerCase())===e.toLowerCase();return n.type===E.uGm.Swap&&i.includes(t?O.SELL:O.BUY)})))??[],...(null===(l=f)||void 0===l||null===(r=l.token)||void 0===r||null===(a=r.v2Transactions)||void 0===a?void 0:a.filter((n=>{var o;if(!n)return!1;const t=(null===(o=(parseFloat(n.token0Quantity)<0?n.token0:n.token1).address)||void 0===o?void 0:o.toLowerCase())===e.toLowerCase();return n.type===E.uGm.Swap&&i.includes(t?O.SELL:O.BUY)})))??[]].sort(((e,n)=>{var i,o,t;return(null===(i=e)||void 0===i?void 0:i.timestamp)&&(null===(o=n)||void 0===o?void 0:o.timestamp)?n.timestamp-e.timestamp:null===(null===(t=e)||void 0===t?void 0:t.timestamp)?-1:1})).slice(0,b.current)}),[e,null===(s=f)||void 0===s||null===(d=s.token)||void 0===d?void 0:d.v2Transactions,null===(u=v)||void 0===u||null===(c=u.token)||void 0===c?void 0:c.v3Transactions,i]);return(0,g.useMemo)((()=>({transactions:I,loading:p||y,loadMore:T,errorV2:C,errorV3:x})),[I,p,y,T,C,x])}(n.address,e,s),y=x&&f?new S.cA({errorMessage:`Could not retrieve V2 and V3 Transactions for token: ${n.address} on chain: ${e}`}):void 0,j=v&&!h.length;(0,$.cn)({chainId:e,errorV3:f,errorV2:x});const k=(0,m.vR)(e,n),w=(0,g.useMemo)((()=>h.map((e=>{const n={address:e.token0.address,symbol:e.token0.symbol,amount:parseFloat(e.token0Quantity),token:e.token0},i={address:e.token1.address,symbol:e.token1.symbol,amount:parseFloat(e.token1Quantity),token:e.token1},o=parseFloat(e.token0Quantity)>0;return{hash:e.hash,timestamp:e.timestamp,input:o?n:i,output:o?i:n,usdValue:e.usdValue.value,makerAddress:e.account}}))),[h]),b=j||!!y,T=(0,g.useMemo)((()=>{const t=(0,q.Cl)();return[t.accessor((e=>e),{id:"timestamp",header:()=>(0,o.jsx)(H.b,{minWidth:120,justifyContent:"flex-start",grow:!0,children:(0,o.jsxs)(P.ZP,{gap:"xs",children:[u.sortBy===X.AI.Timestamp&&(0,o.jsx)(Q.iX,{direction:u.sortDirection}),(0,o.jsx)(Q.Hu,{$active:u.sortBy===X.AI.Timestamp,children:(0,o.jsx)(C.cC,{children:"Time"})})]})}),cell:n=>{var i,t,a,r;return(0,o.jsx)(H.b,{loading:b,minWidth:120,justifyContent:"flex-start",grow:!0,children:(0,o.jsx)(Q._q,{timestamp:Number(null===(i=(t=n).getValue)||void 0===i?void 0:i.call(t).timestamp),link:(0,ee.E)(e,null===(a=(r=n).getValue)||void 0===a?void 0:a.call(r).hash,ee.r.TRANSACTION)})})}}),t.accessor((e=>e.output.address),{id:"swap-type",header:()=>(0,o.jsx)(H.b,{minWidth:75,justifyContent:"flex-start",grow:!0,children:(0,o.jsxs)(Q.j4,{modalOpen:l,onClick:d,children:[(0,o.jsx)(G.w,{allFilters:Object.values(O),activeFilter:s,setFilters:c,isOpen:l,toggleFilterModal:d}),(0,o.jsx)(R.Tv.BodySecondary,{children:(0,o.jsx)(C.cC,{children:"Type"})})]})}),cell:e=>{var i,t;const a=String(null===(i=(t=e).getValue)||void 0===i?void 0:i.call(t)).toLowerCase()===n.address.toLowerCase();return(0,o.jsx)(H.b,{loading:b,minWidth:75,justifyContent:"flex-start",grow:!0,children:(0,o.jsx)(R.Tv.BodyPrimary,{color:a?"success":"critical",children:a?(0,o.jsx)(C.cC,{children:"Buy"}):(0,o.jsx)(C.cC,{children:"Sell"})})})}}),t.accessor((e=>{var i;return(null===(i=e.input.address)||void 0===i?void 0:i.toLowerCase())===n.address.toLowerCase()?e.input.amount:e.output.amount}),{id:"reference-amount",header:()=>(0,o.jsx)(H.b,{minWidth:100,justifyContent:"flex-end",children:(0,o.jsxs)(R.Tv.BodySecondary,{children:["$",k.symbol]})}),cell:e=>{var n,i;return(0,o.jsx)(H.b,{loading:b,minWidth:100,justifyContent:"flex-end",children:(0,o.jsx)(R.Tv.BodyPrimary,{children:a({input:Math.abs(null===(n=(i=e).getValue)||void 0===n?void 0:n.call(i))||0})})})}}),t.accessor((e=>{var i;const t=(null===(i=e.input.address)||void 0===i?void 0:i.toLowerCase())===n.address.toLowerCase()?e.output:e.input;return(0,o.jsxs)(P.ZP,{gap:"8px",justify:"flex-end",children:[(0,o.jsx)(ne,{children:a({input:Math.abs(t.amount)||0})}),(0,o.jsx)(Q.Jn,{token:t.token})]})}),{id:"non-reference-amount",header:()=>(0,o.jsx)(H.b,{minWidth:160,justifyContent:"flex-end",children:(0,o.jsx)(R.Tv.BodySecondary,{children:(0,o.jsx)(C.cC,{children:"For"})})}),cell:e=>{var n,i;return(0,o.jsx)(H.b,{loading:b,minWidth:160,justifyContent:"flex-end",children:null===(n=(i=e).getValue)||void 0===n?void 0:n.call(i)})}}),t.accessor((e=>e.usdValue),{id:"fiat-value",header:()=>(0,o.jsx)(H.b,{minWidth:125,justifyContent:"flex-end",children:(0,o.jsxs)(P.ZP,{gap:"xs",justify:"flex-end",children:[u.sortBy===X.AI.AmountUsd&&(0,o.jsx)(Q.iX,{direction:u.sortDirection}),(0,o.jsx)(Q.Hu,{$active:u.sortBy===X.AI.AmountUsd,children:i})]})}),cell:e=>{var n,i;return(0,o.jsx)(H.b,{loading:b,minWidth:125,justifyContent:"flex-end",children:(0,o.jsx)(R.Tv.BodyPrimary,{children:r({price:null===(n=(i=e).getValue)||void 0===n?void 0:n.call(i)})})})}}),t.accessor((e=>e.makerAddress),{id:"maker-address",header:()=>(0,o.jsx)(H.b,{minWidth:150,justifyContent:"flex-end",children:(0,o.jsx)(R.Tv.BodySecondary,{children:(0,o.jsx)(C.cC,{children:"Wallet"})})}),cell:n=>{var i,t,a,r;return(0,o.jsx)(H.b,{loading:b,minWidth:150,justifyContent:"flex-end",children:(0,o.jsx)(Q.Bq,{href:(0,ee.E)(e,null===(i=(t=n).getValue)||void 0===i?void 0:i.call(t),ee.r.ADDRESS),children:(0,B.Xn)(null===(a=(r=n).getValue)||void 0===a?void 0:a.call(r))})})}})]}),[u.sortBy,u.sortDirection,b,e,l,s,n.address,k.symbol,a,i,r]);return(0,o.jsx)(ie,{children:(0,o.jsx)(z.i,{columns:T,data:w,loading:j,error:y,loadMore:p,maxHeight:600})})}const te=T.default.div.withConfig({displayName:"ActivitySection__Container",componentId:"sc-7afc6c41-0"})`
  width: 100%;
  display: flex;
  flex-direction: column;
`,ae=(0,T.default)(R.Tv.HeadlineMedium).withConfig({displayName:"ActivitySection__Tab",componentId:"sc-7afc6c41-1"})`
  cursor: pointer;
  color: ${({isActive:e,theme:n})=>e?n.neutral1:n.neutral2};
  ${R.iV};
`;var re;function le(){const{wrapped:e,chainId:n}=(0,k.U)().currency,[i,t]=(0,g.useState)(re.Txs);return e?(0,o.jsxs)(te,{"data-testid":"token-details-activity-section",children:[(0,o.jsxs)(P.ZP,{gap:"24px",marginBottom:"24px",id:"activity-header",children:[(0,o.jsx)(ae,{isActive:i===re.Txs,onClick:()=>t(re.Txs),children:(0,o.jsx)(C.cC,{children:"Transactions"})}),(0,o.jsx)(ae,{isActive:i===re.Pools,onClick:()=>t(re.Pools),children:(0,o.jsx)(C.cC,{children:"Pools"})})]}),i===re.Txs&&(0,o.jsx)(oe,{chainId:n,referenceToken:e}),i===re.Pools&&(0,o.jsx)(Z,{chainId:n,referenceToken:e})]}):null}!function(e){e[e.Txs=0]="Txs",e[e.Pools=1]="Pools"}(re||(re={}));var de=i(47236);const se=T.default.div.withConfig({displayName:"BalanceSummary__BalancesCard",componentId:"sc-54204908-0"})`
  color: ${({theme:e})=>e.neutral1};
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: fit-content;
  width: 100%;

  // 768 hardcoded to match NFT-redesign navbar breakpoints
  // src/nft/css/sprinkles.css.ts
  // change to match theme breakpoints when this navbar is updated
  @media screen and (min-width: 768px) {
    display: flex;
  }
`,ce=T.default.div.withConfig({displayName:"BalanceSummary__BalanceSection",componentId:"sc-54204908-1"})`
  height: fit-content;
  width: 100%;
`,ue=T.default.div.withConfig({displayName:"BalanceSummary__BalanceRow",componentId:"sc-54204908-2"})`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-top: 12px;
`,he=T.default.div.withConfig({displayName:"BalanceSummary__BalanceItem",componentId:"sc-54204908-3"})`
  display: flex;
  align-items: center;
`,ve=T.default.div.withConfig({displayName:"BalanceSummary__BalanceAmountsContainer",componentId:"sc-54204908-4"})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-left: 12px;
`,pe=({currency:e,chainId:n=t.ChainId.MAINNET,gqlBalance:i,onClick:a})=>{var r,l,d,s,c;const{formatNumber:u}=(0,K.Gb)(),h=(0,g.useMemo)((()=>[e]),[e]),v=u({input:null===(r=i)||void 0===r?void 0:r.quantity,type:K.sw.TokenNonTx}),p=u({input:null===(d=i)||void 0===d||null===(l=d.denominatedValue)||void 0===l?void 0:l.value,type:K.sw.PortfolioBalance});return(0,o.jsxs)(ue,{onClick:a,children:[(0,o.jsx)(de.V,{currencies:h,chainId:n,images:[null===(c=i)||void 0===c||null===(s=c.tokenProjectMarket)||void 0===s?void 0:s.tokenProject.logoUrl],size:32}),(0,o.jsxs)(ve,{children:[(0,o.jsx)(he,{children:(0,o.jsx)(R.Tv.BodyPrimary,{children:p})}),(0,o.jsx)(he,{children:(0,o.jsx)(R.Tv.BodySecondary,{children:v})})]})]})},me=({pageChainBalance:e})=>{var n;if(!e||!e.token)return null;const i=(0,m.Pc)(e.token);return(0,o.jsxs)(ce,{children:[(0,o.jsx)(R.Tv.HeadlineSmall,{color:"neutral1",children:(0,o.jsx)(C.cC,{children:"Your balance"})}),(0,o.jsx)(pe,{currency:i,chainId:null===(n=i)||void 0===n?void 0:n.chainId,gqlBalance:e})]})},xe=({otherChainBalances:e,hasPageChainBalance:n})=>{const i=(0,b.s0)();return e.length?(0,o.jsxs)(ce,{children:[n?(0,o.jsx)(R.Tv.SubHeaderSmall,{children:(0,o.jsx)(C.cC,{children:"On other networks"})}):(0,o.jsx)(R.Tv.HeadlineSmall,{children:(0,o.jsx)(C.cC,{children:"Balance on other networks"})}),e.map((e=>{const n=e.token&&(0,m.Pc)(e.token),a=(e.token&&(0,m.Tz)(e.token.chain))??t.ChainId.MAINNET;return(0,o.jsx)(pe,{currency:n,chainId:a,gqlBalance:e,onClick:()=>{var n,o;return i((0,m.dG)({address:null===(n=e.token)||void 0===n?void 0:n.address,chain:(null===(o=e.token)||void 0===o?void 0:o.chain)??E.qop.Ethereum}))}},e.id)}))]}):null};function fe(){var e;const{account:n}=(0,a.G)(),{currencyChain:i,multiChainMap:t}=(0,k.U)(),r=null===(e=t[i])||void 0===e?void 0:e.balance,l=[];for(const[o,a]of Object.entries(t)){var d;o!==i&&void 0!==(null===(d=a)||void 0===d?void 0:d.balance)&&l.push(a.balance)}const s=r||Boolean(l.length);return n&&s?(0,o.jsxs)(se,{children:[(0,o.jsx)(me,{pageChainBalance:r}),(0,o.jsx)(xe,{otherChainBalances:l,hasPageChainBalance:!!r})]}):null}var ye=i(62587);const Ce=T.default.div.withConfig({displayName:"MobileBalanceSummaryFooter__Wrapper",componentId:"sc-fcfa31a9-0"})`
  align-content: center;
  align-items: center;
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  color: ${({theme:e})=>e.neutral2};
  display: none;
  flex-direction: row;
  font-weight: 535;
  font-size: 14px;
  height: fit-content;
  justify-content: space-between;
  left: 0;
  line-height: 20px;
  position: fixed;
  z-index: ${ye.k.sticky};
  border-radius: 20px;
  bottom: 56px;
  margin: 8px;
  padding: 12px 32px;
  width: calc(100vw - 16px);

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    bottom: 0px;
  }
  @media screen and (max-width: ${({theme:e})=>e.breakpoint.lg}px) {
    display: flex;
  }
`,je=T.default.div.withConfig({displayName:"MobileBalanceSummaryFooter__BalanceValue",componentId:"sc-fcfa31a9-1"})`
  color: ${({theme:e})=>e.neutral1};
  font-size: 20px;
  line-height: 20px;
  display: flex;
  gap: 8px;
`,ke=T.default.div.withConfig({displayName:"MobileBalanceSummaryFooter__Balance",componentId:"sc-fcfa31a9-2"})`
  align-items: flex-end;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`,ge=T.default.div.withConfig({displayName:"MobileBalanceSummaryFooter__BalanceInfo",componentId:"sc-fcfa31a9-3"})`
  display: flex;
  flex: 10 1 auto;
  flex-direction: column;
  justify-content: flex-start;
  gap: 6px;
`,we=(0,T.default)(R.Tv.Caption).withConfig({displayName:"MobileBalanceSummaryFooter__FiatValue",componentId:"sc-fcfa31a9-4"})`
  font-size: 12px;
  line-height: 16px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    line-height: 24px;
  }
`,be=(0,T.default)(R.m_).withConfig({displayName:"MobileBalanceSummaryFooter__SwapButton",componentId:"sc-fcfa31a9-5"})`
  background-color: ${({theme:e})=>e.accent1};
  border: none;
  border-radius: 22px;
  color: ${({theme:e})=>e.neutralContrast};
  display: flex;
  flex: 1 1 auto;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 535;
  height: 44px;
  justify-content: center;
  margin: auto;
  max-width: 100vw;
`;function Te(){var e,n,i,t;const{currency:r,multiChainMap:l,currencyChain:d}=(0,k.U)(),s=(0,N.Jw)(r.chainId),c=null===(e=l[d])||void 0===e?void 0:e.balance,{account:u}=(0,a.G)(),{formatNumber:h}=(0,K.Gb)(),v=h({input:null===(n=c)||void 0===n?void 0:n.quantity,type:K.sw.TokenNonTx}),m=h({input:null===(t=c)||void 0===t||null===(i=t.denominatedValue)||void 0===i?void 0:i.value,type:K.sw.PortfolioBalance}),x=(0,N.tq)({chainId:s})??"";return(0,o.jsxs)(Ce,{children:[Boolean(u&&c)&&(0,o.jsxs)(ge,{children:[(0,o.jsx)(C.cC,{children:"Your balance"}),(0,o.jsxs)(ke,{children:[(0,o.jsxs)(je,{children:[v," ",r.symbol]}),(0,o.jsx)(we,{children:m})]})]}),(0,o.jsx)(be,{to:`/swap?chain=${x}&outputCurrency=${r.isNative?p.dt:r.address}`,children:(0,o.jsx)(C.cC,{children:"Swap"})})]})}var Ie=i(44591),Ne=i(18124),Be=i(88890),Me=i(68291),_e=i(6239),Pe=i(41886),Se=i(86059),Ve=i(50333),$e=i(18034),Ae=i(94191);const Ee=(0,T.default)(Ie.ZP).withConfig({displayName:"TokenDescription__TokenInfoSection",componentId:"sc-7ae57a64-0"})`
  gap: 16px;
  width: 100%;

  @media screen and (max-width: ${({theme:e})=>e.breakpoint.lg}px) {
    gap: 24px;
  }
`,Le=(0,T.default)(R.Tv.HeadlineSmall).withConfig({displayName:"TokenDescription__InfoSectionHeader",componentId:"sc-7ae57a64-1"})`
  @media screen and (max-width: ${({theme:e})=>e.breakpoint.lg}px) {
    font-size: 28px !important;
    line-height: 36px !important;
  }
`,Fe=(0,T.default)(P.ZP).withConfig({displayName:"TokenDescription__TokenNameRow",componentId:"sc-7ae57a64-2"})`
  gap: 8px;
  width: 100%;
`,De=(0,T.default)(Fe).withConfig({displayName:"TokenDescription__TokenButtonRow",componentId:"sc-7ae57a64-3"})`
  flex-wrap: wrap;
`,Ue=(0,T.default)(P.ZP).withConfig({displayName:"TokenDescription__TokenInfoButton",componentId:"sc-7ae57a64-4"})`
  gap: 8px;
  padding: 8px 12px;
  border-radius: 20px;
  color: ${({theme:e})=>e.neutral1};
  background-color: ${({theme:e})=>e.surface2};
  font-size: 14px;
  font-weight: 535;
  line-height: 16px;
  width: max-content;
  ${R.iV}
`,We=(0,T.default)(R.Tv.BodyPrimary).withConfig({displayName:"TokenDescription__TokenDescriptionContainer",componentId:"sc-7ae57a64-5"})`
  ${R.cw}
  max-width: 100%;
  // max-height: fit-content;
  line-height: 24px;
  white-space: pre-wrap;
`,Ze=T.default.p.withConfig({displayName:"TokenDescription__DescriptionVisibilityWrapper",componentId:"sc-7ae57a64-6"})`
  display: ${({$visible:e})=>e?"inline":"none"};
`,Oe=200;function Re(){var e,n;const{address:i,currency:a,tokenQuery:r}=(0,k.U)(),{neutral2:l}=(0,T.useTheme)(),{description:d,homepageUrl:s,twitterName:c}=(null===(n=r.data)||void 0===n||null===(e=n.token)||void 0===e?void 0:e.project)??{},u=(0,ee.E)(a.chainId,i,a.isNative?ee.r.NATIVE:ee.r.TOKEN),[h,v]=(0,Ve.Z)(),p=(0,g.useCallback)((()=>{v(i)}),[i,v]),[m,x]=(0,g.useReducer)((e=>!e),!0),f=(0,Pe.Nt)(d??"",Oe),y=!!d&&d.length>Oe,j=y&&m,{inputTax:w,outputTax:b}=(0,$e.j)(i,i),{formatPercent:I}=(0,K.Gb)(),{sellFeeString:N,buyFeeString:M}={sellFeeString:I(w),buyFeeString:I(b)},_=Boolean(parseFloat(N))||Boolean(parseFloat(b.toFixed(2))),P=N===M;return(0,o.jsxs)(Ee,{"data-testid":"token-details-info-section",children:[(0,o.jsx)(Le,{children:(0,o.jsx)(C.cC,{children:"Info"})}),(0,o.jsxs)(De,{"data-testid":"token-details-info-links",children:[!a.isNative&&(0,o.jsx)(Se.ZP,{placement:"bottom",size:Se.Oz.Max,show:h,text:C.t`Copied`,children:(0,o.jsxs)(Ue,{onClick:p,children:[(0,o.jsx)(Ae.Z,{width:"18px",height:"18px",color:l}),(0,B.Xn)(a.address)]})}),(0,o.jsx)(R.dL,{href:u,children:(0,o.jsxs)(Ue,{children:[(0,o.jsx)(Ne.P,{width:"18px",height:"18px",fill:l}),a.chainId===t.ChainId.MAINNET?(0,o.jsx)(C.cC,{children:"Etherscan"}):(0,o.jsx)(C.cC,{children:"Explorer"})]})}),s&&(0,o.jsx)(R.dL,{href:s,children:(0,o.jsxs)(Ue,{children:[(0,o.jsx)(Be.T,{width:"18px",height:"18px",fill:l}),(0,o.jsx)(C.cC,{children:"Website"})]})}),c&&(0,o.jsx)(R.dL,{href:`https://x.com/${c}`,children:(0,o.jsxs)(Ue,{children:[(0,o.jsx)(Me.E,{width:"18px",height:"18px",fill:l}),(0,o.jsx)(C.cC,{children:"Twitter"})]})})]}),(0,o.jsxs)(We,{children:[!d&&(0,o.jsx)(Pe.aZ,{children:(0,o.jsx)(C.cC,{children:"No token information available"})}),d&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(Ze,{"data-testid":"token-description-full",$visible:!j,children:d}),(0,o.jsx)(Ze,{"data-testid":"token-description-truncated",$visible:j,children:f})]}),y&&(0,o.jsx)(Pe.ou,{onClick:x,"data-testid":"token-description-show-more-button",children:m?(0,o.jsx)(C.cC,{children:"Show more"}):(0,o.jsx)(C.cC,{children:"Hide"})})]}),_&&(0,o.jsx)(Se.ud,{placement:"left",size:Se.Oz.Small,text:(0,o.jsx)(R.Tv.Caption,{color:"neutral2",children:(0,o.jsx)(_e.gE,{})}),children:(0,o.jsx)(Ie.ZP,{gap:"sm",children:P?(0,o.jsxs)(R.Tv.BodyPrimary,{children:[a.symbol,"\xa0",(0,o.jsx)(C.cC,{children:"fee:"}),"\xa0",N]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(R.Tv.BodyPrimary,{children:[a.symbol,"\xa0",(0,o.jsx)(C.cC,{children:"buy fee:"}),"\xa0",M]})," ",(0,o.jsxs)(R.Tv.BodyPrimary,{children:[a.symbol,"\xa0",(0,o.jsx)(C.cC,{children:"sell fee:"}),"\xa0",N]})," "]})})})]})}var qe=i(75495);const ze=(0,T.default)(Pe.Hr).withConfig({displayName:"TokenDetails__DividerLine",componentId:"sc-a751adda-0"})`
  margin-top: 40px;
  margin-bottom: 40px;
  @media screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    opacity: 0;
    margin-bottom: 0;
  }
`;function He(){const{address:e,currency:n,currencyChain:i}=(0,k.U)();return(0,o.jsxs)(d.zG,{"aria-label":"breadcrumb-nav",children:[(0,o.jsxs)(d.yY,{to:`/explore/${i.toLowerCase()}`,children:[(0,o.jsx)(C.cC,{children:"Explore"})," ",(0,o.jsx)(w.Z,{size:14})]}),(0,o.jsxs)(d.yY,{to:`/explore/tokens/${i.toLowerCase()}`,children:[(0,o.jsx)(C.cC,{children:"Tokens"})," ",(0,o.jsx)(w.Z,{size:14})]}),(0,o.jsx)(d.f3,{address:e,currency:n})]})}function Ge(e){return e?e.isToken?e.address:p.dt:""}function Qe(){var e;const{address:n,currency:i,currencyChain:r,warning:l}=(0,k.U)(),d=(0,a.G)().chainId??t.ChainId.MAINNET,u=(0,b.s0)(),h=(0,g.useCallback)((e=>{const i=Ge(e.inputCurrency),o=Ge(e.outputCurrency);if((0,I.K)(i,n)||(0,I.K)(o,n))return;const t=e.outputCurrency??e.inputCurrency;if(!t)return;const a=_(t.wrapped.address,t.chainId,t.isNative),l=(0,m.dG)({address:t.isNative?null:t.address,chain:r,inputAddress:e.inputCurrency&&e.inputCurrency!==t?i:null});u(l,{state:{preloadedLogoSrc:a}})}),[n,r,u]),v=function(){const{currency:e}=(0,k.U)(),n=(0,y.Z)(),i=(0,g.useMemo)((()=>"string"===typeof n.inputCurrency?n.inputCurrency:void 0),[n]);return(0,x.U8)(i,e.chainId)}(),[p,f]=(0,g.useState)(!1),[C,w]=(0,g.useState)(),T=(0,g.useCallback)((e=>{var n;null===(n=C)||void 0===n||n.resolve(e),w(void 0)}),[C,w]),N=!1===(null===(e=l)||void 0===e?void 0:e.canProceed);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{style:{pointerEvents:N?"none":"auto"},onClick:()=>N&&f(!0),children:(0,o.jsx)(j.HY,{syncTabToUrl:!1,chainId:i.chainId,initialInputCurrency:v,initialOutputCurrency:i,onCurrencyChange:h,disableTokenInputs:i.chainId!==d,compact:!0})}),l&&(0,o.jsx)(s.Z,{tokenAddress:n,warning:l}),(0,o.jsx)(c.Z,{isOpen:p||!!C,token0:i.isToken?i:void 0,onContinue:()=>T(!0),onBlocked:()=>{f(!1)},onCancel:()=>T(!1),showCancel:!0})]})}function Ye({children:e}){const{address:n,currency:i}=(0,k.U)();return(0,o.jsx)(l.fM,{page:r.yJ.TOKEN_DETAILS_PAGE,properties:{tokenAddress:n,tokenSymbol:i.symbol,tokenName:i.name,chainId:i.chainId},shouldLogImpression:!0,children:e})}function Xe(){var e;const{address:n,currency:i,tokenQuery:t}=(0,k.U)(),a=null===(e=t.data)||void 0===e?void 0:e.token,{lg:r}=(0,f.eI)();return(0,o.jsx)(Ye,{children:(0,o.jsxs)(h.Gy,{children:[(0,o.jsxs)(h.WQ,{children:[(0,o.jsx)(He,{}),(0,o.jsx)(h.Pn,{"data-testid":"token-info-container",children:(0,o.jsx)(qe.F,{})}),(0,o.jsx)(u.ZP,{}),(0,o.jsx)(v.ZP,{chainId:i.chainId,address:n,tokenQueryData:a}),(0,o.jsx)(ze,{}),(0,o.jsx)(le,{})]}),(0,o.jsxs)(h.QN,{children:[r&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(Qe,{}),(0,o.jsx)(fe,{})]}),(0,o.jsx)(Re,{})]}),(0,o.jsx)(Te,{})]})})}var Je,Ke=i(69780),en=i(78857),nn=i(72993);function on(){return on=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},on.apply(this,arguments)}function tn(e,n){let{title:i,titleId:o,...t}=e;return g.createElement("svg",on({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",ref:n,"aria-labelledby":o},t),i?g.createElement("title",{id:o},i):null,Je||(Je=g.createElement("path",{d:"M14.75 12C14.75 13.517 13.517 14.75 12 14.75C10.483 14.75 9.25004 13.517 9.25004 12C9.25004 11.651 9.32196 11.32 9.44096 11.012C9.63496 11.166 9.86903 11.272 10.136 11.272C10.763 11.272 11.272 10.763 11.272 10.136C11.272 9.86899 11.166 9.63492 11.012 9.44092C11.32 9.32192 11.651 9.25 12 9.25C13.517 9.25 14.75 10.483 14.75 12ZM20.5921 13.4771C19.3651 15.5311 16.609 19 12 19C7.39104 19 4.635 15.5311 3.408 13.4771C2.864 12.5671 2.864 11.4329 3.408 10.5229C4.635 8.46895 7.39104 5 12 5C16.609 5 19.3651 8.46895 20.5921 10.5229C21.1361 11.4329 21.1361 12.5671 20.5921 13.4771ZM16.25 12C16.25 9.657 14.344 7.75 12 7.75C9.65604 7.75 7.75004 9.657 7.75004 12C7.75004 14.343 9.65604 16.25 12 16.25C14.344 16.25 16.25 14.343 16.25 12Z",fill:"currentColor"})))}const an=g.forwardRef(tn),rn=(i.p,T.default.div.withConfig({displayName:"InvalidTokenDetails__InvalidDetailsContainer",componentId:"sc-2d96f332-0"})`
  padding-top: 128px;
  display: flex;
  flex-direction: column;
  align-items: center;
`),ln=T.default.span.withConfig({displayName:"InvalidTokenDetails__InvalidDetailsText",componentId:"sc-2d96f332-1"})`
  margin-top: 28px;
  margin-bottom: 20px;

  text-align: center;

  color: ${({theme:e})=>e.neutral2};
  font-size: 20px;
  font-weight: 535;
  line-height: 28px;
`,dn=(0,T.default)(Ke.DF).withConfig({displayName:"InvalidTokenDetails__TokenExploreButton",componentId:"sc-2d96f332-2"})`
  width: fit-content;
  padding: 12px 16px;
  border-radius: 12px;

  color: ${({theme:e})=>e.neutral1};
  font-size: 16px;
  font-weight: 535;
`;function sn({pageChainId:e,isInvalidAddress:n}){const i=(0,nn.x)(),t=(0,N.Nb)(i),a=(0,N.Nb)(e),r=(0,b.s0)(),l=(0,en.Z)(),d=!n&&e===i,s=t?N.T_[i].label:void 0;return(0,o.jsxs)(rn,{children:[(0,o.jsx)(an,{}),n||d?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(ln,{children:(0,o.jsx)(C.cC,{children:"This token doesn't exist"})}),(0,o.jsx)(dn,{onClick:()=>r("/tokens"),children:(0,o.jsx)(R.Tv.SubHeader,{children:(0,o.jsx)(C.cC,{children:"Explore tokens"})})})]}):(0,o.jsxs)(o.Fragment,{children:[s&&(0,o.jsx)(ln,{children:(0,o.jsxs)(C.cC,{children:["This token doesn't exist on ",{connectedChainLabel:s}]})}),(0,o.jsx)(dn,{onClick:()=>l(e),children:(0,o.jsx)(R.Tv.SubHeader,{children:(0,o.jsxs)(C.cC,{children:["Switch to ",{label:a?N.T_[e].label:""}]})})})]})]})}var cn=i(80149),un=i(93741),hn=i(3359),vn=i(37018),pn=i(437),mn=i(76885),xn=i(66869),fn=i(88940);const yn=(e,n)=>{var i,o;const a=null===(i=e)||void 0===i?void 0:i.name,r=null===(o=e)||void 0===o?void 0:o.symbol,l=C.t`Buy and sell on Uniswap`;if(!a&&!r)return l;const d=n&&n!==t.ChainId.MAINNET?` on ${N.T_[n].label}`:"";return!a&&r?`${r}${d}: ${l}`:a&&!r?`${a}${d}: ${l}`:`${a} (${r})${d}: ${l}`},Cn=(e,n)=>{var i,o,a,r,l,d;return`Buy, sell, and swap ${(null===(i=e)||void 0===i?void 0:i.name)&&(null===(o=e)||void 0===o?void 0:o.symbol)?`${null===(a=e)||void 0===a?void 0:a.name} (${null===(r=e)||void 0===r?void 0:r.symbol})`:(null===(l=e)||void 0===l?void 0:l.name)??(null===(d=e)||void 0===d?void 0:d.symbol)??"tokens"}${n&&n!==t.ChainId.MAINNET?` on ${N.T_[n].label}`:""}. Real-time prices, charts, transaction data, and more.`};function jn(e,n,i,o){var a;const r=(0,nn.x)()??t.ChainId.MAINNET,l=(0,g.useMemo)((()=>{var n;return o?(0,p.gX)(i):(null===(n=e.data)||void 0===n?void 0:n.token)?(0,m.Pc)(e.data.token):void 0}),[o,i,null===(a=e.data)||void 0===a?void 0:a.token]),d=Boolean(l)||i!==r,s=function(e,n,i){var o;const t=(0,x.U8)(i?void 0:e,n);return i||!e||t&&(null===(o=t)||void 0===o?void 0:o.symbol)===p.eu?void 0:t}(n,i,d);return{currency:l??s,currencyWasFetchedOnChain:!l}}function kn(){var e,n,i,o,t;const{tokenAddress:a}=(0,b.UO)();if(!a)throw new Error("Invalid token details route: token address URL param is undefined");const r=(0,m.L7)((0,N.WN)(),{fallbackToEthereum:!0}),l=a===p.dt,d=l?(0,fn.P)(r.backendChain.chain):a,s=(0,E.mZB)({variables:{address:d,chain:r.backendChain.chain},errorPolicy:"all"}),c=(0,u.Gn)(d,r.backendChain.chain),h=function(e){var n,i,o,t;const{data:a}=(0,un.vv)();return(0,g.useMemo)((()=>{var n,i,o,t,r,l;const d=null===(o=a)||void 0===o||null===(i=o.portfolios)||void 0===i||null===(n=i[0])||void 0===n?void 0:n.tokenBalances,s=null===(l=e.data)||void 0===l||null===(r=l.token)||void 0===r||null===(t=r.project)||void 0===t?void 0:t.tokens;return s?s.reduce(((e,n)=>{if(n){var i;e[n.chain]||(e[n.chain]={});const o=e[n.chain]??{};o.address=n.address,o.balance=null===(i=d)||void 0===i?void 0:i.find((e=>{var i,o;return(null===(o=e)||void 0===o||null===(i=o.token)||void 0===i?void 0:i.id)===n.id})),e[n.chain]=o}return e}),{}):{}}),[null===(n=a)||void 0===n?void 0:n.portfolios,null===(t=e.data)||void 0===t||null===(o=t.token)||void 0===o||null===(i=o.project)||void 0===i?void 0:i.tokens])}(s),{currency:v,currencyWasFetchedOnChain:x}=jn(s,a,r.id,l),f=(0,cn.Xp)(a,r.id),y=(0,T.useTheme)(),{preloadedLogoSrc:C}=(0,b.TH)().state??{},j=(null===(i=s.data)||void 0===i||null===(n=i.token)||void 0===n||null===(e=n.project)||void 0===e?void 0:e.logoUrl)??C,k=(0,hn.H)(j,null===(t=s.data)||void 0===t||null===(o=t.token)||void 0===o?void 0:o.name,y.surface2).tokenColor??void 0;return(0,g.useMemo)((()=>{var e,n;return{currency:v,currencyChain:r.backendChain.chain,currencyChainId:r.id,address:((null===(e=v)||void 0===e?void 0:e.isNative)?p.dt:null===(n=v)||void 0===n?void 0:n.address)??a,currencyWasFetchedOnChain:x,tokenQuery:s,chartState:c,warning:f,multiChainMap:h,tokenColor:k}}),[v,r.backendChain.chain,r.id,a,x,s,c,f,h,k])}function gn(){var e,n,i;const r=(0,a.G)().chainId??t.ChainId.MAINNET,l=kn(),{tokenColor:d,address:s,currency:c,currencyChain:u,currencyChainId:v,tokenQuery:p}=l,m=null===(e=p.data)||void 0===e?void 0:e.token,x=(0,g.useMemo)((()=>{var e,n,i;return{title:(0,mn.u)(null===(e=m)||void 0===e?void 0:e.symbol,null===(n=m)||void 0===n?void 0:n.name),image:window.location.origin+"/api/image/tokens/"+u.toLowerCase()+"/"+((null===(i=c)||void 0===i?void 0:i.isNative)?(0,fn.P)(u):s),url:window.location.href,description:Cn(c,v)}}),[s,c,u,v,null===(n=m)||void 0===n?void 0:n.name,null===(i=m)||void 0===i?void 0:i.symbol]),f=(0,vn.X)(x);return(0,o.jsxs)(xn.f6,{accent1:d??void 0,children:[(0,o.jsxs)(pn.Helmet,{children:[(0,o.jsx)("title",{children:yn(c,v)}),f.map(((e,n)=>(0,o.jsx)("meta",{...e},n)))]}),c?(0,o.jsx)(k.A,{contextValue:l,children:(0,o.jsx)(Xe,{})}):p.loading?(0,o.jsx)(h.lJ,{}):(0,o.jsx)(sn,{pageChainId:r,isInvalidAddress:!(0,B.UJ)(s)})]})}},76885:(e,n,i)=>{function o(e,n){return e?"Get "+e+" on Uniswap":n?"Get "+n+" on Uniswap":"View Token on Uniswap"}function t(e,n,i){return e||(n&&i?n+" #"+i:i?"Asset #"+i:"View NFT on Uniswap")}i.d(n,{H:()=>t,u:()=>o})},38004:(e,n,i)=>{function o(e,n){return!(!e||!n)&&(e===n||e.toLowerCase()===n.toLowerCase())}i.d(n,{K:()=>o})}}]);
//# sourceMappingURL=4583.12806e7e.chunk.js.map