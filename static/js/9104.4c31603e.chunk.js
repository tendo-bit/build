"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[9104,2001],{57809:(e,t,i)=>{i.d(t,{Z:()=>s});var n=i(45779),o=i(68090),a=i.n(o);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},l.apply(this,arguments)}function r(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var d=(0,n.forwardRef)((function(e,t){var i=e.color,o=void 0===i?"currentColor":i,a=e.size,d=void 0===a?24:a,s=r(e,["color","size"]);return n.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),n.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),n.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));d.propTypes={color:a().string,size:a().oneOfType([a().string,a().number])},d.displayName="Plus";const s=d},21891:(e,t,i)=>{i.d(t,{Hn:()=>x,SO:()=>v,Vr:()=>f,g4:()=>m});var n=i(76078),o=i(20090),a=i(66650),l=i(26729),r=i(57852),d=i(95315),s=i(18569),c=(i(32682),i(45779)),u=i(70854),p=i(25302),h=i(71997);function v(e,t,i){const{chainId:n,provider:o}=(0,l.G)(),a=(0,r.Q2)();return(0,c.useMemo)((()=>(i??Object.keys(e).map((e=>parseInt(e))).filter((e=>a(e)))).reduce(((i,l)=>{const r=o&&n===l?o:a(l)?d.v[l]:void 0;return r&&(i[l]=(0,p.u)(e[l]??"",t,r)),i}),{})),[t,e,i,a,n,o])}function m(e){return v(n.NONFUNGIBLE_POSITION_MANAGER_ADDRESSES,o.abi,e)}function f(e){return v(n.MULTICALL_ADDRESSES,a.abi,e)}function x(e){var t;const i=(0,c.useMemo)((()=>{if(!e||!e.length)return[];const t=e.reduce(((e,{pool:{token0:t,token1:i}})=>(e[(0,h.x7)(t)]=(0,s.PT)(t),e[(0,h.x7)(i)]=(0,s.PT)(i),e)),{});return Object.values(t)}),[e]),{data:n,loading:o}=(0,u.SJT)({variables:{contracts:i},skip:!i.length}),a=(0,c.useMemo)((()=>{var e,t;return(null===(t=n)||void 0===t||null===(e=t.tokens)||void 0===e?void 0:e.reduce(((e,t)=>{var i,n,o,a;return t&&(e[(0,h.Ec)(t)]=null===(a=t.project)||void 0===a||null===(o=a.markets)||void 0===o||null===(n=o[0])||void 0===n||null===(i=n.price)||void 0===i?void 0:i.value),e}),{}))??{}}),[null===(t=n)||void 0===t?void 0:t.tokens]);return{priceMap:a,pricesLoading:o&&!n}}},25321:(e,t,i)=>{i.d(t,{l:()=>h,u:()=>v});var n=i(29531),o=i(74365),a=i(4e4),l=i(49256),r=i(10105),d=i(76078),s=i(57852),c=i(25873);const u=new n.u({uri:s.V_[d.ChainId.MAINNET]}),p=new o.i(((e,t)=>{const i=c.ZP.getState().application.chainId;return e.setContext((()=>({uri:(0,s.ht)(i)&&s.V_[i]?s.V_[i]:s.V_[d.ChainId.MAINNET]}))),t(e)})),h=new a.f({cache:new l.h,link:(0,r.z)(p,u)}),v=Object.fromEntries(Object.entries(s.V_).map((([e,t])=>[e,new a.f({cache:new l.h,uri:t})])))},36813:(e,t,i)=>{i.d(t,{K:()=>k});var n=i(76078),o=i(21651),a=i(26729),l=i(63945),r=i(61592),d=i.n(r),s=i(63490),c=i.n(s),u=i(45779);const p=8;function h(e,t,i,n,a,l){let r={...i},s=[];for(let c=a+(l?1:-1);l?c<n.length:c>=0;l?c++:c--){const i=Number(n[c].tick),a=(0,o.tickToPrice)(e,t,i),u={liquidityActive:r.liquidityActive,tick:i,liquidityNet:d().BigInt(n[c].liquidityNet),price0:a.toFixed(p),sdkPrice:a};l?u.liquidityActive=d().add(r.liquidityActive,d().BigInt(n[c].liquidityNet)):!l&&d().notEqual(r.liquidityNet,d().BigInt(0))&&(u.liquidityActive=d().subtract(r.liquidityActive,r.liquidityNet)),s.push(u),r=u}return l||(s=s.reverse()),s}var v=i(25321),m=i(55660);const f=8,x=(e,t)=>e&&t?Math.floor(e/o.TICK_SPACINGS[t])*o.TICK_SPACINGS[t]:void 0;const y=1e3;function g(e,t,i,a){var r,d;const[s,p]=(0,u.useState)(0),[h,m]=(0,u.useState)([]),{data:f,error:x,loading:g}=function(e,t,i,a=0,r){var d,s,u;const p=v.u[r],h=e&&t&&i?o.Pool.getAddress(null===(d=e)||void 0===d?void 0:d.wrapped,null===(s=t)||void 0===s?void 0:s.wrapped,i,void 0,r?n.V3_CORE_FACTORY_ADDRESSES[r]:void 0):void 0;return(0,l.K_)({variables:{poolAddress:null===(u=h)||void 0===u?void 0:u.toLowerCase(),skip:a},skip:!h,pollInterval:c()("30s"),client:p})}(e,t,i,s,a);return(0,u.useEffect)((()=>{var e;(null===(e=f)||void 0===e?void 0:e.ticks.length)&&(m((e=>[...e,...f.ticks])),f.ticks.length===y&&p((e=>e+y)))}),[null===(r=f)||void 0===r?void 0:r.ticks]),{isLoading:g||(null===(d=f)||void 0===d?void 0:d.ticks.length)===y,error:x,ticks:h}}function k(e,t,i,l){var r,s,c,p,v;const y=(0,a.G)().chainId??n.ChainId.MAINNET,k=(0,m.$o)(null===(r=e)||void 0===r?void 0:r.wrapped,null===(s=t)||void 0===s?void 0:s.wrapped,i,l??y),w=null===(c=k[1])||void 0===c?void 0:c.liquidity,b=null===(p=k[1])||void 0===p?void 0:p.sqrtRatioX96,T=null===(v=k[1])||void 0===v?void 0:v.tickCurrent,j=(0,u.useMemo)((()=>x(T,i)),[T,i]),{isLoading:I,error:C,ticks:P}=g(e,t,i,l??y);return(0,u.useMemo)((()=>{var i,n,a;if(!e||!t||void 0===j||k[0]!==m.tK.EXISTS||!P||0===P.length||I)return{isLoading:I||k[0]===m.tK.LOADING,error:C,activeTick:j,data:void 0};const l=null===(i=e)||void 0===i?void 0:i.wrapped,r=null===(n=t)||void 0===n?void 0:n.wrapped,s=P.findIndex((({tick:e})=>e>j))-1;if(s<0)return console.error("TickData pivot not found"),{isLoading:I,error:C,activeTick:j,data:void 0};const c=(0,o.tickToPrice)(l,r,j),u={liquidityActive:d().BigInt((null===(a=k[1])||void 0===a?void 0:a.liquidity)??0),tick:j,liquidityNet:Number(P[s].tick)===j?d().BigInt(P[s].liquidityNet):d().BigInt(0),price0:c.toFixed(f),sdkPrice:c},p=h(l,r,u,P,s,!0),v=h(l,r,u,P,s,!1).concat(u).concat(p);return{isLoading:I,error:C,currentTick:T,activeTick:j,liquidity:w,sqrtPriceX96:b,data:v}}),[e,t,j,k,P,I,C,T,w,b])}},55660:(e,t,i)=>{i.d(t,{$o:()=>g,AI:()=>y,Oh:()=>x,tK:()=>f});var n=i(51371),o=i(76078),a=i(87270),l=i(21651),r=i(21891),d=i(61592),s=i.n(d),c=i(84938),u=i(45779),p=i(72993);function h(e,t,i,n,o,a,l){try{var r=e[a](l),d=r.value}catch(s){return void i(s)}r.done?t(d):Promise.resolve(d).then(n,o)}const v=new n.vU(a.Mt);let m=class{static MAX_ENTRIES=128;static pools=[];static addresses=[];static getPoolAddress(e,t,i,n){this.addresses.length>this.MAX_ENTRIES&&(this.addresses=this.addresses.slice(0,this.MAX_ENTRIES/2));const{address:o}=t,{address:a}=i,r=`${e}:${o}:${a}:${n.toString()}`,d=this.addresses.find((e=>e.key===r));if(d)return d.address;const s={key:r,address:(0,l.computePoolAddress)({factoryAddress:e,tokenA:t,tokenB:i,fee:n})};return this.addresses.unshift(s),s.address}static getPool(e,t,i,n,o,a){this.pools.length>this.MAX_ENTRIES&&(this.pools=this.pools.slice(0,this.MAX_ENTRIES/2));const r=this.pools.find((l=>l.token0===e&&l.token1===t&&l.fee===i&&s().EQ(l.sqrtRatioX96,n)&&s().EQ(l.liquidity,o)&&l.tickCurrent===a));if(r)return r;const d=new l.Pool(e,t,i,n,o,a);return this.pools.unshift(d),d}};var f;function x(e){const t=(0,p.x)(),i=(0,u.useMemo)((()=>t?e.map((([e,t,i])=>{if(e&&t&&i){const n=e.wrapped,o=t.wrapped;if(n.equals(o))return;return n.sortsBefore(o)?[n,o,i]:[o,n,i]}})):new Array(e.length)),[t,e]),n=(0,u.useMemo)((()=>{const e=t&&o.V3_CORE_FACTORY_ADDRESSES[t];return e?i.map((t=>t&&m.getPoolAddress(e,...t))):new Array(i.length)}),[t,i]),a=(0,c._Y)(n,v,"slot0"),l=(0,c._Y)(n,v,"liquidity");return(0,u.useMemo)((()=>e.map(((e,t)=>{const n=i[t];if(!n)return[f.INVALID,null];const[o,r,d]=n;if(!a[t])return[f.INVALID,null];const{result:s,loading:c,valid:u}=a[t];if(!l[t])return[f.INVALID,null];const{result:p,loading:h,valid:v}=l[t];if(!n||!u||!v)return[f.INVALID,null];if(c||h)return[f.LOADING,null];if(!s||!p)return[f.NOT_EXISTS,null];if(!s.sqrtPriceX96||s.sqrtPriceX96.eq(0))return[f.NOT_EXISTS,null];try{const e=m.getPool(o,r,d,s.sqrtPriceX96,p[0],s.tick);return[f.EXISTS,e]}catch(x){return console.error("Error when constructing the pool",x),[f.NOT_EXISTS,null]}}))),[l,e,a,i])}function y(e,t,i){return x((0,u.useMemo)((()=>[[e,t,i]]),[e,t,i]))[0]}function g(e,t,i,n){const d=(0,u.useRef)([f.LOADING,null]),s=e&&t&&i?m.getPoolAddress(o.V3_CORE_FACTORY_ADDRESSES[n],e,t,i):void 0,c=(0,u.useMemo)((()=>s?{[n]:s}:{}),[n,s]),p=(0,r.SO)(c,a.Mt)[n];return(0,u.useEffect)((()=>{function n(){var o;return o=function*(){try{if(!e||!t||!i||!s||!p)return void(d.current=[f.INVALID,null]);const n=yield p.slot0(),o=yield p.liquidity();d.current=[f.NOT_EXISTS,null];const a=new l.Pool(e,t,i,n.sqrtPriceX96.toString(),o.toString(),n.tick);d.current=[f.EXISTS,a]}catch(n){d.current=[f.INVALID,null]}},n=function(){var e=this,t=arguments;return new Promise((function(i,n){var a=o.apply(e,t);function l(e){h(a,i,n,l,r,"next",e)}function r(e){h(a,i,n,l,r,"throw",e)}l(void 0)}))},n.apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[p,i,s,e,t]),d.current}!function(e){e[e.LOADING=0]="LOADING",e[e.NOT_EXISTS=1]="NOT_EXISTS",e[e.EXISTS=2]="EXISTS",e[e.INVALID=3]="INVALID"}(f||(f={}))},46012:(e,t,i)=>{i.r(t),i.d(t,{default:()=>g});var n=i(92936),o=i(5985),a=i(47583),l=i(69780),r=i(97341),d=i(6823),s=i(43454),c=i(14411),u=i(54972),p=i(65075);const h=i.p+"static/media/404-page-dark.f24684e761633ae99402.png",v=i.p+"static/media/404-page-light.c448d3fd36de14609aba.png",m=c.default.img.withConfig({displayName:"NotFound__Image",componentId:"sc-dc174370-0"})`
  max-width: 510px;
  width: 100%;
  padding: 0 75px;
`,f=c.default.div.withConfig({displayName:"NotFound__Container",componentId:"sc-dc174370-1"})`
  display: flex;
  flex-direction: column;
  align-items: center;
`,x=(0,c.default)(f).withConfig({displayName:"NotFound__Header",componentId:"sc-dc174370-2"})`
  gap: 30px;
`,y=(0,c.default)(f).withConfig({displayName:"NotFound__PageWrapper",componentId:"sc-dc174370-3"})`
  flex: 1;
  justify-content: center;
  gap: 50px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    justify-content: space-between;
    padding-top: 64px;
  }
