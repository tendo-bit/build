"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[3735],{13901:(e,t,i)=>{i.d(t,{K:()=>o});var n=i(45779),r=i(70854);function a(e,t){var i,n,r,a,o,s,l,d,c,p,g,u,h,m,x,f,w,v,y,j,b,C,_,k,T,I,N,S,z,P,$,E,R,M,F,B,A,L,H,O,D;const Y=null===(n=e)||void 0===n||null===(i=n.markets)||void 0===i?void 0:i[0];if(!t&&!(null===(o=e)||void 0===o||null===(a=o.nftContracts)||void 0===a||null===(r=a[0])||void 0===r?void 0:r.address))return{};const U={};var X;(null===(s=e)||void 0===s?void 0:s.traits)&&(null===(X=e)||void 0===X||X.traits.forEach((e=>{e.name&&e.stats&&(U[e.name]=e.stats.map((e=>({trait_type:e.name,trait_value:e.value,trait_count:e.assets}))))})));return{address:t??(null===(c=e)||void 0===c||null===(d=c.nftContracts)||void 0===d||null===(l=d[0])||void 0===l?void 0:l.address)??"",isVerified:null===(p=e)||void 0===p?void 0:p.isVerified,name:null===(g=e)||void 0===g?void 0:g.name,description:null===(u=e)||void 0===u?void 0:u.description,standard:null===(x=e)||void 0===x||null===(m=x.nftContracts)||void 0===m||null===(h=m[0])||void 0===h?void 0:h.standard,bannerImageUrl:null===(w=e)||void 0===w||null===(f=w.bannerImage)||void 0===f?void 0:f.url,stats:{num_owners:null===(v=Y)||void 0===v?void 0:v.owners,floor_price:null===(j=Y)||void 0===j||null===(y=j.floorPrice)||void 0===y?void 0:y.value,one_day_volume:null===(C=Y)||void 0===C||null===(b=C.volume)||void 0===b?void 0:b.value,one_day_change:null===(k=Y)||void 0===k||null===(_=k.volumePercentChange)||void 0===_?void 0:_.value,one_day_floor_change:null===(I=Y)||void 0===I||null===(T=I.floorPricePercentChange)||void 0===T?void 0:T.value,banner_image_url:null===(S=e)||void 0===S||null===(N=S.bannerImage)||void 0===N?void 0:N.url,total_supply:null===(z=e)||void 0===z?void 0:z.numAssets,total_listings:null===($=Y)||void 0===$||null===(P=$.listings)||void 0===P?void 0:P.value,total_volume:null===(R=Y)||void 0===R||null===(E=R.totalVolume)||void 0===E?void 0:E.value},traits:U,marketplaceCount:null===(F=Y)||void 0===F||null===(M=F.marketplaces)||void 0===M?void 0:M.map((e=>{var t;return{marketplace:(null===(t=e.marketplace)||void 0===t?void 0:t.toLowerCase())??"",count:e.listings??0,floorPrice:e.floorPrice??0}})),imageUrl:(null===(A=e)||void 0===A||null===(B=A.image)||void 0===B?void 0:B.url)??"",twitterUrl:null===(L=e)||void 0===L?void 0:L.twitterName,instagram:null===(H=e)||void 0===H?void 0:H.instagramName,discordUrl:null===(O=e)||void 0===O?void 0:O.discordUrl,externalUrl:null===(D=e)||void 0===D?void 0:D.homepageUrl,rarityVerified:!1}}function o(e,t){var i,o,s,l;const{data:d,loading:c}=(0,r.aG9)({variables:{addresses:e},skip:t}),p=null===(l=d)||void 0===l||null===(s=l.nftCollections)||void 0===s||null===(o=s.edges)||void 0===o||null===(i=o[0])||void 0===i?void 0:i.node;return(0,n.useMemo)((()=>({data:a(p,e),loading:c})),[e,c,p])}},27011:(e,t,i)=>{i.r(t),i.d(t,{BannerWrapper:()=>vi,CollectionBannerLoading:()=>hi,default:()=>Ti});var n=i(92936),r=i(5985),a=i(47583),o=i(44591),s=i(68588),l=i(94284),d=i(82743),c=i(13901),p=i(97341),g=i(6823),u=i(3464),h=i(3805),m=i(15288),x=i(68113),f=i(79132),w=i(52384),v=i(78129),y=i(66136);i(57995),i(49484);const j=()=>{const e=(0,f.cP)((e=>e.itemsInBag)),t=(0,f.cP)((e=>e.toggleBag)),i=(0,w.P)(),r=(0,w.B)(),{formatEther:a,formatNumberOrString:o}=(0,y.Gb)(),s=e.length>0;return(0,n.jsxs)(m.X2,{display:{sm:s?"flex":"none",md:"none"},className:"rgw6ez48r rgw6ez32f rgw6ez35l rgw6ez3b3 rgw6ez4ql rgw6ez2tx rgw6ez3qr rgw6ez80p rgw6ez7zp rgw6ez55f rgw6ez895 rgw6ez48f",children:[(0,n.jsxs)(m.X2,{gap:"8",children:[(0,n.jsx)(h.n,{position:"relative",style:{width:"34px",height:"34px"},children:e.slice(0,3).map(((e,t)=>(0,n.jsx)(h.n,{as:"img",position:"absolute",src:e.asset.smallImageUrl,top:"1/2",left:"1/2",width:"26",height:"26",borderRadius:"4",style:{transform:0===t?"translate(-50%, -50%) rotate(-4.42deg)":1===t?"translate(-50%, -50%) rotate(-14.01deg)":"translate(-50%, -50%) rotate(10.24deg)",zIndex:t}},t)))}),(0,n.jsxs)(m.sg,{children:[(0,n.jsx)(h.n,{className:x.d1,fontWeight:"medium",children:(0,v.t)(e.length,"NFT")}),(0,n.jsxs)(m.X2,{gap:"8",children:[(0,n.jsxs)(h.n,{className:x.d1,children:[`${a({input:i.toString(),type:y.sw.NFTToken})}`," ETH"]}),(0,n.jsx)(h.n,{color:"neutral2",className:x.Km,children:o({input:r,type:y.sw.FiatNFTToken})})]})]})]}),(0,n.jsx)(h.n,{className:"rgw6ezd9 rgw6ezb9 rgw6ezdx rgw6ez2e9 rgw6ez2jr rgw6ez2of rgw6ez27x rgw6ez4df rgw6ez6sl rgw6ez80x rgw6ez7zd",onClick:t,children:"View bag"})]})};var b=i(35842),C=i(14411),_=(i(45814),"_1wiwg131 rgw6ezd9 rgw6ezbf rgw6eze3 rgw6ez48x rgw6ez4ux rgw6ez88d rgw6ez7zd rgw6ezfx rgw6ez4bf"),k="_1wiwg135 _1wiwg131 rgw6ezd9 rgw6ezbf rgw6eze3 rgw6ez48x rgw6ez4ux rgw6ez88d rgw6ez7zd rgw6ezfx rgw6ez4b9";const T=(0,C.default)(m.X2).withConfig({displayName:"ActivitySwitcher__BaseActivityContainer",componentId:"sc-12fe17f6-0"})`
  border-bottom: 1px solid;
  border-color: ${({theme:e})=>e.surface3};
  margin-right: 12px;
`,I=new Array(2).fill(null).map(((e,t)=>(0,n.jsx)("div",{className:"_1wiwg136 _2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3"},`ActivitySwitcherLoading-key-${t}`))),N=({showActivity:e,toggleActivity:t})=>{const i=(0,f.Iv)((e=>e.isCollectionStatsLoading));return(0,n.jsx)(T,{gap:"24",marginBottom:"16",children:i?I:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h.n,{as:"button",className:e?_:k,onClick:()=>e&&t(),children:"Items"}),(0,n.jsx)(a.M8,{events:[r.TM.onClick],element:r.xo.NFT_ACTIVITY_TAB,name:r.Yz.NFT_ACTIVITY_SELECTED,children:(0,n.jsx)(h.n,{as:"button",className:e?k:_,onClick:()=>!e&&t(),"data-testid":"nft-activity",children:"Activity"})})]})})};var S=i(11604),z=i(66284),P=i(21989),$=i(9604),E=i(84662),R=i(2798),M=i(62293),F=i(45779);const B=({asset:e,isMobile:t,mediaShouldBePlaying:i,setCurrentTokenPlayingMedia:o,uniformAspectRatio:s,setUniformAspectRatio:l,renderedHeight:d,setRenderedHeight:c})=>{var p,u;const{formatEther:h}=(0,y.Gb)(),m=(0,f.cP)((e=>e.bagManuallyClosed)),x=(0,f.cP)((e=>e.addAssetsToBag)),w=(0,f.cP)((e=>e.removeAssetsFromBag)),v=(0,f.cP)((e=>e.itemsInBag)),j=(0,f.cP)((e=>e.bagExpanded)),b=(0,f.cP)((e=>e.setBagExpanded)),C=(0,a.oO)({page:r.yJ.NFT_COLLECTION_PAGE}),{isSelected:_}=(0,F.useMemo)((()=>({isSelected:v.filter((t=>e.tokenId===t.asset.tokenId&&e.address===t.asset.address)).length>0})),[e,v]),k=e.notForSale||S.O$.from(e.priceInfo?e.priceInfo.ETHPrice:0).lt(0),T=(null===(u=e)||void 0===u||null===(p=u.rarity)||void 0===p?void 0:p.providers)?e.rarity.providers[0]:void 0,I=(0,F.useCallback)((()=>{var i;S.O$.from((null===(i=e.priceInfo)||void 0===i?void 0:i.ETHPrice)??0).gt(0)&&(x([e]),j||t||m||b({bagExpanded:!0}),(0,a._P)(r.Yz.NFT_BUY_ADDED,{collection_address:e.address,token_id:e.tokenId,token_type:e.tokenType,...C}))}),[x,e,j,m,t,b,C]),N=(0,F.useCallback)((()=>{w([e])}),[e,w]),z=(0,F.useMemo)((()=>({primaryInfo:e.name?e.name:`#${e.tokenId}`,primaryInfoIcon:e.susFlag?(0,n.jsx)(M.yT,{}):null,primaryInfoRight:e.rarity&&T?(0,n.jsx)(M.SD,{provider:T}):null,secondaryInfo:k?"":`${h({input:e.priceInfo.ETHPrice,type:y.sw.NFTToken})} ETH`,selectedInfo:(0,n.jsx)(g.cC,{children:"Remove from bag"}),notSelectedInfo:(0,n.jsx)(g.cC,{children:"Add to bag"}),disabledInfo:(0,n.jsx)(g.cC,{children:"Not listed"})})),[e.name,e.priceInfo.ETHPrice,e.rarity,e.susFlag,e.tokenId,h,k,T]);return(0,n.jsx)(R.y,{asset:e,display:z,isSelected:_,isDisabled:Boolean(e.notForSale),selectAsset:I,unselectAsset:N,mediaShouldBePlaying:i,uniformAspectRatio:s,setUniformAspectRatio:l,renderedHeight:d,setRenderedHeight:c,setCurrentTokenPlayingMedia:o,testId:"nft-collection-asset"})};var A,L=i(34385),H=i(30520),O=i(58690),D=i(27389),Y="_10b1b4ve rgw6ez4bf rgw6ez453 rgw6ez19r rgw6ez12r rgw6ez8e1",U="_10b1b4vc",X="rgw6ez80d rgw6ez6df rgw6ez8ap rgw6ez8bh rgw6ezvx rgw6ezff",W="_10b1b4vb rgw6ez805 rgw6ez5yr rgw6ez89x rgw6ez2cl rgw6ez27x",Z="rgw6ez44r rgw6ez2jl rgw6ez7zd rgw6ezbf rgw6eze3 rgw6ez48f rgw6ez3x rgw6ez2dr rgw6ez2ol rgw6ez283",V="_10b1b4v2",K=i(12461),G=i(12294),q=i(47832);!function(e){e[e.MARKPLACE_INDEX=0]="MARKPLACE_INDEX",e[e.PRICE_RANGE_INDEX=1]="PRICE_RANGE_INDEX",e[e.TRAIT_START_INDEX=2]="TRAIT_START_INDEX"}(A||(A={}));const J=(0,G.Ue)()((0,q.mW)((e=>({traitsOpen:{},setTraitsOpen:(t,i)=>{e((({traitsOpen:e})=>({traitsOpen:{...e,[t]:i}})))}})),{name:"useTraitsOpen"}));var Q=i(54972),ee=i(4256);const te=(0,C.default)(m.X2).withConfig({displayName:"MarketplaceSelect__FilterItemWrapper",componentId:"sc-94e770fe-0"})`
  justify-content: space-between;
  padding: 10px 16px 10px 12px;
  cursor: pointer;
  border-radius: 12px;
  &:hover {
    background: ${({theme:e})=>e.surface2};
  }
