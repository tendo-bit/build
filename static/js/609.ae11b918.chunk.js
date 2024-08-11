"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[609],{81205:(e,t,i)=>{i.d(t,{Z:()=>d});var n=i(45779),o=i(68090),r=i.n(o);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var s=(0,n.forwardRef)((function(e,t){var i=e.color,o=void 0===i?"currentColor":i,r=e.size,s=void 0===r?24:r,d=l(e,["color","size"]);return n.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),n.createElement("circle",{cx:"12",cy:"12",r:"10"}),n.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),n.createElement("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"}))}));s.propTypes={color:r().string,size:r().oneOfType([r().string,r().number])},s.displayName="Info";const d=s},37246:(e,t,i)=>{i.d(t,{Z:()=>d});var n=i(45779),o=i(68090),r=i.n(o);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var s=(0,n.forwardRef)((function(e,t){var i=e.color,o=void 0===i?"currentColor":i,r=e.size,s=void 0===r?24:r,d=l(e,["color","size"]);return n.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),n.createElement("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}),n.createElement("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}))}));s.propTypes={color:r().string,size:r().oneOfType([r().string,r().number])},s.displayName="Link";const d=s},79721:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Reflect=void 0,t.Reflect=function(){return null}},24596:function(e,t,i){var n=this&&this.__extends||function(){var e=function(t,i){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])},e(t,i)};return function(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function n(){this.constructor=t}e(t,i),t.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}(),o=this&&this.__read||function(e,t){var i="function"==typeof Symbol&&e[Symbol.iterator];if(!i)return e;var n,o,r=i.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=r.next()).done;)a.push(n.value)}catch(l){o={error:l}}finally{try{n&&!n.done&&(i=r.return)&&i.call(r)}finally{if(o)throw o.error}}return a};Object.defineProperty(t,"__esModule",{value:!0}),t.assert=t.AssertionError=void 0;var r=i(28018),a=i(62588),l=function(e){function t(t){var i=this.constructor,n=e.call(this,"Wrong assertion encountered"+(t?': "'.concat(t,'"'):""))||this;if(Object.setPrototypeOf(n,i.prototype),!n.stack)return n;try{(0,r.overwriteReadonlyProp)(n,"stack",n.stack.split("\n").filter((function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var i=o(e,2)[1];return 1!==i&&2!==i})).join("\n"))}catch(a){}return n}return n(t,e),t}(Error);t.AssertionError=l,t.assert=function(e,t){if(0===arguments.length&&(e=!0),void 0===a.assertIsRefWrapper.ref){if(!e)throw new l(t)}else a.assertIsRefWrapper.ref=void 0}},24738:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.exclude=void 0,t.exclude=function(e){var t=e instanceof Object?function(t){return e.indexOf(t)<0}:function(t){return t!==e};return function(e){return t(e)}}},34023:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.flip=void 0,t.flip=function(e,t){if(void 0!==e[t])return e[t]=!e[t]}},35109:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.id=void 0;t.id=function(e){return e}},89341:function(e,t,i){var n=this&&this.__createBinding||(Object.create?function(e,t,i,n){void 0===n&&(n=i);var o=Object.getOwnPropertyDescriptor(t,i);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,n,o)}:function(e,t,i,n){void 0===n&&(n=i),e[n]=t[i]}),o=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||n(t,e,i)};Object.defineProperty(t,"__esModule",{value:!0}),o(i(24596),t),o(i(24738),t),o(i(34023),t),o(i(35109),t),o(i(79820),t),o(i(8927),t),o(i(93353),t),o(i(13817),t),o(i(86322),t),o(i(2227),t),o(i(40855),t),o(i(79721),t),o(i(19449),t),o(i(2346),t)},13817:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.is=void 0;var n=i(62588),o=["Wrong usage of the ".concat(r.name," function refer to"),"https://docs.tsafe.dev/".concat(r.name.toLowerCase())].join(" ");function r(e){var t={};if(void 0!==n.assertIsRefWrapper.ref)throw n.assertIsRefWrapper.ref=void 0,new Error(o);return n.assertIsRefWrapper.ref=t,Promise.resolve().then((function(){if(n.assertIsRefWrapper.ref===t)throw new Error(o)})),null}t.is=r},79820:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isPromiseLike=void 0,t.isPromiseLike=function(e){return"function"==typeof(null==e?void 0:e.then)}},28018:function(e,t,i){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var o in t=arguments[i])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.overwriteReadonlyProp=void 0;var o=i(24596),r=i(13817);t.overwriteReadonlyProp=function(e,t,i){try{e[t]=i}catch(s){}if(e[t]===i)return i;var a=void 0,l=Object.getOwnPropertyDescriptor(e,t)||{enumerable:!0,configurable:!0};if(l.get)throw new Error("Probably a wrong ides to overwrite ".concat(String(t)," getter"));try{Object.defineProperty(e,t,n(n({},l),{value:i}))}catch(d){(0,o.assert)((0,r.is)(d)),a=d}if(e[t]!==i)throw a||new Error("Can't assign");return i}},40855:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.noUndefined=void 0,t.noUndefined=function(e){var t={};for(var i in e)void 0!==e[i]&&(t[i]=e[i]);return t}},86322:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.objectEntries=void 0,t.objectEntries=function(e){return Object.entries(e)}},2227:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.objectFromEntries=void 0,t.objectFromEntries=function(e){return Object.fromEntries(e)}},8927:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.objectKeys=void 0,t.objectKeys=function(e){return Object.keys(e)}},93353:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.typeGuard=void 0,t.typeGuard=function(e,t){return t}},2346:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.uncapitalize=void 0,t.uncapitalize=function(e){return e.charAt(0).toLowerCase()+e.slice(1)}},62588:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.assertIsRefWrapper=void 0;var n=i(35109);t.assertIsRefWrapper={ref:(0,n.id)(void 0)}},27279:(e,t,i)=>{i.d(t,{r:()=>d});var n,o,r,a=i(45779);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},l.apply(this,arguments)}function s(e,t){let{title:i,titleId:s,...d}=e;return a.createElement("svg",l({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},d),i?a.createElement("title",{id:s},i):null,n||(n=a.createElement("path",{d:"M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),o||(o=a.createElement("path",{d:"M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),r||(r=a.createElement("path",{d:"M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}const d=a.forwardRef(s);i.p},98961:(e,t,i)=>{i.d(t,{f3:()=>C,yY:()=>x,zG:()=>m});var n=i(92936),o=i(94284),r=i(86059),a=i(97341),l=i(50333),s=i(6823),d=i(45779),c=i(94191),p=i(43454),h=i(14411),u=i(54972),f=i(13446);const m=h.default.nav.withConfig({displayName:"BreadcrumbNav__BreadcrumbNavContainer",componentId:"sc-fd4907e9-0"})`
  display: flex;
  color: ${({theme:e})=>e.neutral2};
  font-size: 16px;
  line-height: 24px;
  align-items: center;
  gap: 4px;
  margin-bottom: 20px;
  width: fit-content;
`,x=(0,h.default)(p.rU).withConfig({displayName:"BreadcrumbNav__BreadcrumbNavLink",componentId:"sc-fd4907e9-1"})`
  display: flex;
  align-items: center;
  color: ${({theme:e})=>e.neutral2};
  transition-duration: ${({theme:e})=>e.transition.duration.fast};
  text-decoration: none;

  &:hover {
    color: ${({theme:e})=>e.neutral3};
  }
`,v=(0,h.default)(o.ZP).withConfig({displayName:"BreadcrumbNav__CurrentPageBreadcrumbContainer",componentId:"sc-fd4907e9-2"})`
  gap: 6px;
`,g=h.default.h1.withConfig({displayName:"BreadcrumbNav__PageTitleText",componentId:"sc-fd4907e9-3"})`
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
  color: ${({theme:e})=>e.neutral1};
  white-space: nowrap;
  margin: 0;
`,w=(0,h.default)(o.ZP).withConfig({displayName:"BreadcrumbNav__TokenAddressHoverContainer",componentId:"sc-fd4907e9-4"})`
  cursor: ${({isDisabled:e})=>e?"default":"pointer"};
  gap: 10px;
  white-space: nowrap;
`,y=(0,h.default)(c.Z).withConfig({displayName:"BreadcrumbNav__CopyIcon",componentId:"sc-fd4907e9-5"})`
  ${u.iV}
`,C=({address:e,currency:t,poolName:i})=>{var o,c;const{neutral2:p}=(0,h.useTheme)(),u=(0,a.eI)(),[m,x]=(0,d.useState)(!1),[C,b]=(0,l.Z)(),j=(0,d.useCallback)((()=>{b(e)}),[e,b]),_=null===(o=t)||void 0===o?void 0:o.isNative,k=(null===(c=t)||void 0===c?void 0:c.symbol)??(0,n.jsx)(s.cC,{children:"Symbol not found"}),S=u.sm,P=S&&m&&!C;return(0,n.jsxs)(v,{"aria-current":"page","data-testid":"current-breadcrumb",onMouseEnter:()=>x(!0),onMouseLeave:()=>x(!1),children:[(0,n.jsx)(g,{children:t?k:i})," ",(!t||t&&!_)&&(0,n.jsxs)(w,{"data-testid":"breadcrumb-token-address",isDisabled:!S,onClick:S?j:void 0,children:[(0,n.jsx)(r.ZP,{placement:"bottom",size:r.Oz.Max,show:C,text:s.t`Copied`,children:(0,f.Xn)(e)}),P&&(0,n.jsx)(y,{"data-testid":"breadcrumb-hover-copy",width:16,height:16,color:p})]})]})}},95757:(e,t,i)=>{i.d(t,{aU:()=>P,Tg:()=>_,r4:()=>b});var n=i(92936),o=i(70060),r=i(74118),a=i(67075),l=i(68310),s=i(94284),d=i(19478),c=i(6823),p=i(69632),h=i(45779),u=i(14411),f=i(54972),m=i(62652),x=i(66136),v=i(5402),g=i(55810);class w{_data=null;_options=null;draw(e,t){e.useBitmapCoordinateSpace((e=>this._drawImpl(e,t)))}update(e,t){this._data=e,this._options=t}_drawImpl(e,t){if(null===this._data||0===this._data.bars.length||null===this._data.visibleRange||null===this._options)return;let i=-1/0;const n=this._data.bars.map((e=>{const n=e.originalData.close>=i;i=e.originalData.close??i;return{openY:t(e.originalData.open)??0,highY:t(e.originalData.high)??0,lowY:t(e.originalData.low)??0,closeY:t(e.originalData.close)??0,x:e.x,isUp:n}})),o=this._options.radius(this._data.barSpacing);this._drawWicks(e,n,this._data.visibleRange),this._drawCandles(e,n,this._data.visibleRange,o)}_drawWicks(e,t,i){if(null===this._data||null===this._options)return;const{context:n,horizontalPixelRatio:o,verticalPixelRatio:r}=e,a=function(e){return function(e){return Math.max(1,Math.floor(e))}(e)/e}(o);for(let l=i.from;l<i.to;l++){const e=t[l];n.fillStyle=e.isUp?this._options.wickUpColor:this._options.wickDownColor;const i=(0,g.n1)(e.lowY,e.highY,r),s=(0,v.q)(e.x,o,a);n.fillRect(s.position,i.position,s.length,i.length)}}_drawCandles(e,t,i,n){if(null===this._data||null===this._options)return;const{context:o,horizontalPixelRatio:r,verticalPixelRatio:a}=e,l=function(e,t){let i=function(e,t){const i=4,n=3;if(e>=2.5&&e<=i)return Math.floor(n*t);const o=1-.2*Math.atan(Math.max(i,e)-i)/(.5*Math.PI),r=Math.floor(e*o*t),a=Math.floor(e*t),l=Math.min(r,a);return Math.max(Math.floor(t),l)}(e,t);if(i>=2){Math.floor(t)%2!==i%2&&i--}return i}(this._data.barSpacing,1);for(let s=i.from;s<i.to;s++){const e=t[s],i=(0,g.n1)(Math.min(e.openY,e.closeY),Math.max(e.openY,e.closeY),a),d=(0,v.q)(e.x,r,l);o.fillStyle=e.isUp?this._options.upColor:this._options.downColor,o.roundRect?(o.beginPath(),o.roundRect(d.position,i.position,d.length,Math.max(i.length,1),n),o.fill()):o.fillRect(d.position,i.position,d.length,i.length)}}}const y={...p.Qb,upColor:"#26a69a",downColor:"#ef5350",neutralColor:"#26a69a",wickVisible:!0,borderVisible:!0,borderColor:"#378658",borderUpColor:"#26a69a",borderDownColor:"#ef5350",wickColor:"#737375",wickUpColor:"#26a69a",wickDownColor:"#ef5350",radius:e=>e<4?0:e/3};class C{_renderer;constructor(){this._renderer=new w}priceValueBuilder(e){return[e.high,e.low,e.close]}renderer(){return this._renderer}isWhitespace(e){return void 0===e.close}update(e,t){this._renderer.update(e,t)}defaultOptions(){return y}}class b extends r.B{series;originalData;lowPriceRangeScaleFactor=1;type;minPriceLine;maxPriceLine;priceLineOptions;min;max;constructor(e,t){super(e,t),this.originalData=this.data;const{adjustedData:i,lowPriceRangeScaleFactor:n,min:o,max:r}=b.getAdjustedPrices(t.data);this.data=i,this.lowPriceRangeScaleFactor=n,this.min=o,this.max=r,this.type=t.type,this.series=this.type===l.E4.LINE?this.api.addAreaSeries():this.api.addCustomSeries(new C),this.series.setData(this.data),this.updateOptions(t),this.fitContent()}static applyPriceScaleFactor(e,t){return{time:e.time,value:(e.value||e.close)*t,open:e.open*t,close:e.close*t,high:e.high*t,low:e.low*t}}static getAdjustedPrices(e){let t=1,i=e,{min:n,max:o}=(0,a.x)(e);return o-n<.2&&(t=1e9,i=e.map((e=>this.applyPriceScaleFactor(e,t))),n*=t,o*=t),{adjustedData:i,lowPriceRangeScaleFactor:t,min:n,max:o}}updateOptions(e){var t,i;const{data:n,theme:o,type:r,locale:a,format:s}=e;if(super.updateOptions(e,{localization:{locale:a,priceFormatter:e=>s.formatFiatPrice({price:Number(e)/this.lowPriceRangeScaleFactor,type:x.sw.ChartFiatValue})},grid:{vertLines:{style:p.TD.CustomDotGrid,color:o.neutral3},horzLines:{style:p.TD.CustomDotGrid,color:o.neutral3}}}),this.type!==r&&(this.type=e.type,this.api.removeSeries(this.series),this.type===l.E4.CANDLESTICK?this.series=this.api.addCustomSeries(new C):this.series=this.api.addAreaSeries(),this.series.setData(this.data)),this.originalData!==n){this.originalData=n;const{adjustedData:e,lowPriceRangeScaleFactor:t,min:i,max:o}=b.getAdjustedPrices(n);this.data=e,this.lowPriceRangeScaleFactor=t,this.min=i,this.max=o,this.series.setData(this.data),this.fitContent()}this.series.applyOptions({priceLineVisible:!1,lastValueVisible:!1,lineType:n.length<20?p.SP.WithSteps:p.SP.Curved,lineWidth:2,lineColor:o.accent1,topColor:(0,m.jb)(12,o.accent1),bottomColor:(0,m.jb)(12,o.accent1),crosshairMarkerRadius:5,crosshairMarkerBorderColor:(0,m.jb)(30,o.accent1),crosshairMarkerBorderWidth:3,upColor:o.success,wickUpColor:o.success,downColor:o.critical,wickDownColor:o.critical,borderVisible:!1}),this.priceLineOptions={color:o.surface3,lineWidth:2,lineStyle:p.TD.Dashed,axisLabelColor:o.neutral3,axisLabelTextColor:o.neutral2},null===(t=this.minPriceLine)||void 0===t||t.applyOptions({price:this.min,...this.priceLineOptions}),null===(i=this.maxPriceLine)||void 0===i||i.applyOptions({price:this.max,...this.priceLineOptions})}onSeriesHover(e){if(e){const t=this.originalData[e.logicalIndex],i={...e,item:t};super.onSeriesHover(i)}else super.onSeriesHover(void 0);void 0===e?this.minPriceLine&&this.maxPriceLine&&(this.series.removePriceLine(this.minPriceLine),this.series.removePriceLine(this.maxPriceLine),this.minPriceLine=void 0,this.maxPriceLine=void 0):!this.minPriceLine&&!this.maxPriceLine&&this.min&&this.max&&(this.minPriceLine=this.series.createPriceLine({price:this.min,...this.priceLineOptions}),this.maxPriceLine=this.series.createPriceLine({price:this.max,...this.priceLineOptions}))}}const j=u.default.div.withConfig({displayName:"PriceChart__DeltaContainer",componentId:"sc-1ac6dc60-0"})`
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  gap: 4px;
`;function _({startingPrice:e,endingPrice:t,noColor:i}){const o=(0,d.YD)(e.close??e.value,t.close??t.value),{formatDelta:r}=(0,x.Gb)();return(0,n.jsxs)(j,{children:[(0,n.jsx)(d.Kx,{delta:o,noColor:i}),(0,n.jsx)(d.Jp,{delta:o,children:r(o)})]})}const k=(0,u.default)(f.Tv.LabelSmall).withConfig({displayName:"PriceChart__TooltipText",componentId:"sc-1ac6dc60-1"})`
  color: ${({theme:e})=>e.neutral1};
  line-height: 20px;
`;function S({data:e}){const{formatFiatPrice:t}=(0,x.Gb)();return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(k,{children:[(0,n.jsxs)(s.m0,{gap:"sm",children:[(0,n.jsx)(c.cC,{children:"Open"}),(0,n.jsx)("div",{children:t({price:e.open})})]}),(0,n.jsxs)(s.m0,{gap:"sm",children:[(0,n.jsx)(c.cC,{children:"High"}),(0,n.jsx)("div",{children:t({price:e.high})})]}),(0,n.jsxs)(s.m0,{gap:"sm",children:[(0,n.jsx)(c.cC,{children:"Low"}),(0,n.jsx)("div",{children:t({price:e.low})})]}),(0,n.jsxs)(s.m0,{gap:"sm",children:[(0,n.jsx)(c.cC,{children:"Close"}),(0,n.jsx)("div",{children:t({price:e.close})})]})]})})}function P({data:e,height:t,type:i,stale:a}){const s=e[e.length-1];return(0,n.jsx)(r.k,{Model:b,params:(0,h.useMemo)((()=>({data:e,type:i,stale:a})),[e,a,i]),height:t,TooltipBody:i===l.E4.CANDLESTICK?S:void 0,children:t=>{var i,r,a,l;return(0,n.jsx)(o._,{value:(null===(i=t??s)||void 0===i?void 0:i.value)??(null===(r=t??s)||void 0===r?void 0:r.close),additionalFields:(0,n.jsx)(_,{startingPrice:null===(a=e)||void 0===a?void 0:a[0],endingPrice:t??s}),valueFormatterType:x.sw.FiatTokenPrice,time:null===(l=t)||void 0===l?void 0:l.time})}})}},18124:(e,t,i)=>{i.d(t,{P:()=>o});var n=i(92936);const o=e=>(0,n.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"transparent",...e,children:[(0,n.jsx)("path",{d:"M5.08042 8.66148C5.08043 8.58693 5.09517 8.51313 5.12378 8.44429C5.1524 8.37546 5.19432 8.31297 5.24716 8.26038C5.30001 8.2078 5.3627 8.16617 5.43167 8.13788C5.50064 8.1096 5.57452 8.09522 5.64907 8.09557L6.59187 8.09865C6.74218 8.09865 6.88635 8.15836 6.99263 8.26465C7.09893 8.37094 7.15865 8.5151 7.15865 8.66543V12.2303C7.26478 12.1988 7.4011 12.1652 7.55026 12.1301C7.65387 12.1058 7.74621 12.0471 7.8123 11.9637C7.87839 11.8803 7.91434 11.777 7.91432 11.6705V7.24848C7.91432 7.09814 7.97403 6.95397 8.08032 6.84766C8.1866 6.74135 8.33077 6.68162 8.4811 6.68158H9.42577C9.57609 6.68162 9.72026 6.74135 9.82655 6.84766C9.93284 6.95397 9.99255 7.09814 9.99255 7.24848V11.3526C9.99255 11.3526 10.2291 11.2569 10.4595 11.1596C10.545 11.1234 10.6181 11.0629 10.6694 10.9854C10.7208 10.908 10.7482 10.8172 10.7483 10.7242V5.83152C10.7483 5.68122 10.808 5.53707 10.9143 5.43078C11.0206 5.32449 11.1647 5.26478 11.315 5.26474H12.2597C12.41 5.26474 12.5542 5.32445 12.6604 5.43075C12.7667 5.53704 12.8265 5.6812 12.8265 5.83152V9.86056C13.6455 9.267 14.4754 8.55315 15.1341 7.69474C15.2297 7.57015 15.2929 7.42383 15.3181 7.26887C15.3434 7.1139 15.3299 6.95509 15.2788 6.8066C14.9739 5.9294 14.4894 5.12551 13.856 4.44636C13.2226 3.76722 12.4544 3.22777 11.6005 2.86256C10.7467 2.49734 9.82602 2.31439 8.89742 2.32542C7.96882 2.33645 7.05275 2.54121 6.20783 2.9266C5.36291 3.31199 4.60774 3.86952 3.99066 4.56352C3.37358 5.25751 2.90817 6.07269 2.62422 6.95689C2.34027 7.84107 2.24403 8.7748 2.34166 9.69832C2.43929 10.6218 2.72863 11.5148 3.19118 12.3201C3.27176 12.459 3.39031 12.572 3.53289 12.6459C3.67548 12.7198 3.83618 12.7514 3.99614 12.7372C4.17482 12.7215 4.3973 12.6992 4.66181 12.6681C4.77695 12.655 4.88326 12.6001 4.96048 12.5137C5.0377 12.4273 5.08043 12.3155 5.08053 12.1996L5.08042 8.66148Z",fill:e.fill??"#607BEE"}),(0,n.jsx)("path",{d:"M5.05957 14.3792C6.05531 15.1036 7.23206 15.5384 8.45961 15.6356C9.68716 15.7326 10.9176 15.4883 12.0149 14.9294C13.1122 14.3705 14.0334 13.519 14.6768 12.4691C15.3201 11.4191 15.6605 10.2116 15.6601 8.98024C15.6601 8.82658 15.653 8.67457 15.6428 8.52344C13.2041 12.1605 8.70139 13.8609 5.05978 14.3786",fill:e.fill??"#607BEE"})]})},5319:(e,t,i)=>{i.d(t,{J:()=>o});var n=i(92936);const o=e=>(0,n.jsx)("svg",{stroke:"none",fill:"none",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,n.jsx)("path",{d:"m6.31991 7.43304c.16666.07333.34001.12001.51334.16001v6.34665c-.10666-.0267-.21331-.0667-.31331-.1133l-4-1.78c-.72-.32-1.18669-1.0334-1.18669-1.8267v-4.43998c0-.18.02666-.36001.07333-.52668zm6.43339-3.06c-.1734-.17333-.3734-.32-.6067-.42l-4.00003-1.77999c-.52-.23334-1.10663-.23334-1.62663 0l-4 1.77999c-.23334.1-.43336.24667-.60669.42l4.80664 2.13999c.38667.17334.83339.17334 1.22672 0zm-1.6193 3.55534c.688-.162 1.3419-.11 1.9299.09267.132.04533.2694-.044.2694-.184v-2.05733c0-.18-.0267-.36001-.0734-.52668l-4.9133 2.18c-.16667.06666-.34001.12001-.51335.16001v6.34665c.012.008.01201.008.02401.016l1.12866-.504c.11467-.0513.14868-.19.07935-.294-.482-.7207-.68736-1.636-.49203-2.5993.26067-1.28602 1.28405-2.32936 2.56076-2.63002zm3.8859 6.42402c-.0973.0973-.2253.1466-.3533.1466s-.256-.0486-.3534-.1466l-1.0333-1.0334c-.3846.252-.842.402-1.3353.402-1.348 0-2.44468-1.0966-2.44468-2.4446 0-1.34802 1.09668-2.4447 2.44468-2.4447 1.3473 0 2.444 1.09668 2.444 2.4447 0 .4933-.1494.9513-.4014 1.3353l1.0334 1.0333c.1947.1954.1947.512-.0007.7074zm-1.6313-3.0754c0-.7966-.648-1.44463-1.444-1.44463-.7967 0-1.4447.64803-1.4447 1.44463 0 .7967.648 1.4447 1.4447 1.4447.796-.0007 1.444-.6487 1.444-1.4447z"})})},88890:(e,t,i)=>{i.d(t,{T:()=>o});var n=i(92936);const o=e=>(0,n.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"transparent",...e,children:(0,n.jsx)("path",{d:"M5.12245 9.5625C5.23495 11.8725 6.01495 14.2275 7.37245 16.32C4.19245 15.615 1.76996 12.8925 1.52246 9.5625H5.12245ZM7.37245 1.67999C4.19245 2.38499 1.76996 5.1075 1.52246 8.4375H5.12245C5.23495 6.1275 6.01495 3.77249 7.37245 1.67999ZM9.14997 1.5H8.84995L8.62496 1.82249C7.19996 3.84749 6.36745 6.1725 6.24745 8.4375H11.7525C11.6325 6.1725 10.8 3.84749 9.37496 1.82249L9.14997 1.5ZM6.24745 9.5625C6.36745 11.8275 7.19996 14.1525 8.62496 16.1775L8.84995 16.5H9.14997L9.37496 16.1775C10.8 14.1525 11.6325 11.8275 11.7525 9.5625H6.24745ZM12.8775 9.5625C12.765 11.8725 11.985 14.2275 10.6275 16.32C13.8075 15.615 16.23 12.8925 16.4775 9.5625H12.8775ZM16.4775 8.4375C16.23 5.1075 13.8075 2.38499 10.6275 1.67999C11.985 3.77249 12.765 6.1275 12.8775 8.4375H16.4775Z",fill:e.fill??"#607BEE"})})},43912:(e,t,i)=>{i.d(t,{m:()=>o});var n=i(92936);const o=e=>(0,n.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,n.jsx)("path",{d:"M13 4.99092C13 4.09592 14.094 3.66096 14.709 4.31196L20.637 10.582C21.121 11.094 21.121 11.894 20.637 12.406L14.709 18.676C14.094 19.326 13 18.891 13 17.997V14.4919C5.437 14.4919 4.93602 16.962 4.96802 19.529C4.97402 20.019 4.32501 20.1811 4.08301 19.7561C3.46701 18.6751 3 17.1999 3 15.4909C3 8.99592 10 8.49702 13 8.49702V4.99092Z",fill:e.fill})})},68291:(e,t,i)=>{i.d(t,{E:()=>o});var n=i(92936);const o=e=>(0,n.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"transparent",...e,children:(0,n.jsx)("path",{d:"M12.8761 3H14.9451L10.4251 8.16609L15.7425 15.196H11.579L8.31797 10.9324L4.58662 15.196H2.51644L7.35104 9.67026L2.25 3H6.51922L9.46689 6.89708L12.8761 3ZM12.15 13.9576H13.2964L5.89628 4.17332H4.66605L12.15 13.9576Z",fill:e.fill??"#607BEE"})})},13382:(e,t,i)=>{i.d(t,{Z:()=>h});var n=i(92936),o=i(6823),r=i(45779),a=i(14411),l=i(62587);const s=a.default.div.withConfig({displayName:"PillMultiToggle__OptionsSelector",componentId:"sc-b4880fa2-0"})`
  display: flex;
  position: relative;
  justify-content: flex-end;
  gap: 12px;
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 20px;
  height: 36px;
  padding: ${4}px;
  width: 100%;
`,d=a.default.div.withConfig({displayName:"PillMultiToggle__ActivePill",componentId:"sc-b4880fa2-1"})`
  position: absolute;
  height: 28px;
  top: 3px;
  background-color: ${({theme:e})=>e.surface3};
  border-radius: 16px;
  transition: left 0.3s ease, width 0.3s ease;
`,c=a.default.button.withConfig({displayName:"PillMultiToggle__OptionButton",componentId:"sc-b4880fa2-2"})`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  font-weight: 535;
  font-size: 16px;
  padding: 8px 12px;
  border-radius: 15px;
  line-height: 20px;
  border: none;
  cursor: pointer;
  color: ${({theme:e,active:t})=>t?e.neutral1:e.neutral2};
  transition-duration: ${({theme:e})=>e.transition.duration.fast};
  z-index: ${l.k.active};
  :hover {
    ${({active:e,theme:t})=>!e&&`opacity: ${t.opacity.hover};`}
  }
`;function p(e){return"string"===typeof e?{value:e}:e}function h({options:e,currentSelected:t,onSelectOption:i}){var a,l;const h=(0,r.useMemo)((()=>e.map((()=>(0,r.createRef)()))),[e]),[u,f]=(0,r.useState)(e.map((e=>p(e).value)).indexOf(t));return(0,n.jsxs)(s,{children:[(0,n.jsx)(d,{style:{width:null===(a=h[u].current)||void 0===a?void 0:a.offsetWidth,left:null===(l=h[u].current)||void 0===l?void 0:l.offsetLeft}}),e.map(((e,r)=>{const{value:a,display:l}=p(e),s=h[r];return(0,n.jsx)(c,{ref:s,active:t===a,onClick:()=>{f(r),i(a)},children:l??(0,n.jsx)(n.Fragment,{children:(0,o.t)("{{value}}",{value:a})})},a)}))]})}},79833:(e,t,i)=>{i.d(t,{Z:()=>m});var n=i(92936),o=i(80149),r=i(2108),a=i(57221),l=i(30335),s=i(22953),d=i(14411),c=i(54972);const p=d.default.div.withConfig({displayName:"TokenSafetyMessage__Label",componentId:"sc-b2c89d48-0"})`
  width: 100%;
  padding: 12px 20px 16px;
  background-color: ${({backgroundColor:e})=>e};
  border-radius: 16px;
  border: 1px solid ${({theme:e})=>e.surface3};
  color: ${({color:e})=>e};
`,h=d.default.div.withConfig({displayName:"TokenSafetyMessage__TitleRow",componentId:"sc-b2c89d48-1"})`
  align-items: center;
  font-weight: 535;
  display: inline-flex;
`,u=(0,d.default)(s.xv).withConfig({displayName:"TokenSafetyMessage__Title",componentId:"sc-b2c89d48-2"})`
  font-weight: 535;
  font-size: 16px;
  line-height: 24px;
  margin-left: 7px;
`,f=d.default.div.withConfig({displayName:"TokenSafetyMessage__DetailsRow",componentId:"sc-b2c89d48-3"})`
  margin-top: 8px;
  font-size: 12px;
  line-height: 16px;
  color: ${({theme:e})=>e.neutral2};
`;(0,d.default)(c.dL).withConfig({displayName:"TokenSafetyMessage__StyledLink",componentId:"sc-b2c89d48-4"})`
  color: ${({theme:e})=>e.neutral1};
  font-weight: 535;
`;function m({warning:e,tokenAddress:t,plural:i=!1,tokenSymbol:s}){const d=(0,r.g)(e.level),c=(0,r.A)(e.level),{heading:m,description:x}=(0,o.N6)(e,i,s);return(0,n.jsxs)(p,{"data-cy":"token-safety-message",color:c,backgroundColor:d,children:[(0,o._x)(e)&&(0,n.jsxs)(h,{children:[e.canProceed?(0,n.jsx)(a.Z,{size:"16px"}):(0,n.jsx)(l.Z,{size:"16px"}),(0,n.jsx)(u,{marginLeft:"7px",children:e.message})]}),(0,n.jsxs)(f,{children:[m,Boolean(m)&&" ",x,Boolean(x)&&" "]})]})}},90511:(e,t,i)=>{i.d(t,{W:()=>m});var n=i(92936),o=i(68310),r=i(3167),a=i(86059),l=i(6823),s=i(45779),d=i(7797),c=i(81205),p=i(14411),h=i(12843);const u=p.css`
  border-radius: 20px;
  width: 100%;
  height: 36px;
`,f=p.css`
  min-width: 130px;
  border-radius: 16px;
  right: 0px;
`;function m({options:e,disabledOption:t,menuLabel:i,currentChartType:m,onSelectOption:x,tooltipText:v}){const g=(0,p.useTheme)(),[w,y]=(0,s.useReducer)((e=>!e),!1);return(0,n.jsx)(r.ud,{isOpen:w,toggleOpen:y,menuLabel:i??o.lU[m],internalMenuItems:(0,n.jsx)(n.Fragment,{children:e.map((e=>{const{value:i,display:s}=function(e){return"string"===typeof e?{value:e}:e}(e),p=i===t;return(0,n.jsx)(a.ud,{text:p&&(0,n.jsx)(l.cC,{children:"This setting is unavailable for the current chart"}),placement:h.isMobile?void 0:"right",children:(0,n.jsxs)(r.fQ,{onClick:()=>{p||(x(i),y())},disabled:p,children:[s??o.lU[i],i===m&&(0,n.jsx)(d.Z,{size:20,color:g.accent1}),p&&(0,n.jsx)(c.Z,{size:20,color:g.neutral2})]})},i)}))}),tooltipText:v,buttonCss:u,menuFlyoutCss:f})}},26431:(e,t,i)=>{i.d(t,{Os:()=>U,Bz:()=>Z,Yv:()=>H,ZP:()=>Y,Gn:()=>X});var n,o=i(92936),r=i(95757),a=i(96393),l=i(6992),s=i(68310),d=i(24997),c=i(18569),p=i(45779),h=i(14411),u=i(7392),f=i(13382),m=i(53950),x=i(6823),v=i(64505),g=i(76437);function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},w.apply(this,arguments)}function y(e,t){let{title:i,titleId:o,...r}=e;return p.createElement("svg",w({width:16,height:16,viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":o},r),i?p.createElement("title",{id:o},i):null,n||(n=p.createElement("path",{d:"M8.41667 15.5H7.58333C6.75 15.5 6.33333 15.0833 6.33333 14.25V1.75C6.33333 0.916667 6.75 0.5 7.58333 0.5H8.41667C9.25 0.5 9.66667 0.916667 9.66667 1.75V14.25C9.66667 15.0833 9.25 15.5 8.41667 15.5ZM15.5 8.83333V3.83333C15.5 3 15.0833 2.58333 14.25 2.58333H13.4167C12.5833 2.58333 12.1667 3 12.1667 3.83333V8.83333C12.1667 9.66667 12.5833 10.0833 13.4167 10.0833H14.25C15.0833 10.0833 15.5 9.66667 15.5 8.83333ZM3.83333 10.9167V7.58333C3.83333 6.75 3.41667 6.33333 2.58333 6.33333H1.75C0.916667 6.33333 0.5 6.75 0.5 7.58333V10.9167C0.5 11.75 0.916667 12.1667 1.75 12.1667H2.58333C3.41667 12.1667 3.83333 11.75 3.83333 10.9167Z",fill:"currentColor"})))}const C=p.forwardRef(y);i.p;var b;function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},j.apply(this,arguments)}function _(e,t){let{title:i,titleId:n,...o}=e;return p.createElement("svg",j({width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},o),i?p.createElement("title",{id:n},i):null,b||(b=p.createElement("path",{d:"M23.02 9C23.02 10.104 22.124 11 21.02 11C20.738 11 20.47 10.94 20.226 10.835L16.855 14.2061C16.96 14.4501 17.021 14.717 17.021 15C17.021 16.104 16.125 17 15.021 17C13.917 17 13.016 16.104 13.016 15C13.016 14.727 13.071 14.467 13.17 14.229L9.787 10.8459C9.551 10.9439 9.292 10.999 9.021 10.999C8.739 10.999 8.471 10.939 8.22701 10.834L4.856 14.2051C4.961 14.4491 5.022 14.716 5.022 14.999C5.022 16.103 4.126 16.999 3.022 16.999C1.918 16.999 1.017 16.103 1.017 14.999C1.017 13.895 1.90699 12.999 3.01199 12.999H3.022C3.294 12.999 3.55199 13.0541 3.78799 13.1521L7.172 9.76807C7.073 9.53107 7.017 9.27102 7.017 8.99902C7.017 7.89502 7.90699 6.99902 9.01199 6.99902H9.022C10.126 6.99902 11.022 7.89502 11.022 8.99902C11.022 9.28102 10.962 9.54897 10.856 9.79297L14.224 13.1609C14.465 13.0569 14.731 12.999 15.011 12.999H15.021C15.293 12.999 15.551 13.0541 15.787 13.1521L19.171 9.76807C19.072 9.53107 19.016 9.27102 19.016 8.99902C19.016 7.89502 19.906 6.99902 21.011 6.99902H21.021C22.125 7.00002 23.02 7.896 23.02 9Z",fill:"currentColor"})))}const k=p.forwardRef(_);i.p;var S=i(94284),P=i(97341),T=i(54972),I=i(90511);const L=(0,h.default)(S.ZP).withConfig({displayName:"AdvancedPriceChartToggle__ChartTypeRow",componentId:"sc-96ee0320-0"})`
  ${T.cw}
`,O=[{value:s.E4.LINE,icon:(0,o.jsx)(k,{width:20,height:20}),display:(0,o.jsxs)(L,{gap:"md",children:[(0,o.jsx)(k,{width:20,height:20}),s.lU[s.E4.LINE]]})},{value:s.E4.CANDLESTICK,icon:(0,o.jsx)(C,{width:20,height:20}),display:(0,o.jsxs)(L,{gap:"md",children:[(0,o.jsx)(C,{width:20,height:20}),s.lU[s.E4.CANDLESTICK]]})}],N=({currentChartType:e,onChartTypeChange:t,disableCandlestickUI:i})=>{var n,r;const a=!(0,P.eI)().sm,l=O.find((t=>t.value===e));return(0,o.jsx)(I.W,{options:O,disabledOption:i?s.E4.CANDLESTICK:void 0,menuLabel:a?null===(n=l)||void 0===n?void 0:n.display:null===(r=l)||void 0===r?void 0:r.icon,currentChartType:e,onSelectOption:t,tooltipText:a?void 0:x.t`Chart type`})};var E=i(70854),$=i(90471);function M(e){const{value:t,timestamp:i}=e;return{time:i,value:t,open:t,high:t,low:t,close:t}}function D(e){const{open:t,high:i,low:n,close:o}=e;return{time:e.timestamp,value:o.value,open:t.value,high:i.value,low:n.value,close:o.value}}const R=()=>Date.now()/1e3,z=.1;function B(e){return{values:[e.value],time:e.timestamp}}const H=356,V=[s.oX.PRICE,s.oX.VOLUME,s.oX.TVL],Z=m.W9.map((e=>({value:m.rD[e]}))),U=h.default.div.withConfig({displayName:"ChartSection__ChartActionsContainer",componentId:"sc-321cda25-0"})`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;

  @media only screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    flex-direction: column;
    gap: 16px;
  }
