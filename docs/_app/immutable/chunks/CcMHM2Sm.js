import{G as M,ac as A,ad as O,Z as P,ae as Y,X as k,af as T,ag as j,ah as q,ai as B,aj as b,B as g,A as D,y as C,w as v,ak as $,al as G,am as W,an as X,ao as Z,ap as z,aq as F,n as J,v as E,p as K,b as Q,a as U}from"./FDR-IPPa.js";import{r as x,b as aa}from"./CqFbMUyq.js";const ra=["touchstart","touchmove"];function ea(a){return ra.includes(a)}const I=new Set,S=new Set;function oa(a){for(var r=0;r<a.length;r++)I.add(a[r]);for(var t of S)t(a)}function m(a){var R;var r=this,t=r.ownerDocument,c=a.type,i=((R=a.composedPath)==null?void 0:R.call(a))||[],e=i[0]||a.target,f=0,_=a.__root;if(_){var u=i.indexOf(_);if(u!==-1&&(r===document||r===window)){a.__root=r;return}var h=i.indexOf(r);if(h===-1)return;u<=h&&(f=u)}if(e=i[f]||a.target,e!==r){M(a,"currentTarget",{configurable:!0,get(){return e||t}});var w=Y,o=k;A(null),O(null);try{for(var n,s=[];e!==null;){var d=e.assignedSlot||e.parentNode||e.host||null;try{var l=e["__"+c];if(l!==void 0&&(!e.disabled||a.target===e))if(P(l)){var[V,...H]=l;V.apply(e,[a,...H])}else l.call(e,a)}catch(y){n?s.push(y):n=y}if(a.cancelBubble||d===r||d===null)break;e=d}if(n){for(let y of s)queueMicrotask(()=>{throw y});throw n}}finally{a.__root=r,delete a.currentTarget,A(w),O(o)}}}function ia(a,r){var t=r==null?"":typeof r=="object"?r+"":r;t!==(a.__t??(a.__t=a.nodeValue))&&(a.__t=t,a.nodeValue=t+"")}function ta(a,r){return L(a,r)}function da(a,r){T(),r.intro=r.intro??!1;const t=r.target,c=E,i=v;try{for(var e=j(t);e&&(e.nodeType!==8||e.data!==q);)e=B(e);if(!e)throw b;g(!0),D(e),C();const f=L(a,{...r,anchor:e});if(v===null||v.nodeType!==8||v.data!==$)throw G(),b;return g(!1),f}catch(f){if(f===b)return r.recover===!1&&W(),T(),X(t),g(!1),ta(a,r);throw f}finally{g(c),D(i),x()}}const p=new Map;function L(a,{target:r,anchor:t,props:c={},events:i,context:e,intro:f=!0}){T();var _=new Set,u=o=>{for(var n=0;n<o.length;n++){var s=o[n];if(!_.has(s)){_.add(s);var d=ea(s);r.addEventListener(s,m,{passive:d});var l=p.get(s);l===void 0?(document.addEventListener(s,m,{passive:d}),p.set(s,1)):p.set(s,l+1)}}};u(Z(I)),S.add(u);var h=void 0,w=z(()=>{var o=t??r.appendChild(F());return J(()=>{if(e){K({});var n=Q;n.c=e}i&&(c.$$events=i),E&&aa(o,null),h=a(o,c)||{},E&&(k.nodes_end=v),e&&U()}),()=>{var d;for(var n of _){r.removeEventListener(n,m);var s=p.get(n);--s===0?(document.removeEventListener(n,m),p.delete(n)):p.set(n,s)}S.delete(u),o!==t&&((d=o.parentNode)==null||d.removeChild(o))}});return N.set(h,w),h}let N=new WeakMap;function fa(a,r){const t=N.get(a);return t?(N.delete(a),t(r)):Promise.resolve()}export{oa as d,da as h,ta as m,ia as s,fa as u};
