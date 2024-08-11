"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[3659],{44952:(e,t,n)=>{n.d(t,{b:()=>l});var i=n(13820),o=n(80182),s=n(78129),a=n(45779),r=n(70854);function l(e,t,n,l,d,c,p,u=!1){var h,m,x,f,g,v,w,y,b;const{data:j,loading:C,fetchMore:_}=(0,r.TGc)({variables:{ownerAddress:e,filter:n&&n.length>0?{assets:n}:{addresses:t},first:l,after:d,last:c,before:p},skip:u}),P=null===(x=j)||void 0===x||null===(m=x.nftBalances)||void 0===m||null===(h=m.pageInfo)||void 0===h?void 0:h.hasNextPage,I=(0,a.useCallback)((()=>{var e,t,n;return _({variables:{after:null===(n=j)||void 0===n||null===(t=n.nftBalances)||void 0===t||null===(e=t.pageInfo)||void 0===e?void 0:e.endCursor}})}),[null===(v=j)||void 0===v||null===(g=v.nftBalances)||void 0===g||null===(f=g.pageInfo)||void 0===f?void 0:f.endCursor,_]),S=null===(b=j)||void 0===b||null===(y=b.nftBalances)||void 0===y||null===(w=y.edges)||void 0===w?void 0:w.map((e=>{var t,n,a,r,l,d,c,p,u,h,m,x,f,g,v,w,y,b,j,C,_,P,I,S,N,k,T,$,R,E,L,F,M,A,O,D,B,Z,W,G,H,z,V,X,U,Y,q,J,K,Q,ee,te,ne,ie,oe,se,ae,re,le,de,ce,pe,ue,he,me,xe,fe,ge;const ve=null===(t=e)||void 0===t?void 0:t.node.ownedAsset,we=(0,o.parseEther)((0,s.K3)((null===(r=ve)||void 0===r||null===(a=r.listings)||void 0===a||null===(n=a.edges[0])||void 0===n?void 0:n.node.price.value)??0)).toString();return{id:null===(l=ve)||void 0===l?void 0:l.id,imageUrl:null===(c=ve)||void 0===c||null===(d=c.image)||void 0===d?void 0:d.url,smallImageUrl:null===(u=ve)||void 0===u||null===(p=u.smallImage)||void 0===p?void 0:p.url,notForSale:0===(null===(x=ve)||void 0===x||null===(m=x.listings)||void 0===m||null===(h=m.edges)||void 0===h?void 0:h.length),animationUrl:null===(f=ve)||void 0===f?void 0:f.animationUrl,susFlag:null===(g=ve)||void 0===g?void 0:g.suspiciousFlag,priceInfo:{ETHPrice:we,baseAsset:"ETH",baseDecimals:"18",basePrice:we},name:null===(v=ve)||void 0===v?void 0:v.name,tokenId:null===(w=ve)||void 0===w?void 0:w.tokenId,asset_contract:{address:null===(C=ve)||void 0===C||null===(j=C.collection)||void 0===j||null===(b=j.nftContracts)||void 0===b||null===(y=b[0])||void 0===y?void 0:y.address,tokenType:null===(S=ve)||void 0===S||null===(I=S.collection)||void 0===I||null===(P=I.nftContracts)||void 0===P||null===(_=P[0])||void 0===_?void 0:_.standard,name:null===(k=ve)||void 0===k||null===(N=k.collection)||void 0===N?void 0:N.name,description:null===(T=ve)||void 0===T?void 0:T.description,image_url:null===(E=ve)||void 0===E||null===(R=E.collection)||void 0===R||null===($=R.image)||void 0===$?void 0:$.url,payout_address:null===(A=e)||void 0===A||null===(M=A.node)||void 0===M||null===(F=M.listingFees)||void 0===F||null===(L=F[0])||void 0===L?void 0:L.payoutAddress},collection:{name:null===(O=ve.collection)||void 0===O?void 0:O.name,isVerified:null===(D=ve.collection)||void 0===D?void 0:D.isVerified,imageUrl:null===(Z=ve.collection)||void 0===Z||null===(B=Z.image)||void 0===B?void 0:B.url,twitterUrl:(null===(W=ve.collection)||void 0===W?void 0:W.twitterName)?`@${null===(G=ve.collection)||void 0===G?void 0:G.twitterName}`:void 0},collectionIsVerified:null===(z=ve)||void 0===z||null===(H=z.collection)||void 0===H?void 0:H.isVerified,lastPrice:null===(V=e.node.lastPrice)||void 0===V?void 0:V.value,floorPrice:null===(J=ve)||void 0===J||null===(q=J.collection)||void 0===q||null===(Y=q.markets)||void 0===Y||null===(U=Y[0])||void 0===U||null===(X=U.floorPrice)||void 0===X?void 0:X.value,basisPoints:(null===(te=e)||void 0===te||null===(ee=te.node)||void 0===ee||null===(Q=ee.listingFees)||void 0===Q||null===(K=Q[0])||void 0===K?void 0:K.basisPoints)??0/i.PM,listing_date:null===(re=ve)||void 0===re||null===(ae=re.listings)||void 0===ae||null===(se=ae.edges)||void 0===se||null===(oe=se[0])||void 0===oe||null===(ie=oe.node)||void 0===ie||null===(ne=ie.createdAt)||void 0===ne?void 0:ne.toString(),date_acquired:null===(de=e.node.lastPrice)||void 0===de||null===(le=de.timestamp)||void 0===le?void 0:le.toString(),sellOrders:null===(pe=ve)||void 0===pe||null===(ce=pe.listings)||void 0===ce?void 0:ce.edges.map((e=>e.node)),floor_sell_order_price:null===(ge=ve)||void 0===ge||null===(fe=ge.listings)||void 0===fe||null===(xe=fe.edges)||void 0===xe||null===(me=xe[0])||void 0===me||null===(he=me.node)||void 0===he||null===(ue=he.price)||void 0===ue?void 0:ue.value}}));return(0,a.useMemo)((()=>({walletAssets:S,hasNext:P,loadMore:I,loading:C})),[P,I,C,S])}},47411:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Yo});var i=n(92936),o=n(5985),s=n(26729),a=n(47583),r=n(25320),l=n(69780),d=n(27179),c=n(6823),p=n(3464),u=n(44591),h=n(94284),m=n(32682),x=n(24509),f=n(89882),g=n(60040),v=n(70518),w=n(45779),y=n(63194),b=n(57221),j=n(14411),C=n(66869),_=n(54972),P=n(62587),I=n(66136);const S=(0,j.default)(u.ZP).withConfig({displayName:"BelowFloorWarningModal__ModalWrapper",componentId:"sc-65f8923b-0"})`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
  z-index: ${P.k.modal};
  background: ${({theme:e})=>e.surface1};
  border-radius: 20px;
  border: 1px solid ${({theme:e})=>e.surface3};
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  padding: 20px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and (max-width: ${C.j$.sm}px) {
    width: 100%;
  }
`,N=j.default.div.withConfig({displayName:"BelowFloorWarningModal__CloseIconWrapper",componentId:"sc-65f8923b-1"})`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`,k=(0,j.default)(y.Z).withConfig({displayName:"BelowFloorWarningModal__CloseIcon",componentId:"sc-65f8923b-2"})`
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`,T=j.default.div.withConfig({displayName:"BelowFloorWarningModal__HazardIconWrap",componentId:"sc-65f8923b-3"})`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 32px 120px;
`,$=(0,j.default)(l.DF).withConfig({displayName:"BelowFloorWarningModal__ContinueButton",componentId:"sc-65f8923b-4"})`
  font-weight: 535;
  font-size: 20px;
  line-height: 24px;
  margin-top: 12px;
`,R=j.default.span.withConfig({displayName:"BelowFloorWarningModal__EditListings",componentId:"sc-65f8923b-5"})`
  font-weight: 535;
  font-size: 16px;
  line-height: 20px;
  color: ${({theme:e})=>e.accent1};
  text-align: center;
  cursor: pointer;
  padding: 12px 16px;

  &:hover {
    opacity: 0.6;
  }
`,E=({listingsBelowFloor:e,closeModal:t,startListing:n})=>{const o=(0,j.useTheme)(),{formatDelta:s}=(0,I.Gb)();return(0,i.jsxs)(g.h,{children:[(0,i.jsxs)(S,{children:[(0,i.jsxs)(N,{children:[(0,i.jsx)(k,{width:24,height:24,onClick:t})," "]}),(0,i.jsx)(T,{children:(0,i.jsx)(b.Z,{height:90,width:90,color:o.critical})}),(0,i.jsx)(_.Tv.HeadlineSmall,{lineHeight:"28px",textAlign:"center",children:(0,i.jsx)(c.cC,{children:"Low listing price"})}),(0,i.jsxs)(_.Tv.BodyPrimary,{textAlign:"center",children:[(0,i.jsx)(c.CN,{value:1!==e.length?2:1,one:(0,c.t)("One NFT is listed {{delta}} ",{delta:s(100*(1-(e[0][1].price??0)/(e[0][0].floorPrice??0)))}),other:(0,c.t)("{{count}} NFTs are listed significantly ",{count:e.length})}),"\xa0",(0,i.jsx)(c.cC,{children:"below the collection\u2019s floor price. Are you sure you want to continue?"})]}),(0,i.jsx)($,{onClick:e=>{e.preventDefault(),e.stopPropagation(),n(),t()},children:(0,i.jsx)(c.cC,{children:"Continue"})}),(0,i.jsx)(R,{onClick:t,children:(0,i.jsx)(c.cC,{children:"Edit listings"})})]}),(0,i.jsx)(v.a,{onClick:t})]})};var L=n(79132),F=n(97341),M=n(35797),A=n(63490),O=n.n(A);const D=j.default.div.withConfig({displayName:"shared__RemoveIconWrap",componentId:"sc-e1e0e3a1-0"})`
  position: absolute;
  left: 50%;
  top: 30px;
  transform: translateX(-50%);
  width: 32px;
  visibility: ${({hovered:e})=>e?"visible":"hidden"};
`,B=(0,j.default)(h.ZP).withConfig({displayName:"shared__TitleRow",componentId:"sc-e1e0e3a1-1"})`
  justify-content: space-between;
  margin-bottom: 8px;