`,A=h.default.div.withConfig({displayName:"ChartSection__TimePeriodSelectorContainer",componentId:"sc-321cda25-1"})`
  @media only screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    width: 100%;
  }
`,F=h.default.div.withConfig({displayName:"ChartSection__ChartTypeSelectorContainer",componentId:"sc-321cda25-2"})`
  display: flex;
  gap: 8px;
  @media only screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  }
`,W=()=>(0,o.jsx)(x.cC,{children:"Unable to display historical data for the current token."});function X(e,t){const[i,n]=(0,p.useState)(c.XH.DAY),[o,r]=(0,p.useState)(s.oX.PRICE),[a,l]=(0,p.useState)(s.E4.LINE),d={address:e,chain:t,duration:(0,c.uw)(i)},h=function(e,t,i){var n,o;const[r,a]=(0,p.useReducer)((()=>!0),!1),{data:l,loading:d}=(0,E.maR)({variables:{...e,fallback:r},skip:t});return(0,p.useMemo)((()=>{var t,n,o,c,p;const{ohlc:h,priceHistory:u,price:f}=(null===(n=l)||void 0===n||null===(t=n.token)||void 0===t?void 0:t.market)??{};let m=(h?null===(o=h)||void 0===o?void 0:o.filter((e=>void 0!==e)).map(D):null===(c=u)||void 0===c?void 0:c.filter((e=>void 0!==e)).map(M))??[];const x=null===(p=f)||void 0===p?void 0:p.value;if(h){const e=m.filter((e=>0===e.value)).length;if(!h.length||e/m.length>z)return a(),{chartType:s.oX.PRICE,entries:[],loading:!0,disableCandlestickUI:!0,dataQuality:$.x1.INVALID};if(i===s.E4.LINE){let e=m[0].low,t=0,i=m[0].high,n=0;m.forEach(((o,r)=>{o.low<e&&(e=o.low,t=r),o.high>i&&(i=o.high,n=r)})),t!==m.length-1&&(m[t].value=e),n!==m.length-1&&(m[n].value=i)}else if(i===s.E4.CANDLESTICK){const e=[];for(let t=m.length%2;t<m.length;t+=2){const i=m[t],n=m[t+1],o={time:i.time,open:i.open,high:Math.max(i.high,n.high),low:Math.min(i.low,n.low),close:n.close,value:n.close};e.push(o)}m=e}}if(x&&m.length>1){const e=m[m.length-1],t=m[m.length-2],i=e.time-t.time,n=R();n-e.time<i?(e.time=n,e.value=x,e.close=x):m.push({time:n,value:x,open:x,high:x,low:x,close:x})}const v=(0,$.q6)(m,s.oX.PRICE,e.duration);return{chartType:s.oX.PRICE,entries:m,loading:d,dataQuality:v,disableCandlestickUI:r}}),[null===(o=l)||void 0===o||null===(n=o.token)||void 0===n?void 0:n.market,r,d,i,e.duration])}(d,o!==s.oX.PRICE,a),u=function(e,t){var i,n,o;const{data:r,loading:a}=(0,E.PIh)({variables:e,skip:t});return(0,p.useMemo)((()=>{var t,i,n,o;const l=(null===(o=r)||void 0===o||null===(n=o.token)||void 0===n||null===(i=n.market)||void 0===i||null===(t=i.historicalVolume)||void 0===t?void 0:t.filter((e=>void 0!==e)).map($.Yz))??[],d=(0,$.q6)(l,s.oX.VOLUME,e.duration);return{chartType:s.oX.VOLUME,entries:l,loading:a,dataQuality:d}}),[null===(o=r)||void 0===o||null===(n=o.token)||void 0===n||null===(i=n.market)||void 0===i?void 0:i.historicalVolume,a,e.duration])}(d,o!==s.oX.VOLUME),f=function(e,t){var i,n;const{data:o,loading:r}=(0,E.xiR)({variables:e,skip:t});return(0,p.useMemo)((()=>{var t,i,n,a;const{historicalTvl:l,totalValueLocked:d}=(null===(i=o)||void 0===i||null===(t=i.token)||void 0===t?void 0:t.market)??{},c=(null===(n=l)||void 0===n?void 0:n.filter((e=>void 0!==e)).map(B))??[],p=null===(a=d)||void 0===a?void 0:a.value;if(p&&c.length>1){const e=c[c.length-1],t=c[c.length-2],i=e.time-t.time,n=R();n-e.time<i?(e.time=n,e.values=[p]):c.push({time:n,values:[p]})}const h=(0,$.q6)(c,s.oX.TVL,e.duration);return{chartType:s.oX.TVL,entries:c,loading:r,dataQuality:h}}),[null===(n=o)||void 0===n||null===(i=n.token)||void 0===i?void 0:i.market,r,e.duration])}(d,o!==s.oX.TVL);return(0,p.useMemo)((()=>{const{disableCandlestickUI:e}=h,t=(()=>{switch(o){case s.oX.PRICE:return h;case s.oX.VOLUME:return u;case s.oX.TVL:return f}})();return{timePeriod:i,setTimePeriod:n,setChartType:r,priceChartType:e?s.E4.LINE:a,setPriceChartType:l,activeQuery:t,disableCandlestickUI:e}}),[o,h,u,f,i,a])}function Y(){const{activeQuery:e,timePeriod:t,priceChartType:i}=(0,g.U)().chartState;return(0,o.jsxs)("div",{"data-cy":`tdp-${e.chartType}-chart-container`,children:[(()=>{if(e.dataQuality===$.x1.INVALID)return(0,o.jsx)(u.M,{type:e.chartType,height:H,errorText:e.loading?void 0:(0,o.jsx)(W,{})});const n=e.dataQuality===$.x1.STALE;switch(e.chartType){case s.oX.PRICE:return(0,o.jsx)(r.aU,{data:e.entries,height:H,type:i,stale:n});case s.oX.VOLUME:return(0,o.jsx)(d.x,{data:e.entries,height:H,timePeriod:t,stale:n});case s.oX.TVL:return(0,o.jsx)(a.w,{data:e.entries,height:H,stale:n})}})(),(0,o.jsx)(Q,{})]})}function Q(){const{activeQuery:e,timePeriod:t,setTimePeriod:i,setChartType:n,priceChartType:r,setPriceChartType:a,disableCandlestickUI:d}=(0,g.U)().chartState,c=(0,v.Dv)(l.N);return(0,o.jsxs)(U,{children:[(0,o.jsxs)(F,{children:[e.chartType===s.oX.PRICE&&(0,o.jsx)(N,{currentChartType:r,onChartTypeChange:a,disableCandlestickUI:d}),(0,o.jsx)(I.W,{options:V,currentChartType:e.chartType,onSelectOption:e=>{n(e),e===s.oX.PRICE&&a(s.E4.LINE)}})]}),(0,o.jsx)(A,{children:(0,o.jsx)(f.Z,{options:Z,currentSelected:m.rD[t],onSelectOption:e=>{const n=(0,m.Wz)(e);var o;n===t?null===(o=c)||void 0===o||o():i(n)}})})]})}},22717:(e,t,i)=>{i.d(t,{D:()=>_,Z:()=>k});var n=i(92936),o=i(3167),r=i(69355),a=i(43912),l=i(68291),s=i(41886),d=i(50333),c=i(89464),p=i(30520),h=i(6823),u=i(45779),f=i(37246),m=i(1356),x=i(29021),v=i(14411),g=i(76623),w=i(54972),y=i(62652);const C=560,b=480,j=v.default.div.withConfig({displayName:"ShareButton__ShareAction",componentId:"sc-c3fb7e7d-0"})`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 485;
  gap: 12px;
  height: 40px;
  color: ${({theme:e})=>e.neutral1};
  cursor: pointer;
  :hover {
    background-color: ${({theme:e})=>(0,y.jb)(10,e.darkMode?g.O9.gray200:g.O9.gray300)};
  }
