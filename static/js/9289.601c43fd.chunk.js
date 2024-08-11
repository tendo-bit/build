"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[9289],{37525:(e,i,t)=>{t.d(i,{Z:()=>r});var n=t(45779),o=t(68090),l=t.n(o);function d(){return d=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},d.apply(this,arguments)}function s(e,i){if(null==e)return{};var t,n,o=function(e,i){if(null==e)return{};var t,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],i.indexOf(t)>=0||(o[t]=e[t]);return o}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=(0,n.forwardRef)((function(e,i){var t=e.color,o=void 0===t?"currentColor":t,l=e.size,a=void 0===l?24:l,r=s(e,["color","size"]);return n.createElement("svg",d({ref:i,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),n.createElement("polyline",{points:"18 15 12 9 6 15"}))}));a.propTypes={color:l().string,size:l().oneOfType([l().string,l().number])},a.displayName="ChevronUp";const r=a},45814:()=>{},43912:(e,i,t)=>{t.d(i,{m:()=>o});var n=t(92936);const o=e=>(0,n.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,n.jsx)("path",{d:"M13 4.99092C13 4.09592 14.094 3.66096 14.709 4.31196L20.637 10.582C21.121 11.094 21.121 11.894 20.637 12.406L14.709 18.676C14.094 19.326 13 18.891 13 17.997V14.4919C5.437 14.4919 4.93602 16.962 4.96802 19.529C4.97402 20.019 4.32501 20.1811 4.08301 19.7561C3.46701 18.6751 3 17.1999 3 15.4909C3 8.99592 10 8.49702 13 8.49702V4.99092Z",fill:e.fill})})},44952:(e,i,t)=>{t.d(i,{b:()=>a});var n=t(13820),o=t(80182),l=t(78129),d=t(45779),s=t(70854);function a(e,i,t,a,r,c,p,m=!1){var u,h,x,f,v,g,y,C,w;const{data:j,loading:_,fetchMore:b}=(0,s.TGc)({variables:{ownerAddress:e,filter:t&&t.length>0?{assets:t}:{addresses:i},first:a,after:r,last:c,before:p},skip:m}),I=null===(x=j)||void 0===x||null===(h=x.nftBalances)||void 0===h||null===(u=h.pageInfo)||void 0===u?void 0:u.hasNextPage,N=(0,d.useCallback)((()=>{var e,i,t;return b({variables:{after:null===(t=j)||void 0===t||null===(i=t.nftBalances)||void 0===i||null===(e=i.pageInfo)||void 0===e?void 0:e.endCursor}})}),[null===(g=j)||void 0===g||null===(v=g.nftBalances)||void 0===v||null===(f=v.pageInfo)||void 0===f?void 0:f.endCursor,b]),A=null===(w=j)||void 0===w||null===(C=w.nftBalances)||void 0===C||null===(y=C.edges)||void 0===y?void 0:y.map((e=>{var i,t,d,s,a,r,c,p,m,u,h,x,f,v,g,y,C,w,j,_,b,I,N,A,k,$,T,D,P,S,H,L,U,z,B,O,F,E,R,M,Z,V,X,G,W,Y,J,K,q,Q,ee,ie,te,ne,oe,le,de,se,ae,re,ce,pe,me,ue,he,xe,fe,ve;const ge=null===(i=e)||void 0===i?void 0:i.node.ownedAsset,ye=(0,o.parseEther)((0,l.K3)((null===(s=ge)||void 0===s||null===(d=s.listings)||void 0===d||null===(t=d.edges[0])||void 0===t?void 0:t.node.price.value)??0)).toString();return{id:null===(a=ge)||void 0===a?void 0:a.id,imageUrl:null===(c=ge)||void 0===c||null===(r=c.image)||void 0===r?void 0:r.url,smallImageUrl:null===(m=ge)||void 0===m||null===(p=m.smallImage)||void 0===p?void 0:p.url,notForSale:0===(null===(x=ge)||void 0===x||null===(h=x.listings)||void 0===h||null===(u=h.edges)||void 0===u?void 0:u.length),animationUrl:null===(f=ge)||void 0===f?void 0:f.animationUrl,susFlag:null===(v=ge)||void 0===v?void 0:v.suspiciousFlag,priceInfo:{ETHPrice:ye,baseAsset:"ETH",baseDecimals:"18",basePrice:ye},name:null===(g=ge)||void 0===g?void 0:g.name,tokenId:null===(y=ge)||void 0===y?void 0:y.tokenId,asset_contract:{address:null===(_=ge)||void 0===_||null===(j=_.collection)||void 0===j||null===(w=j.nftContracts)||void 0===w||null===(C=w[0])||void 0===C?void 0:C.address,tokenType:null===(A=ge)||void 0===A||null===(N=A.collection)||void 0===N||null===(I=N.nftContracts)||void 0===I||null===(b=I[0])||void 0===b?void 0:b.standard,name:null===($=ge)||void 0===$||null===(k=$.collection)||void 0===k?void 0:k.name,description:null===(T=ge)||void 0===T?void 0:T.description,image_url:null===(S=ge)||void 0===S||null===(P=S.collection)||void 0===P||null===(D=P.image)||void 0===D?void 0:D.url,payout_address:null===(z=e)||void 0===z||null===(U=z.node)||void 0===U||null===(L=U.listingFees)||void 0===L||null===(H=L[0])||void 0===H?void 0:H.payoutAddress},collection:{name:null===(B=ge.collection)||void 0===B?void 0:B.name,isVerified:null===(O=ge.collection)||void 0===O?void 0:O.isVerified,imageUrl:null===(E=ge.collection)||void 0===E||null===(F=E.image)||void 0===F?void 0:F.url,twitterUrl:(null===(R=ge.collection)||void 0===R?void 0:R.twitterName)?`@${null===(M=ge.collection)||void 0===M?void 0:M.twitterName}`:void 0},collectionIsVerified:null===(V=ge)||void 0===V||null===(Z=V.collection)||void 0===Z?void 0:Z.isVerified,lastPrice:null===(X=e.node.lastPrice)||void 0===X?void 0:X.value,floorPrice:null===(K=ge)||void 0===K||null===(J=K.collection)||void 0===J||null===(Y=J.markets)||void 0===Y||null===(W=Y[0])||void 0===W||null===(G=W.floorPrice)||void 0===G?void 0:G.value,basisPoints:(null===(ie=e)||void 0===ie||null===(ee=ie.node)||void 0===ee||null===(Q=ee.listingFees)||void 0===Q||null===(q=Q[0])||void 0===q?void 0:q.basisPoints)??0/n.PM,listing_date:null===(se=ge)||void 0===se||null===(de=se.listings)||void 0===de||null===(le=de.edges)||void 0===le||null===(oe=le[0])||void 0===oe||null===(ne=oe.node)||void 0===ne||null===(te=ne.createdAt)||void 0===te?void 0:te.toString(),date_acquired:null===(re=e.node.lastPrice)||void 0===re||null===(ae=re.timestamp)||void 0===ae?void 0:ae.toString(),sellOrders:null===(pe=ge)||void 0===pe||null===(ce=pe.listings)||void 0===ce?void 0:ce.edges.map((e=>e.node)),floor_sell_order_price:null===(ve=ge)||void 0===ve||null===(fe=ve.listings)||void 0===fe||null===(xe=fe.edges)||void 0===xe||null===(he=xe[0])||void 0===he||null===(ue=he.node)||void 0===ue||null===(me=ue.price)||void 0===me?void 0:me.value}}));return(0,d.useMemo)((()=>({walletAssets:A,hasNext:I,loadMore:N,loading:_})),[I,N,_,A])}},64079:(e,i,t)=>{t.r(i),t.d(i,{default:()=>Ei});var n=t(92936),o=t(5985),l=t(47583),d=t(66284),s=t(78129),a=t(45779),r=t(70854);var c=t(6823),p=t(68588),m=t(36399),u=t(14411),h=t(54972);const x=(0,u.default)(h.dL).withConfig({displayName:"Resource__ResourceLink",componentId:"sc-fcee131f-0"})`
  display: flex;
  color: ${({theme:e})=>e.accent1};
  font-weight: 535;
  font-size: 14px;
  line-height: 20px;
  gap: 4px;
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${({theme:e})=>(0,m._j)(.1,e.accent1)};
    text-decoration: none;
  }
