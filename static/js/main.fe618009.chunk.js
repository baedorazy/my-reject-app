(this["webpackJsonpmy-reject-app"]=this["webpackJsonpmy-reject-app"]||[]).push([[0],{33:function(e,t,a){e.exports=a(64)},56:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),s=a.n(c),o=a(7),i=a(6);var m=function(){return r.a.createElement("div",{className:"about"},"this page is about")},l=a(15),u=a.n(l),v=a(29),p=a(10),d=a(11),E=a(13),y=a(12),h=a(30),f=a.n(h);a(56);var g=function(e){var t=e.id,a=e.year,n=e.title,c=e.summary,s=e.poster,i=e.genres;return r.a.createElement("div",{className:"movie",id:t,title:n},r.a.createElement(o.b,{to:{pathname:"/movie/".concat(t),state:{year:a,title:n,summary:c,poster:s,genres:i}}},r.a.createElement("img",{src:s,alt:n}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},n),r.a.createElement("h5",{className:"movie__year"},a),r.a.createElement("ul",{className:"movie__genres"},i.map((function(e,t){return r.a.createElement("li",{key:t,id:t},e)}))),r.a.createElement("p",{className:"movie__summary"},c.slice(0,180)," ..."))))},_=(a(62),function(e){Object(E.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(v.a)(u.a.mark((function t(){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(g,{id:e.id,key:e.id,year:e.year,summary:e.summary,poster:e.medium_cover_image,title:e.title,genres:e.genres})}))))}}]),a}(r.a.Component)),b=function(e){Object(E.a)(a,e);var t=Object(y.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;console.log(t),console.log(a),void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location,t=e.state;return e.state?r.a.createElement("div",{className:"movie movie__detail"},r.a.createElement("h1",null,t.title),r.a.createElement("div",{className:"wrap"},r.a.createElement("img",{src:t.poster,alt:""}),r.a.createElement("div",null,r.a.createElement("h5",{className:"movie__year"},t.year),r.a.createElement("ul",{className:"movie__genres"},t.genres.map((function(e,t){return r.a.createElement("li",{key:t,id:t},e)}))),r.a.createElement("p",{className:"movie__summary"},t.summary)))):null}}]),a}(r.a.Component);a(63);var N=function(){return r.a.createElement("nav",null,r.a.createElement(o.b,{to:"/"},"Home"),r.a.createElement(o.b,{to:{pathname:"/about",state:{fromNavigation:!0}}},"About"))};var j=function(){return r.a.createElement(o.a,null,r.a.createElement(N,null),r.a.createElement(i.a,{path:"/",exact:!0,component:_}),r.a.createElement(i.a,{path:"/about",component:m}),r.a.createElement(i.a,{path:"/movie/:id",component:b}))};s.a.render(r.a.createElement(j,null),document.getElementById("baedorazy"))}},[[33,1,2]]]);
//# sourceMappingURL=main.fe618009.chunk.js.map