`;function g(){const e=(0,p.Gv)(),t=(0,r.dD)(),i=t?u.Tv.LargeHeader:u.Tv.Hero,c=t?u.Tv.HeadlineMedium:u.Tv.HeadlineLarge;return(0,n.jsx)(y,{children:(0,n.jsxs)(a.fM,{page:o.yJ.NOT_FOUND,shouldLogImpression:!0,children:[(0,n.jsxs)(x,{children:[(0,n.jsxs)(f,{children:[(0,n.jsx)(i,{children:"404"}),(0,n.jsx)(c,{color:"neutral2",children:(0,n.jsx)(d.cC,{children:"Page not found!"})})]}),(0,n.jsx)(m,{src:e?h:v,alt:"Liluni"})]}),(0,n.jsx)(l.Hm,{as:s.rU,to:"/",children:(0,n.jsx)(d.cC,{children:"Oops, take me back to Swap"})})]})})}},55471:(e,t,i)=>{i.r(t),i.d(t,{default:()=>In});var n=i(92936),o=i(5985),a=i(47583),l=i(44591),r=i(76078),d=i(21651),s=i(70060),c=i(74118),u=i(68707),p=i(36813),h=i(61592),v=i.n(h),m=i(45779),f=i(66136),x=i(69632),y=i(55810);class g{_data=null;_options;constructor(e){this._options=e,this._options.hoveredTick=e.activeTick}draw(e,t){e.useBitmapCoordinateSpace((e=>this._drawImpl(e,t)))}update(e,t){this._data=e,this._options={...this._options,...t}}_drawImpl(e,t){if(null===this._data||0===this._data.bars.length||null===this._data.visibleRange||null===this._options)return;const i=e.context,n=this._data.bars.map((e=>({x:e.x,y:t(e.originalData.liquidity)??0,tick:e.originalData.tick})));(0,y.XV)(n,this._data.barSpacing,e.horizontalPixelRatio,this._data.visibleRange.from,this._data.visibleRange.to);const o=t(0)??0;i.fillStyle=this._options.tokenAColor;for(let a=this._data.visibleRange.from;a<this._data.visibleRange.to;a++){const t=n[a],l=t.column,r=this._options.activeTick===t.tick,d=this._options.hoveredTick===t.tick;if(!l)return;const s=Math.min(Math.max(e.horizontalPixelRatio,l.right-l.left),this._data.barSpacing*e.horizontalPixelRatio),c=.3*s,u=s-2*c,p=(0,y.n1)(o,t.y,e.verticalPixelRatio);if(d){const e=.3*i.canvas.height,t=i.canvas.height-e;i.fillStyle=this._options.highlightColor,i.beginPath(),i.roundRect(l.left+c,e,u,t,8),i.fill(),i.globalAlpha=1}else i.globalAlpha=.4;if(r?i.fillStyle=this._options.tokenBColor:void 0===this._options.activeTick?i.fillStyle=this._options.color??"white":this._options.activeTick>t.tick?i.fillStyle=this._options.tokenBColor:this._options.activeTick<t.tick&&(i.fillStyle=this._options.tokenAColor),i.beginPath(),i.roundRect(l.left+c,p.position,u,p.length,8),i.fill(),i.globalAlpha=1,r&&this._options.activeTickProgress){i.globalCompositeOperation="source-atop";const e=p.length*this._options.activeTickProgress,t=p.position+(p.length-e);i.fillStyle=this._options.tokenAColor,i.beginPath(),i.fillRect(l.left,t,s,e),i.globalCompositeOperation="source-over"}}}}class k{_renderer;_tokenAColor;_tokenBColor;_highlightColor;constructor(e){this._tokenAColor=e.tokenAColor,this._renderer=new g(e),this._tokenBColor=e.tokenBColor,this._highlightColor=e.highlightColor}priceValueBuilder(e){return[0,e.liquidity]}isWhitespace(e){return!e.liquidity}renderer(){return this._renderer}update(e,t){this._renderer.update(e,t)}defaultOptions(){return{...x.Qb,tokenAColor:this._tokenAColor,tokenBColor:this._tokenBColor,highlightColor:this._highlightColor}}}function w(e,t,i,n,o,a,l){try{var r=e[a](l),d=r.value}catch(s){return void i(s)}r.done?t(d):Promise.resolve(d).then(n,o)}function b(e){return function(){var t=this,i=arguments;return new Promise((function(n,o){var a=e.apply(t,i);function l(e){w(a,n,o,l,r,"next",e)}function r(e){w(a,n,o,l,r,"throw",e)}l(void 0)}))}}class T extends c.B{series;activeTick;constructor(e,t){super(e,t),this.series=this.api.addCustomSeries(new k(t)),this.series.setData(this.data),this.updateOptions(t),this.fitContent()}updateOptions(e){super.updateOptions(e,{localization:{locale:e.locale},rightPriceScale:{visible:!1,borderVisible:!1,scaleMargins:{top:.35,bottom:0},autoScale:!0},timeScale:{visible:!1,fixLeftEdge:!0,fixRightEdge:!0,borderVisible:!1},crosshair:{horzLine:{visible:!1,labelVisible:!1},vertLine:{visible:!1,labelVisible:!1}},grid:{vertLines:{visible:!1},horzLines:{visible:!1}}});const{data:t,activeTick:i}=e;this.activeTick=i,this.data!==t&&(this.data=t,this.series.setData(t),this.fitContent()),this.series.applyOptions({priceFormat:{type:"volume"},priceLineVisible:!1,lastValueVisible:!1}),this.series.applyOptions(e)}onSeriesHover(e){var t;super.onSeriesHover(e);const i={hoveredTick:(null===(t=e)||void 0===t?void 0:t.item.tick)??this.activeTick};this.series.applyOptions(i)}activeTickIndex(){return this.data.findIndex((e=>e.tick===this.activeTick))}fitContent(){const e=this.data.length,t=this.data.findIndex((e=>e.tick===this.activeTick)),i=-1!==t?t:e/2;this.api.timeScale().setVisibleLogicalRange({from:Math.max(i-50,0),to:Math.min(i+50,this.data.length)})}}const j=u.BigNumber.from(2).pow(128).sub(1);function I(e){return r.CurrencyAmount.fromRawAmount(e,j.toString())}function C(){return(C=b((function*(e,t,i,n,o){if(o.currentTick&&o.sqrtPriceX96&&o.liquidity)try{const a=v().greaterThan(n.liquidityNet,v().BigInt(0))?n.liquidityNet:v().multiply(n.liquidityNet,v().BigInt("-1")),l=[{index:n.tick,liquidityGross:a,liquidityNet:v().multiply(n.liquidityNet,v().BigInt("-1"))},{index:n.tick+d.TICK_SPACINGS[i],liquidityGross:a,liquidityNet:n.liquidityNet}],r=new d.Pool(e,t,i,o.sqrtPriceX96,n.liquidityActive,o.currentTick,l),s=d.TickMath.getSqrtRatioAtTick(l[0].index),c=(yield r.getOutputAmount(I(e),s))[0],u=parseFloat(n.sdkPrice.invert().quote(c).toExact()),p=d.TickMath.getSqrtRatioAtTick(l[1].index),h=(yield r.getOutputAmount(I(t),p))[0];return{amount0Locked:u,amount1Locked:parseFloat(n.sdkPrice.quote(h).toExact())}}catch{return{amount0Locked:0,amount1Locked:0}}}))).apply(this,arguments)}function P(e,t,i,n){return S.apply(this,arguments)}function S(){return(S=b((function*(e,t,i,n){try{const o=d.TICK_SPACINGS[i],a=v().greaterThan(n.liquidityNet,v().BigInt(0))?n.liquidityNet:v().multiply(n.liquidityNet,v().BigInt("-1")),l=d.TickMath.getSqrtRatioAtTick(n.tick),s=[{index:n.tick,liquidityGross:a,liquidityNet:v().multiply(n.liquidityNet,v().BigInt("-1"))},{index:n.tick+d.TICK_SPACINGS[i],liquidityGross:a,liquidityNet:n.liquidityNet}],c=new d.Pool(e,t,Number(i),l,n.liquidityActive,n.tick,s),u=d.TickMath.getSqrtRatioAtTick(n.tick-o),p=r.CurrencyAmount.fromRawAmount(e,j.toString()),h=(yield c.getOutputAmount(p,u))[0],m=parseFloat(n.sdkPrice.invert().quote(h).toExact());return{amount0Locked:m,amount1Locked:parseFloat(h.toExact())}}catch{return{amount0Locked:0,amount1Locked:0}}}))).apply(this,arguments)}function _({tokenA:e,tokenB:t,feeTier:i,isReversed:n,chainId:o}){const{formatNumber:a,formatPrice:l}=(0,f.Gb)(),r=(0,p.K)(e,t,i,o),[s,c]=(0,m.useState)();return(0,m.useEffect)((()=>{function o(){return o=b((function*(){var o;const a=r.data;if(!a)return;let s,u;const p=[];for(let c=0;c<a.length;c++){const o=a[c],h=n?1e3*c:1e3*(a.length-c),v=r.activeTick===o.tick;let m=o.sdkPrice,x=o.sdkPrice.invert();v&&r.activeTick&&r.currentTick&&(u=c,s=(r.currentTick-o.tick)/d.TICK_SPACINGS[i],m=(0,d.tickToPrice)(e,t,o.tick),x=m.invert());const{amount0Locked:y,amount1Locked:g}=yield P(e,t,i,o);p.push({tick:o.tick,liquidity:parseFloat(o.liquidityActive.toString()),price0:l({price:m,type:f.sw.SwapDetailsAmount}),price1:l({price:x,type:f.sw.SwapDetailsAmount}),time:h,amount0Locked:y,amount1Locked:g})}null===(o=p)||void 0===o||o.map(((e,t)=>{t>0&&(p[t-1].amount0Locked=e.amount0Locked,p[t-1].amount1Locked=e.amount1Locked)}));const h=void 0!==u?p[u]:void 0;if(void 0!==u&&h){const n=yield function(e,t,i,n,o){return C.apply(this,arguments)}(e,t,i,a[u],r);p[u]={...h,...n}}n||p.reverse(),c({barData:p.filter((e=>e.liquidity>0)),activeRangeData:h,activeRangePercentage:s})})),o.apply(this,arguments)}!function(){o.apply(this,arguments)}()}),[r,e,t,a,l,n,i]),{tickData:s,activeTick:r.activeTick,loading:r.isLoading||!s}}var N=i(7392),$=i(95757),A=i(6992),D=i(24997),L=i(68310),E=i(13382),M=i(26431),R=i(90511),O=i(90471),B=i(67968),q=i(53950),F=i(18569),V=i(32682),X=i(6823),U=i(64505),Z=i(14411),G=i(54972),H=i(55874),z=i(70854);const W=356,Q=[L.oX.VOLUME,L.oX.PRICE,L.oX.LIQUIDITY],Y=Z.default.div.withConfig({displayName:"ChartSection__TimePeriodSelectorContainer",componentId:"sc-c659df50-0"})`
  @media only screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    width: 100%;
  }
`,K=Z.default.div.withConfig({displayName:"ChartSection__ChartTypeSelectorContainer",componentId:"sc-c659df50-1"})`
  display: flex;
  gap: 8px;

  @media only screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    width: 100%;
  }
`,J=(0,Z.default)(c.k).withConfig({displayName:"ChartSection__StyledChart",componentId:"sc-c659df50-2"})`
  height: ${W}px;
`,ee=({chartType:e,onChartTypeChange:t})=>(0,n.jsx)(K,{children:(0,n.jsx)(R.W,{options:Q,currentChartType:e,onSelectOption:t})});function te(e,t,i,n,o,a){var l;const[r,d]=(0,m.useState)(F.XH.DAY),[s,c]=(0,m.useState)(L.oX.VOLUME),u=a===z.Qeo.V3,p={address:(null===(l=e)||void 0===l?void 0:l.address)??"",chain:o,duration:(0,F.uw)(r),isV3:u},h=function(e,t,i,n,o){var a,l,r;const{data:d,loading:s}=(0,z.TNW)({variables:e});return(0,m.useMemo)((()=>{var e,a,l;const{priceHistory:r}=(null===(e=d)||void 0===e?void 0:e.v2Pair)??(null===(a=d)||void 0===a?void 0:a.v3Pool)??{},c=o?i:n,u=(null===(l=r)||void 0===l?void 0:l.filter((e=>null!==e)).map((e=>{var i,n,o,a;const l=(null===(i=t)||void 0===i?void 0:i.token0.address)===(null===(n=c)||void 0===n?void 0:n.address.toLowerCase())?null===(o=e)||void 0===o?void 0:o.token0Price:null===(a=e)||void 0===a?void 0:a.token1Price;return{time:e.timestamp,value:l,open:l,high:l,low:l,close:l}})))??[],p=s||!r?O.x1.INVALID:O.x1.VALID;return{chartType:L.oX.PRICE,entries:u,loading:s,dataQuality:p}}),[null===(a=d)||void 0===a?void 0:a.v2Pair,null===(l=d)||void 0===l?void 0:l.v3Pool,o,s,null===(r=t)||void 0===r?void 0:r.token0.address,i,n])}(p,e,t,i,n),v=function(e){var t,i;const{data:n,loading:o}=(0,z.hzq)({variables:e});return(0,m.useMemo)((()=>{var t,i,a;const{historicalVolume:l}=(null===(t=n)||void 0===t?void 0:t.v2Pair)??(null===(i=n)||void 0===i?void 0:i.v3Pool)??{},r=(null===(a=l)||void 0===a?void 0:a.filter((e=>null!==e)).map(O.Yz))??[],d=(0,O.q6)(r,L.oX.VOLUME,e.duration);return{chartType:L.oX.VOLUME,entries:r,loading:o,dataQuality:d}}),[null===(t=n)||void 0===t?void 0:t.v2Pair,null===(i=n)||void 0===i?void 0:i.v3Pool,o,e.duration])}(p);return(0,m.useMemo)((()=>{const e=(()=>{switch(s){case L.oX.PRICE:return h;case L.oX.VOLUME:return v;case L.oX.LIQUIDITY:return{chartType:L.oX.LIQUIDITY,entries:[],loading:!1,dataQuality:O.x1.VALID}}})();return{timePeriod:r,setTimePeriod:d,setChartType:c,activeQuery:e}}),[s,v,h,r])}function ie(e){var t,i,o,a,l,d;const[s,c]=[(null===(t=e.poolData)||void 0===t?void 0:t.token0)&&(0,F.Pc)(e.poolData.token0),(null===(i=e.poolData)||void 0===i?void 0:i.token1)&&(0,F.Pc)(e.poolData.token1)],{setChartType:u,timePeriod:p,setTimePeriod:h,activeQuery:v}=te(e.poolData,null===(o=s)||void 0===o?void 0:o.wrapped,null===(a=c)||void 0===a?void 0:a.wrapped,e.isReversed,e.chain??z.qop.Ethereum,(null===(l=e.poolData)||void 0===l?void 0:l.protocolVersion)??z.Qeo.V3),f=(0,U.Dv)(A.N),x=e.loading||v.chartType!==L.oX.LIQUIDITY&&(null===(d=v)||void 0===d?void 0:d.loading),y=(()=>{if(!s||!c||!e.poolData||!e.chain)return(0,n.jsx)(N.M,{type:v.chartType,height:W});const t={...e,feeTier:Number(e.poolData.feeTier),height:W,timePeriod:p,tokenA:s.wrapped,tokenB:c.wrapped,chainId:(0,F.Tz)(e.chain)??r.ChainId.MAINNET};if(v.chartType===L.oX.LIQUIDITY)return(0,n.jsx)(se,{...t});if(v.dataQuality===O.x1.INVALID||!s||!c){const e=x?void 0:(0,n.jsx)(X.cC,{children:"Unable to display historical data for the current pool."});return(0,n.jsx)(N.M,{type:v.chartType,height:W,errorText:e})}const i=v.dataQuality===O.x1.STALE;switch(v.chartType){case L.oX.PRICE:return(0,n.jsx)(ae,{...t,data:v.entries,stale:i});case L.oX.VOLUME:return(0,n.jsx)(D.x,{...t,data:v.entries,stale:i})}})(),g=(0,m.useMemo)((()=>v.chartType===L.oX.PRICE?M.Bz.filter((e=>e.value!==q._u.HOUR)):M.Bz),[v.chartType]);return(0,n.jsxs)("div",{"data-testid":"pdp-chart-container",children:[y,(0,n.jsxs)(M.Os,{children:[(0,n.jsx)(ee,{chartType:v.chartType,onChartTypeChange:u}),v.chartType!==L.oX.LIQUIDITY&&(0,n.jsx)(Y,{children:(0,n.jsx)(E.Z,{options:g,currentSelected:q.rD[p],onSelectOption:e=>{const t=(0,q.Wz)(e);var i;t===p?null===(i=f)||void 0===i||i():h(t)}})})]})]})}const ne=Z.default.div.withConfig({displayName:"ChartSection__PriceDisplayContainer",componentId:"sc-c659df50-3"})`
  display: flex;
  flex-wrap: wrap;
  column-gap: 4px;
