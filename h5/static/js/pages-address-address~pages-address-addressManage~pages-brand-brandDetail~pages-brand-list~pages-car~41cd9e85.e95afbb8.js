(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-address-address~pages-address-addressManage~pages-brand-brandDetail~pages-brand-list~pages-car~41cd9e85"],{"1da1":function(t,e,r){"use strict";function n(t,e,r,n,o,a,i){try{var u=t[a](i),c=u.value}catch(s){return void r(s)}u.done?e(c):Promise.resolve(c).then(n,o)}r("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function u(t){n(i,o,a,u,c,"next",t)}function c(t){n(i,o,a,u,c,"throw",t)}u(void 0)}))}},r("d3b7")},"53c4":function(t,e,r){"use strict";r("7a82");var n=r("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("d3b7"),r("e9c4"),r("c975"),r("ac1f"),r("00b4"),r("159b"),r("b64b");var o=n(r("c7eb")),a=n(r("5530")),i=n(r("1da1")),u=n(r("d4ec")),c=n(r("bee2")),s=n(r("ade3")),l=function(){function t(){var e=this;(0,u.default)(this,t),(0,s.default)(this,"config",{baseUrl:"",header:{"content-type":"application/json;charset=UTF-8"},method:"GET",dataType:"json",responseType:"text",custom:{}}),(0,s.default)(this,"interceptor",{request:function(t){t&&(e.requestBeforeFun=t)},response:function(t,r){t&&r&&(e.requestComFun=t,e.requestComFail=r)}})}return(0,c.default)(t,[{key:"requestBeforeFun",value:function(t){return t}},{key:"requestComFun",value:function(t){return t}},{key:"requestComFail",value:function(t){return t}},{key:"validateStatus",value:function(t){return 200===t}},{key:"setConfig",value:function(t){this.config=t(this.config)}},{key:"request",value:function(){var e=(0,i.default)((0,o.default)().mark((function e(){var r,n=this,i=arguments;return(0,o.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=i.length>0&&void 0!==i[0]?i[0]:{},r.baseUrl=this.config.baseUrl,r.dataType=r.dataType||this.config.dataType,r.responseType=r.responseType||this.config.responseType,r.url=r.url||"",r.data=r.data||{},r.params=r.params||{},r.header=r.header||this.config.header,r.method=r.method||this.config.method,r.custom=(0,a.default)((0,a.default)({},this.config.custom),r.custom||{}),e.abrupt("return",new Promise((function(e,o){var i=!0,u={};r.complete=function(t){t.config=u,n.validateStatus(t.statusCode)?(t=n.requestComFun(t),e(t)):(t=n.requestComFail(t),o(t))};u=(0,a.default)({},n.requestBeforeFun(r,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"handle cancel",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,n={errMsg:t,config:e};o(n),i=!1})));var c=(0,a.default)({},u);if(i){delete c.custom;var s=t.posUrl(c.url)?c.url:c.baseUrl+c.url;if("{}"!==JSON.stringify(c.params)){var l=t.addQueryString(c.params);s+=-1===s.indexOf("?")?"?".concat(l):"&".concat(l)}c.url=s,uni.request(c)}})));case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"get",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request((0,a.default)({url:t,method:"GET"},e))}},{key:"post",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,a.default)({url:t,data:e,method:"POST"},r))}},{key:"put",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,a.default)({url:t,data:e,method:"PUT"},r))}},{key:"delete",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,a.default)({url:t,data:e,method:"DELETE"},r))}},{key:"connect",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,a.default)({url:t,data:e,method:"CONNECT"},r))}},{key:"head",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,a.default)({url:t,data:e,method:"HEAD"},r))}},{key:"options",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,a.default)({url:t,data:e,method:"OPTIONS"},r))}},{key:"trace",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,a.default)({url:t,data:e,method:"TRACE"},r))}},{key:"upload",value:function(e,r){var n=this,o=r.filePath,i=r.name,u=r.header,c=r.formData,s=r.custom;return new Promise((function(r,l){var f=!0,d={},h=(0,a.default)({},n.config.header);delete h["content-type"];var v={baseUrl:n.config.baseUrl,url:e,filePath:o,method:"UPLOAD",name:i,header:u||h,formData:c,custom:(0,a.default)((0,a.default)({},n.config.custom),s||{}),complete:function(t){t.config=d,200===t.statusCode?(t=n.requestComFun(t),r(t)):(t=n.requestComFail(t),l(t))}};d=(0,a.default)({},n.requestBeforeFun(v,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"handle cancel",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v,r={errMsg:t,config:e};l(r),f=!1})));var p=(0,a.default)({},d);f&&(delete p.custom,p.url=t.posUrl(p.url)?p.url:p.baseUrl+p.url,uni.uploadFile(p))}))}}],[{key:"posUrl",value:function(t){return/(http|https):\/\/([\w.]+\/?)\S*/.test(t)}},{key:"addQueryString",value:function(t){var e="";return Object.keys(t).forEach((function(r){e+=r+"="+encodeURIComponent(t[r])+"&"})),e.substring(0,e.length-1)}}]),t}();e.default=l},c104:function(t,e,r){"use strict";r("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.USE_ALIPAY=e.API_BASE_URL=void 0;e.API_BASE_URL="http://10.118.1.217:8085";e.USE_ALIPAY=!1},c7eb:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
e.default=function(){return t};var t={},r=Object.prototype,o=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(j){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),u=new O(n||[]);return a(i,"_invoke",{value:_(t,r,u)}),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(j){return{type:"throw",arg:j}}}t.wrap=f;var h={};function v(){}function p(){}function y(){}var g={};l(g,u,(function(){return this}));var m=Object.getPrototypeOf,b=m&&m(m(T([])));b&&b!==r&&o.call(b,u)&&(g=b);var w=y.prototype=v.prototype=Object.create(g);function E(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){var r;a(this,"_invoke",{value:function(a,i){function u(){return new e((function(r,u){(function r(a,i,u,c){var s=d(t[a],t,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==(0,n.default)(f)&&o.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,u,c)}),(function(t){r("throw",t,u,c)})):e.resolve(f).then((function(t){l.value=t,u(l)}),(function(t){return r("throw",t,u,c)}))}c(s.arg)})(a,i,r,u)}))}return r=r?r.then(u,u):u()}})}function _(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return q()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var u=x(i,r);if(u){if(u===h)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=d(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function x(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator["return"]&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=d(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function T(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:q}}function q(){return{value:void 0,done:!0}}return p.prototype=y,a(w,"constructor",{value:y,configurable:!0}),a(y,"constructor",{value:p,configurable:!0}),p.displayName=l(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},E(L.prototype),l(L.prototype,c,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new L(f(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(w),l(w,s,"Generator"),l(w,u,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=T,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:T(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t},r("7a82"),r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("b636"),r("944a"),r("0c47"),r("23dc"),r("3410"),r("d9e2"),r("d401"),r("14d9"),r("159b"),r("131a"),r("26e9"),r("fb6a");var n=function(t){return t&&t.__esModule?t:{default:t}}(r("53ca"))},ecb2:function(t,e,r){"use strict";r("7a82");var n=r("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.request=c,r("d3b7");var o=n(r("5530")),a=n(r("53c4")),i=r("c104"),u=new a.default;function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return u.request(t)}u.setConfig((function(t){return t.baseUrl=i.API_BASE_URL,t.header=(0,o.default)({},t.header),t})),u.validateStatus=function(t){return 200===t},u.interceptor.request((function(t,e){var r=uni.getStorageSync("token");return t.header=r?(0,o.default)({Authorization:r},t.header):(0,o.default)({},t.header),t})),u.interceptor.response((function(t){var e=t.data;return 200!==e.code?(uni.showToast({title:e.message,duration:1500}),401===e.code&&uni.showModal({title:"Hint",content:"你已被登出，可以取消继续留在该页面，或者重新登录",confirmText:"重新登录",cancelText:"取消",success:function(t){t.confirm?uni.navigateTo({url:"/pages/public/login"}):t.cancel&&console.log("用户点击取消")}}),Promise.reject(t)):t.data}),(function(t){return console.log("response error",t),uni.showToast({title:t.errMsg,duration:1500}),Promise.reject(t)}));var s=c;e.default=s}}]);