`,ie=(0,C.default)(m.X2).withConfig({displayName:"MarketplaceSelect__MarketNameWrapper",componentId:"sc-94e770fe-1"})`
  gap: 10px;
`,ne={x2y2:"X2Y2",opensea:"OpenSea",looksrare:"LooksRare",sudoswap:"SudoSwap",nftx:"NFTX",nft20:"NFT20",cryptopunks:"LarvaLabs"},re=({title:e,element:t,onClick:i})=>(0,n.jsxs)(te,{onClick:i,children:[(0,n.jsx)(Q.Tv.BodyPrimary,{children:e}),(0,n.jsx)(Q.Tv.SubHeaderSmall,{children:t})]}),ae=({title:e,value:t,addMarket:i,removeMarket:o,isMarketSelected:s,count:l})=>{const[d,c]=(0,F.useState)(!1),[p,g]=(0,F.useReducer)((e=>!e),!1);(0,F.useEffect)((()=>{c(s)}),[s]);const u=e=>{e.preventDefault(),d?(o(t),c(!1)):(i(t),c(!0)),(0,a._P)(r.Yz.NFT_FILTER_SELECTED,{filter_type:r.fm.MARKETPLACE})},m=(0,n.jsx)(ee.X,{checked:d,hovered:p,onChange:u,children:(0,n.jsx)(h.n,{as:"span",color:"neutral2",marginLeft:"4",paddingRight:"12",children:l})}),x=(0,n.jsxs)(ie,{children:[(0,v.Dp)(e,"16"),e]});return(0,n.jsx)("div",{onMouseEnter:g,onMouseLeave:g,children:(0,n.jsx)(re,{title:x,element:m,onClick:u})},t)},oe=({title:e,items:t,onClick:i,isOpen:r})=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h.n,{className:X,opacity:r?"1":"0"}),(0,n.jsxs)(h.n,{as:"details",className:(0,P.default)(x.Nf,!r&&V),open:r,borderRadius:r?"0":"12",children:[(0,n.jsxs)(h.n,{as:"summary",className:`${Z} ${V}`,display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"16",paddingTop:"12",paddingLeft:"12",paddingBottom:"12",lineHeight:"20",borderRadius:"12",maxHeight:"48",onClick:i,children:[e,(0,n.jsx)(h.n,{display:"flex",alignItems:"center",children:(0,n.jsx)(h.n,{className:Y,style:{transform:`rotate(${r?0:180}deg)`},children:(0,n.jsx)(O.g8,{className:U})})})]}),(0,n.jsx)(m.sg,{className:W,paddingBottom:"8",paddingLeft:"0",children:t})]})]}),se=()=>{const{addMarket:e,removeMarket:t,markets:i,marketCount:r}=(0,K.PY)((({markets:e,marketCount:t,removeMarket:i,addMarket:n})=>({markets:e,marketCount:t,removeMarket:i,addMarket:n}))),[a,o]=(0,F.useState)(!!i.length),s=J((e=>e.setTraitsOpen)),l=(0,F.useMemo)((()=>Object.entries(ne).map((([a,o])=>{var s;return(0,n.jsx)(ae,{title:o,value:a,count:(null===(s=r)||void 0===s?void 0:s[a])||0,addMarket:e,removeMarket:t,isMarketSelected:i.includes(a)},a)}))),[e,r,t,i]);return(0,n.jsx)(oe,{title:"Marketplaces",items:l,onClick:e=>{e.preventDefault(),o(!a),s(A.MARKPLACE_INDEX,!a)},isOpen:a})};var le=i(7797);const de=(0,C.default)(le.Z).withConfig({displayName:"FilterSortDropdown__CheckIcon",componentId:"sc-c4c806a4-0"})`
  height: 20px;
  width: 20px;
  color: ${({theme:e})=>e.accent1};