`,oe=(0,Z.default)(G.Tv.HeadlineMedium).withConfig({displayName:"ChartSection__ChartPriceText",componentId:"sc-c659df50-4"})`
  ${G.cw}
  @media screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    font-size: 24px !important;
    line-height: 32px !important;
  }
`;function ae({tokenA:e,tokenB:t,isReversed:i,data:o,stale:a}){const{formatCurrencyAmount:l,formatPrice:d}=(0,f.Gb)(),[c,u]=i?[t,e]:[e,t],p=(0,m.useMemo)((()=>({data:o,stale:a,type:L.E4.LINE})),[o,a]),h=(0,V.ZP)(c),v=o[o.length-1];return(0,n.jsx)(J,{Model:$.r4,params:p,children:e=>{var t;const i=e??v,a=Math.floor((i.value??i.close)*10**u.decimals),p=(0,n.jsxs)(ne,{children:[(0,n.jsx)(oe,{children:`1 ${c.symbol} = ${l({amount:r.CurrencyAmount.fromRawAmount(u,a)})} \n            ${u.symbol}`}),(0,n.jsx)(oe,{color:"neutral2",children:h?"("+d({price:h})+")":""})]});return(0,n.jsx)(s._,{value:p,additionalFields:(0,n.jsx)($.Tg,{startingPrice:o[0],endingPrice:i}),valueFormatterType:f.sw.FiatTokenPrice,time:null===(t=e)||void 0===t?void 0:t.time})}})}const le=(0,Z.default)(G.Tv.H1Medium).withConfig({displayName:"ChartSection__FadeInHeading",componentId:"sc-c659df50-5"})`
  ${H.Sj};
  line-height: 32px;
`,re=(0,Z.default)(G.Tv.SubHeader).withConfig({displayName:"ChartSection__FadeInSubheader",componentId:"sc-c659df50-6"})`
  ${H.Sj}
`;function de({data:e,tokenADescriptor:t,tokenBDescriptor:i,currentTick:o}){const{formatNumber:a}=(0,f.Gb)();if(!o)return null;const l=e.tick>=o?a({input:e.amount0Locked,type:f.sw.TokenQuantityStats}):0,r=e.tick<=o?a({input:e.amount1Locked,type:f.sw.TokenQuantityStats}):0;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(G.Tv.BodySmall,{children:(0,X.t)("{{token}} liquidity: {{name}}",{token:t,name:l})}),(0,n.jsx)(G.Tv.BodySmall,{children:(0,X.t)("{{token}} liquidity: {{name}}",{token:i,name:r})})]})}function se({tokenA:e,tokenB:t,feeTier:i,isReversed:o,chainId:a}){const l=e.symbol??e.name??X.t`Token A`,r=t.symbol??t.name??X.t`Token B`,{tickData:c,activeTick:u,loading:p}=_({tokenA:e,tokenB:t,feeTier:i,isReversed:o,chainId:a}),h=(0,Z.useTheme)(),v=(0,m.useMemo)((()=>{var e,t;return{data:(null===(e=c)||void 0===e?void 0:e.barData)??[],tokenAColor:o?h.token1:h.token0,tokenBColor:o?h.token0:h.token1,highlightColor:h.surface3,activeTick:u,activeTickProgress:null===(t=c)||void 0===t?void 0:t.activeRangePercentage}}),[u,o,h,c]);return p?(0,n.jsx)(B.sT,{}):(0,n.jsx)(J,{Model:T,params:v,TooltipBody:i!==d.FeeAmount.LOWEST?({data:e})=>{var t,i;return(0,n.jsx)(de,{data:e,tokenADescriptor:l,tokenBDescriptor:r,currentTick:null===(i=c)||void 0===i||null===(t=i.activeRangeData)||void 0===t?void 0:t.tick})}:void 0,children:e=>{var t,i,o;const a=e??(null===(t=c)||void 0===t?void 0:t.activeRangeData),d=(0,n.jsxs)("div",{children:[(0,n.jsx)(le,{children:`1 ${l} = ${null===(i=a)||void 0===i?void 0:i.price0} ${r}`}),(0,n.jsx)(le,{children:`1 ${r} = ${null===(o=a)||void 0===o?void 0:o.price1} ${l}`}),a&&a.tick===u&&(0,n.jsx)(re,{color:"neutral2",paddingTop:"4px",children:(0,n.jsx)(X.cC,{children:"Active tick range"})})]});return(0,n.jsx)(s._,{value:d})}})}var ce=i(98961),ue=i(3167),pe=i(18124),he=i(5319),ve=i(23532),me=i(5967),fe=i(94284),xe=i(22717),ye=i(75495),ge=i(41886),ke=i(82743),we=i(13820),be=i(64370),Te=i(97341),je=i(30520),Ie=i(51578),Ce=i(48111),Pe=i(43454),Se=i(13446),_e=i(54703),Ne=i(47841),$e=i(57852);const Ae=(0,Z.default)(ke.X).withConfig({displayName:"shared__DetailBubble",componentId:"sc-43d66019-0"})`
  height: ${({$height:e})=>e?`${e}px`:"16px"};
  width: ${({$width:e})=>e?`${e}px`:"80px"};
`,De=(0,Z.default)(ke.X).withConfig({displayName:"shared__SmallDetailBubble",componentId:"sc-43d66019-1"})`
  height: 20px;
  width: 20px;
  border-radius: 100px;
`,Le=Z.default.div.withConfig({displayName:"PoolDetailsHeader__HeaderContainer",componentId:"sc-52c374d6-0"})`
  display: flex;
  justify-content: space-between;
  align-items: 'flex-start';
  width: 100%;
  ${H.Sj};
  animation-duration: ${({theme:e})=>e.transition.duration.medium};
`,Ee=(0,Z.default)(G.Tv.LabelMicro).withConfig({displayName:"PoolDetailsHeader__Badge",componentId:"sc-52c374d6-1"})`
  background: ${({theme:e})=>e.surface2};
  padding: 2px 6px;
  border-radius: 4px;
`,Me=(0,Z.default)(ve.o).withConfig({displayName:"PoolDetailsHeader__ToggleReverseArrows",componentId:"sc-52c374d6-2"})`
  ${G.iV}
  fill: ${({theme:e})=>e.neutral2};