`;function f({name:e,link:i}){return(0,n.jsxs)(x,{href:i,children:[e,(0,n.jsx)("sup",{children:"\u2197"})]})}var v=t(86059),g=t(74377),y=t(3805),C=t(15288),w=t(35842),j=t(27389),_="_1cf9gnw1";const b=()=>(0,n.jsxs)("svg",{width:"40",height:"41",viewBox:"0 0 40 41",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{d:"M17.8281 10.834C17.6159 9.88757 17.4333 9.13689 17.291 8.58997C17.1751 8.11971 16.9497 7.68339 16.6331 7.31649C16.2834 6.97574 15.8515 6.731 15.3791 6.60601C14.8206 6.43175 14.0365 6.24408 13.0457 6.04301C12.7771 5.98134 12.6321 5.83926 12.6321 5.61405C12.6286 5.56049 12.6369 5.50679 12.6564 5.45676C12.6758 5.40674 12.7061 5.36159 12.7449 5.32448C12.8303 5.25054 12.9343 5.20142 13.0457 5.18241C13.8337 5.03623 14.6127 4.84557 15.3791 4.61136C15.8508 4.48054 16.282 4.23345 16.6331 3.89283C16.9497 3.52593 17.1751 3.08961 17.291 2.61935C17.4468 2.06885 17.6258 1.32623 17.8281 0.39145C17.8791 0.123349 18.016 0 18.2416 0C18.4671 0 18.6095 0.131392 18.6739 0.39145C18.8726 1.32623 19.0516 2.06885 19.211 2.61935C19.3304 3.08988 19.5585 3.52599 19.8769 3.89283C20.229 4.23347 20.6611 4.48052 21.1336 4.61136C21.8997 4.84657 22.6788 5.03724 23.467 5.18241C23.576 5.18865 23.6782 5.23739 23.7515 5.31813C23.8249 5.39887 23.8635 5.50515 23.8591 5.61405C23.8591 5.83926 23.7275 5.98134 23.467 6.04301C22.6802 6.19136 21.9014 6.37926 21.1336 6.60601C20.6605 6.73103 20.2276 6.97574 19.8769 7.31649C19.5585 7.68333 19.3304 8.11943 19.211 8.58997C19.0472 9.12617 18.8672 9.88757 18.6739 10.834C18.6095 11.1021 18.4671 11.2281 18.2416 11.2281C18.016 11.2281 17.8737 11.0967 17.8281 10.834Z",fill:j.Z4.colors.neutral2,className:_}),(0,n.jsx)("path",{d:"M32.4448 19.8364C32.2192 18.6679 32.0079 17.7366 31.8166 17.0452C31.6743 16.4509 31.3902 15.8999 30.9885 15.4396C30.5445 15.0113 29.9992 14.7027 29.4037 14.5425C28.4447 14.2629 27.4703 14.0397 26.4853 13.874C26.1398 13.8226 25.9656 13.6426 25.9656 13.3369C25.9618 13.2674 25.9723 13.1978 25.9964 13.1324C26.0204 13.0671 26.0576 13.0074 26.1055 12.9569C26.2105 12.8597 26.3433 12.7977 26.4853 12.7798C27.4694 12.6134 28.4437 12.3931 29.4037 12.1198C30.0021 11.9667 30.549 11.6571 30.9885 11.2228C31.389 10.7583 31.6729 10.2049 31.8166 9.60859C32.0079 8.91721 32.2192 7.98584 32.4448 6.81449C32.4458 6.74608 32.4607 6.67858 32.4886 6.61609C32.5164 6.5536 32.5567 6.49743 32.6068 6.45096C32.657 6.40448 32.7161 6.3687 32.7806 6.34574C32.845 6.32278 32.9134 6.31313 32.9816 6.31739C33.2672 6.31739 33.4528 6.48309 33.5213 6.81449C33.7479 7.98584 33.9573 8.91721 34.1495 9.60859C34.2907 10.2036 34.5706 10.7567 34.9662 11.2228C35.404 11.6593 35.9516 11.9693 36.551 12.1198C37.515 12.3926 38.493 12.6129 39.4808 12.7798C39.5532 12.7803 39.6248 12.7958 39.6909 12.8254C39.757 12.855 39.8162 12.8981 39.8648 12.9518C39.9134 13.0055 39.9503 13.0687 39.9732 13.1375C39.9961 13.2063 40.0044 13.279 39.9977 13.3512C39.9977 13.6569 39.8263 13.8369 39.4808 13.8883C38.4922 14.0545 37.514 14.2778 36.551 14.5568C35.9543 14.7142 35.4084 15.0232 34.9662 15.4539C34.5695 15.916 34.2894 16.4666 34.1495 17.0595C33.9592 17.7509 33.7498 18.6813 33.5213 19.8507C33.4528 20.185 33.2758 20.3507 32.9816 20.3507C32.912 20.3546 32.8424 20.3442 32.777 20.32C32.7116 20.2958 32.6519 20.2585 32.6015 20.2103C32.5512 20.1621 32.5113 20.104 32.4843 20.0396C32.4573 19.9753 32.4439 19.9062 32.4448 19.8364Z",fill:j.Z4.colors.neutral2,className:_}),(0,n.jsx)("path",{d:"M12.6196 40.6995C12.5109 40.7023 12.4027 40.6829 12.3013 40.6422C12.2 40.6016 12.1075 40.5405 12.0294 40.4627C11.8673 40.3009 11.7574 40.0919 11.7145 39.8639C11.418 38.0492 11.1251 36.5322 10.8358 35.3128C10.6133 34.2663 10.2461 33.258 9.74531 32.3187C9.32818 31.5649 8.73049 30.9334 8.00907 30.4841C7.132 29.9745 6.18128 29.6124 5.19297 29.4117C4.03371 29.1449 2.58684 28.8918 0.852359 28.6523C0.616735 28.6254 0.397657 28.5147 0.23303 28.3393C0.0804808 28.1721 -0.00302245 27.9506 0.000117795 27.7214C-0.00358202 27.4921 0.0799998 27.2703 0.23303 27.1035C0.396979 26.9271 0.616416 26.8162 0.852359 26.7905C2.5886 26.5618 4.03812 26.3114 5.20091 26.0392C6.20136 25.8286 7.16449 25.4614 8.05671 24.9505C8.7902 24.5064 9.40286 23.8792 9.83794 23.1268C10.3473 22.1993 10.7151 21.1968 10.9284 20.1545C11.2054 18.9369 11.4701 17.4162 11.7224 15.5925C11.7547 15.3608 11.8619 15.147 12.0268 14.9855C12.1058 14.9052 12.1997 14.8418 12.3028 14.7993C12.406 14.7567 12.5164 14.7359 12.6276 14.7378C12.7392 14.7338 12.8506 14.7526 12.9551 14.7933C13.0596 14.834 13.1552 14.8956 13.2363 14.9747C13.398 15.1367 13.5079 15.3456 13.5513 15.5735C13.8583 17.3972 14.1565 18.9178 14.4459 20.1354C14.6712 21.1811 15.0382 22.189 15.5363 23.1295C15.9558 23.8807 16.5531 24.5108 17.2726 24.9614C18.1474 25.4733 19.095 25.8407 20.0807 26.0501C21.2347 26.3223 22.6789 26.5727 24.4134 26.8014C24.6493 26.8271 24.8688 26.938 25.0327 27.1144C25.185 27.2815 25.2677 27.5033 25.263 27.7323C25.2662 27.9634 25.1839 28.1872 25.0327 28.3583C24.8722 28.5382 24.6503 28.6474 24.4134 28.6632C22.9509 28.7659 21.4954 28.9559 20.0542 29.232C19.046 29.4136 18.075 29.7698 17.1826 30.2854C16.4365 30.7497 15.8216 31.4065 15.3987 32.1908C14.8949 33.1535 14.531 34.187 14.3188 35.2584C14.04 36.5068 13.7842 38.0429 13.5513 39.8666C13.5238 40.1013 13.4192 40.3193 13.2548 40.4845C13.1681 40.5618 13.0673 40.6207 12.9583 40.6576C12.8492 40.6945 12.7341 40.7087 12.6196 40.6995Z",fill:j.Z4.colors.neutral2,className:_})]});var I=t(26729),N=t(43912),A=t(44952),k=t(58690),$=t(79132),T=t(47263),D=t(43454),P=t(6282),S=t(13446),H=t(66136);const L=u.css`
  :hover::after {
    border-radius: 12px;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({theme:e})=>e.deprecated_stateOverlayHover};
    z-index: 0;
  }

  :active::after {
    border-radius: 12px;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({theme:e})=>e.deprecated_stateOverlayPressed};
    z-index: 0;
  }