`,ce=({sortDropDownOptions:e})=>{const[t,i]=(0,F.useState)(!1),r=e=>{e.preventDefault(),i(!t)},a=e.map((e=>(0,n.jsx)(pe,{dropDownOption:e,parentOnClick:r},e.displayText)));return(0,n.jsx)(oe,{title:"Sort by",items:a,onClick:r,isOpen:t})},pe=({dropDownOption:e,parentOnClick:t})=>{const i=(0,f.PY)((e=>e.sortBy)),r=void 0!==e.sortBy&&i===e.sortBy?(0,n.jsx)(de,{}):(0,n.jsx)(n.Fragment,{});return(0,n.jsx)(re,{title:e.displayText,element:r,onClick:i=>{i.preventDefault(),t(i),e.onClick()}})},ge=({dropDownOptions:e,inFilters:t,mini:i,miniPrompt:r,top:a,left:o})=>{const s=(0,f.PY)((e=>e.sortBy)),[l,d]=(0,F.useReducer)((e=>!e),!1),[c,p]=(0,F.useReducer)((e=>!e),!1),[g,u]=(0,F.useState)(s),w=(0,f.Iv)((e=>e.isCollectionStatsLoading)),[v,y]=(0,F.useState)(0);(0,F.useEffect)((()=>{u(s)}),[s]);const j=(0,F.useRef)(null);(0,H.t)(j,(()=>l&&d())),(0,F.useEffect)((()=>y(0)),[e]);const b=(0,F.useMemo)((()=>e[g].reverseOnClick||e[g].reverseIndex),[g,e]),C=w?220:t?"full":i?"min":v||"300px";return(0,n.jsxs)(h.n,{ref:j,borderRadius:"12",borderBottomLeftRadius:l?"0":void 0,borderBottomRightRadius:l?"0":void 0,style:{width:C},children:[(0,n.jsx)(h.n,{as:"button",borderRadius:"12",borderStyle:"solid",background:i?"none":"surface1",borderColor:"surface3",borderWidth:"1px",borderBottomLeftRadius:l?"0":void 0,borderBottomRightRadius:l?"0":void 0,padding:t?"12":i?"0":"8",color:"neutral1",whiteSpace:"nowrap",display:"flex",justifyContent:"space-between",height:"44",alignItems:"center",width:t?"full":"inherit",onClick:d,cursor:"pointer",className:w?"_12q7kth3 _2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez1al":(0,P.default)(l&&!i&&"_12q7kth0"),children:!w&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(h.n,{display:"flex",alignItems:"center",color:"neutral1",children:[!l&&b&&(0,n.jsxs)(m.X2,{marginRight:"4",onClick:t=>{if(t.stopPropagation(),e[g].reverseOnClick){var i,n;null===(i=(n=e[g]).reverseOnClick)||void 0===i||i.call(n),p()}else{const t=e[g].reverseIndex??1;e[t-1].onClick(),u(t-1)}},children:[e[g].reverseOnClick&&(c?(0,n.jsx)(O.iB,{}):(0,n.jsx)(O.L7,{})),e[g].reverseIndex&&(g>(e[g].reverseIndex??1)-1?(0,n.jsx)(O.iB,{}):(0,n.jsx)(O.L7,{}))]}),(0,n.jsx)(h.n,{marginLeft:b?"4":"0",marginRight:i?"2":"0",color:"neutral1",className:x.km,children:i?r:l?"Sort by":e[g].displayText})]}),(0,n.jsx)(O.g8,{secondaryColor:i?D.Z4.colors.neutral1:void 0,secondaryWidth:i?"20":void 0,secondaryHeight:i?"20":void 0,style:{transform:l?"":"rotate(180deg)"}})]})}),(0,n.jsx)(h.n,{position:"absolute",zIndex:"3",width:t?"auto":"inherit",right:t?"16":"auto",paddingBottom:"8",fontSize:"14",background:"surface1",borderStyle:"solid",borderColor:"surface3",borderWidth:"1px",borderRadius:"8",borderTopLeftRadius:i?void 0:"0",borderTopRightRadius:i?void 0:"0",overflowY:"hidden",transition:"250",display:l||!v?"block":"none",visibility:v?"visible":"hidden",marginTop:i?"12":"0",className:(0,P.default)(!i&&"_12q7kth1"),style:{top:a?`${a}px`:"inherit",left:t?"16px":o?`${o}px`:"inherit"},children:v?l&&e.map(((t,r)=>(0,n.jsx)(ue,{option:t,index:r,mini:i,onClick:()=>{e[r].onClick(),u(r),d(),c&&p()}},r))):[e.reduce(((e,t)=>t.displayText.length>=e.displayText.length?t:e),e[0])].map(((e,t)=>(0,n.jsx)(he,{option:e,index:t,setMaxWidth:y},t)))})]})},ue=({option:e,index:t,onClick:i,mini:r})=>(0,n.jsx)(h.n,{as:"button",border:"none",display:"flex",alignItems:"center",paddingTop:"10",paddingBottom:"10",paddingLeft:"12",paddingRight:r?"20":"0",width:"full",background:{default:"surface1",hover:"surface3"},color:"neutral1",onClick:i,cursor:"pointer",children:(0,n.jsx)(h.n,{marginLeft:"8",className:x.km,children:e.displayText})},t),he=({option:e,index:t,setMaxWidth:i})=>{const r=(0,F.useRef)(null);return(0,F.useLayoutEffect)((()=>{r&&r.current&&i(Math.ceil(r.current.getBoundingClientRect().width)+52)})),(0,n.jsx)(h.n,{position:"absolute",ref:r,children:(0,n.jsx)(ue,{option:e,index:t})},t)};var me=i(23173),xe=i(11734);const fe=(0,G.Ue)()((0,q.mW)((e=>({priceRangeLow:"",setPriceRangeLow:t=>{e((()=>({priceRangeLow:t})))},priceRangeHigh:"",setPriceRangeHigh:t=>{e((()=>({priceRangeHigh:t})))},prevMinMax:[0,100],setPrevMinMax:t=>{e((()=>({prevMinMax:t})))}})),{name:"usePriceRange"}));var we=i(47263);const ve="undefined"!==typeof window;const ye=()=>{var e;const t=!!ve&&window.innerWidth<D.AV.sm?"nft-anchor-mobile":"nft-anchor";null===(e=window.document.getElementById(t))||void 0===e||e.scrollIntoView({behavior:"smooth"})};var je=i(18806);const be=e=>{const t={...e};for(const n in t){const e=t[n],i=f.initialCollectionFilterState[n];JSON.stringify(e)===JSON.stringify(i)&&delete t[n]}t.all!==f.initialCollectionFilterState.buyNow&&delete t.all;const i=f.i9[f.initialCollectionFilterState.sortBy];return t.sort===i&&delete t.sort,t},Ce=(e,t)=>{const i={...e};["traits","markets"].forEach((e=>{i[e]||(i[e]=[]),i[e]&&"string"===typeof i[e]&&(i[e]=[i[e]])}));try{const{buyNow:e,search:n}=f.initialCollectionFilterState;if(Object.entries(f.i9).forEach((([e,t])=>{t===i.sort&&(i.sortBy=Number(e))})),i.buyNow=!(void 0===i.all?!e:i.all),i.search=void 0===i.search?n:String(i.search),2===i.traits.length){const[e,t]=i.traits;`${e}${t}`.includes(",")||e.startsWith("(")&&!e.endsWith(")")&&t.endsWith(")")&&!t.startsWith("(")&&(i.traits=[`${e},${t}`])}i.traits=i.traits.map((e=>{const i=(e=>e.substring(1,e.length-1))(e.replace(/(")/g,"")),[n,r]=i.split(","),a=t.traits&&t.traits[n].find((e=>e.trait_value===r));return a??{trait_type:n,trait_value:r,trait_count:0}}))}catch(n){i.traits=[]}return i};var _e=i(10581),ke=i(6282),Te=i(70854),Ie=i(72993),Ne=i(71291),Se=i(52873),ze=(i(13570),i(98503));const Pe=C.default.div.withConfig({displayName:"Sweep__SweepContainer",componentId:"sc-1dd1b80c-0"})`
  display: flex;
  gap: 60px;
  margin-top: 12px;
  padding: 16px;
  border-radius: 12px;
  background-color: ${({theme:e})=>e.surface1};
  justify-content: space-between;
  background: linear-gradient(${({theme:e})=>e.surface1}, ${({theme:e})=>e.surface1}) padding-box,
    linear-gradient(to right, #4673fa, #9646fa) border-box;
  border: 2px solid transparent;
`,$e=(0,C.default)(ze.Z).withConfig({displayName:"Sweep__StyledSlider",componentId:"sc-1dd1b80c-1"})`
  cursor: pointer;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,Ee=C.default.div.withConfig({displayName:"Sweep__SweepLeftmostContainer",componentId:"sc-1dd1b80c-2"})`
  display: flex;
  width: 100%;
  gap: 24px;
`,Re=C.default.div.withConfig({displayName:"Sweep__SweepRightmostContainer",componentId:"sc-1dd1b80c-3"})`
  display: flex;
  flex-shrink: 0;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  min-width: 160px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,Me=C.default.div.withConfig({displayName:"Sweep__SweepHeaderContainer",componentId:"sc-1dd1b80c-4"})`
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,Fe=C.default.div.withConfig({displayName:"Sweep__SweepSubContainer",componentId:"sc-1dd1b80c-5"})`
  display: flex;
  width: 100%;
  gap: 12px;
  align-items: center;
`,Be=C.default.input.withConfig({displayName:"Sweep__InputContainer",componentId:"sc-1dd1b80c-6"})`
  width: 96px;
  color: ${({theme:e})=>e.neutral1};
  border: 1px solid ${({theme:e})=>e.surface3};
  background: none;
  border-radius: 8px;
  padding: 6px 8px;
  font-size: 16px;
  font-weight: 485;
  line-height: 20px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    width: 100%;
  }

  :hover,
  :focus {
    outline: none;
    border: 1px solid ${({theme:e})=>e.accent1};
  }
`,Ae=C.default.div.withConfig({displayName:"Sweep__ToggleContainer",componentId:"sc-1dd1b80c-7"})`
  display: flex;
  border: 1px solid ${({theme:e})=>e.surface3};
  background: none;
  border-radius: 12px;
  padding: 4px;
  cursor: pointer;
`,Le=C.default.div.withConfig({displayName:"Sweep__ToggleSwitch",componentId:"sc-1dd1b80c-8"})`
  color: ${({theme:e,active:t})=>t?e.neutral1:e.neutral2};
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${({theme:e,active:t})=>t?e.surface3:"none"};
  font-size: 14px;
  font-weight: 535;
  line-height: 16px;
`,He=C.default.div.withConfig({displayName:"Sweep__NftDisplayContainer",componentId:"sc-1dd1b80c-9"})`
  position: relative;
  width: 34px;
  height: 34px;
`,Oe=C.default.div.withConfig({displayName:"Sweep__NftHolder",componentId:"sc-1dd1b80c-10"})`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 26px;
  height: 26px;
  border-radius: 4px;
  background: ${({theme:e,src:t})=>t?`url(${t})`:e.neutral3};
  background-size: 26px;
  opacity: ${({src:e,index:t})=>e?1:0===t?.9:1===t?.6:.3};
  transform: ${({index:e})=>0===e?"translate(-50%, -50%) rotate(-4.42deg)":1===e?"translate(-50%, -50%) rotate(-14.01deg)":"translate(-50%, -50%) rotate(10.24deg)"};
  z-index: ${({index:e})=>3-e};
`,De=RegExp("^(0|[1-9][0-9]*)$"),Ye=RegExp("^\\d*\\.?\\d{0,2}$"),Ue=({nfts:e})=>(0,n.jsx)(He,{children:[...Array(3)].map(((t,i)=>(0,n.jsx)(Oe,{index:i,src:e.length-1>=i?e[e.length-1-i].smallImageUrl:void 0},i)))}),Xe=({contractAddress:e,minPrice:t,maxPrice:i})=>{var r;const a=(0,C.useTheme)(),{formatEther:o}=(0,y.Gb)(),[s,l]=(0,F.useReducer)((e=>!e),!0),[d,c]=(0,F.useState)(""),p=(0,f.cP)((e=>e.addAssetsToBag)),u=(0,f.cP)((e=>e.removeAssetsFromBag)),h=(0,f.cP)((e=>e.itemsInBag)),m=(0,f.cP)((e=>e.lockSweepItems)),x=(0,f.cP)((e=>e.setBagExpanded)),w=(0,f.PY)((e=>e.traits)),j=(0,f.PY)((e=>e.markets)),b=Ze(e,"others",t,i),_=Ze(e,we.Fz.Sudoswap,t,i),k=Ze(e,we.Fz.NFTX,t,i),T=Ze(e,we.Fz.NFT20,t,i),{data:I}=(0,$.he)(b),{data:N}=(0,$.he)(_),{data:P}=(0,$.he)(k),{data:E}=(0,$.he)(T),{sortedAssets:R,sortedAssetsTotalEth:M}=(0,F.useMemo)((()=>{var e,t,i,n;if(!I&&!N&&!P&&!E)return{sortedAssets:void 0,sortedAssetsTotalEth:S.O$.from(0)};let r=0,a=0,o=[];N&&(o=[...o,...N]),P&&(o=[...o,...P]),E&&(o=[...o,...E]);const s=o.filter((e=>e.marketplace===we.Fz.Sudoswap&&!e.susFlag));o.forEach((e=>{if(!e.susFlag)if(e.marketplace===we.Fz.Sudoswap){const t=(0,v.Pu)(e,s.filter((t=>(0,v.zA)(e,t))).findIndex((t=>t.tokenId===e.tokenId)));e.priceInfo.ETHPrice=t??"0"}else{const t=e.marketplace===we.Fz.NFTX,i=(0,v.Pu)(e,t?r:a);S.O$.from(i).gt(0)&&(t?r++:a++),e.priceInfo.ETHPrice=i}})),o=I?I.concat(o):o,o.sort(((e,t)=>S.O$.from(e.priceInfo.ETHPrice).gt(S.O$.from(t.priceInfo.ETHPrice))?1:-1));let l=o.filter((e=>S.O$.from(e.priceInfo.ETHPrice).gt(0)&&!e.susFlag));return l=l.slice(0,Math.max((null===(e=I)||void 0===e?void 0:e.length)??0,(null===(t=N)||void 0===t?void 0:t.length)??0,(null===(i=P)||void 0===i?void 0:i.length)??0,(null===(n=E)||void 0===n?void 0:n.length)??0)),{sortedAssets:l,sortedAssetsTotalEth:l.reduce(((e,t)=>e.add(S.O$.from(t.priceInfo.ETHPrice))),S.O$.from(0))}}),[I,N,P,E]),{sweepItemsInBag:B,sweepEthPrice:A}=(0,F.useMemo)((()=>{const t=h.filter((t=>t.inSweep&&t.asset.address===e)).map((e=>e.asset)),i=t.reduce(((e,t)=>e.add(S.O$.from(t.priceInfo.ETHPrice))),S.O$.from(0));return{sweepItemsInBag:t,sweepEthPrice:i}}),[h,e]);(0,F.useEffect)((()=>{0===B.length&&c("")}),[B]),(0,F.useEffect)((()=>{m(e)}),[e,w,j,t,i,m]);const L=e=>{if(R)if(s)0===B.length&&e>0&&x({bagExpanded:!0}),B.length<e?p(R.slice(B.length,e),!0):u(B.slice(e,B.length),!0),c(e<1?"":e.toString());else{const t=(0,z.parseEther)(e.toString());if(A.lte(t)){let e=B.length,i=A;const n=[];for(;e<R.length&&i.add(S.O$.from(R[e].priceInfo.ETHPrice)).lte(t);)n.push(R[e]),i=i.add(S.O$.from(R[e].priceInfo.ETHPrice)),e++;n.length>0&&(0===B.length&&x({bagExpanded:!0}),p(n,!0))}else{let e=B.length-1,i=A;const n=[];for(;e>=0&&i.gt(t);)n.push(B[e]),i=i.sub(S.O$.from(B[e].priceInfo.ETHPrice)),e--;n.length>0&&u(n,!0)}c(0===e?"":e.toFixed(2))}};return(0,n.jsxs)(Pe,{"data-testid":"nft-sweep-slider",children:[(0,n.jsxs)(Ee,{children:[(0,n.jsx)(Me,{children:(0,n.jsx)(Q.Tv.SubHeader,{lineHeight:"20px",paddingTop:"6px",paddingBottom:"6px",children:(0,n.jsx)(g.cC,{children:"Sweep"})})}),(0,n.jsxs)(Fe,{children:[(0,n.jsx)($e,{defaultValue:0,min:0,max:s?(null===(r=R)||void 0===r?void 0:r.length)??0:parseFloat((0,z.formatEther)(M).toString()),value:s?B.length:parseFloat((0,z.formatEther)(A.toString())),step:s?1:.01,trackStyle:{top:"3px",height:"8px",background:"radial-gradient(101.8% 4091.31% at 0% 0%, #4673FA 0%, #9646FA 100%)"},handleStyle:{top:"3px",width:"12px",height:"20px",backgroundColor:"#4673FA",borderRadius:"4px",border:"none",opacity:"1",boxShadow:`${a.deprecated_shallowShadow.slice(0,-1)}`},railStyle:{top:"3px",height:"8px",backgroundColor:`${a.surface3}`},onChange:e=>{"number"===typeof e&&R&&(s?(Math.floor(e)!==Math.floor(""!==d?parseFloat(d):0)&&L(Math.floor(e)),c(e<1?"":e.toString())):(L(e),c(0===e?"":e.toFixed(2))))}}),(0,n.jsx)(Be,{inputMode:"decimal",autoComplete:"off",autoCorrect:"off",type:"text",pattern:"^[0-9]*[.,]?[0-9]*$",placeholder:"0",minLength:1,maxLength:79,spellCheck:"false",value:s&&""!==d?Math.floor(parseFloat(d)):d,onChange:e=>{var t;""===(t=e.target.value.replace(/,/g,"."))?(L(0),c("")):(s&&De.test(t)||!s&&Ye.test(t))&&(L(parseFloat(t)),c(t))}}),(0,n.jsxs)(Ae,{onClick:()=>{c(""),u(B),l()},children:[(0,n.jsx)(Le,{active:s,children:"Items"}),(0,n.jsx)(Le,{active:!s,children:"ETH"})]})]})]}),(0,n.jsxs)(Re,{children:[(0,n.jsx)(Q.Tv.SubHeader,{"font-size":"14px",children:`${o({input:A.toString(),type:y.sw.NFTToken})} ETH`}),(0,n.jsx)(Ue,{nfts:B})]})]})},We=[we.Fz.Opensea,we.Fz.X2Y2,we.Fz.LooksRare];function Ze(e,t,i,n){const r=(0,f.PY)((e=>e.traits)),a=(0,f.PY)((e=>e.markets)),o=!!a.length;return(0,F.useMemo)((()=>{if(o){if("others"===t){const t=a.filter((e=>!(0,we.g7)(e)));return t.length>0?{contractAddress:e,traits:r,markets:t}:{contractAddress:"",traits:[],markets:[]}}if(!a.includes(t))return{contractAddress:"",traits:[],markets:[]}}switch(t){case we.Fz.Sudoswap:case we.Fz.NFTX:case we.Fz.NFT20:return{contractAddress:e,traits:r,markets:[t],price:{low:i,high:n,symbol:"ETH"}};case"others":return{contractAddress:e,traits:r,markets:We,price:{low:i,high:n,symbol:"ETH"}}}}),[e,o,t,a,n,i,r])}const Ve=C.default.div.withConfig({displayName:"TraitChip__TraitChipWrap",componentId:"sc-29602959-0"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 6px 6px 12px;
  font-weight: 535;
  border-radius: 8px;
  background-color: ${({theme:e})=>e.surface3};
  font-size: 14px;
`,Ke=C.default.div.withConfig({displayName:"TraitChip__CrossIconWrap",componentId:"sc-29602959-1"})`
  color: ${({theme:e})=>e.neutral2};
  height: 28px;
  width: 28px;
  border: none;
  padding-top: 1px;
`,Ge=({onClick:e,value:t})=>(0,n.jsxs)(Ve,{children:[(0,n.jsx)("span",{children:t}),(0,n.jsx)(Ke,{onClick:e,children:(0,n.jsx)(O.aM,{cursor:"pointer"})})]}),qe=new Map,Je=C.css`
  margin: 0 16px;
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    margin: 0 20px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    margin: 0 26px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.lg}px) {
    margin: 0 48px;
  }
`,Qe=C.default.div.withConfig({displayName:"CollectionNfts__ActionsContainer",componentId:"sc-667c8a6-0"})`
  display: flex;
  flex: 1 1 auto;
  gap: 10px;
  justify-content: space-between;

  ${Je}
`,et=C.default.div.withConfig({displayName:"CollectionNfts__ActionsSubContainer",componentId:"sc-667c8a6-1"})`
  display: flex;
  gap: 12px;
  flex: 1;
  min-width: 0px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    gap: 10px;
  }