`,Re=(0,Z.default)(ke.X).withConfig({displayName:"PoolDetailsHeader__IconBubble",componentId:"sc-52c374d6-3"})`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;function Oe({chainId:e,poolAddress:t,token0:i,token1:o,loading:a}){var l,r;const d=(0,$e.tq)({chainId:e,withFallback:!0}),s=`/explore/${d.toLowerCase()}`,c=`/explore/pools/${d.toLowerCase()}`;return(0,n.jsxs)(ce.zG,{"aria-label":"breadcrumb-nav",children:[(0,n.jsxs)(ce.yY,{to:s,children:[(0,n.jsx)(X.cC,{children:"Explore"})," ",(0,n.jsx)(Ie.Z,{size:14})]}),(0,n.jsxs)(ce.yY,{to:c,children:[(0,n.jsx)(X.cC,{children:"Pools"})," ",(0,n.jsx)(Ie.Z,{size:14})]}),a||!t?(0,n.jsx)(Ae,{$width:200}):(0,n.jsx)(ce.f3,{address:t,poolName:`${null===(l=i)||void 0===l?void 0:l.symbol} / ${null===(r=o)||void 0===r?void 0:r.symbol}`})]})}const Be=Z.default.div.withConfig({displayName:"PoolDetailsHeader__StyledPoolDetailsTitle",componentId:"sc-52c374d6-4"})`
  display: flex;
  flex-direction: row;
  gap: 12px;
  width: max-content;
  align-items: center;
`,qe=(0,Z.default)(G.Tv.HeadlineMedium).withConfig({displayName:"PoolDetailsHeader__PoolName",componentId:"sc-52c374d6-5"})`
  font-size: 24px !important;

  @media screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    font-size: 18px !important;
    line-height: 24px !important;
  }
`,Fe=({token0:e,token1:t,chainId:i,feeTier:o,protocolVersion:a,toggleReversed:l})=>{var d,s,c,u;const{formatPercent:p}=(0,f.Gb)(),h=o&&p(new r.Percent(o,100*we.PM));return(0,n.jsxs)(Be,{children:[(0,n.jsx)("div",{children:(0,n.jsxs)(qe,{children:[(0,n.jsx)(Ge,{to:(0,F.dG)({address:null===(d=e)||void 0===d?void 0:d.address,chain:(0,$e.tq)({chainId:i,withFallback:!0})}),children:null===(s=e)||void 0===s?void 0:s.symbol}),"\xa0/\xa0",(0,n.jsx)(Ge,{to:(0,F.dG)({address:null===(c=t)||void 0===c?void 0:c.address,chain:(0,$e.tq)({chainId:i,withFallback:!0})}),children:null===(u=t)||void 0===u?void 0:u.symbol})]})}),a===z.Qeo.V2&&(0,n.jsx)(Ee,{children:"v2"}),!!h&&(0,n.jsx)(Ee,{children:h}),(0,n.jsx)(Me,{"data-testid":"toggle-tokens-reverse-arrows",onClick:l})]})},Ve=(0,Z.default)(fe.ZP).withConfig({displayName:"PoolDetailsHeader__ContractsDropdownRowContainer",componentId:"sc-52c374d6-6"})`
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  gap: 12px;
  padding: 10px 8px;
  border-radius: 8px;
  &:hover {
    background: ${({theme:e})=>e.surface3};
  }
`,Xe=({address:e,chainId:t,tokens:i})=>{var o;const a=(0,Z.useTheme)(),l=i[0]&&(0,F.Pc)(i[0]),r=2===i.length,d=r&&i[1]?[l,(0,F.Pc)(i[1])]:[l],s=e===be.dt,c=t&&e&&(0,_e.E)(t,e,s?_e.r.NATIVE:r?_e.r.ADDRESS:_e.r.TOKEN);return t&&c?(0,n.jsx)(ye.B,{href:c,children:(0,n.jsxs)(Ve,{children:[(0,n.jsxs)(fe.ZP,{gap:"sm",children:[r?(0,n.jsx)(Ne.io,{chainId:t,currencies:d,size:24}):(0,n.jsx)(me.Z,{currency:l,size:24}),(0,n.jsx)(G.Tv.BodyPrimary,{children:r?(0,n.jsx)(X.cC,{children:"Pool"}):null===(o=i[0])||void 0===o?void 0:o.symbol}),(0,n.jsx)(G.Tv.BodySecondary,{children:(0,Se.Xn)(e)})]}),(0,n.jsx)(Ce.Z,{size:"16px",stroke:a.neutral2})]})}):(0,n.jsx)(Ve,{children:(0,n.jsx)(Ae,{$width:117})})},Ue=Z.css`
  ${ge.jF}
  min-width: 235px;
  border-radius: 16px;
  ${G.cw}
`,Ze=({chainId:e,poolAddress:t,poolName:i,token0:o,token1:a})=>{var l,d;const s=(0,Z.useTheme)(),[c,u]=(0,m.useReducer)((e=>!e),!1),p=(0,m.useRef)(null);return(0,je.t)(p,c?u:void 0),(0,n.jsxs)(fe.ZP,{width:"max-content",justify:"flex-end",gap:"sm",children:[(0,n.jsx)("div",{style:{position:"relative"},ref:p,children:(0,n.jsx)(ue.ud,{isOpen:c,toggleOpen:u,menuLabel:e===r.ChainId.MAINNET?(0,n.jsx)(pe.P,{width:"18px",height:"18px",fill:s.neutral1}):(0,n.jsx)(he.J,{width:"18px",height:"18px",fill:s.neutral1}),internalMenuItems:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Xe,{address:t,chainId:e,tokens:[o,a]}),(0,n.jsx)(Xe,{address:null===(l=o)||void 0===l?void 0:l.address,chainId:e,tokens:[o]}),(0,n.jsx)(Xe,{address:null===(d=a)||void 0===d?void 0:d.address,chainId:e,tokens:[a]})]}),tooltipText:X.t`Explorers`,hideChevron:!0,buttonCss:ge.TX,menuFlyoutCss:Ue})}),(0,n.jsx)(xe.Z,{name:i})]})},Ge=(0,Z.default)(Pe.rU).withConfig({displayName:"PoolDetailsHeader__StyledLink",componentId:"sc-52c374d6-7"})`
  color: ${({theme:e})=>e.neutral1};
  text-decoration: none;
  ${G.iV}
`;function He({chainId:e,poolAddress:t,token0:i,token1:o,feeTier:a,protocolVersion:r,toggleReversed:d,loading:s}){var c,u;const p=!(0,Te.eI)().sm,h=`${null===(c=i)||void 0===c?void 0:c.symbol} / ${null===(u=o)||void 0===u?void 0:u.symbol}`,v=(0,m.useMemo)((()=>i&&o?[(0,F.Pc)(i),(0,F.Pc)(o)]:[]),[i,o]);return s?(0,n.jsx)(Le,{"data-testid":"pdp-header-loading-skeleton",children:p?(0,n.jsxs)(l.ZP,{gap:"sm",style:{width:"100%"},children:[(0,n.jsx)(Re,{}),(0,n.jsx)(Ae,{$height:40,$width:137})]}):(0,n.jsxs)(fe.ZP,{gap:"sm",children:[(0,n.jsx)(Re,{}),(0,n.jsx)(Ae,{$height:40,$width:137})]})}):(0,n.jsx)(Le,{children:p?(0,n.jsxs)(l.ZP,{gap:"sm",style:{width:"100%"},children:[(0,n.jsxs)(fe.ZP,{gap:"md",justify:"space-between",children:[e&&(0,n.jsx)(Ne.io,{"data-testid":"double-token-logo",chainId:e,currencies:v}),(0,n.jsx)(Ze,{chainId:e,poolAddress:t,poolName:h,token0:i,token1:o})]}),(0,n.jsx)(Fe,{token0:i,token1:o,chainId:e,feeTier:a,protocolVersion:r,toggleReversed:d})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(fe.ZP,{gap:"md",children:[e&&(0,n.jsx)(Ne.io,{"data-testid":"double-token-logo",chainId:e,currencies:v}),(0,n.jsx)(Fe,{token0:i,token1:o,chainId:e,feeTier:a,protocolVersion:r,toggleReversed:d})]}),(0,n.jsx)(Ze,{chainId:e,poolAddress:t,poolName:h,token0:i,token1:o})]})})}var ze=i(86059),We=i(50333),Qe=i(94191),Ye=i(6282),Ke=i(66869);const Je=(0,Z.default)(G.Tv.BodyPrimary).withConfig({displayName:"PoolDetailsLink__TokenName",componentId:"sc-523b89fa-0"})`
  display: none;

  @media (max-width: ${Ke.j$.lg}px) and (min-width: ${Ke.j$.xs}px) {
    display: block;
  }
  ${G.cw}
`,et=(0,Z.default)(fe.ZP).withConfig({displayName:"PoolDetailsLink__TokenTextWrapper",componentId:"sc-523b89fa-1"})`
  gap: 8px;
  margin-right: 12px;
  ${G.cw}
  ${({isClickable:e})=>e&&G.iV}
`,tt=(0,Z.default)(G.Tv.BodyPrimary).withConfig({displayName:"PoolDetailsLink__SymbolText",componentId:"sc-523b89fa-2"})`
  flex-shrink: 0;

  @media (max-width: ${Ke.j$.lg}px) and (min-width: ${Ke.j$.xs}px) {
    color: ${({theme:e})=>e.neutral2};
  }
`,it=(0,Z.default)(fe.ZP).withConfig({displayName:"PoolDetailsLink__CopyAddress",componentId:"sc-523b89fa-3"})`
  gap: 8px;
  padding: 8px 12px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.surface3};
  font-size: 14px;
  font-weight: 535;
  line-height: 16px;
  width: max-content;
  flex-shrink: 0;
  ${G.iV}
`,nt=(0,Z.default)(Qe.Z).withConfig({displayName:"PoolDetailsLink__StyledCopyIcon",componentId:"sc-523b89fa-4"})`
  width: 16px;
  height: 16px;
  color: ${({theme:e})=>e.neutral2};
  flex-shrink: 0;
`,ot=Z.default.div.withConfig({displayName:"PoolDetailsLink__ExplorerWrapper",componentId:"sc-523b89fa-5"})`
  padding: 8px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.surface3};
  display: flex;
  ${G.iV}
`,at=(0,Z.default)(fe.ZP).withConfig({displayName:"PoolDetailsLink__ButtonsRow",componentId:"sc-523b89fa-6"})`
  gap: 8px;
  flex-shrink: 0;
  width: max-content;
`;function lt({address:e,chainId:t,tokens:i,loading:o}){var a,l,d,s,c,u,p;const h=(0,Z.useTheme)(),v=e===be.dt,f=i[0]&&(0,F.Pc)(i[0]),[x,y]=(0,We.Z)(),g=(0,m.useCallback)((()=>{const t=(0,Se.UJ)(e);t&&y(t)}),[e,y]),k=2===i.length,w=k&&i[1]?[f,(0,F.Pc)(i[1])]:[f],b=e&&t&&(0,_e.E)(t,e,v?_e.r.NATIVE:k?_e.r.ADDRESS:_e.r.TOKEN),T=(0,Ye.s0)(),j=(0,$e.tq)({chainId:t,withFallback:!0}),I=(0,m.useCallback)((()=>{var e;k||T((0,F.dG)({address:null===(e=i[0])||void 0===e?void 0:e.address,chain:j}))}),[T,i,k,j]),[C,P]=(0,m.useState)(!1),S=(0,m.useCallback)((e=>{if(e){e.clientWidth<e.scrollWidth&&P((e=>e?"both":"start"))}}),[C]);return!o&&e&&t?(0,n.jsxs)(fe.ZP,{align:"space-between",children:[(0,n.jsxs)(et,{"data-testid":k?`pdp-pool-logo-${null===(a=i[0])||void 0===a?void 0:a.symbol}-${null===(l=i[1])||void 0===l?void 0:l.symbol}`:`pdp-token-logo-${null===(d=i[0])||void 0===d?void 0:d.symbol}`,isClickable:!k,onClick:I,ref:S,children:[k?(0,n.jsx)(Ne.io,{chainId:t,currencies:w,size:20}):(0,n.jsx)(me.Z,{currency:f,size:20}),(0,n.jsx)(Je,{children:k?(0,n.jsx)(X.cC,{children:"Pool"}):null===(s=i[0])||void 0===s?void 0:s.name}),(0,n.jsx)(tt,{children:k?`${null===(c=i[0])||void 0===c?void 0:c.symbol} / ${null===(u=i[1])||void 0===u?void 0:u.symbol}`:(0,n.jsxs)(fe.ZP,{gap:"4px",children:[null===(p=i[0])||void 0===p?void 0:p.symbol," ",(0,n.jsx)(Ie.Z,{size:16,color:h.neutral2})]})})]}),(0,n.jsxs)(at,{children:[!v&&(0,n.jsx)(ze.ZP,{placement:"bottom",size:ze.Oz.Max,show:x,text:X.t`Copied`,children:(0,n.jsxs)(it,{"data-testid":`copy-address-${e}`,onClick:g,children:[(0,Se.Xn)(e,C?2:void 0,"both"===C?2:void 0),(0,n.jsx)(nt,{})]})}),b&&(0,n.jsx)(G.dL,{href:b,"data-testid":`explorer-url-${b}`,children:(0,n.jsx)(ot,{children:t===r.ChainId.MAINNET?(0,n.jsx)(pe.P,{width:"16px",height:"16px",fill:h.neutral1}):(0,n.jsx)(he.J,{width:"16px",height:"16px",fill:h.neutral1})})})]})]}):(0,n.jsxs)(fe.ZP,{gap:"8px",padding:"6px 0px",children:[(0,n.jsx)(De,{}),(0,n.jsx)(Ae,{$width:117})]})}var rt=i(19478),dt=i(39671),st=i(22953);const ct=(0,Z.default)(st.xv).withConfig({displayName:"PoolDetailsStats__HeaderText",componentId:"sc-2836d701-0"})`
  font-weight: 485;
  font-size: 24px;
  line-height: 36px;
  @media (max-width: ${Ke.j$.lg}px) {
    width: 100%;
  }
`,ut=(0,Z.default)(l.ZP).withConfig({displayName:"PoolDetailsStats__StatsWrapper",componentId:"sc-2836d701-1"})`
  gap: 24px;
  padding: 20px;
  border-radius: 20px;
  background: ${({theme:e})=>e.surface2};
  width: 100%;
  z-index: 1;
  margin-top: ${({loaded:e})=>e&&"-24px"};

  @media (max-width: ${Ke.j$.lg}px) {
    flex-direction: row;
    background: transparent;
    flex-wrap: wrap;
    padding: 20px 0px;
    justify-content: space-between;
    margin-top: 0px;
  }
`,pt=(0,Z.default)(l.ZP).withConfig({displayName:"PoolDetailsStats__StatItemColumn",componentId:"sc-2836d701-2"})`
  gap: 8px;
  flex: 1;
  min-width: 180px;

  @media (max-width: ${Ke.j$.sm}px) {
    min-width: 150px;
  }
`,ht=(0,Z.default)(fe.ZP).withConfig({displayName:"PoolDetailsStats__PoolBalanceSymbols",componentId:"sc-2836d701-3"})`
  justify-content: space-between;

  @media (max-width: ${Ke.j$.lg}px) {
    flex-direction: column;
  }
`,vt=(0,Z.default)(fe.ZP).withConfig({displayName:"PoolDetailsStats__PoolBalanceTokenNamesContainer",componentId:"sc-2836d701-4"})`
  font-weight: 485;
  font-size: 16px;
  line-height: 24px;
  width: max-content;

  @media (max-width: ${Ke.j$.lg}px) {
    font-size: 20px;
    line-height: 28px;
    width: 100%;
  }
`,mt=(0,Z.default)(Pe.rU).withConfig({displayName:"PoolDetailsStats__StyledLink",componentId:"sc-2836d701-5"})`
  display: flex;
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  ${G.iV}
`,ft=Z.css`
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-right: 1px solid ${({theme:e})=>e.surface2};
`,xt=Z.css`
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left: 1px solid ${({theme:e})=>e.surface2};
`,yt=Z.default.div.withConfig({displayName:"PoolDetailsStats__BalanceChartSide",componentId:"sc-2836d701-6"})`
  height: 8px;
  width: ${({percent:e})=>100*e}%;
  background: ${({$color:e})=>e};
  ${({isLeft:e})=>e?ft:xt}
`,gt=(0,Z.default)(ke.X).withConfig({displayName:"PoolDetailsStats__StatSectionBubble",componentId:"sc-2836d701-7"})`
  width: 180px;
  height: 40px;
`,kt=(0,Z.default)(ke.X).withConfig({displayName:"PoolDetailsStats__StatHeaderBubble",componentId:"sc-2836d701-8"})`
  width: 116px;
  height: 24px;
  border-radius: 8px;
`,wt=({token:e,chainId:t})=>{var i;const o=(0,Te.eI)().lg,{formatNumber:a}=(0,f.Gb)(),l=t?(0,F.vR)(t,e):e,r=(null===(i=l)||void 0===i?void 0:i.address)===be.dt&&t?(0,be.gX)(t):e.currency;return(0,n.jsxs)(vt,{children:[!o&&(0,n.jsx)(me.Z,{currency:r,size:20,style:{marginRight:"8px"}}),a({input:e.tvl,type:f.sw.TokenQuantityStats}),"\xa0",(0,n.jsxs)(mt,{to:(0,F.dG)({address:l.address,chain:(0,$e.tq)({chainId:t,withFallback:!0})}),children:[o&&(0,n.jsx)(me.Z,{currency:r,size:16,style:{marginRight:"4px",marginLeft:"4px"}}),l.symbol]})]})};function bt({poolData:e,isReversed:t,chainId:i,loading:o}){var a,r,d,s,c,u,p,h;const v=(0,Te.eI)().lg,f=(0,Z.useTheme)(),x=(0,dt.U8)(null===(r=e)||void 0===r||null===(a=r.token0)||void 0===a?void 0:a.address,i),y=(0,dt.U8)(null===(s=e)||void 0===s||null===(d=s.token1)||void 0===d?void 0:d.address,i),[g,k]=(0,m.useMemo)((()=>{if(e&&e.tvlToken0&&e.token0Price&&e.tvlToken1&&e.token1Price){var i,n,o,a,l,r,d,s,c,u,p,h,v,m;const f=(null===(i=e)||void 0===i?void 0:i.tvlToken0)*(null===(n=e)||void 0===n?void 0:n.token0Price)+(null===(o=e)||void 0===o?void 0:o.tvlToken1)*(null===(a=e)||void 0===a?void 0:a.token1Price),g={...null===(l=e)||void 0===l?void 0:l.token0,price:null===(r=e)||void 0===r?void 0:r.token0Price,tvl:null===(d=e)||void 0===d?void 0:d.tvlToken0,percent:(null===(s=e)||void 0===s?void 0:s.tvlToken0)*(null===(c=e)||void 0===c?void 0:c.token0Price)/f,currency:x},k={...null===(u=e)||void 0===u?void 0:u.token1,price:null===(p=e)||void 0===p?void 0:p.token1Price,tvl:null===(h=e)||void 0===h?void 0:h.tvlToken1,percent:(null===(v=e)||void 0===v?void 0:v.tvlToken1)*(null===(m=e)||void 0===m?void 0:m.token1Price)/f,currency:y};return t?[k,g]:[g,k]}return[void 0,void 0]}),[x,y,t,e]);return!o&&g&&k&&e?(0,n.jsxs)(ut,{loaded:!0,children:[(0,n.jsx)(ct,{children:(0,n.jsx)(X.cC,{children:"Stats"})}),(0,n.jsxs)(pt,{children:[(0,n.jsx)(G.Tv.BodySecondary,{children:(0,n.jsx)(X.cC,{children:"Pool balances"})}),(0,n.jsxs)(ht,{children:[(0,n.jsx)(wt,{token:g,chainId:i}),(0,n.jsx)(wt,{token:k,chainId:i})]}),v&&(0,n.jsxs)(fe.ZP,{"data-testid":"pool-balance-chart",children:[(0,n.jsx)(yt,{percent:g.percent,$color:f.token0,isLeft:!0}),(0,n.jsx)(yt,{percent:k.percent,$color:f.token1,isLeft:!1})]})]}),(null===(c=e)||void 0===c?void 0:c.tvlUSD)&&(0,n.jsx)(It,{title:(0,n.jsx)(X.cC,{children:"TVL"}),value:e.tvlUSD,delta:e.tvlUSDChange}),void 0!==(null===(u=e)||void 0===u?void 0:u.volumeUSD24H)&&(0,n.jsx)(It,{title:(0,n.jsx)(X.cC,{children:"24H volume"}),value:e.volumeUSD24H,delta:e.volumeUSD24HChange}),void 0!==(null===(p=e)||void 0===p?void 0:p.volumeUSD24H)&&void 0!==(null===(h=e)||void 0===h?void 0:h.feeTier)&&(0,n.jsx)(It,{title:(0,n.jsx)(X.cC,{children:"24H fees"}),value:e.volumeUSD24H*(e.feeTier/1e6)})]}):(0,n.jsxs)(ut,{children:[(0,n.jsx)(ct,{children:(0,n.jsx)(kt,{})}),Array.from({length:4}).map(((e,t)=>(0,n.jsxs)(l.ZP,{gap:"md",children:[(0,n.jsx)(Ae,{}),(0,n.jsx)(gt,{})]},`loading-info-row-${t}`)))]})}const Tt=(0,Z.default)(fe.ZP).withConfig({displayName:"PoolDetailsStats__StatsTextContainer",componentId:"sc-2836d701-9"})`
  gap: 4px;
  width: 100%;
  align-items: flex-end;

  @media (max-width: ${Ke.j$.lg}px) {
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
  }
`,jt=(0,Z.default)(st.xv).withConfig({displayName:"PoolDetailsStats__StatItemText",componentId:"sc-2836d701-10"})`
  color: ${({theme:e})=>e.neutral1};
  font-size: 36px;
  font-weight: 485;
  line-height: 44px;

  @media (max-width: ${Ke.j$.lg}px) {
    font-size: 20px;
    line-height: 28px;
  }
`;function It({title:e,value:t,delta:i}){const{formatNumber:o,formatDelta:a}=(0,f.Gb)();return(0,n.jsxs)(pt,{children:[(0,n.jsx)(G.Tv.BodySecondary,{children:e}),(0,n.jsxs)(Tt,{children:[(0,n.jsx)(jt,{children:o({input:t,type:f.sw.FiatTokenStats})}),!!i&&(0,n.jsxs)(fe.ZP,{width:"max-content",padding:"4px 0px",children:[(0,n.jsx)(rt.Kx,{delta:i}),(0,n.jsx)(G.Tv.BodySecondary,{children:a(i)})]})]})]})}var Ct=i(26729),Pt=i(56708),St=i(87270),_t=i(80182),Nt=i(42603),$t=i(71997),At=i(68177),Dt=i(63490),Lt=i.n(Dt),Et=i(82098),Mt=i(22286);function Rt(e,t,i,n,o,a,l){try{var r=e[a](l),d=r.value}catch(s){return void i(s)}r.done?t(d):Promise.resolve(d).then(n,o)}function Ot(e){return function(){var t=this,i=arguments;return new Promise((function(n,o){var a=e.apply(t,i);function l(e){Rt(a,n,o,l,r,"next",e)}function r(e){Rt(a,n,o,l,r,"throw",e)}l(void 0)}))}}const Bt=1e6,qt=new _t.Interface(Mt),Ft=new _t.Interface(Mt);function Vt(e,t){return Xt.apply(this,arguments)}function Xt(){return(Xt=Ot((function*(e,t){try{return(yield e.callStatic.multicall(t)).returnData}catch(n){var i;if((-32603===n.code||-1!==(null===(i=n.message)||void 0===i?void 0:i.indexOf("execution ran out of gas")))&&t.length>1){const i=Math.floor(t.length/2);return Promise.all([Vt(e,t.slice(0,i)),Vt(e,t.slice(i,t.length))]).then((([e,t])=>[...e,...t]))}throw console.error("Failed to fetch chunk",n),n}}))).apply(this,arguments)}function Ut(e,t,i){return function(e,t){if(e.length%t!==0)throw new Error("Input array length must be a multiple of desired output size");return Array.from({length:Math.floor(e.length/t)},((i,n)=>e.slice(n*t,n*t+t)))}(i,5).reduce(((i,n,o)=>{const a=function(e,t,i){try{const[n,o,a,l,d]=i,s=n.success?qt.decodeFunctionResult("name",n.returnData)[0]:l.success?Ft.decodeFunctionResult("name",l.returnData)[0]:void 0,c=o.success?qt.decodeFunctionResult("symbol",o.returnData)[0]:d.success?Ft.decodeFunctionResult("symbol",d.returnData)[0]:void 0,u=a.success?parseInt(a.returnData):Nt.G;return new r.Token(t,e,u,c,s)}catch(n){return void console.error(`Failed to fetch token at address ${e} on chain ${t}`)}}(e[o],t,n);return a&&(i[a.address]=a),i}),{})}const Zt=(e,t)=>t.map((t=>({target:e,callData:t,gasLimit:Bt})));const Gt={};function Ht(){return(Ht=Ot((function*(e,t,i){if(0===e.length)return{};const n=[],o=[],a=[];e.forEach((e=>{const i=(0,$t.mn)(t,e),l=Gt[i];if(void 0!==l)a.push(l);else{const t=(0,Se.UJ)(e);if(!t)return;n.push(t),o.push(...(r=t,Zt(r,[qt.encodeFunctionData("name"),qt.encodeFunctionData("symbol"),qt.encodeFunctionData("decimals"),Ft.encodeFunctionData("name"),Ft.encodeFunctionData("symbol")])))}var r}));const l=Vt(i,o).then((i=>Ut(e,t,i)));n.forEach((e=>Gt[(0,$t.mn)(t,e)]=l.then((t=>t[e]))));const r=yield l;return(yield Promise.all(a)).forEach((e=>e&&(r[(0,$t.x7)(e)]=e))),r}))).apply(this,arguments)}var zt=i(21891);function Wt(e,t,i,n,o,a,l){try{var r=e[a](l),d=r.value}catch(s){return void i(s)}r.done?t(d):Promise.resolve(d).then(n,o)}function Qt(e){return function(){var t=this,i=arguments;return new Promise((function(n,o){var a=e.apply(t,i);function l(e){Wt(a,n,o,l,r,"next",e)}function r(e){Wt(a,n,o,l,r,"throw",e)}l(void 0)}))}}const Yt=Lt()("1m"),Kt=(0,At.cn)({});const Jt=(e,t)=>`${t}-${e.token0}-${e.token1}-${e.fee}`,ei=(0,U.O4)("poolCache",{});const ti=(0,U.O4)("cachedAsyncTokens",{});function ii(e){const t=(0,zt.Vr)(e),i=function(){const[e,t]=(0,At.KO)(ti),i=(0,m.useCallback)(((t,i)=>{const n=e[(0,$t.mn)(t,i)];return n?(0,Et.i)(n):void 0}),[e]),n=(0,m.useCallback)((e=>{e&&t((t=>({...t,[(0,$t.x7)(e)]:(0,Et.M)(e)})))}),[t]);return{get:i,set:n}}(),n=(0,m.useCallback)(function(){var e=Qt((function*(e,n){const o=yield function(e,t,i){return Ht.apply(this,arguments)}(e,n,t[n]);return Object.values(o).forEach(i.set),o}));return function(t,i){return e.apply(this,arguments)}}(),[t,i]),o=(0,m.useCallback)(function(){var e=Qt((function*(e,t){const o={},a=new Set;e.forEach((e=>{const n=i.get(t,e);n?o[e]=n:a.add(e)}));const l=yield n([...a],t);return{...o,...l}}));return function(t,i){return e.apply(this,arguments)}}(),[n,i]);return o}function ni(e,t,i,n,o,a,l){try{var r=e[a](l),d=r.value}catch(s){return void i(s)}r.done?t(d):Promise.resolve(d).then(n,o)}function oi(e){return function(){var t=this,i=arguments;return new Promise((function(n,o){var a=e.apply(t,i);function l(e){ni(a,n,o,l,r,"next",e)}function r(e){ni(a,n,o,l,r,"throw",e)}l(void 0)}))}}const ai=u.BigNumber.from(2).pow(128).sub(1),li=[...$e.EH,...$e.Ny].filter((e=>!$e.oR.includes(e)));function ri(e,t=li){var i,n,o;const a=(0,zt.g4)(t),l=(0,zt.Vr)(t),s=ii(t),c=function(){const[e,t]=(0,At.KO)(ei);return{get:(0,m.useCallback)(((t,i)=>e[Jt(t,i)]),[e]),set:(0,m.useCallback)(((e,i,n)=>t((t=>({...t,[Jt(e,i)]:n})))),[t])}}(),[p,h]=function(e){const[t,i]=(0,At.KO)(Kt),n=(0,m.useCallback)((t=>{i((i=>({...i,[e]:{result:t,stale:!1}}))),setTimeout((()=>i((i=>{var n;return t===(null===(n=i[e])||void 0===n?void 0:n.result)?{...i,[e]:{result:t,stale:!0}}:i}))),Yt)}),[e,i]);return[t[e],n]}(e),v=null===(i=p)||void 0===i?void 0:i.result,f=(0,m.useRef)(!1),x=!(null===(n=p)||void 0===n?void 0:n.result)&&f.current,[y,g]=(0,m.useState)({}),{priceMap:k,pricesLoading:w}=(0,zt.Hn)(v),b=(0,m.useCallback)(function(){var t=oi((function*(t,i,n){const o=i.map((i=>t.interface.encodeFunctionData("collect",[{tokenId:i,recipient:e,amount0Max:ai,amount1Max:ai}]))),a=(yield t.callStatic.multicall(o)).reduce(((e,o,a)=>(e[n.toString()+i[a]]=t.interface.decodeFunctionResult("collect",o),e)),{});g((e=>({...e,...a})))}));return function(e,i,n){return t.apply(this,arguments)}}(),[e]),T=(0,m.useCallback)(function(){var t=oi((function*(t,i){const n=Array.from({length:i.toNumber()},((i,n)=>t.interface.encodeFunctionData("tokenOfOwnerByIndex",[e,n])));return(yield t.callStatic.multicall(n)).map((e=>u.BigNumber.from(e)))}));return function(e,i){return t.apply(this,arguments)}}(),[e]),j=(0,m.useCallback)(function(){var e=oi((function*(e,t){const i=t.map((t=>e.interface.encodeFunctionData("positions",[t])));return(yield e.callStatic.multicall(i)).map(((i,n)=>({...e.interface.decodeFunctionResult("positions",i),tokenId:t[n]})))}));return function(t,i){return e.apply(this,arguments)}}(),[]),I=(0,m.useCallback)(function(){var t=oi((function*(t,i,n){const o=new _t.Interface(St.Mt),a=yield s(t.flatMap((e=>[e.token0,e.token1])),i),l=[],u=[];return t.forEach((e=>{const t=a[e.token0]??new r.Token(i,e.token0,Nt.G),n=a[e.token1]??new r.Token(i,e.token1,Nt.G);let s=c.get(e,i);if(!s){const o=r.V3_CORE_FACTORY_ADDRESSES[i];s=(0,d.computePoolAddress)({factoryAddress:o,tokenA:t,tokenB:n,fee:e.fee}),c.set(e,i,s)}u.push([t,n]),l.push({target:s,callData:o.encodeFunctionData("slot0"),gasLimit:Bt})}),[]),(yield n.callStatic.multicall(l)).returnData.reduce(((n,a,l)=>{if(a.success){const r=o.decodeFunctionResult("slot0",a.returnData);n.push(function(e,t,i,n,o,a){const l=new d.Pool(o,a,i.fee,n.sqrtPriceX96.toString(),0,n.tick),r=new d.Position({pool:l,liquidity:i.liquidity.toString(),tickLower:i.tickLower,tickUpper:i.tickUpper}),s=n.tick>=i.tickLower&&n.tick<i.tickUpper,c=i.liquidity.eq(0);return{owner:e,chainId:t,pool:l,position:r,details:i,inRange:s,closed:c}}(e,i,t[l],r,...u[l]))}else console.debug("slot0 fetch errored",a);return n}),[])}));return function(e,i,n){return t.apply(this,arguments)}}(),[e,c,s]),C=(0,m.useCallback)(function(){var t=oi((function*(t){if(!e||0===e.length)return[];try{var i;const n=a[t],o=l[t],r=yield null===(i=n)||void 0===i?void 0:i.balanceOf(e);if(!n||!o||r.lt(1))return[];const d=yield T(n,r);b(n,d,t);const s=yield j(n,d);return I(s,t,o)}catch(n){return console.error(`Failed to fetch positions for chain ${t}`,n),[]}}));return function(e){return t.apply(this,arguments)}}(),[e,j,b,T,I,a,l]),P=(0,m.useCallback)(oi((function*(){f.current=!0;const e=(yield Promise.all(t.map(C))).flat();f.current=!1,h(e)})),[t,C,h]);(0,m.useEffect)((()=>{var e;if(!f.current&&!1!==(null===(e=p)||void 0===e?void 0:e.stale)){if(!document.hasFocus()){const e=()=>{P(),window.removeEventListener("focus",e)};return window.addEventListener("focus",e),()=>{window.removeEventListener("focus",e)}}P()}}),[P,f,null===(o=p)||void 0===o?void 0:o.stale]);return{positions:(0,m.useMemo)((()=>{var e;return null===(e=v)||void 0===e?void 0:e.map((e=>{var t,i;const n=e.chainId.toString()+e.details.tokenId,o=y[n]?[parseFloat(r.CurrencyAmount.fromRawAmount(e.pool.token0,null===(t=y[n])||void 0===t?void 0:t[0].toString()).toExact()),parseFloat(r.CurrencyAmount.fromRawAmount(e.pool.token1,null===(i=y[n])||void 0===i?void 0:i[1].toString()).toExact())]:void 0,a=[k[(0,$t.x7)(e.pool.token0)],k[(0,$t.x7)(e.pool.token1)]];return{...e,fees:o,prices:a}}))}),[y,v,k]),loading:w||x}}var di=i(69924),si=i(56536),ci=i(79833),ui=i(80149),pi=i(93741),hi=i(83102),vi=i(52115),mi=i(63194),fi=i(57809),xi=i(62652),yi=i(62587),gi=i(17202);function ki(e,t,i,n,o,a,l){try{var r=e[a](l),d=r.value}catch(s){return void i(s)}r.done?t(d):Promise.resolve(d).then(n,o)}const wi=(0,Z.default)(fe.ZP).withConfig({displayName:"PoolDetailsStatsButtons__PoolDetailsStatsButtonsRow",componentId:"sc-df652eed-0"})`
  gap: 12px;
  z-index: 1;

  @media (max-width: ${Ke.j$.lg}px) {
    gap: 8px;
    position: fixed;
    bottom: 0px;
    left: 0;
    margin: 8px;
    width: calc(100% - 16px);
    background: ${({theme:e})=>e.surface1};
    padding: 12px 32px;
    border: 1px solid ${({theme:e})=>e.surface3};
    border-radius: 20px;
    backdrop-filter: blur(10px);
    & > :first-child {
      margin-right: auto;
    }
    z-index: ${yi.k.sticky};
  }
  @media (max-width: ${Ke.j$.md}px) {
    bottom: 56px;
  }
`,bi=Z.default.button.withConfig({displayName:"PoolDetailsStatsButtons__PoolButton",componentId:"sc-df652eed-1"})`
  display: flex;
  flex-direction: row;
  padding: 12px 16px 12px 12px;
  border: unset;
  border-radius: 900px;
  width: ${({$open:e})=>e?"100px":"50%"};
  gap: 8px;
  color: ${({theme:e,$open:t})=>t?e.neutral1:e.accent1};
  background-color: ${({theme:e,$open:t})=>t?e.surface1:(0,xi.jb)(12,e.accent1)};
  justify-content: center;
  transition: ${({theme:e})=>`width ${e.transition.duration.medium} ${e.transition.timing.inOut}`};
  border: ${({theme:e,$open:t})=>t&&`1px solid ${e.surface3}`};
  ${G.iV}
  @media (max-width: ${Ke.j$.lg}px) {
    width: ${({$fixedWidth:e})=>e&&"120px"};
  }
  @media (max-width: ${Ke.j$.sm}px) {
    display: ${({$hideOnMobile:e})=>e&&"none"};
    width: ${({$fixedWidth:e})=>!e&&"100%"};
  }
`,Ti=(0,Z.default)(ve.o).withConfig({displayName:"PoolDetailsStatsButtons__SwapIcon",componentId:"sc-df652eed-2"})`
  fill: ${({theme:e})=>e.accent1};
  rotate: 90deg;
`,ji=(0,Z.default)(ke.X).withConfig({displayName:"PoolDetailsStatsButtons__ButtonBubble",componentId:"sc-df652eed-3"})`
  height: 44px;
  width: 175px;
  border-radius: 900px;
`,Ii=(0,Z.default)(l.ZP).withConfig({displayName:"PoolDetailsStatsButtons__SwapModalWrapper",componentId:"sc-df652eed-4"})`
  z-index: 0;
  gap: 24px;
  visibility: ${({open:e})=>e?"visible":"hidden"};
  opacity: ${({open:e})=>e?"1":"0"};
  max-height: ${({open:e})=>e?"100vh":"0"};
  transition: ${({theme:e})=>`max-height ${e.transition.duration.medium} ${e.transition.timing.ease}`};
  padding-bottom: ${({open:e})=>e?"24px":"0"};

  ${si.R0} {
    &:before {
      background-color: unset;
    }
  }

  // Need to override the default visibility to properly hide
  ${di.Vt} {
    visibility: ${({open:e})=>e?"visible":"hidden"};
  }

  @media (max-width: ${Ke.j$.lg}px) {
    position: fixed;
    width: calc(100% - 16px);
    padding: 0px 12px 12px;
    border-radius: 24px;
    max-width: 480px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: ${yi.k.fixed};
    background: ${({theme:e})=>e.surface1};
    transition: ${({theme:e})=>`opacity ${e.transition.duration.medium} ${e.transition.timing.ease}`};
  }
`,Ci=(0,Z.default)(l.ZP).withConfig({displayName:"PoolDetailsStatsButtons__MobileBalance",componentId:"sc-df652eed-5"})`
  gap: 2px;
  display: none;
  @media (max-width: ${Ke.j$.lg}px) {
    display: flex;
  }
`;function Pi({chainId:e,token0:t,token1:i,feeTier:o,loading:a}){var r,d,s,c,u,p,h,v,x,y;const{chainId:g,account:k}=(0,Ct.G)(),{positions:w}=ri(k??"",e?[e]:void 0),b=w&&function(e,t,i,n){var o;return null===(o=e)||void 0===o?void 0:o.find((e=>{var o,a,l,r,d,s,c,u,p;return((null===(o=e)||void 0===o?void 0:o.details.token0.toLowerCase())===(null===(a=t)||void 0===a?void 0:a.address)||(null===(l=e)||void 0===l?void 0:l.details.token0.toLowerCase())===(null===(r=i)||void 0===r?void 0:r.address))&&((null===(d=e)||void 0===d?void 0:d.details.token1.toLowerCase())===(null===(s=t)||void 0===s?void 0:s.address)||(null===(c=e)||void 0===c?void 0:c.details.token1.toLowerCase())===(null===(u=i)||void 0===u?void 0:u.address))&&(null===(p=e)||void 0===p?void 0:p.details.fee)==n&&!e.closed}))}(w,t,i,o),T=null===(r=b)||void 0===r?void 0:r.details.tokenId,j=(0,hi.o)(),I=(0,Ye.s0)(),C=t&&(0,F.Pc)(t),P=i&&(0,F.Pc)(i),{data:S}=(0,pi.vv)(),{balance0:_,balance1:N,balance0Fiat:$,balance1Fiat:A}=(0,m.useMemo)((()=>{var n,o,a,l,r,d,s,c,u,p,h,v;const m=null===(l=S)||void 0===l||null===(a=l.portfolios)||void 0===a||null===(o=a[0])||void 0===o||null===(n=o.tokenBalances)||void 0===n?void 0:n.filter((t=>{var i,n;return(null===(n=t)||void 0===n||null===(i=n.token)||void 0===i?void 0:i.chain)===(0,$e.tq)({chainId:e,withFallback:!0})})),f=null===(r=m)||void 0===r?void 0:r.find((e=>{var i,n,o;return(null===(n=e)||void 0===n||null===(i=n.token)||void 0===i?void 0:i.address)===(null===(o=t)||void 0===o?void 0:o.address)})),x=null===(d=m)||void 0===d?void 0:d.find((e=>{var t,n,o;return(null===(n=e)||void 0===n||null===(t=n.token)||void 0===t?void 0:t.address)===(null===(o=i)||void 0===o?void 0:o.address)}));return{balance0:(null===(s=f)||void 0===s?void 0:s.quantity)??0,balance1:(null===(c=x)||void 0===c?void 0:c.quantity)??0,balance0Fiat:(null===(p=f)||void 0===p||null===(u=p.denominatedValue)||void 0===u?void 0:u.value)??0,balance1Fiat:(null===(v=x)||void 0===v||null===(h=v.denominatedValue)||void 0===h?void 0:h.value)??0}}),[null===(d=S)||void 0===d?void 0:d.portfolios,e,null===(s=t)||void 0===s?void 0:s.address,null===(c=i)||void 0===c?void 0:c.address]),{formatNumber:D}=(0,f.Gb)(),L=D({input:_,type:f.sw.TokenNonTx}),E=D({input:N,type:f.sw.TokenNonTx}),M=$+A,R=D({input:M,type:f.sw.PortfolioBalance}),O=function(){var t,i=(t=function*(){C&&P&&(g!==e&&e&&(yield j(e)),I(`/add/${(0,gi.H)(C)}/${(0,gi.H)(P)}/${o}${T?`/${T}`:""}`))},function(){var e=this,i=arguments;return new Promise((function(n,o){var a=t.apply(e,i);function l(e){ki(a,n,o,l,r,"next",e)}function r(e){ki(a,n,o,l,r,"throw",e)}l(void 0)}))});return function(){return i.apply(this,arguments)}}(),[B,q]=(0,m.useReducer)((e=>!e),!1),V=(0,Te.eI)(),U=V.lg,Z=!V.sm,H=(0,ui.Xp)(null===(u=t)||void 0===u?void 0:u.address,e),z=(0,ui.Xp)(null===(p=i)||void 0===p?void 0:p.address,e),W=(0,ui.em)(H,z);return!a&&C&&P?(0,n.jsxs)(l.ZP,{gap:"lg",children:[(0,n.jsxs)(wi,{children:[k&&(0,n.jsxs)(Ci,{children:[(0,n.jsx)(G.Tv.SubHeaderSmall,{children:(0,n.jsx)(X.cC,{children:"Your balances"})}),(0,n.jsxs)(fe.ZP,{gap:"8px",children:[(0,n.jsxs)(G.Tv.HeadlineSmall,{children:[L," ",C.symbol]}),(0,n.jsx)(G.Tv.HeadlineSmall,{color:"neutral3",children:"|"}),(0,n.jsxs)(G.Tv.HeadlineSmall,{children:[E," ",P.symbol]}),Boolean(M)&&!Z&&(0,n.jsxs)(G.Tv.Caption,{children:["(",R,")"]})]})]}),(0,n.jsx)(bi,{onClick:q,$open:B,$fixedWidth:Boolean(k),"data-testid":`pool-details-${B?"close":"swap"}-button`,children:B?(0,n.jsxs)(n.Fragment,{children:[U&&(0,n.jsx)(mi.Z,{size:20}),(0,n.jsx)(G.Tv.BodyPrimary,{fontWeight:535,color:"accentActive",children:(0,n.jsx)(X.cC,{children:"Close"})})]}):(0,n.jsxs)(n.Fragment,{children:[U&&(0,n.jsx)(Ti,{}),(0,n.jsx)(G.Tv.BodyPrimary,{fontWeight:535,color:"accentActive",children:(0,n.jsx)(X.cC,{children:"Swap"})})]})}),(0,n.jsxs)(bi,{onClick:O,"data-testid":"pool-details-add-liquidity-button",$fixedWidth:Boolean(k),$hideOnMobile:!0,children:[U&&(0,n.jsx)(fi.Z,{size:20}),(0,n.jsx)(G.Tv.BodyPrimary,{fontWeight:535,color:"accentActive",children:(0,n.jsx)(X.cC,{children:"Add liquidity"})})]})]}),(0,n.jsxs)(Ii,{open:B,"data-testid":"pool-details-swap-modal",children:[(0,n.jsx)(vi.HY,{syncTabToUrl:!1,chainId:e,initialInputCurrency:C,initialOutputCurrency:P,compact:!0,disableTokenInputs:e!==g}),Boolean(W)&&(0,n.jsx)(ci.Z,{tokenAddress:(W===H?null===(h=t)||void 0===h?void 0:h.address:null===(v=i)||void 0===v?void 0:v.address)??"",warning:W??ui.Jf,plural:Boolean(H&&z),tokenSymbol:W===H?null===(x=t)||void 0===x?void 0:x.symbol:null===(y=i)||void 0===y?void 0:y.symbol})]}),(0,n.jsx)(Pt.Z,{$open:B&&!U,$maxWidth:Ke.j$.lg,$zIndex:yi.k.sticky,onClick:q})]}):(0,n.jsxs)(wi,{"data-testid":"pdp-buttons-loading-skeleton",children:[(0,n.jsx)(Ci,{children:(0,n.jsx)(ji,{})}),(0,n.jsx)(ji,{}),(0,n.jsx)(ji,{})]})}const Si=e=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",...e,children:[(0,n.jsxs)("g",{clipPath:"url(#clip0_2958_135280)",children:[(0,n.jsx)("path",{d:"M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z",stroke:"#9B9B9B",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M2.46484 2.46509L9.53484 9.53509",stroke:"#9B9B9B",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,n.jsx)("defs",{children:(0,n.jsx)("clipPath",{id:"clip0_2958_135280",children:(0,n.jsx)("rect",{width:"12",height:"12",fill:"white"})})})]});var _i=i(57221),Ni=i(31744);function $i(e,t,i,n,o,a,l){try{var r=e[a](l),d=r.value}catch(s){return void i(s)}r.done?t(d):Promise.resolve(d).then(n,o)}function Ai(e){return function(){var t=this,i=arguments;return new Promise((function(n,o){var a=e.apply(t,i);function l(e){$i(a,n,o,l,r,"next",e)}function r(e){$i(a,n,o,l,r,"throw",e)}l(void 0)}))}}const Di=(0,Z.default)(l.ZP).withConfig({displayName:"PoolDetailsPositionsTable__PositionTableWrapper",componentId:"sc-829d8aa-0"})`
  gap: 24px;
  margin-top: 24px;
  width: 100%;
`,Li=(0,Z.default)(l.ZP).withConfig({displayName:"PoolDetailsPositionsTable__PositionWrapper",componentId:"sc-829d8aa-1"})`
  gap: 4px;
  background: ${({theme:e})=>e.surface2};
  border-radius: 12px;
  width: 100%;
  ${G.iV}
  padding: 16px;
`,Ei=(0,Z.default)(G.Tv.LabelMicro).withConfig({displayName:"PoolDetailsPositionsTable__FeeTier",componentId:"sc-829d8aa-2"})`
  padding: 4px 6px;
  background: ${({theme:e})=>e.surface2};
`,Mi=(0,Z.default)(fe.ZP).withConfig({displayName:"PoolDetailsPositionsTable__StatusWrapper",componentId:"sc-829d8aa-3"})`
  gap: 8px;
  width: max-content;
  margin-right: 0;
  margin-left: auto;
  color: ${({theme:e,status:t})=>t===Fi.IN_RANGE?e.success:t===Fi.OUT_OF_RANGE?e.deprecated_accentWarning:e.neutral2};
`,Ri=(0,Z.default)(fe.ZP).withConfig({displayName:"PoolDetailsPositionsTable__RangeWrapper",componentId:"sc-829d8aa-4"})`
  gap: 10px;

  @media screen and (max-width: ${Ke.j$.sm}px) {
    flex-direction: column;
    gap: 4px;
    align-items: flex-start;
  }
`,Oi=(0,Z.default)((e=>(0,n.jsx)("svg",{width:"14",height:"9",viewBox:"0 0 14 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,n.jsx)("path",{d:"M4.00284 8.5L0.184659 4.68182L4.00284 0.863636L4.65909 1.51136L1.95739 4.21307H12.1335L9.43182 1.51136L10.0881 0.863636L13.9062 4.68182L10.0881 8.5L9.43182 7.84375L12.1335 5.15057H1.95739L4.65909 7.84375L4.00284 8.5Z",fill:"#5E5E5E"})}))).withConfig({displayName:"PoolDetailsPositionsTable__StyledDoubleArrow",componentId:"sc-829d8aa-5"})`
  @media screen and (max-width: ${Ke.j$.sm}px) {
    display: none;
  }
`,Bi=(0,Z.default)(G.Tv.Caption).withConfig({displayName:"PoolDetailsPositionsTable__RangeText",componentId:"sc-829d8aa-6"})`
  width: max-content;
  white-space: nowrap;
`,qi=Z.default.div.withConfig({displayName:"PoolDetailsPositionsTable__StyledDot",componentId:"sc-829d8aa-7"})`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.success};
`;var Fi;function Vi({positionInfo:e}){const t=[(0,dt.U8)(e.details.token0,e.chainId),(0,dt.U8)(e.details.token1,e.chainId)],{chainId:i}=(0,Ct.G)(),o=(0,Ye.s0)(),a=(0,hi.o)(),l=(0,Z.useTheme)(),{formatTickPrice:r}=(0,f.Gb)(),d=(0,m.useCallback)(Ai((function*(){i!==e.chainId&&(yield a(e.chainId)),o("/pool/"+e.details.tokenId)})),[o,e.chainId,e.details.tokenId,a,i]),s=e.inRange?Fi.IN_RANGE:e.closed?Fi.CLOSED:Fi.OUT_OF_RANGE,c=e.position.token0PriceLower.invert(),u=e.position.token0PriceUpper.invert(),p={LOWER:0===parseFloat(u.toFixed(0)),UPPER:parseFloat(c.toFixed(0))>Number.MAX_SAFE_INTEGER};return(0,n.jsxs)(Li,{onClick:d,children:[(0,n.jsxs)(fe.ZP,{gap:"8px",children:[(0,n.jsx)(Ne.ge,{currencies:t,size:16}),(0,n.jsxs)(G.Tv.SubHeader,{children:[e.pool.token0.symbol,"/",e.pool.token1.symbol]}),(0,n.jsxs)(Ei,{children:[e.pool.fee/we.PM,"%"]}),(0,n.jsxs)(Mi,{status:s,children:[(0,n.jsx)(G.Tv.Caption,{color:"inherit",children:s}),s===Fi.IN_RANGE&&(0,n.jsx)(qi,{}),s===Fi.OUT_OF_RANGE&&(0,n.jsx)(_i.Z,{size:12,color:l.deprecated_accentWarning}),s===Fi.CLOSED&&(0,n.jsx)(Si,{})]})]}),(0,n.jsxs)(Ri,{children:[(0,n.jsxs)(Bi,{"data-testid":`position-min-${u.toFixed(0)}`,children:[(0,n.jsx)(X.cC,{children:"Min:"}),"\xa0",r({price:u,atLimit:p,direction:Ni.Mb.LOWER}),"\xa0",e.pool.token0.symbol,"\xa0",(0,n.jsx)(X.cC,{children:"per"}),"\xa0",e.pool.token1.symbol]}),(0,n.jsx)(Oi,{}),(0,n.jsxs)(Bi,{"data-testid":`position-max-${c.toFixed(0)}`,children:[(0,n.jsx)(X.cC,{children:"Max:"}),"\xa0",r({price:c,atLimit:p,direction:Ni.Mb.UPPER}),"\xa0",e.pool.token0.symbol,"\xa0",(0,n.jsx)(X.cC,{children:"per"}),"\xa0",e.pool.token1.symbol]})]})]})}function Xi({positions:e}){return(0,n.jsx)(Di,{children:e.map(((e,t)=>(0,n.jsx)(Vi,{positionInfo:e},`pool-position-${t}`)))})}!function(e){e.IN_RANGE="In range",e.OUT_OF_RANGE="Out of range",e.CLOSED="Closed"}(Fi||(Fi={}));var Ui,Zi=i(73705),Gi=i(66789),Hi=i(53083),zi=i(57144),Wi=i(23388),Qi=i(95625),Yi=i(39063);!function(e){e.BUY="Buy",e.SELL="Sell",e.BURN="Burn",e.MINT="Mint"}(Ui||(Ui={}));const Ki=25;var Ji=i(63945),en=i(95685);const tn=(0,Z.default)(G.dL).withConfig({displayName:"PoolDetailsTransactionsTable__StyledExternalLink",componentId:"sc-7f8ae12c-0"})`
  color: ${({theme:e})=>e.neutral2};
  stroke: ${({theme:e})=>e.neutral2};
