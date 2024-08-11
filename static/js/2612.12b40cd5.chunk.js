"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[2612],{13901:(e,i,n)=>{n.d(i,{K:()=>t});var o=n(45779),l=n(70854);function a(e,i){var n,o,l,a,t,r,d,s,c,u,p,m,h,g,x,f,v,b,C,w,y,j,_,k,T,N,$,I,S,H,z,P,F,E,V,B,D,X,L,M,O;const G=null===(o=e)||void 0===o||null===(n=o.markets)||void 0===n?void 0:n[0];if(!i&&!(null===(t=e)||void 0===t||null===(a=t.nftContracts)||void 0===a||null===(l=a[0])||void 0===l?void 0:l.address))return{};const R={};var A;(null===(r=e)||void 0===r?void 0:r.traits)&&(null===(A=e)||void 0===A||A.traits.forEach((e=>{e.name&&e.stats&&(R[e.name]=e.stats.map((e=>({trait_type:e.name,trait_value:e.value,trait_count:e.assets}))))})));return{address:i??(null===(c=e)||void 0===c||null===(s=c.nftContracts)||void 0===s||null===(d=s[0])||void 0===d?void 0:d.address)??"",isVerified:null===(u=e)||void 0===u?void 0:u.isVerified,name:null===(p=e)||void 0===p?void 0:p.name,description:null===(m=e)||void 0===m?void 0:m.description,standard:null===(x=e)||void 0===x||null===(g=x.nftContracts)||void 0===g||null===(h=g[0])||void 0===h?void 0:h.standard,bannerImageUrl:null===(v=e)||void 0===v||null===(f=v.bannerImage)||void 0===f?void 0:f.url,stats:{num_owners:null===(b=G)||void 0===b?void 0:b.owners,floor_price:null===(w=G)||void 0===w||null===(C=w.floorPrice)||void 0===C?void 0:C.value,one_day_volume:null===(j=G)||void 0===j||null===(y=j.volume)||void 0===y?void 0:y.value,one_day_change:null===(k=G)||void 0===k||null===(_=k.volumePercentChange)||void 0===_?void 0:_.value,one_day_floor_change:null===(N=G)||void 0===N||null===(T=N.floorPricePercentChange)||void 0===T?void 0:T.value,banner_image_url:null===(I=e)||void 0===I||null===($=I.bannerImage)||void 0===$?void 0:$.url,total_supply:null===(S=e)||void 0===S?void 0:S.numAssets,total_listings:null===(z=G)||void 0===z||null===(H=z.listings)||void 0===H?void 0:H.value,total_volume:null===(F=G)||void 0===F||null===(P=F.totalVolume)||void 0===P?void 0:P.value},traits:R,marketplaceCount:null===(V=G)||void 0===V||null===(E=V.marketplaces)||void 0===E?void 0:E.map((e=>{var i;return{marketplace:(null===(i=e.marketplace)||void 0===i?void 0:i.toLowerCase())??"",count:e.listings??0,floorPrice:e.floorPrice??0}})),imageUrl:(null===(D=e)||void 0===D||null===(B=D.image)||void 0===B?void 0:B.url)??"",twitterUrl:null===(X=e)||void 0===X?void 0:X.twitterName,instagram:null===(L=e)||void 0===L?void 0:L.instagramName,discordUrl:null===(M=e)||void 0===M?void 0:M.discordUrl,externalUrl:null===(O=e)||void 0===O?void 0:O.homepageUrl,rarityVerified:!1}}function t(e,i){var n,t,r,d;const{data:s,loading:c}=(0,l.aG9)({variables:{addresses:e},skip:i}),u=null===(d=s)||void 0===d||null===(r=d.nftCollections)||void 0===r||null===(t=r.edges)||void 0===t||null===(n=t[0])||void 0===n?void 0:n.node;return(0,o.useMemo)((()=>({data:a(u,e),loading:c})),[e,c,u])}},82612:(e,i,n)=>{n.r(i),n.d(i,{default:()=>oi});var o=n(92936),l=n(5985),a=n(47583),t=n(45779),r=n(70854);function d(e,i){var n,o;const{data:l,loading:a,error:d}=(0,r.FH2)({variables:{size:e,timePeriod:i}}),s=(0,t.useMemo)((()=>{var e,i,n;return null===(n=l)||void 0===n||null===(i=n.topCollections)||void 0===i||null===(e=i.edges)||void 0===e?void 0:e.map((e=>{var i,n,o,l,a,t,r,d,s,c,u,p,m,h,g,x,f,v,b,C,w,y,j,_,k,T,N,$,I,S,H,z;const P=null===(i=e)||void 0===i?void 0:i.node;return{name:P.name,address:null===(o=P.nftContracts)||void 0===o||null===(n=o[0])||void 0===n?void 0:n.address,imageUrl:null===(l=P.image)||void 0===l?void 0:l.url,bannerImageUrl:null===(a=P.bannerImage)||void 0===a?void 0:a.url,isVerified:P.isVerified,volume:null===(d=P.markets)||void 0===d||null===(r=d[0])||void 0===r||null===(t=r.volume)||void 0===t?void 0:t.value,volumeChange:null===(u=P.markets)||void 0===u||null===(c=u[0])||void 0===c||null===(s=c.volumePercentChange)||void 0===s?void 0:s.value,floor:null===(h=P.markets)||void 0===h||null===(m=h[0])||void 0===m||null===(p=m.floorPrice)||void 0===p?void 0:p.value,floorChange:null===(f=P.markets)||void 0===f||null===(x=f[0])||void 0===x||null===(g=x.floorPricePercentChange)||void 0===g?void 0:g.value,marketCap:null===(C=P.markets)||void 0===C||null===(b=C[0])||void 0===b||null===(v=b.totalVolume)||void 0===v?void 0:v.value,percentListed:((null===(j=P.markets)||void 0===j||null===(y=j[0])||void 0===y||null===(w=y.listings)||void 0===w?void 0:w.value)??0)/((null===(k=P.nftContracts)||void 0===k||null===(_=k[0])||void 0===_?void 0:_.totalSupply)??1),owners:null===(N=P.markets)||void 0===N||null===(T=N[0])||void 0===T?void 0:T.owners,sales:null===(S=P.markets)||void 0===S||null===(I=S[0])||void 0===I||null===($=I.sales)||void 0===$?void 0:$.value,totalSupply:null===(z=P.nftContracts)||void 0===z||null===(H=z[0])||void 0===H?void 0:H.totalSupply}}))}),[null===(o=l)||void 0===o||null===(n=o.topCollections)||void 0===n?void 0:n.edges]);return{data:s,loading:a,error:d}}var s=n(78129),c=n(6282),u=n(14411),p=n(58690),m=n(76907);function h(e,i,n,o,l,a,t){try{var r=e[a](t),d=r.value}catch(s){return void n(s)}r.done?i(d):Promise.resolve(d).then(o,l)}function g(e){return function(){var i=this,n=arguments;return new Promise((function(o,l){var a=e.apply(i,n);function t(e){h(a,o,l,t,r,"next",e)}function r(e){h(a,o,l,t,r,"throw",e)}t(void 0)}))}}const x=u.default.div.withConfig({displayName:"Carousel__CarouselContainer",componentId:"sc-718aa339-0"})`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`,f=u.default.div.withConfig({displayName:"Carousel__CarouselCardContainer",componentId:"sc-718aa339-1"})`
  position: relative;
  width: 100%;
  overflow-x: hidden;
  max-width: 100%;
  height: 390px;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    max-width: 600px;
  }