`;var Z,W;!function(e){e[e.SAME_PRICE=0]="SAME_PRICE",e[e.FLOOR_PRICE=1]="FLOOR_PRICE",e[e.LAST_PRICE=2]="LAST_PRICE",e[e.CUSTOM=3]="CUSTOM"}(Z||(Z={})),function(e){e[e.BELOW_FLOOR=0]="BELOW_FLOOR",e[e.ALREADY_LISTED=1]="ALREADY_LISTED",e[e.NONE=2]="NONE"}(W||(W={}));const G="0x59728544B08AB483533076417FbBB2fD0B17CE3a",H="0xfed24ec7e22f573c2e08aef55aa6797ca2b3a051",z="0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000",V="0x1e0049783f008a0085193e00003d00cd54003c71",X="0x00000000000000ADc04C56Bf30aC9d3c0aAF14dC",U={[z]:V},Y=1e4;function q(e,t,n,i,o,s,a){try{var r=e[s](a),l=r.value}catch(d){return void n(d)}r.done?t(l):Promise.resolve(l).then(i,o)}function J(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var s=e.apply(t,n);function a(e){q(s,i,o,a,r,"next",e)}function r(e){q(s,i,o,a,r,"throw",e)}a(void 0)}))}}const K="0xf849de01b080adc3a814fabe1e2087475cf2e354",Q="0x024ac22acdb367a3ae52a3d94ac6649fdc1f0779",ee=function(){var e=J((function*(e){const t=JSON.stringify(e),n=new AbortController,i=new Request("https://temp.gateway.uniswap.org/v1/nft/postX2Y2SellOrderWithApiKey",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:t,signal:n.signal}),o=setTimeout((()=>n.abort()),6e4);try{const e=yield fetch(i);return 200===(yield e.json()).code}catch(s){return!1}finally{clearTimeout(o)}}));return function(t){return e.apply(this,arguments)}}(),te=function(){var e=J((function*(e,t){var n,i,o,s;const a=`https://temp.gateway.uniswap.org/v1/nft/getX2Y2OrderId?collectionAddress=${e}&tokenId=${t}`,r=yield fetch(a,{method:"GET",headers:{"Content-Type":"application/json; charset=utf-8"}});return null===(s=yield r.json())||void 0===s||null===(o=s.data)||void 0===o||null===(i=o.data)||void 0===i||null===(n=i[0])||void 0===n?void 0:n.id}));return function(t,n){return e.apply(this,arguments)}}();var ne=n(47263),ie=n(11604),oe=n(7937),se=n(66284),ae=n(5540),re=n(56079),le=n(13820);function de(e,t,n,i,o,s,a){try{var r=e[s](a),l=r.value}catch(d){return void n(d)}r.done?t(l):Promise.resolve(l).then(i,o)}const ce=function(){var e,t=(e=function*(e){const t=yield fetch("https://temp.gateway.uniswap.org/v1/nft/createLooksRareOrder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});try{return(yield t.json()).success}catch(n){return!1}},function(){var t=this,n=arguments;return new Promise((function(i,o){var s=e.apply(t,n);function a(e){de(s,i,o,a,r,"next",e)}function r(e){de(s,i,o,a,r,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}();function pe(e,t,n,i,o,s,a){try{var r=e[s](a),l=r.value}catch(d){return void n(d)}r.done?t(l):Promise.resolve(l).then(i,o)}function ue(){var e;return e=function*(e){const t=e?JSON.stringify(e):void 0,n=new AbortController,i=new Request("https://temp.gateway.uniswap.org/v1/nft/postOpenSeaSellOrderWithApiKey",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:t,signal:n.signal}),o=setTimeout((()=>n.abort()),O()("60s"));try{const e=yield fetch(i);return 200===(yield e.json()).code}catch(s){return!1}finally{clearTimeout(o)}},ue=function(){var t=this,n=arguments;return new Promise((function(i,o){var s=e.apply(t,n);function a(e){pe(s,i,o,a,r,"next",e)}function r(e){pe(s,i,o,a,r,"throw",e)}a(void 0)}))},ue.apply(this,arguments)}var he=n(23399),me=n(98282),xe=n(70854),fe=n(31042),ge=n(46854),ve=n(73116),we=n(6412),ye=n(30012);function be(e,t,n,i,o,s,a){try{var r=e[s](a),l=r.value}catch(d){return void n(d)}r.done?t(l):Promise.resolve(l).then(i,o)}const je="tuple(uint256 price, bytes data)",Ce=["uint256","address","uint256","uint256","uint256","uint256","address","bytes","uint256",`${je}[]`],_e=`tuple(uint256 salt, address user, uint256 network, uint256 intent, uint256 delegateType, uint256 deadline, address currency, bytes dataMask, ${je}[] items, bytes32 r, bytes32 s, uint8 v, uint8 signVersion)`,Pe=function(){var e,t=(e=function*(e,t){const n=fe.$.encode(Ce,[t.salt,t.user,t.network,t.intent,t.delegateType,t.deadline,t.currency,t.dataMask,t.items.length,t.items]),i=(0,we.keccak256)(n),o=yield e.send("personal_sign",[i,t.user]);t.r=`0x${o.slice(2,66)}`,t.s=`0x${o.slice(66,130)}`,t.v=parseInt(o.slice(130,132),16),Ie(t)},function(){var t=this,n=arguments;return new Promise((function(i,o){var s=e.apply(t,n);function a(e){be(s,i,o,a,r,"next",e)}function r(e){be(s,i,o,a,r,"throw",e)}a(void 0)}))});return function(e,n){return t.apply(this,arguments)}}(),Ie=e=>{e.v<27&&(e.v=e.v+27)},Se=e=>fe.$.encode([_e],[e]),Ne=(e,t,n,i=xe.hgB.Erc721)=>({salt:(()=>{const e=ie.O$.from((0,ye.O)(16)).toHexString();return(0,ge.hexZeroPad)(e,64)})(),user:e,network:1,intent:1,delegateType:i===xe.hgB.Erc721?1:2,deadline:t,currency:ve.d,dataMask:"0x",items:n.map((e=>{return{price:e.price,data:(t=e.tokens,fe.$.encode(["tuple(address token, uint256 tokenId, uint256 amount)[]"],[t]))};var t})),r:"",s:"",v:0,signVersion:1});function ke(e,t,n,i,o,s,a){try{var r=e[s](a),l=r.value}catch(d){return void n(d)}r.done?t(l):Promise.resolve(l).then(i,o)}function Te(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var s=e.apply(t,n);function a(e){ke(s,i,o,a,r,"next",e)}function r(e){ke(s,i,o,a,r,"throw",e)}a(void 0)}))}}const $e=[{name:"X2Y2",fee:.5},{name:"OpenSea",fee:2.5}],Re=(e,t)=>({amount:e,recipient:t}),Ee=(e,t,n)=>{var i,o,s,a;const r=(null===(i=e)||void 0===i?void 0:i.basisPoints)??0,l=100*((null===(o=$e.find((e=>"OpenSea"===e.name)))||void 0===o?void 0:o.fee)??0),d=Y-r-l,c=t.mul(ie.O$.from(r)).div(ie.O$.from(Y)).toString(),p=t.mul(ie.O$.from(d)).div(ie.O$.from(Y)).toString(),u=t.mul(ie.O$.from(l)).div(ie.O$.from(Y)).toString();return{sellerFee:Re(p,n),creatorFee:r>0?Re(c,(null===(a=e)||void 0===a||null===(s=a.asset_contract)||void 0===s?void 0:s.payout_address)??""):void 0,openSeaFee:l?Re(u,"0x0000a26b00c1F0DF003000390027140000fAa719"):void 0}};function Le(){return(Le=Te((function*(e,t,n,i,o=xe.hgB.Erc721){const s=new oe.Contract(t,o===xe.hgB.Erc721?me:he,n),a=yield n.getAddress();try{if(yield s.isApprovedForAll(a,e))return void i(ne.Sb.APPROVED);i(ne.Sb.SIGNING);const t=yield s.setApprovalForAll(e,!0);i(ne.Sb.PENDING);1===(yield t.wait()).status?i(ne.Sb.APPROVED):i(ne.Sb.FAILED)}catch(r){4001===r.code?i(ne.Sb.REJECTED):i(ne.Sb.FAILED)}}))).apply(this,arguments)}function Fe(){return Fe=Te((function*(e,t,n,i,o=0,s){var a,r;const l=new ae.A(i,{conduitKeyToConduit:U,overrides:{defaultConduitKey:z},seaportVersion:"1.5"}),d=yield n.getAddress(),c=null===(r=t.newListings)||void 0===r||null===(a=r.find((t=>t.marketplace.name===e.name)))||void 0===a?void 0:a.price;if(!c||!t.expirationTime||!t.asset_contract.address||!t.tokenId)return!1;switch(e.name){case"OpenSea":try{const e=(0,se.parseEther)(`${c}`),{sellerFee:n,creatorFee:i,openSeaFee:o}=Ee(t,e,d),a=[n,i,o].filter((e=>void 0!==e)),{executeAllActions:r}=yield l.createOrder({offer:[{itemType:t.asset_contract.tokenType===xe.hgB.Erc721?re.ItemType.ERC721:re.ItemType.ERC1155,token:t.asset_contract.address,identifier:t.tokenId,amount:"1"}],consideration:a,endTime:t.expirationTime.toString(),zone:le.r_,allowPartialFills:!0},d),p={...yield r(),protocol_address:X};s(ne.Sb.PENDING);const u=yield function(e){return ue.apply(this,arguments)}(p);return s(u?ne.Sb.APPROVED:ne.Sb.FAILED),u}catch(p){return 4001===p.code?s(ne.Sb.REJECTED):s(ne.Sb.FAILED),!1}case"LooksRare":{const e=M.Xg[M.HL.MAINNET],i=Math.round(Date.now()/1e3),a={isOrderAsk:!0,signer:d,collection:t.asset_contract.address,price:(0,se.parseEther)(c.toString()),tokenId:ie.O$.from(t.tokenId),amount:ie.O$.from(1),strategy:e.STRATEGY_STANDARD_SALE,currency:e.WETH,nonce:ie.O$.from(o),startTime:ie.O$.from(i),endTime:ie.O$.from(t.expirationTime),minPercentageToAsk:ie.O$.from(1e4).sub(ie.O$.from(150+(t.basisPoints?50:0))).toNumber(),params:[]};try{const r=yield(0,M.tI)(n,M.HL.MAINNET,a,G);s(ne.Sb.PENDING);const l={signature:r,tokenId:t.tokenId,collection:t.asset_contract.address,strategy:e.STRATEGY_STANDARD_SALE,currency:e.WETH,signer:d,isOrderAsk:!0,nonce:o,amount:1,price:(0,se.parseEther)(c.toString()).toString(),startTime:i,endTime:t.expirationTime,minPercentageToAsk:1e4-(150+(t.basisPoints?50:0)),params:[]},p=yield ce(l);return s(p?ne.Sb.APPROVED:ne.Sb.FAILED),p}catch(p){return 4001===p.code?s(ne.Sb.REJECTED):s(ne.Sb.FAILED),!1}}case"X2Y2":{const e={price:(0,se.parseEther)(c.toString()),tokens:[{token:t.asset_contract.address,tokenId:ie.O$.from(t.tokenId),amount:1}]},n=Ne(d,t.expirationTime,[e],t.asset_contract.tokenType);try{const e=yield te(t.asset_contract.address,t.tokenId);yield Pe(i,n);const o={order:Se(n),isBundle:!1,bundleName:"",bundleDesc:"",orderIds:e?[e]:[],changePrice:Boolean(e),isCollection:!1};s(ne.Sb.PENDING);const a=yield ee(o);return s(a?ne.Sb.APPROVED:ne.Sb.FAILED),a}catch(p){return 4001===p.code?s(ne.Sb.REJECTED):s(ne.Sb.FAILED),!1}}default:return!1}})),Fe.apply(this,arguments)}function Me(e,t,n,i,o,s,a){try{var r=e[s](a),l=r.value}catch(d){return void n(d)}r.done?t(l):Promise.resolve(l).then(i,o)}function Ae(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var s=e.apply(t,n);function a(e){Me(s,i,o,a,r,"next",e)}function r(e){Me(s,i,o,a,r,"throw",e)}a(void 0)}))}}function Oe(e,t,n){return De.apply(this,arguments)}function De(){return De=Ae((function*(e,t,n){const i=()=>Oe(e,t,n);n(e,ne.Sb.SIGNING,i);const{marketplace:o,collectionAddress:s,nftStandard:a}=e,r=M.Xg[M.HL.MAINNET],l="OpenSea"===o.name?V:"LooksRare"===o.name?e.nftStandard===xe.hgB.Erc721?G:H:"X2Y2"===o.name?e.nftStandard===xe.hgB.Erc721?K:Q:r.TRANSFER_MANAGER_ERC721;s&&(yield function(e,t,n,i){return Le.apply(this,arguments)}(l,s,t,(t=>n(e,t,i)),a))})),De.apply(this,arguments)}function Be(e,t,n,i,o,s){return Ze.apply(this,arguments)}function Ze(){return Ze=Ae((function*(e,t,n,i,o,s){const a=i(),r=()=>Be(e,t,n,i,o,s);s(e,ne.Sb.SIGNING,r);const{asset:l,marketplace:d}=e,c=yield function(e,t,n,i){return Fe.apply(this,arguments)}(d,l,t,n,a,(t=>s(e,t,r)));c&&"LooksRare"===e.marketplace.name&&o(a+1)})),Ze.apply(this,arguments)}const We=e=>{const t=e.reduce(((e,t)=>{var n;if(null===(n=t.newListings)||void 0===n?void 0:n.length){var i;const n=t.newListings.reduce(((e,t)=>(e.price??0)>(t.price??0)?e:t)),o=n.marketplace.fee+("LooksRare"===n.marketplace.name?50:(null===(i=t)||void 0===i?void 0:i.basisPoints)??0)/100;return e+(n.price??0)-(n.price??0)*(o/100)}return e}),0);return t?Math.round(1e4*t+Number.EPSILON)/1e4:0};function Ge(){const e=(0,L.Pc)((e=>e.sellAssets)),{setListings:t,setCollectionsRequiringApproval:n}=(0,L.zM)((({setListings:e,setCollectionsRequiringApproval:t})=>({setListings:e,setCollectionsRequiringApproval:t})));(0,w.useEffect)((()=>{const[i,o]=(e=>{const t=[],n=[];return e.forEach((e=>{var i;null===(i=e.marketplaces)||void 0===i||i.forEach((i=>{var o,s;const a={image:e.smallImageUrl,name:e.name||`#${e.tokenId}`,status:ne.Sb.DEFINED,asset:e,marketplace:i,price:null===(s=e.newListings)||void 0===s||null===(o=s.find((e=>e.marketplace.name===i.name)))||void 0===o?void 0:o.price};if(n.push(a),!t.some((t=>t.collectionAddress===e.asset_contract.address&&t.marketplace.name===i.name))){const n={image:e.asset_contract.image_url,name:e.asset_contract.name,status:ne.Sb.DEFINED,collectionAddress:e.asset_contract.address,isVerified:e.collectionIsVerified,marketplace:i,nftStandard:e.asset_contract.tokenType};t.push(n)}}))})),[t,n]})(e);t(o),n(i)}),[e,n,t])}const He=(e,t)=>.01*("LooksRare"===e.name?t.basisPoints?50:0:t.basisPoints??0),ze=(0,j.default)(l.Yd).withConfig({displayName:"ListingButton__StyledListingButton",componentId:"sc-5bb07f22-0"})`
  background: ${({showResolveIssues:e,theme:t})=>e?t.critical:t.accent1};
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  font-weight: 535;
  font-size: 20px;
  line-height: 24px;
  padding: 16px;
  border-radius: 12px;
  width: min-content;
  border: none;
  cursor: ${({missingPrices:e})=>e?"auto":"pointer"};
  opacity: ${({showResolveIssues:e,missingPrices:t})=>!e&&t&&"0.3"};

  @media screen and (max-width: ${C.j$.sm}px) {
    font-size: 16px;
    line-height: 20px;
    padding: 10px 12px;
  }
`,Ve=({onClick:e})=>{const{sellAssets:t,showResolveIssues:n,toggleShowResolveIssues:o,issues:s,setIssues:a}=(0,L.Pc)((({sellAssets:e,showResolveIssues:t,toggleShowResolveIssues:n,issues:i,setIssues:o})=>({sellAssets:e,showResolveIssues:t,toggleShowResolveIssues:n,issues:i,setIssues:o}))),[r,l]=(0,w.useState)(!1),d=(0,F.dD)(),[p,u]=(0,w.useMemo)((()=>{const{missingExpiration:e,overMaxExpiration:i,listingsMissingPrice:s,listingsBelowFloor:r,listingsAboveSellOrderFloor:l}=(e=>{const t=e.some((e=>null!=e.expirationTime&&(isNaN(e.expirationTime)||1e3*e.expirationTime-Date.now()<O()("60s")))),n=e.some((e=>null!=e.expirationTime&&1e3*e.expirationTime-Date.now()>O()("180d"))),i=[],o=[],s=[];for(const r of e)if(r.newListings)for(const e of r.newListings){var a;e.price?e.price<.8*((null===(a=r)||void 0===a?void 0:a.floorPrice)??0)&&!e.overrideFloorPrice?o.push([r,e]):r.floor_sell_order_price&&e.price>=r.floor_sell_order_price&&r.asset_contract.tokenType!==xe.hgB.Erc1155&&s.push([r,e]):i.push([r,e])}return{missingExpiration:t,overMaxExpiration:n,listingsMissingPrice:i,listingsBelowFloor:o,listingsAboveSellOrderFloor:s}})(t),d=Number(e)+Number(i)+s.length+l.length;return a(d),!d&&n&&o(),(e||i||l.length)&&!n&&o(),[s,r]}),[t,a,n,o]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(ze,{onClick:()=>{s?!n&&o():u.length?l(!0):e()},missingPrices:!!p.length,showResolveIssues:n,children:n?(0,i.jsx)(c.CN,{value:1!==s?2:1,one:c.t`Resolve issue`,other:(0,c.t)("Resolve {{issues}} issues",{issues:s})}):p.length&&!d?(0,i.jsx)(c.cC,{children:"Set prices to continue"}):(0,i.jsx)(c.cC,{children:"Start listing"})}),r&&(0,i.jsx)(E,{listingsBelowFloor:u,closeModal:()=>l(!1),startListing:e})]})};var Xe=n(21926),Ue=n(51001),Ye=n(590),qe=n(16449),Je=n(68588),Ke=n(86059),Qe=n(58690),et=n(81205),tt=n(76623),nt=n(55874),it=n(63415),ot=n(78129),st=n(7797),at=n(50901),rt=n(62652);const lt=(0,j.default)(u.ZP).withConfig({displayName:"ContentRow__ContentColumn",componentId:"sc-426ef8e9-0"})`
  background-color: ${({theme:e,failed:t})=>t&&(0,rt.jb)(12,e.critical)};
  border-radius: 12px;
  padding-bottom: ${({failed:e})=>e&&"16px"};
`,dt=(0,j.default)(h.ZP).withConfig({displayName:"ContentRow__ContentRowWrapper",componentId:"sc-426ef8e9-1"})`
  padding: 16px;
  border: ${({failed:e,theme:t})=>!e&&`1px solid ${t.surface3}`};
  border-radius: 12px;
  opacity: ${({active:e,failed:t})=>e||t?"1":"0.6"};
`,ct=j.default.img.withConfig({displayName:"ContentRow__CollectionIcon",componentId:"sc-426ef8e9-2"})`
  border-radius: 100px;
  height: 24px;
  width: 24px;
  z-index: 1;
