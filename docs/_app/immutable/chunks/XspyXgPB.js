import{D as c,E as l,F as f,m as b,G as o,H as d,a as p,s as _}from"./Mw6akJY4.js";let s=!1,i=Symbol();function v(e,n,r){const u=r[n]??(r[n]={store:null,source:b(void 0),unsubscribe:f});if(u.store!==e&&!(i in r))if(u.unsubscribe(),u.store=e??null,e==null)u.source.v=void 0,u.unsubscribe=f;else{var t=!0;u.unsubscribe=o(e,a=>{t?u.source.v=a:_(u.source,a)}),t=!1}return e&&i in r?d(e):p(u.source)}function y(){const e={};function n(){c(()=>{for(var r in e)e[r].unsubscribe();l(e,i,{enumerable:!1,value:!0})})}return[e,n]}function m(e){var n=s;try{return s=!1,[e(),s]}finally{s=n}}export{v as a,m as c,y as s};