`,v=(0,u.default)(m.a.div).withConfig({displayName:"Carousel__CarouselItemCard",componentId:"sc-718aa339-2"})`
  display: flex;
  justify-content: center;
  padding: 4px 12px 32px;
  position: absolute;
  will-change: transform;
  width: calc(100%);
  height: calc(100%);

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    padding: 4px 32px 32px;
  }
`,b=u.default.div.withConfig({displayName:"Carousel__CarouselItemIcon",componentId:"sc-718aa339-3"})`
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  cursor: pointer;
  display: none;
  user-select: none;
  height: calc(100%);
  padding: 4px 0 32px;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    display: flex;
  }

  :hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,C=800,w=({children:e,activeIndex:i,toggleNextSlide:n})=>{const l=(0,t.useCallback)(((i,n=e.length)=>(0,s.ef)(i,n)),[e]),a=(0,t.useCallback)(((e,i,n)=>(0,s.E)(e,i,n,l)),[l]),[r,d]=(0,m.bY)(e.length,(i=>({x:(i<e.length-1?i:-1)*C}))),c=(0,t.useRef)([0,1]),u=(0,t.useCallback)(((i,n)=>{const o=l(Math.floor(i/C)%e.length),t=n<0?e.length-2:1;d((l=>{const r=a(l,o,t),d=a(l,c.current[0],c.current[1]),u=(0,s.Z1)(o,t,r,e.length,i);return{x:-i%(C*e.length)+C*u,immediate:n<0?d>r:d<r,config:{tension:250,friction:30}}})),c.current=[o,t]}),[l,a,d,e.length]),h=(0,t.useRef)(0);(0,t.useEffect)((()=>{u(i*C,h.current)}),[i,u]);const w=(0,t.useCallback)((e=>{h.current=e,n(e)}),[n]);return(0,t.useEffect)((()=>{const e=setInterval(g((function*(){w(1)})),7e3);return()=>{clearInterval(e)}}),[w,i]),(0,o.jsxs)(x,{children:[(0,o.jsx)(b,{onClick:()=>w(-1),children:(0,o.jsx)(p.wy,{width:"16px",height:"16px"})}),(0,o.jsx)(f,{children:r.map((({x:i},n)=>(0,o.jsx)(v,{style:{x:i},children:e[n]},n)))}),(0,o.jsx)(b,{onClick:()=>w(1),children:(0,o.jsx)(p.XC,{width:"16px",height:"16px"})})]})},y=({children:e})=>(0,o.jsx)(w,{activeIndex:0,toggleNextSlide:()=>{},children:[e]});var j=n(32546),_=n(82743),k=n(13901),T=n(47263),N=n(68798),$=n(66136);const I=u.default.div.withConfig({displayName:"CarouselCard__CarouselCardBorder",componentId:"sc-a2f657bb-0"})`
  width: 100%;
  position: relative;
  border-radius: 21px;
  cursor: pointer;
  border: 1px solid transparent;
  transition-property: border-color;
  transition-duration: ${({theme:e})=>e.transition.duration.fast};
  transition-timing-function: ${({theme:e})=>e.transition.timing.inOut};

  :hover {
    border: 1px solid ${({theme:e})=>e.surface3};
  }

  ::after {
    content: '';
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 21px;
    z-index: -1;
    box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
    transition-property: opacity;
    transition-duration: ${({theme:e})=>e.transition.duration.fast};
    transition-timing-function: ${({theme:e})=>e.transition.timing.inOut};
  }

  :hover::after {
    opacity: 1;
  }
`,S=u.default.div.withConfig({displayName:"CarouselCard__CardHeaderContainer",componentId:"sc-a2f657bb-1"})`
  position: relative;
  background-image: ${({src:e})=>`url(${e})`};
  background-size: cover;
  background-position: center;
`,H=u.default.div.withConfig({displayName:"CarouselCard__LoadingCardHeaderContainer",componentId:"sc-a2f657bb-2"})`
  position: relative;
  animation: ${j.gz} 1.5s infinite;
  animation-fill-mode: both;
  background: linear-gradient(
    to left,
    ${({theme:e})=>e.surface3} 25%,
    ${({theme:e})=>e.surface3} 50%,
    ${({theme:e})=>e.surface3} 75%
  );
  will-change: background-position;
  background-size: 400%;
`,z=u.default.div.withConfig({displayName:"CarouselCard__CardHeaderColumn",componentId:"sc-a2f657bb-3"})`
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  height: 202px;
  justify-content: center;
  padding: 0 40px;
  z-index: 1;
`,P=u.default.div.withConfig({displayName:"CarouselCard__IconContainer",componentId:"sc-a2f657bb-4"})`
  display: inline-flex;
  vertical-align: text-bottom;
  margin-left: 2px;
  transform: translateY(-2px) translateX(2px);
`,F=u.default.div.withConfig({displayName:"CarouselCard__CollectionNameContainer",componentId:"sc-a2f657bb-5"})`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-align: center;
  max-height: 56px;
`,E=(0,u.default)(_.X).withConfig({displayName:"CarouselCard__LoadingCollectionNameContainer",componentId:"sc-a2f657bb-6"})`
  width: 50%;
`,V=u.default.div.withConfig({displayName:"CarouselCard__HeaderOverlay",componentId:"sc-a2f657bb-7"})`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%, rgba(0, 0, 0, 0.08));
  bottom: 0px;
  left: 0px;
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: 0;

  // overlay workaround for firefox only
  @supports (-moz-appearance: none) {
    bottom: -1px;
  }
`,B=u.default.img.withConfig({displayName:"CarouselCard__CollectionImage",componentId:"sc-a2f657bb-8"})`
  width: 86px;
  height: 86px;
  background: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  border: 2px solid ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  border-radius: 100px;
`,D=u.default.div.withConfig({displayName:"CarouselCard__LoadingCollectionImage",componentId:"sc-a2f657bb-9"})`
  width: 86px;
  height: 86px;
  border-radius: 100px;
  animation: ${j.gz} 1.5s infinite;
  animation-fill-mode: both;
  background: linear-gradient(
    to left,
    ${({theme:e})=>e.surface3} 25%,
    ${({theme:e})=>e.surface3} 50%,
    ${({theme:e})=>e.surface3} 75%
  );
  will-change: background-position;
  background-size: 400%;
`,X=(0,u.default)(_.X).withConfig({displayName:"CarouselCard__LoadingTableElement",componentId:"sc-a2f657bb-10"})`
  width: 50px;
`,L=u.default.div.withConfig({displayName:"CarouselCard__TableElement",componentId:"sc-a2f657bb-11"})`
  display: flex;
  align-items: center;
  gap: 6px;
`,M=u.default.div.withConfig({displayName:"CarouselCard__FirstColumnTextWrapper",componentId:"sc-a2f657bb-12"})``,O=u.default.div.withConfig({displayName:"CarouselCard__CardBottomContainer",componentId:"sc-a2f657bb-13"})`
  display: grid;
  flex: 1;
  gap: 8px;
  grid-template-columns: auto auto auto;
  padding: 16px 16px 20px;
`,G=u.default.img.withConfig({displayName:"CarouselCard__MarketplaceIcon",componentId:"sc-a2f657bb-14"})`
  width: 20px;
  height: 20px;
`,R=u.default.div.withConfig({displayName:"CarouselCard__CarouselCardContainer",componentId:"sc-a2f657bb-15"})`
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 20px;
  overflow: hidden;
  height: 100%;

  ${L}:nth-child(3n-1), ${X}:nth-child(3n-1) {
    justify-self: center;
  }

  ${L}:nth-child(3n), ${X}:nth-child(3n) {
    justify-self: right;
  }

  @media (max-width: ${({theme:e})=>e.breakpoint.xs}px) or ((min-width: ${({theme:e})=>e.breakpoint.sm}px) and (max-width: 880px)) {
    ${M} {
      display: none;
    }
    ${L} {
      justify-self: left !important;
    }
    ${z} {
      padding: 0 20px;
    }
  }
`,A=({marketplace:e,floorInEth:i,listings:n})=>{const{formatNumberOrString:l}=(0,$.Gb)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(L,{children:[(0,o.jsx)(G,{src:`/nft/svgs/marketplaces/${e.toLowerCase()}-grey.svg`,alt:`${e} icon`}),(0,o.jsx)(M,{children:(0,o.jsx)(N.T.BodySmall,{color:"neutral2",children:e})})]}),(0,o.jsx)(L,{children:(0,o.jsx)(N.T.BodySmall,{color:"neutral2",children:Number(i)>0?`${l({input:i,type:$.sw.NFTTokenFloorPriceTrailingZeros})} ETH`:"-"})}),(0,o.jsx)(L,{children:(0,o.jsx)(N.T.BodySmall,{color:"neutral2",children:Number(n)>0?n:"None"})})]})},U=[T.Fz.Opensea,T.Fz.X2Y2,T.Fz.LooksRare],W={[T.Fz.Opensea]:"OpenSea",[T.Fz.X2Y2]:"X2Y2",[T.Fz.LooksRare]:"LooksRare"},Y=({collection:e,onClick:i})=>{var n;const{data:l,loading:a}=(0,k.K)(e.address??""),{formatNumber:t}=(0,$.Gb)();return a?(0,o.jsx)(J,{}):(0,o.jsx)(I,{children:(0,o.jsxs)(R,{onClick:i,children:[(0,o.jsx)(q,{collection:e}),(0,o.jsx)(O,{children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(L,{children:[(0,o.jsx)(p.pD,{width:"20",height:"20"}),(0,o.jsx)(M,{children:(0,o.jsx)(N.T.SubHeaderSmall,{color:"userThemeColor",children:"Uniswap"})})]}),(0,o.jsx)(L,{children:e.floor&&(0,o.jsxs)(N.T.SubHeaderSmall,{color:"userThemeColor",children:[t({input:e.floor,type:$.sw.NFTToken})," ETH Floor"]})}),(0,o.jsx)(L,{children:(0,o.jsxs)(N.T.SubHeaderSmall,{color:"userThemeColor",children:[null===(n=l.marketplaceCount)||void 0===n?void 0:n.reduce(((e,i)=>e+i.count),0)," Listings"]})}),U.map((i=>{var n;const a=null===(n=l.marketplaceCount)||void 0===n?void 0:n.find((e=>e.marketplace===i));return a?(0,o.jsx)(A,{marketplace:W[i],listings:a.count,floorInEth:a.floorPrice},`CarouselCard-key-${e.address}-${a.marketplace}`):null}))]})})]})})},K=()=>(0,o.jsx)(o.Fragment,{children:[...Array(12)].map((e=>(0,o.jsx)(X,{},e)))}),Z=(0,u.default)(N.T.MediumHeader).withConfig({displayName:"CarouselCard__CollectionName",componentId:"sc-a2f657bb-16"})`
  display: inline;
  vertical-align: text-bottom;
  line-height: 28px;
`,q=({collection:e})=>(0,o.jsxs)(S,{src:e.bannerImageUrl??"",children:[(0,o.jsxs)(z,{children:[(0,o.jsx)(B,{src:e.imageUrl}),(0,o.jsxs)(F,{children:[(0,o.jsx)(Z,{color:"deprecated_accentTextLightPrimary",fontWeight:"500",children:e.name}),e.isVerified&&(0,o.jsx)(P,{children:(0,o.jsx)(p.SA,{width:"24px",height:"24px"})})]})]}),(0,o.jsx)(V,{})]}),J=({collection:e})=>(0,o.jsx)(I,{children:(0,o.jsxs)(R,{children:[e?(0,o.jsx)(q,{collection:e}):(0,o.jsxs)(H,{children:[(0,o.jsxs)(z,{children:[(0,o.jsx)(D,{}),(0,o.jsx)(E,{})]}),(0,o.jsx)(V,{})]}),(0,o.jsx)(O,{children:(0,o.jsx)(K,{})})]})}),Q=u.default.div.withConfig({displayName:"Banner__BannerContainer",componentId:"sc-714be4ba-0"})`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 22px;
  position: relative;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding: 32px 16px;
  }
`,ee=u.default.div.withConfig({displayName:"Banner__BannerMainArea",componentId:"sc-714be4ba-1"})`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  gap: 36px;
  max-width: ${({theme:e})=>e.maxWidth};
  justify-content: space-between;
  z-index: 2;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex-direction: column;
    height: 100%;
    gap: 14px;
    margin-top: 4px;
    margin-bottom: 6px;
  }
`,ie=u.default.div.withConfig({displayName:"Banner__HeaderContainer",componentId:"sc-714be4ba-2"})`
  display: flex;
  max-width: 500px;
  font-weight: 535;
  font-size: 72px;
  line-height: 88px;
  align-self: center;
  flex-shrink: 0;
  padding-bottom: 32px;

  color: ${({theme:e})=>e.neutral1};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.lg}px`}) {
    font-size: 48px;
    line-height: 67px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    font-size: 36px;
    line-height: 50px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    line-height: 43px;
    text-align: center;
    padding-bottom: 16px;

    br {
      display: none;
    }
  }

  /* Custom breakpoint to split into two lines on smaller screens */
  @media only screen and (max-width: 550px) {
    font-size: 28px;
    line-height: 34px;
    padding-bottom: 0;

    br {
      display: unset;
    }
  }