`,pt=j.default.img.withConfig({displayName:"ContentRow__AssetIcon",componentId:"sc-426ef8e9-3"})`
  border-radius: 4px;
  height: 24px;
  width: 24px;
  z-index: 1;
`,ut=j.default.div.withConfig({displayName:"ContentRow__MarketplaceIcon",componentId:"sc-426ef8e9-4"})`
  border-radius: 4px;
  height: 24px;
  width: 24px;
  margin-left: -4px;
  margin-right: 12px;
`,ht=(0,j.default)(_.Tv.SubHeaderSmall).withConfig({displayName:"ContentRow__ContentName",componentId:"sc-426ef8e9-5"})`
  color: ${({theme:e})=>e.neutral1};
  line-height: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 40%;
`,mt=j.default.span.withConfig({displayName:"ContentRow__ProceedText",componentId:"sc-426ef8e9-6"})`
  font-weight: 535;
  font-size: 12px;
  line-height: 16px;
  color: ${({theme:e})=>e.neutral2};
`,xt=j.default.span.withConfig({displayName:"ContentRow__FailedText",componentId:"sc-426ef8e9-7"})`
  font-weight: 535;
  font-size: 10px;
  line-height: 12px;
  color: ${({theme:e})=>e.critical};
  margin-left: 4px;
`,ft=(0,j.default)(Qe.SA).withConfig({displayName:"ContentRow__StyledVerifiedIcon",componentId:"sc-426ef8e9-8"})`
  height: 16px;
  width: 16px;
  margin-left: 4px;
`,gt=j.default.div.withConfig({displayName:"ContentRow__IconWrapper",componentId:"sc-426ef8e9-9"})`
  margin-left: auto;
  margin-right: 0px;
`,vt=(0,j.default)(h.ZP).withConfig({displayName:"ContentRow__ButtonRow",componentId:"sc-426ef8e9-10"})`
  padding: 0px 16px;
  justify-content: space-between;
`,wt=j.css`
  width: 152px;
  cursor: pointer;
  padding: 8px 0px;
  text-align: center;
  font-weight: 535;
  font-size: 14px;
  line-height: 16px;
  border-radius: 12px;
  border: none;

  &:hover {
    opacity: 0.6;
  }
`,yt=j.default.button.withConfig({displayName:"ContentRow__RemoveButton",componentId:"sc-426ef8e9-11"})`
  background-color: ${({theme:e})=>e.critical};
  color: ${({theme:e})=>e.neutral1};
  ${wt}
`,bt=j.default.button.withConfig({displayName:"ContentRow__RetryButton",componentId:"sc-426ef8e9-12"})`
  background-color: ${({theme:e})=>e.surface3};
  color: ${({theme:e})=>e.neutral1};
  ${wt}
`,jt=({row:e,isCollectionApprovalSection:t,removeRow:n})=>{const o=(0,j.useTheme)(),s=(0,w.useRef)(),a=e.status===ne.Sb.FAILED||e.status===ne.Sb.REJECTED;return(0,w.useEffect)((()=>{var t;e.status===ne.Sb.SIGNING&&(null===(t=s.current)||void 0===t||t.scroll)}),[e.status]),(0,i.jsxs)(lt,{failed:a,children:[(0,i.jsxs)(dt,{active:e.status===ne.Sb.SIGNING||e.status===ne.Sb.APPROVED,failed:a,ref:s,children:[t?(0,i.jsx)(ct,{src:e.image}):(0,i.jsx)(pt,{src:e.image}),(0,i.jsx)(ut,{children:(0,ot.Dp)(e.marketplace.name,"24")}),(0,i.jsx)(ht,{children:e.name}),t&&e.isVerified&&(0,i.jsx)(ft,{}),(0,i.jsx)(gt,{children:e.status===ne.Sb.DEFINED||e.status===ne.Sb.PENDING?(0,i.jsx)(it.ZP,{height:"14px",width:"14px",stroke:e.status===ne.Sb.PENDING?o.accent1:o.neutral3}):e.status===ne.Sb.SIGNING?(0,i.jsx)(mt,{children:(0,i.jsx)(c.cC,{children:"Proceed in wallet"})}):e.status===ne.Sb.APPROVED?(0,i.jsx)(st.Z,{height:"20",width:"20",stroke:o.success}):a&&(0,i.jsxs)(h.ZP,{children:[(0,i.jsx)(at.Z,{height:"20",width:"20",color:o.critical}),(0,i.jsx)(xt,{children:e.status===ne.Sb.FAILED?(0,i.jsx)(c.cC,{children:"Failed"}):(0,i.jsx)(c.cC,{children:"Rejected"})})]})})]}),a&&(0,i.jsxs)(vt,{justify:"space-between",children:[(0,i.jsx)(yt,{onClick:()=>n(e),children:(0,i.jsx)(c.cC,{children:"Remove"})}),(0,i.jsx)(bt,{onClick:e.callback,children:(0,i.jsx)(c.cC,{children:"Retry"})})]})]})},Ct=(0,j.default)(h.ZP).withConfig({displayName:"ListModalSection__SectionHeader",componentId:"sc-9f98a7d2-0"})`
  justify-content: space-between;
`,_t=(0,j.default)(_.Tv.SubHeader).withConfig({displayName:"ListModalSection__SectionTitle",componentId:"sc-9f98a7d2-1"})`
  line-height: 24px;
  color: ${({theme:e,active:t,approved:n})=>n?e.success:t?e.neutral1:e.neutral2};
`,Pt=(0,j.default)(Qe.g8).withConfig({displayName:"ListModalSection__SectionArrow",componentId:"sc-9f98a7d2-2"})`
  height: 24px;
  width: 24px;
  cursor: pointer;
  transition: ${nt.Kd.medium}ms;
  transform: rotate(${({active:e})=>e?0:180}deg);
`,It=(0,j.default)(u.ZP).withConfig({displayName:"ListModalSection__SectionBody",componentId:"sc-9f98a7d2-3"})`
  border-left: 1.5px solid ${tt.O9.gray650};
  margin-top: 4px;
  margin-left: 7px;
  padding-top: 4px;
  padding-left: 20px;
  max-height: 394px;
  overflow-y: auto;
  ${Je.Zl}
`,St=(0,j.default)(et.Z).withConfig({displayName:"ListModalSection__StyledInfoIcon",componentId:"sc-9f98a7d2-4"})`
  height: 16px;
  width: 16px;
  margin-left: 4px;
  color: ${({theme:e})=>e.neutral2};
`,Nt=(0,j.default)(u.ZP).withConfig({displayName:"ListModalSection__ContentRowContainer",componentId:"sc-9f98a7d2-5"})`
  gap: 8px;
  scroll-behavior: smooth;
`;var kt;!function(e){e[e.APPROVE=0]="APPROVE",e[e.SIGN=1]="SIGN"}(kt||(kt={}));const Tt=({sectionType:e,active:t,content:n,toggleSection:o})=>{const s=(0,j.useTheme)(),a=(0,L.Pc)((e=>e.sellAssets)),r=(0,L.Pc)((e=>e.removeAssetMarketplace)),l=(0,w.useMemo)((()=>!n.some((e=>e.status!==ne.Sb.APPROVED))),[n]),d=0===e,p=(0,w.useMemo)((()=>{if(d){const e=n.map((e=>e.collectionAddress));return[...new Set(e)].length}}),[n,d]),m=e=>{if(d){const t=e;for(const e of a)e.asset_contract.address===t.collectionAddress&&r(e,t.marketplace)}else{const t=e;r(t.asset,t.marketplace)}};return(0,i.jsxs)(u.ZP,{children:[(0,i.jsxs)(Ct,{children:[(0,i.jsxs)(h.ZP,{children:[t||l?(0,i.jsx)(Qe.bT,{fill:l?s.success:s.accent1}):(0,i.jsx)(Qe.rD,{}),(0,i.jsx)(_t,{active:t,marginLeft:"12px",approved:l,children:d?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.cC,{children:"Approve"}),"\xa0",(0,i.jsx)(c.CN,{value:p??1,one:c.t`collection`,other:c.t`collections`})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.cC,{children:"Sign"})," \xa0",n.length,"\xa0"," ",(0,i.jsx)(c.CN,{value:n.length,one:c.t`listing`,other:c.t`listings`})]})})]}),(0,i.jsx)(Pt,{active:t,secondaryColor:t?s.neutral1:s.neutral2,onClick:o})]}),t&&(0,i.jsxs)(It,{children:[d&&(0,i.jsxs)(h.ZP,{height:"16px",marginBottom:"16px",children:[(0,i.jsx)(_.Tv.BodySmall,{lineHeight:"16px",color:"neutral2",children:(0,i.jsx)(c.cC,{children:"Why is a transaction required?"})}),(0,i.jsx)(Ke.ud,{text:(0,i.jsx)(c.cC,{children:"Listing an NFT requires a one-time marketplace approval for each NFT collection."}),children:(0,i.jsx)(St,{})})]}),(0,i.jsx)(Nt,{children:n.map((e=>{var t;return(0,i.jsx)(jt,{row:e,removeRow:m,isCollectionApprovalSection:d},(null===(t=e)||void 0===t?void 0:t.name)??e.marketplace.name)}))})]})]})};var $t=n(81339),Rt=n(72993);const Et=j.default.img.withConfig({displayName:"SuccessScreen__SuccessImage",componentId:"sc-d37f541-0"})`
  width: calc(${({numImages:e})=>e>1?e>2?"33%":"50%":"100%"} - 12px);
  border-radius: 12px;
`,Lt=(0,j.default)(h.ZP).withConfig({displayName:"SuccessScreen__SuccessImageWrapper",componentId:"sc-d37f541-1"})`
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  overflow-y: scroll;
  margin-bottom: 16px;
  ${Je.Zl}
`,Ft=(0,j.default)(u.ZP).withConfig({displayName:"SuccessScreen__ProceedsColumn",componentId:"sc-d37f541-2"})`
  text-align: right;
`,Mt=j.css`
  width: 182px;
  cursor: pointer;
  padding: 12px 0px;
  text-align: center;
  font-weight: 535;
  font-size: 16px;
  line-height: 20px;
  border-radius: 12px;
  border: none;

  &:hover {
    opacity: 0.6;
  }

  @media screen and (max-width: ${C.j$.sm}px) {
    width: 100%;
    margin-bottom: 8px;
  }
`,At=j.default.button.withConfig({displayName:"SuccessScreen__ReturnButton",componentId:"sc-d37f541-3"})`
  background-color: ${({theme:e})=>e.surface3};
  color: ${({theme:e})=>e.neutral1};
  ${Mt}
`,Ot=j.default.a.withConfig({displayName:"SuccessScreen__TweetButton",componentId:"sc-d37f541-4"})`
  background-color: ${({theme:e})=>e.accent1};
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  text-decoration: none;
  ${Mt}
`,Dt=(0,j.default)(h.ZP).withConfig({displayName:"SuccessScreen__TweetRow",componentId:"sc-d37f541-5"})`
  justify-content: center;
  gap: 4px;
`,Bt=({overlayClick:e})=>{const t=(0,j.useTheme)(),{formatNumberOrString:n}=(0,I.Gb)(),o=(0,L.Pc)((e=>e.sellAssets)),s=(0,Rt.x)(),a=(0,x.Z)(s),{formatCurrencyAmount:r}=(0,I.Gb)(),l=(0,w.useMemo)((()=>We(o)),[o]),d=(0,f.Z)(l.toString(),a),p=(0,m.sq)(d);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(B,{children:[(0,i.jsxs)(_.Tv.HeadlineSmall,{lineHeight:"28px",children:[(0,i.jsx)(c.cC,{children:"Successfully listed"}),"\xa0",o.length>1?` ${o.length} `:"","NFT",(0,ot._6)(o.length),"!"]}),(0,i.jsx)(y.Z,{size:24,cursor:"pointer",onClick:e})]}),(0,i.jsx)(Lt,{children:o.map((e=>{var t,n,s;return(0,i.jsx)(Et,{src:e.imageUrl,numImages:o.length},(null===(n=e)||void 0===n||null===(t=n.asset_contract)||void 0===t?void 0:t.address)??""+(null===(s=e)||void 0===s?void 0:s.tokenId))}))}),(0,i.jsxs)(h.ZP,{justify:"space-between",align:"flex-start",marginBottom:"16px",children:[(0,i.jsx)(_.Tv.SubHeader,{children:(0,i.jsx)(c.cC,{children:"Proceeds if sold"})}),(0,i.jsxs)(Ft,{children:[(0,i.jsxs)(_.Tv.SubHeader,{children:[n({input:l,type:I.sw.NFTToken})," ETH"]}),p&&(0,i.jsx)(_.Tv.BodySmall,{lineHeight:"20px",color:"neutral2",children:r({amount:p,type:I.sw.FiatTokenPrice})})]})]}),(0,i.jsxs)(h.ZP,{justify:"space-between",style:{flexWrap:"wrap"},children:[(0,i.jsx)(At,{onClick:()=>window.location.reload(),children:(0,i.jsx)(c.cC,{children:"Return to My NFTs"})}),(0,i.jsx)(Ot,{href:(0,ot.FX)(o),target:"_blank",rel:"noreferrer",children:(0,i.jsxs)(Dt,{children:[(0,i.jsx)($t.Z,{height:20,width:20,color:t.deprecated_accentTextLightPrimary,fill:t.deprecated_accentTextLightPrimary}),(0,i.jsx)(c.cC,{children:"Share on Twitter"})]})})]})]})};function Zt(e,t,n,i,o,s,a){try{var r=e[s](a),l=r.value}catch(d){return void n(d)}r.done?t(l):Promise.resolve(l).then(i,o)}const Wt=j.default.div.withConfig({displayName:"ListModal__ListModalWrapper",componentId:"sc-77ec682c-0"})`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
  z-index: ${P.k.modal};
  background: ${({theme:e})=>e.surface1};
  border-radius: 20px;
  border: 1px solid ${({theme:e})=>e.surface3};
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  padding: 20px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (max-width: ${C.j$.sm}px) {
    width: 100%;
    height: 100%;
  }
