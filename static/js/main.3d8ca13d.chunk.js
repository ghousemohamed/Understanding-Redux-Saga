(this["webpackJsonpredux-saga"]=this["webpackJsonpredux-saga"]||[]).push([[0],{37:function(e,t,n){e.exports=n(70)},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(14),u=n.n(c),s=n(34),o=n(12),i=n(8),l=n(29),p=(n(47),n(15)),f={message:"hello from reducer",images:[]},d=Object(i.combineReducers)({reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_TYPE":case"LOAD_IMAGES":return Object(p.a)({},e);case"LOAD_IMAGE":return Object(p.a)({},e,{images:t.payload});default:return e}}}),m=n(33),b=n(9),h=n.n(b),O=n(10),j=(n(49),function(){return{type:"LOAD_IMAGES"}}),v=function(e){return{type:"LOAD_IMAGE",payload:e}},E=h.a.mark(y),g=h.a.mark(_),w=1,x=function(e){return e.reducer.message},A=function(){var e,t;return h.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,h.a.awrap(fetch("https://api.unsplash.com/photos/?client_id=5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02&per_page=20&page=".concat(w)));case 2:return e=n.sent,n.next=5,h.a.awrap(e.json());case 5:if(t=n.sent,!(e.status>400)){n.next=8;break}throw new Error(t.errors);case 8:return w+=1,n.abrupt("return",t);case 10:case"end":return n.stop()}}))};function y(){var e,t;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(O.c)(x);case 2:return e=n.sent,n.next=5,Object(O.a)(A,e);case 5:return t=n.sent,n.next=8,Object(O.b)(v(t));case 8:case"end":return n.stop()}}),E)}function _(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.d)("LOAD_IMAGES",y);case 2:case"end":return e.stop()}}),g)}var k=_,D=function(){var e=Object(m.a)(),t=Object(i.createStore)(d,Object(l.composeWithDevTools)(Object(i.applyMiddleware)(e)));return e.run(k),t},I=(n(68),Object(o.b)((function(e){return{state:e.reducer}}),(function(e){return{load:function(){return e({type:"LOAD_IMAGES"})}}}))((function(e){var t=e.load;return a.a.createElement("header",{onClick:function(e){t()}},"What the Splash")}))),M=n(30),L=n(31),S=n(35),G=n(32),N=n(36),C=(n(69),function(e){function t(){return Object(M.a)(this,t),Object(S.a)(this,Object(G.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(L.a)(t,[{key:"render",value:function(){var e=this.props.state.images;return a.a.createElement("div",{className:"content"},a.a.createElement("section",{className:"grid"},e.map((function(e){return a.a.createElement("div",{key:e.id,className:"item item-".concat(Math.ceil(e.height/e.width))},a.a.createElement("img",{src:e.urls.small,alt:e.user.username}))}))))}}]),t}(r.Component)),J=Object(o.b)((function(e){return{state:e.reducer}}),{loadImages:j})(C),T=D();var W=function(){var e=Object(r.useState)([]),t=Object(s.a)(e,2);return t[0],t[1],a.a.createElement(o.a,{store:T},a.a.createElement(r.Fragment,null,a.a.createElement(I,null),a.a.createElement(J,null)))};u.a.render(a.a.createElement(W,null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.3d8ca13d.chunk.js.map