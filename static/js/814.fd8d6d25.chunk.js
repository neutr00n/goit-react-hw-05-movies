"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[814],{1454:function(n,t,e){e.d(t,{a:function(){return s}});var r,a=e(8966),i=e(168),o=e(7402).Z.div(r||(r=(0,i.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 85vh;\n"]))),c=e(184),s=function(){return(0,c.jsx)(o,{children:(0,c.jsx)(a.iT,{height:180,width:180,color:"#4fa94d",wrapperClass:"",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#4fa94d",strokeWidth:2,strokeWidthSecondary:2})})}},9555:function(n,t,e){e.d(t,{O:function(){return j}});var r,a,i,o,c,s,u,p,l=e(168),d=e(7402),f=e(1087),h=(0,d.Z)(f.OL)(r||(r=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n"]))),x=d.Z.div(a||(a=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 10px;\n  background-color: #332f2f;\n  flex-grow: 1;\n"]))),g=d.Z.h2(i||(i=(0,l.Z)(["\n  margin-bottom: 10px;\n  text-align: center;\n\n  font-size: 16px;\n  color: #6cdceb;\n"]))),v=d.Z.b(o||(o=(0,l.Z)(["\n  display: inline-block;\n\n  font-size: 14px;\n  color: #6cdceb;\n"]))),b=d.Z.p(c||(c=(0,l.Z)(["\n  display: inline-block;\n  margin-left: 8px;\n  padding: 2px 8px;\n\n  font-size: 14px;\n  color: #332f2f;\n  background-color: #5fe6b9;\n  border-radius: 4px;\n"]))),m=d.Z.img(s||(s=(0,l.Z)(["\n  height: 400px;\n"]))),w=e(184),Z=function(n){var t=n.id,e=n.title,r=n.raiting,a=n.poster,i=n.location,o=a?"https://image.tmdb.org/t/p/w300/".concat(a):"https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg",c="/"===i.pathname?"movies/".concat(t):t;return(0,w.jsxs)(h,{to:"".concat(c),state:{from:i},children:[(0,w.jsx)(m,{src:o,alt:"".concat(e," poster")}),(0,w.jsxs)(x,{children:[(0,w.jsx)(g,{children:e}),(0,w.jsxs)("div",{children:[(0,w.jsx)(v,{children:"Raiting:"}),(0,w.jsx)(b,{children:r.toFixed(2)})]})]})]})},y=d.Z.ul(u||(u=(0,l.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n"]))),k=d.Z.li(p||(p=(0,l.Z)(["\n  flex-basis: calc((100% - 15px * (5 - 1)) / 5);\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 5px 5px 3px 0px rgba(0, 0, 0, 0.5);\n  transition: scale 200ms linear;\n\n  &:hover,\n  &:focus {\n    scale: 1.04;\n  }\n"]))),j=function(n){var t=n.items,e=n.location;return(0,w.jsx)(y,{children:t.map((function(n){var t=n.id,r=n.original_title,a=n.vote_average,i=n.poster_path;return(0,w.jsx)(k,{children:(0,w.jsx)(Z,{id:t,title:r,poster:i,raiting:a,location:e})},t)}))})}},890:function(n,t,e){e.d(t,{EI:function(){return d},FE:function(){return g},l7:function(){return p},vw:function(){return s},wH:function(){return h}});var r=e(5861),a=e(4687),i=e.n(a),o=e(1243);o.Z.defaults.baseURL="https://api.themoviedb.org/3";var c=new URLSearchParams({api_key:"193a1318aa83a5b49d1c16448163261b"});function s(n){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/trending/movie/".concat(t,"?").concat(c));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"?").concat(c));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"/credits?").concat(c));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"/reviews?").concat(c));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/search/movie?".concat(c,"&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},4814:function(n,t,e){e.r(t),e.d(t,{default:function(){return C}});var r,a,i,o,c=e(9439),s=e(2791),u=e(7689),p=e(890),l=e(9555),d=e(168),f=e(7402),h=f.Z.h1(r||(r=(0,d.Z)(["\n  margin-bottom: 20px;\n  text-align: center;\n  font-size: 36px;\n  text-transform: uppercase;\n"]))),x=e(184),g=function(n){var t=n.children;return(0,x.jsx)(h,{children:t})},v=e(1454),b=f.Z.div(a||(a=(0,d.Z)(["\n  position: absolute;\n  top: 2px;\n  right: 60px;\n"]))),m=f.Z.p(i||(i=(0,d.Z)(["\n  display: inline-block;\n  font-size: 18px;\n  font-weight: 500;\n"]))),w=f.Z.button(o||(o=(0,d.Z)(["\n  margin-left: 10px;\n  min-width: 73px;\n\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n\n  padding: 10px 15px;\n\n  font-weight: 600;\n  color: #fff;\n  background-color: transparent;\n  border: none;\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);\n\n  border: 1px solid black;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background-color 200ms linear;\n\n  :hover:not(.active),\n  :focus:not(.active) {\n    background-color: #0d17a7;\n  }\n"]))),Z=function(n){var t=n.handleFindBtnClick,e="day"===n.period?"Week":"Day";return(0,x.jsxs)(b,{children:[(0,x.jsx)(m,{children:"Show by:"}),(0,x.jsx)(w,{type:"button",onClick:t,children:e})]})};function y(n,t){var e=(0,s.useState)((function(){return function(n,t){try{var e=localStorage.getItem(n);return null===e?t:JSON.parse(e)}catch(r){throw new Error("Get state error: ",r.message)}}(n,t)})),r=(0,c.Z)(e,2),a=r[0],i=r[1];return(0,s.useEffect)((function(){!function(n,t){try{var e=JSON.stringify(t);localStorage.setItem(n,e)}catch(r){throw new Error("Set state error: ",r.message)}}(n,a)}),[n,a]),[a,i]}var k="idle",j="pending",S="resolved",_="rejected",C=function(){var n=(0,s.useState)([]),t=(0,c.Z)(n,2),e=t[0],r=t[1],a=(0,s.useState)(k),i=(0,c.Z)(a,2),o=i[0],d=i[1],f=y("trendingPeriod","day"),h=(0,c.Z)(f,2),b=h[0],m=h[1],w=(0,u.TH)();(0,s.useEffect)((function(){d(j),(0,p.vw)(b).then((function(n){r(n),d(S)})).catch((function(n){throw d(_),new Error(n.message)}))}),[b]);var C="day"===b?"Trending today":"Trending this week";return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(g,{children:C}),(0,x.jsx)(Z,{handleFindBtnClick:function(){switch(b){case"day":m("week");break;case"week":m("day");break;default:return console.error("Unknown find by type")}},period:b}),(0,x.jsx)(l.O,{items:e,location:w}),o===j&&(0,x.jsx)(v.a,{})]})}}}]);
//# sourceMappingURL=814.fd8d6d25.chunk.js.map