`,tt=C.default.div.withConfig({displayName:"CollectionNfts__SortDropdownContainer",componentId:"sc-667c8a6-2"})`
  width: max-content;
  height: 44px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.lg}px`}) {
    ${({isFiltersExpanded:e})=>e&&"display: none;"}
  }
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,it=C.default.div.withConfig({displayName:"CollectionNfts__EmptyCollectionWrapper",componentId:"sc-667c8a6-3"})`
  display: block;
  text-align: center;
`,nt=C.default.span.withConfig({displayName:"CollectionNfts__ViewFullCollection",componentId:"sc-667c8a6-4"})`
  ${s.cR}
`,rt=C.default.div.withConfig({displayName:"CollectionNfts__InfiniteScrollWrapper",componentId:"sc-667c8a6-5"})`
  ${Je}
`,at=C.default.div.withConfig({displayName:"CollectionNfts__SweepButton",componentId:"sc-667c8a6-6"})`
  display: flex;
  gap: 8px;
  border: none;
  border-radius: 12px;
  padding: 12px 18px 12px 12px;
  cursor: ${({disabled:e})=>e?"auto":"pointer"};
  color: ${({toggled:e,disabled:t,theme:i})=>e&&!t?i.deprecated_accentTextLightPrimary:i.neutral1};
  background: ${({theme:e,toggled:t,disabled:i})=>!i&&t?"radial-gradient(101.8% 4091.31% at 0% 0%, #4673FA 0%, #9646FA 100%)":e.surface3};
  opacity: ${({disabled:e})=>e?.4:1};
  :hover {
    background-color: ${({theme:e})=>e.surface3};
    transition: ${({theme:{transition:{duration:e,timing:t}}})=>`${e.fast} background-color ${t.in}`};
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    padding: 12px 12px 12px 12px;
  }
