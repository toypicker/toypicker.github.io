(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{566:function(t,e,n){var content=n(575);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(109).default)("47a13400",content,!0,{sourceMap:!1})},574:function(t,e,n){"use strict";n(566)},575:function(t,e,n){var o=n(108)(!1);o.push([t.i,".no-transition{transition:none!important}",""]),t.exports=o},584:function(t,e,n){"use strict";n.r(e);n(32),n(28),n(37),n(46),n(31),n(47);var o=n(12),l=(n(57),n(347),n(85),n(87),n(7),n(89),n(0)),r=n(587),c=n.n(r),v=n(588);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=l.a.extend({components:{draggable:c.a},data:function(){return{toys:[],players:[],expansion:[],dragOptions:{handle:".drag-handle"},selected:[]}},computed:{savedToys:function(){var t,e;return null!==(e=null===(t=this.$store.state.toys)||void 0===t?void 0:t.toys)&&void 0!==e?e:[]},savedPlayers:function(){var t,e;return null!==(e=null===(t=this.$store.state.players)||void 0===t?void 0:t.players)&&void 0!==e?e:[]}},watch:{savedToys:function(){this.init()},savedPlayers:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){this.toys=this.savedToys.map((function(t){return y({},t)})),this.players=this.savedPlayers.map((function(t){return y({},t)}))},addPlayer:function(){this.players.push({id:this.players.length,name:"Player "+(this.players.length+1)})},removePlayer:function(t){this.players.splice(t,1)},addToy:function(){this.toys.unshift({id:this.toys.length,name:"Toy "+(this.toys.length+1),active:!0,eligblePlayers:this.players.map((function(p){return p.id}))})},removeToy:function(t){this.toys.splice(t,1)},cancel:function(){this.init(),this.$emit("config:close")},save:function(){this.$store.commit("setToys",this.toys),this.$store.commit("setPlayers",this.players),this.$emit("config:close")},isSelected:function(t){return this.selected.includes(t)},toggleSelected:function(t){var e=this.selected.indexOf(t);-1===e?this.selected.push(t):this.selected.splice(e,1)},download:function(){var text=JSON.stringify({players:this.players,toys:this.toys}),t=new Blob([text],{type:"application/json;charset=utf-8"});Object(v.saveAs)(t,"toypicker-".concat((new Date).toISOString().substring(0,10),".json"))},upload:function(){var t,e=this,n=new FileReader;n.onload=function(t){var n;if(null===(n=null==t?void 0:t.target)||void 0===n?void 0:n.result){var data=JSON.parse(t.target.result.toString());e.players=data.players,e.toys=data.toys}};var input=this.$refs.uploadInput;(null===(t=input.files)||void 0===t?void 0:t.length)&&n.readAsText(input.files[0])}}}),h=(n(574),n(100)),m=n(140),_=n.n(m),x=n(701),w=n(596),P=n(558),O=n(689),k=n(690),j=n(691),V=n(692),S=n(693),T=n(612),$=n(616),C=n(583),I=n(617),E=n(560),D=n(694),J=n(695),L=n(699),A=n(698),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-title",[n("v-btn",{attrs:{outlined:"",color:"primary"},on:{click:t.save}},[t._v("Save")]),t._v(" "),n("v-btn",{staticStyle:{"margin-left":"5px"},attrs:{outlined:"",color:"red"},on:{click:t.cancel}},[t._v("Cancel")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary",icon:""},on:{click:t.download}},[n("v-icon",[t._v("mdi-cloud-download")])],1),t._v(" "),n("v-btn",{attrs:{input:"",color:"primary",icon:""},on:{click:function(e){return t.$refs.uploadInput.click()}}},[n("v-icon",[t._v("mdi-cloud-upload")])],1),t._v(" "),n("input",{ref:"uploadInput",staticStyle:{display:"none"},attrs:{type:"file",accept:"application/json"},on:{change:t.upload}})],1),t._v(" "),n("v-card-title",[t._v("Toy configuration")]),t._v(" "),n("v-card-text",[n("v-row",{staticClass:"text-h5"},[n("v-col",[t._v("Players")]),t._v(" "),n("v-col",{attrs:{align:"right"}},[n("v-btn",{attrs:{icon:"",color:"primary",outlined:""},on:{click:function(e){return t.addPlayer()}}},[n("v-icon",[t._v("mdi-plus")])],1)],1)],1),t._v(" "),n("v-row",[n("v-col",[n("v-list",t._l(t.players,(function(e,o){return n("v-list-item",{key:e.id},[n("v-list-item-title",[n("v-text-field",{model:{value:e.name,callback:function(n){t.$set(e,"name",n)},expression:"player.name"}})],1),t._v(" "),n("v-list-item-action",[n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.removePlayer(o)}}},[n("v-icon",[t._v("mdi-delete")])],1)],1)],1)})),1)],1)],1),t._v(" "),n("v-row",{staticClass:"text-h5"},[n("v-col",[t._v("Toys ("+t._s(t.toys.length)+")")]),t._v(" "),n("v-col",{attrs:{align:"right"}},[n("v-btn",{attrs:{icon:"",color:"primary",outlined:""},on:{click:function(e){return t.addToy()}}},[n("v-icon",[t._v("mdi-plus")])],1)],1)],1),t._v(" "),n("v-row",[n("v-expansion-panels",{attrs:{multiple:""},model:{value:t.expansion,callback:function(e){t.expansion=e},expression:"expansion"}},[n("draggable",t._b({staticStyle:{width:"100%"},attrs:{list:t.toys}},"draggable",t.dragOptions,!1),t._l(t.toys,(function(e){return n("v-expansion-panel",{key:e.id,staticClass:"no-transition"},[n("v-expansion-panel-header",[n("span",{staticStyle:{display:"contents"}},[n("v-icon",{staticClass:"drag-handle",on:{click:function(t){t.stopPropagation()}}},[t._v("mdi-drag-vertical")]),t._v("\n                "+t._s(e.name)+"\n                "),n("v-spacer"),t._v(" "),e.active?n("v-btn",{attrs:{icon:"",color:"yellow darken-1"},on:{click:function(t){t.stopPropagation(),e.active=!1}}},[n("v-icon",[t._v("mdi-lightbulb")])],1):n("v-btn",{attrs:{icon:"",color:"grey"},on:{click:function(t){t.stopPropagation(),e.active=!0}}},[n("v-icon",[t._v("mdi-lightbulb-off")])],1)],1)]),t._v(" "),n("v-expansion-panel-content",[n("v-text-field",{attrs:{outlined:"",label:"Name"},model:{value:e.name,callback:function(n){t.$set(e,"name",n)},expression:"toy.name"}}),t._v(" "),n("span",[t._v("Roll for")]),t._v(" "),t._l(t.players,(function(o){return n("v-switch",{key:o.id,attrs:{label:o.name,value:o.id},model:{value:e.eligblePlayers,callback:function(n){t.$set(e,"eligblePlayers",n)},expression:"toy.eligblePlayers"}})})),t._v(" "),n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",[n("v-switch",{attrs:{label:"Include in rolls"},model:{value:e.active,callback:function(n){t.$set(e,"active",n)},expression:"toy.active"}})],1),t._v(" "),n("v-col",{attrs:{cols:"4",align:"right"}},[n("v-btn",{attrs:{color:"grey",outlined:"",icon:""},on:{click:function(e){return t.removeToy(t.index)}}},[n("v-icon",[t._v("mdi-delete")])],1)],1)],1)],2)],1)})),1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;_()(component,{VBtn:x.a,VCard:w.a,VCardText:P.a,VCardTitle:P.b,VCol:O.a,VExpansionPanel:k.a,VExpansionPanelContent:j.a,VExpansionPanelHeader:V.a,VExpansionPanels:S.a,VIcon:T.a,VList:$.a,VListItem:C.a,VListItemAction:I.a,VListItemTitle:E.a,VRow:D.a,VSpacer:J.a,VSwitch:L.a,VTextField:A.a})}}]);