`,U=u.default.div.withConfig({displayName:"AssetPriceDetails__Container",componentId:"sc-64765cb6-0"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;

  @media (min-width: calc(960px + 1px)) {
    position: fixed;
    width: 360px;
    margin-top: 20px;
  }
`,z=u.default.div.withConfig({displayName:"AssetPriceDetails__BestPriceContainer",componentId:"sc-64765cb6-1"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 16px;
`,B=u.default.div.withConfig({displayName:"AssetPriceDetails__HeaderRow",componentId:"sc-64765cb6-2"})`
  display: flex;
  justify-content: space-between;
`,O=u.default.div.withConfig({displayName:"AssetPriceDetails__PriceRow",componentId:"sc-64765cb6-3"})`
  display: flex;
  gap: 12px;
  align-items: flex-end;
`,F=u.default.div.withConfig({displayName:"AssetPriceDetails__BuyNowButton",componentId:"sc-64765cb6-4"})`
  position: relative;
  width: 100%;
  background-color: ${({theme:e,assetInBag:i,useAccentColor:t})=>i?e.critical:t?e.accent1:e.surface3};
  border-radius: 12px;
  padding: 10px 12px;
  margin-top: ${({margin:e})=>e?"12px":"0px"};
  text-align: center;
  cursor: pointer;

  ${L}
`,E=u.default.div.withConfig({displayName:"AssetPriceDetails__BuyNowButtonContainer",componentId:"sc-64765cb6-5"})`
  position: relative;
`,R=(0,u.default)(h.Tv.BodySecondary).withConfig({displayName:"AssetPriceDetails__Tertiary",componentId:"sc-64765cb6-6"})`
  color: ${({theme:e})=>e.neutral3};
`,M=u.default.a.withConfig({displayName:"AssetPriceDetails__UploadLink",componentId:"sc-64765cb6-7"})`
  color: ${({theme:e})=>e.neutral2};
  cursor: pointer;

  ${p.cR}
`,Z=u.default.div.withConfig({displayName:"AssetPriceDetails__NotForSaleContainer",componentId:"sc-64765cb6-8"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 48px 18px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,V=u.default.div.withConfig({displayName:"AssetPriceDetails__DiscoveryContainer",componentId:"sc-64765cb6-9"})`
  display: flex;
  flex-direction: column;
  align-items: center;
`,X=u.default.a.withConfig({displayName:"AssetPriceDetails__OwnerText",componentId:"sc-64765cb6-10"})`
  font-size: 16px;
  font-weight: 535;
  line-height: 20px;
  color: ${({theme:e})=>e.neutral2};
  text-decoration: none;

  ${p.cR}
`,G=u.default.div.withConfig({displayName:"AssetPriceDetails__OwnerInformationContainer",componentId:"sc-64765cb6-11"})`
  color: ${({theme:e})=>e.neutral2};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 8px;
`,W=u.default.div.withConfig({displayName:"AssetPriceDetails__AssetInfoContainer",componentId:"sc-64765cb6-12"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Y=u.default.h1.withConfig({displayName:"AssetPriceDetails__AssetHeader",componentId:"sc-64765cb6-13"})`
  display: -webkit-box;
  align-items: center;
  font-size: 28px;
  font-weight: 535;
  line-height: 36px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:e})=>e.neutral1};
  margin: 0;
`,J=u.default.div.withConfig({displayName:"AssetPriceDetails__CollectionNameContainer",componentId:"sc-64765cb6-14"})`
  display: flex;
  justify-content: space-between;
`,K=u.default.span.withConfig({displayName:"AssetPriceDetails__CollectionHeader",componentId:"sc-64765cb6-15"})`
  font-size: 16px;
  font-weight: 485;
  line-height: 24px;
  color: ${({theme:e})=>e.neutral1};
  text-decoration: none;
  ${p.cR};
`,q=u.default.span.withConfig({displayName:"AssetPriceDetails__VerifiedIconContainer",componentId:"sc-64765cb6-16"})`
  position: relative;
`,Q=(0,u.default)(k.SA).withConfig({displayName:"AssetPriceDetails__StyledVerifiedIcon",componentId:"sc-64765cb6-17"})`
  position: absolute;
  top: 0px;
`,ee=(0,u.default)(D.rU).withConfig({displayName:"AssetPriceDetails__DefaultLink",componentId:"sc-64765cb6-18"})`
  text-decoration: none;
`,ie=(0,u.default)(h.dL).withConfig({displayName:"AssetPriceDetails__MarketplaceIcon",componentId:"sc-64765cb6-19"})`
  display: flex;
  align-items: center;
`,te=({asset:e})=>{var i,t;const d=(0,P.s0)(),r=(0,$.$N)(),c=(0,$.aO)((e=>e.setProfilePageState)),p=(0,$.Pc)((e=>e.selectSellAsset)),m=(0,$.Pc)((e=>e.reset)),{formatEther:u,formatNumberOrString:x}=(0,H.Gb)(),f=e.sellOrders&&e.sellOrders.length>0?e.sellOrders[0]:void 0,v=(null===(i=f)||void 0===i?void 0:i.endAt)?new Date(f.endAt):void 0,g=(0,a.useMemo)((()=>r&&e.floor_sell_order_price?r*e.floor_sell_order_price:void 0),[r,e.floor_sell_order_price]),y=(0,l.oO)(),C=()=>{m(),d("/nfts/profile"),p(e),(0,l._P)(o.Yz.NFT_SELL_ITEM_ADDED,{collection_address:e.asset_contract.address,token_id:e.tokenId,...y}),c(T.HA.LISTING)};return(0,n.jsxs)(z,{children:[(0,n.jsxs)(B,{children:[(0,n.jsx)(h.Tv.SubHeader,{color:"accent1",children:f?"Your Price":"List for Sale"}),f&&(0,n.jsx)(ie,{href:f.marketplaceUrl,children:(0,s.Dp)(f.marketplace,"20")})]}),(0,n.jsx)(O,{children:f?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(h.Tv.MediumHeader,{fontSize:"28px",lineHeight:"36px",children:[u({input:null===(t=e.priceInfo)||void 0===t?void 0:t.ETHPrice,type:H.sw.NFTToken})," ","ETH"]}),g&&(0,n.jsx)(h.Tv.BodySecondary,{lineHeight:"24px",children:x({input:g,type:H.sw.FiatNFTToken})})]}):(0,n.jsx)(h.Tv.BodySecondary,{fontSize:"14px",lineHeight:"20px",children:"Get the best price for your NFT by selling with Uniswap."})}),v&&(0,n.jsxs)(h.Tv.BodySecondary,{fontSize:"14px",children:["Sale ends: ",(0,s.zO)(v)]}),f?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(F,{assetInBag:!1,margin:!0,useAccentColor:!1,onClick:C,children:(0,n.jsx)(h.Tv.SubHeader,{lineHeight:"20px",children:"Adjust listing"})})}):(0,n.jsx)(F,{assetInBag:!1,margin:!0,useAccentColor:!0,onClick:C,children:(0,n.jsx)(h.Tv.SubHeader,{lineHeight:"20px",color:"white",children:"List"})})]})},ne=(0,u.default)(D.rU).withConfig({displayName:"AssetPriceDetails__StyledLink",componentId:"sc-64765cb6-20"})`
  text-decoration: none;
  ${p.cR}