`,Gt=({overlayClick:e})=>{var t;const n=(0,Ye.m)(),s=(0,qe.n)(),r=null===(t=s)||void 0===t?void 0:t.getSigner(),l=(0,a.oO)({modal:o.KO.NFT_LISTING}),{formatCurrencyAmount:d}=(0,I.Gb)(),p=(0,L.Pc)((e=>e.sellAssets)),{setListingStatusAndCallback:u,setLooksRareNonce:h,getLooksRareNonce:b,collectionsRequiringApproval:j,listings:C}=(0,L.zM)((({setListingStatusAndCallback:e,setLooksRareNonce:t,getLooksRareNonce:n,collectionsRequiringApproval:i,listings:o})=>({setListingStatusAndCallback:e,setLooksRareNonce:t,getLooksRareNonce:n,collectionsRequiringApproval:i,listings:o}))),P=(0,w.useMemo)((()=>We(p)),[p]),[S,N]=(0,w.useReducer)((e=>e===kt.APPROVE?kt.SIGN:kt.APPROVE),kt.APPROVE),k=(0,x.Z)(n.chainId),T=(0,f.Z)(P.toString(),k),$=d({amount:(0,m.sq)(T),type:I.sw.FiatTokenPrice}),R=(0,w.useMemo)((()=>j.every((e=>e.status===ne.Sb.APPROVED))),[j]),E=(0,w.useMemo)((()=>C.every((e=>e.status===ne.Sb.APPROVED))),[C]),F=function(){var e,t=(e=function*(){if(r&&s){for(const e of C)yield Be(e,r,s,b,h,u);(0,a._P)(o.Yz.NFT_LISTING_COMPLETED,{signatures_approved:C.filter((e=>e.status===ne.Sb.APPROVED)),list_quantity:C.length,usd_value:$,...l})}},function(){var t=this,n=arguments;return new Promise((function(i,o){var s=e.apply(t,n);function a(e){Zt(s,i,o,a,r,"next",e)}function r(e){Zt(s,i,o,a,r,"throw",e)}a(void 0)}))});return function(){return t.apply(this,arguments)}}();(0,w.useEffect)((()=>{R&&(F(),S===kt.APPROVE&&N())}),[R]);const M=(0,w.useCallback)((()=>{E?window.location.reload():e()}),[E,e]);return(0,w.useEffect)((()=>{!C.length&&M()}),[C,M]),(0,i.jsxs)(g.h,{children:[(0,i.jsx)(a.fM,{modal:o.KO.NFT_LISTING,children:(0,i.jsx)(Wt,{children:E?(0,i.jsx)(Bt,{overlayClick:M}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(B,{children:[(0,i.jsx)(_.Tv.HeadlineSmall,{lineHeight:"28px",children:(0,i.jsx)(c.cC,{children:"List NFTs"})}),(0,i.jsx)(y.Z,{size:24,cursor:"pointer",onClick:M})]}),(0,i.jsx)(Tt,{sectionType:kt.APPROVE,active:S===kt.APPROVE,content:j,toggleSection:N}),(0,i.jsx)(Tt,{sectionType:kt.SIGN,active:S===kt.SIGN,content:C,toggleSection:N})]})})}),(0,i.jsx)(v.a,{onClick:M})]})};var Ht=n(30520),zt=n(86082);const Vt=(0,j.default)(u.ZP).withConfig({displayName:"Dropdown__DropdownWrapper",componentId:"sc-2f0c6b6d-0"})`
  gap: 4px;
  background: ${({theme:e})=>e.surface1};
  padding: 8px;
  width: ${({$width:e})=>e}px;
  border-radius: 12px;
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  border: 1px solid ${({theme:e})=>e.surface3};
`,Xt=(0,j.default)(h.ZP).withConfig({displayName:"Dropdown__DropdownRow",componentId:"sc-2f0c6b6d-1"})`
  justify-content: space-between;
  padding: 8px;
  cursor: pointer;
  border-radius: 12px;

  &:hover {
    background: ${({theme:e})=>e.surface3};
  }
`,Ut=({dropDownOptions:e,width:t})=>{const n=(0,j.useTheme)();return(0,i.jsx)(Vt,{$width:t,children:e.map((e=>(0,i.jsxs)(Xt,{onClick:e.onClick,children:[(0,i.jsx)(_.Tv.BodyPrimary,{lineHeight:"24px",children:e.displayText}),e.isSelected&&(0,i.jsx)(st.Z,{height:20,width:20,color:n.accent1})]},e.displayText)))})};var Yt=n(95684),qt=n(43562),Jt=n(87175),Kt=n(68113),Qt=n(37246);const en=(0,j.default)(u.ZP).withConfig({displayName:"PriceTextInput__PriceTextInputWrapper",componentId:"sc-5ff07694-0"})`
  gap: 12px;
  position: relative;
`,tn=(0,j.default)(h.ZP).withConfig({displayName:"PriceTextInput__InputWrapper",componentId:"sc-5ff07694-1"})`
  height: 48px;
  color: ${({theme:e})=>e.neutral3};
  padding: 12px;
  border: 2px solid;
  border-radius: 8px;
  border-color: ${({borderColor:e})=>e};
  margin-right: auto;
  box-sizing: border-box;
`,nn=j.default.div.withConfig({displayName:"PriceTextInput__CurrencyWrapper",componentId:"sc-5ff07694-2"})`
  color: ${({listPrice:e,theme:t})=>e?t.neutral1:t.neutral2};
`,on=j.default.div.withConfig({displayName:"PriceTextInput__GlobalPriceIcon",componentId:"sc-5ff07694-3"})`
  display: flex;
  cursor: pointer;
  position: absolute;
  bottom: 32px;
  right: -10px;
  background-color: ${({theme:e})=>e.surface1};
  border-radius: 50%;
  height: 28px;
  width: 28px;
  align-items: center;
  justify-content: center;
`,sn=(0,j.default)(h.ZP).withConfig({displayName:"PriceTextInput__WarningRow",componentId:"sc-5ff07694-4"})`
  gap: 4px;
`,an=(0,j.default)(h.ZP).withConfig({displayName:"PriceTextInput__WarningMessage",componentId:"sc-5ff07694-5"})`
  top: 52px;
  width: max-content;
  position: absolute;
  right: 0;
  font-weight: 535;
  font-size: 10px;
  line-height: 12px;
  color: ${({$color:e})=>e};

  @media screen and (min-width: ${C.j$.md}px) {
    right: unset;
  }
`,rn=j.default.div.withConfig({displayName:"PriceTextInput__WarningAction",componentId:"sc-5ff07694-6"})`
  cursor: pointer;
  color: ${({theme:e})=>e.accent1};
`,ln=e=>{let t=(0,i.jsx)(i.Fragment,{});switch(e){case W.BELOW_FLOOR:t=(0,i.jsx)(c.cC,{children:"below floor price."});break;case W.ALREADY_LISTED:t=(0,i.jsx)(c.cC,{children:"Already listed at"})}return t},dn=({listPrice:e,setListPrice:t,isGlobalPrice:n,setGlobalOverride:o,globalOverride:s,asset:a})=>{var r;const{formatNumberOrString:l,formatDelta:d}=(0,I.Gb)(),[p,u]=(0,w.useState)(W.NONE),h=(0,L.Pc)((e=>e.removeSellAsset)),m=(0,L.Pc)((e=>e.showResolveIssues)),x=(0,w.useRef)(),f=(0,j.useTheme)(),g=100*(1-(e??0)/(a.floorPrice??0)),v=m&&!e||p===W.ALREADY_LISTED||p===W.BELOW_FLOOR&&g>=20?tt.O9.red400:p===W.BELOW_FLOOR?f.deprecated_accentWarning:n||e?f.accent1:f.neutral2;return function(e,t,n,i){var o;(0,w.useEffect)((()=>{var o;e(W.NONE);const s=i??0;t.current.value=`${s}`,s<((null===(o=n)||void 0===o?void 0:o.floorPrice)??0)&&s>0?e(W.BELOW_FLOOR):n.floor_sell_order_price&&s>=n.floor_sell_order_price&&n.asset_contract.tokenType!==xe.hgB.Erc1155&&e(W.ALREADY_LISTED)}),[n.asset_contract.tokenType,null===(o=n)||void 0===o?void 0:o.floorPrice,n.floor_sell_order_price,t,i,e])}(u,x,a,e),(0,i.jsxs)(en,{children:[(0,i.jsxs)(tn,{borderColor:v,children:[(0,i.jsx)(Jt.A,{as:"input",pattern:"[0-9]",borderStyle:"none",className:Kt.d1,color:{placeholder:"neutral2",default:"neutral1"},placeholder:"0",backgroundColor:"none",width:{sm:"54",md:"68"},ref:x,onChange:n=>{if(!e&&n.target.value.includes(".")&&0===parseFloat(n.target.value))return;const i=parseFloat(n.target.value);t(isNaN(i)?void 0:i)}}),(0,i.jsx)(nn,{listPrice:e,children:"\xa0ETH"}),(n||s)&&(0,i.jsx)(on,{onClick:()=>o(!s),children:s?(0,i.jsx)(Qe.We,{}):(0,i.jsx)(Qt.Z,{size:20,color:v})})]}),(0,i.jsx)(an,{$color:v,children:p!==W.NONE&&(0,i.jsxs)(sn,{children:[(0,i.jsx)(b.Z,{height:16,width:16,color:v}),(0,i.jsxs)("span",{children:[p===W.BELOW_FLOOR&&`${d(g)} `,ln(p),"\xa0",p===W.ALREADY_LISTED&&`${l({input:(null===(r=a)||void 0===r?void 0:r.floor_sell_order_price)??0,type:I.sw.NFTToken})} ETH`]}),(0,i.jsx)(rn,{onClick:()=>{p===W.ALREADY_LISTED&&h(a),u(W.NONE)},children:p===W.BELOW_FLOOR?(0,i.jsx)(c.cC,{children:"Dismiss"}):(0,i.jsx)(c.cC,{children:"Remove item"})})]})})]})},cn=(0,j.default)(h.ZP).withConfig({displayName:"RoyaltyTooltip__FeeWrap",componentId:"sc-237f4af-0"})`
  margin-bottom: 4px;
  justify-content: space-between;
`,pn=(0,j.default)(u.ZP).withConfig({displayName:"RoyaltyTooltip__RoyaltyContainer",componentId:"sc-237f4af-1"})`
  gap: 12px;
  padding: 4px 0px;
`,un=j.css`
  width: 16px;
  height: 16px;
  outline: 1px solid ${({theme:e})=>e.surface3};
  margin-right: 8px;
`,hn=j.default.div.withConfig({displayName:"RoyaltyTooltip__MarketIcon",componentId:"sc-237f4af-2"})`
  border-radius: 4px;
  ${un}
`,mn=j.default.img.withConfig({displayName:"RoyaltyTooltip__CollectionIcon",componentId:"sc-237f4af-3"})`
  object-fit: cover;
  border-radius: 50%;
  ${un}
`,xn=(0,j.default)(_.Tv.BodySmall).withConfig({displayName:"RoyaltyTooltip__FeePercent",componentId:"sc-237f4af-4"})`
  line-height: 16px;
  color: ${({theme:e})=>e.neutral2};
  white-space: nowrap;
`,fn=(0,j.default)(h.ZP).withConfig({displayName:"RoyaltyTooltip__MaxFeeContainer",componentId:"sc-237f4af-5"})`
  justify-content: space-between;
  padding-top: 12px;
  border-top: 1px solid ${({theme:e})=>e.surface3};
`,gn=({selectedMarkets:e,asset:t,fees:n})=>{var o;const{formatNumberOrString:s,formatDelta:a}=(0,I.Gb)(),r=Math.max(...e.map((e=>He(e,t)??0)));return(0,i.jsxs)(pn,{children:[e.map((e=>{var n;return(0,i.jsxs)(cn,{children:[(0,i.jsxs)(h.ZP,{children:[(0,i.jsx)(hn,{children:(0,ot.Dp)(e.name,"16")}),(0,i.jsxs)(_.Tv.BodySmall,{lineHeight:"16px",marginRight:"12px",children:[e.name,"\xa0",(0,i.jsx)(c.cC,{children:"fee"})]})]}),(0,i.jsx)(xn,{children:a(e.fee)})]},(null===(n=t.collection)||void 0===n?void 0:n.address)??""+t.tokenId+e.name+"fee")})),(0,i.jsxs)(cn,{children:[(0,i.jsxs)(h.ZP,{children:[(0,i.jsx)(mn,{src:null===(o=t.collection)||void 0===o?void 0:o.imageUrl}),(0,i.jsx)(_.Tv.BodySmall,{lineHeight:"16px",marginRight:"12px",children:(0,i.jsx)(c.cC,{children:"Max creator royalties"})})]}),(0,i.jsxs)(xn,{children:[r,"%"]})]}),(0,i.jsxs)(fn,{children:[(0,i.jsx)(_.Tv.BodySmall,{lineHeight:"16px",children:(0,i.jsx)(c.cC,{children:"Max fees"})}),(0,i.jsxs)(_.Tv.BodySmall,{lineHeight:"16px",color:n?"neutral1":"neutral2",children:[n?s({input:n,type:I.sw.NFTToken}):"-"," ETH"]})]})]})},vn=(0,j.default)(u.ZP).withConfig({displayName:"MarketplaceRow__LastPriceInfo",componentId:"sc-691ca3bd-0"})`
  text-align: left;
  display: none;
  flex: 1;

  @media screen and (min-width: ${C.j$.lg}px) {
    display: flex;
  }
`,wn=(0,j.default)(u.ZP).withConfig({displayName:"MarketplaceRow__FloorPriceInfo",componentId:"sc-691ca3bd-1"})`
  text-align: left;
  display: none;
  flex: 1;

  @media screen and (min-width: ${C.j$.md}px) {
    display: flex;
  }
`,yn=(0,j.default)(D).withConfig({displayName:"MarketplaceRow__RemoveMarketplaceWrap",componentId:"sc-691ca3bd-2"})`
  top: 8px;
  left: 16px;
  z-index: 3;
`,bn=(0,j.default)(h.ZP).withConfig({displayName:"MarketplaceRow__MarketIconsWrapper",componentId:"sc-691ca3bd-3"})`
  position: relative;
  margin-right: 12px;
  width: 44px;
  justify-content: flex-end;

  @media screen and (max-width: ${C.j$.sm}px) {
    display: none;
  }
`,jn=(0,j.default)(u.ZP).withConfig({displayName:"MarketplaceRow__MarketIconWrapper",componentId:"sc-691ca3bd-4"})`
  position: relative;
  cursor: pointer;
`,Cn=j.default.div.withConfig({displayName:"MarketplaceRow__MarketIcon",componentId:"sc-691ca3bd-5"})`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  z-index: ${({index:e})=>2-e};
  margin-left: ${({index:e})=>(0===e?0:-8)+"px"};
  outline: 1px solid ${({theme:e})=>e.surface3};
`,_n=j.default.div.withConfig({displayName:"MarketplaceRow__ExpandMarketIconWrapper",componentId:"sc-691ca3bd-6"})`
  cursor: pointer;
  margin-left: 4px;
  height: 28px;

  @media screen and (max-width: ${C.j$.sm}px) {
    display: none;
  }
`,Pn=(0,j.default)(u.ZP).withConfig({displayName:"MarketplaceRow__FeeColumnWrapper",componentId:"sc-691ca3bd-7"})`
  flex: 1;
  align-items: flex-end;
  display: none;

  @media screen and (min-width: ${C.j$.md}px) {
    display: flex;
  }
`,In=j.default.div.withConfig({displayName:"MarketplaceRow__FeeWrapper",componentId:"sc-691ca3bd-8"})`
  width: min-content;
  white-space: nowrap;