`,ne=["0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb"],oe=()=>{const e=(0,c.s0)(),{data:i}=d(5+ne.length,r._uu.Day),n=(0,t.useMemo)((()=>{var e;return null===(e=i)||void 0===e?void 0:e.filter((e=>e.address&&!ne.includes(e.address))).slice(0,5)}),[i]),[l,a]=(0,t.useState)(0),u=(0,t.useCallback)((e=>{n&&a((i=>(0,s.ef)(i+e,n.length)))}),[n]);return(0,o.jsx)(Q,{children:(0,o.jsxs)(ee,{children:[(0,o.jsxs)(ie,{children:["Better prices. ",(0,o.jsx)("br",{}),"More listings."]}),n?(0,o.jsx)(w,{activeIndex:l,toggleNextSlide:u,children:n.map((i=>(0,o.jsx)(Y,{collection:i,onClick:()=>e(`/nfts/collection/${i.address}`)},i.address)))}):(0,o.jsx)(y,{children:(0,o.jsx)(J,{})})]})})};var le=n(68588),ae=n(79132),te=n(54972),re=n(66284),de=n(19478),se=n(97341);n(57995),n(49484);const ce=u.default.div.withConfig({displayName:"Cells__TruncatedText",componentId:"sc-4eb0bc9a-0"})`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,ue=(0,u.default)(ce).withConfig({displayName:"Cells__CollectionNameContainer",componentId:"sc-4eb0bc9a-1"})`
  display: flex;
  padding: 14px 0px 14px 8px;
  align-items: center;
`,pe=(0,u.default)(ce).withConfig({displayName:"Cells__CollectionName",componentId:"sc-4eb0bc9a-2"})`
  margin-left: 8px;
`,me=(0,u.default)(te.Tv.SubHeader).withConfig({displayName:"Cells__TruncatedSubHeader",componentId:"sc-4eb0bc9a-3"})`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,he=(0,u.default)(te.Tv.SubHeaderSmall).withConfig({displayName:"Cells__TruncatedSubHeaderSmall",componentId:"sc-4eb0bc9a-4"})`
  color: ${({theme:e})=>`${e.neutral1}`};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,ge=u.default.div.withConfig({displayName:"Cells__RoundedImage",componentId:"sc-4eb0bc9a-5"})`
  height: 36px;
  width: 36px;
  border-radius: 36px;
  background: ${({src:e,theme:i})=>e?`url(${e})`:i.surface2};
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
`,xe=u.default.div.withConfig({displayName:"Cells__ChangeCellContainer",componentId:"sc-4eb0bc9a-6"})`
  display: flex;
  color: ${({theme:e,change:i})=>i>=0?e.success:e.critical};
  justify-content: flex-end;
  align-items: center;
  gap: 2px;
`,fe=u.default.div.withConfig({displayName:"Cells__EthContainer",componentId:"sc-4eb0bc9a-7"})`
  display: flex;
  justify-content: flex-end;
`,ve=({value:e})=>{const i=(0,se.dD)();return(0,o.jsxs)(ue,{children:[(0,o.jsx)(ge,{src:e.logo}),(0,o.jsx)(pe,{children:i?(0,o.jsx)(he,{children:e.name}):(0,o.jsx)(me,{children:e.name})}),e.isVerified&&(0,o.jsx)("span",{className:"rgw6ezl3 rgw6ez453 rgw6ez2o3 rgw6ez19r rgw6ez12r rgw6ez45x",children:(0,o.jsx)(p.SA,{})})]})},be=({value:e})=>{const{formatNumberOrString:i}=(0,$.Gb)();return(0,o.jsx)("span",{children:e.value?i({input:e.value,type:$.sw.NFTCollectionStats}):"-"})},Ce=(e,i,n,o)=>e===T.VG.ETH?n:o&&n?o*(i?parseFloat((0,re.formatEther)(n)):n):void 0,we=({value:e,denomination:i,usdPrice:n})=>{const{formatNumberOrString:l}=(0,$.Gb)(),a=Ce(i,!1,e,n),t=i===T.VG.ETH,r=l({input:a,type:t?$.sw.NFTToken:$.sw.FiatTokenStats})+(t?" ETH":""),d=(0,se.dD)()?te.Tv.BodySmall:te.Tv.BodyPrimary;return(0,o.jsx)(fe,{children:(0,o.jsx)(d,{children:e?r:"-"})})},ye=({value:e})=>(0,o.jsx)(te.Tv.BodyPrimary,{children:e}),je=({value:e,denomination:i,usdPrice:n})=>{const{formatNumberOrString:l}=(0,$.Gb)(),a=Ce(i,!1,e,n),t=i===T.VG.ETH,r=l({input:a,type:t?$.sw.WholeNumber:$.sw.FiatTokenStats})+(t?" ETH":"");return(0,o.jsx)(fe,{children:(0,o.jsx)(te.Tv.BodyPrimary,{children:r})})},_e=({change:e,children:i})=>{const n=(0,se.dD)()?te.Tv.BodySmall:te.Tv.BodyPrimary;return(0,o.jsxs)(xe,{change:e??0,children:[(0,o.jsx)(de.Kx,{delta:e}),(0,o.jsx)(n,{color:"currentColor",children:i||`${e?Math.abs(Math.round(e)):0}%`})]})};var ke=n(98643),Te=n(91527),Ne=n(40403),$e=n(72993),Ie=n(3805),Se="_1mor7veh rgw6ezd3 rgw6ezbf rgw6eze9 rgw6ez2of rgw6ez27x rgw6ez1jl rgw6ez463 rgw6ez48x",He="_1mor7vea rgw6ez4qf rgw6ez16r rgw6ez80x rgw6ez7zl",ze="_1mor7ved rgw6ezd3 rgw6ezb9 rgw6eze3 rgw6ez4bf rgw6ez2or rgw6ez289",Pe="rgw6ezr9 rgw6ez55f rgw6ez895 rgw6ez805";const Fe=u.default.div.withConfig({displayName:"Table__RankCellContainer",componentId:"sc-d8f49df3-0"})`
  display: flex;
  align-items: center;
  padding-left: 24px;
  gap: 12px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding-left: 8px;
  }
`,Ee=u.default.tr.withConfig({displayName:"Table__StyledRow",componentId:"sc-d8f49df3-1"})`
  cursor: pointer;
  :hover {
    background: ${({theme:e})=>e.surface3};
  }
  :active {
    background: ${({theme:e})=>e.deprecated_stateOverlayPressed};
  }
`,Ve=u.default.tr.withConfig({displayName:"Table__StyledLoadingRow",componentId:"sc-d8f49df3-2"})`
  height: 80px;
`,Be=u.default.th.withConfig({displayName:"Table__StyledHeader",componentId:"sc-d8f49df3-3"})`
  ${({disabled:e})=>!e&&"cursor: pointer;"}

  :hover {
    ${({theme:e,disabled:i})=>!i&&`opacity: ${e.opacity.hover};`}
  }

  :active {
    ${({theme:e,disabled:i})=>!i&&`opacity: ${e.opacity.click};`}
  }
`,De=u.default.div.withConfig({displayName:"Table__StyledLoadingHolder",componentId:"sc-d8f49df3-4"})`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`,Xe=u.default.div.withConfig({displayName:"Table__StyledCollectionNameHolder",componentId:"sc-d8f49df3-5"})`
  display: flex;
  margin-left: 24px;
  gap: 8px;
  align-items: center;
`,Le=(0,u.default)(_.X).withConfig({displayName:"Table__StyledImageHolder",componentId:"sc-d8f49df3-6"})`
  width: 36px;
  height: 36px;
  border-radius: 36px;
`,Me=(0,u.default)(_.X).withConfig({displayName:"Table__StyledRankHolder",componentId:"sc-d8f49df3-7"})`
  width: 8px;
  height: 16px;
  margin-right: 12px;
`,Oe=10;function Ge({columns:e,data:i,smallHiddenColumns:n,mediumHiddenColumns:r,largeHiddenColumns:d,...s}){const p=(0,u.useTheme)(),m=(0,$e.x)(),{width:h}=(0,se.iP)(),g=(0,se.dD)(),{getTableProps:x,getTableBodyProps:f,headerGroups:v,rows:b,prepareRow:C,setHiddenColumns:w,visibleColumns:y}=(0,Ne.useTable)({columns:e,data:i,initialState:{sortBy:[{desc:!0,id:Ae.Volume}]},...s},Ne.useSortBy),j=(0,c.s0)();return(0,t.useEffect)((()=>{h&&(h<=p.breakpoint.sm?w(n):h<=p.breakpoint.md?w(r):h<=p.breakpoint.lg?w(d):w([]))}),[h,w,e,n,r,d,p.breakpoint]),0===i.length?(0,o.jsx)(Re,{headerGroups:v,visibleColumns:y,...x()}):(0,o.jsxs)("table",{...x(),className:He,children:[(0,o.jsx)("thead",{className:Pe,children:v.map((e=>(0,t.createElement)("tr",{...e.getHeaderGroupProps(),key:e.id},e.headers.map(((e,i)=>(0,t.createElement)(Be,{className:ze,...e.getHeaderProps(e.getSortByToggleProps()),style:{textAlign:0===i?"left":"right",paddingLeft:0===i?g?"16px":"52px":0},disabled:e.disableSortBy,key:i,children:[(0,o.jsx)(Ie.n,{as:"span",color:"neutral2",position:"relative",children:e.isSorted?e.isSortedDesc?(0,o.jsx)(Te.V,{width:"16px",height:"16px",style:{position:"absolute",top:3}}):(0,o.jsx)(ke.c,{width:"16px",height:"16px",style:{position:"absolute",top:3}}):""}),(0,o.jsx)(Ie.n,{as:"span",paddingLeft:e.isSorted?"18":"0",children:e.render("Header")})]}))))))}),(0,o.jsx)("tbody",{...f(),children:b.map(((e,i)=>(C(e),(0,o.jsx)(a.M8,{events:[l.TM.onClick],name:l.Yz.NFT_TRENDING_ROW_SELECTED,properties:{collection_address:e.original.collection.address,chain_id:m},element:l.xo.NFT_TRENDING_ROW,children:(0,t.createElement)(Ee,{...e.getRowProps(),key:e.id,onClick:()=>j(`/nfts/collection/${e.original.collection.address}`),"data-testid":"nft-trending-collection"},e.cells.map(((e,n)=>(0,t.createElement)("td",{className:"_1mor7vef rgw6ezd3 rgw6ezbf rgw6eze9 rgw6ez2o3 rgw6ez27l rgw6ez1jl rgw6ez463 rgw6ez48x",...e.getCellProps(),key:n,style:{maxWidth:0===n?g?"240px":"360px":"160px"}},0===n?(0,o.jsxs)(Fe,{children:[!g&&(0,o.jsx)(te.Tv.BodySecondary,{fontSize:"14px",lineHeight:"20px",children:i+1}),e.render("Cell")]}):e.render("Cell")))))},i))))})]})}function Re({headerGroups:e,visibleColumns:i,...n}){return(0,o.jsxs)("table",{...n,className:He,children:[(0,o.jsx)("thead",{className:Pe,children:e.map((e=>(0,t.createElement)("tr",{...e.getHeaderGroupProps(),key:e.id},e.headers.map(((e,i)=>(0,t.createElement)(Be,{className:ze,...e.getHeaderProps(e.getSortByToggleProps()),style:{textAlign:0===i?"left":"right",paddingLeft:0===i?"52px":0},disabled:0===i,key:i,children:[(0,o.jsx)(Ie.n,{as:"span",color:"accent1",position:"relative",children:e.isSorted?e.isSortedDesc?(0,o.jsx)(Te.V,{width:"16px",height:"16px",style:{position:"absolute",marginTop:"2px"}}):(0,o.jsx)(ke.c,{width:"16px",height:"16px",style:{position:"absolute",marginTop:"2px"}}):""}),(0,o.jsx)(Ie.n,{as:"span",paddingLeft:e.isSorted?"18":"0",children:e.render("Header")})]}))))))}),(0,o.jsx)("tbody",{...n,children:[...Array(Oe)].map(((e,n)=>(0,o.jsx)(Ve,{children:[...Array(i.length)].map(((e,i)=>(0,o.jsx)("td",{className:Se,children:0===i?(0,o.jsxs)(Xe,{children:[(0,o.jsx)(Me,{}),(0,o.jsx)(Le,{}),(0,o.jsx)(_.X,{})]}):(0,o.jsx)(De,{children:(0,o.jsx)(_.X,{})})},i)))},n)))})]})}var Ae;!function(e){e.Volume="Volume",e.VolumeChange="Volume change",e.Floor="Floor",e.FloorChange="Floor change",e.Sales="Sales",e.Items="Items",e.Owners="Owners"}(Ae||(Ae={}));const Ue=(e,i)=>e?i?Math.round(1e5*e)>=Math.round(1e5*i)?1:-1:1:-1,We=({data:e,timePeriod:i})=>{const n=(0,t.useMemo)((()=>(e,i)=>Ue(e.original.floor.value,i.original.floor.value)),[]),l=(0,t.useMemo)((()=>(e,i)=>Ue(e.original.floor.change,i.original.floor.change)),[]),a=(0,t.useMemo)((()=>(e,i)=>Ue(e.original.volume.value,i.original.volume.value)),[]),r=(0,t.useMemo)((()=>(e,i)=>Ue(e.original.volume.change,i.original.volume.change)),[]),d=(0,t.useMemo)((()=>[{Header:"Collection name",accessor:"collection",Cell:ve,disableSortBy:!0},{id:Ae.Floor,Header:Ae.Floor,accessor:({floor:e})=>e.value,sortType:n,Cell:function(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(we,{value:e.row.original.floor.value,denomination:e.row.original.denomination,usdPrice:e.row.original.usdPrice}),i!==T.XH.AllTime&&(0,o.jsx)(te.SF,{children:(0,o.jsx)(_e,{change:e.row.original.floor.change})})]})}},{id:Ae.FloorChange,Header:Ae.FloorChange,accessor:({floor:e})=>e.value,sortDescFirst:!0,disableSortBy:i===T.XH.AllTime,sortType:l,Cell:function(e){return i===T.XH.AllTime?(0,o.jsx)(ye,{value:"-"}):(0,o.jsx)(_e,{change:e.row.original.floor.change})}},{id:Ae.Volume,Header:Ae.Volume,accessor:({volume:e})=>e.value,sortDescFirst:!0,sortType:a,Cell:function(e){return(0,o.jsx)(je,{value:e.row.original.volume.value,denomination:e.row.original.denomination,usdPrice:e.row.original.usdPrice})}},{id:Ae.VolumeChange,Header:Ae.VolumeChange,accessor:({volume:e})=>e.value,sortDescFirst:!0,disableSortBy:i===T.XH.AllTime,sortType:r,Cell:function(e){const{change:n}=e.row.original.volume;return i===T.XH.AllTime?(0,o.jsx)(ye,{value:"-"}):n&&n>=9999?(0,o.jsxs)(_e,{change:n,children:[">9999","%"]}):(0,o.jsx)(_e,{change:n})}},{id:Ae.Items,Header:Ae.Items,accessor:"totalSupply",sortDescFirst:!0,Cell:function(e){return(0,o.jsx)(be,{value:{value:e.row.original.totalSupply}})}},{Header:Ae.Owners,accessor:({owners:e})=>e.value,sortDescFirst:!0,Cell:function(e){return(0,o.jsx)(be,{value:e.row.original.owners})}}]),[l,n,r,a,i]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(Ge,{smallHiddenColumns:[Ae.Items,Ae.FloorChange,Ae.Volume,Ae.VolumeChange,Ae.Owners],mediumHiddenColumns:[Ae.Items,Ae.FloorChange,Ae.VolumeChange,Ae.Owners],largeHiddenColumns:[Ae.Items,Ae.Owners],data:e,columns:d})})},Ye=[{label:"1D",value:T.XH.OneDay},{label:"1W",value:T.XH.SevenDays},{label:"1M",value:T.XH.ThirtyDays},{label:"All",value:T.XH.AllTime}],Ke=u.default.div.withConfig({displayName:"TrendingCollections__ExploreContainer",componentId:"sc-56133655-0"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({theme:e})=>e.maxWidth};
  padding: 0 16px;
`,Ze=u.default.h1.withConfig({displayName:"TrendingCollections__StyledHeader",componentId:"sc-56133655-1"})`
  color: ${({theme:e})=>e.neutral1};
  font-size: 36px;
  line-height: 44px;
  font-weight: 535;
  margin: 0;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    font-size: 20px;
    line-height: 28px;
  }
