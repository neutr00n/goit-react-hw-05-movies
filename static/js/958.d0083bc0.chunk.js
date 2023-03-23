"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[958],{1454:function(n,t,e){e.d(t,{a:function(){return s}});var r,i=e(8966),a=e(168),o=e(7402).Z.div(r||(r=(0,a.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 85vh;\n"]))),c=e(184),s=function(){return(0,c.jsx)(o,{children:(0,c.jsx)(i.iT,{height:180,width:180,color:"#4fa94d",wrapperClass:"",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#4fa94d",strokeWidth:2,strokeWidthSecondary:2})})}},890:function(n,t,e){e.d(t,{EI:function(){return l},FE:function(){return v},l7:function(){return d},vw:function(){return s},wH:function(){return x}});var r=e(5861),i=e(4687),a=e.n(i),o=e(1243);o.Z.defaults.baseURL="https://api.themoviedb.org/3";var c=new URLSearchParams({api_key:"193a1318aa83a5b49d1c16448163261b"});function s(n){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/trending/movie/".concat(t,"?").concat(c));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"?").concat(c));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"/credits?").concat(c));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"/reviews?").concat(c));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/search/movie?".concat(c,"&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},6958:function(n,t,e){e.r(t),e.d(t,{default:function(){return J}});var r,i,a,o,c,s,u,d,p,l,f,x,h,v=e(9439),m=e(2791),g=e(7689),b=e(890),Z=e(168),w=e(7402),j=w.Z.div(r||(r=(0,Z.Z)(["\n  display: flex;\n"]))),k=w.Z.img(i||(i=(0,Z.Z)(["\n  border-radius: 8px;\n  width: 300px;\n"]))),y=w.Z.div(a||(a=(0,Z.Z)(["\n  margin-left: 24px;\n"]))),_=w.Z.h1(o||(o=(0,Z.Z)(["\n  margin-bottom: 20px;\n"]))),C=w.Z.b(c||(c=(0,Z.Z)(["\n  display: block;\n  margin-bottom: 10px;\n\n  font-size: 18px;\n"]))),L=w.Z.p(s||(s=(0,Z.Z)(["\n  margin-bottom: 20px;\n\n  font-size: 18px;\n  line-height: 1.2;\n"]))),z=w.Z.div(u||(u=(0,Z.Z)(["\n  display: flex;\n  margin-bottom: 20px;\n  align-items: baseline;\n"]))),E=w.Z.b(d||(d=(0,Z.Z)(["\n  font-size: 18px;\n"]))),O=w.Z.p(p||(p=(0,Z.Z)(["\n  margin-left: 10px;\n\n  font-size: 18px;\n  line-height: 1.2;\n"]))),S=e(184),U=function(n){var t=n.movie,e=t.poster_path,r=t.original_title,i=t.vote_average,a=t.release_date,o=t.overview,c=t.genres,s=a.slice(0,4),u=(100*i/10).toFixed(2),d=c.map((function(n){return n.name})).join(", "),p=e?"https://image.tmdb.org/t/p/w300/".concat(e):"https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg";return(0,S.jsxs)(j,{children:[(0,S.jsx)(k,{src:p,alt:"".concat(r," poster")}),(0,S.jsxs)(y,{children:[(0,S.jsxs)(_,{children:[r," (",s,")"]}),(0,S.jsx)(C,{children:"Overview"}),(0,S.jsx)(L,{children:o}),(0,S.jsxs)(z,{children:[(0,S.jsx)(E,{children:"User score:"}),(0,S.jsxs)(O,{children:[u,"%"]})]}),(0,S.jsx)(C,{children:"Genres"}),(0,S.jsx)(L,{children:d})]})]})},F=e(1087),R=w.Z.div(l||(l=(0,Z.Z)(["\n  margin: 20px 0;\n  text-align: center;\n"]))),G=w.Z.div(f||(f=(0,Z.Z)(["\n  padding: 10px;\n"]))),H=(0,w.Z)(F.OL)(x||(x=(0,Z.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n\n  padding: 10px;\n\n  font-weight: 600;\n  color: #fff;\n\n  border: 1px solid black;\n  border-radius: 8px;\n  transition: background-color 200ms linear;\n\n  &.active {\n    color: #0d17a7;\n    background-color: #777777;\n    box-shadow: 0px 5px 5px 0px rgba(35, 33, 33, 0.5) inset;\n    border-radius: 8px;\n  }\n\n  :hover:not(.active),\n  :focus:not(.active) {\n    background-color: #0d17a7;\n  }\n\n  :nth-of-type(2) {\n    margin-left: 10px;\n  }\n"]))),I=function(n){var t=n.location;return(0,S.jsxs)(R,{children:[(0,S.jsx)("h2",{children:"Additional information"}),(0,S.jsxs)(G,{children:[(0,S.jsx)(H,{to:"cast",state:{from:t},children:"Cast"}),(0,S.jsx)(H,{to:"reviews",state:{from:t},children:"Reviews"})]})]})},P=e(1454),T=(0,w.Z)(F.OL)(h||(h=(0,Z.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n\n  margin-bottom: 10px;\n  padding: 5px;\n\n  font-weight: 600;\n  color: #fff;\n  background-color: #777777;\n  box-shadow: 0px 5px 5px 0px rgba(35, 33, 33, 0.5) inset;\n\n  border: 1px solid black;\n  border-radius: 8px;\n  transition: background-color 200ms linear;\n\n  :hover:not(.active),\n  :focus:not(.active) {\n    background-color: #0d17a7;\n  }\n"]))),W=function(n){var t=n.to,e=n.children;return(0,S.jsx)(T,{to:t,children:e})},q="idle",A="pending",B="resolved",D="rejected",J=function(){var n,t,e=(0,m.useState)([]),r=(0,v.Z)(e,2),i=r[0],a=r[1],o=(0,m.useState)(q),c=(0,v.Z)(o,2),s=c[0],u=c[1],d=(0,g.UO)().movieId,p=null!==(n=null===(t=(0,g.TH)().state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/";return(0,m.useEffect)((function(){u(A),(0,b.l7)(d).then((function(n){a(n),u(B)})).catch((function(n){throw u(D),new Error(n.message)}))}),[d]),s===B?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(W,{to:p,children:"Go back"}),(0,S.jsx)(U,{movie:i}),(0,S.jsx)(I,{location:p}),(0,S.jsx)(g.j3,{})]}):s===A?(0,S.jsx)(P.a,{}):void 0}}}]);
//# sourceMappingURL=958.d0083bc0.chunk.js.map