`,Sn=(0,j.default)(u.ZP).withConfig({displayName:"MarketplaceRow__ReturnColumn",componentId:"sc-691ca3bd-9"})`
  flex: 1.5;
  display: none;

  @media screen and (min-width: ${C.j$.md}px) {
    display: flex;
  }
`,Nn=({globalPriceMethod:e,globalPrice:t,setGlobalPrice:n,selectedMarkets:o,removeMarket:s,asset:a,expandMarketplaceRows:r,toggleExpandMarketplaceRows:l,rowHovered:d})=>{const{formatNumberOrString:p,formatDelta:u}=(0,I.Gb)(),m=(0,L.Pc)((e=>e.setAssetListPrice)),x=(0,L.Pc)((e=>e.removeAssetMarketplace)),[f,g]=(0,w.useReducer)((e=>!e),!1),[v,y]=(0,w.useReducer)((e=>!e),!1),[b,j]=(0,w.useState)((()=>{var e,t;return null===(t=a.newListings)||void 0===t||null===(e=t.find((e=>{var t;return r?e.marketplace.name===(null===(t=o)||void 0===t?void 0:t[0].name):!!e.price})))||void 0===e?void 0:e.price})),[C,P]=(0,w.useState)(!1),S=e===Z.SAME_PRICE&&!C,N=S?t:b,k=(0,w.useCallback)((e=>{S?n(e):j(e);for(const t of o)m(a,e,t)}),[a,o,m,n,S]),T=(0,w.useMemo)((()=>{let e=0;for(const t of o){const n=He(t,a)+t.fee;e=Math.max(n,e)}return e}),[a,o]),$=N&&N*T/100,R=N&&$&&N-$;return function(e,t,n,i,o){(0,w.useEffect)((()=>{let s;e?(i||t(o),s=o):s=i,n(s)}),[e])}(C,j,k,b,t),function(e,t,n,i,o,s,a){(0,w.useEffect)((()=>{var r;a===Z.FLOOR_PRICE?(t(null===(r=e)||void 0===r?void 0:r.floorPrice),n(e.floorPrice)):a===Z.LAST_PRICE?(t(e.lastPrice),n(e.lastPrice)):a===Z.SAME_PRICE&&(o&&!s?n(o):t(s)),i(!1)}),[a])}(a,j,n,P,b,t,e),(0,w.useEffect)((()=>{S&&k(t)}),[t]),(0,i.jsxs)(h.ZP,{onMouseEnter:y,onMouseLeave:y,children:[(0,i.jsx)(wn,{children:(0,i.jsx)(_.Tv.BodyPrimary,{color:"neutral2",lineHeight:"24px",children:p({input:a.floorPrice,type:I.sw.NFTToken})+a.floorPrice?" ETH":""})}),(0,i.jsx)(vn,{children:(0,i.jsx)(_.Tv.BodyPrimary,{color:"neutral2",lineHeight:"24px",children:a.lastPrice?`${p({input:a.lastPrice,type:I.sw.NFTToken})} ETH`:"-"})}),(0,i.jsxs)(h.ZP,{flex:"2",children:[(r||o.length>1)&&(0,i.jsx)(bn,{onMouseEnter:g,onMouseLeave:g,children:o.map(((e,t)=>{var n;return(0,i.jsxs)(jn,{onClick:t=>{t.stopPropagation(),x(a,e),s&&s()},children:[(0,i.jsx)(Cn,{index:t,children:(0,ot.Dp)(e.name,"20")}),(0,i.jsx)(yn,{hovered:f&&(r??!1),children:(0,i.jsx)("img",{width:"20px",src:"/nft/svgs/minusCircle.svg",alt:"Remove item"})})]},e.name+(null===(n=a.collection)||void 0===n?void 0:n.address)+a.tokenId)}))}),(0,i.jsx)(dn,{listPrice:N,setListPrice:k,isGlobalPrice:S,setGlobalOverride:P,globalOverride:C,asset:a}),d&&(r&&v||o.length>1)&&(0,i.jsx)(_n,{onClick:l,children:r?(0,i.jsx)(Qe.fJ,{}):(0,i.jsx)(Qe.nG,{})})]}),(0,i.jsx)(Pn,{children:(0,i.jsx)(Ke.ud,{text:(0,i.jsx)(gn,{selectedMarkets:o,asset:a,fees:$}),placement:"left",children:(0,i.jsx)(In,{children:(0,i.jsx)(_.Tv.BodyPrimary,{color:"neutral2",children:T>0?`${u(T)}${o.length>1?c.t`max`:""}`:"--%"})})})}),(0,i.jsx)(Sn,{children:(0,i.jsx)(kn,{ethPrice:R})})]})},kn=({ethPrice:e=0})=>{const{formatNumberOrString:t}=(0,I.Gb)(),n=(0,qt.$)();return(0,i.jsx)(h.ZP,{width:"100%",justify:"flex-end",children:(0,i.jsx)(_.Tv.BodyPrimary,{lineHeight:"24px",color:e?"neutral1":"neutral2",textAlign:"right",children:0!==e?(0,i.jsxs)(u.ZP,{children:[(0,i.jsxs)("span",{children:[t({input:e,type:I.sw.NFTToken})," ETH"]}),(0,i.jsx)(_.Tv.BodyPrimary,{color:"neutral2",children:t({input:e*n,type:I.sw.FiatNFTToken})})]}):"- ETH"})})},Tn=(0,j.default)(h.ZP).withConfig({displayName:"NFTListRow__NFTListRowWrapper",componentId:"sc-18902c6d-0"})`
  padding: 24px 0px;
  align-items: center;
  border-radius: 8px;

  &:hover {
    background: ${({theme:e})=>e.surface3};
  }
`,$n=j.default.div.withConfig({displayName:"NFTListRow__RemoveIconContainer",componentId:"sc-18902c6d-1"})`
  width: ${60}px;
  height: ${60}px;
  padding-left: 12px;
  align-self: flex-start;
  align-items: center;
  display: flex;

  @media screen and (max-width: ${C.j$.sm}px) {
    display: none;
  }

  &:hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,Rn=(0,j.default)(h.ZP).withConfig({displayName:"NFTListRow__NFTInfoWrapper",componentId:"sc-18902c6d-2"})`
  align-items: center;
  min-width: 0px;
  flex: 2;
  margin-bottom: auto;

  @media screen and (min-width: ${C.j$.md}px) {
    flex: 1.5;
  }
`,En=j.default.img.withConfig({displayName:"NFTListRow__NFTImage",componentId:"sc-18902c6d-3"})`
  width: ${60}px;
  height: ${60}px;
  border-radius: 8px;
  margin-right: 8px;
`,Ln=j.css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Fn=(0,j.default)(u.ZP).withConfig({displayName:"NFTListRow__TokenInfoWrapper",componentId:"sc-18902c6d-4"})`
  margin-right: 8px;
  min-width: 0px;
`,Mn=j.default.div.withConfig({displayName:"NFTListRow__TokenName",componentId:"sc-18902c6d-5"})`
  font-weight: 535;
  font-size: 16px;
  line-height: 24px;
  ${Ln}
`,An=(0,j.default)(_.Tv.BodySmall).withConfig({displayName:"NFTListRow__CollectionName",componentId:"sc-18902c6d-6"})`
  color: ${({theme:e})=>e.neutral2};
  line-height: 20px;
  ${Ln};
`,On=(0,j.default)(u.ZP).withConfig({displayName:"NFTListRow__MarketPlaceRowWrapper",componentId:"sc-18902c6d-7"})`
  gap: 24px;
  flex: 1.5;
  margin-right: 12px;
  padding: 6px 0px;

  @media screen and (min-width: ${C.j$.md}px) {
    flex: 2;
  }

  @media screen and (min-width: ${C.j$.md}px) {
    flex: 3;
  }
`,Dn=({asset:e,globalPriceMethod:t,globalPrice:n,setGlobalPrice:o,selectedMarkets:s})=>{var a;const[r,l]=(0,w.useReducer)((e=>!e),!1),d=(0,L.Pc)((e=>e.removeSellAsset)),[c,p]=(0,w.useState)([]),[u,h]=(0,w.useReducer)((e=>!e),!1),m=(0,j.useTheme)();return(0,w.useEffect)((()=>{p(JSON.parse(JSON.stringify(s)))}),[s]),(0,i.jsxs)(Tn,{onMouseEnter:()=>{!u&&h()},onMouseLeave:()=>{u&&h()},children:[(0,i.jsx)($n,{children:u&&(0,i.jsx)(Yt.Z,{size:20,color:m.neutral2,cursor:"pointer",onClick:()=>{d(e)}})}),(0,i.jsxs)(Rn,{children:[(0,i.jsx)(En,{alt:e.name,src:e.imageUrl||"/nft/svgs/image-placeholder.svg"}),(0,i.jsxs)(Fn,{children:[(0,i.jsx)(Mn,{children:e.name?e.name:`#${e.tokenId}`}),(0,i.jsxs)(An,{children:[null===(a=e.collection)||void 0===a?void 0:a.name,e.collectionIsVerified&&(0,i.jsx)(Qe.SA,{style:{marginBottom:"-5px"}})]})]})]}),(0,i.jsx)(On,{children:r&&c.length>1?c.map((s=>(0,i.jsx)(Nn,{globalPriceMethod:t,globalPrice:n,setGlobalPrice:o,selectedMarkets:[s],removeMarket:()=>p(c.filter((e=>e.name!==s.name))),asset:e,expandMarketplaceRows:r,rowHovered:u,toggleExpandMarketplaceRows:l},e.name+s.name))):(0,i.jsx)(Nn,{globalPriceMethod:t,globalPrice:n,setGlobalPrice:o,selectedMarkets:c,asset:e,rowHovered:u,toggleExpandMarketplaceRows:l})})]})},Bn=j.default.div.withConfig({displayName:"NFTListingsGrid__TableHeader",componentId:"sc-9c60707-0"})`
  display: flex;
  position: sticky;
  align-items: center;
  top: 72px;
  padding-top: 24px;
  padding-bottom: 24px;
  z-index: 3;
  background-color: ${({theme:e})=>e.surface2};
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  border-radius: 12px;

  @media screen and (min-width: ${C.j$.sm}px) {
    padding-left: 48px;
  }
`,Zn=j.default.div.withConfig({displayName:"NFTListingsGrid__NFTHeader",componentId:"sc-9c60707-1"})`
  flex: 2;

  @media screen and (min-width: ${C.j$.md}px) {
    flex: 1.5;
  }
`,Wn=(0,j.default)(h.ZP).withConfig({displayName:"NFTListingsGrid__PriceHeaders",componentId:"sc-9c60707-2"})`
  flex: 1.5;
  margin-right: 12px;

  @media screen and (min-width: ${C.j$.md}px) {
    flex: 3;
  }
`,Gn=j.default.div.withConfig({displayName:"NFTListingsGrid__LastPriceHeader",componentId:"sc-9c60707-3"})`
  display: none;
  flex: 1;

  @media screen and (min-width: ${C.j$.lg}px) {
    display: flex;
  }
`,Hn=j.default.div.withConfig({displayName:"NFTListingsGrid__FloorPriceHeader",componentId:"sc-9c60707-4"})`
  display: none;
  flex: 1;

  @media screen and (min-width: ${C.j$.md}px) {
    display: flex;
  }
`,zn=(0,j.default)(h.ZP).withConfig({displayName:"NFTListingsGrid__DropdownAndHeaderWrapper",componentId:"sc-9c60707-5"})`
  flex: 2;
  gap: 4px;
`,Vn=(0,j.default)(u.ZP).withConfig({displayName:"NFTListingsGrid__DropdownPromptContainer",componentId:"sc-9c60707-6"})`
  position: relative;
  @media screen and (max-width: ${C.j$.sm}px) {
    display: none;
  }
`,Xn=(0,j.default)(h.ZP).withConfig({displayName:"NFTListingsGrid__DropdownPrompt",componentId:"sc-9c60707-7"})`
  gap: 4px;
  background-color: ${({theme:e})=>e.surface3};
  cursor: pointer;
  font-weight: 535;
  font-size: 12px;
  line-height: 16px;
  border-radius: 4px;
  padding: 2px 6px;
  width: min-content;
  white-space: nowrap;
  color: ${({theme:e})=>e.neutral1};

  &:hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,Un=(0,j.default)(zt.Z).withConfig({displayName:"NFTListingsGrid__DropdownChevron",componentId:"sc-9c60707-8"})`
  height: 16px;
  width: 16px;
  color: ${({theme:e})=>e.neutral2};
  transform: ${({isOpen:e})=>e&&"rotate(180deg)"};
  transition: ${({theme:{transition:{duration:e,timing:t}}})=>`transform ${e.fast} ${t.ease}`};
`,Yn=j.default.div.withConfig({displayName:"NFTListingsGrid__DropdownContainer",componentId:"sc-9c60707-9"})`
  position: absolute;
  top: 36px;
  right: 0px;
`,qn=j.css`
  display: none;
  justify-content: flex-end;
  @media screen and (min-width: ${C.j$.md}px) {
    display: flex;
  }
`,Jn=j.default.div.withConfig({displayName:"NFTListingsGrid__FeeHeader",componentId:"sc-9c60707-10"})`
  flex: 1;
  ${qn}
`,Kn=j.default.div.withConfig({displayName:"NFTListingsGrid__UserReceivesHeader",componentId:"sc-9c60707-11"})`
  flex: 1.5;
  ${qn}
`,Qn=j.default.hr.withConfig({displayName:"NFTListingsGrid__RowDivider",componentId:"sc-9c60707-12"})`
  height: 0px;
  width: 100%;
  border-radius: 20px;
  border-width: 0.5px;
  border-style: solid;
  margin: 0;
  border-color: ${({theme:e})=>e.surface3};