`,nn=Z.default.div.withConfig({displayName:"PoolDetailsTransactionsTable__TableWrapper",componentId:"sc-7f8ae12c-1"})`
  min-height: 256px;
`;var on;!function(e){e[e.Timestamp=0]="Timestamp",e[e.Type=1]="Type",e[e.MakerAddress=2]="MakerAddress",e[e.FiatValue=3]="FiatValue",e[e.InputAmount=4]="InputAmount",e[e.OutputAmount=5]="OutputAmount"}(on||(on={}));const an={[on.Timestamp]:120,[on.Type]:144,[on.MakerAddress]:100,[on.FiatValue]:125,[on.InputAmount]:125,[on.OutputAmount]:125};function ln(e,t){var i,n,o;if((null===(i=t)||void 0===i?void 0:i.address)===be.dt){var a;const i=(0,F.Tz)(t.chain);return i&&e.id.toLowerCase()===(null===(a=be.Fl[i])||void 0===a?void 0:a.address.toLowerCase())}return e.id.toLowerCase()===(null===(o=t)||void 0===o||null===(n=o.address)||void 0===n?void 0:n.toLowerCase())}function rn({poolAddress:e,token0:t,token1:i,protocolVersion:o}){var a;const l=(0,F.L7)((0,$e.WN)(),{fallbackToEthereum:!0}),d=(0,en.XB)(),{formatNumber:s,formatFiatPrice:c}=(0,f.Gb)(),[u,p]=(0,m.useReducer)((e=>!e),!1),[h,v]=(0,m.useState)([Ui.BUY,Ui.SELL,Ui.BURN,Ui.MINT]),[x]=(0,m.useState)({sortBy:Ji.ri.Timestamp,sortDirection:Ji.N9.Desc}),{transactions:y,loading:g,loadMore:k,error:w}=function(e,t,i=[Ui.BUY,Ui.SELL,Ui.BURN,Ui.MINT],n,o=z.Qeo.V3,a=Ki){var l,d,s,c,u;const p=(0,Yi.ye)(Qi.FeatureFlags.V2Explore),{loading:h,error:v,data:f,fetchMore:x}=(0,z.uv5)({variables:{first:a,chain:(0,$e.tq)({chainId:t,withFallback:!0}),address:e},skip:o!==z.Qeo.V3}),{loading:y,error:g,data:k,fetchMore:w}=(0,z.arC)({variables:{first:a,chain:(0,$e.tq)({chainId:t,withFallback:!0}),address:e},skip:!t||o!==z.Qeo.V2||t!==r.ChainId.MAINNET&&!p}),b=(0,m.useRef)(!1),{transactions:T,loading:j,fetchMore:I,error:C}=o===z.Qeo.V3?{transactions:null===(d=f)||void 0===d||null===(l=d.v3Pool)||void 0===l?void 0:l.transactions,loading:h,fetchMore:x,error:v}:{transactions:null===(c=k)||void 0===c||null===(s=c.v2Pair)||void 0===s?void 0:s.transactions,loading:y,fetchMore:w,error:g},P=(0,m.useCallback)((({onComplete:e})=>{var t,i;b.current||(b.current=!0,I({variables:{cursor:null===(i=T)||void 0===i||null===(t=i[T.length-1])||void 0===t?void 0:t.timestamp},updateQuery:(t,{fetchMoreResult:i})=>{var n,a,l;if(!i)return t;null===(n=e)||void 0===n||n();const r=o===z.Qeo.V3?{v3Pool:{...i.v3Pool,transactions:[...(null===(a=t.v3Pool)||void 0===a?void 0:a.transactions)??[],...i.v3Pool.transactions]}}:{v2Pair:{...i.v2Pair,transactions:[...(null===(l=t.v2Pair)||void 0===l?void 0:l.transactions)??[],...i.v2Pair.transactions]}};return b.current=!1,r}}))}),[I,T,o]),S=(0,m.useMemo)((()=>{var e;return null===(e=T??[])||void 0===e?void 0:e.map((e=>{var t,o,a,l;if(!e)return;const r=(null===(o=parseFloat(e.token0Quantity)>0?e.token0:e.token1)||void 0===o||null===(t=o.address)||void 0===t?void 0:t.toLowerCase())===(null===(l=n)||void 0===l||null===(a=l.address)||void 0===a?void 0:a.toLowerCase()),d=e.type===z.uGm.Swap?r?Ui.SELL:Ui.BUY:e.type===z.uGm.Remove?Ui.BURN:Ui.MINT;return i.includes(d)?{timestamp:e.timestamp,transaction:e.hash,pool:{token0:{id:e.token0.address??"",symbol:e.token0.symbol??""},token1:{id:e.token1.address??"",symbol:e.token1.symbol??""}},maker:e.account,amount0:parseFloat(e.token0Quantity),amount1:parseFloat(e.token1Quantity),amountUSD:e.usdValue.value,type:d}:void 0})).filter((e=>void 0!==e))}),[T,i,null===(u=n)||void 0===u?void 0:u.address]);return(0,m.useMemo)((()=>({transactions:S,loading:j,loadMore:P,error:C})),[S,j,P,C])}(e,l.id,h,t,o),b=g||!!w,T=(0,m.useMemo)((()=>{const e=(0,Zi.Cl)();return[e.accessor((e=>e),{id:"timestamp",header:()=>(0,n.jsx)(Hi.b,{minWidth:an[on.Timestamp],justifyContent:"flex-start",children:(0,n.jsxs)(fe.ZP,{gap:"4px",children:[x.sortBy===Ji.ri.Timestamp&&(0,n.jsx)(Wi.iX,{direction:Ji.N9.Desc}),(0,n.jsx)(Wi.Hu,{$active:x.sortBy===Ji.ri.Timestamp,children:(0,n.jsx)(X.cC,{children:"Time"})})]})}),cell:e=>{var t,i,o,a;return(0,n.jsx)(Hi.b,{loading:b,minWidth:an[on.Timestamp],justifyContent:"flex-start",children:(0,n.jsx)(Wi._q,{timestamp:Number(null===(t=(i=e).getValue)||void 0===t?void 0:t.call(i).timestamp),link:(0,_e.E)(l.id,null===(o=(a=e).getValue)||void 0===o?void 0:o.call(a).transaction,_e.r.TRANSACTION)})})}}),e.accessor((e=>{let i,o;var a;if(e.type===Ui.BUY)i="success",o=(0,n.jsxs)("span",{children:[(0,n.jsx)(X.cC,{children:"Buy"}),"\xa0",null===(a=t)||void 0===a?void 0:a.symbol]});else if(e.type===Ui.SELL){var l;i="critical",o=(0,n.jsxs)("span",{children:[(0,n.jsx)(X.cC,{children:"Sell"}),"\xa0",null===(l=t)||void 0===l?void 0:l.symbol]})}else i=e.type===Ui.MINT?"success":"critical",o=e.type===Ui.MINT?(0,n.jsx)(X.cC,{children:"Add"}):(0,n.jsx)(X.cC,{children:"Remove"});return(0,n.jsx)(G.Tv.BodyPrimary,{color:i,children:o})}),{id:"swap-type",header:()=>(0,n.jsx)(Hi.b,{minWidth:an[on.Type],justifyContent:"flex-start",children:(0,n.jsxs)(Wi.j4,{modalOpen:u,onClick:()=>p(),children:[(0,n.jsx)(zi.w,{allFilters:Object.values(Ui),activeFilter:h,setFilters:v,isOpen:u,toggleFilterModal:p}),(0,n.jsx)(G.Tv.BodySecondary,{children:(0,n.jsx)(X.cC,{children:"Type"})})]})}),cell:e=>{var t,i;return(0,n.jsx)(Hi.b,{loading:b,minWidth:an[on.Type],justifyContent:"flex-start",children:null===(t=(i=e).getValue)||void 0===t?void 0:t.call(i)})}}),e.accessor((e=>e.amountUSD),{id:"fiat-value",header:()=>(0,n.jsx)(Hi.b,{minWidth:an[on.FiatValue],justifyContent:"flex-end",grow:!0,children:(0,n.jsx)(G.Tv.BodySecondary,{children:d})}),cell:e=>{var t,i;return(0,n.jsx)(Hi.b,{loading:b,minWidth:an[on.FiatValue],justifyContent:"flex-end",grow:!0,children:(0,n.jsx)(G.Tv.BodyPrimary,{children:c({price:null===(t=(i=e).getValue)||void 0===t?void 0:t.call(i)})})})}}),e.accessor((e=>ln(e.pool.token0,t)?e.amount0:e.amount1),{id:"input-amount",header:()=>{var e;return(0,n.jsx)(Hi.b,{loading:b,minWidth:an[on.InputAmount],justifyContent:"flex-end",grow:!0,children:(0,n.jsx)(G.Tv.BodySecondary,{children:null===(e=t)||void 0===e?void 0:e.symbol})})},cell:e=>{var t,i;return(0,n.jsx)(Hi.b,{loading:b,minWidth:an[on.InputAmount],justifyContent:"flex-end",grow:!0,children:(0,n.jsx)(G.Tv.BodyPrimary,{children:s({input:Math.abs((null===(t=(i=e).getValue)||void 0===t?void 0:t.call(i))??0),type:f.sw.TokenTx})})})}}),e.accessor((e=>ln(e.pool.token0,t)?e.amount1:e.amount0),{id:"output-amount",header:()=>{var e;return(0,n.jsx)(Hi.b,{loading:b,minWidth:an[on.OutputAmount],justifyContent:"flex-end",grow:!0,children:(0,n.jsx)(G.Tv.BodySecondary,{children:null===(e=i)||void 0===e?void 0:e.symbol})})},cell:e=>{var t,i;return(0,n.jsx)(Hi.b,{loading:b,minWidth:an[on.OutputAmount],justifyContent:"flex-end",grow:!0,children:(0,n.jsx)(G.Tv.BodyPrimary,{children:s({input:Math.abs((null===(t=(i=e).getValue)||void 0===t?void 0:t.call(i))??0),type:f.sw.TokenTx})})})}}),e.accessor((e=>e.maker),{id:"maker-address",header:()=>(0,n.jsx)(Hi.b,{minWidth:an[on.MakerAddress],justifyContent:"flex-end",grow:!0,children:(0,n.jsx)(G.Tv.BodySecondary,{children:(0,n.jsx)(X.cC,{children:"Wallet"})})}),cell:e=>{var t,i,o,a;return(0,n.jsx)(Hi.b,{loading:b,minWidth:an[on.MakerAddress],justifyContent:"flex-end",grow:!0,children:(0,n.jsx)(tn,{href:(0,_e.E)(l.id,null===(t=(i=e).getValue)||void 0===t?void 0:t.call(i),_e.r.ADDRESS),children:(0,n.jsx)(G.Tv.BodyPrimary,{children:(0,Se.Xn)(null===(o=(a=e).getValue)||void 0===o?void 0:o.call(a),0)})})})}})]}),[d,l.id,h,u,c,s,b,x.sortBy,t,null===(a=i)||void 0===a?void 0:a.symbol]);return(0,n.jsx)(nn,{"data-testid":"pool-details-transactions-table",children:(0,n.jsx)(Gi.i,{columns:T,data:y,loading:g,error:w,loadMore:k,maxHeight:600})})}var dn;!function(e){e.TRANSACTIONS="transactions",e.POSITIONS="positions"}(dn||(dn={}));const sn=(0,Z.default)(G.Tv.HeadlineMedium).withConfig({displayName:"PoolDetailsTable__TableHeader",componentId:"sc-52a18a5b-0"})`
  color: ${({theme:e,active:t})=>!t&&e.neutral2};
  ${({disabled:e})=>!e&&G.iV}
  user-select: none;
