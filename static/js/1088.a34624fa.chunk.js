"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[1088],{7724:(e,t,n)=>{var r=n(54045);function o(e){var t=Buffer.alloc(2);return t.writeUInt16BE(e,0),t}var i={data:Buffer.alloc(0),dataLength:0,sequence:0};t.Z=function(e,t){return{makeBlocks:function(n){var r=Buffer.concat([o(n.length),n]),i=t-5,c=Math.ceil(r.length/i);r=Buffer.concat([r,Buffer.alloc(c*i-r.length+1).fill(0)]);for(var s=[],a=0;a<c;a++){var u=Buffer.alloc(5);u.writeUInt16BE(e,0),u.writeUInt8(5,2),u.writeUInt16BE(a,3);var d=r.slice(a*i,(a+1)*i);s.push(Buffer.concat([u,d]))}return s},reduceResponse:function(t,n){var o=t||i,c=o.data,s=o.dataLength,a=o.sequence;if(n.readUInt16BE(0)!==e)throw new r.TransportError("Invalid channel","InvalidChannel");if(5!==n.readUInt8(2))throw new r.TransportError("Invalid tag","InvalidTag");if(n.readUInt16BE(3)!==a)throw new r.TransportError("Invalid sequence","InvalidSequence");t||(s=n.readUInt16BE(5)),a++;var u=n.slice(t?5:7);return(c=Buffer.concat([c,u])).length>s&&(c=c.slice(0,s)),{data:c,dataLength:s,sequence:a}},getReducedResult:function(e){if(e&&e.dataLength===e.data.length)return e.data}}}},61088:(e,t,n)=>{n.r(t),n.d(t,{default:()=>F});var r=n(75772),o=n.n(r),i=n(54045);let c=0;const s=[],a=(e,t,n)=>{const r={type:e,id:String(++c),date:new Date};t&&(r.message=t),n&&(r.data=n),d(r)};class u{constructor(e,t){this.type=e,this.context=t}trace(e,t){(({type:e,message:t,data:n,context:r})=>{const o={type:e,id:String(++c),date:new Date};t&&(o.message=t),n&&(o.data=n),r&&(o.context=r),d(o)})({type:this.type,message:e,data:t,context:this.context})}getContext(){return this.context}setContext(e){this.context=e}updateContext(e){this.context=Object.assign(Object.assign({},this.context),e)}getType(){return this.type}setType(e){this.type=e}withType(e){return new u(e,this.context)}withContext(e){return new u(this.type,e)}withUpdatedContext(e){return new u(this.type,Object.assign(Object.assign({},this.context),e))}}function d(e){for(let n=0;n<s.length;n++)try{s[n](e)}catch(t){console.error(t)}}"undefined"!=typeof window&&(window.__ledgerLogsListen=e=>(s.push(e),()=>{const t=s.indexOf(e);-1!==t&&(s[t]=s[s.length-1],s.pop())}));var l=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{a(r.next(e))}catch(t){i(t)}}function s(e){try{a(r.throw(e))}catch(t){i(t)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}a((r=r.apply(e,t||[])).next())}))};class h{constructor({context:e,logType:t}={}){this.exchangeTimeout=3e4,this.unresponsiveTimeout=15e3,this.deviceModel=null,this._events=new(o()),this.send=(e,t,n,r,...o)=>l(this,[e,t,n,r,...o],void 0,(function*(e,t,n,r,o=Buffer.alloc(0),c=[i.StatusCodes.OK],{abortTimeoutMs:s}={}){const a=this.tracer.withUpdatedContext({function:"send"});if(o.length>=256)throw a.trace("data.length exceeded 256 bytes limit",{dataLength:o.length}),new i.TransportError("data.length exceed 256 bytes limit. Got: "+o.length,"DataLengthTooBig");a.trace("Starting an exchange",{abortTimeoutMs:s});const u=yield this.exchange(Buffer.concat([Buffer.from([e,t,n,r]),Buffer.from([o.length]),o]),{abortTimeoutMs:s});a.trace("Received response from exchange");const d=u.readUInt16BE(u.length-2);if(!c.some((e=>e===d)))throw new i.TransportStatusError(d);return u})),this._appAPIlock=null,this.tracer=new u(null!=t?t:"transport",e)}exchange(e,{abortTimeoutMs:t}={}){throw new Error("exchange not implemented")}exchangeBulk(e,t){let n=!1;return(()=>l(this,void 0,void 0,(function*(){if(!n)for(const r of e){const e=yield this.exchange(r);if(n)return;const o=e.readUInt16BE(e.length-2);if(o!==i.StatusCodes.OK)throw new i.TransportStatusError(o);t.next(e)}})))().then((()=>!n&&t.complete()),(e=>!n&&t.error(e))),{unsubscribe:()=>{n=!0}}}setScrambleKey(e){}close(){return Promise.resolve()}on(e,t){this._events.on(e,t)}off(e,t){this._events.removeListener(e,t)}emit(e,...t){this._events.emit(e,...t)}setDebugMode(){console.warn("setDebugMode is deprecated. use @ledgerhq/logs instead. No logs are emitted in this anymore.")}setExchangeTimeout(e){this.exchangeTimeout=e}setExchangeUnresponsiveTimeout(e){this.unresponsiveTimeout=e}static create(e=3e3,t){return new Promise(((n,r)=>{let o=!1;const c=this.listen({next:t=>{o=!0,c&&c.unsubscribe(),s&&clearTimeout(s),this.open(t.descriptor,e).then(n,r)},error:e=>{s&&clearTimeout(s),r(e)},complete:()=>{s&&clearTimeout(s),o||r(new i.TransportError(this.ErrorMessage_NoDeviceFound,"NoDeviceFound"))}}),s=t?setTimeout((()=>{c.unsubscribe(),r(new i.TransportError(this.ErrorMessage_ListenTimeout,"ListenTimeout"))}),t):null}))}exchangeAtomicImpl(e){return l(this,void 0,void 0,(function*(){const t=this.tracer.withUpdatedContext({function:"exchangeAtomicImpl",unresponsiveTimeout:this.unresponsiveTimeout});if(this.exchangeBusyPromise)throw t.trace("Atomic exchange is already busy"),new i.TransportRaceCondition("An action was already pending on the Ledger device. Please deny or reconnect.");let n;const r=new Promise((e=>{n=e}));this.exchangeBusyPromise=r;let o=!1;const c=setTimeout((()=>{t.trace('Timeout reached, emitting Transport event "unresponsive"',{unresponsiveTimeout:this.unresponsiveTimeout}),o=!0,this.emit("unresponsive")}),this.unresponsiveTimeout);try{const n=yield e();return o&&(t.trace("Device was unresponsive, emitting responsive"),this.emit("responsive")),n}finally{t.trace("Finalize, clearing busy guard"),clearTimeout(c),n&&n(),this.exchangeBusyPromise=null}}))}decorateAppAPIMethods(e,t,n){for(const r of t)e[r]=this.decorateAppAPIMethod(r,e[r],e,n)}decorateAppAPIMethod(e,t,n,r){return(...o)=>l(this,void 0,void 0,(function*(){const{_appAPIlock:c}=this;if(c)return Promise.reject(new i.TransportError("Ledger Device is busy (lock "+c+")","TransportLocked"));try{return this._appAPIlock=e,this.setScrambleKey(r),yield t.apply(n,o)}finally{this._appAPIlock=null}}))}setTraceContext(e){this.tracer=this.tracer.withContext(e)}updateTraceContext(e){this.tracer.updateContext(e)}getTraceContext(){return this.tracer.getContext()}}h.ErrorMessage_ListenTimeout="No Ledger device found (timeout)",h.ErrorMessage_NoDeviceFound="No Ledger device found";const f=h;var p,v,g=n(7724),m=n(34883),y=n.n(m),w=function(){return w=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},w.apply(this,arguments)};!function(e){e.blue="blue",e.nanoS="nanoS",e.nanoSP="nanoSP",e.nanoX="nanoX",e.nanoFTS="nanoFTS"}(v||(v={}));var b=((p={})[v.blue]={id:v.blue,productName:"Ledger\xa0Blue",productIdMM:0,legacyUsbProductId:0,usbOnly:!0,memorySize:491520,masks:[822083584,822149120],getBlockSize:function(e){return 4096}},p[v.nanoS]={id:v.nanoS,productName:"Ledger\xa0Nano\xa0S",productIdMM:16,legacyUsbProductId:1,usbOnly:!0,memorySize:327680,masks:[823132160],getBlockSize:function(e){var t;return y().lt(null!==(t=y().coerce(e))&&void 0!==t?t:"","2.0.0")?4096:2048}},p[v.nanoSP]={id:v.nanoSP,productName:"Ledger Nano S Plus",productIdMM:80,legacyUsbProductId:5,usbOnly:!0,memorySize:1572864,masks:[856686592],getBlockSize:function(e){return 32}},p[v.nanoX]={id:v.nanoX,productName:"Ledger\xa0Nano\xa0X",productIdMM:64,legacyUsbProductId:4,usbOnly:!1,memorySize:2097152,masks:[855638016],getBlockSize:function(e){return 4096},bluetoothSpec:[{serviceUuid:"13d63400-2c97-0004-0000-4c6564676572",notifyUuid:"13d63400-2c97-0004-0001-4c6564676572",writeUuid:"13d63400-2c97-0004-0002-4c6564676572",writeCmdUuid:"13d63400-2c97-0004-0003-4c6564676572"}]},p[v.nanoFTS]={id:v.nanoFTS,productName:"Ledger\xa0Nano\xa0FTS",productIdMM:96,legacyUsbProductId:6,usbOnly:!1,memorySize:2097152,masks:[857735168],getBlockSize:function(e){return 4096},bluetoothSpec:[{serviceUuid:"13d63400-2c97-6004-0000-4c6564676572",notifyUuid:"13d63400-2c97-6004-0001-4c6564676572",writeUuid:"13d63400-2c97-6004-0002-4c6564676572",writeCmdUuid:"13d63400-2c97-6004-0003-4c6564676572"}]},p),x=(v.blue,v.nanoS,v.nanoSP,v.nanoX,v.nanoFTS,Object.values(b)),T=11415,S=function(e){var t=x.find((function(t){return t.legacyUsbProductId===e}));if(t)return t;var n=e>>8;return x.find((function(e){return e.productIdMM===n}))},I=[],P={};for(var k in b){var B=b[k],E=B.bluetoothSpec;if(E)for(var U=0;U<E.length;U++){var M=E[U];I.push(M.serviceUuid),P[M.serviceUuid]=P[M.serviceUuid.replace(/-/g,"")]=w({deviceModel:B},M)}}var _=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),C=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{a(r.next(e))}catch(t){i(t)}}function s(e){try{a(r.throw(e))}catch(t){i(t)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}a((r=r.apply(e,t||[])).next())}))},L=function(e,t){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=t.call(e,c)}catch(s){i=[6,s],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},O=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),c=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)c.push(r.value)}catch(s){o={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return c},D=[{vendorId:T}],A=function(){return Promise.resolve(!(!window.navigator||!window.navigator.hid))},N=function(){var e=navigator.hid;if(!e)throw new i.TransportError("navigator.hid is not supported","HIDNotSupported");return e};function z(){return C(this,void 0,void 0,(function(){var e;return L(this,(function(t){switch(t.label){case 0:return[4,N().requestDevice({filters:D})];case 1:return e=t.sent(),Array.isArray(e)?[2,e]:[2,[e]]}}))}))}function R(){return C(this,void 0,void 0,(function(){return L(this,(function(e){switch(e.label){case 0:return[4,N().getDevices()];case 1:return[2,e.sent().filter((function(e){return e.vendorId===T}))]}}))}))}var j=function(e){function t(t){var n=e.call(this)||this;return n.channel=Math.floor(65535*Math.random()),n.packetSize=64,n.inputs=[],n.read=function(){return n.inputs.length?Promise.resolve(n.inputs.shift()):new Promise((function(e){n.inputCallback=e}))},n.onInputReport=function(e){var t=Buffer.from(e.data.buffer);n.inputCallback?(n.inputCallback(t),n.inputCallback=null):n.inputs.push(t)},n._disconnectEmitted=!1,n._emitDisconnect=function(e){n._disconnectEmitted||(n._disconnectEmitted=!0,n.emit("disconnect",e))},n.exchange=function(e){return C(n,void 0,void 0,(function(){var t=this;return L(this,(function(n){switch(n.label){case 0:return[4,this.exchangeAtomicImpl((function(){return C(t,void 0,void 0,(function(){var t,n,r,o,i,c,s,u,d;return L(this,(function(l){switch(l.label){case 0:n=(t=this).channel,r=t.packetSize,a("apdu","=> "+e.toString("hex")),o=(0,g.Z)(n,r),i=o.makeBlocks(e),c=0,l.label=1;case 1:return c<i.length?[4,this.device.sendReport(0,i[c])]:[3,4];case 2:l.sent(),l.label=3;case 3:return c++,[3,1];case 4:return(s=o.getReducedResult(u))?[3,6]:[4,this.read()];case 5:return d=l.sent(),u=o.reduceResponse(u,d),[3,4];case 6:return a("apdu","<= "+s.toString("hex")),[2,s]}}))}))})).catch((function(e){if(e&&e.message&&e.message.includes("write"))throw t._emitDisconnect(e),new i.DisconnectedDeviceDuringOperation(e.message);throw e}))];case 1:return[2,n.sent()]}}))}))},n.device=t,n.deviceModel="number"==typeof t.productId?S(t.productId):void 0,t.addEventListener("inputreport",n.onInputReport),n}return _(t,e),t.request=function(){return C(this,void 0,void 0,(function(){var e,n;return L(this,(function(r){switch(r.label){case 0:return[4,z()];case 1:return e=O.apply(void 0,[r.sent(),1]),n=e[0],[2,t.open(n)]}}))}))},t.openConnected=function(){return C(this,void 0,void 0,(function(){var e;return L(this,(function(n){switch(n.label){case 0:return[4,R()];case 1:return 0===(e=n.sent()).length?[2,null]:[2,t.open(e[0])]}}))}))},t.open=function(e){return C(this,void 0,void 0,(function(){var n,r;return L(this,(function(o){switch(o.label){case 0:return[4,e.open()];case 1:return o.sent(),n=new t(e),r=function(t){e===t.device&&(N().removeEventListener("disconnect",r),n._emitDisconnect(new i.DisconnectedDevice))},N().addEventListener("disconnect",r),[2,n]}}))}))},t.prototype.close=function(){return C(this,void 0,void 0,(function(){return L(this,(function(e){switch(e.label){case 0:return[4,this.exchangeBusyPromise];case 1:return e.sent(),this.device.removeEventListener("inputreport",this.onInputReport),[4,this.device.close()];case 2:return e.sent(),[2]}}))}))},t.prototype.setScrambleKey=function(){},t.isSupported=A,t.list=R,t.listen=function(e){var t=!1;return function(){return C(this,void 0,void 0,(function(){var e;return L(this,(function(t){switch(t.label){case 0:return[4,R()];case 1:return(e=t.sent()).length>0?[2,e[0]]:[4,z()];case 2:return[2,t.sent()[0]]}}))}))}().then((function(n){if(n){if(!t){var r="number"==typeof n.productId?S(n.productId):void 0;e.next({type:"add",descriptor:n,deviceModel:r}),e.complete()}}else e.error(new i.TransportOpenUserCancelled("Access denied to use Ledger device"))}),(function(t){e.error(new i.TransportOpenUserCancelled(t.message))})),{unsubscribe:function(){t=!0}}},t}(f);const F=j}}]);
//# sourceMappingURL=1088.a34624fa.chunk.js.map