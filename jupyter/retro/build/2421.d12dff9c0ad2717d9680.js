(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[2421],{5528:(n,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>s});var e=t(94015),o=t.n(e),c=t(23645),i=t.n(c)()(o());i.push([n.id,"/* Loosely based on the Midnight Textmate theme */\n\n.cm-s-night.CodeMirror { background: #0a001f; color: #f8f8f8; }\n.cm-s-night div.CodeMirror-selected { background: #447; }\n.cm-s-night .CodeMirror-line::selection, .cm-s-night .CodeMirror-line > span::selection, .cm-s-night .CodeMirror-line > span > span::selection { background: rgba(68, 68, 119, .99); }\n.cm-s-night .CodeMirror-line::-moz-selection, .cm-s-night .CodeMirror-line > span::-moz-selection, .cm-s-night .CodeMirror-line > span > span::-moz-selection { background: rgba(68, 68, 119, .99); }\n.cm-s-night .CodeMirror-gutters { background: #0a001f; border-right: 1px solid #aaa; }\n.cm-s-night .CodeMirror-guttermarker { color: white; }\n.cm-s-night .CodeMirror-guttermarker-subtle { color: #bbb; }\n.cm-s-night .CodeMirror-linenumber { color: #f8f8f8; }\n.cm-s-night .CodeMirror-cursor { border-left: 1px solid white; }\n\n.cm-s-night span.cm-comment { color: #8900d1; }\n.cm-s-night span.cm-atom { color: #845dc4; }\n.cm-s-night span.cm-number, .cm-s-night span.cm-attribute { color: #ffd500; }\n.cm-s-night span.cm-keyword { color: #599eff; }\n.cm-s-night span.cm-string { color: #37f14a; }\n.cm-s-night span.cm-meta { color: #7678e2; }\n.cm-s-night span.cm-variable-2, .cm-s-night span.cm-tag { color: #99b2ff; }\n.cm-s-night span.cm-variable-3, .cm-s-night span.cm-def, .cm-s-night span.cm-type { color: white; }\n.cm-s-night span.cm-bracket { color: #8da6ce; }\n.cm-s-night span.cm-builtin, .cm-s-night span.cm-special { color: #ff9e59; }\n.cm-s-night span.cm-link { color: #845dc4; }\n.cm-s-night span.cm-error { color: #9d1e15; }\n\n.cm-s-night .CodeMirror-activeline-background { background: #1C005A; }\n.cm-s-night .CodeMirror-matchingbracket { outline:1px solid grey; color:white !important; }\n","",{version:3,sources:["webpack://./../../node_modules/codemirror/theme/night.css"],names:[],mappings:"AAAA,iDAAiD;;AAEjD,yBAAyB,mBAAmB,EAAE,cAAc,EAAE;AAC9D,sCAAsC,gBAAgB,EAAE;AACxD,iJAAiJ,kCAAkC,EAAE;AACrL,gKAAgK,kCAAkC,EAAE;AACpM,kCAAkC,mBAAmB,EAAE,4BAA4B,EAAE;AACrF,uCAAuC,YAAY,EAAE;AACrD,8CAA8C,WAAW,EAAE;AAC3D,qCAAqC,cAAc,EAAE;AACrD,iCAAiC,4BAA4B,EAAE;;AAE/D,8BAA8B,cAAc,EAAE;AAC9C,2BAA2B,cAAc,EAAE;AAC3C,4DAA4D,cAAc,EAAE;AAC5E,8BAA8B,cAAc,EAAE;AAC9C,6BAA6B,cAAc,EAAE;AAC7C,2BAA2B,cAAc,EAAE;AAC3C,0DAA0D,cAAc,EAAE;AAC1E,oFAAoF,YAAY,EAAE;AAClG,8BAA8B,cAAc,EAAE;AAC9C,2DAA2D,cAAc,EAAE;AAC3E,2BAA2B,cAAc,EAAE;AAC3C,4BAA4B,cAAc,EAAE;;AAE5C,gDAAgD,mBAAmB,EAAE;AACrE,0CAA0C,sBAAsB,EAAE,sBAAsB,EAAE",sourcesContent:["/* Loosely based on the Midnight Textmate theme */\n\n.cm-s-night.CodeMirror { background: #0a001f; color: #f8f8f8; }\n.cm-s-night div.CodeMirror-selected { background: #447; }\n.cm-s-night .CodeMirror-line::selection, .cm-s-night .CodeMirror-line > span::selection, .cm-s-night .CodeMirror-line > span > span::selection { background: rgba(68, 68, 119, .99); }\n.cm-s-night .CodeMirror-line::-moz-selection, .cm-s-night .CodeMirror-line > span::-moz-selection, .cm-s-night .CodeMirror-line > span > span::-moz-selection { background: rgba(68, 68, 119, .99); }\n.cm-s-night .CodeMirror-gutters { background: #0a001f; border-right: 1px solid #aaa; }\n.cm-s-night .CodeMirror-guttermarker { color: white; }\n.cm-s-night .CodeMirror-guttermarker-subtle { color: #bbb; }\n.cm-s-night .CodeMirror-linenumber { color: #f8f8f8; }\n.cm-s-night .CodeMirror-cursor { border-left: 1px solid white; }\n\n.cm-s-night span.cm-comment { color: #8900d1; }\n.cm-s-night span.cm-atom { color: #845dc4; }\n.cm-s-night span.cm-number, .cm-s-night span.cm-attribute { color: #ffd500; }\n.cm-s-night span.cm-keyword { color: #599eff; }\n.cm-s-night span.cm-string { color: #37f14a; }\n.cm-s-night span.cm-meta { color: #7678e2; }\n.cm-s-night span.cm-variable-2, .cm-s-night span.cm-tag { color: #99b2ff; }\n.cm-s-night span.cm-variable-3, .cm-s-night span.cm-def, .cm-s-night span.cm-type { color: white; }\n.cm-s-night span.cm-bracket { color: #8da6ce; }\n.cm-s-night span.cm-builtin, .cm-s-night span.cm-special { color: #ff9e59; }\n.cm-s-night span.cm-link { color: #845dc4; }\n.cm-s-night span.cm-error { color: #9d1e15; }\n\n.cm-s-night .CodeMirror-activeline-background { background: #1C005A; }\n.cm-s-night .CodeMirror-matchingbracket { outline:1px solid grey; color:white !important; }\n"],sourceRoot:""}]);const s=i},23645:n=>{"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var t=n(r);return r[2]?"@media ".concat(r[2]," {").concat(t,"}"):t})).join("")},r.i=function(n,t,e){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(e)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(o[i]=!0)}for(var s=0;s<n.length;s++){var a=[].concat(n[s]);e&&o[a[0]]||(t&&(a[2]?a[2]="".concat(t," and ").concat(a[2]):a[2]=t),r.push(a))}},r}},94015:n=>{"use strict";function r(n,r){(null==r||r>n.length)&&(r=n.length);for(var t=0,e=new Array(r);t<r;t++)e[t]=n[t];return e}n.exports=function(n){var t,e,o=(e=4,function(n){if(Array.isArray(n))return n}(t=n)||function(n,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n)){var t=[],e=!0,o=!1,c=void 0;try{for(var i,s=n[Symbol.iterator]();!(e=(i=s.next()).done)&&(t.push(i.value),!r||t.length!==r);e=!0);}catch(n){o=!0,c=n}finally{try{e||null==s.return||s.return()}finally{if(o)throw c}}return t}}(t,e)||function(n,t){if(n){if("string"==typeof n)return r(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(n,t):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=o[1],i=o[3];if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),A="/*# ".concat(a," */"),l=i.sources.map((function(n){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(n," */")}));return[c].concat(l).concat([A]).join("\n")}return[c].join("\n")}},22421:(n,r,t)=>{var e=t(5528);"string"==typeof(e=e.__esModule?e.default:e)&&(e=[[n.id,e,""]]);t(93379)(e,{insert:"head",singleton:!1}),e.locals&&(n.exports=e.locals)},93379:(n,r,t)=>{"use strict";var e,o={},c=function(){var n={};return function(r){if(void 0===n[r]){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[r]=t}return n[r]}}();function i(n,r){for(var t=[],e={},o=0;o<n.length;o++){var c=n[o],i=r.base?c[0]+r.base:c[0],s={css:c[1],media:c[2],sourceMap:c[3]};e[i]?e[i].parts.push(s):t.push(e[i]={id:i,parts:[s]})}return t}function s(n,r){for(var t=0;t<n.length;t++){var e=n[t],c=o[e.id],i=0;if(c){for(c.refs++;i<c.parts.length;i++)c.parts[i](e.parts[i]);for(;i<e.parts.length;i++)c.parts.push(g(e.parts[i],r))}else{for(var s=[];i<e.parts.length;i++)s.push(g(e.parts[i],r));o[e.id]={id:e.id,refs:1,parts:s}}}}function a(n){var r=document.createElement("style");if(void 0===n.attributes.nonce){var e=t.nc;e&&(n.attributes.nonce=e)}if(Object.keys(n.attributes).forEach((function(t){r.setAttribute(t,n.attributes[t])})),"function"==typeof n.insert)n.insert(r);else{var o=c(n.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(r)}return r}var A,l=(A=[],function(n,r){return A[n]=r,A.filter(Boolean).join("\n")});function m(n,r,t,e){var o=t?"":e.css;if(n.styleSheet)n.styleSheet.cssText=l(r,o);else{var c=document.createTextNode(o),i=n.childNodes;i[r]&&n.removeChild(i[r]),i.length?n.insertBefore(c,i[r]):n.appendChild(c)}}function u(n,r,t){var e=t.css,o=t.media,c=t.sourceMap;if(o&&n.setAttribute("media",o),c&&btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}var d=null,h=0;function g(n,r){var t,e,o;if(r.singleton){var c=h++;t=d||(d=a(r)),e=m.bind(null,t,c,!1),o=m.bind(null,t,c,!0)}else t=a(r),e=u.bind(null,t,r),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return e(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;e(n=r)}else o()}}n.exports=function(n,r){(r=r||{}).attributes="object"==typeof r.attributes?r.attributes:{},r.singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e));var t=i(n,r);return s(t,r),function(n){for(var e=[],c=0;c<t.length;c++){var a=t[c],A=o[a.id];A&&(A.refs--,e.push(A))}n&&s(i(n,r),r);for(var l=0;l<e.length;l++){var m=e[l];if(0===m.refs){for(var u=0;u<m.parts.length;u++)m.parts[u]();delete o[m.id]}}}}}}]);
//# sourceMappingURL=2421.d12dff9c0ad2717d9680.js.map