`;function cn({poolAddress:e,token0:t,token1:i,protocolVersion:o}){var a;const[r,s]=(0,m.useState)(dn.TRANSACTIONS),c=(0,F.L7)((0,$e.WN)(),{fallbackToEthereum:!0}),{account:u}=(0,Ct.G)(),{positions:p}=ri(u??"",[c.id]),h=(0,m.useMemo)((()=>{var t;return(null===(t=p)||void 0===t?void 0:t.filter((t=>d.Pool.getAddress(t.pool.token0,t.pool.token1,t.pool.fee).toLowerCase()===e.toLowerCase())))??[]}),[e,p]);return(0,n.jsxs)(l.ZP,{gap:"lg",children:[(0,n.jsxs)(fe.ZP,{gap:"16px",children:[(0,n.jsx)(sn,{active:r===dn.TRANSACTIONS,onClick:()=>s(dn.TRANSACTIONS),disabled:!h.length,children:(0,n.jsx)(X.cC,{children:"Transactions"})}),Boolean(h.length)&&(0,n.jsxs)(sn,{active:r===dn.POSITIONS,onClick:()=>s(dn.POSITIONS),children:[(0,n.jsx)(X.cC,{children:"Positions"}),` (${null===(a=h)||void 0===a?void 0:a.length})`]})]}),r===dn.TRANSACTIONS?(0,n.jsx)(rn,{poolAddress:e,token0:t,token1:i,protocolVersion:o}):(0,n.jsx)(Xi,{positions:h})]})}var un=i(75748);function pn(e){if(!e)return;const t=(new Date).getTime(),i=(t-Lt()("1d"))/1e3,n=(t-Lt()("2d"))/1e3,o=e.filter((e=>{var t;return void 0!==(null===(t=e)||void 0===t?void 0:t.timestamp)&&e.timestamp>=i})).reduce(((e,t)=>e+t.value),0),a=e.filter((e=>{var t;return void 0!==(null===(t=e)||void 0===t?void 0:t.timestamp)&&e.timestamp>=n&&e.timestamp<i})).reduce(((e,t)=>e+t.value),0);return(o-a)/a*100}var hn=i(3359),vn=i(46012);const mn=e=>{var t,i;const n=null===(t=e)||void 0===t?void 0:t.token0.symbol,o=null===(i=e)||void 0===i?void 0:i.token1.symbol,a=X.t`Buy and sell on Uniswap`;return n&&o?`${n}/${o}: ${a}`:a};var fn=i(37018),xn=i(437);const yn=(0,Z.default)(fe.ZP).withConfig({displayName:"PoolDetails__PageWrapper",componentId:"sc-e9016f90-0"})`
  padding: 0 16px 52px;
  justify-content: center;
  width: 100%;
  gap: 40px;
  align-items: flex-start;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    padding: 48px 20px;
  }
  @media screen and (max-width: ${({theme:e})=>e.breakpoint.lg}px) {
    flex-direction: column;
    align-items: center;
    gap: 0px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.xl}px) {
    gap: 60px;
  }
