window.PlayerControls=window.PlayerControls||{},window.PlayerControls.fullscreen=function(e){var t={};function n(r){if(t[r])return t[r].exports;var l=t[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,n),l.l=!0,l.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(r,l,function(t){return e[t]}.bind(null,l));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.util=void 0,t.createDom=a,t.hasClass=s,t.addClass=o,t.removeClass=u,t.toggleClass=c,t.findDom=f,t.padStart=p,t.format=g,t.event=d,t.typeOf=y,t.deepCopy=x,t.getBgImage=h,t.copyDom=v,t._setInterval=m,t._clearInterval=b,t.createImgBtn=w,t.isWeiXin=k,t.isUc=E,t.computeWatchDur=C,t.offInDestroy=L,t.on=O,t.once=F,t.getBuffered2=M,t.checkIsBrowser=S,t.setStyle=j;var r,l=n(3),i=(r=l)&&r.__esModule?r:{default:r};function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",l=document.createElement(e);return l.className=r,l.innerHTML=t,Object.keys(n).forEach((function(t){var r=t,i=n[t];"video"===e||"audio"===e?i&&l.setAttribute(r,i):l.setAttribute(r,i)})),l}function s(e,t){return!!e&&(e.classList?Array.prototype.some.call(e.classList,(function(e){return e===t})):!!e.className&&!!e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)")))}function o(e,t){e&&(e.classList?t.replace(/(^\s+|\s+$)/g,"").split(/\s+/g).forEach((function(t){t&&e.classList.add(t)})):s(e,t)||(e.className+=" "+t))}function u(e,t){e&&(e.classList?t.split(/\s+/g).forEach((function(t){e.classList.remove(t)})):s(e,t)&&t.split(/\s+/g).forEach((function(t){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ")})))}function c(e,t){e&&t.split(/\s+/g).forEach((function(t){s(e,t)?u(e,t):o(e,t)}))}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=arguments[1],n=void 0;try{n=e.querySelector(t)}catch(r){0===t.indexOf("#")&&(n=e.getElementById(t.slice(1)))}return n}function p(e,t,n){for(var r=String(n),l=t>>0,i=Math.ceil(l/r.length),a=[],s=String(e);i--;)a.push(r);return a.join("").substring(0,l-s.length)+s}function g(e){if(window.isNaN(e))return"";var t=p(Math.floor(e/3600),2,0),n=p(Math.floor((e-3600*t)/60),2,0),r=p(Math.floor(e-3600*t-60*n),2,0);return("00"===t?[n,r]:[t,n,r]).join(":")}function d(e){if(e.touches){var t=e.touches[0]||e.changedTouches[0];e.clientX=t.clientX||0,e.clientY=t.clientY||0,e.offsetX=t.pageX-t.target.offsetLeft,e.offsetY=t.pageY-t.target.offsetTop}e._target=e.target||e.srcElement}function y(e){return Object.prototype.toString.call(e).match(/([^\s.*]+)(?=]$)/g)[0]}function x(e,t){if("Object"===y(t)&&"Object"===y(e))return Object.keys(t).forEach((function(n){"Object"!==y(t[n])||t[n]instanceof Node?"Array"===y(t[n])?e[n]="Array"===y(e[n])?e[n].concat(t[n]):t[n]:e[n]=t[n]:e[n]?x(e[n],t[n]):e[n]=t[n]})),e}function h(e){var t=(e.currentStyle||window.getComputedStyle(e,null)).backgroundImage;if(!t||"none"===t)return"";var n=document.createElement("a");return n.href=t.replace(/url\("|"\)/g,""),n.href}function v(e){if(e&&1===e.nodeType){var t=document.createElement(e.tagName);return Array.prototype.forEach.call(e.attributes,(function(e){t.setAttribute(e.name,e.value)})),e.innerHTML&&(t.innerHTML=e.innerHTML),t}return""}function m(e,t,n,r){e._interval[t]||(e._interval[t]=setInterval(n.bind(e),r))}function b(e,t){clearInterval(e._interval[t]),e._interval[t]=null}function w(e,t,n,r){var l=a("xg-"+e,"",{},"xgplayer-"+e+"-img");if(l.style.backgroundImage='url("'+t+'")',n&&r){var i=void 0,s=void 0,o=void 0;["px","rem","em","pt","dp","vw","vh","vm","%"].every((function(e){return!(n.indexOf(e)>-1&&r.indexOf(e)>-1)||(i=Number(n.slice(0,n.indexOf(e)).trim()),s=Number(r.slice(0,r.indexOf(e)).trim()),o=e,!1)})),l.style.width=""+i+o,l.style.height=""+s+o,l.style.backgroundSize=""+i+o+" "+s+o,l.style.margin="start"===e?"-"+s/2+o+" auto auto -"+i/2+o:"auto 5px auto 5px"}return l}function k(){return window.navigator.userAgent.toLowerCase().indexOf("micromessenger")>-1}function E(){return window.navigator.userAgent.toLowerCase().indexOf("ucbrowser")>-1}function C(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=[],n=0;n<e.length;n++)if(!(!e[n].end||e[n].begin<0||e[n].end<0||e[n].end<e[n].begin))if(t.length<1)t.push({begin:e[n].begin,end:e[n].end});else for(var r=0;r<t.length;r++){var l=e[n].begin,i=e[n].end;if(i<t[r].begin){t.splice(r,0,{begin:l,end:i});break}if(!(l>t[r].end)){var a=t[r].begin,s=t[r].end;t[r].begin=Math.min(l,a),t[r].end=Math.max(i,s);break}if(r>t.length-2){t.push({begin:l,end:i});break}}for(var o=0,u=0;u<t.length;u++)o+=t[u].end-t[u].begin;return o}function L(e,t,n,r){e.once(r,(function l(){e.off(t,n),e.off(r,l)}))}function O(e,t,n,r){if(r)e.on(t,n),L(e,t,n,r);else{e.on(t,(function r(l){n(l),e.off(t,r)}))}}function F(e,t,n,r){if(r)e.once(t,n),L(e,t,n,r);else{e.once(t,(function r(l){n(l),e.off(t,r)}))}}function M(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.5,n=[],r=0;r<e.length;r++)n.push({start:e.start(r)<.5?0:e.start(r),end:e.end(r)});n.sort((function(e,t){var n=e.start-t.start;return n||t.end-e.end}));var l=[];if(t)for(var a=0;a<n.length;a++){var s=l.length;if(s){var o=l[s-1].end;n[a].start-o<t?n[a].end>o&&(l[s-1].end=n[a].end):l.push(n[a])}else l.push(n[a])}else l=n;return new i.default(l)}function S(){return!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement)}function j(e,t,n){var r=e.style;try{r[t]=n}catch(e){r.setProperty(t,n)}}t.util={createDom:a,hasClass:s,addClass:o,removeClass:u,toggleClass:c,findDom:f,padStart:p,format:g,event:d,typeOf:y,deepCopy:x,getBgImage:h,copyDom:v,setInterval:m,clearInterval:b,createImgBtn:w,isWeiXin:k,isUc:E,computeWatchDur:C,offInDestroy:L,on:O,once:F,getBuffered2:M,checkIsBrowser:S,setStyle:j}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(2)),l=i(n(4));function i(e){return e&&e.__esModule?e:{default:e}}t.default={name:"fullscreen",method:function(){r.default.method.call(this),l.default.method.call(this)}},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default={name:"fullscreen",method:function(){var e=this,t=e.root;function n(){e.config.rotateFullscreen?(0,r.hasClass)(t,"xgplayer-rotate-fullscreen")?e.exitRotateFullscreen():e.getRotateFullscreen():(0,r.hasClass)(t,"xgplayer-is-fullscreen")?e.exitFullscreen(t):e.getFullscreen(t)}function l(){var n=document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement;n&&n===t?((0,r.addClass)(t,"xgplayer-is-fullscreen"),e.emit("requestFullscreen")):(0,r.hasClass)(t,"xgplayer-is-fullscreen")&&((0,r.removeClass)(t,"xgplayer-is-fullscreen"),e.emit("exitFullscreen")),e.danmu&&"function"==typeof e.danmu.resize&&e.danmu.resize()}e.on("fullscreenBtnClick",n),["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"].forEach((function(e){document.addEventListener(e,l)})),e.video.addEventListener("webkitbeginfullscreen",(function(){(0,r.addClass)(t,"xgplayer-is-fullscreen"),e.emit("requestFullscreen")})),e.video.addEventListener("webkitendfullscreen",(function(){(0,r.removeClass)(t,"xgplayer-is-fullscreen"),e.emit("exitFullscreen")})),e.once("destroy",(function t(){e.off("fullscreenBtnClick",n),["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"].forEach((function(e){document.removeEventListener(e,l)})),e.off("destroy",t)})),e.getFullscreen=function(e){var t=this;if(e.requestFullscreen){var n=e.requestFullscreen();n&&n.catch((function(){t.emit("fullscreen error")}))}else e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen(window.Element.ALLOW_KEYBOARD_INPUT):t.video.webkitSupportsFullscreen?t.video.webkitEnterFullscreen():e.msRequestFullscreen?e.msRequestFullscreen():(0,r.addClass)(e,"xgplayer-is-cssfullscreen")},e.exitFullscreen=function(e){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen(),(0,r.removeClass)(e,"xgplayer-is-cssfullscreen")},e.getRotateFullscreen=function(){document.documentElement.style.width="100%",document.documentElement.style.height="100%",this.config.fluid&&(this.root.style["padding-top"]="",this.root.style["max-width"]="unset"),this.root&&!(0,r.hasClass)(this.root,"xgplayer-rotate-fullscreen")&&(0,r.addClass)(this.root,"xgplayer-rotate-fullscreen"),this.emit("getRotateFullscreen")},e.exitRotateFullscreen=function(){document.documentElement.style.width="unset",document.documentElement.style.height="unset",this.config.fluid&&(this.root.style.width="100%",this.root.style.height="0",this.root.style["padding-top"]=100*this.config.height/this.config.width+"%",this.root.style["max-width"]="100%"),this.root&&(0,r.hasClass)(this.root,"xgplayer-rotate-fullscreen")&&(0,r.removeClass)(this.root,"xgplayer-rotate-fullscreen"),this.emit("exitRotateFullscreen")}}},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.bufferedList=t}return r(e,[{key:"start",value:function(e){return this.bufferedList[e].start}},{key:"end",value:function(e){return this.bufferedList[e].end}},{key:"length",get:function(){return this.bufferedList.length}}]),e}();t.default=l,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),l=a(n(5)),i=a(n(6));function a(e){return e&&e.__esModule?e:{default:e}}n(7);t.default={name:"s_fullscreen",method:function(){var e=this,t=e.config.fullscreenBtn?e.config.fullscreenBtn:{},n=void 0;n="img"===t.type?(0,r.createImgBtn)("fullscreen",t.url.request,t.width,t.height):(0,r.createDom)("xg-fullscreen",'<xg-icon class="xgplayer-icon">\n                                             <div class="xgplayer-icon-requestfull">'+l.default+'</div>\n                                             <div class="xgplayer-icon-exitfull">'+i.default+"</div>\n                                           </xg-icon>",{},"xgplayer-fullscreen");var a={};a.requestfull=e.lang.FULLSCREEN_TIPS,a.exitfull=e.lang.EXITFULLSCREEN_TIPS;var s=(0,r.createDom)("xg-tips",'<span class="xgplayer-tip-requestfull">'+a.requestfull+'</span>\n                                        <span class="xgplayer-tip-exitfull">'+a.exitfull+"</span>",{},"xgplayer-tips");n.appendChild(s),e.once("ready",(function(){e.controls&&e.controls.appendChild(n)})),["click","touchend"].forEach((function(t){n.addEventListener(t,(function(t){t.preventDefault(),t.stopPropagation(),e.userGestureTrigEvent("fullscreenBtnClick")}))}))}},e.exports=t.default},function(e,t,n){"use strict";n.r(t),t.default='<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">\n  <path transform="scale(0.0320625 0.0320625)" d="M598 214h212v212h-84v-128h-128v-84zM726 726v-128h84v212h-212v-84h128zM214 426v-212h212v84h-128v128h-84zM298 598v128h128v84h-212v-212h84z"></path>\n</svg>\n'},function(e,t,n){"use strict";n.r(t),t.default='<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">\n  <path transform="scale(0.0320625 0.0320625)" d="M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z"></path>\n</svg>\n'},function(e,t,n){var r=n(8);"string"==typeof r&&(r=[[e.i,r,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(10)(r,l);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(9)(!1)).push([e.i,".xgplayer-skin-default .xgplayer-fullscreen,.xgplayer-skin-default .xgplayer-fullscreen-img{position:relative;-webkit-order:13;-moz-box-ordinal-group:14;order:13;display:block;cursor:pointer;margin-left:5px;margin-right:3px}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-icon,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-icon{margin-top:3px}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-icon div,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-icon .xgplayer-icon-requestfull,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-icon .xgplayer-icon-requestfull{display:block}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-icon .xgplayer-icon-exitfull,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-icon .xgplayer-icon-exitfull{display:none}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-tips,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-tips{position:absolute;right:0;left:auto}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-tips .xgplayer-tip-requestfull,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-tips .xgplayer-tip-requestfull{display:block}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-tips .xgplayer-tip-exitfull,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-tips .xgplayer-tip-exitfull{display:none}.xgplayer-skin-default .xgplayer-fullscreen-img:hover,.xgplayer-skin-default .xgplayer-fullscreen:hover{opacity:.85}.xgplayer-skin-default .xgplayer-fullscreen-img:hover .xgplayer-tips,.xgplayer-skin-default .xgplayer-fullscreen:hover .xgplayer-tips{display:block}.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen-img .xgplayer-icon .xgplayer-icon-requestfull,.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen .xgplayer-icon .xgplayer-icon-requestfull,.xgplayer-skin-default.xgplayer-rotate-fullscreen .xgplayer-fullscreen-img .xgplayer-icon .xgplayer-icon-requestfull,.xgplayer-skin-default.xgplayer-rotate-fullscreen .xgplayer-fullscreen .xgplayer-icon .xgplayer-icon-requestfull{display:none}.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen-img .xgplayer-icon .xgplayer-icon-exitfull,.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen .xgplayer-icon .xgplayer-icon-exitfull,.xgplayer-skin-default.xgplayer-rotate-fullscreen .xgplayer-fullscreen-img .xgplayer-icon .xgplayer-icon-exitfull,.xgplayer-skin-default.xgplayer-rotate-fullscreen .xgplayer-fullscreen .xgplayer-icon .xgplayer-icon-exitfull{display:block}.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen-img .xgplayer-tips .xgplayer-tip-requestfull,.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen .xgplayer-tips .xgplayer-tip-requestfull,.xgplayer-skin-default.xgplayer-rotate-fullscreen .xgplayer-fullscreen-img .xgplayer-tips .xgplayer-tip-requestfull,.xgplayer-skin-default.xgplayer-rotate-fullscreen .xgplayer-fullscreen .xgplayer-tips .xgplayer-tip-requestfull{display:none}.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen-img .xgplayer-tips .xgplayer-tip-exitfull,.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen .xgplayer-tips .xgplayer-tip-exitfull,.xgplayer-skin-default.xgplayer-rotate-fullscreen .xgplayer-fullscreen-img .xgplayer-tips .xgplayer-tip-exitfull,.xgplayer-skin-default.xgplayer-rotate-fullscreen .xgplayer-fullscreen .xgplayer-tips .xgplayer-tip-exitfull{display:block}",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var l=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}));return[n].concat(i).concat([l]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},l=0;l<this.length;l++){var i=this[l][0];"number"==typeof i&&(r[i]=!0)}for(l=0;l<e.length;l++){var a=e[l];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var r,l,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===l&&(l=r.apply(this,arguments)),l}),s=function(e){return document.querySelector(e)},o=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=s.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),u=null,c=0,f=[],p=n(11);function g(e,t){for(var n=0;n<e.length;n++){var r=e[n],l=i[r.id];if(l){l.refs++;for(var a=0;a<l.parts.length;a++)l.parts[a](r.parts[a]);for(;a<r.parts.length;a++)l.parts.push(m(r.parts[a],t))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(m(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:s}}}}function d(e,t){for(var n=[],r={},l=0;l<e.length;l++){var i=e[l],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function y(e,t){var n=o(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),f.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var l=o(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,l)}}function x(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=f.indexOf(e);t>=0&&f.splice(t,1)}function h(e){var t=document.createElement("style");return e.attrs.type="text/css",v(t,e.attrs),y(e,t),t}function v(e,t){Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])}))}function m(e,t){var n,r,l,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var a=c++;n=u||(u=h(t)),r=k.bind(null,n,a,!1),l=k.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",v(t,e.attrs),y(e,t),t}(t),r=C.bind(null,n,t),l=function(){x(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(t),r=E.bind(null,n),l=function(){x(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else l()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=d(e,t);return g(n,t),function(e){for(var r=[],l=0;l<n.length;l++){var a=n[l];(s=i[a.id]).refs--,r.push(s)}e&&g(d(e,t),t);for(l=0;l<r.length;l++){var s;if(0===(s=r[l]).refs){for(var o=0;o<s.parts.length;o++)s.parts[o]();delete i[s.id]}}}};var b,w=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function k(e,t,n,r){var l=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,l);else{var i=document.createTextNode(l),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function E(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function C(e,t,n){var r=n.css,l=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&l;(t.convertToAbsoluteUrls||i)&&(r=p(r)),l&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(l))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var l,i=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(l=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(l)+")")}))}}]);