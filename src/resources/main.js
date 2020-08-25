!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t){e.exports=jQuery},function(e,t){e.exports=Craft},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._events=new Map}return r(e,[{key:"on",value:function(e,t){this._events.has(e)||this._events.set(e,[]),this._events.get(e).push(t)}},{key:"off",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(this._events)if(t&&this._events.has(e)){var n=this._events.get(e).filter(function(e){return e!==t});n.length>0?this._events.set(e,n):this._events.delete(e)}else this._events.delete(e)}},{key:"trigger",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._events&&this._events.has(e)&&(n=Object.assign(n,{type:e}),this._events.get(e).forEach(function(e){return e.call(t,n)}))}}]),e}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.monkeypatch=function(e,t,n){var r=e.prototype[t];e.prototype[t]=function(){r.apply(this,arguments),n.call(this)}},t.uniqueId=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"uid")+Math.random().toString(36).substr(2)+r++},t.isUrl=function(e){return/^https?:\/\//.test(e)};var r=0},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(r),o=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(o).concat([i]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(i=0;i<e.length;i++){var s=e[i];null!=s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){var r={},i=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),o=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),s=null,a=0,u=[],d=n(6);function l(e,t){for(var n=0;n<e.length;n++){var i=e[n],o=r[i.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](i.parts[s]);for(;s<i.parts.length;s++)o.parts.push(v(i.parts[s],t))}else{var a=[];for(s=0;s<i.parts.length;s++)a.push(v(i.parts[s],t));r[i.id]={id:i.id,refs:1,parts:a}}}}function f(e,t){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],s=t.base?o[0]+t.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function c(e,t){var n=o(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),u.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=o(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,i)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function p(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),m(t,e.attrs),c(e,t),t}function m(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function v(e,t){var n,r,i,o;if(t.transform&&e.css){if(!(o=t.transform(e.css)))return function(){};e.css=o}if(t.singleton){var u=a++;n=s||(s=p(t)),r=b.bind(null,n,u,!1),i=b.bind(null,n,u,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",m(t,e.attrs),c(e,t),t}(t),r=function(e,t,n){var r=n.css,i=n.sourceMap,o=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||o)&&(r=d(r)),i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,t),i=function(){h(n),n.href&&URL.revokeObjectURL(n.href)}):(n=p(t),r=function(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){h(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=f(e,t);return l(n,t),function(e){for(var i=[],o=0;o<n.length;o++){var s=n[o];(a=r[s.id]).refs--,i.push(a)}for(e&&l(f(e,t),t),o=0;o<i.length;o++){var a;if(0===(a=i[o]).refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete r[a.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function b(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var i,o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(e,t){e.exports=Garnish},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=d(n(0)),o=d(n(1)),s=d(n(7)),a=d(n(2)),u=n(3);function d(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this)),n=(0,u.uniqueId)();return e.$element=(0,i.default)('\n      <div class="embedded-assets_preview">\n        <iframe id="'+n+'" src="about:blank"></iframe>\n      </div>\n    '),e.$iframe=e.$element.find("#"+n),e._setupHeightMonitor(),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default),r(t,[{key:"destroy",value:function(){this.$element.remove(),this.$element=null,this._$warningTrigger&&(this._$warningTrigger.remove(),this._$warningTrigger=null),this._warningHud&&(this._warningHud.hide(),this._warningHud.$hud.remove(),this._warningHud.$shade.remove(),this._warningHud=null),window.cancelAnimationFrame(this._heightMonitor),clearTimeout(this._requestTimeout),this.trigger("destroy")}},{key:"getWindow",value:function(){return this.$iframe[0].contentWindow}},{key:"getDocument",value:function(){var e=this.getWindow();return e?e.document:null}},{key:"getBody",value:function(){var e=this.getDocument();return e?e.body:null}},{key:"showWarning",value:function(){var e=this,t=(0,i.default)(this.getWindow()),n=(0,i.default)(this.getDocument()).find("#warning");if(n.length>0){var r=this.$iframe.offset(),a=r.top,u=r.left,d=t.scrollTop(),l=n.offset(),f=a-d+l.top,c=u+l.left,h=n.outerWidth(),p=n.outerHeight();if(this._$warningTrigger||(this._$warningTrigger=(0,i.default)("<div>").css({position:"absolute",display:"none"}),s.default.$bod.append(this._$warningTrigger)),this._$warningTrigger.css({display:"block",top:f+"px",left:c+"px",width:h+"px",height:p+"px"}),this._warningHud)this._warningHud.show();else{var m=o.default.t("embeddedassets","This information is coming from an untrusted source."),v=o.default.t("embeddedassets","As a security measure embed codes will not be shown."),g=(0,i.default)("\n          <p><strong>"+m+"</strong></p>\n          <p>"+v+"</p>\n        ");this._warningHud=new s.default.HUD(this._$warningTrigger,g,{hudClass:"hud info-hud",closeOtherHUDs:!1,onHide:function(){return e._$warningTrigger.css("display","none")}})}}}},{key:"request",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15e3;t=Object.assign({url:null,assetId:null,showContent:!0,callback:(0,u.uniqueId)("embeddedassets")},t);var r=this.getWindow();if(r){clearTimeout(this._requestTimeout);var i="about:blank";if(Boolean(t.url||t.assetId)){var s=function(n){clearTimeout(e._requestTimeout),delete window[t.callback],e.trigger(n,a)};window[t.callback]=function(){e._setupWarning(),s("load")},this._requestTimeout=setTimeout(function(){return s("timeout")},n);var a={showContent:t.showContent?1:0,callback:t.callback};t.url?a.url=t.url:t.assetId&&(a.assetId=t.assetId),i=o.default.getActionUrl("embeddedassets/actions/preview",a)}r.location.replace(i)}}},{key:"_setupHeightMonitor",value:function(){var e=this;this._height=0,function t(){var n=(0,i.default)(e.getBody()).height()||0;e._height!==n&&(e.trigger("resize",{prevHeight:e._height,height:n}),e._height=n),e._heightMonitor=window.requestAnimationFrame(t)}()}},{key:"_setupWarning",value:function(){var e=this,t=(0,i.default)(this.getDocument()).find("#warning");t.length>0&&(t.off(".embeddedassets"),t.on("click.embeddedassets",function(){return e.showWarning()}))}}]),t}();t.default=l},function(e,t,n){"use strict";n(10);var r=d(n(0)),i=d(n(1)),o=d(n(12)),s=d(n(15)),a=d(n(8)),u=n(3);function d(e){return e&&e.__esModule?e:{default:e}}var l=new o.default;(0,u.monkeypatch)(i.default.AssetIndex,"init",function(){var e=this,t=new s.default("Embed"),n=new s.default("Replace"),i=this.$uploadButton,o=i.closest("#header").length>0,a=i.closest(".modal").length>0,u=void 0;o?(this.$uploadButton.before(t.$element),this.$uploadButton.before(n.$element),u=["bottom","left","right","top"]):a&&(this.$uploadButton.after(t.$element),this.$uploadButton.after(n.$element),u=["top","right","bottom","left"]);var d=function(e,t){"string"==typeof t&&(t=[t]),t&&t.length>0&&-1===t.indexOf("json")?e.hide():e.show()};d(t,this.settings.criteria.kind),n.hide();var f=function(){var t=e.sourceKey.split(":");return t[t.length-1]?t[t.length-1]:0};l.addButton(t,u,f),l.addButton(n,u,f,!0);var c=[];l.on("save",function(t){c.push(t.assetId),e.updateElements()}),this.on("updateElements",function(){c.forEach(function(t){return e.view.selectElementById(t)}),c=[],d(t,e.settings.criteria.kind),n.hide()}),this.on("selectionChange",function(i){var o=i.target.view.elementSelect.$selectedItems;o.length&&1===o.length&&(0,r.default)(o[0]).find("[data-embedded-asset]").length?(t.hide(),n.show(),l.setReplaceAssetId(o[0].attributes["data-id"].value)):(d(t,e.settings.criteria.kind),n.hide())})}),(0,u.monkeypatch)(i.default.AssetEditor,"updateForm",function(){var e=this.$element.attr("data-id"),t=this.$element.attr("data-embedded-asset");if(e&&void 0!==t){"string"==typeof t&&(t="56.25"),this.$fieldsContainer.find(".preview-thumb-container").remove();var n=new a.default,r=Math.min(t||100,75)+"%";n.$element.css({paddingTop:r}),this.$fieldsContainer.find(".field.first").before(n.$element),window.requestAnimationFrame(function(){return n.request({assetId:e,showContent:!1})})}}),window.EmbeddedAssets=l},function(e,t,n){var r=n(11);"string"==typeof r&&(r=[[e.i,r,""]]);n(5)(r,{hmr:!0,transform:void 0,insertInto:void 0}),r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(4)(!1)).push([e.i,"#header .embedded-assets_button {\n  position: relative;\n  overflow: hidden;\n  margin-right: 7px; }\n\n.embedded-assets_form_field {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  padding: 0 24px;\n  box-shadow: 0 1px rgba(0, 0, 20, 0.1); }\n  .embedded-assets_form_field > label,\n  .embedded-assets_form_field > input {\n    padding: 22px 0;\n    font-size: 14px;\n    line-height: 20px; }\n  .embedded-assets_form_field > label {\n    order: 1;\n    padding-right: 14px;\n    font-weight: normal;\n    color: #8f98a3;\n    cursor: text;\n    user-select: none; }\n  .embedded-assets_form_field > input {\n    order: 2;\n    flex: 1;\n    box-sizing: border-box;\n    display: block;\n    border-radius: 0;\n    border: 0;\n    background: transparent;\n    color: #29323d;\n    appearance: none;\n    outline: 0; }\n\n.embedded-assets_form_body {\n  position: relative;\n  overflow: hidden;\n  transition: height 0.3s; }\n  .embedded-assets_form_body > .embedded-assets_preview,\n  .embedded-assets_form_body > .spinner {\n    opacity: 0;\n    transition: opacity 0.3s; }\n  .embedded-assets_form_body > .embedded-assets_preview {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0; }\n  .embedded-assets_form_body > .spinner {\n    pointer-events: none;\n    position: absolute;\n    top: 47.5px;\n    left: 50%;\n    transform: translate(-50%, -50%); }\n  .embedded-assets_form[data-state='idle'] .embedded-assets_form_body {\n    height: 0 !important; }\n  .embedded-assets_form[data-state='requesting'] .embedded-assets_form_body {\n    height: 95px !important; }\n    .embedded-assets_form[data-state='requesting'] .embedded-assets_form_body > .spinner {\n      opacity: 1; }\n  .embedded-assets_form[data-state='requested'] .embedded-assets_form_body,\n  .embedded-assets_form[data-state='saving'] .embedded-assets_form_body {\n    height: 300px; }\n    .embedded-assets_form[data-state='requested'] .embedded-assets_form_body > .embedded-assets_preview,\n    .embedded-assets_form[data-state='saving'] .embedded-assets_form_body > .embedded-assets_preview {\n      opacity: 1; }\n\n.embedded-assets_preview {\n  position: relative; }\n  .embedded-assets_preview > iframe {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100% !important;\n    height: 100% !important; }\n  .elementeditor .embedded-assets_preview {\n    margin-top: -8px;\n    margin-bottom: 8px;\n    background-color: #f2f5f8; }\n    .elementeditor .embedded-assets_preview::after {\n      content: '';\n      display: block;\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      height: 1px;\n      background-color: rgba(0, 0, 20, 0.1); }\n\n.embedded-assets_hud_main {\n  transition: padding-bottom 0.3s; }\n\n.embedded-assets_hud_footer {\n  position: absolute !important;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  transform: translateY(100%);\n  transition: transform 0.3s; }\n\n.embedded-assets_hud.show-footer .embedded-assets_hud_main {\n  padding-bottom: 46px; }\n\n.embedded-assets_hud.show-footer .embedded-assets_hud_footer {\n  opacity: 1;\n  transform: none; }\n\n.embedded-assets_label {\n  display: block;\n  line-height: 16px;\n  white-space: nowrap; }\n  .embedded-assets_label > img {\n    display: inline-block;\n    width: 16px;\n    height: 16px;\n    margin-right: 10px;\n    vertical-align: middle;\n    object-fit: contain; }\n\n.elementeditor .image-preview > img {\n  max-width: 380px;\n  max-height: 190px; }\n",""])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=s(n(2)),o=s(n(13));function s(e){return e&&e.__esModule?e:{default:e}}var a=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e._currentGetFolderId=function(){return-1},e.modal=new o.default(function(){return e._getFolderId()}),e.buttons=[],e.modal.on("hide",function(){return e.buttons.forEach(function(e){return e.setActive(!1)})}),e.modal.on("save",function(t){return e.trigger("save",t)}),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default),r(t,[{key:"destroy",value:function(){this.modal.destroy(),this.modal=null,this.trigger("destroy")}},{key:"setReplaceAssetId",value:function(e){this._replaceAssetId=e}},{key:"addButton",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["bottom","top","left","right"],n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return-1},i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.buttons.push(e),e.$element.on("click",function(){n.modal&&(n._currentGetFolderId=r,n.buttons.forEach(function(t){return t.setActive(t===e)}),n.modal.show(e.$element,{orientations:t},i),n.modal.form.setReplace(i,n._replaceAssetId))}),this.trigger("addButton",{button:e})}},{key:"removeButton",value:function(e){this.buttons=this.buttons.filter(function(t){return t!==e}),this.trigger("removeButton",{button:e})}},{key:"_getFolderId",value:function(){return this._currentGetFolderId()}}]),t}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=l(n(0)),o=l(n(1)),s=l(n(7)),a=l(n(2)),u=l(n(14)),d=n(3);function l(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){return-1};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n._getFolderId=e,n.form=null,n.hud=null,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default),r(t,[{key:"create",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n=Object.assign({hudClass:"hud embedded-assets_hud",mainClass:"embedded-assets_hud_main",minBodyWidth:400},n);var r=(0,d.uniqueId)(),a=(0,d.uniqueId)(),l=(0,d.uniqueId)(),f=o.default.t("app","Cancel"),c=o.default.t("app","Save");this.$footer=(0,i.default)('\n      <div class="hud-footer embedded-assets_hud_footer">\n        <div class="buttons right">\n          <div id="'+r+'" class="btn">'+f+'</div>\n          <div id="'+a+'" class="btn submit">'+c+'</div>\n          <div id="'+l+'" class="spinner hidden"></div>\n        </div>\n      </div>\n    '),this.$cancel=this.$footer.find("#"+r),this.$save=this.$footer.find("#"+a),this.$spinner=this.$footer.find("#"+l),this.form=new u.default(this._getFolderId),this.hud=new s.default.HUD(e,this.form.$element.add(this.$footer),n),this.trigger("create"),this.$save.on("click",function(e){return t.$save.hasClass("disabled")&&e.stopImmediatePropagation()}),this.$cancel.on("click",function(){return t.form.clear()}),this.$save.on("click",function(){return t.form.save()}),this.form.on("submit",function(){return t.form.save()}),this.form.on("save",function(e){return t.trigger("save",e)}),this.hud.on("show",function(){return t.trigger("show")}),this.hud.on("hide",function(){return t.trigger("hide")}),this.form.on("clear",function(){return t.hide()}),this.form.on("save",function(){return t.hide()}),this.hud.on("show",function(){return t.form.request()}),this.hud.on("show",function(){return t.form.focus()}),this.hud.on("hide",function(){return t.form.setState("idle")}),this.hideFooter(),this.form.on("idle",function(){return t.hideFooter()}),this.form.on("requesting",function(){return t.hideFooter()}),this.form.on("requested",function(){return t.showFooter()}),this.form.on("idle",function(){return t.setSaving(!1)}),this.form.on("requesting",function(){return t.setSaving(!1)}),this.form.on("requested",function(){return t.setSaving(!1)}),this.form.on("saving",function(){return t.setSaving()}),this.form.on("resize",function(){return t.hud.updateSizeAndPosition()})}},{key:"destroy",value:function(){this.$footer&&(this.$footer.remove(),this.$footer=null),this.form&&(this.form.destroy(),this.form=null),this.hud&&(this.hud.hide(),this.hud.$hud.remove(),this.hud.$shade.remove(),this.hud=null),window.cancelAnimationFrame(this._monitor),this.trigger("destroy")}},{key:"show",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};arguments[2],this.hud?(this.hud.setSettings(t),this.hud.$trigger=(0,i.default)(e),this.hud.showing?this.hud.queueUpdateSizeAndPosition():this.hud.show()):(this.create(e,t),this.form.focus()),this.trigger("show")}},{key:"hide",value:function(){this.hud&&this.hud.hide(),this.trigger("hide")}},{key:"hideFooter",value:function(){this.hud&&this.hud.$hud.removeClass("show-footer")}},{key:"showFooter",value:function(){this.hud&&this.hud.$hud.addClass("show-footer")}},{key:"setSaving",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$save.toggleClass("disabled",e),this.$spinner.toggleClass("hidden",!e)}}]),t}();t.default=f},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=d(n(0)),o=d(n(1)),s=d(n(2)),a=d(n(8)),u=n(3);function d(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){return-1};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));n._getFolderId=e;var r=(0,u.uniqueId)(),s=(0,u.uniqueId)(),d=o.default.getActionUrl("embeddedassets/actions/save");return n.$element=(0,i.default)('\n      <form class="embedded-assets_form" action="'+d+'" method="post">\n        <div class="embedded-assets_form_field">\n          <label for="'+r+'">URL</label>\n          <input type="text" placeholder="http://" id="'+r+'" name="url" autocomplete="off" spellcheck="false">\n        </div>\n        <div id="'+s+'" class="embedded-assets_form_body">\n          <div class="spinner"></div>\n        </div>\n      </form>\n    '),n.$input=n.$element.find("#"+r),n.$body=n.$element.find("#"+s),n.preview=new a.default,n.$body.prepend(n.preview.$element),n.preview.on("load",function(e){e.url===n._url&&"requesting"===n._state&&n.setState("requested")}),n.preview.on("timeout",function(e){e.url===n._url&&"requesting"===n._state&&(o.default.cp.displayError(o.default.t("embeddedassets","Could not retrieve embed information.")),n.setState("idle"))}),n.preview.on("resize",function(e){return n.$body.css("height",e.height+"px")}),n.$element.on("submit",function(e){e.preventDefault();var t=n._url===n.$input.val();"idle"===n._state||"saving"!==n._state&&!t?n.request():"requested"===n._state&&t&&n.save()}),n.$input.on("change blur",function(){return n.request()}),n.$input.on("paste",function(e){var t=(e.clipboardData||e.originalEvent.clipboardData||window.clipboardData).getData("text");n.request(t)}),n._setupHeightMonitor(),n.setState("idle"),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.default),r(t,[{key:"destroy",value:function(){this.preview.destroy(),this.$element.remove(),this.$element=null,this.$input=null,this.$body=null,window.cancelAnimationFrame(this._heightMonitor),this.trigger("destroy")}},{key:"request",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.$input.val();"saving"!==this._state&&this._url!==e&&(this._url=e,(0,u.isUrl)(e)?(this.setState("requesting"),this.preview.request({url:e})):this.setState("idle"))}},{key:"focus",value:function(){this.$input[0].select(),this.$input[0].focus()}},{key:"clear",value:function(){this.$input.val(""),this.trigger("clear"),this.setState("idle")}},{key:"setReplace",value:function(e,t){this._replace=e,this._replaceAssetId=t}},{key:"save",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.$input.val(),n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._getFolderId(),r=this._replaceAssetId;o.default.queueActionRequest("embeddedassets/actions/"+(this._replace?"replace":"save"),{url:t,folderId:n,assetId:r},function(t,n){"saving"===e._state&&"success"===n&&t.success?(e.clear(),e.trigger("save",t.payload)):(t&&t.error&&o.default.cp.displayError(t.error),e.setState("requested"))}),this.setState("saving")}},{key:"setState",value:function(e){switch(this._state=e,this.$element.attr("data-state",e),e){case"idle":this._url="",this.trigger("idle");break;case"requesting":this.trigger("requesting");break;case"requested":this.trigger("requested");break;case"saving":this.trigger("saving")}}},{key:"_setupHeightMonitor",value:function(){var e=this;this._height=0,function t(){var n=e.$element.height();e._height!==n&&(e.trigger("resize",{prevHeight:e._height,height:n}),e._height=n),e._heightMonitor=window.requestAnimationFrame(t)}()}}]),t}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=s(n(0)),o=s(n(1));function s(e){return e&&e.__esModule?e:{default:e}}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$element=(0,i.default)('<div class="embedded-assets_button btn" data-icon="globe"></div>'),this.setLabel(t)}return r(e,[{key:"destroy",value:function(){this.$element.remove(),this.$element=null}},{key:"setLabel",value:function(e){this.$element.text(o.default.t("embeddedassets",e))}},{key:"show",value:function(){this.$element.show()}},{key:"hide",value:function(){this.$element.hide()}},{key:"setActive",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$element.toggleClass("active",e)}}]),e}();t.default=a}]);