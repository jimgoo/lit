(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[5241,132],{5241:(e,t,s)=>{"use strict";s.r(t),s.d(t,{IDocumentProviderFactory:()=>l,ProviderMock:()=>c,WebSocketProviderWithLocks:()=>S,getAnonymousUserName:()=>o,getRandomColor:()=>a,moonsOfJupyter:()=>n,userColors:()=>i});const n=["Metis","Adrastea","Amalthea","Thebe","Io","Europa","Ganymede","Callisto","Themisto","Leda","Ersa","Pandia","Himalia","Lysithea","Elara","Dia","Carpo","Valetudo","Euporie","Eupheme","Helike","Euanthe","Hermippe","Praxidike","Thyone","Thelxinoe","Ananke","Mneme","Orthosie","Harpalyke","Iocaste","Erinome","Aitne","Herse","Taygete","Eukelade","Carme","Isonoe","Autonoe","Philophrosyne","Cyllene","Pasithee","Pasiphae","Sponde","Eurydome","Kalyke","Hegemone","Kale","Kallichore","Chaldene","Arche","Eirene","Kore","Megaclite","Aoede","Callirrhoe","Sinope"],o=()=>"Anonymous "+n[Math.floor(Math.random()*n.length)],i=["#12A0D3","#17AB30","#CC8500","#A79011","#ee6352","#609DA9","#4BA749","#00A1B3"],a=()=>i[Math.floor(Math.random()*i.length)];class c{requestInitialContent(){return Promise.resolve(!1)}putInitializedState(){}acquireLock(){return Promise.resolve(0)}releaseLock(e){}destroy(){}setPath(e){}}var r=s(66065);const l=new r.Token("@jupyterlab/docprovider:IDocumentProviderFactory");var h=s(49e3),u=s(23406),d=s(62538),f=s(40870),m=s(68078),p=s(6493),g=s(31955),w=s(75736),y=s(21332),_=s(69600),v=s(34406);const b=[];b[0]=(e,t,s,n,o)=>{u.uE(e,0);const i=m.zu(t,e,s.doc,s);n&&i===m.Px&&!s.synced&&(s.synced=!0)},b[3]=(e,t,s,n,o)=>{u.uE(e,1),u.mP(e,p.xq(s.awareness,Array.from(s.awareness.getStates().keys())))},b[1]=(e,t,s,n,o)=>{p.oy(s.awareness,h.HN(t),s)},b[2]=(e,t,s,n,o)=>{((e,t,s)=>{switch(h.yg(e)){case 0:s(t,h.kf(e))}})(t,s.doc,C)};const C=(e,t)=>console.warn(`Permission denied to access ${e.url}.\n${t}`),I=(e,t,s)=>{const n=h.l1(t),o=u.Mf(),i=h.yg(n),a=e.messageHandlers[i];return a?a(o,n,e,s,i):console.error("Unable to compute message"),o},E=e=>{if(e.shouldConnect&&null===e.ws){const t=new e._WS(e.url);t.binaryType="arraybuffer",e.ws=t,e.wsconnecting=!0,e.wsconnected=!1,e.synced=!1,t.onmessage=s=>{e.wsLastMessageReceived=f.ZG();const n=I(e,new Uint8Array(s.data),!0);u.kE(n)>1&&t.send(u._f(n))},t.onclose=()=>{e.ws=null,e.wsconnecting=!1,e.wsconnected?(e.wsconnected=!1,e.synced=!1,p.Ag(e.awareness,Array.from(e.awareness.getStates().keys()).filter((t=>t!==e.doc.clientID)),e),e.emit("status",[{status:"disconnected"}])):e.wsUnsuccessfulReconnects++,setTimeout(E,y.VV(1200*y.mv(e.wsUnsuccessfulReconnects+1),2500),e)},t.onopen=()=>{e.wsLastMessageReceived=f.ZG(),e.wsconnecting=!1,e.wsconnected=!0,e.wsUnsuccessfulReconnects=0,e.emit("status",[{status:"connected"}]);const s=u.Mf();if(u.uE(s,0),m._J(s,e.doc),t.send(u._f(s)),null!==e.awareness.getLocalState()){const s=u.Mf();u.uE(s,1),u.mP(s,p.xq(e.awareness,[e.doc.clientID])),t.send(u._f(s))}},e.emit("status",[{status:"connecting"}])}},k=(e,t)=>{e.wsconnected&&e.ws.send(t),e.bcconnected&&e.mux((()=>{d.nY(e.bcChannel,t)}))};class L extends w.y{constructor(e,t,s,{connect:n=!0,awareness:o=new p.GL(s),params:i={},WebSocketPolyfill:a=WebSocket,resyncInterval:c=-1}={}){for(super();"/"===e[e.length-1];)e=e.slice(0,e.length-1);const r=(e=>_.UI(e,((e,t)=>`${encodeURIComponent(t)}=${encodeURIComponent(e)}`)).join("&"))(i);this.bcChannel=e+"/"+t,this.url=e+"/"+t+(0===r.length?"":"?"+r),this.roomname=t,this.doc=s,this._WS=a,this.awareness=o,this.wsconnected=!1,this.wsconnecting=!1,this.bcconnected=!1,this.wsUnsuccessfulReconnects=0,this.messageHandlers=b.slice(),this.mux=g.M(),this._synced=!1,this.ws=null,this.wsLastMessageReceived=0,this.shouldConnect=n,this._resyncInterval=0,c>0&&(this._resyncInterval=setInterval((()=>{if(this.ws){const e=u.Mf();u.uE(e,0),m._J(e,s),this.ws.send(u._f(e))}}),c)),this._bcSubscriber=e=>{this.mux((()=>{const t=I(this,new Uint8Array(e),!1);u.kE(t)>1&&d.nY(this.bcChannel,u._f(t))}))},this._updateHandler=(e,t)=>{if(t!==this){const t=u.Mf();u.uE(t,0),m.lr(t,e),k(this,u._f(t))}},this.doc.on("update",this._updateHandler),this._awarenessUpdateHandler=({added:e,updated:t,removed:s},n)=>{const i=e.concat(t).concat(s),a=u.Mf();u.uE(a,1),u.mP(a,p.xq(o,i)),k(this,u._f(a))},this._beforeUnloadHandler=()=>{p.Ag(this.awareness,[s.clientID],"window unload")},"undefined"!=typeof window?window.addEventListener("beforeunload",this._beforeUnloadHandler):v.on("exit",(()=>this._beforeUnloadHandler)),o.on("update",this._awarenessUpdateHandler),this._checkInterval=setInterval((()=>{this.wsconnected&&3e4<f.ZG()-this.wsLastMessageReceived&&this.ws.close()}),3e3),n&&this.connect()}get synced(){return this._synced}set synced(e){this._synced!==e&&(this._synced=e,this.emit("synced",[e]),this.emit("sync",[e]))}destroy(){0!==this._resyncInterval&&clearInterval(this._resyncInterval),clearInterval(this._checkInterval),this.disconnect(),"undefined"!=typeof window?window.removeEventListener("beforeunload",this._beforeUnloadHandler):v.off("exit",(()=>this._beforeUnloadHandler)),this.awareness.off("update",this._awarenessUpdateHandler),this.doc.off("update",this._updateHandler),super.destroy()}connectBc(){this.bcconnected||(d.Ld(this.bcChannel,this._bcSubscriber),this.bcconnected=!0),this.mux((()=>{const e=u.Mf();u.uE(e,0),m._J(e,this.doc),d.nY(this.bcChannel,u._f(e));const t=u.Mf();u.uE(t,0),m.K0(t,this.doc),d.nY(this.bcChannel,u._f(t));const s=u.Mf();u.uE(s,3),d.nY(this.bcChannel,u._f(s));const n=u.Mf();u.uE(n,1),u.mP(n,p.xq(this.awareness,[this.doc.clientID])),d.nY(this.bcChannel,u._f(n))}))}disconnectBc(){const e=u.Mf();u.uE(e,1),u.mP(e,p.xq(this.awareness,[this.doc.clientID],new Map)),k(this,u._f(e)),this.bcconnected&&(d.r1(this.bcChannel,this._bcSubscriber),this.bcconnected=!1)}disconnect(){this.shouldConnect=!1,this.disconnectBc(),null!==this.ws&&this.ws.close()}connect(){this.shouldConnect=!0,this.wsconnected||null!==this.ws||(E(this),this.connectBc())}}var U=s(32293),M=s(70132);class S extends L{constructor(e){super(e.url,e.contentType+":"+e.path,e.ymodel.ydoc,{awareness:e.ymodel.awareness}),this._currentLockRequest=null,this._initialContentRequest=null,this._path=e.path,this._contentType=e.contentType,this._serverUrl=e.url;const t="#"+M.jS("--usercolor",a().slice(1)),s=M.jS("--username",o()),n=e.ymodel.awareness.getLocalState();n&&null==n.name&&e.ymodel.awareness.setLocalStateField("user",{name:s,color:t}),this.messageHandlers[127]=(e,t,s,n,o)=>{const i=h.Jl(t),a=this._currentLockRequest;this._currentLockRequest=null,a&&a.resolve(i)},this.messageHandlers[125]=(e,t,s,n,o)=>{const i=h.iU(t);i.byteLength>0&&setTimeout((()=>{U.NG(this.doc,i)}),0);const a=this._initialContentRequest;this._initialContentRequest=null,a&&a.resolve(i.byteLength>0)},this._isInitialized=!1,this._onConnectionStatus=this._onConnectionStatus.bind(this),this.on("status",this._onConnectionStatus)}setPath(e){if(e!==this._path){this._path=e,this.bcChannel=this._serverUrl+"/"+this._contentType+":"+this._path,this.url=this.bcChannel;const t=u.Mf();u.cW(t,123);const s=unescape(encodeURIComponent(this._contentType+":"+e));for(let e=0;e<s.length;e++)u.cW(t,s.codePointAt(e));this._sendMessage(u._f(t))}}requestInitialContent(){return this._initialContentRequest||(this._initialContentRequest=new r.PromiseDelegate,this._sendMessage(new Uint8Array([125])),setTimeout((()=>{var e;return null===(e=this._initialContentRequest)||void 0===e?void 0:e.resolve(!1)}),1e3)),this._initialContentRequest.promise}putInitializedState(){const e=u.Mf();u.uE(e,124),u.HK(e,U.D$(this.doc)),this._sendMessage(u._f(e)),this._isInitialized=!0}acquireLock(){if(this._currentLockRequest)return this._currentLockRequest.promise;this._sendMessage(new Uint8Array([127]));const e=setInterval((()=>{this.wsconnected&&this._sendMessage(new Uint8Array([127]))}),500);let t,s;const n=new Promise(((e,n)=>{t=e,s=n}));this._currentLockRequest={promise:n,resolve:t,reject:s};const o=()=>{clearInterval(e)};return n.then(o,o),n}releaseLock(e){const t=u.Mf();u.uE(t,126),u.Ep(t,e),this._sendMessage(u._f(t))}_sendMessage(e){const t=()=>{setTimeout((()=>{this.wsconnected?this.ws.send(e):this.once("status",t)}),0)};t()}async _onConnectionStatus(e){if(this._isInitialized&&"connected"===e.status){const e=await this.acquireLock();await this.requestInitialContent()||this.putInitializedState(),this.releaseLock(e)}}}},62538:(e,t,s)=>{"use strict";s.d(t,{Ld:()=>l,r1:()=>h,nY:()=>u});var n=s(23205),o=s(24803),i=s(55852);const a=new Map,c="undefined"==typeof BroadcastChannel?class{constructor(e){this.room=e,this.onmessage=null,i.z((t=>t.key===e&&null!==this.onmessage&&this.onmessage({data:o.Gh(t.newValue||"")})))}postMessage(e){i.X.setItem(this.room,o.s3(o.eh(e)))}}:BroadcastChannel,r=e=>n.Yu(a,e,(()=>{const t=new Set,s=new c(e);return s.onmessage=e=>t.forEach((t=>t(e.data))),{bc:s,subs:t}})),l=(e,t)=>r(e).subs.add(t),h=(e,t)=>r(e).subs.delete(t),u=(e,t)=>{const s=r(e);s.bc.postMessage(t),s.subs.forEach((e=>e(t)))}},70132:(e,t,s)=>{"use strict";s.d(t,{jS:()=>d,E0:()=>f,jU:()=>r,UG:()=>c});var n=s(23205),o=s(45931);var i=s(55852),a=s(34406);const c=a.release&&/node|io\.js/.test(a.release.name),r="undefined"!=typeof window&&!c;let l;"undefined"!=typeof navigator&&/Mac/.test(navigator.platform);const h=[],u=()=>{if(void 0===l)if(c){l=n.Ue();const e=a.argv;let t=null;for(let s=0;s<e.length;s++){const n=e[s];"-"===n[0]?(null!==t&&l.set(t,""),t=n):null!==t?(l.set(t,n),t=null):h.push(n)}null!==t&&l.set(t,"")}else"object"==typeof location?(l=n.Ue(),(location.search||"?").slice(1).split("&").forEach((e=>{if(0!==e.length){const[t,s]=e.split("=");l.set(`--${o.NF(t,"-")}`,s),l.set(`-${o.NF(t,"-")}`,s)}}))):l=n.Ue();return l},d=(e,t)=>u().get(e)||t,f=e=>{return void 0===(t=c?{}[e.toUpperCase()]:i.X.getItem(e))?null:t;var t};(e=>u().has(e))("--"+"production")||f("production")},23205:(e,t,s)=>{"use strict";s.d(t,{Ue:()=>n,JG:()=>o,Yu:()=>i,UI:()=>a,Yj:()=>c});const n=()=>new Map,o=e=>{const t=n();return e.forEach(((e,s)=>{t.set(s,e)})),t},i=(e,t,s)=>{let n=e.get(t);return void 0===n&&e.set(t,n=s()),n},a=(e,t)=>{const s=[];for(const[n,o]of e)s.push(t(o,n));return s},c=(e,t)=>{for(const[s,n]of e)if(t(n,s))return!0;return!1}},31955:(e,t,s)=>{"use strict";s.d(t,{M:()=>n});const n=()=>{let e=!0;return(t,s)=>{if(e){e=!1;try{t()}finally{e=!0}}else void 0!==s&&s()}}},55852:(e,t,s)=>{"use strict";s.d(t,{X:()=>i,z:()=>a});let n=new class{constructor(){this.map=new Map}setItem(e,t){this.map.set(e,t)}getItem(e){return this.map.get(e)}},o=!0;try{"undefined"!=typeof localStorage&&(n=localStorage,o=!1)}catch(e){}const i=n,a=e=>o||addEventListener("storage",e)},45931:(e,t,s)=>{"use strict";s.d(t,{IK:()=>n,NF:()=>a,lz:()=>r});const n=String.fromCharCode,o=(String.fromCodePoint,/^\s*/g),i=/([A-Z])/g,a=(e,t)=>(e=>e.replace(o,""))(e.replace(i,(e=>`${t}${(e=>e.toLowerCase())(e)}`))),c="undefined"!=typeof TextEncoder?new TextEncoder:null,r=c?e=>c.encode(e):e=>{const t=unescape(encodeURIComponent(e)),s=t.length,n=new Uint8Array(s);for(let e=0;e<s;e++)n[e]=t.codePointAt(e);return n};let l="undefined"==typeof TextDecoder?null:new TextDecoder("utf-8",{fatal:!0,ignoreBOM:!0});l&&1===l.decode(new Uint8Array).length&&(l=null)},34406:e=>{var t,s,n=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(s){try{return t.call(null,e,0)}catch(s){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{s="function"==typeof clearTimeout?clearTimeout:i}catch(e){s=i}}();var c,r=[],l=!1,h=-1;function u(){l&&c&&(l=!1,c.length?r=c.concat(r):h=-1,r.length&&d())}function d(){if(!l){var e=a(u);l=!0;for(var t=r.length;t;){for(c=r,r=[];++h<t;)c&&c[h].run();h=-1,t=r.length}c=null,l=!1,function(e){if(s===clearTimeout)return clearTimeout(e);if((s===i||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(e);try{s(e)}catch(t){try{return s.call(null,e)}catch(t){return s.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var s=1;s<arguments.length;s++)t[s-1]=arguments[s];r.push(new f(e,t)),1!==r.length||l||a(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=m,n.addListener=m,n.once=m,n.off=m,n.removeListener=m,n.removeAllListeners=m,n.emit=m,n.prependListener=m,n.prependOnceListener=m,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},6493:(e,t,s)=>{"use strict";s.d(t,{GL:()=>l,Ag:()=>h,xq:()=>u,oy:()=>d});var n=s(23406),o=s(49e3),i=s(40870),a=s(21332),c=s(75736),r=s(1872);class l extends c.y{constructor(e){super(),this.doc=e,this.clientID=e.clientID,this.states=new Map,this.meta=new Map,this._checkInterval=setInterval((()=>{const e=i.ZG();null!==this.getLocalState()&&15e3<=e-this.meta.get(this.clientID).lastUpdated&&this.setLocalState(this.getLocalState());const t=[];this.meta.forEach(((s,n)=>{n!==this.clientID&&3e4<=e-s.lastUpdated&&this.states.has(n)&&t.push(n)})),t.length>0&&h(this,t,"timeout")}),a.GW(3e3)),e.on("destroy",(()=>{this.destroy()})),this.setLocalState({})}destroy(){this.emit("destroy",[this]),this.setLocalState(null),super.destroy(),clearInterval(this._checkInterval)}getLocalState(){return this.states.get(this.clientID)||null}setLocalState(e){const t=this.clientID,s=this.meta.get(t),n=void 0===s?0:s.clock+1,o=this.states.get(t);null===e?this.states.delete(t):this.states.set(t,e),this.meta.set(t,{clock:n,lastUpdated:i.ZG()});const a=[],c=[],l=[],h=[];null===e?h.push(t):null==o?null!=e&&a.push(t):(c.push(t),r.Hi(o,e)||l.push(t)),(a.length>0||l.length>0||h.length>0)&&this.emit("change",[{added:a,updated:l,removed:h},"local"]),this.emit("update",[{added:a,updated:c,removed:h},"local"])}setLocalStateField(e,t){const s=this.getLocalState();null!==s&&this.setLocalState({...s,[e]:t})}getStates(){return this.states}}const h=(e,t,s)=>{const n=[];for(let s=0;s<t.length;s++){const o=t[s];if(e.states.has(o)){if(e.states.delete(o),o===e.clientID){const t=e.meta.get(o);e.meta.set(o,{clock:t.clock+1,lastUpdated:i.ZG()})}n.push(o)}}n.length>0&&(e.emit("change",[{added:[],updated:[],removed:n},s]),e.emit("update",[{added:[],updated:[],removed:n},s]))},u=(e,t,s=e.states)=>{const o=t.length,i=n.Mf();n.uE(i,o);for(let a=0;a<o;a++){const o=t[a],c=s.get(o)||null,r=e.meta.get(o).clock;n.uE(i,o),n.uE(i,r),n.uw(i,JSON.stringify(c))}return n._f(i)},d=(e,t,s)=>{const n=o.l1(t),a=i.ZG(),c=[],l=[],h=[],u=[],d=o.yg(n);for(let t=0;t<d;t++){const t=o.yg(n);let s=o.yg(n);const i=JSON.parse(o.kf(n)),d=e.meta.get(t),f=e.states.get(t),m=void 0===d?0:d.clock;(m<s||m===s&&null===i&&e.states.has(t))&&(null===i?t===e.clientID&&null!=e.getLocalState()?s++:e.states.delete(t):e.states.set(t,i),e.meta.set(t,{clock:s,lastUpdated:a}),void 0===d&&null!==i?c.push(t):void 0!==d&&null===i?u.push(t):null!==i&&(r.Hi(i,f)||h.push(t),l.push(t)))}(c.length>0||h.length>0||u.length>0)&&e.emit("change",[{added:c,updated:h,removed:u},s]),(c.length>0||l.length>0||u.length>0)&&e.emit("update",[{added:c,updated:l,removed:u},s])}},68078:(e,t,s)=>{"use strict";s.d(t,{Wh:()=>a,Px:()=>c,_J:()=>r,K0:()=>l,lr:()=>u,zu:()=>f});var n=s(23406),o=s(49e3),i=s(32293);const a=0,c=1,r=(e,t)=>{n.uE(e,a);const s=i.gJ(t);n.mP(e,s)},l=(e,t,s)=>{n.uE(e,c),n.mP(e,i.D$(t,s))},h=(e,t,s)=>{try{i.NG(t,o.HN(e),s)}catch(e){console.error("Caught error while handling a Yjs update",e)}},u=(e,t)=>{n.uE(e,2),n.mP(e,t)},d=h,f=(e,t,s,n)=>{const i=o.yg(e);switch(i){case a:((e,t,s)=>{l(t,s,o.HN(e))})(e,t,s);break;case c:h(e,s,n);break;case 2:d(e,s,n);break;default:throw new Error("Unknown message type")}return i}}}]);
//# sourceMappingURL=5241.7741559594bbf1eaba09.js.map