`,oe=({collectionName:e,collectionUrl:i})=>{const t=(0,u.useTheme)();return(0,n.jsx)(z,{children:(0,n.jsxs)(Z,{children:[(0,n.jsx)(k.Io,{width:"79px",height:"79px",color:t.neutral3}),(0,n.jsx)(h.Tv.SubHeader,{children:"Not for sale"}),(0,n.jsxs)(V,{children:[(0,n.jsx)(h.Tv.BodySecondary,{fontSize:"14px",lineHeight:"20px",children:"Discover similar NFTs for sale in"}),(0,n.jsx)(ne,{to:`/nfts/collection/${i}`,children:(0,n.jsx)(h.Tv.Link,{lineHeight:"20px",children:e})})]})]})})},le=({asset:e,collection:i})=>{var t,o,l;const{account:d}=(0,I.G)(),{formatEther:r,formatNumberOrString:c}=(0,H.Gb)(),p=e.sellorders&&e.sellorders.length>0?e.sellorders[0]:void 0,m=(null===(t=p)||void 0===t?void 0:t.endAt)?new Date(p.endAt):void 0,u=(0,$.cP)((e=>e.itemsInBag)),x=(0,$.cP)((e=>e.addAssetsToBag)),f=(0,$.cP)((e=>e.removeAssetsFromBag)),v=(0,$.cP)((e=>e.toggleBag)),g=(0,$.cP)((e=>e.bagExpanded)),y=(0,$.p6)(e),C=[{address:e.address,tokenId:e.tokenId}],{walletAssets:w}=(0,A.b)(d??"",[],C,1),j=(0,a.useMemo)((()=>{var e;return null===(e=w)||void 0===e?void 0:e[0]}),[w]),{assetInBag:_}=(0,a.useMemo)((()=>({assetInBag:u.some((i=>e.tokenId===i.asset.tokenId&&e.address===i.asset.address))})),[e,u]),b=e.ownerAddress&&!!j&&(null===(o=d)||void 0===o?void 0:o.toLowerCase())===(null===(l=e.ownerAddress)||void 0===l?void 0:l.toLowerCase()),k=p&&e.priceInfo;return(0,n.jsxs)(U,{children:[(0,n.jsxs)(W,{children:[(0,n.jsxs)(J,{children:[(0,n.jsx)(ee,{to:`/nfts/collection/${e.address}`,children:(0,n.jsxs)(K,{children:[i.collectionName,(0,n.jsx)(q,{children:i.isVerified&&(0,n.jsx)(Q,{})})]})}),(0,n.jsx)(M,{onClick:()=>{window.open((0,s.Lr)(e),"newwindow",`left=${(window.screen.width-560)/2}, top=${(window.screen.height-480)/2}, width=560, height=480`)},target:"_blank",children:(0,n.jsx)(N.m,{})})]}),(0,n.jsx)(Y,{children:e.name??`${e.collectionName} #${e.tokenId}`})]}),b?(0,n.jsx)(te,{asset:j}):k?(0,n.jsxs)(z,{children:[(0,n.jsxs)(B,{children:[(0,n.jsx)(h.Tv.SubHeader,{color:"accent1",children:"Best Price"}),(0,n.jsx)(ie,{href:p.marketplaceUrl,children:(0,s.Dp)(p.marketplace,"20")})]}),(0,n.jsxs)(O,{children:[(0,n.jsxs)(h.Tv.MediumHeader,{fontSize:"28px",lineHeight:"36px",children:[r({input:e.priceInfo.ETHPrice,type:H.sw.NFTToken})," ETH"]}),y&&(0,n.jsx)(h.Tv.BodySecondary,{lineHeight:"24px",children:c({input:y,type:H.sw.FiatNFTToken})})]}),m&&m>new Date&&(0,n.jsxs)(R,{fontSize:"14px",children:["Sale ends: ",(0,s.zO)(m)]}),(0,n.jsx)("div",{children:(0,n.jsx)(E,{children:(0,n.jsx)(F,{assetInBag:_,margin:!0,useAccentColor:!0,onClick:()=>{_?f([e]):x([e]),_||g||v()},children:(0,n.jsx)(h.Tv.SubHeader,{color:"white",lineHeight:"20px",children:(0,n.jsx)("span",{"data-testid":"nft-details-toggle-bag",children:_?"Remove":"Add to Bag"})})})})})]}):(0,n.jsx)(oe,{collectionName:i.collectionName??"this collection",collectionUrl:e.address}),k&&(0,n.jsxs)(G,{children:["ERC1155"!==e.tokenType&&e.ownerAddress&&(0,n.jsx)(h.Tv.BodySmall,{color:"neutral2",lineHeight:"20px",children:"Seller:"}),(0,n.jsx)(X,{target:"_blank",href:`https://etherscan.io/address/${e.ownerAddress}`,rel:"noopener noreferrer",children:"ERC1155"===e.tokenType?"":(0,n.jsxs)("span",{children:[" ",b?"You":e.ownerAddress&&(0,S.Xn)(e.ownerAddress,2)]})})]})]})};var de=t(59254),se=t(25290),ae=t(10581),re=t(82743),ce=t(82284),pe=t(49114);const me=u.default.tr.withConfig({displayName:"AssetActivity__TR",componentId:"sc-c8e27496-0"})`
  border-bottom: ${({theme:e})=>`1px solid ${e.surface3}`};
  width: 100%;

  &:last-child {
    border-bottom: none;
  }
`,ue=u.default.th.withConfig({displayName:"AssetActivity__TH",componentId:"sc-c8e27496-1"})`
  color: ${({theme:e})=>e.neutral2};
  font-weight: 535;
  font-size: 14px;
  line-height: 20px;
  width: 20%;

  @media (max-width: 960px) {
    &:nth-child(4) {
      display: none;
    }
  }

  @media (max-width: 720px) {
    &:nth-child(2) {
      display: none;
    }
  }
`,he=u.default.table.withConfig({displayName:"AssetActivity__Table",componentId:"sc-c8e27496-2"})`
  border-collapse: collapse;
  text-align: left;
  width: 100%;
`,xe=u.default.td.withConfig({displayName:"AssetActivity__TD",componentId:"sc-c8e27496-3"})`
  height: 56px;
  padding: 8px 0px;
  text-align: left;
  vertical-align: middle;
  width: 20%;

  @media (max-width: 960px) {
    &:nth-child(4) {
      display: none;
    }
  }

  @media (max-width: 720px) {
    &:nth-child(2) {
      display: none;
    }
  }
`,fe=u.default.div.withConfig({displayName:"AssetActivity__PriceContainer",componentId:"sc-c8e27496-4"})`
  align-items: center;
  display: flex;
  gap: 8px;
`,ve=u.default.a.withConfig({displayName:"AssetActivity__Link",componentId:"sc-c8e27496-5"})`
  color: ${({theme:e})=>e.neutral1};
  text-decoration: none;

  ${p.cR}
`,ge=u.default.div.withConfig({displayName:"AssetActivity__ActivityContainer",componentId:"sc-c8e27496-6"})`
  max-height: 310px;
  overflow: auto;

  ${p.Zl}
`,ye=(0,u.default)(re.X).withConfig({displayName:"AssetActivity__LoadingCell",componentId:"sc-c8e27496-7"})`
  height: 20px;
  width: 80px;
