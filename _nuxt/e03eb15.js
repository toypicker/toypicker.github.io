(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{263:function(t,n,e){var content=e(398);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(109).default)("7388ab72",content,!0,{sourceMap:!1})},338:function(t,n,e){"use strict";var r={data:function(){return{configDialog:!1}}},o=e(100),c=e(139),f=e.n(c),l=e(545),y=e(546),component=Object(o.a)(r,(function(){var t=this.$createElement,n=this._self._c||t;return n("v-app",[n("v-main",{staticClass:"grey lighten-3"},[n("Nuxt")],1)],1)}),[],!1,null,null,null);n.a=component.exports;f()(component,{VApp:l.a,VMain:y.a})},349:function(t,n,e){e(350),t.exports=e(351)},397:function(t,n,e){"use strict";e(263)},398:function(t,n,e){var r=e(108)(!1);r.push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=r},405:function(t,n,e){"use strict";e.r(n),e.d(n,"state",(function(){return f})),e.d(n,"mutations",(function(){return l}));e(34),e(28),e(36),e(8),e(46),e(32),e(47);var r=e(12);function o(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(n){Object(r.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}var f=function(){return{toys:{toys:[]},players:{players:[]}}},l={setPlayers:function(t,n){t.players=c(c({},t.players),{},{players:n})},setToys:function(t,n){t.toys=c(c({},t.toys),{},{toys:n})}}},426:function(t,n){},428:function(t,n){},438:function(t,n){},440:function(t,n){},465:function(t,n){},467:function(t,n){},468:function(t,n){},473:function(t,n){},475:function(t,n){},481:function(t,n){},483:function(t,n){},502:function(t,n){},514:function(t,n){},517:function(t,n){},70:function(t,n,e){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(e(397),e(100)),c=e(139),f=e.n(c),l=e(545),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",{attrs:{dark:""}},[404===t.error.statusCode?e("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):e("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);n.a=component.exports;f()(component,{VApp:l.a})}},[[349,6,3,7]]]);