`,qe=u.default.div.withConfig({displayName:"TrendingCollections__FiltersRow",componentId:"sc-56133655-2"})`
  display: flex;
  justify-content: space-between;
  margin-top: 36px;
  margin-bottom: 20px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    margin-bottom: 16px;
    margin-top: 16px;
  }
`,Je=u.default.div.withConfig({displayName:"TrendingCollections__Filter",componentId:"sc-56133655-3"})`
  display: flex;
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 16px;
  padding: 4px;
`,Qe=u.default.div.withConfig({displayName:"TrendingCollections__Selector",componentId:"sc-56133655-4"})`
  padding: 8px 12px;
  border-radius: 12px;
  background: ${({active:e,theme:i})=>e?i.surface3:"none"};
  cursor: pointer;

  ${le.cR}
`,ei=(0,u.default)(te.Tv.SubHeader).withConfig({displayName:"TrendingCollections__StyledSelectorText",componentId:"sc-56133655-5"})`
  color: ${({theme:e,active:i})=>i?e.neutral1:e.neutral2};
`;const ii=()=>{const{formatterLocalCurrency:e}=(0,$.h2)(),[i,n]=(0,t.useState)(T.XH.OneDay),[l,a]=(0,t.useState)(!0),{data:s,loading:c}=d(100,function(e){switch(e){case T.XH.OneDay:return r._uu.Day;case T.XH.SevenDays:return r._uu.Week;case T.XH.ThirtyDays:return r._uu.Month;case T.XH.AllTime:return r._uu.Max;default:return r._uu.Day}}(i)),u=(0,ae.$N)(),p=(0,t.useMemo)((()=>!c&&s?s.map((e=>({...e,collection:{name:e.name,logo:e.imageUrl,address:e.address,isVerified:e.isVerified},volume:{value:e.volume,change:e.volumeChange,type:"eth"},floor:{value:e.floor,change:e.floorChange},owners:{value:e.owners},sales:e.sales,totalSupply:e.totalSupply,denomination:l?T.VG.ETH:T.VG.USD,usdPrice:u}))):[]),[s,c,l,u]);return(0,o.jsxs)(Ke,{children:[(0,o.jsx)(Ze,{children:"Trending NFT collections"}),(0,o.jsxs)(qe,{children:[(0,o.jsx)(Je,{children:Ye.map((e=>(0,o.jsx)(Qe,{active:e.value===i,onClick:()=>n(e.value),children:(0,o.jsx)(ei,{lineHeight:"20px",active:e.value===i,children:e.label})},e.value)))}),(0,o.jsxs)(Je,{onClick:()=>a(!l),children:[(0,o.jsx)(Qe,{active:l,children:(0,o.jsx)(ei,{lineHeight:"20px",active:l,children:"ETH"})}),(0,o.jsx)(Qe,{active:!l,children:(0,o.jsx)(ei,{lineHeight:"20px",active:!l,children:e})})]})]}),(0,o.jsx)(We,{data:p,timePeriod:i})]})},ni=u.default.div.withConfig({displayName:"explore__ExploreContainer",componentId:"sc-f5d86c41-0"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    gap: 16px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    gap: 0px;
  }
`,oi=()=>{const e=(0,ae.cP)((e=>e.setBagExpanded));return(0,t.useEffect)((()=>{e({bagExpanded:!1,manualClose:!1})}),[]),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(a.fM,{page:l.yJ.NFT_EXPLORE_PAGE,shouldLogImpression:!0,children:(0,o.jsxs)(ni,{children:[(0,o.jsx)(oe,{}),(0,o.jsx)(ii,{})]})})})}}}]);
//# sourceMappingURL=2612.12b40cd5.chunk.js.map