`,Ce=({children:e})=>(0,n.jsx)(ge,{id:"activityContainer",children:(0,n.jsxs)(he,{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)(me,{children:[(0,n.jsx)(ue,{children:(0,n.jsx)(c.cC,{children:"Event"})}),(0,n.jsx)(ue,{children:(0,n.jsx)(c.cC,{children:"Price"})}),(0,n.jsx)(ue,{children:(0,n.jsx)(c.cC,{children:"By"})}),(0,n.jsx)(ue,{children:(0,n.jsx)(c.cC,{children:"To"})}),(0,n.jsx)(ue,{children:(0,n.jsx)(c.cC,{children:"Time"})})]})}),(0,n.jsx)("tbody",{children:e})]})}),we=({cellCount:e})=>(0,n.jsx)(me,{children:Array(e).fill(null).map(((e,i)=>(0,n.jsx)(xe,{children:(0,n.jsx)(ye,{})},i)))}),je=({rowCount:e})=>(0,n.jsx)(Ce,{children:Array(e).fill(null).map(((e,i)=>(0,n.jsx)(we,{cellCount:5},i)))}),_e=({events:e})=>{const{formatNumberOrString:i}=(0,H.Gb)();return(0,n.jsx)(Ce,{children:e&&e.map(((e,t)=>{const{eventTimestamp:o,eventType:l,fromAddress:d,marketplace:a,price:r,toAddress:c,transactionHash:p}=e,m=r?i({input:parseFloat(r),type:H.sw.NFTToken}):null;return l?(0,n.jsxs)(me,{children:[(0,n.jsx)(xe,{children:(0,n.jsx)(ce.VM,{eventType:l,eventTimestamp:o,eventTransactionHash:p,eventOnly:!0})}),(0,n.jsx)(xe,{children:m&&(0,n.jsxs)(fe,{children:[a&&(0,s.Dp)(a,"16"),m," ETH"]})}),(0,n.jsx)(xe,{children:d&&(0,n.jsx)(ve,{href:`https://etherscan.io/address/${d}`,target:"_blank",rel:"noopener noreferrer",children:(0,S.Xn)(d,2)})}),(0,n.jsx)(xe,{children:c&&(0,n.jsx)(ve,{href:`https://etherscan.io/address/${c}`,target:"_blank",rel:"noopener noreferrer",children:(0,S.Xn)(c,2)})}),(0,n.jsx)(xe,{children:o&&(0,pe.F)(o.toString())})]},t):null}))})};t(57995),t(49484);var be="_1yohfdw1 rgw6ez819 rgw6ez1dr rgw6ez53",Ie=t(50333),Ne=t(94191);const Ae=u.default.div.withConfig({displayName:"DetailsContainer__Details",componentId:"sc-d05234da-0"})`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 40px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 450px) {
    grid-template-columns: 1fr 1fr;
  }
`,ke=u.default.div.withConfig({displayName:"DetailsContainer__Header",componentId:"sc-d05234da-1"})`
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  line-height: 20px;
`,$e=u.default.div.withConfig({displayName:"DetailsContainer__Body",componentId:"sc-d05234da-2"})`
  color: ${({theme:e})=>e.neutral1};
  font-size: 14px;
  line-height: 20px;
  margin-top: 8px;
`,Te=u.default.span.withConfig({displayName:"DetailsContainer__Center",componentId:"sc-d05234da-3"})`
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: 8px;

  ${p.cR}
`,De=u.default.a.withConfig({displayName:"DetailsContainer__CreatorLink",componentId:"sc-d05234da-4"})`
  color: ${({theme:e})=>e.neutral1};
  text-decoration: none;

  ${p.cR}
`,Pe=(0,u.default)(Ne.Z).withConfig({displayName:"DetailsContainer__CopyIcon",componentId:"sc-d05234da-5"})`
  cursor: pointer;
`,Se=({header:e,body:i})=>(0,n.jsxs)("div",{children:[(0,n.jsx)(ke,{children:e}),(0,n.jsx)($e,{children:i})]}),He=({asset:e,collection:i})=>{var t;const{formatNumber:o}=(0,H.Gb)(),{address:l,tokenId:d,tokenType:s,creator:r}=e,{totalSupply:c}=i,[,p]=(0,Ie.Z)(),m=(0,a.useCallback)((()=>{p(l??"")}),[l,p]);return(0,n.jsxs)(Ae,{children:[(0,n.jsx)(Se,{header:"Contract address",body:(0,n.jsxs)(Te,{onClick:m,children:[(0,S.Xn)(l,2)," ",(0,n.jsx)(Pe,{size:13})]})}),(0,n.jsx)(Se,{header:"Token ID",body:d.length>9?(u=d,`${u.substring(0,4)}...${u.substring(u.length-4,u.length)}`):d}),(0,n.jsx)(Se,{header:"Token standard",body:s}),(0,n.jsx)(Se,{header:"Blockchain",body:"Ethereum"}),(0,n.jsx)(Se,{header:"Total supply",body:`${o({input:c??0,type:H.sw.WholeNumber})}`}),(0,n.jsx)(Se,{header:"Creator",body:(null===(t=r)||void 0===t?void 0:t.address)&&(0,n.jsx)(De,{href:`https://etherscan.io/address/${r.address}`,rel:"noopener noreferrer",target:"_blank",children:(0,S.Xn)(r.address,2)})})]});var u};var Le=t(37525),Ue=t(86082);const ze=u.default.div.withConfig({displayName:"InfoContainer__Header",componentId:"sc-cc63c57f-0"})`
  display: flex;
  border-radius: ${({isOpen:e})=>e?"16px 16px 0px 0px":"16px"};
  justify-content: space-between;
  background-color: ${({theme:e})=>e.surface1};
  padding: 14px 20px;
  cursor: pointer;
  border: 1px solid ${({theme:e})=>e.surface3};
  margin-top: 28px;
  width: 100%;
  align-items: center;

  &:hover {
    background-color: ${({theme:e})=>e.deprecated_stateOverlayHover};
  }

  &:active {
    background-color: ${({theme:e})=>e.deprecated_stateOverlayPressed};
  }

  transition: ${({theme:{transition:{duration:e,timing:i}}})=>u.css`background-color ${e.medium} ${i.ease}`};
`,Be=u.default.span.withConfig({displayName:"InfoContainer__PrimaryHeader",componentId:"sc-cc63c57f-1"})`
  display: flex;
  align-items: center;
  gap: 16px;
  color: ${({theme:e})=>e.neutral1};
  font-weight: 535;
  line-height: 28px;
  font-size: 20px;
`,Oe=u.default.span.withConfig({displayName:"InfoContainer__SecondaryHeader",componentId:"sc-cc63c57f-2"})`
  font-size: 12px;
  color: ${({theme:e})=>e.neutral2};