`;function _(e){const t=window.location.href,i=(window.screen.width-C)/2,n=(window.screen.height-b)/2;window.open(`https://twitter.com/intent/tweet?text=Check%20out%20${e}%20${t}%20via%20@Uniswap`,"newwindow",`left=${i}, top=${n}, width=${C}, height=${b}`)}function k({name:e}){const t=(0,v.useTheme)(),i=(0,u.useRef)(null),g=(0,m.Wt)(x.Lk.SHARE),y=(0,m.xk)(x.Lk.SHARE);(0,p.t)(i,g?y:void 0),(0,c.Z)(g);const C=window.location.href,[b,k]=(0,d.Z)();return(0,n.jsx)("div",{ref:i,children:(0,n.jsx)(o.ud,{isOpen:g,toggleOpen:y,menuLabel:(0,n.jsx)(a.m,{fill:t.neutral1,width:18,height:18}),tooltipText:h.t`Share`,internalMenuItems:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(j,{onClick:()=>k(C),children:[b?(0,n.jsx)(r.Y,{height:18,width:18}):(0,n.jsx)(f.Z,{width:"18px",height:"18px",color:t.neutral1}),(0,n.jsx)(w.Tv.BodyPrimary,{children:b?(0,n.jsx)(h.cC,{children:"Copied"}):(0,n.jsx)(h.cC,{children:"Copy link"})})]}),(0,n.jsxs)(j,{onClick:()=>{y(),_(e)},children:[(0,n.jsx)(l.E,{width:"18px",height:"18px",fill:t.neutral1}),(0,n.jsx)(w.Tv.BodyPrimary,{children:(0,n.jsx)(h.cC,{children:"Share to Twitter"})})]})]}),hideChevron:!0,buttonCss:s.TX,menuFlyoutCss:s.jF})})}},67968:(e,t,i)=>{i.d(t,{WQ:()=>Z,sT:()=>pe,QN:()=>U,Gy:()=>V,lJ:()=>fe,Pn:()=>A,yn:()=>F});var n=i(92936),o=i(98961),r=i(94284),a=i(6823),l=i(4168),s=i(14411),d=i(54972),c=i(56536);const p=(0,s.default)(c.nR).withConfig({displayName:"SwapSkeleton__StyledArrowWrapper",componentId:"sc-f9abb7f1-0"})`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
`,h=s.default.div.withConfig({displayName:"SwapSkeleton__LoadingWrapper",componentId:"sc-f9abb7f1-1"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: space-between;

  padding: 8px;
  border: ${({theme:e})=>`1px solid ${e.surface3}`};
  border-radius: 16px;
  background-color: ${({theme:e})=>e.surface1};
`,u=s.default.div.withConfig({displayName:"SwapSkeleton__Blob",componentId:"sc-f9abb7f1-2"})`
  background-color: ${({theme:e})=>e.surface2};
  border-radius: ${({radius:e})=>(e??4)+"px"};
  height: 56px;
  width: ${({width:e})=>e?e+"px":"100%"};
`,f=(0,s.default)(u).withConfig({displayName:"SwapSkeleton__ModuleBlob",componentId:"sc-f9abb7f1-3"})`
  background-color: ${({theme:e})=>e.surface3};
  height: 36px;
`,m=s.default.div.withConfig({displayName:"SwapSkeleton__TitleColumn",componentId:"sc-f9abb7f1-4"})`
  padding: 8px;
`,x=s.default.div.withConfig({displayName:"SwapSkeleton__Row",componentId:"sc-f9abb7f1-5"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,v=s.default.div.withConfig({displayName:"SwapSkeleton__InputColumn",componentId:"sc-f9abb7f1-6"})`
  display: flex;
  flex-flow: column;
  background-color: ${({theme:e})=>e.surface2};
  border-radius: 16px;
  display: flex;
  gap: 30px;
  padding: 48px 12px;
`,g=s.default.div.withConfig({displayName:"SwapSkeleton__OutputWrapper",componentId:"sc-f9abb7f1-7"})`
  position: relative;
`;function w(){return(0,n.jsx)(m,{children:(0,n.jsx)(d.Tv.SubHeader,{children:(0,n.jsx)(a.cC,{children:"Swap"})})})}function y(){return(0,n.jsxs)(x,{children:[(0,n.jsx)(f,{width:60}),(0,n.jsx)(f,{width:100,radius:16})]})}function C(){return(0,n.jsx)(u,{radius:16})}function b(){const e=(0,s.useTheme)();return(0,n.jsxs)(h,{children:[(0,n.jsx)(w,{}),(0,n.jsx)(v,{children:(0,n.jsx)(y,{})}),(0,n.jsxs)(g,{children:[(0,n.jsx)(p,{clickable:!1,children:(0,n.jsx)(c.Gz,{children:(0,n.jsx)(l.Z,{size:"16",color:e.neutral3})})}),(0,n.jsx)(v,{children:(0,n.jsx)(y,{})})]}),(0,n.jsx)(C,{})]})}var j=i(39671),_=i(51578),k=i(6282),S=i(66869),P=i(55874),T=i(89341),I=i(54703),L=i(7392),O=i(68310),N=i(57852),E=i(64370),$=i(18569),M=i(82743);const D=s.default.div.withConfig({displayName:"About__AboutContainer",componentId:"sc-642eb00f-0"})`
  gap: 16px;
  padding: 24px 0px;
  ${P.Sj}
`,R=(0,s.default)(d.Tv.MediumHeader).withConfig({displayName:"About__AboutHeader",componentId:"sc-642eb00f-1"})`
  font-size: 28px !important;
`;var z=i(26431),B=i(71805),H=i(41886);const V=s.default.div.withConfig({displayName:"Skeleton__TokenDetailsLayout",componentId:"sc-31fd71ed-0"})`
  display: flex;
  padding: 0 16px 52px;
  justify-content: center;
  width: 100%;
  gap: 40px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    padding: 48px 20px;
  }
  @media screen and (max-width: ${({theme:e})=>e.breakpoint.lg}px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.xl}px) {
    gap: 60px;
  }
`,Z=s.default.div.withConfig({displayName:"Skeleton__LeftPanel",componentId:"sc-31fd71ed-1"})`
  flex: 1;
  max-width: 780px;
  overflow: hidden;
  width: 100%;
`,U=s.default.div.withConfig({displayName:"Skeleton__RightPanel",componentId:"sc-31fd71ed-2"})`
  display: flex;
  padding-top: 53px;
  flex-direction: column;
  gap: 40px;
  width: ${360}px;

  @media screen and (max-width: ${({theme:e})=>e.breakpoint.lg}px) {
    width: 100%;
    max-width: 780px;
  }
`,A=s.default.div.withConfig({displayName:"Skeleton__TokenInfoContainer",componentId:"sc-31fd71ed-3"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 8px;
  margin-bottom: 20px;
  gap: 20px;
  ${P.Sj};
  animation-duration: ${({theme:e})=>e.transition.duration.medium};
`,F=s.default.div.withConfig({displayName:"Skeleton__TokenNameCell",componentId:"sc-31fd71ed-4"})`
  display: flex;
  gap: 12px;
  font-size: 20px;
  line-height: 28px;
  align-items: center;
  padding-top: 4px;
  min-width: 32px;
  @media screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    flex-direction: column;
    align-items: flex-start;
  }
`,W=(0,s.default)(M.X).withConfig({displayName:"Skeleton__DetailBubble",componentId:"sc-31fd71ed-5"})`
  height: 16px;
  width: 180px;
`,X=(0,s.default)(W).withConfig({displayName:"Skeleton__SquaredBubble",componentId:"sc-31fd71ed-6"})`
  height: 32px;
  border-radius: 8px;
`,Y=(0,s.default)(W).withConfig({displayName:"Skeleton__NavBubble",componentId:"sc-31fd71ed-7"})`
  width: 169px;
`,Q=(0,s.default)(W).withConfig({displayName:"Skeleton__TokenLogoBubble",componentId:"sc-31fd71ed-8"})`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`,G=(0,s.default)(W).withConfig({displayName:"Skeleton__TitleBubble",componentId:"sc-31fd71ed-9"})`
  height: 36px;
  width: 136px;
`,K=(0,s.default)(X).withConfig({displayName:"Skeleton__SectionBubble",componentId:"sc-31fd71ed-10"})`
  width: 120px;
`,q=(0,s.default)(W).withConfig({displayName:"Skeleton__StatTitleBubble",componentId:"sc-31fd71ed-11"})`
  width: 80px;
  margin-bottom: 4px;
`,J=(0,s.default)(X).withConfig({displayName:"Skeleton__StatBubble",componentId:"sc-31fd71ed-12"})`
  width: 116px;
`,ee=(0,s.default)(W).withConfig({displayName:"Skeleton__WideBubble",componentId:"sc-31fd71ed-13"})`
  margin-bottom: 6px;
  width: 100%;
`,te=(0,s.default)(ee).withConfig({displayName:"Skeleton__ThinTitleBubble",componentId:"sc-31fd71ed-14"})`
  width: 120px;
`,ie=(0,s.default)(ee).withConfig({displayName:"Skeleton__HalfWideBubble",componentId:"sc-31fd71ed-15"})`
  width: 50%;
`,ne=s.default.div.withConfig({displayName:"Skeleton__StatsLoadingContainer",componentId:"sc-31fd71ed-16"})`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`,oe=s.default.div.withConfig({displayName:"Skeleton__ExtraDetailsContainer",componentId:"sc-31fd71ed-17"})`
  padding-top: 24px;
`,re=s.default.div.withConfig({displayName:"Skeleton__Space",componentId:"sc-31fd71ed-18"})`
  height: ${({heightSize:e})=>`${e}px`};
`,ae=s.css`
  color: ${({theme:e})=>e.neutral3};
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  text-decoration: none;
`,le=(0,s.default)(r.ZP).withConfig({displayName:"Skeleton__LoadingFooterHeaderContainer",componentId:"sc-31fd71ed-19"})`
  align-items: center;
  ${ae}

  @media screen and (min-width: ${S.j$.md}px) {
    padding: 16px 90px 8px 0;
    position: fixed;
    bottom: 0;
    right: 0;
    justify-content: flex-end;
  }
`,se=s.default.h1.withConfig({displayName:"Skeleton__LoadingFooterHeader",componentId:"sc-31fd71ed-20"})`
  ${ae}
`,de=s.default.a.withConfig({displayName:"Skeleton__LoadingFooterLink",componentId:"sc-31fd71ed-21"})`
  ${ae}
  ${d.iV}
`;function ce(e,t,i,o){var r,l,s,d,c;let p="";var h,u;if((null===(r=e)||void 0===r?void 0:r.name)&&(null===(l=e)||void 0===l?void 0:l.symbol))p=`${null===(h=e)||void 0===h?void 0:h.name} (${null===(u=e)||void 0===u?void 0:u.symbol})`;else if(null===(s=e)||void 0===s?void 0:s.name){var f;p=null===(f=e)||void 0===f?void 0:f.name}else if(null===(d=e)||void 0===d?void 0:d.symbol){var m;p=null===(m=e)||void 0===m?void 0:m.symbol}else p=t||"";const x=o?` on ${(0,T.capitalize)(o)}`:"",v=(null===(c=e)||void 0===c?void 0:c.isNative)?p:(0,n.jsx)(de,{href:(0,I.E)(i,t,I.r.TOKEN),target:"_blank",rel:"noopener noreferrer",children:p});return(0,n.jsxs)(a.cC,{children:["token data for ",{tokenLink:v},{chainSuffix:x}]})}function pe(){return(0,n.jsx)(L.M,{dim:!0,type:O.oX.PRICE,height:z.Yv})}function he(){return(0,n.jsxs)(B.h6,{children:[(0,n.jsx)(K,{}),(0,n.jsxs)(ne,{children:[(0,n.jsxs)(B.sy,{children:[(0,n.jsxs)(B.Fy,{children:[(0,n.jsx)(q,{}),(0,n.jsx)(J,{})]}),(0,n.jsxs)(B.Fy,{children:[(0,n.jsx)(q,{}),(0,n.jsx)(J,{})]})]}),(0,n.jsxs)(B.sy,{children:[(0,n.jsxs)(B.Fy,{children:[(0,n.jsx)(q,{}),(0,n.jsx)(J,{})]}),(0,n.jsxs)(B.Fy,{children:[(0,n.jsx)(q,{}),(0,n.jsx)(J,{})]})]})]})]})}function ue(){const e=(0,$.L7)((0,N.WN)(),{fallbackToEthereum:!0}),{tokenAddress:t}=(0,k.UO)(),i=(0,j.U8)(t===E.dt?"ETH":t,e.id);return(0,n.jsxs)(Z,{children:[(0,n.jsxs)(o.zG,{"aria-label":"breadcrumb-nav",children:[(0,n.jsxs)(o.yY,{to:`/explore/${e.urlParam}`,children:[(0,n.jsx)(a.cC,{children:"Explore"})," ",(0,n.jsx)(_.Z,{size:14})]}),(0,n.jsxs)(o.yY,{to:`/explore/tokens/${e.urlParam}`,children:[(0,n.jsx)(a.cC,{children:"Tokens"})," ",(0,n.jsx)(_.Z,{size:14})]}),(0,n.jsx)(Y,{})]}),(0,n.jsx)(A,{children:(0,n.jsxs)(F,{children:[(0,n.jsx)(Q,{}),(0,n.jsx)(G,{})]})}),(0,n.jsx)(pe,{}),(0,n.jsx)(re,{heightSize:4}),(0,n.jsx)(he,{}),(0,n.jsx)(H.Hr,{}),(0,n.jsx)(D,{children:(0,n.jsx)(R,{children:(0,n.jsx)(K,{})})}),(0,n.jsx)(ee,{}),(0,n.jsx)(ee,{}),(0,n.jsx)(ie,{style:{marginBottom:"24px"}}),(0,n.jsxs)(oe,{children:[(0,n.jsx)(te,{}),(0,n.jsx)(ie,{})]}),(0,n.jsxs)(oe,{children:[(0,n.jsx)(te,{}),(0,n.jsx)(ie,{})]}),t&&(0,n.jsxs)(le,{gap:"xs",children:[(0,n.jsx)(a.cC,{children:"Loading"}),(0,n.jsx)(se,{children:ce(i,t,e.id,e.urlParam)})]})]})}function fe(){return(0,n.jsxs)(V,{children:[(0,n.jsx)(ue,{}),(0,n.jsx)(U,{children:(0,n.jsx)(b,{})})]})}},71805:(e,t,i)=>{i.d(t,{Fy:()=>f,ZP:()=>b,h6:()=>y,sy:()=>x});var n=i(92936),o=i(86059),r=i(6823),a=i(14411),l=i(54972),s=i(55874),d=i(66136),c=i(63723),p=i(57852),h=i(90090),u=i(40189);const f=a.default.div.withConfig({displayName:"StatsSection__StatWrapper",componentId:"sc-7eb8a031-0"})`
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  min-width: 121px;
  flex: 1;
  padding-top: 24px;
  padding-bottom: 0px;

  @media screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    min-width: 168px;
  }
`,m=a.default.div.withConfig({displayName:"StatsSection__TokenStatsSection",componentId:"sc-7eb8a031-1"})`
  display: flex;
  flex-wrap: wrap;
`,x=a.default.div.withConfig({displayName:"StatsSection__StatPair",componentId:"sc-7eb8a031-2"})`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`,v=(0,a.default)(l.Tv.MediumHeader).withConfig({displayName:"StatsSection__Header",componentId:"sc-7eb8a031-3"})`
  font-size: 28px !important;
  padding-top: 40px;
`,g=a.default.div.withConfig({displayName:"StatsSection__StatPrice",componentId:"sc-7eb8a031-4"})`
  margin-top: 4px;
  font-size: 28px;
  color: ${({theme:e})=>e.neutral1};
`,w=a.default.div.withConfig({displayName:"StatsSection__NoData",componentId:"sc-7eb8a031-5"})`
  color: ${({theme:e})=>e.neutral3};
  padding-top: 40px;
`,y=a.default.div.withConfig({displayName:"StatsSection__StatsWrapper",componentId:"sc-7eb8a031-6"})`
  gap: 16px;
  ${s.Sj}
`;function C({dataCy:e,value:t,title:i,description:r}){const{formatNumber:a}=(0,d.Gb)();return(0,n.jsxs)(f,{"data-cy":`${e}`,children:[(0,n.jsx)(o.ud,{disabled:!r,text:r,children:i}),(0,n.jsx)(g,{children:a({input:t,type:d.sw.FiatTokenStats})})]})}function b(e){var t,i,o,a,s,d,f,g,b,j,_,k;const{chainId:S,address:P,tokenQueryData:T}=e,I=(0,p.Nb)(S),{label:L,infoLink:O}=I?p.T_[S]:{label:void 0,infoLink:void 0},N=null===(t=T)||void 0===t?void 0:t.market,E=null===(a=T)||void 0===a||null===(o=a.project)||void 0===o||null===(i=o.markets)||void 0===i?void 0:i[0],$=null===(d=E)||void 0===d||null===(s=d.fullyDilutedValuation)||void 0===s?void 0:s.value,M=null===(g=E)||void 0===g||null===(f=g.marketCap)||void 0===f?void 0:f.value,D=null===(j=N)||void 0===j||null===(b=j.totalValueLocked)||void 0===b?void 0:b.value,R=null===(k=N)||void 0===k||null===(_=k.volume24H)||void 0===_?void 0:_.value;return D||$||M||R?(0,n.jsxs)(y,{"data-testid":"token-details-stats",children:[(0,n.jsx)(v,{children:(0,n.jsx)(r.cC,{children:"Stats"})}),(0,n.jsxs)(m,{children:[(0,n.jsxs)(x,{children:[(0,n.jsx)(C,{dataCy:"tvl",value:D,description:(0,n.jsx)(r.cC,{children:"Total value locked (TVL) is the aggregate amount of the asset available across all Uniswap v3 liquidity pools."}),title:(0,n.jsx)(r.cC,{children:"TVL"})}),(0,n.jsx)(C,{dataCy:"market-cap",value:M,description:(0,n.jsx)(r.cC,{children:"Market capitalization is the total market value of an asset's circulating supply."}),title:(0,n.jsx)(r.cC,{children:"Market cap"})})]}),(0,n.jsxs)(x,{children:[(0,n.jsx)(C,{dataCy:"fdv",value:$,description:c.h8[u.PU.FULLY_DILUTED_VALUATION],title:(0,n.jsx)(r.cC,{children:"FDV"})}),(0,n.jsx)(C,{dataCy:"volume-24h",value:R,description:(0,n.jsx)(r.cC,{children:"1 day volume is the amount of the asset that has been traded on Uniswap v3 during the past 24 hours."}),title:(0,n.jsx)(r.cC,{children:"1 day volume"})})]})]})]}):h.N0.includes(S)?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(v,{children:(0,n.jsx)(r.cC,{children:"Stats"})}),(0,n.jsx)(l.Tv.BodySecondary,{pt:"12px",children:(0,n.jsxs)(r.cC,{children:["Token stats and charts for ",{label:L}," are available on"," ",(0,n.jsx)(l.dL,{color:"currentColor",href:`${O}tokens/${P}`,children:"info.uniswap.org"})]})})]}):(0,n.jsx)(w,{"data-cy":"token-details-no-stats-data",children:"No stats available"})}},75495:(e,t,i)=>{i.d(t,{B:()=>D,F:()=>R});var n=i(92936),o=i(76078),r=i(27279),a=i(47236),l=i(69355),s=i(18124),d=i(5319),c=i(88890),p=i(43912),h=i(68291),u=i(94284),f=i(22717),m=i(41886),x=i(86059),v=i(97341),g=i(50333),w=i(30520),y=i(6823),C=i(45779),b=i(37246),j=i(14411),_=i(54972),k=i(62652),S=i(62587),P=i(54703),T=i(76437),I=i(67968);const L=j.default.div.withConfig({displayName:"TokenDetailsHeader__HeaderActionsContainer",componentId:"sc-7498b2dc-0"})`
  display: flex;
  gap: 8px;
  align-items: center;

  @media screen and (max-width: ${({theme:e})=>e.breakpoint.xs}px) {
    flex-direction: column;
    position: fixed;
    bottom: 0;
    left: 0;
    align-items: unset;
    width: 100vw;
    padding: 8px;
    background: ${({theme:e})=>e.surface2};
    border-radius: 12px 12px 0 0;
    border: ${({theme:e})=>`1px solid ${e.surface3}`};
    box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
    opacity: 1 !important;
    z-index: ${S.k.modal};
  }
`,O=(0,j.default)(r.r).withConfig({displayName:"TokenDetailsHeader__StyledMenuIcon",componentId:"sc-7498b2dc-1"})`
  padding: 8px 12px;
  border-radius: 20px;
  color: ${({theme:e})=>e.neutral1};
  background-color: ${({theme:e})=>(0,k.jb)(12,e.neutral1)};
  width: 40px;
  height: 32px;
  margin-top: 8px;
  ${_.iV}

  path {
    stroke: ${({theme:e})=>e.neutral1};
  }
`,N=(0,j.default)(u.ZP).withConfig({displayName:"TokenDetailsHeader__ActionButton",componentId:"sc-7498b2dc-2"})`
  ${m.TX}

  @media screen and (max-width: ${({theme:e})=>e.breakpoint.xs}px) {
    color: unset;
    background-color: unset;
    width: unset;

    align-items: center;
    text-decoration: none;
    cursor: pointer;
    gap: 12px;
    padding: 10px 8px;
    border-radius: 8px;
    &:hover {
      background: ${({theme:e})=>e.surface3};
      opacity: 1;
    }
  }
`,E=j.default.div.withConfig({displayName:"TokenDetailsHeader__TokenTitle",componentId:"sc-7498b2dc-3"})`
  display: flex;
  gap: 8px;
  overflow: hidden;
  white-space: nowrap;
`,$=(0,j.default)(_.Tv.SubHeaderSmall).withConfig({displayName:"TokenDetailsHeader__TokenSymbol",componentId:"sc-7498b2dc-4"})`
  font-size: 24px !important;
  line-height: inherit;
  margin-top: 0;
  margin-bottom: 0;

  text-transform: uppercase;

  @media screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    display: none;
  }
`,M=(0,j.default)(_.Tv.HeadlineMedium).withConfig({displayName:"TokenDetailsHeader__TokenName",componentId:"sc-7498b2dc-5"})`
  ${_.cw}
  font-size: 24px !important;
  min-width: 40px;
`,D=(0,j.default)(_.dL).withConfig({displayName:"TokenDetailsHeader__StyledExternalLink",componentId:"sc-7498b2dc-6"})`
  &:hover {
    // Override hover behavior from ExternalLink
    opacity: 1;
  }
`,R=()=>{var e,t,i,r;const{address:u,currency:m,tokenQuery:k}=(0,T.U)(),S=(0,j.useTheme)(),R=!(0,v.eI)().xs,[z,B]=(0,C.useReducer)((e=>!e),!1),H=(0,C.useRef)(null);(0,w.t)(H,z?B:void 0);const[V,Z]=(0,C.useReducer)((e=>!e),!1),U=(0,C.useRef)(null);(0,w.t)(U,V?Z:void 0);const A=m.symbol??(0,n.jsx)(y.cC,{children:"Symbol not found"}),F=(0,P.E)(m.chainId,u,m.isNative?P.r.NATIVE:P.r.TOKEN),{homepageUrl:W,twitterName:X}=(null===(t=k.data)||void 0===t||null===(e=t.token)||void 0===e?void 0:e.project)??{},Y=X&&`https://x.com/${X}`,Q=window.location.href,G=m.name&&m.symbol?`${m.name} (${m.symbol})`:(null===(i=m)||void 0===i?void 0:i.name)||(null===(r=m)||void 0===r?void 0:r.symbol)||"",[K,q]=(0,g.Z)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(I.yn,{children:[(0,n.jsx)(a.V,{currencies:[m],chainId:m.chainId,size:32}),(0,n.jsxs)(E,{children:[(0,n.jsx)(M,{children:m.name??(0,n.jsx)(y.cC,{children:"Name not found"})}),(0,n.jsx)($,{children:A})]})]}),(0,n.jsxs)("div",{ref:H,children:[R&&(0,n.jsx)(O,{onClick:B}),!R||R&&z?(0,n.jsxs)(L,{children:[F&&(0,n.jsx)(x.ud,{text:y.t`Explorer`,placement:"top",size:x.Oz.Max,disabled:R,children:(0,n.jsx)(D,{href:F,children:(0,n.jsxs)(N,{children:[m.chainId===o.ChainId.MAINNET?(0,n.jsx)(s.P,{width:"18px",height:"18px",fill:S.neutral1}):(0,n.jsx)(d.J,{width:"18px",height:"18px",fill:S.neutral1}),R&&(0,n.jsx)(_.Tv.BodyPrimary,{children:(0,n.jsx)(y.cC,{children:"Explorer"})})]})})}),W&&(0,n.jsx)(x.ud,{text:y.t`Website`,placement:"top",size:x.Oz.Max,disabled:R,children:(0,n.jsx)(D,{href:W,children:(0,n.jsxs)(N,{children:[(0,n.jsx)(c.T,{width:"18px",height:"18px",fill:S.neutral1}),R&&(0,n.jsx)(_.Tv.BodyPrimary,{children:(0,n.jsx)(y.cC,{children:"Website"})})]})})}),Y&&(0,n.jsx)(x.ud,{text:y.t`Twitter`,placement:"top",size:x.Oz.Max,disabled:R,children:(0,n.jsx)(D,{href:Y,children:(0,n.jsxs)(N,{children:[(0,n.jsx)(h.E,{width:"18px",height:"18px",fill:S.neutral1}),R&&(0,n.jsx)(_.Tv.BodyPrimary,{children:(0,n.jsx)(y.cC,{children:"Twitter"})})]})})}),R?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(N,{onClick:()=>q(Q),children:[K?(0,n.jsx)(l.Y,{height:18,width:18}):(0,n.jsx)(b.Z,{width:"18px",height:"18px",color:S.neutral1}),(0,n.jsx)(_.Tv.BodyPrimary,{children:K?(0,n.jsx)(y.cC,{children:"Copied"}):(0,n.jsx)(y.cC,{children:"Copy link"})})]}),(0,n.jsxs)(N,{onClick:()=>{B(),(0,f.D)(G)},children:[(0,n.jsx)(p.m,{fill:S.neutral1,width:18,height:18}),(0,n.jsx)(_.Tv.BodyPrimary,{children:(0,n.jsx)(y.cC,{children:"Share to Twitter"})})]})]}):(0,n.jsx)(f.Z,{name:G})]}):null]})]})}},41886:(e,t,i)=>{i.d(t,{Hr:()=>d,Nt:()=>h,TX:()=>l,aZ:()=>c,jF:()=>s,ou:()=>p});var n=i(36399),o=i(14411),r=i(54972),a=i(62652);const l=o.css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 8px 12px;
  border-radius: 20px;
  border: none;
  background-color: ${({theme:e})=>e.surface2};
  width: max-content;
  ${r.iV}

  // Override FilterButton background-color
  :hover {
    background-color: ${({theme:e})=>(0,a.jb)(12,e.neutral1)};
  }
  :focus {
    background-color: ${({theme:e})=>(0,a.jb)(12,e.neutral1)};
  }
`,s=o.css`
  width: 200px;
  top: 40px;
  right: 0px;
  overflow: auto;
`,d=o.default.hr.withConfig({displayName:"shared__Hr",componentId:"sc-f49cf1f2-0"})`
  background-color: ${({theme:e})=>e.surface3};
  border: none;
  height: 0.5px;
`,c=o.default.p.withConfig({displayName:"shared__NoInfoAvailable",componentId:"sc-f49cf1f2-1"})`
  color: ${({theme:e})=>e.neutral3};
  font-weight: 485;
  font-size: 16px;
`,p=o.default.div.withConfig({displayName:"shared__TruncateDescriptionButton",componentId:"sc-f49cf1f2-2"})`
  color: ${({theme:e})=>e.neutral2};
  font-weight: 485;
  font-size: 0.85em;
  padding-top: 0.5em;

  &:hover,
  &:focus {
    color: ${({theme:e})=>(0,n._j)(.1,e.neutral2)};
    cursor: pointer;
  }
`,h=(e,t=u)=>{let i=e.slice(0,t);return i=`${i.slice(0,Math.min(i.length,i.lastIndexOf(" ")))}...`,i},u=400},76437:(e,t,i)=>{i.d(t,{A:()=>l,U:()=>a});var n=i(92936),o=i(45779);const r=(0,o.createContext)(void 0);function a(){const e=(0,o.useContext)(r);if(!e)throw new Error("useTDPContext must be used within a TDPContextProvider");return e}function l({children:e,contextValue:t}){return(0,n.jsx)(r.Provider,{value:t,children:e})}}}]);
//# sourceMappingURL=609.ae11b918.chunk.js.map