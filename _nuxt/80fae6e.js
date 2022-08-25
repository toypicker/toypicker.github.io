(window.webpackJsonp=window.webpackJsonp||[]).push([[5,4],{557:function(t,n,e){var content=e(566);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(109).default)("47a13400",content,!0,{sourceMap:!1})},565:function(t,n,e){"use strict";e(557)},566:function(t,n,e){var o=e(108)(!1);o.push([t.i,".no-transition{transition:none!important}",""]),t.exports=o},575:function(t,n,e){"use strict";e.r(n);e(34),e(28),e(36),e(46),e(32),e(47);var o=e(12),r=(e(56),e(340),e(85),e(87),e(8),e(89),e(0)),l=e(578),c=e.n(l),v=e(579);function d(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(n){Object(o.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}var f=r.a.extend({components:{draggable:c.a},data:function(){return{toys:[],players:[],expansion:[],dragOptions:{handle:".drag-handle"},selected:[]}},computed:{savedToys:function(){var t,n;return null!==(n=null===(t=this.$store.state.toys)||void 0===t?void 0:t.toys)&&void 0!==n?n:[]},savedPlayers:function(){var t,n;return null!==(n=null===(t=this.$store.state.players)||void 0===t?void 0:t.players)&&void 0!==n?n:[]}},watch:{savedToys:function(){this.init()},savedPlayers:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){this.toys=this.savedToys.map((function(t){return y({},t)})),this.players=this.savedPlayers.map((function(t){return y({},t)}))},addPlayer:function(){this.players.push({id:this.players.length,name:"Player "+(this.players.length+1)})},removePlayer:function(t){this.players.splice(t,1)},addToy:function(){this.toys.unshift({id:this.toys.length,name:"Toy "+(this.toys.length+1),active:!0,eligblePlayers:this.players.map((function(p){return p.id}))})},removeToy:function(t){this.toys.splice(t,1)},cancel:function(){this.init(),this.$emit("config:close")},save:function(){this.$store.commit("setToys",this.toys),this.$store.commit("setPlayers",this.players),this.$emit("config:close")},isSelected:function(t){return this.selected.includes(t)},toggleSelected:function(t){var n=this.selected.indexOf(t);-1===n?this.selected.push(t):this.selected.splice(n,1)},download:function(){var text=JSON.stringify({players:this.players,toys:this.toys}),t=new Blob([text],{type:"application/json;charset=utf-8"});Object(v.saveAs)(t,"toypicker-".concat((new Date).toISOString().substring(0,10),".json"))},upload:function(){var t,n=this,e=new FileReader;e.onload=function(t){var e;if(null===(e=null==t?void 0:t.target)||void 0===e?void 0:e.result){var data=JSON.parse(t.target.result.toString());n.players=data.players,n.toys=data.toys}};var input=this.$refs.uploadInput;(null===(t=input.files)||void 0===t?void 0:t.length)&&e.readAsText(input.files[0])}}}),h=(e(565),e(100)),m=e(139),_=e.n(m),w=e(692),x=e(587),P=e(550),k=e(680),T=e(681),O=e(682),V=e(683),j=e(684),C=e(603),S=e(607),$=e(574),D=e(608),I=e(551),E=e(685),N=e(686),A=e(690),M=e(689),component=Object(h.a)(f,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-card",[e("v-card-title",[e("v-btn",{attrs:{outlined:"",color:"primary"},on:{click:t.save}},[t._v("Save")]),t._v(" "),e("v-btn",{staticStyle:{"margin-left":"5px"},attrs:{outlined:"",color:"red"},on:{click:t.cancel}},[t._v("Cancel")]),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{color:"primary",icon:""},on:{click:t.download}},[e("v-icon",[t._v("mdi-cloud-download")])],1),t._v(" "),e("v-btn",{attrs:{input:"",color:"primary",icon:""},on:{click:function(n){return t.$refs.uploadInput.click()}}},[e("v-icon",[t._v("mdi-cloud-upload")])],1),t._v(" "),e("input",{ref:"uploadInput",staticStyle:{display:"none"},attrs:{type:"file",accept:"application/json"},on:{change:t.upload}})],1),t._v(" "),e("v-card-title",[t._v("Toy configuration")]),t._v(" "),e("v-card-text",[e("v-row",{staticClass:"text-h5"},[e("v-col",[t._v("Players")]),t._v(" "),e("v-col",{attrs:{align:"right"}},[e("v-btn",{attrs:{icon:"",color:"primary",outlined:""},on:{click:function(n){return t.addPlayer()}}},[e("v-icon",[t._v("mdi-plus")])],1)],1)],1),t._v(" "),e("v-row",[e("v-col",[e("v-list",t._l(t.players,(function(n,o){return e("v-list-item",{key:n.id},[e("v-list-item-title",[e("v-text-field",{model:{value:n.name,callback:function(e){t.$set(n,"name",e)},expression:"player.name"}})],1),t._v(" "),e("v-list-item-action",[e("v-btn",{attrs:{icon:""},on:{click:function(n){return t.removePlayer(o)}}},[e("v-icon",[t._v("mdi-delete")])],1)],1)],1)})),1)],1)],1),t._v(" "),e("v-row",{staticClass:"text-h5"},[e("v-col",[t._v("Toys ("+t._s(t.toys.length)+")")]),t._v(" "),e("v-col",{attrs:{align:"right"}},[e("v-btn",{attrs:{icon:"",color:"primary",outlined:""},on:{click:function(n){return t.addToy()}}},[e("v-icon",[t._v("mdi-plus")])],1)],1)],1),t._v(" "),e("v-row",[e("v-expansion-panels",{attrs:{multiple:""},model:{value:t.expansion,callback:function(n){t.expansion=n},expression:"expansion"}},[e("draggable",t._b({staticStyle:{width:"100%"},attrs:{list:t.toys}},"draggable",t.dragOptions,!1),t._l(t.toys,(function(n){return e("v-expansion-panel",{key:n.id,staticClass:"no-transition"},[e("v-expansion-panel-header",[e("span",{staticStyle:{display:"contents"}},[e("v-icon",{staticClass:"drag-handle",on:{click:function(t){t.stopPropagation()}}},[t._v("mdi-drag-vertical")]),t._v("\n                "+t._s(n.name)+"\n                "),e("v-spacer"),t._v(" "),n.active?e("v-btn",{attrs:{icon:"",color:"yellow darken-1"},on:{click:function(t){t.stopPropagation(),n.active=!1}}},[e("v-icon",[t._v("mdi-lightbulb")])],1):e("v-btn",{attrs:{icon:"",color:"grey"},on:{click:function(t){t.stopPropagation(),n.active=!0}}},[e("v-icon",[t._v("mdi-lightbulb-off")])],1)],1)]),t._v(" "),e("v-expansion-panel-content",[e("v-text-field",{attrs:{outlined:"",label:"Name"},model:{value:n.name,callback:function(e){t.$set(n,"name",e)},expression:"toy.name"}}),t._v(" "),e("span",[t._v("Roll for")]),t._v(" "),t._l(t.players,(function(o){return e("v-switch",{key:o.id,attrs:{label:o.name,value:o.id},model:{value:n.eligblePlayers,callback:function(e){t.$set(n,"eligblePlayers",e)},expression:"toy.eligblePlayers"}})})),t._v(" "),e("v-row",{attrs:{justify:"center",align:"center"}},[e("v-col",[e("v-switch",{attrs:{label:"Include in rolls"},model:{value:n.active,callback:function(e){t.$set(n,"active",e)},expression:"toy.active"}})],1),t._v(" "),e("v-col",{attrs:{cols:"4",align:"right"}},[e("v-btn",{attrs:{color:"grey",outlined:"",icon:""},on:{click:function(n){return t.removeToy(t.index)}}},[e("v-icon",[t._v("mdi-delete")])],1)],1)],1)],2)],1)})),1)],1)],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports;_()(component,{VBtn:w.a,VCard:x.a,VCardText:P.a,VCardTitle:P.b,VCol:k.a,VExpansionPanel:T.a,VExpansionPanelContent:O.a,VExpansionPanelHeader:V.a,VExpansionPanels:j.a,VIcon:C.a,VList:S.a,VListItem:$.a,VListItemAction:D.a,VListItemTitle:I.a,VRow:E.a,VSpacer:N.a,VSwitch:A.a,VTextField:M.a})},688:function(t,n,e){"use strict";e.r(n);e(56),e(36),e(8),e(37),e(217),e(340),e(88);var o=e(0),r=e(575),l=o.a.extend({components:{ToyConfiguration:r.default},data:function(){return{session:[],configDialog:!1}},computed:{toys:function(){var t,n;return null!==(n=null===(t=this.$store.state.toys)||void 0===t?void 0:t.toys)&&void 0!==n?n:[]},players:function(){var t,n;return null!==(n=null===(t=this.$store.state.players)||void 0===t?void 0:t.players)&&void 0!==n?n:[]},playableToys:function(){var t=this;return this.toys.filter((function(n){return n.active&&!t.session.some((function(t){return t.toyId===n.id}))})).map((function(n){return{id:n.id,name:n.name,players:n.eligblePlayers.map((function(n){var e,o;return null!==(o=null===(e=t.players.find((function(t){return t.id===n})))||void 0===e?void 0:e.name)&&void 0!==o?o:"Unknown"}))}}))}},methods:{createRandomPlay:function(){if(!this.playableToys.length)return{toyId:-1,toy:"N/A",player:"N/A"};var t=this.playableToys[Math.floor(Math.random()*this.playableToys.length)],n=t.players[Math.floor(Math.random()*t.players.length)];return{toyId:t.id,toy:t.name,player:n}},roll:function(t){this.session.splice(t,1,this.createRandomPlay())},spin:function(t){var n=this;!function e(o){var r;setTimeout((function(){n.playableToys.length&&(n.roll(t),o<15&&e(++o))}),(r=o,-200*(r/=15)*(r-2)+10))}(0)},newSession:function(){this.session=[]},readyToPlay:function(){return this.players.length>0&&this.toys.length>0}}}),c=e(100),v=e(139),d=e.n(v),y=e(692),f=e(587),h=e(550),m=e(680),_=e(693),w=e(687),x=e(603),P=e(691),k=e(685),component=Object(c.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-container",[e("v-row",[e("v-col",[e("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.session.length>0,expression:"session.length > 0"}],attrs:{outlined:"",color:"primary"},on:{click:function(n){return t.newSession()}}},[t._v("New session")])],1),t._v(" "),t.readyToPlay()?e("v-col",{attrs:{align:"right"}},[e("v-btn",{attrs:{icon:"",large:""},on:{click:function(n){t.configDialog=!t.configDialog}}},[e("v-icon",[t._v("mdi-cog")])],1)],1):t._e()],1),t._v(" "),t.readyToPlay()?e("v-row",{attrs:{justify:"center"}},[e("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[e("v-row",{attrs:{align:"center"}},[t._l(t.session,(function(n,o){return e("v-col",{key:o,attrs:{cols:"12",sm:"6",md:"4"}},[e("v-card",{attrs:{elevation:"2"}},[e("v-card-text",{attrs:{align:"center"}},[e("span",[t.playableToys.length>0?e("v-btn",{attrs:{icon:"",large:"",color:"primary"},on:{click:function(n){return t.spin(o)}}},[e("v-icon",[t._v("mdi-refresh")])],1):t._e()],1),t._v(" "),e("p",{staticClass:"text-h4"},[t._v(t._s(n.toy))]),t._v(" "),e("v-icon",{attrs:{"x-large":""}},[t._v("mdi-arrow-down")]),t._v(" "),e("p",{staticClass:"text-h4"},[t._v(t._s(n.player))])],1)],1)],1)})),t._v(" "),e("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[e("v-card-text",{attrs:{align:"center"}},[t.playableToys.length>0?e("v-btn",{attrs:{color:"primary",icon:"","x-large":""},on:{click:function(n){return t.spin(t.session.length)}}},[e("v-img",{attrs:{"max-width":"56",src:"android-chrome-512x512.png"}})],1):e("span",[t._v("No more toys to play with")])],1)],1)],2)],1)],1):e("v-row",[e("v-col",[e("v-card",[e("v-row",[e("v-col",{attrs:{align:"center"}},[e("v-card-text",[e("v-row",[e("v-col",[t._v("Add players and toys to begin")])],1),t._v(" "),e("v-row",[e("v-col",[e("v-btn",{attrs:{icon:"",fab:"","x-large":""},on:{click:function(n){t.configDialog=!t.configDialog}}},[e("v-icon",{staticClass:"text-h3"},[t._v("mdi-cog")])],1)],1)],1)],1)],1)],1)],1)],1)],1),t._v(" "),e("v-dialog",{attrs:{fullscreen:""},model:{value:t.configDialog,callback:function(n){t.configDialog=n},expression:"configDialog"}},[e("ToyConfiguration",{on:{"config:close":function(n){t.configDialog=!1}}})],1)],1)}),[],!1,null,null,null);n.default=component.exports;d()(component,{ToyConfiguration:e(575).default}),d()(component,{VBtn:y.a,VCard:f.a,VCardText:h.a,VCol:m.a,VContainer:_.a,VDialog:w.a,VIcon:x.a,VImg:P.a,VRow:k.a})}}]);