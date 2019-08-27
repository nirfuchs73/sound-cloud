(window["webpackJsonpsound-cloud"]=window["webpackJsonpsound-cloud"]||[]).push([[0],{31:function(e,t,n){e.exports=n(42)},36:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(17),i=n.n(c),s=(n(36),n(7)),l=n(9),o=n(19),u=n(30),h="SET_SEARCH",p="SET_HISTORY",d="SET_TRACKS",k="SET_CURRENT_TRACK_ID",m={search:"",history:[],tracks:[],currentTrackID:3474914},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object.assign({},e,{search:t.value});case p:var n=Object(u.a)(e.history);return n.includes(t.value)||(5===n.length&&n.shift(),n.push(t.value)),Object.assign({},e,{history:n});case d:return Object.assign({},e,{tracks:t.value});case k:return Object.assign({},e,{currentTrackID:t.value});default:return e}},y=Object(o.b)(f),E=n(10),v=n(11),C=n(14),g=n(12),b=n(15),O=n(13),T=n(22),j=n.n(T);j.a.initialize({client_id:"ggX0UomnLs0VmW7qZnCzw"});var S={query:function(e){return j.a.get("/tracks",{q:e})}},I=function(e){return a.a.createElement("div",null,a.a.createElement("input",{type:"text",value:e.search,onChange:e.searchChange,placeholder:"Search tracks..."}),a.a.createElement("button",{onClick:e.searchClicked},"Go"))},D=function(e){return a.a.createElement("div",{onClick:e.resultClicked},a.a.createElement("p",null,e.title))},w=function(e){var t=e.tracksToDisplay.map(function(t){return a.a.createElement(s.b,{to:"/play",key:t.id},a.a.createElement(D,{title:t.title,resultClicked:function(){return e.resultClicked(t.id)}}))});return a.a.createElement("div",null,t)};function x(e){return{type:h,value:e}}var _=function(e){function t(){var e,n;Object(E.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(C.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(a)))).state={page:0,tracksToDisplay:[]},n.searchChange=function(e){n.props.setSearch(e.target.value)},n.nextClicked=function(){n.setState(function(e){return{page:e.page+1}},function(){var e=6*n.state.page,t=n.props.tracks.slice(e,e+6);n.setState({tracksToDisplay:t},function(){})})},n.searchClicked=function(){console.log("SearchClicked"),n.props.setHistory(n.props.search),S.query(n.props.search).then(function(e){n.props.setTracks(e);var t=6*n.state.page,r=n.props.tracks.slice(t,t+6);n.setState({tracksToDisplay:r},function(){})})},n.resultClicked=function(e){n.props.setCurrentTrackID(e)},n}return Object(b.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){if(this.props.search){this.searchClicked();var e=6*this.state.page,t=this.props.tracks.slice(e,e+6);this.setState({tracksToDisplay:t})}}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"The Search Page"),a.a.createElement(I,{search:this.props.search,searchChange:this.searchChange,searchClicked:this.searchClicked,nextClicked:this.nextClicked}),a.a.createElement(w,{tracksToDisplay:this.state.tracksToDisplay,resultClicked:this.resultClicked}),a.a.createElement("button",{onClick:this.nextClicked},"Next"))}}]),t}(r.Component),A=Object(O.a)(function(e){return{search:e.search,history:e.history,tracks:e.tracks,currentTrackID:e.currentTrackID}},function(e){return{setSearch:function(t){e(x(t))},setHistory:function(t){e(function(e){return{type:p,value:e}}(t))},setTracks:function(t){e(function(e){return{type:d,value:e}}(t))},setCurrentTrackID:function(t){e({type:k,value:t})}}})(_),H=n(29),R=n.n(H),P=function(e){return a.a.createElement("div",null,a.a.createElement(R.a,{url:"https://api.soundcloud.com/tracks/"+e.id}))},q=function(e){function t(){return Object(E.a)(this,t),Object(C.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"The Play Page"),a.a.createElement(P,{id:this.props.currentTrackID}))}}]),t}(r.Component),N=Object(O.a)(function(e){return{currentTrackID:e.currentTrackID}},null)(q),W=function(e){return a.a.createElement("div",{onClick:e.historyItemClicked},a.a.createElement("p",null,e.title))},z=function(e){var t=e.history.map(function(t,n){return a.a.createElement(s.b,{to:"/search",key:n},a.a.createElement(W,{title:t,historyItemClicked:function(){return e.historyItemClicked(t)}}))});return a.a.createElement("div",null,t)},B=function(e){function t(){var e,n;Object(E.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(C.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(a)))).historyItemClicked=function(e){console.log("historyItemClicked"),n.props.setSearch(e)},n}return Object(b.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"Search History"),a.a.createElement(z,{history:this.props.history,historyItemClicked:this.historyItemClicked}))}}]),t}(r.Component),J=Object(O.a)(function(e){return{history:e.history}},function(e){return{setSearch:function(t){e(x(t))}}})(B);var K=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("nav",null,a.a.createElement(s.c,{to:"/search"},"Search")," |\xa0",a.a.createElement(s.c,{to:"/play"},"Play")," |\xa0",a.a.createElement(s.c,{to:"/history"},"History")),a.a.createElement(l.c,null,a.a.createElement(l.a,{path:"/search",render:function(e){return a.a.createElement(A,Object.assign({store:y},e))}}),a.a.createElement(l.a,{path:"/play",render:function(e){return a.a.createElement(N,Object.assign({store:y},e))}}),a.a.createElement(l.a,{path:"/history",render:function(e){return a.a.createElement(J,Object.assign({store:y},e))}}),a.a.createElement(l.a,{render:function(){return a.a.createElement("h1",null,"404 Error - Page Not found")}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=a.a.createElement(s.a,null,a.a.createElement(K,null));i.a.render(U,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.aa2b35b1.chunk.js.map