`,gn=(0,Z.default)(l.ZP).withConfig({displayName:"PoolDetails__LeftColumn",componentId:"sc-e9016f90-1"})`
  gap: 40px;
  max-width: 780px;
  overflow: hidden;
  justify-content: flex-start;

  @media (max-width: ${Ke.j$.lg}px) {
    width: 100%;
    max-width: unset;
  }
`,kn=Z.default.hr.withConfig({displayName:"PoolDetails__HR",componentId:"sc-e9016f90-2"})`
  border: 0.5px solid ${({theme:e})=>e.surface3};
  width: 100%;
`,wn=(0,Z.default)(l.ZP).withConfig({displayName:"PoolDetails__RightColumn",componentId:"sc-e9016f90-3"})`
  gap: 24px;
  width: 360px;

  @media (max-width: ${Ke.j$.lg}px) {
    margin: 44px 0px;
    width: 100%;
    min-width: unset;
    & > *:first-child {
      margin-top: -24px;
    }
  }
`,bn=(0,Z.default)(l.ZP).withConfig({displayName:"PoolDetails__TokenDetailsWrapper",componentId:"sc-e9016f90-4"})`
  gap: 24px;
  padding: 20px;

  @media (max-width: ${Ke.j$.lg}px) and (min-width: ${Ke.j$.sm}px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding: unset;
  }

  @media (max-width: ${Ke.j$.sm}px) {
    padding: unset;
  }
