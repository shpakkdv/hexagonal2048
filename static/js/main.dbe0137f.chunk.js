(this.webpackJsonphexagonal2048=this.webpackJsonphexagonal2048||[]).push([[0],{21:function(e,t,a){e.exports={GameField:"styles_GameField__3hfdo",row:"styles_row__2HNAo",item:"styles_item__1hvrl",pointy:"styles_pointy__3O4RL"}},30:function(e,t,a){e.exports={Game:"styles_Game__116Rh",gameTitle:"styles_gameTitle__kjZDa",main:"styles_main__1nWvf"}},42:function(e,t,a){e.exports={NumericInput:"styles_NumericInput__3EzZk"}},43:function(e,t,a){e.exports={RadioButtons:"styles_RadioButtons__2MtDp"}},48:function(e,t,a){e.exports=a(76)},5:function(e,t,a){e.exports={Controls:"styles_Controls__1i-bK",column:"styles_column__10bZm",settings:"styles_settings__WGKl8",startOver:"styles_startOver__1voyR",arrows:"styles_arrows__3affh",arrow:"styles_arrow__3IVv-",text:"styles_text__1p2ML",flat:"styles_flat__3rrgu"}},76:function(e,t,a){"use strict";a.r(t);var n,r,c,o=a(0),l=a.n(o),i=a(23),u=a.n(i),s=a(18);!function(e){e.InProgress="in-progress",e.Finished="finished"}(n||(n={})),function(e){e.Pointy="pointy",e.Flat="flat"}(r||(r={})),function(e){e.Bottom="bottom",e.BottomLeft="bottom-left",e.BottomRight="bottom-right",e.Top="top",e.TopLeft="top-left",e.TopRight="top-right"}(c||(c={}));var m=["KeyQ","KeyW","KeyE","KeyA","KeyS","KeyD"],f=["KeyW","KeyE","KeyA","KeyF","KeyS","KeyD"],d={KeyQ:c.TopLeft,KeyW:c.Top,KeyE:c.TopRight,KeyA:c.BottomLeft,KeyS:c.Bottom,KeyD:c.BottomRight},p={KeyW:c.TopRight,KeyE:c.BottomRight,KeyA:c.Top,KeyF:c.Bottom,KeyS:c.TopLeft,KeyD:c.BottomLeft};function E(e,t){var a={};for(var n in e)a[n]="".concat(t,"_").concat(n);return a}var b=E({MOVE:null,CHANGE_GAME_SIZE:null,SET_APP_STATUS:null,SET_CELL_SIZE:null,SET_GAME_MODE:null,SET_GAME_SIZE:null,START_OVER:null},"Controls"),v=function(e){return{type:b.MOVE,payload:{direction:e}}},g=function(e){return{type:b.SET_APP_STATUS,payload:{appStatus:e}}},y=function(e){return{type:b.SET_GAME_SIZE,payload:{gameSize:e}}},_=a(46),O=a(26),h=a(17),S=a(7),j=a(28),T=a.n(j),x=a(41),N=a.n(x),w=a(42),k=a.n(w),C=function(e){var t=e.onChange,a=e.id,n=e.value,r=e.label,c=e.disabled,i=Object(S.a)(e.range,2),u=i[0],s=i[1],m=e.step,f=void 0===m?1:m,d=e.integer,p=void 0===d||d,E=Object(o.useState)(n),b=Object(S.a)(E,2),v=b[0],g=b[1];Object(o.useEffect)((function(){g(n)}),[n]);var y=Object(o.useCallback)((function(e){var t=e.target.value;if(""!==t){var a=Number(t);isFinite(a)&&g(a)}else g(t)}),[g]),_=Object(o.useCallback)((function(){if(""!==v){var e=p?parseInt(String(v)):Number(v),a=N()(e,u,s);a!==n&&(g(n),t(a))}else g(n)}),[p,n,t,v,g]),O=Object(o.useCallback)((function(e){"Enter"===e.key&&_(e)}),[_]);return l.a.createElement("div",{className:k.a.NumericInput},l.a.createElement("input",{type:"number",id:a,min:u,max:s,step:f,disabled:c,value:v,onChange:y,onBlur:_,onKeyDown:O}),l.a.createElement("label",{htmlFor:a},"".concat(r," (").concat(u," - ").concat(s,")")))},A=a(43),M=a.n(A),z=function(e){var t=e.title,a=e.checkedId,n=e.options,r=e.onChange,c=Object(o.useCallback)((function(e){r(e.target.id)}),[r]);return l.a.createElement("form",{className:M.a.RadioButtons},l.a.createElement("p",null,t),n.map((function(e){var t=e.id,n=e.label;return l.a.createElement("div",{key:t},l.a.createElement("input",{type:"radio",id:t,checked:a===t,onChange:c}),l.a.createElement("label",{htmlFor:t},n))})))},B=a(5),F=a.n(B),G=function(e){var t=e.move,a=e.disabled;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("button",{disabled:a,onClick:function(){return t(c.Top)}},l.a.createElement("span",{className:F.a.arrow},"\u279c"),l.a.createElement("span",{className:F.a.text},"W"))),l.a.createElement("div",null,l.a.createElement("button",{disabled:a,onClick:function(){return t(c.TopLeft)}},l.a.createElement("span",{className:F.a.arrow},"\u279c"),l.a.createElement("span",{className:F.a.text},"Q")),l.a.createElement("button",{disabled:a,onClick:function(){return t(c.TopRight)}},l.a.createElement("span",{className:F.a.text},"E"),l.a.createElement("span",{className:F.a.arrow},"\u279c"))),l.a.createElement("div",null,l.a.createElement("button",{disabled:a,onClick:function(){return t(c.BottomLeft)}},l.a.createElement("span",{className:F.a.text},"A"),l.a.createElement("span",{className:F.a.arrow},"\u279c")),l.a.createElement("button",{disabled:a,onClick:function(){return t(c.Bottom)}},l.a.createElement("span",{className:F.a.arrow},"\u279c"),l.a.createElement("span",{className:F.a.text},"D"))),l.a.createElement("div",null,l.a.createElement("button",{disabled:a,onClick:function(){return t(c.BottomRight)}},l.a.createElement("span",{className:F.a.text},"S"),l.a.createElement("span",{className:F.a.arrow},"\u279c"))))},K=function(e){var t=e.move,a=e.disabled;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("button",{disabled:a,onClick:function(){return t(c.TopRight)}},l.a.createElement("span",{className:F.a.arrow},"\u279c"),l.a.createElement("span",{className:F.a.text},"W")),l.a.createElement("button",{disabled:a,onClick:function(){return t(c.BottomRight)}},l.a.createElement("span",{className:F.a.text},"E"),l.a.createElement("span",{className:F.a.arrow},"\u279c"))),l.a.createElement("div",null,l.a.createElement("button",{disabled:a,onClick:function(){return t(c.Top)}},l.a.createElement("span",{className:F.a.text},"A"),l.a.createElement("span",{className:F.a.arrow},"\u279c")),l.a.createElement("button",{disabled:a,onClick:function(){return t(c.Bottom)}},l.a.createElement("span",{className:F.a.arrow},"\u279c"),l.a.createElement("span",{className:F.a.text},"F"))),l.a.createElement("div",null,l.a.createElement("button",{disabled:a,onClick:function(){return t(c.TopLeft)}},l.a.createElement("span",{className:F.a.text},"S"),l.a.createElement("span",{className:F.a.arrow},"\u279c")),l.a.createElement("button",{disabled:a,onClick:function(){return t(c.BottomLeft)}},l.a.createElement("span",{className:F.a.arrow},"\u279c"),l.a.createElement("span",{className:F.a.text},"D"))))},R=function(e){return e.controls},D=function(e){return R(e).gameSize},I=function(e){return R(e).valuesToAdd},L=function(e){return R(e).gameMode},P=function(e){return R(e).appStatus},Z=function(e){return R(e).cellSize},W=Object(O.a)({appStatus:P,cellSize:Z,gameMode:L,gameSize:D}),V={changeGameSize:function(e){return{type:b.CHANGE_GAME_SIZE,payload:{gameSize:e}}},move:v,setCellSize:function(e){return{type:b.SET_CELL_SIZE,payload:{cellSize:e}}},setGameMode:function(e){return{type:b.SET_GAME_MODE,payload:{gameMode:e}}},startOver:function(){return{type:b.START_OVER}}},H=Object(s.b)(W,V)((function(e){var t=e.appStatus,a=e.startOver,c=e.move,i=e.gameMode,u=e.setGameMode,s=e.gameSize,m=e.changeGameSize,f=e.cellSize,d=e.setCellSize,p=Object(o.useState)(!0),E=Object(S.a)(p,2),b=E[0],v=E[1],g=Object(o.useCallback)((function(){return v((function(e){return!e}))}),[v]),y=i===r.Flat,_=t===n.Finished;return l.a.createElement("div",{className:F.a.Controls},l.a.createElement("div",{className:F.a.column},l.a.createElement("div",{className:F.a.settings},l.a.createElement("p",{onClick:g},l.a.createElement("span",null,b?"\u2013":"+"),"Game settings (click to expand/collapse):"),b&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("button",{className:F.a.startOver,onClick:a},"Start over")),l.a.createElement("div",null,l.a.createElement(C,{id:"game_size",value:s,label:"Game size",range:[2,10],onChange:m})),l.a.createElement("div",null,l.a.createElement(C,{id:"hexagon_size",value:f,label:"Hexagon size",range:[5,200],onChange:d})),l.a.createElement("div",null,l.a.createElement(z,{title:"Select a game mode:",options:[{id:r.Flat,label:"Flat topped"},{id:r.Pointy,label:"Pointy topped"}],checkedId:i,onChange:u}))))),l.a.createElement("div",{className:T()(F.a.column,F.a.arrows,Object(h.a)({},F.a.flat,y))},y?l.a.createElement(K,{move:c,disabled:_}):l.a.createElement(G,{move:c,disabled:_}),l.a.createElement("p",null,"Use keyboard or these buttons")))})),U=a(9),Q=a(14),q=a(21),J=a.n(q),X=function(e){return function(e){return e.gameField}(e).field},Y=Object(O.a)({field:X,gameMode:L,appStatus:P,cellSize:Z}),$=Object(s.b)(Y)((function(e){var t=e.field,a=e.gameMode,n=e.cellSize,c=a===r.Pointy,o="".concat(n,"px"),i={width:o,height:o,lineHeight:o,fontSize:"".concat(n/2.5,"px")},u=!!window.DEBBUG_DEV_MODE;return l.a.createElement("div",{className:T()(J.a.GameField,Object(h.a)({},J.a.pointy,c))},t.map((function(e,t){return l.a.createElement("div",{className:J.a.row,key:t},e.map((function(e){if(!e)return null;var t=Object(S.a)(e,3),a=t[0],n=t[1],r=t[2],c=u?"q: ".concat(a,", r: ").concat(n):void 0,o=r&&Math.log2(r),s=o?Object(Q.clamp)(255-10*o,165,255):255,m=o?Object(Q.clamp)(255-10*o*3,0,255):255,f=Object(U.a)(Object(U.a)({},i),{},{backgroundColor:"rgb(255 ".concat(s," ").concat(m,")")});return l.a.createElement("div",{className:J.a.item,style:f,key:e.join(),title:c},r||"")})))})))})),ee=a(30),te=a.n(ee),ae=function(){return l.a.createElement("div",{className:te.a.Game},l.a.createElement("header",null,l.a.createElement("h1",{className:te.a.gameTitle},"Hexagonal 2048"),l.a.createElement(H,null)),l.a.createElement("main",{className:te.a.main},l.a.createElement($,null)))},ne=(a(65),function(){return l.a.createElement(_.a,null,l.a.createElement(ae,null))}),re=a(12),ce=a(16),oe=a(45),le=a(47);function ie(e){return Array.from({length:Math.max(2,e-2)}).map((function(e,t){return Math.pow(2,t)})).slice(1)}var ue={gameSize:3,valuesToAdd:ie(3),gameMode:r.Pointy,appStatus:n.InProgress,cellSize:40},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.SET_GAME_SIZE:return me(e,t);case b.SET_GAME_MODE:return fe(e,t);case b.SET_APP_STATUS:return de(e,t);case b.SET_CELL_SIZE:return pe(e,t);default:return e}},me=function(e,t){var a=t.payload.gameSize;return Object(U.a)(Object(U.a)({},e),{},{gameSize:a,valuesToAdd:ie(a)})},fe=function(e,t){var a=t.payload.gameMode;return Object(U.a)(Object(U.a)({},e),{},{gameMode:a})},de=function(e,t){var a=t.payload.appStatus;return Object(U.a)(Object(U.a)({},e),{},{appStatus:a})},pe=function(e,t){var a=t.payload.cellSize;return Object(U.a)(Object(U.a)({},e),{},{cellSize:a})},Ee=a(29),be=a.n(Ee);function ve(e){return e.map((function(e){return e.filter((function(e){return e&&!e[2]}))})).flat(1)}function ge(e,t){var a=e.length;if(a<=t)return e;for(var n=new Set;n.size<t;)n.add(be()(0,a-1));return Array.from(n).map((function(t){return e[t]}))}function ye(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,n=ve(e),r=ge(n,a);r.forEach((function(a){var n=Object(S.a)(a,2),r=n[0],c=n[1],o=t[be()(0,t.length-1)];e[c][r][2]=o}))}function _e(e){var t=function(e){var t=2*e-1,a=Math.floor(t/2);return Array.from({length:t}).map((function(e,n){return Array.from({length:t}).map((function(e,r){return n<a&&a>r+n||n>a&&t<=n+r-a?null:[r,n,null]}))}))}(e);return ye(t,ie(e)),t}var Oe=E({SET_FIELD:null},"GameField"),he={field:_e(3)},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Oe.SET_FIELD:return je(e,t);default:return e}},je=function(e,t){var a=t.payload.field;return Object(U.a)(Object(U.a)({},e),{},{field:a})},Te=Object(re.combineReducers)({controls:se,gameField:Se}),xe=a(11),Ne=a.n(xe),we=a(15),ke=a(8),Ce=function(e){return{type:Oe.SET_FIELD,payload:{field:e}}},Ae=Ne.a.mark(Me);function Me(e){var t,a;return Ne.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,t=e.payload.gameSize,confirm("Do you want to start a new game?")){r.next=5;break}return r.abrupt("return");case 5:return a=_e(t),r.next=8,Object(ke.b)(Object(ce.a)([y(t),Ce(a),g(n.InProgress)]));case 8:r.next=13;break;case 10:r.prev=10,r.t0=r.catch(0),console.warn("Error occurred during setting game size.",r.t0);case 13:case"end":return r.stop()}}),Ae,null,[[0,10]])}function ze(e,t,a,n,r){var c=t[a][n];if(c){var o=Object(S.a)(c,3)[2];if(o){var l=r(e,a,n),i=r(t,a,n),u=i.indexOf(c),s=l.slice(u+1),m=i.slice(u+1),f=i[u+1],d=u===i.length-1||!f,p=null!==(null===f||void 0===f?void 0:f[2])&&(null===f||void 0===f?void 0:f[2])!==o;if(!d&&!p){var E=m.find((function(e){return e&&!!e[2]}));if(E){var b=s.find((function(e){return e&&!!e[2]}))||[],v=Object(S.a)(b,3)[2];if(Object(S.a)(E,3)[2]===o&&v===o)E[2]+=o,c[2]=null;else{var g=i.indexOf(E);i[g-1][2]+=o,c[2]=null}}else{m.slice().reverse().find((function(e){return e&&!e[2]}))[2]=o,c[2]=null}}}}}function Be(e,t,a){var n=t.length;if(a===c.Bottom)for(var r=function(e,t,a){return e[t]},o=n-1;o>=0;o--)for(var l=0;l<n;l++)ze(e,t,l,o,r);if(a===c.Top)for(var i=function(e,t,a){return e[t].slice().reverse()},u=0;u<n;u++)for(var s=0;s<n;s++)ze(e,t,s,u,i);if(a===c.BottomLeft)for(var m=function(e,t,a){return e.map((function(e){return e[a]}))},f=0;f<n;f++)for(var d=n-1;d>=0;d--)ze(e,t,d,f,m);if(a===c.TopRight)for(var p=function(e,t,a){return e.map((function(e){return e[a]})).reverse()},E=0;E<n;E++)for(var b=0;b<n;b++)ze(e,t,b,E,p);if(a===c.BottomRight){var v=function(e,t,a){return e.reduce((function(e,n){return n.forEach((function(n){if(n){var r=Object(S.a)(n,2),c=r[0],o=r[1];t+a===c+o&&e.push(n)}})),e}),[])},g=function(){return v.apply(void 0,arguments).reverse()},y=t[0],_=t.map((function(e){return e[n-1]})).slice(1);[].concat(Object(we.a)(y),Object(we.a)(_)).filter(Boolean).map((function(e){return v(t,e[1],e[0])})).flat().forEach((function(a){ze(e,t,a[1],a[0],g)}))}if(a===c.TopLeft){var O=function(e,t,a){return e.reduce((function(e,n){return n.forEach((function(n){if(n){var r=Object(S.a)(n,2),c=r[0],o=r[1];t+a===c+o&&e.push(n)}})),e}),[])},h=t.map((function(e){return e[0]})),j=t[n-1].slice(1);[].concat(Object(we.a)(h),Object(we.a)(j)).filter(Boolean).map((function(e){return function(){return O.apply(void 0,arguments).reverse()}(t,e[1],e[0])})).flat().forEach((function(a){ze(e,t,a[1],a[0],O)}))}}function Fe(e){var t=Object.values(c),a=Object(Q.cloneDeep)(e);return t.forEach((function(e){Be(Object(Q.cloneDeep)(a),a,e)})),!Object(Q.isEqual)(e,a)}var Ge=Ne.a.mark(Ke);function Ke(e){var t,a,r,c,o;return Ne.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,Object(ke.c)(P);case 3:if(l.sent!==n.Finished){l.next=6;break}return l.abrupt("return");case 6:return t=e.payload.direction,l.next=9,Object(ke.c)(I);case 9:return a=l.sent,l.next=12,Object(ke.c)(X);case 12:return r=l.sent,c=Object(Q.cloneDeep)(r),Be(r,c,t),ye(c,a),o=!Fe(c),l.next=19,Object(ke.b)(Object(ce.a)([Ce(c)].concat(Object(we.a)(o?[g(n.Finished)]:[]))));case 19:o&&alert("No more possible moves!"),l.next=25;break;case 22:l.prev=22,l.t0=l.catch(0),console.warn("Error occurred during moving.",l.t0);case 25:case"end":return l.stop()}}),Ge,null,[[0,22]])}var Re=Ne.a.mark(De);function De(e){var t,a;return Ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,confirm("Do you want to start over?")){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,Object(ke.c)(D);case 6:return t=e.sent,a=_e(t),e.next=10,Object(ke.b)(Object(ce.a)([y(t),Ce(a),g(n.InProgress)]));case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.warn("Error occurred during starting over.",e.t0);case 15:case"end":return e.stop()}}),Re,null,[[0,12]])}var Ie=[Object(ke.d)(b.CHANGE_GAME_SIZE,Me),Object(ke.d)(b.MOVE,Ke),Object(ke.d)(b.START_OVER,De)],Le=Ne.a.mark(Pe);function Pe(){var e;return Ne.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(we.a)(Ie),t.next=3,Object(ke.a)(e);case 3:case"end":return t.stop()}}),Le)}var Ze=Object(le.a)(),We=Object(re.createStore)(Object(ce.b)(Te),Object(oe.composeWithDevTools)(Object(re.applyMiddleware)(Ze)));Ze.run(Pe);var Ve=We;u.a.render(l.a.createElement(s.a,{store:Ve},l.a.createElement(ne,null)),document.getElementById("root")),document.addEventListener("keyup",(function(e){var t=e.code,a=Ve.getState().controls.gameMode===r.Flat,n=a?p:d;if((a?f:m).includes(t))return Ve.dispatch(v(n[t]))}))}},[[48,1,2]]]);