`,ei=({selectedMarkets:e})=>{const t=(0,L.Pc)((e=>e.sellAssets)),[n,o]=(0,w.useState)(Z.CUSTOM),[s,a]=(0,w.useState)(),[r,l]=(0,w.useReducer)((e=>!e),!1),d=(0,w.useRef)(null);(0,Ht.t)(d,r?l:void 0);const p=(0,w.useMemo)((()=>[{displayText:"Custom",isSelected:n===Z.CUSTOM,onClick:()=>{o(Z.CUSTOM),l()}},{displayText:"Floor price",isSelected:n===Z.FLOOR_PRICE,onClick:()=>{o(Z.FLOOR_PRICE),l()}},{displayText:"Last price",isSelected:n===Z.LAST_PRICE,onClick:()=>{o(Z.LAST_PRICE),l()}},{displayText:"Same price",isSelected:n===Z.SAME_PRICE,onClick:()=>{o(Z.SAME_PRICE),l()}}]),[n]);let h;switch(n){case Z.CUSTOM:h=(0,i.jsx)(c.cC,{children:"Custom"});break;case Z.FLOOR_PRICE:h=(0,i.jsx)(c.cC,{children:"Floor price"});break;case Z.LAST_PRICE:h=(0,i.jsx)(c.cC,{children:"Last price"});break;case Z.SAME_PRICE:h=(0,i.jsx)(c.cC,{children:"Same price"})}return(0,i.jsxs)(u.ZP,{children:[(0,i.jsxs)(Bn,{children:[(0,i.jsx)(Zn,{children:(0,i.jsx)(c.cC,{children:"NFT"})}),(0,i.jsxs)(Wn,{children:[(0,i.jsx)(Hn,{children:(0,i.jsx)(c.cC,{children:"Floor"})}),(0,i.jsx)(Gn,{children:(0,i.jsx)(c.cC,{children:"Last"})}),(0,i.jsxs)(zn,{ref:d,children:[(0,i.jsx)(c.cC,{children:"Price"}),(0,i.jsxs)(Vn,{children:[(0,i.jsxs)(Xn,{onClick:l,children:[h," ",(0,i.jsx)(Un,{isOpen:r})]}),r&&(0,i.jsx)(Yn,{children:(0,i.jsx)(Ut,{dropDownOptions:p,width:200})})]})]}),(0,i.jsx)(Jn,{children:(0,i.jsx)(c.cC,{children:"Fees"})}),(0,i.jsx)(Kn,{children:(0,i.jsx)(c.cC,{children:"You receive"})})]})]}),t.map((o=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Dn,{asset:o,globalPriceMethod:n,globalPrice:s,setGlobalPrice:a,selectedMarkets:e}),t.indexOf(o)<t.length-1&&(0,i.jsx)(Qn,{})]})))]})};var ti=n(90090),ni=n(15288),ii=n(4256),oi=n(27389);const si=(0,j.default)(ni.X2).withConfig({displayName:"SelectMarketplacesDropdown__MarketplaceRowWrapper",componentId:"sc-45ca7e4-0"})`
  gap: 6px;
  height: 44px;
  width: 100%;
  cursor: pointer;
  justify-content: space-between;
  padding: 0px 16px;
  &:hover {
    background-color: ${({theme:e})=>e.surface3};
  }
  border-radius: 12px;
`,ai=j.default.div.withConfig({displayName:"SelectMarketplacesDropdown__FeeText",componentId:"sc-45ca7e4-1"})`
  color: ${({theme:e})=>e.neutral2};
`,ri=(0,j.default)(ni.X2).withConfig({displayName:"SelectMarketplacesDropdown__HeaderButtonWrap",componentId:"sc-45ca7e4-2"})`
  padding: 12px;
  border-radius: 12px;
  width: 180px;
  justify-content: space-between;
  background: ${({theme:e})=>e.surface3};
  cursor: pointer;
  &:hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
  @media screen and (min-width: ${ti.T1}) {
    width: 220px;
  }
`,li=j.default.div.withConfig({displayName:"SelectMarketplacesDropdown__HeaderButtonContentWrapper",componentId:"sc-45ca7e4-3"})`
  display: flex;
`,di=j.default.div.withConfig({displayName:"SelectMarketplacesDropdown__MarketIcon",componentId:"sc-45ca7e4-4"})`
  height: 20px;
  width: 20px;
  margin-right: 8px;
  outline: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 4px;
  z-index: ${({index:e,totalSelected:t})=>t-e};
  margin-left: ${({index:e})=>(0===e?0:-18)+"px"};
`,ci=(0,j.default)(Qe.g8).withConfig({displayName:"SelectMarketplacesDropdown__Chevron",componentId:"sc-45ca7e4-5"})`
  height: 20px;
  width: 20px;
  fill: ${({theme:e})=>e.neutral1};
  transition: ${({theme:{transition:{duration:e}}})=>`${e.fast} transform`};
  transform: ${({isOpen:e})=>`rotate(${e?0:180}deg)`};
`,pi=j.default.div.withConfig({displayName:"SelectMarketplacesDropdown__ModalWrapper",componentId:"sc-45ca7e4-6"})`
  display: flex;
  flex-direction: column;
  position: relative;
`,ui=(0,j.default)(ni.sg).withConfig({displayName:"SelectMarketplacesDropdown__DropdownWrapper",componentId:"sc-45ca7e4-7"})`
  padding: 16px 0px;
  background-color: ${({theme:e})=>e.surface1};
  display: ${({isOpen:e})=>e?"flex":"none"};
  position: absolute;
  top: 52px;
  width: 100%;
  border-radius: 12px;
  gap: 12px;
  z-index: ${P.k.modalBackdrop};
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  border: 0.5px solid ${({theme:e})=>e.surface3};
`,hi=({setSelectedMarkets:e,selectedMarkets:t})=>{const[n,o]=(0,w.useReducer)((e=>!e),!1),s=(0,w.useMemo)((()=>1===t.length?t[0].name:"Multiple"),[t]),a=(0,w.useRef)(null);return(0,Ht.t)(a,(()=>n&&o())),(0,i.jsxs)(pi,{ref:a,children:[(0,i.jsxs)(ri,{className:Kt.km,onClick:o,children:[(0,i.jsxs)(li,{children:[t.map(((e,n)=>(0,i.jsx)(di,{totalSelected:t.length,index:n,children:(0,ot.Dp)(e.name,"20")},n))),s]}),(0,i.jsx)(ci,{isOpen:n,secondaryColor:oi.Z4.colors.neutral1})]}),(0,i.jsx)(ui,{isOpen:n,children:$e.map((n=>(({market:e,setSelectedMarkets:t,selectedMarkets:n})=>{const o=n.includes(e),[s,a]=(0,w.useReducer)((e=>!e),!1),r=()=>{1===n.length&&o||t(o?n.filter((t=>t!==e)):[...n,e])};return(0,i.jsxs)(si,{onMouseEnter:a,onMouseLeave:a,onClick:r,children:[(0,i.jsxs)(ni.X2,{gap:"12",onClick:r,children:[(0,ot.Dp)(e.name,"24"),(0,i.jsxs)(ni.sg,{children:[(0,i.jsx)(_.Tv.BodyPrimary,{children:e.name}),(0,i.jsxs)(ai,{className:Kt.VJ,children:[e.fee,"% fee"]})]})]}),(0,i.jsx)(ii.X,{hovered:s,checked:o,onClick:e=>{e.preventDefault(),e.stopPropagation()},children:(0,i.jsx)("span",{})})]})})({market:n,setSelectedMarkets:e,selectedMarkets:t})))})]})},mi=(0,j.default)(ni.sg).withConfig({displayName:"SetDurationModal__ModalWrapper",componentId:"sc-89e097db-0"})`
  gap: 4px;
  position: relative;
`,xi=(0,j.default)(ni.X2).withConfig({displayName:"SetDurationModal__InputWrapper",componentId:"sc-89e097db-1"})`
  padding: 6px 6px 6px 12px;
  border: 1px solid;
  position: relative;
  height: 44px;
  border-radius: 8px;
  border-color: ${({isInvalid:e,theme:t})=>e?t.critical:t.surface3};
  width: 160px;
  justify-content: space-between;
