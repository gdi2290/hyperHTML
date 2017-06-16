var hyperHTML=function(){"use strict";/*! (c) 2017 Andrea Giammarchi @WebReflection, (MIT) */
function e(e){return O in this&&this[O].s===e?w.apply(this,arguments):k.apply(this,arguments)}function t(e,t){for(var n,r=B?j:D,a=B?f(e.attributes):G.call(e.attributes),o=0,c=a.length;o<c;o++)n=a[o],n.value===r&&(B&&(n=e.getAttributeNode(T.shift())),t.push(q?{a:"attr",n:n}:i(e,n)))}function n(e,i){for(var c,l,u=G.call(e.childNodes),h=u.length,d=0;d<h;d++)switch(c=u[d],c.nodeType){case E:t(c,i),n(c,i);break;case S:c.textContent===j&&(1===h?q?i.push({a:"any",n:e}):(i.push(r(e)),e.removeChild(c)):!(d<1||u[d-1].nodeType===E)||d+1!==h&&u[d+1].nodeType!==E?q?i.push({a:"text",n:c}):(l=s(e).createTextNode(""),i.push(o(l)),e.replaceChild(l,c)):i.push(q?{a:"vc",n:c}:a(c,!1)));break;case M:L.test(e.nodeName)&&c.textContent===D&&i.push(q?{a:"text",n:e}:o(e))}}function r(e){return function t(n){var r,i,a,o=typeof n;switch(o){case"string":e.innerHTML=n;break;case"number":case"boolean":e.textContent=n;break;case"function":t(n(e,e.children,0));break;default:if(Array.isArray(n))if(1===(i=n.length))t(n[0]);else if(0<i&&(o=typeof n[0]),"string"===o)t(n.join(""));else if("function"===o){for(a=G.call(e.children),r=0,i=n.length;r<i;r++)n[r]=n[r](e,a,r);g(a,r),t(n.concat.apply([],n))}else-1<(r=h(e.childNodes,n))&&y(e,n,r);else p(e,n)}}}function i(e,t){var n,r=t.name,i="on"===r.slice(0,2),a=r in e&&!L.test(r);return a&&e.removeAttribute(r),a?function(t){n!==t&&(n=t,e[r]=i&&"handleEvent"in t?t.handleEvent.bind(t):t)}:function(e){n!==e&&(t.value=n=e)}}function a(e,t){var n=u(e),r=[];return function i(a){var o,c,l,s,u=e.parentNode;switch(typeof a){case"string":case"number":case"boolean":g(r,0),d(n,a),r=G.call(n.childNodes),u.insertBefore(n,e);break;case"function":i(a(u,r,0));break;default:if(Array.isArray(a))if(0===(c=a.length))g(r,0),r=[];else if("string"===(s=typeof a[0]))i(a.join(""));else if("function"===s){for(t?(t=!1,l=G.call(u.children),e.previousElementSibling&&l.splice(0,l.indexOf(e.previousElementSibling)+1),r=l):l=r,o=0,c=a.length;o<c;o++)a[o]=a[o](u,l,o);i(a.concat.apply([],a))}else-1<(o=h(r,a))&&(g(r,o),a=a.slice(o),$(n,a),u.insertBefore(n,e),r=r.slice(0,o).concat(a));else g(r,0),r=a.nodeType===H?G.call(a.childNodes):[a],u.insertBefore(a,e)}}}function o(e){var t;return function(n){t!==n&&(e.textContent=t=n)}}function c(e,t,n){var r=t[n];r&&r.nodeType===M&&R.call(r.textContent).length<1&&(e.removeChild(r),c(t,n))}function l(e,t){var n,r,i,a,o=[];switch(t.nodeType){case E:a=t;break;case S:a=t.parentNode,c(a,t,"previousSibling"),c(a,t,"nextSibling"),o.unshift("childNodes",o.indexOf.call(a.childNodes,t));break;case A:default:a=t.ownerElement,o.unshift("getAttributeNode",t.name)}for(t=a;a=a.parentNode;)o.unshift("children",o.indexOf.call(a.children,t)),t=a;for(n=0,r=o.length;n<r;n++)switch(i=o[n++]){case"getAttributeNode":a=e[i](o[n]),e=a||{ownerElement:e,name:o[n]};break;case"childNodes":a=e[i][o[n]],a?a.nodeType===E?(e=s(e).createComment(j),a.parentNode.insertBefore(e,a)):e=a:e=e.appendChild(s(e).createComment(j));break;default:e=e[i][o[n]]}return e}function s(e){return e.ownerDocument||e.document}function u(e){return s(e).createDocumentFragment()}function h(e,t){for(var n=0,r=e.length,i=t.length;n<r;){if(!(n<i&&e[n]===t[n]))return n;n++}return n===i?-1:n}function d(e,t){var n=s(e).createElement("template"),r=B&&!("content"in n)&&/^[^\S]*?<(t(?:head|body|foot|r|d|h))/i.test(t);n.innerHTML=r?"<table>"+t+"</table>":t,r&&(n={childNodes:n.querySelectorAll(RegExp.$1)}),$(e,G.call((n.content||n).childNodes))}function f(e){for(var t=[],n=e.length;n--;t[n]={name:e[n].name,value:e[n].value});return t}function p(e,t){switch(t.nodeType){case E:var n=e.childNodes;if(0<n.length&&n[0]===t){g(n,1);break}m(e,t);break;case H:-1<h(e.childNodes,t.childNodes)&&m(e,t);break;case M:e.textContent=t.textContent}}function g(e,t){for(var n,r=e.length;t<r--;)n=e[r],n.parentNode.removeChild(n)}function m(e,t){e.textContent="",e.appendChild(t)}function v(e){for(var t,n=[],r=e.childNodes,i=0,a=r.length;i<a;i++)t=r[i],(t.nodeType===E||0<R.call(t.textContent).length)&&n.push(t);return a=n.length,a<2?(t=a<1?e:n[0],function(){return t}):function(){return n}}function y(e,t,n){var r=u(e);0<n?(g(e.childNodes,n),$(r,t.slice(n)),e.appendChild(r)):($(r,t),m(e,r))}function b(t){function n(n){c=u(n),o="svg"===t?s(c).createElementNS("http://www.w3.org/2000/svg","svg"):c,l=e.bind(o)}function r(){return h&&(h=!1,"svg"===t&&$(c,G.call(o.childNodes)),a=v(c)),a()}var i,a,o,c,l,h,d;return"adopt"===t?function(a){var s=arguments;return d!==a&&(h=!0,d=a,i=function(i,a,u){return h&&(u<a.length?(o=a[u],c={ownerDocument:o.ownerDocument,childNodes:[o],children:[o]},l=e.adopt(c)):("object"==typeof i.className&&(t="svg"),n(i))),l.apply(null,s),r()}),i}:function(t){return d!==t&&(h=!0,d=t,n(e)),l.apply(null,arguments),r()}}function N(e,t,n){return e[t]||(e[t]=b(n))}function x(e,t){var n=W.get(e)||(W.set(e,n={}),n),r=t.indexOf(":");return r<0?N(n,t,t):N(n,t.slice(r+1),t.slice(0,r)||"html")}function C(e){q=!0;var t,n,c,h,d=F.indexOf(e),f=d<0?k.apply(u(this),arguments)[O].u:P[d],p=f.slice();for(q=!1,d<0&&(P[F.push(e)-1]=f),d=0,t=p.length;d<t;d++)switch(n=p[d],c=l(this,n.n),n.a){case"any":p[d]=r(c);break;case"attr":p[d]=i(c.ownerElement,c);break;case"text":n.n.nodeType===E?p[d]=o(c):(h=s(c).createTextNode(""),c.parentNode.replaceChild(h,c),p[d]=o(h));break;case"vc":h=s(c).createComment(j),c.parentNode.replaceChild(h,c),p[d]=a(h,!0)}return this[O]={s:e,u:p},w.apply(this,arguments)}function w(){for(var e=1,t=arguments.length,n=this[O].u;e<t;e++)n[e-1](arguments[e]);return this}function k(e){var t=[],r=e.join(D);return B?(T=[],g(this.childNodes,0),d(this,r.replace(_,z))):this.nodeType===E?this.innerHTML=r:d(this,r),n(this,t),this[O]={s:e,u:t},q?this:w.apply(this,arguments)}e.adopt=function(e){return function(t){return O in e&&e[O].s===t?w.apply(e,arguments):C.apply(e,arguments)}},e.wire=function(e,t){return arguments.length<1?b("html"):null==e?b(t||"html"):x(e,t||"html")};var T,E=1,A=2,M=3,S=8,H=11,L=/^style$/i,O="_hyper_html: ",j=O+(Math.random()*new Date|0)+";",D="<!--"+j+"-->",B=function(e){return e.innerHTML='<i data-i="" class=""></i>',/class/i.test(e.firstChild.attributes[0].name)}((e.document=document).createElement("p")),$="append"in document?function(e,t){e.append.apply(e,t)}:function(e,t){for(var n=0,r=t.length;n<r;n++)e.appendChild(t[n])},_=B&&new RegExp("([^\\S][a-z]+[a-z0-9_-]*=)(['\"])"+D+"\\2","g"),z=B&&function(e,t,n){return T.push(t.slice(1,-1)),t+n+j+n},R=O.trim||function(){return this.replace(/^\s+|\s+$/g,"")},W=typeof WeakMap==typeof W?{get:function(e){return e[O]},set:function(e,t){Object.defineProperty(e,O,{configurable:!0,value:t})}}:new WeakMap,q=!1,F=[],P=[],G=F.slice;return e}();try{module.exports=hyperHTML}catch(e){}