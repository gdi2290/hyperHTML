var hyperHTML=function(e){"use strict";function n(e){var n=xe.get(this);return n&&n.template===(ne?q(e):e)||(n=B.apply(this,arguments),xe.set(this,n)),z.apply(n.updates,arguments),this}function t(e,n){return arguments.length<1?$("html"):null==e?$(n||"html"):F(e,n||"html")}function r(e,n){for(var t=0,r=e.length,i=n.length;t<r;){if(!(t<i&&e[t]===n[t]))return t;t++}return t===i?-1:t}function i(e,n){switch(n.nodeType){case W:var t=e.childNodes;if(t[0]===n){a(t,1);break}o(e,n);break;case J:-1!==r(e.childNodes,n.childNodes)&&o(e,n);break;case V:e.textContent=n.textContent}}function a(e,n){for(var t,r=e.length;n<r--;)t=e[r],t.parentNode.removeChild(t)}function o(e,n){e.textContent="",e.appendChild(n)}function l(e,n,t){var r=x(e);0!==t?(a(e.childNodes,t),he(r,n.slice(t)),e.appendChild(r)):(he(r,n),o(e,r))}function c(e,n){var t,r=e.name,i=e.ownerElement,a=/^on/.test(r),o=r in i&&!(K in i||U.test(r)),l=a?r.slice(2):"",c=a||o;return c&&n.push(i,r),a?function(e){t!==e&&(t&&i.removeEventListener(l,t,!1),t=e,e&&i.addEventListener(l,e,!1))}:o?function(e){t!==e&&(t=e,i[r]!==e&&(null==e?(i[r]=null,i.removeAttribute(r)):i[r]=e))}:function(n){t!==n&&(t=n,e.value!==n&&(null==n?c||(c=!0,i.removeAttributeNode(e)):(e.value=n,c&&(c=!1,i.setAttributeNode(e)))))}}function u(e,n){var t,o=!n;return function c(u){switch(typeof u){case"string":case"number":case"boolean":o?t!==u&&(t=u,e.textContent=u):1===n.length&&n[0].nodeType===V?t!==u&&(t=u,n[0].textContent=u):(t=u,a(n,0),n=[b(e,u)],e.parentNode.insertBefore(n[0],e));break;case"function":c(o?u(e,pe(e),0):u(e.parentNode,n,0));break;case"object":case"undefined":if(null==u){t=u,c("");break}default:if(t=u,ue(u)){var s=u.length;if(0!==s||o)switch(typeof u[0]){case"string":case"number":case"boolean":c({html:u});break;case"function":for(var f=o?e:e.parentNode,h=o?ie.call(pe(e)):n,d=0;d<s;d++)u[d]=u[d](f,h,d);o&&a(h,d),c(u.concat.apply([],u));break;case"object":if(ue(u[0])&&(u=u.concat.apply([],u)),E(u[0])){Promise.all(u).then(c);break}default:if(o){var d=r(e.childNodes,u);-1!==d&&l(e,u,d)}else A(e,n,u)}else a(n,0),n=[]}else if(k(u))o?i(e,u):A(e,n,u.nodeType===J?ie.call(u.childNodes):[u]);else if(E(u))u.then(c);else if("placeholder"in u)T(c,u);else if("text"in u)c(String(u.text));else if("any"in u)c(u.any);else if("html"in u){var p=[].concat(u.html).join("");if(o)e.innerHTML=p;else{a(n,0);var v=g(e,p);n=ie.call(v.childNodes),e.parentNode.insertBefore(v,e)}}else c("length"in u?ie.call(u):C(u))}}}function s(e,n){for(var t,r=Y,i=e.attributes,a=0,o=i.length;a<o;a++)t=i[a],t.value===r&&n.push(O("attr",te?e.attributes[de.shift()]:t))}function f(e,n){for(var t,r=e.childNodes,i=r.length,a=0;a<i;a++)switch(t=r[a],t.nodeType){case W:s(t,n),f(t,n);break;case I:t.textContent===Y&&(1===i||S(t,"previous")&&S(t,"next")?(n.push(O("any",e)),a=i):n.push(O("virtual",t)));break;case V:U.test(e.nodeName)&&se.call(t.textContent)===Z&&n.push(O("any",e))}}function h(e){return oe[e]}function d(e){return{html:e}}function p(e){for(var n,t=[],r=e.childNodes,i=0,a=r.length;i<a;i++)n=r[i],n.nodeType!==W&&0===se.call(n.textContent).length||t.push(n);return 1===t.length?t[0]:t}function v(e){return e.createDocumentFragment()}function g(e,n){return de=[],(K in e?y:m)(e,n.replace(ge,ye))}function m(e,n){var t,r=e.ownerDocument,i=r.createElement("template"),a="content"in i,o=!1;if(a||(t=v(r),o=/^[^\S]*?<(t(?:head|body|foot|r|d|h))/i.test(n)),o){var l=RegExp.$1;i.innerHTML="<table>"+n+"</table>",he(t,ie.call(i.querySelectorAll(l)))}else i.innerHTML=n,a?t=i.content:he(t,ie.call(i.childNodes));return t}function y(e,n){var t=e.ownerDocument,r=v(t);if(te||re){var i=t.createElement("div");i.innerHTML='<svg xmlns="'+Q+'">'+n+"</svg>",he(r,ie.call(i.firstChild.childNodes))}else{var i=t.createElementNS(Q,"svg");i.innerHTML=n,he(r,ie.call(i.childNodes))}return r}function b(e,n){return e.ownerDocument.createTextNode(n)}function N(e,n,t,r){for(var i=e,a=e.ownerDocument,o=t.path,l=ve(n,o),c=0,u=o.length;c<u;c++)switch(o[c++]){case"attributes":var s=l.name;e.hasAttribute(s)||e.setAttribute(s,""),i=e.attributes[s];break;case"childNodes":var f=pe(e),h=pe(l.parentNode);i=we(l);var d=i?o.indexOf.call(h,i)+1:-1;i=Ne(l);var p=i?o.indexOf.call(h,i):-1;switch(i=a.createComment(Y),!0){case p<0:p=f.length;break;case d<0:d=0;default:p=-(h.length-p)}r.push.apply(r,ie.call(f,d,p)),r.length?w(e,i,Ne(r[r.length-1])):w(e,i,ie.call(f,p)[0]),0===r.length&&D(e,i);break;default:i=pe(e)[o[c]]||e.appendChild(e.ownerDocument.createElement(ve(n,o.slice(0,c+1)).nodeName)),e=i}return i}function w(e,n,t){t?e.insertBefore(n,t):e.appendChild(n)}function x(e){return v(e.ownerDocument)}function T(e,n){e(n.placeholder),"text"in n?Promise.resolve(n.text).then(String).then(e):"any"in n?Promise.resolve(n.any).then(e):"html"in n?Promise.resolve(n.html).then(d).then(e):Promise.resolve(C(n)).then(e)}function C(e){for(var n in fe)if(e.hasOwnProperty(n))return fe[n](e[n])}function k(e){return"ELEMENT_NODE"in e}function E(e){return null!=e&&"then"in e}function S(e,n){for(;null!=(e=e[n+"Sibling"])&&e.nodeType===V&&se.call(e.textContent).length<1;);return null==e}function M(e){for(var n=0,t=e.length;n<t;n++)e[n++].removeAttribute(e[n])}function D(e,n){var t=n.previousSibling;t&&t.nodeType===V&&(e.removeChild(t),D(e,n))}function L(e,n,t,r){var i;switch(e){case"any":i=u(n,null);break;case"attr":i=c(n,t);break;case"virtual":i=u(n,r)}return i}function A(e,n,t){var i=r(n,t);if(-1!==i){var o=x(e);a(n,i),n.splice(i),t=t.slice(i),he(o,t),e.parentNode.insertBefore(o,e),n.push.apply(n,t)}}function O(e,n){return{type:e,path:j(n)}}function H(e){var n=[],t=g(this,e.join(Z)),r={fragment:t,paths:n};return f(t,n),Ce.set(e,r),r}function j(e){var n,t=[];switch(e.nodeType){case W:case J:n=e;break;case I:n=e.parentNode,t.unshift("childNodes",t.indexOf.call(n.childNodes,e));break;case G:default:n=e.ownerElement,t.unshift("attributes",e.name)}for(e=n;n=n.parentNode;e=n)t.unshift("children",t.indexOf.call(pe(n),e));return t}function P(e,n){for(var t,r,i=[],o=[],l=0,c=n.length;l<c;l++)t=n[l],r=ve(e,t.path),r.nodeType===J&&(a(r.childNodes,0),r=this),i[l]=L(t.type,r,o,[]);return M(o),i}function _(e,n){for(var t,r,i=[],a=[],o=0,l=n.length;o<l;o++)r=[],t=n[o],i[o]=L(t.type,N(this,e,t,r),a,r);return M(a),i}function z(){for(var e=1,n=arguments.length;e<n;e++)this[e-1](arguments[e])}function B(e){ne&&(e=q(e));var n,t=Ce.get(e)||H.call(this,e);if(ke){var r=Ee(t.fragment);n=P.call(this,r,t.paths),o(this,r)}else n=_.call(this,t.fragment,t.paths);return{template:e,updates:n}}function $(e){function t(t){l=v(t),o="svg"===e?t.createElementNS(Q,"svg"):l,c=n.bind(o)}function r(){return u&&(u=!1,"svg"===e&&he(l,ie.call(o.childNodes)),a=p(l)),a}var i,a,o,l,c,u,s;return"adopt"===e?function(a){var f=arguments;return ne&&(a=q(a)),s!==a&&(u=!0,s=a,i=function(i,a,s){return u&&(s<a.length?(o=a[s],l={ownerDocument:o.ownerDocument,childNodes:[o],children:[o]},c=n.adopt(l)):(K in i&&(e="svg"),t(i.ownerDocument))),c.apply(null,f),r()}),i}:function(e){return ne&&(e=q(e)),s!==e&&(u=!0,s=e,t(n.document)),c.apply(null,arguments),r()}}function F(e,n){var t=Te.get(e),r=n.indexOf(":"),i=n;return-1<r&&(i=n.slice(r+1),n=n.slice(0,r)||"html"),t||(t={},Te.set(e,t)),t[i]||(t[i]=$(n))}/*! (c) 2017 Andrea Giammarchi @WebReflection, (ISC) */
n.document=e,n.adopt=function(e){return function(){return ke=!1,n.apply(e,arguments),ke=!0,e}},n.define=function(e,n){fe[e]=n},n.escape=function(e){return e.replace(ae,h)},n.hyper=function(e){switch(arguments.length){case 0:case 1:return null==e?$("html"):"string"==typeof e?t(null,e):"raw"in e?$("html")(e):"nodeType"in e?n.bind(e):F(e,"html");default:return("raw"in e?$("html"):t).apply(null,arguments)}},n.wire=t;var R,q,W=1,G=2,V=3,I=8,J=11,K="ownerSVGElement",Q="http://www.w3.org/2000/svg",U=/^style$/i,X="_hyper_html: ",Y=X+(Math.random()*new Date|0)+";",Z="\x3c!--"+Y+"--\x3e",ee=v(e),ne="object"==typeof navigator&&/Firefox\/(\d+)/.test(navigator.userAgent)&&parseFloat(RegExp.$1)<55,te=function(){var n=e.createElement("p");return n.innerHTML='<i data-i="" class=""></i>',/class/i.test(n.firstChild.attributes[0].name)}(),re=!("children"in ee),ie=[].slice,ae=/[&<>'"]/g,oe={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},le=typeof WeakMap==typeof le?function(){return{get:function(e){return e[X]},set:function(e,n){Object.defineProperty(e,X,{configurable:!0,value:n})}}}:WeakMap,ce=typeof Map==typeof ce?function(){var e=[],n=[];return{get:function(t){return n[e.indexOf(t)]},set:function(t,r){n[e.push(t)-1]=r}}}:Map,ue=Array.isArray||function(){var e={}.toString,n=e.call([]);return function(t){return e.call(t)===n}}(),se=X.trim||function(){return this.replace(/^\s+|\s+$/g,"")},fe={};ne&&(R={},q=function(e){var n="_"+e.join(Z);return R[n]||(R[n]=e)});var he="append"in ee?function(e,n){e.append.apply(e,n)}:function(e,n){for(var t=0,r=n.length;t<r;t++)e.appendChild(n[t])};n.bind=function(e){return function(){return n.apply(e,arguments)}};var de,pe=re||te?function(e){for(var n,t=[],r=e.childNodes,i=0,a=0,o=r.length;a<o;a++)n=r[a],n.nodeType===W&&(t[i++]=n);return t}:function(e){return e.children},ve=te||re?function(e,n){for(var t,r=0,i=n.length;r<i;r++)switch(t=n[r++]){case"children":e=pe(e)[n[r]];break;default:e=e[t][n[r]]}return e}:function(e,n){for(var t=0,r=n.length;t<r;t++)e=e[n[t++]][n[t]];return e},ge=/(<[a-z]+[a-z0-9:_-]*)((?:[^\S]+[a-z0-9:_-]+(?:=(?:'.*?'|".*?"|<.+?>|\S+))?)+)([^\S]*\/?>)/gi,me=new RegExp("([^\\S][a-z]+[a-z0-9:_-]*=)(['\"]?)"+Z+"\\2","gi"),ye=function(e,n,t,r){return n+t.replace(me,te?function(e,n,t){return de.push(n.slice(1,-1)),be(e,n,t)}:be)+r},be=function(e,n,t){return n+(t||'"')+Y+(t||'"')},Ne=te?function(e){for(;e=e.nextSibling;)if(e.nodeType===W)return e}:function(e){return e.nextElementSibling},we=te?function(e){for(;e=e.previousSibling;)if(e.nodeType===W)return e}:function(e){return e.previousElementSibling},xe=new le,Te=new le,Ce=new ce,ke=!0,Ee=function(){return ee.appendChild(b(ee,"g")),ee.appendChild(b(ee,"")),1===ee.cloneNode(!0).childNodes.length?function(e){for(var n=e.cloneNode(),t=e.childNodes||[],r=0,i=t.length;r<i;r++)n.appendChild(Ee(t[r]));return n}:function(e){return e.cloneNode(!0)}}();return n}(document);try{module.exports=hyperHTML}catch(e){}