`,ot=(0,C.default)(Q.Tv.BodyPrimary).withConfig({displayName:"CollectionNfts__SweepText",componentId:"sc-667c8a6-7"})`
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,st=(0,C.default)(m.X2).withConfig({displayName:"CollectionNfts__MarketNameWrapper",componentId:"sc-667c8a6-8"})`
  gap: 8px;
`,lt=({height:e})=>(0,n.jsx)(h.n,{width:"full",className:L.P,children:(0,n.jsx)(Ne.p,{height:e})}),dt=()=>(0,n.jsx)(rt,{children:(0,n.jsxs)(m.sg,{alignItems:"flex-start",position:"relative",width:"full",children:[(0,n.jsxs)(m.X2,{marginY:"12",gap:"12",marginBottom:"40",children:[(0,n.jsx)(h.n,{className:me.S,borderRadius:"12",width:{sm:"44",md:"100"},height:"44"}),(0,n.jsx)(h.n,{className:me.S,borderRadius:"12",height:"44",display:{sm:"none",md:"flex"},style:{width:"220px"}}),(0,n.jsx)(h.n,{className:me.S,borderRadius:"12",height:"44",width:{sm:"276",md:"332"}})]}),(0,n.jsx)(lt,{})]})}),ct=(e,t)=>{const i=[{displayText:"Price: Low to High",onClick:()=>e(f.hn.LowToHigh),reverseIndex:2,sortBy:f.hn.LowToHigh},{displayText:"Price: High to Low",onClick:()=>e(f.hn.HighToLow),reverseIndex:1,sortBy:f.hn.HighToLow}];return t?i.concat([{displayText:"Rarity: Rare to Common",onClick:()=>e(f.hn.RareToCommon),reverseIndex:4,sortBy:f.hn.RareToCommon},{displayText:"Rarity: Common to Rare",onClick:()=>e(f.hn.CommonToRare),reverseIndex:3,sortBy:f.hn.CommonToRare}]):i},pt=({contractAddress:e,collectionStats:t,rarityVerified:i})=>{var o,s,l,d,c;const g=(0,Ie.x)(),u=(0,f.PY)((e=>e.traits)),w=(0,f.PY)((e=>e.minPrice)),y=(0,f.PY)((e=>e.maxPrice)),j=(0,f.PY)((e=>e.markets)),b=(0,f.PY)((e=>e.sortBy)),C=(0,f.PY)((e=>e.search)),_=(0,f.PY)((e=>e.setMarketCount)),k=(0,f.PY)((e=>e.setSortBy)),T=(0,f.PY)((e=>e.buyNow)),I=fe((e=>e.setPriceRangeLow)),N=fe((e=>e.priceRangeLow)),R=fe((e=>e.priceRangeHigh)),M=fe((e=>e.setPriceRangeHigh)),A=fe((e=>e.setPrevMinMax)),H=(0,xe.I)((e=>e.setIsCollectionNftsLoading)),D=(0,f.PY)((e=>e.removeTrait)),Y=(0,f.PY)((e=>e.removeMarket)),U=(0,f.PY)((e=>e.reset)),X=(0,f.PY)((e=>e.setMinPrice)),W=(0,f.PY)((e=>e.setMaxPrice)),Z=(0,f.PY)((e=>e.setHasRarity)),V=(0,f.cP)((e=>e.toggleBag)),K=(0,f.cP)((e=>e.bagExpanded)),G=(0,f.cP)((e=>e.itemsInBag)),q=(0,E.Z)(w,500),J=(0,E.Z)(y,500),Q=(0,E.Z)(C,500),[ee,te]=(0,F.useState)(we.Yp.unset),[ie,re]=(0,F.useState)(),[ae,oe]=(0,F.useState)(!1),se={address:e,orderBy:f.AZ[b].field,asc:f.AZ[b].asc,filter:{listed:T,marketplaces:j.length>0?j.map((e=>e.toUpperCase())):void 0,maxPrice:J?(0,z.parseEther)(J.toString()).toString():void 0,minPrice:q?(0,z.parseEther)(q.toString()).toString():void 0,tokenSearchQuery:Q,traits:u.length>0?u.map((e=>({name:e.trait_type,values:[e.trait_value]}))):void 0},first:$.iQ},{data:le,loading:de,hasNext:ce,loadMore:pe}=(0,$.gP)(se),ue=(0,F.useCallback)((e=>{const t=G.some((t=>e.tokenId===t.asset.tokenId&&e.address===t.asset.address));if(e.marketplace===we.Fz.Sudoswap){const i=G.filter((t=>(0,v.zA)(e,t.asset)));return t?i.findIndex((t=>t.asset.tokenId===e.tokenId)):i.length}return t?G.filter((t=>(0,v.H8)(e,t.asset))).findIndex((t=>t.asset.tokenId===e.tokenId)):G.filter((t=>(0,v.H8)(e,t.asset))).length}),[G]),he=(0,F.useCallback)((e=>(0,v.Pu)(e,ue(e))),[ue]),me=(0,F.useMemo)((()=>{if(!le||!le.some((e=>e.marketplace&&(0,we.g7)(e.marketplace))))return le;const e=[...le];return e.forEach((e=>e.marketplace&&(0,we.g7)(e.marketplace)&&(e.priceInfo.ETHPrice=he(e)??"0"))),b!==f.hn.HighToLow&&b!==f.hn.LowToHigh||e.sort(((e,t)=>{var i,n;const r=S.O$.from((null===(i=e.priceInfo)||void 0===i?void 0:i.ETHPrice)??0),a=S.O$.from((null===(n=t.priceInfo)||void 0===n?void 0:n.ETHPrice)??0);if(r.gt(0)&&a.lte(0))return-1;if(a.gt(0)&&r.lte(0))return 1;const o=r.sub(a);return o.gt(0)?b===f.hn.LowToHigh?1:-1:o.lt(0)?b===f.hn.LowToHigh?-1:1:0})),e}),[le,b,he]),[ve,ze]=(0,F.useState)(),[Pe,$e]=(0,f.wx)(),Ee=(0,F.useRef)(null),Re=(0,p.dD)(),Me=(0,p.eI)();(0,F.useEffect)((()=>{H(de)}),[de,H]);const Fe=(0,F.useMemo)((()=>{var e;const i=(0,v.oY)(qe,null===(e=t)||void 0===e?void 0:e.address,me)??!1;return Z(i),i}),[t.address,me,Z]),Be=(0,F.useMemo)((()=>ct(k,Fe)),[Fe,k]);(0,F.useEffect)((()=>(oe(!1),()=>{f.PY.setState(f.initialCollectionFilterState)})),[e]);const Ae=(0,F.useMemo)((()=>me?me.map((e=>(0,n.jsx)(B,{asset:e,isMobile:Re,mediaShouldBePlaying:e.tokenId===ve,setCurrentTokenPlayingMedia:ze,rarityVerified:i,uniformAspectRatio:ee,setUniformAspectRatio:te,renderedHeight:ie,setRenderedHeight:re},e.address+e.tokenId))):null),[me,Re,ve,i,ee,ie]),Le=me&&me.length>0,He=Le&&me[0]&&(null===(o=me[0])||void 0===o?void 0:o.tokenType)===Te.hgB.Erc1155,Oe=(0,F.useMemo)((()=>q&&J?`Price: ${q} - ${J} ETH`:q?`Min. Price: ${q} ETH`:J?`Max Price: ${J} ETH`:void 0),[q,J]);(0,F.useEffect)((()=>{var e,i;const n={};null===(i=t)||void 0===i||null===(e=i.marketplaceCount)||void 0===e||e.forEach((({marketplace:e,count:t})=>{n[e]=t})),_(n),Ee.current=f.PY.getState()}),[null===(s=t)||void 0===s?void 0:s.marketplaceCount,_]);const De=(0,ke.TH)();(0,F.useEffect)((()=>{var e;if(null===(e=t)||void 0===e?void 0:e.traits){const e=((e,t)=>{if(!e.search)return;const i=je.parse(e.search,{arrayFormat:"comma",parseNumbers:!0,parseBooleans:!0});return Ce(i,t)})(De,t);requestAnimationFrame((()=>{e&&f.PY.setState(e)})),f.PY.subscribe((e=>{JSON.stringify(Ee.current)!==JSON.stringify(e)&&((e=>{const t={};["markets","maxPrice","maxRarity","minPrice","minRarity","traits","all","search","sort"].forEach((i=>{switch(i){case"traits":{const i=e.traits.map((({trait_type:e,trait_value:t})=>`("${e}","${t}")`));t.traits=i;break}case"all":t.all=!e.buyNow;break;case"sort":t.sort=f.i9[e.sortBy];break;default:t[i]=e[i]}}));const i=be(t),n=window.location.href.split("?")[0],r=je.stringify(i,{arrayFormat:"comma"});window.history.replaceState({},"",`${n}${r&&`?${r}`}`)})(e),Ee.current=e)}))}}),[De]),(0,F.useEffect)((()=>{te(we.Yp.unset),re(void 0)}),[e]),(0,F.useEffect)((()=>{var e;if(t&&(null===(e=t.stats)||void 0===e?void 0:e.floor_price)){var i,n;const e=null===(i=t.stats)||void 0===i?void 0:i.floor_price,a=10*(null===(n=t.stats)||void 0===n?void 0:n.floor_price);var r;if(""===N)I(null===(r=e)||void 0===r?void 0:r.toFixed(2));""===R&&M(a.toFixed(2))}}),[t,N,R,M,I]);const Ye=(0,F.useCallback)((()=>{He||(ae||(ye(),K||Re||V()),oe(!ae))}),[K,He,Re,ae,V]),Ue=(0,F.useCallback)((()=>{U(),A([0,100]),ye()}),[U,A]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(h.x,{backgroundColor:"surface1",position:"sticky",top:"72",width:"full",zIndex:"3",marginBottom:{sm:"8",md:"20"},paddingTop:"16",paddingBottom:"16",children:[(0,n.jsxs)(Qe,{children:[(0,n.jsxs)(et,{children:[(0,n.jsx)(a.M8,{events:[r.TM.onClick],element:r.xo.NFT_FILTER_BUTTON,name:r.Yz.NFT_FILTER_OPENED,shouldLogImpression:!Pe,properties:{collection_address:e,chain_id:g},children:(0,n.jsx)(Bt.L,{isMobile:Re,isFiltersExpanded:Pe,collectionCount:(null===(d=me)||void 0===d||null===(l=d[0])||void 0===l?void 0:l.totalCount)??0,onClick:()=>{K&&!Me.xl&&V(),$e(!Pe)}})}),(0,n.jsx)(tt,{isFiltersExpanded:Pe,children:(0,n.jsx)(ge,{dropDownOptions:Be})}),(0,n.jsx)(gt,{})]}),!He&&(0,n.jsxs)(at,{toggled:ae,disabled:He,className:x.km,onClick:Ye,"data-testid":"nft-sweep-button",children:[(0,n.jsx)(O.UV,{viewBox:"0 0 24 24",width:"20px",height:"20px"}),(0,n.jsx)(ot,{fontWeight:535,color:"currentColor",lineHeight:"20px",children:"Sweep"})]})]}),(0,n.jsxs)(rt,{children:[ae&&(0,n.jsx)(Xe,{contractAddress:e,minPrice:q,maxPrice:J}),(0,n.jsxs)(m.X2,{paddingTop:j.length||u.length||Oe?"12":"0",gap:"8",flexWrap:"wrap",children:[j.map((e=>(0,n.jsx)(Ge,{value:(0,n.jsxs)(st,{children:[(0,v.Dp)(e,"16"),ne[e]]}),onClick:()=>{ye(),Y(e)}},e))),u.map((e=>(0,n.jsx)(Ge,{value:"Number of traits"===e.trait_type?`${e.trait_value} trait${(0,v._6)(Number(e.trait_value))}`:`${e.trait_type}: ${e.trait_value}`,onClick:()=>{ye(),D(e)}},e.trait_value))),Oe&&(0,n.jsx)(Ge,{value:Oe,onClick:()=>{ye(),X(""),W(""),A([0,100])}}),Boolean(u.length||j.length||Oe)&&(0,n.jsx)(Se.v,{onClick:Ue,children:"Clear All"})]})]})]}),(0,n.jsx)(rt,{children:de?(0,n.jsx)(lt,{height:ie}):(0,n.jsx)(_e.Z,{next:pe,hasMore:ce??!1,loader:Boolean(ce&&Le)&&(0,n.jsx)(Ne.p,{}),dataLength:(null===(c=me)||void 0===c?void 0:c.length)??0,style:{overflow:"unset"},className:Le?L.P:void 0,children:Le?Ae:(0,n.jsx)(m.M5,{width:"full",color:"neutral2",textAlign:"center",style:{height:"60vh"},children:(0,n.jsxs)(it,{children:[(0,n.jsx)("p",{className:x.Es,children:"No NFTS found"}),(0,n.jsx)(h.n,{onClick:U,type:"button",className:(0,P.default)(x.Km,x.km),color:"accent1",cursor:"pointer",children:(0,n.jsx)(nt,{children:"View full collection"})})]})})})})]})};const gt=()=>{const e=(0,K.PY)((e=>e.setSearch)),t=(0,K.PY)((e=>e.search)),i=(0,f.Iv)((e=>e.isCollectionStatsLoading));return(0,n.jsx)(h.n,{as:"input",flex:"1",borderColor:{default:"surface3",focus:"accent1"},borderWidth:"1.5px",borderStyle:"solid",borderRadius:"12",padding:"12",backgroundColor:"surface1",maxWidth:"332",minWidth:"0",fontSize:"16",fontWeight:"book",height:"44",color:{placeholder:"neutral3",default:"neutral1"},value:t,placeholder:i?"":"Search by name",className:(0,P.default)(i&&"_2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez88d"),onChange:t=>{e(t.currentTarget.value)}})};var ut=i(19478);const ht=e=>0===e?"0":e?e<1?"<1":Math.round(e).toString():"";var mt=i(35339),xt=i.n(mt),ft="_2kdvfw1 jinxmn3 rgw6ez343 rgw6ez7zp rgw6ez89l rgw6ez553 rgw6ez81x rgw6ez48l jinxmnf",wt="jinxmn3 rgw6ez343 rgw6ez7zp rgw6ez89l rgw6ez553 rgw6ez81x rgw6ez48l rgw6ez6rr",vt="jinxmn1 rgw6ezwf rgw6ezya rgw6ezf3 rgw6ezha";const yt=C.default.div.withConfig({displayName:"CollectionStats__PercentChange",componentId:"sc-11fce3a4-0"})`
  color: ${({theme:e,isNegative:t})=>t?e.critical:e.success};
  display: flex;
  align-items: center;
  justify-content: center;
`,jt=C.default.h1.withConfig({displayName:"CollectionStats__CollectionNameText",componentId:"sc-11fce3a4-1"})`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  margin-right: ${({isVerified:e})=>e?"6px":"0px"};
`,bt=C.default.div.withConfig({displayName:"CollectionStats__CollectionNameTextLoading",componentId:"sc-11fce3a4-2"})`
  ${me.S}
  height: 32px;
  width: 236px;
`,Ct=C.default.div.withConfig({displayName:"CollectionStats__MobileSocialsOverflowIcon",componentId:"sc-11fce3a4-3"})`
  display: flex;
  margin-left: 4px;
  flex-direction: column;
  justify-content: center;
  height: 28px;
`,_t=({children:e,href:t})=>(0,n.jsx)(h.n,{display:"flex",as:"a",target:"_blank",rel:"noreferrer",href:t,height:"40",width:"40",borderRadius:"round",backgroundColor:"surface1",children:e}),kt=({collectionStats:e,collectionSocialsIsOpen:t,toggleCollectionSocials:i})=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Ct,{onClick:i,children:t?(0,n.jsx)(O.DX,{width:"28",height:"28",fill:D.Z4.colors.neutral2}):(0,n.jsx)(O.ws,{width:"28",height:"20",fill:D.Z4.colors.neutral2})}),t&&(0,n.jsxs)(m.X2,{position:"absolute",gap:"4",alignItems:"center",justifyContent:"center",style:{top:"-48px",right:"-6px"},children:[e.discordUrl?(0,n.jsx)(_t,{href:e.discordUrl,children:(0,n.jsx)(h.n,{margin:"auto",paddingTop:"4",children:(0,n.jsx)(O.D7,{width:28,height:28,color:D.Z4.colors.neutral2})})}):null,e.twitterUrl?(0,n.jsx)(_t,{href:"https://twitter.com/"+e.twitterUrl,children:(0,n.jsx)(h.n,{margin:"auto",paddingTop:"6",children:(0,n.jsx)(O.Zm,{fill:D.Z4.colors.neutral2,color:D.Z4.colors.neutral2,width:"28px",height:"28px"})})}):null,e.instagram?(0,n.jsx)(_t,{href:"https://instagram.com/"+e.instagram,children:(0,n.jsx)(h.n,{margin:"auto",paddingLeft:"2",paddingTop:"4",children:(0,n.jsx)(O.yu,{fill:D.Z4.colors.neutral2,width:"28px",height:"28px"})})}):null,e.externalUrl?(0,n.jsx)(_t,{href:e.externalUrl,children:(0,n.jsx)(h.n,{margin:"auto",paddingTop:"4",children:(0,n.jsx)(O.O1,{fill:D.Z4.colors.neutral2,width:"28px",height:"28px"})})}):null]})]}),Tt=({children:e,href:t})=>(0,n.jsx)(m.sg,{as:"a",target:"_blank",rel:"noreferrer",href:t,height:"full",justifyContent:"center",children:e}),It=({collectionStats:e,name:t,isVerified:i,isMobile:r,collectionSocialsIsOpen:a,toggleCollectionSocials:o})=>{const s=(0,xe.I)((e=>e.isCollectionStatsLoading));return(0,n.jsxs)(m.X2,{justifyContent:"space-between",children:[(0,n.jsxs)(m.X2,{minWidth:"0",children:[s?(0,n.jsx)(bt,{}):(0,n.jsx)(jt,{isVerified:i,className:r?x.td:x.Es,children:t}),i&&(0,n.jsx)(O.SA,{style:{width:"32px",height:"32px"}}),(0,n.jsxs)(m.X2,{display:{sm:"none",md:"flex"},alignItems:"center",justifyContent:"center",marginLeft:"32",gap:"8",height:"32",children:[e.discordUrl?(0,n.jsx)(Tt,{href:e.discordUrl??"",children:(0,n.jsx)(O.D7,{fill:D.Z4.colors.neutral2,color:D.Z4.colors.neutral2,width:"26px",height:"26px"})}):null,e.twitterUrl?(0,n.jsx)(Tt,{href:"https://twitter.com/"+e.twitterUrl,children:(0,n.jsx)(O.Zm,{fill:D.Z4.colors.neutral2,color:D.Z4.colors.neutral2,width:"26px",height:"26px"})}):null,e.instagram?(0,n.jsx)(Tt,{href:"https://instagram.com/"+e.instagram,children:(0,n.jsx)(O.yu,{fill:D.Z4.colors.neutral2,width:"26px",height:"26px"})}):null,e.externalUrl?(0,n.jsx)(Tt,{href:e.externalUrl??"",children:(0,n.jsx)(O.O1,{fill:D.Z4.colors.neutral2,width:"26px",height:"26px"})}):null]})]}),r&&(e.discordUrl||e.twitterUrl||e.instagram||e.externalUrl)&&(0,n.jsx)(kt,{collectionStats:e,collectionSocialsIsOpen:a,toggleCollectionSocials:o})]})},Nt=C.default.p.withConfig({displayName:"CollectionStats__CollectionDescriptionText",componentId:"sc-11fce3a4-4"})`
  vertical-align: top;
  text-overflow: ellipsis;
  margin: 0;

  ${({readMore:e})=>e?C.css`
          white-space: normal;
          overflow: visible;
          display: inline;
          max-width: 100%;
        `:C.css`
          white-space: nowrap;
          overflow: hidden;
          display: inline-block;
          max-width: min(calc(100% - 112px), 600px);
        `}

  a[href] {
    color: ${({theme:e})=>e.neutral2};
    text-decoration: none;

    :hover {
      opacity: ${({theme:e})=>e.opacity.hover};
    }

    :focus {
      opacity: ${({theme:e})=>e.opacity.click};
    }
  }
`,St=C.default.span.withConfig({displayName:"CollectionStats__ReadMore",componentId:"sc-11fce3a4-5"})`
  vertical-align: top;
  color: ${({theme:e})=>e.neutral2};
  cursor: pointer;
  margin-left: 4px;
`,zt=()=>(0,n.jsx)(h.n,{marginTop:{sm:"12",md:"16"},className:"jinxmnc _2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez199"}),Pt=({description:e})=>{const[t,i]=(0,F.useState)(!1),[r,a]=(0,F.useReducer)((e=>!e),!1),o=(0,F.useRef)(null),s=(0,F.useRef)(null),l=(0,xe.I)((e=>e.isCollectionStatsLoading)),d=(0,p.dD)();return(0,F.useEffect)((()=>{var e;o&&s&&o.current&&s.current&&(s.current.getBoundingClientRect().width>=(null===(e=o.current)||void 0===e?void 0:e.getBoundingClientRect().width)-112||s.current.getBoundingClientRect().width>=590)?i(!0):i(!1)}),[s,o,l,e]),l?(0,n.jsx)(zt,{}):(0,n.jsxs)(h.n,{ref:o,marginTop:{sm:"12",md:"16"},style:{maxWidth:"680px"},children:[(0,n.jsx)(Nt,{readMore:r,ref:s,className:d?x.Km:x.d1,children:(0,n.jsx)(xt(),{source:e,allowedTypes:["link","paragraph","strong","code","emphasis","text"],renderers:{paragraph:"span"}})}),t&&(0,n.jsxs)(St,{className:d?x.Km:x.d1,onClick:a,children:["show ",r?"less":"more"]})]})},$t=({children:e,label:t,shouldHide:i})=>(0,n.jsxs)(h.n,{display:i?"none":"flex",flexDirection:"column",alignItems:"baseline",gap:"2",height:"min",children:[(0,n.jsx)(Q.Tv.SubHeader,{className:"jinxmn6 rgw6ezd9 rgw6ezbl rgw6ezef",children:e}),(0,n.jsx)(h.n,{as:"span",className:"jinxmn5 rgw6ezd3 rgw6ezb9 rgw6ezdr rgw6ez4bf rgw6ez45l",children:t})]}),Et=e=>new Array(e?3:5).fill(null).map(((t,i)=>(0,n.jsxs)(h.n,{display:"flex",flexDirection:"column",alignItems:"baseline",gap:"2",height:"min",marginBottom:e?"12":"0",children:[(0,n.jsx)("div",{className:"_2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez14f rgw6ez18x"}),(0,n.jsx)("span",{className:"_2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez14f rgw6ez199 rgw6ezwf"})]},`statsLoadingSkeleton-key-${i}`))),Rt=({stats:e,isMobile:t,...i})=>{var r,a,o,s,l,d,c,g,u,h,x,w,v,j;const{formatNumberOrString:b,formatDelta:C}=(0,y.Gb)(),_=(null===(a=e)||void 0===a||null===(r=a.stats)||void 0===r?void 0:r.total_supply)?ht((e.stats.num_owners??0)/e.stats.total_supply*100):0,k=e.stats?b({input:e.stats.total_supply??0,type:y.sw.NFTCollectionStats}):0,T=(null===(s=e)||void 0===s||null===(o=s.stats)||void 0===o?void 0:o.total_supply)?ht((e.stats.total_listings??0)/e.stats.total_supply*100):0,I=(0,xe.I)((e=>e.isCollectionStatsLoading)),N=b({input:Number(null===(l=e.stats)||void 0===l?void 0:l.total_volume)??0,type:y.sw.NFTCollectionStats}),S=b({input:(null===(d=e.stats)||void 0===d?void 0:d.floor_price)??0,type:y.sw.NFTTokenFloorPrice}),z=C(Math.round(Math.abs((null===(g=e)||void 0===g||null===(c=g.stats)||void 0===c?void 0:c.one_day_floor_change)??0))),P=(0,f.cP)((e=>e.bagExpanded)),$=(0,p.eI)(),E=t||!$.lg&&P;return(0,n.jsx)(m.X2,{gap:{sm:"24",md:"36",lg:"48",xl:"60"},...i,children:I?Et(t??!1):(0,n.jsxs)(n.Fragment,{children:[(null===(u=e.stats)||void 0===u?void 0:u.floor_price)?(0,n.jsxs)($t,{label:"Global floor",shouldHide:!1,children:[S," ETH"]}):null,void 0!==(null===(h=e.stats)||void 0===h?void 0:h.one_day_floor_change)?(0,n.jsx)($t,{label:"Floor 24H",shouldHide:!1,children:(0,n.jsxs)(yt,{isNegative:e.stats.one_day_floor_change<0,children:[(0,n.jsx)(ut.Kx,{delta:null===(w=e)||void 0===w||null===(x=w.stats)||void 0===x?void 0:x.one_day_floor_change}),z]})}):null,(null===(v=e.stats)||void 0===v?void 0:v.total_volume)?(0,n.jsxs)($t,{label:"Total volume",shouldHide:!1,children:[N," ETH"]}):null,k?(0,n.jsx)($t,{label:"Items",shouldHide:t??!1,children:k}):null,_&&e.standard!==we.iv.ERC1155?(0,n.jsxs)($t,{label:"Unique owners",shouldHide:E??!1,children:[_,"%"]}):null,(null===(j=e.stats)||void 0===j?void 0:j.total_listings)&&e.standard!==we.iv.ERC1155?(0,n.jsxs)($t,{label:"Listed",shouldHide:E??!1,children:[T,"%"]}):null]})})},Mt=({isMobile:e})=>(0,n.jsxs)(m.sg,{position:"relative",width:"full",children:[(0,n.jsx)(h.n,{className:wt}),(0,n.jsx)(h.n,{className:ft}),(0,n.jsxs)(h.n,{className:vt,children:[(0,n.jsx)(h.n,{className:"jinxmni _2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez19x"}),!e&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(zt,{}),(0,n.jsx)(m.X2,{gap:"60",marginTop:"20",children:Et(!1)})]})]}),e&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(zt,{}),(0,n.jsx)(m.X2,{gap:"20",marginTop:"20",children:Et(!0)})]})]}),Ft=({stats:e,isMobile:t})=>{const[i,r]=(0,F.useReducer)((e=>!e),!1),a=(0,xe.I)((e=>e.isCollectionStatsLoading));return(0,n.jsxs)(h.n,{display:"flex",marginTop:t&&!e.bannerImageUrl?i?"52":"20":"0",justifyContent:"center",position:"relative",flexDirection:"column",width:"full",children:[a&&(0,n.jsx)(h.n,{as:"div",borderRadius:"round",position:"absolute",className:wt}),(0,n.jsx)(h.n,{as:a?"div":"img",background:"white",borderRadius:"round",position:"absolute",className:a?ft:"jinxmn3 rgw6ez343 rgw6ez7zp rgw6ez89l rgw6ez553 rgw6ez81x rgw6ez48l",src:e.imageUrl}),(0,n.jsxs)(h.n,{className:vt,children:[(0,n.jsx)(It,{collectionStats:e,name:e.name??"",isVerified:e.isVerified??!1,isMobile:t,collectionSocialsIsOpen:i,toggleCollectionSocials:r}),(e.description||a)&&!t&&(0,n.jsx)(Pt,{description:e.description??""}),(0,n.jsx)(Rt,{display:{sm:"none",md:"flex"},overflow:"hidden",stats:e,marginTop:"20"})]}),(e.description||a)&&t&&(0,n.jsx)(Pt,{description:e.description??""}),(0,n.jsx)("div",{id:"nft-anchor-mobile"}),(0,n.jsx)(Rt,{isMobile:!0,display:{sm:"flex",md:"none"},stats:e,marginTop:"20",marginBottom:"12"})]})};var Bt=i(48714),At=i(87175),Lt=i(3638),Ht="rgw6ezd3 rgw6ezbf rgw6eze9 rgw6ez6w3 rgw6ez2u9 rgw6ez80x rgw6ez7zp rgw6ez899";const Ot=C.default.div.withConfig({displayName:"TraitsHeader__ChildreMobileWrapper",componentId:"sc-646f1a63-0"})`
  padding: ${({isMobile:e})=>e?"0px 16px 0px 12px":"0px"};
`,Dt=e=>{const{children:t,index:i,title:r}=e,[a,o]=(0,F.useState)(!1),s=J((e=>e.traitsOpen)),l=J((e=>e.setTraitsOpen)),d=(0,p.dD)(),c=void 0!==i&&s[i-1],g=i!==A.TRAIT_START_INDEX;return(0,F.useEffect)((()=>{void 0!==i&&l(i,a)}),[a,i,l]),(0,n.jsxs)(n.Fragment,{children:[g&&(0,n.jsx)(h.n,{className:(0,P.default)(x.Nf,!a&&V,X),opacity:!c&&a&&0!==i?"1":"0",marginTop:c?"0":"8"}),(0,n.jsxs)(h.n,{as:"details",className:(0,P.default)(x.Nf,!a&&V),open:a,children:[(0,n.jsxs)(h.n,{as:"summary",className:`${Z} ${V}`,onClick:e=>{e.preventDefault(),o(!a)},children:[r,(0,n.jsxs)(h.n,{display:"flex",alignItems:"center",children:[(0,n.jsx)(h.n,{color:"neutral2",display:"inline-block",marginRight:"12",children:e.numTraits}),(0,n.jsx)(h.n,{className:Y,style:{transform:`rotate(${a?0:180}deg)`},children:(0,n.jsx)(O.g8,{className:U})})]})]}),(0,n.jsx)(Ot,{isMobile:d,children:t})]})]})},Yt=(0,C.default)(ze.Z).withConfig({displayName:"PriceRange__StyledSlider",componentId:"sc-7655689-0"})`
  cursor: pointer;
`,Ut=()=>{const[e,t]=(0,F.useState)(""),i=(0,K.PY)((e=>e.setMinPrice)),o=(0,K.PY)((e=>e.setMaxPrice)),s=(0,K.PY)((e=>e.minPrice)),l=(0,K.PY)((e=>e.maxPrice)),d=fe((e=>e.priceRangeLow)),c=fe((e=>e.priceRangeHigh)),p=fe((e=>e.setPriceRangeLow)),g=fe((e=>e.setPriceRangeHigh)),u=fe((e=>e.prevMinMax)),f=fe((e=>e.setPrevMinMax)),w=(0,C.useTheme)(),v=(0,ke.TH)();(0,F.useEffect)((()=>{i(""),o(""),p(""),g("")}),[v.pathname,i,o,p,g]);const y=e=>{t(e.currentTarget.placeholder),e.currentTarget.placeholder=""},j=i=>{i.currentTarget.placeholder=e,t(""),(s||l)&&(0,a._P)(r.Yz.NFT_FILTER_SELECTED,{filter_type:r.fm.PRICE_RANGE})};return(0,n.jsxs)(Dt,{title:"Price range",index:A.PRICE_RANGE_INDEX,children:[(0,n.jsxs)(m.X2,{marginTop:"12",color:"neutral1",justifyContent:"space-between",children:[(0,n.jsx)(m.X2,{position:"relative",children:(0,n.jsx)(At.A,{style:{width:"126px"},className:Ht,placeholder:d,onChange:e=>{const[,t]=u;if(e.currentTarget.value){const i=parseInt(e.currentTarget.value)-parseInt(d),n=Math.floor(i/(parseInt(c)-parseInt(d))*100);parseInt(e.currentTarget.value)>=parseInt(l)?f([t,t]):f([n,t])}else f([0,t]);i(e.currentTarget.value.toString()),ye()},onFocus:y,value:s,onBlur:j})}),(0,n.jsx)(h.n,{className:x.d1,children:"to"}),(0,n.jsx)(m.X2,{position:"relative",children:(0,n.jsx)(At.A,{style:{width:"126px"},className:Ht,placeholder:c,value:l,onChange:e=>{const[t]=u;if(e.currentTarget.value){const i=parseInt(c)-parseInt(e.currentTarget.value),n=Math.floor(100-i/(parseInt(c)-parseInt(d))*100);parseInt(e.currentTarget.value)<=parseInt(s)?f([t,t]):f([t,n])}else f([t,100]);o(e.currentTarget.value),ye()},onFocus:y,onBlur:j})})]}),(0,n.jsx)(m.X2,{marginTop:"24",marginBottom:"12",paddingLeft:"8",paddingRight:"8",children:(0,n.jsx)(Yt,{defaultValue:[0,100],min:0,max:100,range:!0,step:1e-4,value:u,trackStyle:{top:"3px",height:"8px",background:`${w.accent1}`},handleStyle:{top:"3px",width:"12px",height:"20px",opacity:"1",backgroundColor:"white",borderRadius:"4px",border:"none",boxShadow:Lt.I.deprecated_shallowShadow.slice(0,-1)},railStyle:{top:"3px",height:"8px",backgroundColor:`${w.accent2}`},onChange:e=>{if("number"===typeof e)return;const[t,n]=e,r=parseFloat(c.replace(/,/g,"")),a=parseFloat(d.replace(/,/g,"")),s=r-a,l=r-(100-n)/100*s;i((t/100*s+a).toFixed(2).toString()),o(l.toFixed(2).toString()),0===t&&i(""),100===n&&o(""),f(e)}})})]})};var Xt=i(12843),Wt=i(40848),Zt=i(1285),Vt=i(43328);const Kt=({trait:e,addTrait:t,removeTrait:i,isTraitSelected:o,style:s})=>{const[l,d]=(0,F.useState)(!1),[c,p]=(0,F.useState)(!1),g=()=>p(!c),u=(0,K.PY)((e=>e.toggleShowFullTraitName)),{shouldShow:f,trait_value:w,trait_type:v}=(0,K.PY)((e=>e.showFullTraitName));(0,F.useEffect)((()=>{d(o)}),[o]);const y=n=>{n.preventDefault(),ye(),l?(i(e),d(!1)):(t(e),d(!0)),(0,a._P)(r.Yz.NFT_FILTER_SELECTED,{filter_type:r.fm.TRAIT})},j=f&&v===e.trait_type&&w===e.trait_value;return(0,n.jsxs)(m.X2,{maxWidth:"full",overflowX:"hidden",overflowY:"hidden",fontWeight:"book",className:`${x.Nf} _10b1b4v5`,justifyContent:"space-between",cursor:"pointer",paddingLeft:"12",paddingRight:"16",borderRadius:"12",style:{paddingBottom:"22px",paddingTop:"22px",...s},maxHeight:"44",onMouseEnter:g,onMouseLeave:g,onClick:y,children:[(0,n.jsx)(h.n,{as:"span",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",style:{minHeight:15},maxWidth:j?"full":"160",onMouseOver:t=>(t=>{t.currentTarget.offsetWidth<t.currentTarget.scrollWidth&&u({shouldShow:!0,trait_value:e.trait_value,trait_type:e.trait_type})})(t),onMouseLeave:()=>u({shouldShow:!1,trait_type:"",trait_value:""}),children:"Number of traits"===e.trait_type?`${e.trait_value} trait${(0,Wt._)(Number(e.trait_value))}`:e.trait_value}),(0,n.jsx)(ee.X,{checked:l,hovered:c,onChange:y,children:(0,n.jsx)(h.n,{as:"span",color:"neutral2",minWidth:"8",paddingTop:"2",paddingRight:"12",position:"relative",children:!j&&e.trait_count})})]},e.trait_value)},Gt=({traits:e,type:t,index:i})=>{const r=(0,K.PY)((e=>e.addTrait)),a=(0,K.PY)((e=>e.removeTrait)),o=(0,K.PY)((e=>e.traits)),[s,l]=(0,F.useState)(""),d=(0,E.Z)(s,300),c=(0,F.useMemo)((()=>e.filter((e=>{var t;return null===(t=e.trait_value)||void 0===t?void 0:t.toString().toLowerCase().includes(d.toLowerCase())}))),[d,e]),p=(0,F.useCallback)((function({data:e,index:t,style:i}){const s=e[t],l=o.find((({trait_type:e,trait_value:t})=>e===s.trait_type&&String(t)===String(s.trait_value)));return(0,n.jsx)(Kt,{style:i,isTraitSelected:!!l,trait:s,addTrait:r,removeTrait:a})}),[o,r,a]),g=(0,F.useCallback)(((e,t)=>{const i=t[e];return`${i.trait_type}_${i.trait_value}_${e}`}),[]);return e.length?(0,n.jsxs)(Dt,{index:i,numTraits:e.length,title:t,children:[(0,n.jsx)(At.I,{value:s,onChange:e=>l(e.currentTarget.value),placeholder:"Search",marginTop:"8",marginBottom:"8",autoComplete:"off",position:"static",width:"full"}),(0,n.jsx)(m.sg,{className:W,style:{height:`${Math.min(44*c.length,302)}px`},children:(0,n.jsx)(Zt.ZP,{disableWidth:!0,children:({height:e})=>(0,n.jsx)(Vt.t7,{height:e,width:"100%",itemData:c,itemCount:c.length,itemSize:44,itemKey:g,children:({index:e,style:t,data:i})=>(0,n.jsx)(p,{style:t,data:i,index:e},g(e,i))})})})]}):null},qt=({traitsByGroup:e})=>{const{buyNow:t,setBuyNow:i}=(0,f.PY)((e=>({buyNow:e.buyNow,setBuyNow:e.setBuyNow}))),r=(0,f.PY)((e=>e.setSortBy)),a=(0,f.PY)((e=>e.hasRarity)),[o,s]=(0,F.useReducer)((e=>!e),!1),l=()=>{i(!t)},d=(0,F.useMemo)((()=>ct(r,a??!1)),[a,r]);return(0,n.jsxs)(h.n,{className:"_10b1b4v1 rgw6ez8bx rgw6ez1ef rgw6ez2o3 rgw6ezlf rgw6ezng",children:[(0,n.jsx)(m.X2,{width:"full",justifyContent:"space-between"}),(0,n.jsxs)(m.sg,{marginTop:"8",children:[(0,n.jsxs)(m.X2,{justifyContent:"space-between",className:`${Z} ${V}`,gap:"2",borderRadius:"12",paddingTop:"12",paddingBottom:"12",paddingLeft:"12",onClick:e=>{e.preventDefault(),l()},onMouseEnter:s,onMouseLeave:s,children:[(0,n.jsx)(h.n,{"data-testid":"nft-collection-filter-buy-now",className:x.v4,children:"Buy now"}),(0,n.jsx)(ee.X,{hovered:o,checked:t,onClick:l,children:(0,n.jsx)("span",{})})]}),Xt.isMobile&&(0,n.jsx)(ce,{sortDropDownOptions:d}),(0,n.jsx)(se,{}),(0,n.jsx)(Ut,{}),Object.entries(e).length>0&&(0,n.jsx)(h.n,{as:"span",color:"neutral2",paddingLeft:"8",marginTop:"12",marginBottom:"12",className:"rgw6ez80d rgw6ez6df rgw6ez8ap"}),(0,n.jsx)(m.sg,{children:Object.entries(e).map((([e,t],i)=>(0,n.jsx)(Gt,{type:e,traits:t,index:i+A.TRAIT_START_INDEX},e)))})]})]})};var Jt=i(40976);const Qt=(0,C.default)(o.ZP).withConfig({displayName:"CollectionPageSkeleton__CollectionDescriptionSection",componentId:"sc-e3ffcf95-0"})`
  ${Jt.bc}
`,ei=(0,C.default)(o.ZP).withConfig({displayName:"CollectionPageSkeleton__StyledColumn",componentId:"sc-e3ffcf95-1"})`
  width: ${({isBagExpanded:e})=>e?`calc(100% - ${u.ZI+16}px)`:"100%"};
  align-self: start;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.xxxl}px`}) {
    width: ${({isBagExpanded:e})=>e?`calc(100% - ${u.zD+16}px)`:"100%"};
  }
`,ti=(0,C.default)(l.ZP).withConfig({displayName:"CollectionPageSkeleton__StyledRow",componentId:"sc-e3ffcf95-2"})`
  gap: 24px;
  margin-bottom: 28px;
`,ii=()=>{const e=(0,f.cP)((e=>e.bagExpanded)),t=(0,p.dD)();return(0,n.jsxs)(ei,{isBagExpanded:e,children:[(0,n.jsx)(vi,{children:(0,n.jsx)(hi,{})}),(0,n.jsxs)(Qt,{children:[(0,n.jsx)(Mt,{isMobile:t}),(0,n.jsx)(ti,{children:I})]}),(0,n.jsx)(dt,{})]})};var ni=i(32207),ri=i(57221);const ai=(0,C.default)(o.ZP).withConfig({displayName:"UnavailableCollectionPage__Container",componentId:"sc-e20f133d-0"})`
  height: 75vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 48px;
  gap: 8px;
`,oi=(0,C.default)(Q.dL).withConfig({displayName:"UnavailableCollectionPage__StyledExternalLink",componentId:"sc-e20f133d-1"})`
  color: ${({theme:e})=>e.neutral2};
`;function si({isBlocked:e}){const t=(0,C.useTheme)();return e?(0,n.jsxs)(ai,{children:[(0,n.jsx)(ri.Z,{width:"48px",height:"48px",stroke:t.background,strokeWidth:"1px",fill:t.critical,"data-testid":"alert-icon"}),(0,n.jsx)(Q.Tv.HeadlineMedium,{children:(0,n.jsx)(g.cC,{children:"This collection is blocked"})}),(0,n.jsx)(Q.m_,{to:"/nfts",children:(0,n.jsx)(g.cC,{children:"Return to NFT Explore"})}),(0,n.jsx)(oi,{href:ni.c.UNSUPPORTED_TOKEN_AND_NFT_POLICY,children:(0,n.jsx)(g.cC,{children:"Learn why"})})]}):(0,n.jsxs)(ai,{children:[(0,n.jsx)(Q.Tv.HeadlineMedium,{children:(0,n.jsx)(g.cC,{children:"No collection assets exist at this address"})}),(0,n.jsx)(Q.m_,{to:"/nfts",children:(0,n.jsx)(g.cC,{children:"Return to NFT Explore"})})]})}var li=i(37018),di=i(437),ci=i(76907),pi=i(55874),gi=i(62587);const ui={},hi=(0,C.default)(d.X).withConfig({displayName:"collection__CollectionBannerLoading",componentId:"sc-7a210954-0"})`
  width: 100%;
  height: 100%;
  border-radius: 0px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    border-radius: 16px;
  }
`,mi=(0,C.default)(o.ZP).withConfig({displayName:"collection__CollectionContainer",componentId:"sc-7a210954-1"})`
  width: 100%;
  align-self: start;
  will-change: width;
`,xi=(0,ci.q)(mi),fi=C.default.div.withConfig({displayName:"collection__CollectionAssetsContainer",componentId:"sc-7a210954-2"})`
  position: ${({hideUnderneath:e})=>e?"fixed":"static"};
`,wi=(0,ci.q)(fi),vi=C.default.div.withConfig({displayName:"collection__BannerWrapper",componentId:"sc-7a210954-3"})`
  height: 100px;
  max-width: 100%;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    margin-top: 16px;
    margin-left: 20px;
    margin-right: 20px;
    height: 288px;
  }
`,yi=C.default.div.withConfig({displayName:"collection__Banner",componentId:"sc-7a210954-4"})`
  height: 100%;
  width: 100%;
  background-image: url(${({src:e})=>e});
  background-position-y: center;
  background-size: cover;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    border-radius: 16px;
  }
`,ji=(0,C.default)(o.ZP).withConfig({displayName:"collection__CollectionDescriptionSection",componentId:"sc-7a210954-5"})`
  ${Jt.bc}
`,bi=C.default.div.withConfig({displayName:"collection__FiltersContainer",componentId:"sc-7a210954-6"})`
  position: ${({isMobile:e})=>e?"fixed":"sticky"};
  top: 0px;
  left: 0px;
  width: ${({isMobile:e})=>e?"100%":"0px"};
  height: ${({isMobile:e,isFiltersExpanded:t})=>e&&t?"100%":void 0};
  background: ${({theme:e,isMobile:t})=>t?e.surface2:void 0};
  z-index: ${gi.k.modalBackdrop-3};
  overflow-y: ${({isMobile:e})=>e?"scroll":void 0};

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    top: 72px;
  }
`,Ci=(0,C.default)(l.ZP).withConfig({displayName:"collection__MobileFilterHeader",componentId:"sc-7a210954-7"})`
  padding: 20px 16px;
  justify-content: space-between;
`,_i=(0,C.default)(l.ZP).withConfig({displayName:"collection__CollectionDisplaySection",componentId:"sc-7a210954-8"})`
  align-items: flex-start;
  position: relative;
`,ki=C.default.button.withConfig({displayName:"collection__IconWrapper",componentId:"sc-7a210954-9"})`
  background-color: transparent;
  border-radius: 8px;
  border: none;
  color: ${({theme:e})=>e.neutral1};
  cursor: pointer;
  display: flex;
  padding: 2px 0px;
  opacity: 1;

  ${s.cR}
`,Ti=()=>{var e,t,i,o,s,l;const{contractAddress:d}=(0,ke.UO)(),h=(0,p.dD)(),[m,x]=(0,f.wx)(),{pathname:w}=(0,ke.TH)(),y=(0,ke.s0)(),C=w.includes("/activity"),_=(0,f.PY)((e=>e.setMarketCount)),k=(0,f.cP)((e=>e.bagExpanded)),T=(0,f.cP)((e=>e.setBagExpanded)),I=(0,Ie.x)(),S=(0,p.eI)(),{data:z,loading:P}=(0,c.K)(d),{CollectionContainerWidthChange:$}=(0,ci.q_)({CollectionContainerWidthChange:k&&!h?(S.xxxl?u.zD:u.ZI)+16:0,config:{duration:pi.Kd.medium,easing:ci.Z5.easeOutSine}}),{gridWidthOffset:E}=(0,ci.q_)({gridWidthOffset:m&&!h?332:0,config:{duration:pi.Kd.medium,easing:ci.Z5.easeOutSine}}),R=(0,F.useMemo)((()=>({title:z.name+" on Uniswap",image:window.location.origin+"/api/image/nfts/collection/"+d,url:window.location.href,description:z.description})),[z.description,z.name,d]),M=(0,li.X)(R);if((0,F.useEffect)((()=>{var e,t;const i={};null===(t=z)||void 0===t||null===(e=t.marketplaceCount)||void 0===e||e.forEach((({marketplace:e,count:t})=>{i[e]=t})),_(i)}),[null===(e=z)||void 0===e?void 0:e.marketplaceCount,_]),(0,F.useEffect)((()=>{k&&m&&!S.xl&&x(!1)}),[k,m,S,x]),(0,F.useEffect)((()=>{T({bagExpanded:!1,manualClose:!1})}),[]),P)return(0,n.jsx)(ii,{});if(!z.name)return(0,n.jsx)(si,{});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(di.Helmet,{children:[(0,n.jsx)("title",{children:(0,g.t)("{{name}} | Explore and buy on Uniswap",{name:z.name})}),M.map(((e,t)=>(0,n.jsx)("meta",{...e},t)))]}),(0,n.jsx)(a.fM,{page:r.yJ.NFT_COLLECTION_PAGE,properties:{collection_address:d,chain_id:I,is_activity_view:C},shouldLogImpression:!0,children:(0,n.jsx)(xi,{style:{width:$.to((e=>`calc(100% - ${e}px)`))},children:d&&!v._P.includes(d)?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(vi,{children:(0,n.jsx)(yi,{src:(null===(t=z)||void 0===t?void 0:t.bannerImageUrl)?`${z.bannerImageUrl}?w=${window.innerWidth}`:""})}),(0,n.jsxs)(ji,{children:[z&&(0,n.jsx)(Ft,{stats:z,isMobile:h}),(0,n.jsx)("div",{id:"nft-anchor"}),(0,n.jsx)(N,{showActivity:C,toggleActivity:()=>{m&&x(!1),y(C?`/nfts/collection/${d}`:`/nfts/collection/${d}/activity`)}})]}),(0,n.jsxs)(_i,{children:[(0,n.jsx)(bi,{isMobile:h,isFiltersExpanded:m,children:m&&(0,n.jsxs)(n.Fragment,{children:[h&&(0,n.jsxs)(Ci,{children:[(0,n.jsx)(Q.Tv.HeadlineSmall,{children:"Filter"}),(0,n.jsx)(ki,{onClick:()=>x(!1),children:(0,n.jsx)(O.BW,{})})]}),(0,n.jsx)(qt,{traitsByGroup:(null===(i=z)||void 0===i?void 0:i.traits)??ui})]})}),(0,n.jsx)(wi,{hideUnderneath:h&&(m||k),style:{transform:E.to((e=>`translate(${e}px)`)),width:E.to((e=>`calc(100% - ${e}px)`))},children:C?d&&(0,n.jsx)(b.cS,{contractAddress:d,rarityVerified:(null===(o=z)||void 0===o?void 0:o.rarityVerified)??!1,collectionName:(null===(s=z)||void 0===s?void 0:s.name)??"",chainId:I}):d&&z&&(0,n.jsx)(F.Suspense,{fallback:(0,n.jsx)(dt,{}),children:(0,n.jsx)(pt,{collectionStats:z,contractAddress:d,rarityVerified:null===(l=z)||void 0===l?void 0:l.rarityVerified})})})]})]}):(0,n.jsx)(si,{isBlocked:!0})})}),(0,n.jsx)(j,{})]})}}}]);
//# sourceMappingURL=3735.6636f1b3.chunk.js.map