`,Fe=u.default.span.withConfig({displayName:"InfoContainer__SecondaryHeaderContainer",componentId:"sc-cc63c57f-3"})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  color: ${({theme:e})=>e.neutral1};
`,Ee=u.default.div.withConfig({displayName:"InfoContainer__ContentContainer",componentId:"sc-cc63c57f-4"})`
  padding: 20px;
  border: 1px solid ${({theme:e})=>e.surface3};
  border-top: none;
  border-radius: 0px 0px 16px 16px;
  background-color: ${({theme:e})=>e.surface1};
`,Re=({children:e,primaryHeader:i,secondaryHeader:t,defaultOpen:o,...l})=>{const[d,s]=(0,a.useState)(!!o);return(0,n.jsxs)("div",{children:[(0,n.jsxs)(ze,{...l,isOpen:d,onClick:()=>s(!d),children:[(0,n.jsxs)(Be,{children:[i," ",(0,n.jsx)(Oe,{children:t})]}),(0,n.jsx)(Fe,{children:d?(0,n.jsx)(Le.Z,{}):(0,n.jsx)(Ue.Z,{})})]}),d&&(0,n.jsx)(Ee,{children:e})]})};var Me=t(18806);const Ze=u.default.div.withConfig({displayName:"TraitsContainer__Grid",componentId:"sc-87c51ec6-0"})`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 16px;
  max-width: 780px;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 420px) {
    grid-template-columns: 1fr 1fr;
  }
`,Ve=(0,u.default)(D.rU).withConfig({displayName:"TraitsContainer__GridItemContainer",componentId:"sc-87c51ec6-1"})`
  background-color: ${({theme:e})=>e.surface3};
  border-radius: 12px;
  cursor: pointer;
  padding: 12px;
  text-decoration: none;

  ${p.cR}
  min-width: 0;
`,Xe=u.default.div.withConfig({displayName:"TraitsContainer__TraitType",componentId:"sc-87c51ec6-2"})`
  color: ${({theme:e})=>e.neutral2};
  font-weight: 535;
  font-size: 10px;
  line-height: 12px;
  white-space: nowrap;
  width: 100%;
`,Ge=u.default.div.withConfig({displayName:"TraitsContainer__TraitValue",componentId:"sc-87c51ec6-3"})`
  color: ${({theme:e})=>e.neutral1};
  font-size: 16px;
  line-height: 24px;
  margin-top: 4px;
  display: inline-block;

  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`,We=({trait:e,collectionAddress:i})=>{const{trait_type:t,trait_value:o}=e,l=Me.stringify({traits:[`("${t}","${o}")`]},{arrayFormat:"comma"});return(0,n.jsxs)(Ve,{to:`/nfts/collection/${i}?${l}`,children:[(0,n.jsx)(Xe,{children:t}),(0,n.jsx)(Ge,{children:o})]})},Ye=({asset:e})=>{var i;const t=(0,a.useMemo)((()=>{var i;return null===(i=e.traits)||void 0===i?void 0:i.sort(((e,i)=>e.trait_type.localeCompare(i.trait_type)))}),[e]);return(0,n.jsx)(Ze,{children:null===(i=t)||void 0===i?void 0:i.map((i=>(0,n.jsx)(We,{trait:i,collectionAddress:e.address},i.trait_type)))})},Je=u.default.div.withConfig({displayName:"AssetDetails__AssetPriceDetailsContainer",componentId:"sc-de3ef274-0"})`
  margin-top: 20px;
  display: none;
  @media (max-width: 960px) {
    display: block;
  }
`,Ke=u.default.div.withConfig({displayName:"AssetDetails__MediaContainer",componentId:"sc-de3ef274-1"})`
  display: flex;
  justify-content: center;
`,qe=u.default.div.withConfig({displayName:"AssetDetails__Column",componentId:"sc-de3ef274-2"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 780px;
`,Qe=u.default.a.withConfig({displayName:"AssetDetails__AddressTextLink",componentId:"sc-de3ef274-3"})`
  display: inline-block;
  color: ${({theme:e})=>e.neutral2};
  text-decoration: none;
  max-width: 100%;
  word-wrap: break-word;
  ${p.cR};
`,ei=u.default.div.withConfig({displayName:"AssetDetails__SocialsContainer",componentId:"sc-de3ef274-4"})`
  display: flex;
  gap: 16px;
  margin-top: 20px;
`,ii=u.default.p.withConfig({displayName:"AssetDetails__DescriptionText",componentId:"sc-de3ef274-5"})`
  margin-top: 8px;
  font-size: 14px;
  line-height: 20px;
`,ti=u.default.span.withConfig({displayName:"AssetDetails__RarityWrap",componentId:"sc-de3ef274-6"})`
  display: flex;
  color: ${({theme:e})=>e.neutral2};
  padding: 2px 4px;
  border-radius: 4px;
  align-items: center;
  gap: 4px;
`,ni=u.default.div.withConfig({displayName:"AssetDetails__EmptyActivitiesContainer",componentId:"sc-de3ef274-7"})`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${({theme:e})=>e.neutral1};
  font-size: 28px;
  line-height: 36px;
  padding: 56px 0px;
`,oi=(0,u.default)(D.rU).withConfig({displayName:"AssetDetails__Link",componentId:"sc-de3ef274-8"})`
  color: ${({theme:e})=>e.accent1};
  text-decoration: none;
  font-size: 14px;
  line-height: 16px;
  margin-top: 12px;
  cursor: pointer;
  ${p.cR};
`,li=u.default.div.withConfig({displayName:"AssetDetails__ActivitySelectContainer",componentId:"sc-de3ef274-9"})`
  display: flex;
  gap: 8px;
  margin-bottom: 34px;
  overflow-x: auto;
  ${p.Zl}

  @media (max-width: 720px) {
    padding-bottom: 8px;
  }
`,di=u.default.div.withConfig({displayName:"AssetDetails__ContentNotAvailable",componentId:"sc-de3ef274-10"})`
  display: flex;
  background-color: ${({theme:e})=>e.surface1};
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  line-height: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  width: 450px;
  height: 450px;
`,si=u.default.div.withConfig({displayName:"AssetDetails__FilterBox",componentId:"sc-de3ef274-11"})`
  box-sizing: border-box;
  background-color: ${({backgroundColor:e})=>e};
  font-size: 14px;
  font-weight: 535;
  line-height: 14px;
  border: 1px solid ${({theme:e})=>e.surface3};
  color: ${({theme:e})=>e.neutral1};
  padding: 8px 16px;
  border-radius: 12px;
  cursor: pointer;
  box-sizing: border-box;
  ${p.cR};
`,ai=u.default.span.withConfig({displayName:"AssetDetails__ByText",componentId:"sc-de3ef274-12"})`
  font-size: 14px;
  line-height: 20px;
`,ri=u.default.img.withConfig({displayName:"AssetDetails__Img",componentId:"sc-de3ef274-13"})`
  background-color: white;
`,ci=u.default.div.withConfig({displayName:"AssetDetails__HoverImageContainer",componentId:"sc-de3ef274-14"})`
  display: flex;
  margin-right: 4px;
`,pi=u.default.div.withConfig({displayName:"AssetDetails__HoverContainer",componentId:"sc-de3ef274-15"})`
  display: flex;
`,mi=u.default.span.withConfig({displayName:"AssetDetails__ContainerText",componentId:"sc-de3ef274-16"})`
  font-size: 14px;
`,ui=({imageUrl:e,animationUrl:i,name:t,collectionName:o,dominantColor:l})=>(0,n.jsxs)(y.n,{position:"relative",display:"inline-block",alignSelf:"center",children:[(0,n.jsx)(y.n,{as:"audio",className:"_1yohfdwd",width:"292",controls:!0,src:i}),(0,n.jsx)("img",{className:be,src:e,alt:t||o,style:{"--shadow":`rgba(${l.join(", ")}, 0.5)`,minWidth:"300px",minHeight:"300px"}})]}),hi={[T.n$.Listing]:!0,[T.n$.Sale]:!0,[T.n$.Transfer]:!1,[T.n$.CancelListing]:!1};var xi;!function(e){e.Audio="audio",e.Video="video",e.Image="image",e.Embed="embed"}(xi||(xi={}));const fi=({mediaType:e,asset:i,dominantColor:t})=>{const o={"--shadow":`rgba(${t.join(", ")}, 0.5)`};switch(e){case xi.Video:return(0,n.jsx)("video",{src:i.animationUrl,className:be,autoPlay:!0,controls:!0,muted:!0,loop:!0,style:o});case xi.Image:return(0,n.jsx)("img",{className:be,src:i.imageUrl,alt:i.name||i.collectionName,style:o});case xi.Audio:return(0,n.jsx)(ui,{...i,dominantColor:t});case xi.Embed:return(0,n.jsx)("div",{className:"_1yohfdw2",children:(0,n.jsx)("iframe",{title:i.name??`${i.collectionName} #${i.tokenId}`,src:i.animationUrl,className:"_1yohfdw3 _1yohfdw1 rgw6ez819 rgw6ez1dr rgw6ez53",style:o,frameBorder:0,height:"100%",width:"100%",sandbox:"allow-scripts",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}},vi=({asset:e,collection:i})=>{var t,o,l,d,s,c,p,m;const{formatNumberOrString:u}=(0,H.Gb)(),[h]=(0,a.useState)([0,0,0]),{rarityProvider:x}=(0,a.useMemo)((()=>{var i,t,n;return e.rarity?{rarityProvider:null===(n=e)||void 0===n||null===(t=n.rarity)||void 0===t||null===(i=t.providers)||void 0===i?void 0:i.find((({provider:i})=>{var t;return i===(null===(t=e.rarity)||void 0===t?void 0:t.primaryProvider)}))}:{}}),[e.rarity]),y=(0,a.useMemo)((()=>(0,de.F)(e.animationUrl??"")?xi.Audio:(0,se.W)(e.animationUrl??"")?xi.Video:e.animationUrl?xi.Embed:xi.Image),[e]),{address:_,tokenId:I}=e,{nftActivity:N}=(0,g.m)({activityTypes:[r.y3y.Sale],address:_,tokenId:I},1,"no-cache"),A=null===(o=N)||void 0===o||null===(t=o[0])||void 0===t?void 0:t.price,k=A?u({input:parseFloat(A),type:H.sw.NFTToken}):void 0,[$,D]=(0,a.useReducer)(w.YQ,hi),P=(0,a.useCallback)((function({eventType:e}){const i=$[e];return(0,n.jsx)(si,{backgroundColor:i?j.gR.color.surface1:j.Z4.colors.surface3,onClick:()=>D({eventType:e}),children:e===T.n$.CancelListing?"Cancellations":e.charAt(0)+e.slice(1).toLowerCase()+"s"})}),[$]),{nftActivity:L,hasNext:U,loadMore:z,loading:B,error:O}=(0,g.m)({activityTypes:Object.keys($).map((e=>e)).filter((e=>$[e])),address:_,tokenId:I},25),F=null===(s=e)||void 0===s||null===(d=s.rarity)||void 0===d||null===(l=d.providers)||void 0===l?void 0:l[0],[E,R]=(0,a.useState)(!1);return(0,n.jsxs)(qe,{children:[(0,n.jsx)(Ke,{children:void 0===e.imageUrl||E?(0,n.jsx)(di,{children:"Content not available yet"}):y===xi.Image?(0,n.jsx)(ri,{className:be,src:e.imageUrl,alt:e.name||i.collectionName,onError:()=>R(!0)}):(0,n.jsx)(fi,{asset:e,mediaType:y,dominantColor:h})}),(0,n.jsx)(Je,{children:(0,n.jsx)(le,{asset:e,collection:i})}),e.traits&&(0,n.jsx)(Re,{"data-testid":"nft-details-traits",primaryHeader:"Traits",defaultOpen:!0,secondaryHeader:x&&F&&F.score?(0,n.jsx)(v.ud,{text:(0,n.jsxs)(pi,{children:[(0,n.jsx)(ci,{children:(0,n.jsx)("img",{src:"/nft/svgs/gem.svg",alt:"cardLogo",width:16})}),(0,n.jsx)(mi,{children:"Ranking by Rarity Sniper"})]}),placement:"top",children:(0,n.jsxs)(ti,{children:["Rarity: ",u({input:F.score,type:H.sw.WholeNumber})]})}):null,children:(0,n.jsx)(Ye,{asset:e})}),(0,n.jsx)(Re,{primaryHeader:"Activity",defaultOpen:!0,secondaryHeader:k?`Last Sale: ${k} ETH`:void 0,"data-testid":"nft-details-activity",children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(li,{$isHorizontalScroll:!0,children:[(0,n.jsx)(P,{eventType:T.n$.Listing}),(0,n.jsx)(P,{eventType:T.n$.Sale}),(0,n.jsx)(P,{eventType:T.n$.Transfer}),(0,n.jsx)(P,{eventType:T.n$.CancelListing})]}),B?(0,n.jsx)(je,{rowCount:10}):L&&L.length>0?(0,n.jsx)(ae.Z,{next:z,hasMore:!!U,loader:B&&(0,n.jsx)(C.M5,{children:(0,n.jsx)(b,{})}),dataLength:(null===(c=L)||void 0===c?void 0:c.length)??0,scrollableTarget:"activityContainer",children:(0,n.jsx)(_e,{events:L})}):(0,n.jsx)(n.Fragment,{children:!O&&L&&(0,n.jsxs)(ni,{children:[(0,n.jsx)("div",{children:"No activities yet"}),(0,n.jsx)(oi,{to:`/nfts/collection/${e.address}`,children:"View collection items"})," "]})})]})}),(0,n.jsx)(Re,{primaryHeader:"Description",defaultOpen:!0,secondaryHeader:null,"data-testid":"nft-details-description",children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ai,{children:"By "}),(null===(p=e)||void 0===p?void 0:p.creator)&&(null===(m=e.creator)||void 0===m?void 0:m.address)&&(0,n.jsx)(Qe,{href:`https://etherscan.io/address/${e.creator.address}`,target:"_blank",rel:"noopener noreferrer",children:(0,S.Xn)(e.creator.address,2)}),(0,n.jsx)(ii,{"data-testid":"nft-details-description-text",children:i.collectionDescription}),(0,n.jsxs)(ei,{children:[i.externalUrl&&(0,n.jsx)(f,{name:"Website",link:`${i.externalUrl}`}),i.twitterUrl&&(0,n.jsx)(f,{name:"Twitter",link:`https://twitter.com/${i.twitterUrl}`}),i.discordUrl&&(0,n.jsx)(f,{name:"Discord",link:i.discordUrl})]})]})}),(0,n.jsx)(Re,{primaryHeader:"Details",defaultOpen:!0,secondaryHeader:null,"data-testid":"nft-details-asset-details",children:(0,n.jsx)(He,{asset:e,collection:i})})]})};var gi=t(44591),yi=t(63415),Ci=t(40976);const wi="960px",ji=(0,u.default)(re.X).withConfig({displayName:"AssetDetailsLoading__Title",componentId:"sc-d1f2fecc-0"})`
  height: 16px;
  width: 136px;
`,_i=(0,u.default)(re.X).withConfig({displayName:"AssetDetailsLoading__SubTitle",componentId:"sc-d1f2fecc-1"})`
  height: 40px;
  width: 200px;
  margin-top: 8px;

  @media (max-width: ${wi}) {
    width: 100%;
  }
`,bi=(0,u.default)(re.X).withConfig({displayName:"AssetDetailsLoading__Seller",componentId:"sc-d1f2fecc-2"})`
  height: 16px;
  width: 40px;
`,Ii=(0,u.default)(re.X).withConfig({displayName:"AssetDetailsLoading__SellerAddress",componentId:"sc-d1f2fecc-3"})`
  margin-top: 4px;
  height: 24px;
  width: 95px;
`,Ni=(0,u.default)(re.X).withConfig({displayName:"AssetDetailsLoading__PrimaryBody",componentId:"sc-d1f2fecc-4"})`
  width: 100%;
  height: 260px;
`,Ai=(0,u.default)(re.X).withConfig({displayName:"AssetDetailsLoading__ActivityLoader",componentId:"sc-d1f2fecc-5"})`
  width: 100%;
  height: 428px;
`,ki=(0,u.default)(gi.ZP).withConfig({displayName:"AssetDetailsLoading__PrimaryContent",componentId:"sc-d1f2fecc-6"})`
  max-width: 780px;
  margin-top: 28px;
  width: 100%;
  gap: 28px;

  @media (max-width: ${wi}) {
    max-width: 100%;
  }
`,$i=u.default.div.withConfig({displayName:"AssetDetailsLoading__LoaderContainer",componentId:"sc-d1f2fecc-7"})`
  width: 100%;
  padding-top: 200px;
  padding-bottom: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: pink;
`,Ti=(0,u.default)(re.X).withConfig({displayName:"AssetDetailsLoading__BuyNowContainer",componentId:"sc-d1f2fecc-8"})`
  height: 180px;
  width: 360px;

  @media (max-width: ${wi}) {
    width: 100%;
  }
`,Di=u.default.div.withConfig({displayName:"AssetDetailsLoading__LoadingContainer",componentId:"sc-d1f2fecc-9"})`
  display: flex;
  margin-top: 48px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 1296px;

  ${Ci.bc}

  @media (max-width: ${wi}) {
    max-width: 100%;
    margin-top: 0;
  }
`,Pi=(0,u.default)(gi.ZP).withConfig({displayName:"AssetDetailsLoading__StyledColumn",componentId:"sc-d1f2fecc-10"})`
  max-width: 780px;
  width: 100%;

  @media (max-width: ${wi}) {
    max-width: 100%;
  }
`,Si=(0,u.default)(gi.ZP).withConfig({displayName:"AssetDetailsLoading__BuyNowLoadingDesktop",componentId:"sc-d1f2fecc-11"})`
  margin-top: 20px;
  padding-left: 60px;
  gap: 24px;

  @media (max-width: ${wi}) {
    display: none;
  }
`,Hi=(0,u.default)(gi.ZP).withConfig({displayName:"AssetDetailsLoading__BuyNowLoadingMobile",componentId:"sc-d1f2fecc-12"})`
  display: none;
  margin-top: 16px;
  gap: 24px;

  @media (max-width: ${wi}) {
    display: flex;
  }
`,Li=()=>{const e=(0,u.useTheme)();return(0,n.jsxs)(Di,{children:[(0,n.jsxs)(Pi,{children:[(0,n.jsx)($i,{children:(0,n.jsx)(yi.ZP,{stroke:e.accent1,size:"40px"})}),(0,n.jsxs)(Hi,{children:[(0,n.jsxs)(gi.ZP,{children:[(0,n.jsx)(ji,{}),(0,n.jsx)(_i,{})]}),(0,n.jsx)(Ti,{}),(0,n.jsxs)(gi.ZP,{children:[(0,n.jsx)(bi,{}),(0,n.jsx)(Ii,{})]})]}),(0,n.jsxs)(ki,{children:[(0,n.jsx)(Ni,{}),(0,n.jsx)(Ai,{}),(0,n.jsx)(Ni,{}),(0,n.jsx)(Ni,{})]})]}),(0,n.jsxs)(Si,{children:[(0,n.jsxs)(gi.ZP,{children:[(0,n.jsx)(ji,{}),(0,n.jsx)(_i,{})]}),(0,n.jsx)(Ti,{}),(0,n.jsxs)(gi.ZP,{children:[(0,n.jsx)(bi,{}),(0,n.jsx)(Ii,{})]})]})]})};var Ui=t(37018),zi=t(437),Bi=t(76885);const Oi=u.default.div.withConfig({displayName:"Asset__AssetContainer",componentId:"sc-dcb3da57-0"})`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 60px;
  padding: 48px 48px 0 48px;

  @media (max-width: 960px) {
    padding: 40px 40px 0 40px;
  }
  @media (max-width: 540px) {
    padding: 20px 20px 0 20px;
  }
  @media (max-width: 420px) {
    padding: 16px 16px 0 16px;
  }
`,Fi=u.default.div.withConfig({displayName:"Asset__AssetPriceDetailsContainer",componentId:"sc-dcb3da57-1"})`
  min-width: 360px;
  position: relative;

  @media (max-width: 960px) {
    display: none;
  }
`,Ei=()=>{const{tokenId:e="",contractAddress:i=""}=(0,P.UO)(),{data:t,loading:p}=function(e,i){var t,n,o,l,c,p,m,u,h,x,f;const{data:v,loading:g}=(0,r.CVZ)({variables:{address:e,tokenId:i}}),y=null===(o=v)||void 0===o||null===(n=o.nftAssets)||void 0===n||null===(t=n.edges[0])||void 0===t?void 0:t.node,C=null===(l=y)||void 0===l?void 0:l.collection,w=null===(m=y)||void 0===m||null===(p=m.listings)||void 0===p||null===(c=p.edges[0])||void 0===c?void 0:c.node,j=(0,d.parseEther)((0,s.K3)((null===(x=w)||void 0===x||null===(h=x.price)||void 0===h||null===(u=h.value)||void 0===u?void 0:u.toString())??"0")).toString();return(0,a.useMemo)((()=>{var t,n,o,l,d,s,a,r,c,p,m,u,h,x,f,v,_,b,I,N,A,k,$,T,D,P,S,H,L,U,z,B,O,F,E,R,M,Z,V,X,G,W,Y;return{data:[{id:null===(t=y)||void 0===t?void 0:t.id,address:e,notForSale:null===(null===(n=y)||void 0===n?void 0:n.listings),collectionName:null===(l=y)||void 0===l||null===(o=l.collection)||void 0===o?void 0:o.name,collectionSymbol:null===(a=y)||void 0===a||null===(s=a.collection)||void 0===s||null===(d=s.image)||void 0===d?void 0:d.url,imageUrl:null===(c=y)||void 0===c||null===(r=c.image)||void 0===r?void 0:r.url,animationUrl:null===(p=y)||void 0===p?void 0:p.animationUrl,marketplace:null===(m=w)||void 0===m?void 0:m.marketplace.toLowerCase(),name:null===(u=y)||void 0===u?void 0:u.name,priceInfo:{ETHPrice:j,baseAsset:"ETH",baseDecimals:"18",basePrice:j},susFlag:null===(h=y)||void 0===h?void 0:h.suspiciousFlag,sellorders:null===(f=y)||void 0===f||null===(x=f.listings)||void 0===x?void 0:x.edges.map((e=>({...e.node,protocolParameters:e.node.protocolParameters?JSON.parse(e.node.protocolParameters.toString()):void 0}))),smallImageUrl:null===(_=y)||void 0===_||null===(v=_.smallImage)||void 0===v?void 0:v.url,tokenId:i,tokenType:null===(A=y)||void 0===A||null===(N=A.collection)||void 0===N||null===(I=N.nftContracts)||void 0===I||null===(b=I[0])||void 0===b?void 0:b.standard,collectionIsVerified:null===($=y)||void 0===$||null===(k=$.collection)||void 0===k?void 0:k.isVerified,rarity:{primaryProvider:"Rarity Sniper",providers:null===(D=y)||void 0===D||null===(T=D.rarities)||void 0===T?void 0:T.map((e=>({rank:e.rank,score:e.score,provider:"Rarity Sniper"})))},ownerAddress:null===(P=y)||void 0===P?void 0:P.ownerAddress,creator:{profile_img_url:(null===(L=y)||void 0===L||null===(H=L.creator)||void 0===H||null===(S=H.profileImage)||void 0===S?void 0:S.url)??"",address:(null===(z=y)||void 0===z||null===(U=z.creator)||void 0===U?void 0:U.address)??""},metadataUrl:(null===(B=y)||void 0===B?void 0:B.metadataUrl)??"",traits:null===(F=y)||void 0===F||null===(O=F.traits)||void 0===O?void 0:O.map((e=>({trait_type:e.name??"",trait_value:e.value??""})))},{collectionDescription:null===(E=C)||void 0===E?void 0:E.description,collectionImageUrl:null===(M=C)||void 0===M||null===(R=M.image)||void 0===R?void 0:R.url,collectionName:null===(Z=C)||void 0===Z?void 0:Z.name,isVerified:null===(V=C)||void 0===V?void 0:V.isVerified,totalSupply:null===(X=C)||void 0===X?void 0:X.numAssets,twitterUrl:null===(G=C)||void 0===G?void 0:G.twitterName,discordUrl:null===(W=C)||void 0===W?void 0:W.discordUrl,externalUrl:null===(Y=C)||void 0===Y?void 0:Y.homepageUrl}],loading:g}}),[e,y,C,j,null===(f=w)||void 0===f?void 0:f.marketplace,g,i])}(i,e),[m,u]=t,h=(0,a.useMemo)((()=>({title:(0,Bi.H)(m.name,u.collectionName,e),image:window.location.origin+"/api/image/nfts/asset/"+i+"/"+e,url:window.location.href,description:u.collectionDescription??"View traits, trading activity, descriptions, and other details on your NFTs."})),[m.name,u.collectionDescription,u.collectionName,i,e]),x=(0,Ui.X)(h);return s._P.includes(i)?(0,n.jsx)(P.Fg,{to:"/nfts",replace:!0}):p?(0,n.jsx)(Li,{}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(zi.Helmet,{children:[(0,n.jsxs)("title",{children:[m.name??""," ",m.name?"|":""," ",u.collectionName??c.t`Explore NFTs`," on Uniswap"]}),x.map(((e,i)=>(0,n.jsx)("meta",{...e},i)))]}),(0,n.jsx)(l.fM,{page:o.yJ.NFT_DETAILS_PAGE,properties:{collection_address:i,token_id:e},shouldLogImpression:!0,children:m&&u?(0,n.jsxs)(Oi,{children:[(0,n.jsx)(vi,{collection:u,asset:m}),(0,n.jsx)(Fi,{children:(0,n.jsx)(le,{collection:u,asset:m})})]}):null})]})}},76885:(e,i,t)=>{function n(e,i){return e?"Get "+e+" on Uniswap":i?"Get "+i+" on Uniswap":"View Token on Uniswap"}function o(e,i,t){return e||(i&&t?i+" #"+t:t?"Asset #"+t:"View NFT on Uniswap")}t.d(i,{H:()=>o,u:()=>n})}}]);
//# sourceMappingURL=9289.601c43fd.chunk.js.map