`,fi=(0,j.default)(ni.X2).withConfig({displayName:"SetDurationModal__DropdownPrompt",componentId:"sc-89e097db-2"})`
  gap: 4px;
  background-color: ${({theme:e})=>e.surface3};
  cursor: pointer;
  font-weight: 535;
  font-size: 14px;
  line-height: 16px;
  border-radius: 8px;
  padding: 6px 4px 6px 8px;
  white-space: nowrap;
  color: ${({theme:e})=>e.neutral1};

  &:hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,gi=(0,j.default)(zt.Z).withConfig({displayName:"SetDurationModal__DropdownChevron",componentId:"sc-89e097db-3"})`
  height: 20px;
  width: 20px;
  color: ${({theme:e})=>e.neutral2};
  transform: ${({isOpen:e})=>e&&"rotate(180deg)"};
  transition: ${({theme:{transition:{duration:e,timing:t}}})=>`transform ${e.fast} ${t.ease}`};
`,vi=j.default.div.withConfig({displayName:"SetDurationModal__DropdownContainer",componentId:"sc-89e097db-4"})`
  position: absolute;
  top: 48px;
  right: 0px;
  z-index: ${P.k.dropdown};
`,wi=(0,j.default)(ni.X2).withConfig({displayName:"SetDurationModal__ErrorMessage",componentId:"sc-89e097db-5"})`
  color: ${({theme:e})=>e.critical};
  gap: 4px;
  position: absolute;
  top: 44px;
  white-space: nowrap;
`,yi=(0,j.default)(b.Z).withConfig({displayName:"SetDurationModal__WarningIcon",componentId:"sc-89e097db-6"})`
  width: 16px;
  color: ${({theme:e})=>e.critical};
`;var bi,ji;!function(e){e.hour="hour",e.day="day",e.week="week",e.month="month"}(bi||(bi={})),function(e){e[e.valid=0]="valid",e[e.empty=1]="empty",e[e.overMax=2]="overMax"}(ji||(ji={}));const Ci=()=>{const[e,t]=(0,w.useState)(bi.day),[n,o]=(0,w.useState)("7"),[s,a]=(0,w.useState)(ji.valid),r=(0,L.Pc)((e=>e.setGlobalExpiration)),[l,d]=(0,w.useReducer)((e=>!e),!1),p=(0,w.useRef)(null);(0,Ht.t)(p,l?d:void 0);const u=(0,w.useMemo)((()=>[{displayText:"hours",isSelected:e===bi.hour,onClick:()=>{t(bi.hour),d()}},{displayText:"days",isSelected:e===bi.day,onClick:()=>{t(bi.day),d()}},{displayText:"weeks",isSelected:e===bi.week,onClick:()=>{t(bi.week),d()}},{displayText:"months",isSelected:e===bi.month,onClick:()=>{t(bi.month),d()}}]),[e]);let h;switch(e){case bi.hour:h=(0,i.jsx)(c.CN,{value:+n,one:c.t`hour`,other:c.t`hours`});break;case bi.day:h=(0,i.jsx)(c.CN,{value:+n,one:c.t`day`,other:c.t`days`});break;case bi.week:h=(0,i.jsx)(c.CN,{value:+n,one:c.t`week`,other:c.t`weeks`});break;case bi.month:h=(0,i.jsx)(c.CN,{value:+n,one:c.t`month`,other:c.t`months`})}return(0,w.useEffect)((()=>{const t=_i(parseFloat(n),e);1e3*t-Date.now()<O()("60s")||isNaN(t)?a(ji.empty):1e3*t-Date.now()>O()("180d")?a(ji.overMax):a(ji.valid),r(t)}),[n,e,r]),(0,i.jsxs)(mi,{ref:p,children:[(0,i.jsxs)(xi,{isInvalid:s!==ji.valid,children:[(0,i.jsx)(Jt.A,{as:"input",type:"number",pattern:"[0-9]",borderStyle:"none",className:Kt.d1,color:{placeholder:"neutral2",default:"neutral1"},value:n,width:"40",marginRight:"4",backgroundColor:"none",onChange:e=>{o(e.target.value.length?e.target.value:"")},flexShrink:"0"}),(0,i.jsxs)(fi,{onClick:d,children:[h," ",(0,i.jsx)(gi,{isOpen:l})]}),l&&(0,i.jsx)(vi,{children:(0,i.jsx)(Ut,{dropDownOptions:u,width:125})})]}),s!==ji.valid&&(0,i.jsxs)(wi,{className:Kt.VJ,children:[" ",(0,i.jsx)(yi,{})," ",s===ji.overMax?"Maximum 6 months":"Set duration"]})]})},_i=(e,t)=>Math.round((Date.now()+O()("1h")*(()=>{switch(t){case bi.hour:return 1;case bi.day:return 24;case bi.week:return 168;default:return 720}})()*e)/1e3);function Pi(e,t,n,i,o,s,a){try{var r=e[s](a),l=r.value}catch(d){return void n(d)}r.done?t(l):Promise.resolve(l).then(i,o)}const Ii=(0,j.default)(u.ZP).withConfig({displayName:"ListPage__ListingHeader",componentId:"sc-9e8b1cc2-0"})`
  gap: 16px;
  margin-top: 36px;

  @media screen and (min-width: ${C.j$.xs}px) {
    gap: 4px;
  }
`,Si=j.default.div.withConfig({displayName:"ListPage__ArrowContainer",componentId:"sc-9e8b1cc2-1"})`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;

  @media screen and (min-width: ${C.j$.sm}px) {
    height: 40px;
    width: 40px;
  }
`,Ni=(0,j.default)(Xe.Z).withConfig({displayName:"ListPage__BackArrow",componentId:"sc-9e8b1cc2-2"})`
  height: 16px;
  width: 16px;
  cursor: pointer;
  color: ${({theme:e})=>e.neutral2};

  @media screen and (min-width: ${C.j$.sm}px) {
    height: 20px;
    width: 20px;
  }
`,ki=(0,j.default)(h.ZP).withConfig({displayName:"ListPage__TitleWrapper",componentId:"sc-9e8b1cc2-3"})`
  gap: 4px;
  margin-bottom: 12px;
  white-space: nowrap;
  width: min-content;
  font-weight: 535;
  font-size: 20px;
  line-height: 28px;

  @media screen and (min-width: ${C.j$.xs}px) {
    margin-bottom: 0px;
    font-weight: 535;
    font-size: 28px;
    line-height: 36px;
  }
`,Ti=(0,j.default)(h.ZP).withConfig({displayName:"ListPage__ButtonsWrapper",componentId:"sc-9e8b1cc2-4"})`
  gap: 12px;
  width: min-content;
`,$i=j.default.section.withConfig({displayName:"ListPage__MarketWrap",componentId:"sc-9e8b1cc2-5"})`
  gap: 48px;
  margin: 0px auto;
  width: 100%;
  max-width: 1200px;
`,Ri=(0,j.default)(h.ZP).withConfig({displayName:"ListPage__ListingHeaderRow",componentId:"sc-9e8b1cc2-6"})`
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (min-width: ${C.j$.sm}px) {
    padding-left: 40px;
  }
`,Ei=j.default.div.withConfig({displayName:"ListPage__GridWrapper",componentId:"sc-9e8b1cc2-7"})`
  margin-top: 24px;
  margin-bottom: 48px;
`,Li=(0,j.default)(h.ZP).withConfig({displayName:"ListPage__FloatingConfirmationBar",componentId:"sc-9e8b1cc2-8"})`
  padding: 12px 12px 12px 32px;
  border: 1px solid;
  border-color: ${({theme:e,issues:t})=>t?e.surface3:e.accent1};
  border-radius: 20px;
  white-space: nowrap;
  justify-content: space-between;
  background: ${({theme:e})=>e.surface1};
  position: fixed;
  bottom: 32px;
  width: calc(100vw - ${80}px);
  left: 50%;
  transform: translateX(-50%);
  max-width: ${({theme:e})=>e.maxWidth};
  z-index: ${P.k.under_dropdown};
  box-shadow: ${({theme:e})=>e.deprecated_shallowShadow};

  @media screen and (max-width: ${C.j$.lg}px) {
    bottom: 68px;
  }

  @media screen and (max-width: ${C.j$.sm}px) {
    width: calc(100% - ${32}px);
    padding: 8px 8px 8px 16px;
  }
`,Fi=j.default.div.withConfig({displayName:"ListPage__Overlay",componentId:"sc-9e8b1cc2-9"})`
  position: fixed;
  bottom: 0px;
  left: 0px;
  height: 158px;
  width: 100vw;
  background: ${({theme:e})=>`linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, ${e.surface2} 100%)`};
`,Mi=(0,j.default)(_.Tv.SubHeader).withConfig({displayName:"ListPage__UsdValue",componentId:"sc-9e8b1cc2-10"})`
  line-height: 24px;
  color: ${({theme:e})=>e.neutral2};
  display: none;

  @media screen and (min-width: ${C.j$.lg}px) {
    display: flex;
  }
`,Ai=(0,j.default)(h.ZP).withConfig({displayName:"ListPage__ProceedsAndButtonWrapper",componentId:"sc-9e8b1cc2-11"})`
  width: min-content;
  gap: 40px;

  @media screen and (max-width: ${C.j$.sm}px) {
    gap: 20px;
  }
`,Oi=(0,j.default)(h.ZP).withConfig({displayName:"ListPage__ProceedsWrapper",componentId:"sc-9e8b1cc2-12"})`
  width: min-content;
  gap: 16px;
`,Di=j.default.span.withConfig({displayName:"ListPage__EthValueWrapper",componentId:"sc-9e8b1cc2-13"})`
  font-weight: 535;
  font-size: 20px;
  line-height: 28px;
  color: ${({theme:e,totalEthListingValue:t})=>t?e.neutral1:e.neutral2};

  @media screen and (max-width: ${C.j$.sm}px) {
    font-size: 16px;
    line-height: 24px;
  }
`,Bi=()=>{const{formatNumberOrString:e}=(0,I.Gb)(),{setProfilePageState:t}=(0,L.aO)(),n=(0,Ye.m)(),s=(0,Ue.z)(),r=(0,F.dD)(),l=(0,a.oO)({modal:o.KO.NFT_LISTING}),{formatCurrencyAmount:d}=(0,I.Gb)(),{setGlobalMarketplaces:p,sellAssets:g,issues:v}=(0,L.Pc)((({setGlobalMarketplaces:e,sellAssets:t,issues:n})=>({setGlobalMarketplaces:e,sellAssets:t,issues:n}))),{listings:y,collectionsRequiringApproval:b,setCollectionStatusAndCallback:j}=(0,L.zM)((({listings:e,collectionsRequiringApproval:t,setCollectionStatusAndCallback:n})=>({listings:e,collectionsRequiringApproval:t,setCollectionStatusAndCallback:n}))),C=(0,w.useMemo)((()=>We(g)),[g]),P=(0,x.Z)(n.chainId),S=(0,f.Z)(C.toString(),P),N=(0,m.sq)(S),k=d({amount:N,type:I.sw.FiatTokenPrice}),[T,$]=(0,w.useReducer)((e=>!e),!1),[R,E]=(0,w.useState)([$e[0]]);Ge(),(0,w.useEffect)((()=>{p(R)}),[R,p]);const M={collection_addresses:g.map((e=>e.asset_contract.address)),token_ids:g.map((e=>e.tokenId)),marketplaces:Array.from(new Set(y.map((e=>e.marketplace.name)))),list_quantity:y.length,usd_value:k,...l},A=function(){var e,t=(e=function*(){if(s){(0,a._P)(o.Yz.NFT_SELL_START_LISTING,{...M});for(const t of b)(e=t.status)!==ne.Sb.PAUSED&&e!==ne.Sb.APPROVED&&(r?yield Oe(t,s,j):Oe(t,s,j));var e}},function(){var t=this,n=arguments;return new Promise((function(i,o){var s=e.apply(t,n);function a(e){Pi(s,i,o,a,r,"next",e)}function r(e){Pi(s,i,o,a,r,"throw",e)}a(void 0)}))});return function(){return t.apply(this,arguments)}}(),O=r?(0,i.jsx)(_.Tv.SubHeader,{children:(0,i.jsx)(c.cC,{children:"Receive"})}):(0,i.jsx)(_.Tv.HeadlineSmall,{lineHeight:"28px",children:(0,i.jsx)(c.cC,{children:"You receive"})});return(0,i.jsxs)(u.ZP,{children:[(0,i.jsxs)($i,{children:[(0,i.jsxs)(Ii,{children:[(0,i.jsxs)(h.ZP,{children:[(0,i.jsx)(Si,{children:(0,i.jsx)(Ni,{onClick:()=>t(ne.HA.VIEWING)})}),(0,i.jsx)(_.Tv.BodySmall,{lineHeight:"20px",color:"neutral2",children:(0,i.jsx)(c.cC,{children:"My NFTs"})})]}),(0,i.jsxs)(Ri,{children:[(0,i.jsx)(ki,{children:(0,i.jsx)(c.cC,{children:"Sell NFTs"})}),(0,i.jsxs)(Ti,{children:[(0,i.jsx)(hi,{setSelectedMarkets:E,selectedMarkets:R}),(0,i.jsx)(Ci,{})]})]})]}),(0,i.jsx)(Ei,{children:(0,i.jsx)(ei,{selectedMarkets:R})})]}),(0,i.jsxs)(Li,{issues:!!v,children:[O,(0,i.jsxs)(Ai,{children:[(0,i.jsxs)(Oi,{children:[(0,i.jsxs)(Di,{totalEthListingValue:!!C,children:[C>0?e({input:C,type:I.sw.NFTToken}):"-"," ","ETH"]}),!!N&&(0,i.jsx)(Mi,{children:k})]}),(0,i.jsx)(Ve,{onClick:()=>{$(),A()}})]})]}),(0,i.jsx)(Fi,{}),T&&(0,i.jsx)(Gt,{overlayClick:$})]})};var Zi=n(44952),Wi=n(3805),Gi=n(71291),Hi=n(34385),zi=n(48714),Vi=n(52873),Xi=n(82743),Ui=(n(57995),n(76907)),Yi=n(1285),qi=n(43328),Ji=n(84820),Ki=n(15511);n(49484);const Qi=(0,j.default)(ni.sg).withConfig({displayName:"FilterSidebar__ItemsContainer",componentId:"sc-436ea750-0"})`
  ${Je.Zl}
  height: 100vh;
`,eo=(0,j.default)(Xi.X).withConfig({displayName:"FilterSidebar__LongLoadingBubble",componentId:"sc-436ea750-1"})`
  min-height: 15px;
  width: 75%;
`,to=(0,j.default)(Xi.X).withConfig({displayName:"FilterSidebar__SmallLoadingBubble",componentId:"sc-436ea750-2"})`
  height: 20px;
  width: 20px;
  margin-right: 8px;
`,no=(0,j.default)(ni.X2).withConfig({displayName:"FilterSidebar__MobileMenuHeader",componentId:"sc-436ea750-3"})`
  justify-content: space-between;
  padding-bottom: 8px;
`,io=({style:e})=>(0,i.jsxs)(ni.X2,{display:"flex",justifyContent:"space-between",style:e,paddingLeft:"12",paddingRight:"16",children:[(0,i.jsxs)(ni.X2,{display:"flex",flex:"1",children:[(0,i.jsx)(to,{}),(0,i.jsx)(eo,{})]}),(0,i.jsx)(Wi.n,{as:"span",borderColor:"surface3",className:"rgw6ez453 rgw6ezq9 rgw6ez80l rgw6ez19f rgw6ez12f rgw6ez7zp rgw6ez89d","aria-hidden":"true"})]}),oo=({fetchNextPage:e,hasNextPage:t,isFetchingNextPage:n,walletCollections:o})=>{const s=(0,L.Pr)((e=>e.collectionFilters)),a=(0,L.Pr)((e=>e.setCollectionFilters)),[r,l]=(0,L.wx)(),d=(0,F.dD)(),{sidebarX:c}=(0,Ui.q_)({sidebarX:r?0:-360,config:{duration:nt.Kd.medium,easing:Ui.Z5.easeOutSine}}),p=(0,w.useMemo)((()=>{var e;return o&&(null===(e=o)||void 0===e?void 0:e.length)>=Ao||n}),[o,n]);return(0,i.jsx)(Wi.x,{position:{sm:"fixed",md:"sticky"},top:{sm:"0",md:"72"},left:{sm:"0",md:"unset"},width:{sm:"full",md:"332",lg:"332"},height:{sm:"full",md:"auto"},zIndex:{sm:"modal",md:"auto"},display:r?"flex":"none",style:{transform:d?void 0:c.to((e=>`translateX(${e}px)`))},background:"surface2",children:(0,i.jsxs)(Wi.n,{paddingTop:{sm:"24",md:"0"},paddingLeft:{sm:"16",md:"0"},paddingRight:"16",width:{sm:"full",md:"332",lg:"332"},children:[d&&(0,i.jsxs)(no,{children:[(0,i.jsx)(_.Tv.HeadlineSmall,{children:"Filter"}),(0,i.jsx)(Qe.DX,{height:28,width:28,fill:oi.Z4.colors.neutral1,onClick:()=>l(!1)})]}),(0,i.jsx)(so,{collections:o,collectionFilters:s,setCollectionFilters:a,fetchNextPage:e,hasNextPage:t,isFetchingNextPage:n,hideSearch:p})]})})},so=({collections:e,collectionFilters:t,setCollectionFilters:n,fetchNextPage:o,hasNextPage:s,isFetchingNextPage:a,hideSearch:r})=>{const[l,d]=(0,w.useState)(""),[c,p]=(0,w.useState)(e);(0,w.useEffect)((()=>{if(l){const t=e.filter((e=>{var t;return null===(t=e.name)||void 0===t?void 0:t.toLowerCase().includes(l.toLowerCase())}));p(t)}else p(e)}),[l,e]);const u=(0,w.useCallback)(((e,t)=>{if(!t)return e;return`${t[e].address}_${e}`}),[]),h=s?c.length+1:c.length,m=a?Ki.Z:o,x=(0,w.useCallback)((e=>!s||e<c.length),[c.length,s]),f=(0,w.useCallback)((({index:e,style:o})=>!(!!c&&c[e])||a?(0,i.jsx)(io,{style:o},e):(0,i.jsx)(ro,{style:o,collection:c[e],collectionFilters:t,setCollectionFilters:n},u(e,c))),[c,a,u,t,n]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Wi.n,{className:Kt.v4,marginTop:"12",marginBottom:"16",width:"276",children:"Collections"}),(0,i.jsx)(Wi.n,{paddingBottom:"12",borderRadius:"8",children:(0,i.jsxs)(ni.sg,{as:"ul",paddingLeft:"0",gap:"10",style:{maxHeight:"80vh"},children:[!r&&(0,i.jsx)(ao,{collectionSearchText:l,setCollectionSearchText:d}),(0,i.jsx)(Qi,{children:(0,i.jsx)(Yi.ZP,{disableWidth:!0,children:({height:e})=>(0,i.jsx)(Ji.Z,{isItemLoaded:x,itemCount:h,loadMoreItems:m,children:({onItemsRendered:t,ref:n})=>(0,i.jsx)(qi.t7,{height:e,width:"100%",itemCount:h,itemSize:44,onItemsRendered:t,itemKey:u,ref:n,children:f})})})})]})})]})},ao=({collectionSearchText:e,setCollectionSearchText:t})=>(0,i.jsx)(Jt.I,{placeholder:"Search",marginTop:"8",marginBottom:"8",autoComplete:"off",position:"static",width:"full",value:e,onChange:e=>t(e.currentTarget.value)}),ro=({collection:e,collectionFilters:t,setCollectionFilters:n,style:o})=>{const[s,a]=(0,w.useState)(!1),[r,l]=(0,w.useReducer)((e=>!e),!1),d=(0,w.useCallback)((e=>t.some((t=>t===e))),[t]),c=()=>{a(!s),n(e.address)};return(0,i.jsxs)(ni.X2,{maxWidth:"full",overflowX:"hidden",overflowY:"hidden",fontWeight:"book",className:"_1bw5dlr3 rgw6ezd3 rgw6ezb9 rgw6ezdr",justifyContent:"space-between",cursor:"pointer",paddingLeft:"12",paddingRight:"16",borderRadius:"12",style:{paddingBottom:"22px",paddingTop:"22px",...o},maxHeight:"44",as:"li",onMouseEnter:l,onMouseLeave:l,onClick:c,children:[(0,i.jsxs)(ni.X2,{children:[(0,i.jsx)(Wi.n,{as:"img",borderRadius:"round",width:"20",height:"20",src:e.image}),(0,i.jsxs)(Wi.n,{as:"span",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",paddingLeft:"12",paddingRight:"14",style:{minHeight:15,maxWidth:"180px"},children:[e.name," "]})]}),(0,i.jsx)(ii.X,{checked:d(e.address),hovered:r,onChange:c,children:(0,i.jsx)(Wi.n,{as:"span",color:"neutral3",marginRight:"12",marginLeft:"auto",children:e.count})})]})};var lo,co=n(40976),po=n(10581),uo=n(31915),ho=n(61049);function mo(e,t,n,i,o,s,a){try{var r=e[s](a),l=r.value}catch(d){return void n(d)}r.done?t(l):Promise.resolve(l).then(i,o)}function xo(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var s=e.apply(t,n);function a(e){mo(s,i,o,a,r,"next",e)}function r(e){mo(s,i,o,a,r,"throw",e)}a(void 0)}))}}!function(e){e[e.SHORT=5e3]="SHORT",e[e.MEDIUM=15e3]="MEDIUM",e[e.LONG=6e4]="LONG"}(lo||(lo={}));const fo=function(){var e=xo((function*({params:e}){let t=!1;if(!e)return[];for(const o of Object.values(e))void 0===o&&(t=!0);if(t)return[];const n=yield fetch(`https://api.opensea.io/api/v1/collections?${new URLSearchParams(e).toString()}`),i=yield n.json();return i?i.filter((e=>e.primary_asset_contracts.length)).map((e=>({address:e.primary_asset_contracts[0].address,name:e.name,image:e.image_url,count:e.owned_asset_count}))):[]}));return function(t){return e.apply(this,arguments)}}();var go=n(41218),vo=n(23173);const wo=j.default.div.withConfig({displayName:"ProfilePageLoadingSkeleton__SkeletonBodyWrapper",componentId:"sc-a6ba35bc-0"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 18px;
`,yo=j.default.div.withConfig({displayName:"ProfilePageLoadingSkeleton__SkeletonRowWrapper",componentId:"sc-a6ba35bc-1"})`
  display: flex;
  flex-direct: row;
  width: 100%;
`,bo=(0,j.default)(yo).withConfig({displayName:"ProfilePageLoadingSkeleton__AccountDetailsSkeletonWrapper",componentId:"sc-a6ba35bc-2"})`
  gap: 12px;
  margin-bottom: 30px;
`,jo=j.default.div.withConfig({displayName:"ProfilePageLoadingSkeleton__ProfileDetailsSkeleton",componentId:"sc-a6ba35bc-3"})`
  width: 180px;
  height: 36px;
  border-radius: 12px;
`,Co=(0,j.default)(yo).withConfig({displayName:"ProfilePageLoadingSkeleton__FilterBarSkeletonWrapper",componentId:"sc-a6ba35bc-4"})`
  justify-content: space-between;
`,_o=j.default.div.withConfig({displayName:"ProfilePageLoadingSkeleton__FilterButtonSkeleton",componentId:"sc-a6ba35bc-5"})`
  width: 92px;
  height: 44px;
  border-radius: 12px;
`,Po=j.default.div.withConfig({displayName:"ProfilePageLoadingSkeleton__SellButtonSkeleton",componentId:"sc-a6ba35bc-6"})`
  width: 80px;
  height: 44px;
  border-radius: 12px;
`,Io=j.default.div.withConfig({displayName:"ProfilePageLoadingSkeleton__ProfileAssetCardSkeleton",componentId:"sc-a6ba35bc-7"})`
  width: 100%;
  height: 330px;
  border-radius: 20px;
`,So=()=>(0,i.jsx)(Wi.n,{width:"full",className:Hi.P,children:Array.from(Array(Mo),((e,t)=>(0,i.jsx)(Io,{className:vo.S},t)))}),No=()=>(0,i.jsxs)(wo,{children:[(0,i.jsx)(bo,{children:(0,i.jsx)(jo,{className:vo.S})}),(0,i.jsxs)(Co,{children:[(0,i.jsx)(_o,{className:vo.S}),(0,i.jsx)(Po,{className:vo.S})]}),(0,i.jsx)(So,{})]});var ko=n(2798),To=n(42601),$o=n(6282);const Ro=({asset:e,mediaShouldBePlaying:t,setCurrentTokenPlayingMedia:n,hideDetails:s})=>{const r=(0,L.Pc)((e=>e.sellAssets)),l=(0,L.Pc)((e=>e.selectSellAsset)),d=(0,L.Pc)((e=>e.removeSellAsset)),p=(0,L.cP)((e=>e.bagExpanded)),u=(0,L.cP)((e=>e.toggleBag)),h=(0,F.dD)(),m=(0,$o.s0)(),x=(0,w.useMemo)((()=>r.some((t=>t.tokenId===e.tokenId&&t.asset_contract.address===e.asset_contract.address))),[e,r]),f=(0,a.oO)(),g=t=>{t?d(e):(l(e),(0,a._P)(o.Yz.NFT_SELL_ITEM_ADDED,{collection_address:e.asset_contract.address,token_id:e.tokenId,...f})),p||r.find((t=>t.tokenId===e.tokenId&&t.asset_contract.address===e.asset_contract.address))||h||u()},v=e.susFlag,y=(0,w.useMemo)((()=>({primaryInfo:!!e.asset_contract.name&&e.asset_contract.name,primaryInfoIcon:e.collectionIsVerified&&(0,i.jsx)(Qe.SA,{height:"16px",width:"16px"}),secondaryInfo:e.name||e.tokenId?e.name??`#${e.tokenId}`:null,selectedInfo:(0,i.jsx)(c.cC,{children:"Remove from bag"}),notSelectedInfo:(0,i.jsx)(c.cC,{children:"List for sale"}),disabledInfo:(0,i.jsx)(c.cC,{children:"Unavailable for listing"})})),[e.asset_contract.name,e.collectionIsVerified,e.name,e.tokenId]);return(0,i.jsx)(ko.y,{asset:e,display:y,isSelected:x,isDisabled:Boolean(v),selectAsset:()=>g(!1),unselectAsset:()=>g(!0),onButtonClick:()=>g(x),onCardClick:()=>{s||m((0,To.VL)(e))},mediaShouldBePlaying:t,setCurrentTokenPlayingMedia:n,testId:"nft-profile-asset"})},Eo=(0,j.default)(ni.sg).withConfig({displayName:"ProfilePage__ProfilePageColumn",componentId:"sc-9fbd9c13-0"})`
  ${co.bc}
`,Lo=j.default.div.withConfig({displayName:"ProfilePage__ProfileHeader",componentId:"sc-9fbd9c13-1"})`
  font-size: 28px;
  font-weight: 535;
  line-height: 38px;
  padding-bottom: 16px;
  margin-bottom: 8px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 0px;
  }
`,Fo=j.default.div.withConfig({displayName:"ProfilePage__EmptyStateContainer",componentId:"sc-9fbd9c13-2"})`
  margin-top: 164px;
`,Mo=25,Ao=300,Oo=()=>{const{address:e}=(0,L.tM)(),t=(0,L.Pr)((e=>e.walletCollections)),n=(0,L.Pr)((e=>e.setWalletCollections)),{resetSellAssets:o}=(0,L.Pc)((({reset:e})=>({resetSellAssets:e}))),s=(0,L.Pc)((e=>e.sellAssets)),a=(0,L.cP)((e=>e.toggleBag)),[r,l]=(0,L.wx)(),d=(0,F.dD)(),{data:c,fetchNextPage:p,hasNextPage:u,isFetchingNextPage:h,isSuccess:m}=(0,uo.N)(function(e){return(0,ho.t)({queryKey:["ownerCollections",{address:e}],queryFn:function(){var t=xo((function*({pageParam:t}){const n={asset_owner:e,offset:""+t*Ao,limit:`${Ao}`};return{data:yield fo(n),nextPage:t+1}}));return function(e){return t.apply(this,arguments)}}(),initialPageParam:0,getNextPageParam:e=>0===e.data.length?void 0:e.nextPage,refetchInterval:lo.MEDIUM})}(e)),x=(0,w.useMemo)((()=>{var e;return m?null===(e=c)||void 0===e?void 0:e.pages.map((e=>e.data)).flat():null}),[m,c]);return(0,w.useEffect)((()=>{x&&n(x)}),[x,n]),(0,i.jsxs)(Eo,{width:"full",paddingTop:{sm:"16",md:"40"},children:[(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Lo,{children:"My NFTs"}),(0,i.jsxs)(ni.X2,{alignItems:"flex-start",position:"relative",children:[(0,i.jsx)(oo,{fetchNextPage:p,hasNextPage:u,isFetchingNextPage:h,walletCollections:t}),(!d||!r)&&(0,i.jsx)(w.Suspense,{fallback:(0,i.jsx)(No,{}),children:(0,i.jsx)(Do,{walletCollections:t,isFiltersExpanded:r,setFiltersExpanded:l})})]})]}),s.length>0&&(0,i.jsxs)(ni.X2,{display:{sm:"flex",md:"none"},position:"fixed",left:"16",height:"56",borderRadius:"12",paddingX:"16",paddingY:"12",background:"surface1",borderStyle:"solid",borderColor:"surface3",borderWidth:"1px",style:{bottom:"68px",width:"calc(100% - 32px)",lineHeight:"24px"},className:Kt.v4,children:[s.length," NFT",1===s.length?"":"s",(0,i.jsx)(Wi.n,{fontWeight:"medium",fontSize:"14",cursor:"pointer",color:"neutral2",marginRight:"20",marginLeft:"auto",onClick:o,lineHeight:"16",children:"Clear"}),(0,i.jsx)(Wi.n,{color:"white",marginRight:"0",fontWeight:"medium",fontSize:"14",cursor:"pointer",backgroundColor:"accent1",onClick:a,lineHeight:"16",borderRadius:"12",paddingY:"8",paddingX:"28",children:"List for sale"})]})]})},Do=({walletCollections:e,isFiltersExpanded:t,setFiltersExpanded:n})=>{var o,s,a,r,l;const{address:d}=(0,L.tM)(),c=(0,L.Pr)((e=>e.setCollectionFilters)),p=(0,L.Pr)((e=>e.collectionFilters)),u=(0,L.Pr)((e=>e.clearCollectionFilters)),h=(0,L.cP)((e=>e.bagExpanded)),[m,x]=(0,w.useState)(),f=(0,F.dD)(),g=(0,L.Pc)((e=>e.sellAssets)),{walletAssets:v,loading:y,hasNext:b,loadMore:j}=(0,Zi.b)(d,p,[],Mo),{gridX:C}=(0,Ui.q_)({gridX:t?300:-16,config:{duration:250,easing:Ui.Z5.easeOutSine}});return y?(0,i.jsx)(No,{}):(0,i.jsx)(ni.sg,{width:"full",children:0===(null===(o=v)||void 0===o?void 0:o.length)?(0,i.jsx)(Fo,{children:(0,i.jsx)(go.f,{})}):(0,i.jsxs)(Wi.x,{flexShrink:"0",position:f&&h?"fixed":"static",style:{transform:C.to((e=>`translate(${Number(e)-(!f&&t?300:-16)}px)`))},paddingY:"20",children:[(0,i.jsx)(ni.X2,{gap:"8",flexWrap:"nowrap",justifyContent:"space-between",children:(0,i.jsx)(zi.L,{isMobile:f,isFiltersExpanded:t,onClick:()=>n(!t)})}),(0,i.jsx)(ni.X2,{children:(0,i.jsx)(Bo,{collections:e,collectionFilters:p,setCollectionFilters:c,clearCollectionFilters:u})}),(0,i.jsx)(po.Z,{next:j,hasMore:b??!1,loader:Boolean(b&&(null===(s=v)||void 0===s?void 0:s.length))&&(0,i.jsx)(Gi.p,{count:Mo}),dataLength:(null===(a=v)||void 0===a?void 0:a.length)??0,className:(null===(r=v)||void 0===r?void 0:r.length)?Hi.P:void 0,style:{overflow:"unset"},children:(null===(l=v)||void 0===l?void 0:l.length)?v.map(((e,t)=>(0,i.jsx)("div",{children:(0,i.jsx)(Ro,{asset:e,mediaShouldBePlaying:e.tokenId===m,setCurrentTokenPlayingMedia:x,hideDetails:g.length>0})},t))):null})]})})},Bo=({collections:e,collectionFilters:t,setCollectionFilters:n,clearCollectionFilters:o})=>{var s,a;const r=t=>{var n;return null===(n=e)||void 0===n?void 0:n.find((e=>e.address===t))},l=(0,w.useCallback)((()=>o()),[o]);return(0,i.jsxs)(ni.X2,{paddingY:"18",gap:"8",flexWrap:"wrap",children:[Boolean(null===(s=t)||void 0===s?void 0:s.length)&&t.map(((e,t)=>(0,i.jsx)(Zo,{collection:r(e),setCollectionFilters:n},`CollectionFilterItem-${e}-${t}`))),Boolean(null===(a=t)||void 0===a?void 0:a.length)&&(0,i.jsx)(Vi.v,{onClick:l,children:"Clear all"})]})},Zo=({collection:e,setCollectionFilters:t})=>{var n;return e?(0,i.jsxs)(ni.X2,{justifyContent:"center",paddingTop:"6",paddingRight:"6",paddingBottom:"6",paddingLeft:"12",borderRadius:"8",background:"surface3",fontSize:"14",children:[(0,i.jsx)(Wi.n,{as:"img",borderRadius:"round",width:"20",height:"20",src:e.image}),(0,i.jsx)(Wi.n,{marginLeft:"6",className:"_1bw5dlr8",children:null===(n=e)||void 0===n?void 0:n.name}),(0,i.jsx)(Wi.n,{color:"neutral2",background:"none",height:"28",width:"28",padding:"0",as:"button",border:"none",cursor:"pointer",onClick:()=>t(e.address),children:(0,i.jsx)(Qe.aM,{})})]}):null};var Wo=n(437),Go=n(13446);const Ho=j.default.div.withConfig({displayName:"profile__ProfilePageWrapper",componentId:"sc-cc3cfb91-0"})`
  height: 100%;
  width: 100%;
  scrollbar-width: none;

  @media screen and (min-width: ${C.j$.lg}px) {
    height: auto;
  }
`,zo=j.default.div.withConfig({displayName:"profile__LoadedAccountPage",componentId:"sc-cc3cfb91-1"})`
  width: calc(
    100% -
      ${({cartExpanded:e,isListingNfts:t})=>t?80:e?p.zD:0}px
  );
  margin: 0px ${({isListingNfts:e})=>e?40:0}px;

  @media screen and (max-width: ${C.j$.sm}px) {
    width: calc(100% - ${({isListingNfts:e})=>e?32:0}px);
    margin: 0px ${({isListingNfts:e})=>e?16:0}px;
  }
`,Vo=j.default.div.withConfig({displayName:"profile__Center",componentId:"sc-cc3cfb91-2"})`
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  white-space: nowrap;
`,Xo=(0,j.default)(l.DF).withConfig({displayName:"profile__ConnectWalletButton",componentId:"sc-cc3cfb91-3"})`
  width: min-content;
  white-space: nowrap;
  border-radius: 12px;
  padding: 14px 18px;
  border: none;
`;function Uo(e,t){return e?t?(0,c.t)("{{name}}'s NFT collection on Uniswap",{name:t}):(0,c.t)("NFT collection on Uniswap - {{address}}",{address:(0,Go.Xn)(e)}):c.t`NFT collection on Uniswap`}function Yo(){const e=(0,L.aO)((e=>e.state)),t=(0,L.aO)((e=>e.setProfilePageState)),n=(0,L.Pc)((e=>e.reset)),l=(0,L.Pr)((e=>e.clearCollectionFilters)),{account:p}=(0,s.G)(),{ENSName:u}=(0,d.Z)(p),h=(0,w.useRef)(p),m=(0,r.LK)();(0,w.useEffect)((()=>{h.current!==p&&(h.current=p,n(),t(ne.HA.VIEWING),l())}),[p,n,t,l]);const x=(0,L.cP)((e=>e.bagExpanded)),f=e===ne.HA.LISTING;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Wo.Helmet,{children:(0,i.jsx)("title",{children:Uo(p,u)})}),(0,i.jsx)(a.fM,{page:o.yJ.NFT_PROFILE_PAGE,shouldLogImpression:!0,children:(0,i.jsx)(Ho,{children:p?(0,i.jsx)(zo,{cartExpanded:x,isListingNfts:f,children:f?(0,i.jsx)(Bi,{}):(0,i.jsx)(Oo,{})}):(0,i.jsxs)(Vo,{children:[(0,i.jsx)(_.Tv.HeadlineMedium,{lineHeight:"36px",color:"neutral2",fontWeight:"535",marginBottom:"24px",children:(0,i.jsx)(c.cC,{children:"No items to display"})}),(0,i.jsx)(Xo,{onClick:m,children:(0,i.jsx)(_.Tv.SubHeader,{color:"white",lineHeight:"20px",children:(0,i.jsx)(c.cC,{children:"Connect wallet"})})})]})})})]})}}}]);
//# sourceMappingURL=3659.d31c40be.chunk.js.map