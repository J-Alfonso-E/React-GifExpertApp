(this["webpackJsonp04-gif-expert-app"]=this["webpackJsonp04-gif-expert-app"]||[]).push([[0],{15:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n(7),c=n.n(a),i=(n(15),n(2)),s=n(9),u=n(0),o=function(t){var e=t.EnviarCategoria,n=Object(r.useState)(""),a=Object(i.a)(n,2),c=a[0],o=a[1];return Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),c.trim().length>2&&(e((function(t){return[c].concat(Object(s.a)(t))})),o(""))},children:[Object(u.jsx)("h2",{children:"Agregar Categoria"}),Object(u.jsx)("input",{type:"text",value:c,onChange:function(t){o(t.target.value)}})]})},j=n(10),l=n(6),d=n.n(l),p=n(8),b=function(){var t=Object(p.a)(d.a.mark((function t(e){var n,r,a,c,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=Eav0Of2J4oolgnNip2pPbVrMOpphDCBv"),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return a=t.sent,c=a.data,i=c.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(t){var e=t.title,n=t.url;return console.log({title:e,url:n}),Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("img",{className:"card animate__bounceIn",src:n,alt:e}),Object(u.jsx)("p",{className:"card",children:e})]})},O=function(t){var e=t.categoria,n=function(t){var e=Object(r.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){b(t).then((function(t){setTimeout((function(){c({data:t,loading:!1})}),3e3)}))}),[t]),a}(e),a=n.data,c=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{children:e}),c&&"Cargando",Object(u.jsx)("div",{className:"card-grid",children:a.map((function(t){return Object(u.jsx)(f,Object(j.a)({},t),t.id)}))})]})},h=function(){var t=Object(r.useState)(["Halo Infinite"]),e=Object(i.a)(t,2),n=e[0],a=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"Gif Expert App"}),Object(u.jsx)(o,{EnviarCategoria:a})," ",Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(t){return Object(u.jsx)(O,{categoria:t},t)}))})]})};c.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.cf2cdf87.chunk.js.map