(function(t){function e(e){for(var s,o,c=e[0],r=e[1],l=e[2],f=0,u=[];f<c.length;f++)o=c[f],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&u.push(n[o][0]),n[o]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);d&&d(e);while(u.length)u.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,c=1;c<a.length;c++){var r=a[c];0!==n[r]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},n={app:0},i=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=r;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("85ec"),n=a.n(s);n.a},"06b0":function(t,e,a){},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=i(t);return a(e)}function i(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=i,t.exports=n,n.id="4678"},"4ac5":function(t,e,a){"use strict";var s=a("78cf"),n=a.n(s);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("b0c0"),a("dc5a");var s=a("56cd"),n=(a("3b18"),a("f64c")),i=(a("30a0"),a("83d8")),o=(a("16c9"),a("387a")),c=(a("55ec"),a("a79d")),r=(a("34c0"),a("9fd0")),l=(a("0032"),a("e32c")),d=(a("de6a"),a("9a63")),f=(a("7f6b"),a("8592")),u=(a("d88f"),a("fe2b")),p=(a("8fb1"),a("0c63")),m=(a("6ba6"),a("5efb")),_=(a("e260"),a("e6cf"),a("cca6"),a("a79df"),a("2b0e")),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},g=[],j=(a("c975"),a("ac1f"),a("466d"),a("1276"),a("d3b7"),a("bc3a")),h=a.n(j),v=h.a.create({baseURL:"https://www.enjoygo.top",timeout:35e3});v.interceptors.request.use((function(t){return t.headers["client_id"]="app",t.headers["client_secret"]="app",t}),(function(t){console.log(t),Promise.reject(t)})),v.interceptors.response.use((function(t){var e=t.data;return 200===e.code||e.access_token?t.data:(401===e.code||e.code,Promise.reject("error"))}),(function(t){return console.log(t),Promise.reject(t)}));var y=v;function w(t){return y({url:"/api/home/subjectList",method:"get",params:t})}function k(t){return y({url:"/api/home/subjectDetail",method:"get",params:t})}function x(t){return y({url:"/api/mp/signature",method:"get",params:t})}function C(t){return y({url:"/api/home/subjectCategoryList",method:"get",params:t})}var z=a("18a0"),S=a.n(z),O={name:"App",beforeCreate:function(){var t=navigator.userAgent.toLowerCase();"micromessenger"==t.match(/MicroMessenger/i)?console.log("微信内"):console.log("浏览器");var e={url:encodeURIComponent(window.location.href.split("#")[0])};x(e).then((function(t){console.log(t);var e=t.data;S.a.config({debug:!1,appId:e.appId,timestamp:e.timestamp,nonceStr:e.nonceStr,signature:e.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage"]})}));var a=null,s=window.location.href;s.indexOf("categoryId")>-1?(a=s.substr(s.indexOf("categoryId")).split("=")[1],console.log("我是"+a)):a=0,window.localStorage.setItem("categoryId",a)}},I=O,M=(a("034f"),a("2877")),E=Object(M["a"])(I,b,g,!1,null,null,null),P=E.exports,L=a("8c4f"),$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"title",rawName:"v-title"},{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"scroll_box",attrs:{"data-title":t.ptitle,"infinite-scroll-disabled":t.loading,"infinite-scroll-distance":10}},[a("a-list",{attrs:{"data-source":t.listinfo,locale:{emptyText:"此处空空如也~~"}},scopedSlots:t._u([{key:"renderItem",fn:function(e){return a("a-list-item",{},[a("div",{staticClass:"item_box width_100 pd_left_10 pd_right_10"},[a("div",{staticClass:"mg_top_10 mg_bottom_10 width_100 shadow_a",on:{click:function(a){return t.GoDetail(e)}}},[a("div",{staticClass:"img_out_box"},[a("div",{staticClass:"img_box border_radius_4"},[a("img",{attrs:{src:e.pic}})])]),a("div",{staticClass:"mg_top_5 pd_left_10 pd_right_10"},[a("a-row",{attrs:{gutter:[10,10]}},[a("a-col",{attrs:{span:19}},[a("div",{staticClass:"dispaly-ellipsis color_black_a font_size_17 bold"},[t._v(t._s(e.title))])]),a("a-col",{attrs:{span:5}},[a("div",{staticClass:"text_align_right font_size_17 color_gray_b"},[a("a-icon",{attrs:{type:"eye",theme:"twoTone",twoToneColor:"#d2d2d2"}}),a("span",{staticClass:"pd_left_5"},[t._v(t._s(e.readCount))])],1)])],1)],1),a("div",{staticClass:"mg_top_5 pd_left_10 pd_right_10 pd_bottom_10"},[a("a-row",{attrs:{gutter:[0,0]}},[a("a-col",{attrs:{span:24}},[a("div",{staticClass:"dispaly-webkit-box font_size_15 color_gray_a"},[t._v(t._s(e.description))])])],1)],1)])])])}}])},[t.loading?a("div",{staticClass:"loading_box"},[a("a-spin")],1):t._e()])],1)},G=[],q=(a("99af"),a("4160"),a("159b"),a("487a")),N=a.n(q),A={directives:{infiniteScroll:N.a},data:function(){return{listinfo:[],loading:!1,curpage:0,ptitle:"ENJOYGO享购",cur_category:{}}},methods:{GetList:function(){var t=this,e={pageSize:t.curpage,pageNum:999,categoryId:t.categoryld};w(e).then((function(e){t.loading=!1,1==t.curpage?t.listinfo=e.data:t.listinfo=t.listinfo.concat(e.data),t.ptitle=e.data.categoryName}))},loadMore:function(){this.curpage++,this.loading=!0,this.GetList()},GoDetail:function(t){this.$router.push({path:"/detail/article",query:{pid:t.id,ptitle:t.title}})},GetCategoryList:function(){var t=this,e={pageSize:1,pageNum:999};C(e).then((function(e){var a=e.data;a.forEach((function(e){e.id==t.categoryld&&(t.cur_category=e)}))}))},ShareArticle:function(){var t=0==this.categoryId?"全部文章":this.cur_category.name,e="在这里，我会与你们分享三块内容：1：地球上的小天使，我们怎样教育他们，保护他们，会在这里分享一些资源；2：在平淡的生活中，总有想去的地方，和enjoy go一起获得最新旅行信息；3：我用心搜集的，可以提升幸福感的全球小众精品。",a=0==this.categoryId?"https://cdn.jsdelivr.net/gh/objstore/static001/images/article_qrcode_bg.png":this.cur_category.icon;S.a.ready((function(){S.a.onMenuShareAppMessage({title:t,desc:e,link:window.location.href,imgUrl:a,success:function(){},cancel:function(){}}),S.a.onMenuShareTimeline({title:t,link:window.location.href,imgUrl:a,success:function(){},cancel:function(){}})}))}},created:function(){this.categoryld=localStorage.getItem("categoryId"),this.GetCategoryList()}},J=A,T=(a("4ac5"),Object(M["a"])(J,$,G,!1,null,null,null)),U=T.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"title",rawName:"v-title"}],attrs:{"data-title":t.ptitle}},[a("div",{staticClass:"bodyer_box width_100"},[a("div",{staticClass:"pd_all_10 line_height_20 font_size_18 bold line_height_30 color_black_a"},[t._v(t._s(t.detailinfo.title))]),a("div",{staticClass:"summary mg_all_10 pd_all_10 bg_gray_c line_height_20 font_size_12 border_radius_4"},[t._v(t._s(t.detailinfo.description))]),a("div",{staticClass:"bodyer_con pd_all_10"},[a("div",{domProps:{innerHTML:t._s(t.detailinfo.content)}})]),a("hr",{staticClass:"hrbold bg_gray_c"}),a("div",{staticClass:"footer pd_all_10 font_size_12"},[a("a-divider",[a("a-icon",{attrs:{type:"heart"}}),a("a-icon",{attrs:{type:"heart"}}),a("a-icon",{attrs:{type:"heart"}}),a("a-icon",{attrs:{type:"heart"}}),a("a-icon",{attrs:{type:"heart"}})],1),a("div",{staticClass:"text_align_center pd_bottom_20"},[a("a-icon",{attrs:{type:"smile"}}),t._v(" 在这里，我会与大家分享三块内容： "),a("a-icon",{attrs:{type:"smile"}})],1),a("a-timeline",{staticClass:"color_gray_a"},[a("a-timeline-item",[a("span",{staticClass:"font_size_12"},[t._v("地球上的小天使，我们怎样教育他们，保护他们，会在这里分享一些资源；")])]),a("a-timeline-item",[a("span",{staticClass:"font_size_12"},[t._v("在平淡的生活中，总有想去的地方，和enjoygo一起获得最新旅行信息；")])]),a("a-timeline-item",[a("span",{staticClass:"font_size_12"},[t._v("我用心搜集的，可以提升幸福感的全球小众精品。")])])],1),t._m(0),a("div",{staticClass:"text_align_center color_gray_b"},[t._v("扫码/长按关注“enjoygo享购买”")]),t._m(1)],1),a("div",[a("div",{attrs:{id:"backtopbox"}},[a("a-back-top")],1)]),a("div",{staticClass:"bottomfixbar"},[a("a-row",[a("a-col",{attrs:{span:4}},[a("div",{staticClass:"pd_top_10 text_align_center",on:{click:function(e){return t.GoList()}}},[a("p",[a("a-icon",{style:{fontSize:"18px",color:"#888888"},attrs:{type:"home"}})],1),a("p",{staticClass:"font_size_12 color_gray_b mg_top_5"},[t._v("首页")])])]),a("a-col",{attrs:{span:5}},[a("div",{staticClass:"pd_top_10 text_align_center",on:{click:function(e){return t.IsOpenShare()}}},[a("p",[a("a-icon",{style:{fontSize:"18px",color:"#888888"},attrs:{type:"share-alt"}})],1),a("p",{staticClass:"font_size_12 color_gray_b mg_top_5"},[t._v("分享")])])]),a("a-col",{attrs:{span:15}},[a("div",{staticClass:"btnsty text_align_center bg_colorful_a color_white_a",on:{click:function(e){return t.WeixinClosePage()}}},[a("p",[a("a-icon",{style:{fontSize:"18px",color:"#ffffff"},attrs:{type:"customer-service"}}),a("span",{staticClass:"mg_left_5"},[t._v("留言")])],1)])])],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isclickshare,expression:"isclickshare"}],staticClass:"maskall",on:{click:function(e){return t.IsOpenShare()}}},[t._m(2)])])])},D=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"img_out_box text_align_center"},[a("div",{staticClass:"img_box"},[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/objstore/static001/images/wx_qr_code.jpg"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"qrbg"},[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/objstore/static001/images/article_qrcode_bg.png"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pop_cent"},[s("div",[s("img",{attrs:{src:a("95f3")}})])])}],B=(a("a4d3"),a("e01a"),{data:function(){return{detailinfo:{},isclickshare:!1}},methods:{GetDetail:function(){var t=this,e={id:t.pid};k(e).then((function(e){t.detailinfo=e.data,t.ptitle=e.data.title,t.ShareArticle()}))},GoList:function(){this.$router.push({path:"/list/article",query:{categoryId:0}})},IsOpenShare:function(){this.isclickshare=!this.isclickshare},ShareArticle:function(){var t=this;S.a.ready((function(){S.a.onMenuShareAppMessage({title:t.ptitle,desc:t.detailinfo.description,link:window.location.href,imgUrl:t.detailinfo.pic,success:function(){},cancel:function(){}}),S.a.onMenuShareTimeline({title:t.ptitle,link:window.location.href,imgUrl:t.detailinfo.pic,success:function(){},cancel:function(){}})}))},WeixinClosePage:function(){"undefined"==typeof WeixinJSBridge?document.addEventListener?document.addEventListener("WeixinJSBridgeReady",this.wxClosePage(),!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",this.wxClosePage()),document.attachEvent("onWeixinJSBridgeReady",this.wxClosePage())):this.wxClosePage()},wxClosePage:function(){S.a.WeixinJSBridge.call("closeWindow")}},created:function(){this.pid=this.$route.query.pid?this.$route.query.pid:6020,this.ptitle=this.$route.query.ptitle?this.$route.query.ptitle:"ENJOYGO享购",this.GetDetail()}}),R=B,Y=(a("a617"),Object(M["a"])(R,W,D,!1,null,null,null)),F=Y.exports;_["a"].use(L["a"]);var H=new L["a"]({routes:[{path:"/",name:"list_article",component:U},{path:"/list/article",name:"list_article",component:U,meta:{title:"ENJOYGO享购",keepAlive:!0}},{path:"/detail/article",name:"detail_article",component:F,meta:{title:"ENJOYGO享购",keepAlive:!0}}]});a("5b45");_["a"].component(m["a"].name,m["a"]),_["a"].component(p["a"].name,p["a"]),_["a"].component(u["b"].name,u["b"]),_["a"].component(u["b"].Item.name,u["b"].Item),_["a"].component(f["a"].name,f["a"]),_["a"].component(d["a"].name,d["a"]),_["a"].component(l["a"].name,l["a"]),_["a"].component(r["a"].name,r["a"]),_["a"].component(c["a"].name,c["a"]),_["a"].component(o["a"].name,o["a"]),_["a"].component(o["a"].Item.name,o["a"].Item),_["a"].component(i["a"].name,i["a"]),_["a"].prototype.$message=n["a"],_["a"].prototype.$notification=s["a"],n["a"].config({duration:3}),_["a"].directive("title",{inserted:function(t){document.title=t.dataset.title}}),_["a"].config.productionTip=!1,new _["a"]({router:H,render:function(t){return t(P)}}).$mount("#app")},"5b45":function(t,e,a){},"78cf":function(t,e,a){},"85ec":function(t,e,a){},"95f3":function(t,e,a){t.exports=a.p+"static/img/poppoint.ecfe5a6e.png"},a617:function(t,e,a){"use strict";var s=a("06b0"),n=a.n(s);n.a}});
//# sourceMappingURL=app.d965e397.js.map