`,Tn=(0,Z.default)(st.xv).withConfig({displayName:"PoolDetails__TokenDetailsHeader",componentId:"sc-e9016f90-5"})`
  width: 100%;
  font-size: 24px;
  font-weight: 485;
  line-height: 32px;
`,jn=(0,Z.default)(l.ZP).withConfig({displayName:"PoolDetails__LinksContainer",componentId:"sc-e9016f90-6"})`
  gap: 16px;
  width: 100%;
`;function In(){var e,t,i,d,s,c,u,p,h,v,f,x,y,g,k,w,b,T,j,I,C,P,S,_,N,$,A,D,L,E;const{poolAddress:M}=(0,Ye.UO)(),R=(0,F.L7)((0,$e.WN)()),{data:O,loading:B}=function(e,t){var i,n;const o=(0,Yi.ye)(Qi.FeatureFlags.V2Explore),{loading:a,error:l,data:d}=(0,z.Bn1)({variables:{chain:(0,$e.tq)({chainId:t,withFallback:!0}),address:e},errorPolicy:"all"}),{loading:s,error:c,data:u}=(0,z.gyz)({variables:{chain:(0,$e.tq)({chainId:t,withFallback:!0}),address:e},skip:!t||t!==r.ChainId.MAINNET&&!o,errorPolicy:"all"});return(0,m.useMemo)((()=>{var e,i,n,p,h,v,m,f,x,y,g,k,w,b,T,j,I,C;const P=Boolean(l||c&&(t===r.ChainId.MAINNET||o)),S=Boolean(a||s&&(t===r.ChainId.MAINNET||o)),_=(null===(e=d)||void 0===e?void 0:e.v3Pool)??(null===(i=u)||void 0===i?void 0:i.v2Pair)??void 0,N=(null===(p=d)||void 0===p||null===(n=p.v3Pool)||void 0===n?void 0:n.feeTier)??un.y9;return{data:_?{address:_.address,txCount:_.txCount,protocolVersion:_.protocolVersion,token0:_.token0,tvlToken0:_.token0Supply,token0Price:null===(x=_.token0)||void 0===x||null===(f=x.project)||void 0===f||null===(m=f.markets)||void 0===m||null===(v=m[0])||void 0===v||null===(h=v.price)||void 0===h?void 0:h.value,token1:_.token1,tvlToken1:_.token1Supply,token1Price:null===(b=_.token1)||void 0===b||null===(w=b.project)||void 0===w||null===(k=w.markets)||void 0===k||null===(g=k[0])||void 0===g||null===(y=g.price)||void 0===y?void 0:y.value,feeTier:N,volumeUSD24H:null===(T=_.volume24h)||void 0===T?void 0:T.value,volumeUSD24HChange:pn(null===(j=_.historicalVolume)||void 0===j?void 0:j.concat()),tvlUSD:null===(I=_.totalLiquidity)||void 0===I?void 0:I.value,tvlUSDChange:null===(C=_.totalLiquidityPercentChange24h)||void 0===C?void 0:C.value}:void 0,error:P,loading:S}}),[t,null===(i=u)||void 0===i?void 0:i.v2Pair,null===(n=d)||void 0===n?void 0:n.v3Pool,c,l,s,a,o])}((null===(e=M)||void 0===e?void 0:e.toLowerCase())??"",null===(t=R)||void 0===t?void 0:t.id),[q,V]=(0,m.useReducer)((e=>!e),!1),U=function(e,t){var i,n,o,a;return(null===(i=e)||void 0===i?void 0:i.token0)&&(null===(n=e)||void 0===n?void 0:n.token1)&&t?[(0,F.vR)(t,null===(o=e)||void 0===o?void 0:o.token0),(0,F.vR)(t,null===(a=e)||void 0===a?void 0:a.token1)]:[void 0,void 0]}(O,null===(i=R)||void 0===i?void 0:i.id),[G,H]=q?[null===(d=U)||void 0===d?void 0:d[1],null===(s=U)||void 0===s?void 0:s[0]]:U,{darkMode:W,surface2:Q,accent1:Y}=(0,Z.useTheme)(),K=(0,hn.r)(G&&(0,F.Pc)(G),{backgroundColor:Q,darkMode:W}),J=(0,hn.r)(H&&(0,F.Pc)(H),{backgroundColor:Q,darkMode:W}),ee=!M||!R||!(0,Se.UJ)(M),te=!B&&!O||ee,ne=(0,m.useMemo)((()=>{var e,t,i;const n=`${null===(e=O)||void 0===e?void 0:e.token0.symbol}/${null===(t=O)||void 0===t?void 0:t.token1.symbol}`,o=(null===(i=R)||void 0===i?void 0:i.label)??"Ethereum";return{title:n,url:window.location.href,description:`Swap ${n} on ${o}. Trade tokens and provide liquidity. Real-time prices, charts, transaction data, and more.`}}),[null===(c=R)||void 0===c?void 0:c.label,null===(u=O)||void 0===u?void 0:u.token0.symbol,null===(p=O)||void 0===p?void 0:p.token1.symbol]),oe=(0,fn.X)(ne);return te?(0,n.jsx)(vn.default,{}):(0,n.jsxs)(Ke.f6,{token0:K!==Y?K:void 0,token1:J!==Y?J:void 0,children:[(0,n.jsxs)(xn.Helmet,{children:[(0,n.jsx)("title",{children:mn(O)}),oe.map(((e,t)=>(0,n.jsx)("meta",{...e},t)))]}),(0,n.jsx)(a.fM,{page:o.yJ.POOL_DETAILS_PAGE,properties:{poolAddress:M,chainId:null===(h=R)||void 0===h?void 0:h.id,feeTier:null===(v=O)||void 0===v?void 0:v.feeTier,token0Address:null===(f=O)||void 0===f?void 0:f.token0.address,token1Address:null===(x=O)||void 0===x?void 0:x.token1.address,token0Symbol:null===(y=O)||void 0===y?void 0:y.token0.symbol,token1Symbol:null===(g=O)||void 0===g?void 0:g.token1.symbol,token0Name:null===(k=O)||void 0===k?void 0:k.token0.name,token1Name:null===(w=O)||void 0===w?void 0:w.token1.name},shouldLogImpression:!B,children:(0,n.jsxs)(yn,{children:[(0,n.jsxs)(gn,{children:[(0,n.jsxs)(l.ZP,{gap:"20px",children:[(0,n.jsxs)(l.ZP,{children:[(0,n.jsx)(Oe,{chainId:null===(b=R)||void 0===b?void 0:b.id,poolAddress:M,token0:G,token1:H,loading:B}),(0,n.jsx)(He,{chainId:null===(T=R)||void 0===T?void 0:T.id,poolAddress:M,token0:G,token1:H,feeTier:null===(j=O)||void 0===j?void 0:j.feeTier,protocolVersion:null===(I=O)||void 0===I?void 0:I.protocolVersion,toggleReversed:V,loading:B})]}),(0,n.jsx)(ie,{poolData:O,loading:B,isReversed:q,chain:null===(C=R)||void 0===C?void 0:C.backendChain.chain})]}),(0,n.jsx)(kn,{}),(0,n.jsx)(cn,{poolAddress:M,token0:G,token1:H,protocolVersion:null===(P=O)||void 0===P?void 0:P.protocolVersion})]}),(0,n.jsxs)(wn,{children:[(0,n.jsx)(Pi,{chainId:null===(S=R)||void 0===S?void 0:S.id,token0:G,token1:H,feeTier:null===(_=O)||void 0===_?void 0:_.feeTier,loading:B}),(0,n.jsx)(bt,{poolData:O,isReversed:q,chainId:null===(N=R)||void 0===N?void 0:N.id,loading:B}),(0,n.jsxs)(bn,{children:[(0,n.jsx)(Tn,{children:(0,n.jsx)(X.cC,{children:"Links"})}),(0,n.jsxs)(jn,{children:[(0,n.jsx)(lt,{address:M,chainId:null===($=R)||void 0===$?void 0:$.id,tokens:[G,H],loading:B}),(0,n.jsx)(lt,{address:null===(A=G)||void 0===A?void 0:A.address,chainId:null===(D=R)||void 0===D?void 0:D.id,tokens:[G],loading:B}),(0,n.jsx)(lt,{address:null===(L=H)||void 0===L?void 0:L.address,chainId:null===(E=R)||void 0===E?void 0:E.id,tokens:[H],loading:B})]})]})]})]})})]})}},71997:(e,t,i)=>{i.d(t,{Ec:()=>d,mn:()=>l,x7:()=>r});var n=i(64370),o=i(18569),a=i(70854);function l(e,t){return`${e}-${t.toLowerCase()}`}function r(e){return l(e.chainId,e.isToken?e.address:n.dt)}function d(e){const t=(0,o.Tz)(e.chain),i=e.standard===a.Yn6.Native?n.dt:e.address;if(!i)throw new Error("Non-native token missing address");if(!t)throw new Error("Unsupported chain from pools query");return l(t,i)}},87270:e=>{e.exports=JSON.parse('{"Mt":[{"inputs":[],"name":"feeGrowthGlobal0X128","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeGrowthGlobal1X128","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidity","outputs":[{"internalType":"uint128","name":"","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"observations","outputs":[{"internalType":"uint32","name":"blockTimestamp","type":"uint32"},{"internalType":"int56","name":"tickCumulative","type":"int56"},{"internalType":"uint160","name":"secondsPerLiquidityCumulativeX128","type":"uint160"},{"internalType":"bool","name":"initialized","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"positions","outputs":[{"internalType":"uint128","name":"_liquidity","type":"uint128"},{"internalType":"uint256","name":"feeGrowthInside0LastX128","type":"uint256"},{"internalType":"uint256","name":"feeGrowthInside1LastX128","type":"uint256"},{"internalType":"uint128","name":"tokensOwed0","type":"uint128"},{"internalType":"uint128","name":"tokensOwed1","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"protocolFees","outputs":[{"internalType":"uint128","name":"token0","type":"uint128"},{"internalType":"uint128","name":"token1","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"slot0","outputs":[{"internalType":"uint160","name":"sqrtPriceX96","type":"uint160"},{"internalType":"int24","name":"tick","type":"int24"},{"internalType":"uint16","name":"observationIndex","type":"uint16"},{"internalType":"uint16","name":"observationCardinality","type":"uint16"},{"internalType":"uint16","name":"observationCardinalityNext","type":"uint16"},{"internalType":"uint8","name":"feeProtocol","type":"uint8"},{"internalType":"bool","name":"unlocked","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"int16","name":"wordPosition","type":"int16"}],"name":"tickBitmap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"int24","name":"tick","type":"int24"}],"name":"ticks","outputs":[{"internalType":"uint128","name":"liquidityGross","type":"uint128"},{"internalType":"int128","name":"liquidityNet","type":"int128"},{"internalType":"uint256","name":"feeGrowthOutside0X128","type":"uint256"},{"internalType":"uint256","name":"feeGrowthOutside1X128","type":"uint256"},{"internalType":"int56","name":"tickCumulativeOutside","type":"int56"},{"internalType":"uint160","name":"secondsPerLiquidityOutsideX128","type":"uint160"},{"internalType":"uint32","name":"secondsOutside","type":"uint32"},{"internalType":"bool","name":"initialized","type":"bool"}],"stateMutability":"view","type":"function"}]}')}}]);
//# sourceMappingURL=9104.4c31603e.chunk.js.map