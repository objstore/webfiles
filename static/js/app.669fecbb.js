(function(t){function e(e){for(var i,n,s=e[0],r=e[1],l=e[2],_=0,u=[];_<s.length;_++)n=s[_],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&u.push(o[n][0]),o[n]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);d&&d(e);while(u.length)u.shift()();return c.push.apply(c,l||[]),a()}function a(){for(var t,e=0;e<c.length;e++){for(var a=c[e],i=!0,s=1;s<a.length;s++){var r=a[s];0!==o[r]&&(i=!1)}i&&(c.splice(e--,1),t=n(n.s=a[0]))}return t}var i={},o={app:0},c=[];function n(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=i,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(a,i,function(e){return t[e]}.bind(null,i));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=r;c.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var i=a("85ec"),o=a.n(i);o.a},"0a2b":function(t,e,a){},1497:function(t,e,a){},3956:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("b0c0"),a("dc5a");var i=a("56cd"),o=(a("3b18"),a("f64c")),c=(a("16c9"),a("387a")),n=(a("5704"),a("b558")),s=(a("dbf3"),a("40a7")),r=(a("0032"),a("e32c")),l=(a("de6a"),a("9a63")),d=(a("af3d"),a("27fd")),_=(a("d88f"),a("fe2b")),u=(a("6ba6"),a("5efb")),p=(a("8fb1"),a("0c63")),f=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("2b0e")),m=a("8c4f"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagelist"},[t.maskloading?a("loading"):a("div",[a("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"list_box",attrs:{"infinite-scroll-disabled":t.busy,"infinite-scroll-distance":10}},[a("a-list",{staticClass:"list",attrs:{"data-source":t.articleInfo},scopedSlots:t._u([{key:"renderItem",fn:function(e){return a("a-list-item",{},[a("div",{staticClass:"width_100",on:{click:function(a){return t.GoDetail(e)}}},[a("div",{staticClass:"item_box border_radius_5"},[a("a-row",{staticClass:"width_100"},[a("a-col",[a("div",{staticClass:"img_box border_radius_5"},[a("img",{attrs:{src:e.pic}})])])],1),a("div",{staticClass:"pd_left_10 pd_right_10 pd_top_10 pd_bottom_10"},[a("a-row",{staticClass:"width_100 font_size_16",attrs:{justify:"center",align:"middle"}},[a("a-col",{attrs:{span:20}},[a("div",{staticClass:"bold display_one_dot color_text_e font_size_16"},[t._v(t._s(e.title))])]),a("a-col",{attrs:{span:4}},[a("div",{staticClass:"txt_right color_text_d font_size_16"},[a("my-icon",{attrs:{type:"cliulan"}}),a("span",{staticClass:"pd_left_2"},[t._v(t._s(e.readCount))])],1)])],1),a("a-row",{staticClass:"width_100 pd_top_5"},[a("a-col",{attrs:{span:24}},[a("div",{staticClass:"display_two_dot color_text_d font_size_14"},[t._v(t._s(e.description))])])],1)],1)],1)])])}}])})],1)])],1)},g=[],v=(a("99af"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"loading"},[a("img",{style:{marginTop:t.top+"%"},attrs:{src:"/static/img/loading.gif",height:"142",width:"244%"}}),a("p",[t._v(t._s(t.tipstext))])])}),b=[],y={props:{icon_class:{default:"icon-index-active"},tipstext:{default:"努力加载中"},top:{default:50}}},C=y,w=(a("9ce0"),a("2877")),z=Object(w["a"])(C,v,b,!1,null,"5eab989b",null),x=z.exports,M=(a("d3b7"),a("bc3a")),I=a.n(M),j=a("a78e"),O=a.n(j),E="loginToken";function S(){return O.a.get(E)}var L=void 0,$=I.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:""}).BASE_API,timeout:35e3});$.interceptors.request.use((function(t){return t.data||(t.data={}),t.headers["Authorization"]=S(),t}),(function(t){console.log(t),Promise.reject(t)})),$.interceptors.response.use((function(t){var e=t.data;return 200===e.code||e.access_token?t.data:(console.log(e),L.$message.error(e.msg),5001===e.code||5002===e.code||e.code,Promise.reject("error"))}),(function(t){return console.log(t),Promise.reject(t)}));var k=$;function D(t){return k({url:"/api/home/subjectList",method:"get",params:t})}function G(t){return k({url:"/api/home/subjectDetail",method:"get",params:t})}var A={components:{loading:x},data:function(){return{maskloading:!1,loading:!1,busy:!1,categoryId:0,articleInfo:[]}},mounted:function(){},created:function(){},methods:{GetList:function(){var t=this,e={pageSize:1,pageNum:999,categoryId:window.localStorage.getItem("categoryId")};D(e).then((function(e){t.articleInfo=e.data}))},loadMore:function(){var t=this,e=this.articleInfo;if(this.loading=!0,e.length>5)return this.busy=!0,void(this.loading=!1);this.GetList((function(a){t.articleInfo=e.concat(a.results),t.loading=!1}))},GoDetail:function(t){this.$router.push({path:"/detail/article",query:{article_id:t.id,categoryId:window.localStorage.getItem("categoryId")}})}}},F=A,B=(a("b365"),Object(w["a"])(F,h,g,!1,null,null,null)),N=B.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"wechat-title",rawName:"v-wechat-title",value:t.$route.meta.title=t.articleinfo.title,expression:"$route.meta.title=articleinfo.title"}],staticClass:"pagedetail"},[t.maskloading?a("loading"):[a("div",{staticClass:"pd_bottom_10"},[18==t.articleinfo.categoryId?[a("div",{staticClass:"addd_box"},[a("img",{attrs:{src:t.articleinfo.pic}})]),a("div",{staticClass:"logo_box"},[a("img",{attrs:{src:t.articleinfo.pics[0]}})]),a("div",{staticClass:"title font_size_18 bold pd_bottom_10 mg_top_50 txt_center"},[t._v(t._s(t.articleinfo.title))]),a("div",{staticClass:"font_size_14 txt_center color_text_f"},[t._v("“"+t._s(t.articleinfo.subTitle)+"”")])]:a("div",{staticClass:"pd_left_10 pd_right_10 pd_top_10"},[a("div",{staticClass:"title font_size_18 bold pd_bottom_10"},[t._v(t._s(t.articleinfo.title))]),a("div",{staticClass:"summary pd_left_10 pd_right_10 pd_top_10 pd_bottom_10 mg_top_10 bg_color_a border_radius_5 color_text_c font_size_14"},[t._v(t._s(t.articleinfo.description))])]),a("div",{staticClass:"content pd_left_10 pd_right_10 pd_top_20"},[a("div",{domProps:{innerHTML:t._s(t.articleinfo.content)}})]),a("div",{staticClass:"line line_10"}),a("div",{staticClass:"bodyer"},[a("div",{staticClass:"part_a pd_top_20"},[a("div",{staticClass:"pd_bottom_10 pd_left_10 pd_right_10"},[a("a-row",{staticClass:"width_100 txt_center",attrs:{justify:"center",align:"middle"}},[a("a-col",{attrs:{span:8}},[a("hr",{staticClass:"bg_color_a"})]),a("a-col",{staticClass:"txt_hidden",attrs:{span:8}},[a("my-icon",{staticClass:"color_icon_a",attrs:{type:"ctuya_huabanfuben"}}),a("my-icon",{staticClass:"color_icon_a",attrs:{type:"ctuya_huabanfuben"}}),a("my-icon",{staticClass:"color_icon_a",attrs:{type:"ctuya_huabanfuben"}}),a("my-icon",{staticClass:"color_icon_a",attrs:{type:"ctuya_huabanfuben"}}),a("my-icon",{staticClass:"color_icon_a",attrs:{type:"ctuya_huabanfuben"}})],1),a("a-col",{attrs:{span:8}},[a("hr",{staticClass:"bg_color_a"})])],1)],1)]),a("div",{staticClass:"part_b pd_left_10 pd_right_10 pd_top_10 mg_top_10"},[a("p",{staticClass:"txt_center font_size_12 pd_bottom_10"},[a("my-icon",{staticClass:"color_icon_b",attrs:{type:"cmeiguihua"}}),t._v("在这里，我会与你们分享三块内容："),a("my-icon",{staticClass:"color_icon_b",attrs:{type:"cmeiguihua"}})],1),a("a-timeline",[a("a-timeline-item",{staticClass:"color_text_c font_size_12"},[t._v("地球上的小天使，我们怎样教育他们，保护他们，会在这里分享一些资源;")]),a("a-timeline-item",{staticClass:"color_text_c font_size_12"},[t._v("在平淡的生活中，总有想去的地方，和enjoy go一起获得最新旅行信息;")]),a("a-timeline-item",{staticClass:"color_text_c font_size_12"},[t._v("我用心搜集的，可以提升幸福感的全球小众精品。")])],1)],1),a("div",{staticClass:"qrcodebox"},[a("div",{staticClass:"img_box"},[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/objstore/static001/images/wx_qr_code.jpg"}})]),a("p",{staticClass:"txt_center color_text_d font_size_12"},[t._v('扫码/长按关注"enjoygo享购"')]),a("div",{staticClass:"img_bg_box"},[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/objstore/static001/images/article_qrcode_bg.png"}})])])])],2)]],2)},T=[],q={components:{loading:x},data:function(){return{maskloading:!1,article_id:"",articleinfo:{}}},mounted:function(){},methods:{GetDetail:function(){var t=this,e={id:this.article_id};G(e).then((function(e){t.articleinfo=e.data}))}},created:function(){this.article_id=this.$route.query.article_id,this.categoryId=this.$route.query.categoryId,this.GetDetail()}},U=q,J=(a("6ace"),Object(w["a"])(U,P,T,!1,null,null,null)),V=J.exports;f["a"].use(m["a"]);var R=new m["a"]({routes:[{path:"/",redirect:"/list/article"},{path:"/list/article",name:"list_article",component:N,meta:{keepAlive:!0,title:"ENJOYGO享购"}},{path:"/detail/article",name:"detail_article",component:V,meta:{keepAlive:!0,title:"ENJOYGO享购"}}]}),H=(a("3956"),a("0a2b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view",{directives:[{name:"wechat-title",rawName:"v-wechat-title",value:t.$route.meta.title,expression:"$route.meta.title"}]})],1)}),Y=[],K=(a("c975"),a("ac1f"),a("466d"),a("841c"),a("1276"),{name:"App",components:{},created:function(){var t=this,e=navigator.userAgent.toLowerCase();if("micromessenger"==e.match(/MicroMessenger/i))console.log("微信内"),t.GetCode();else{console.log("微信外");var a=window.location.href,i=a.substr(a.indexOf("categoryId")).split("=")[1];window.localStorage.setItem("categoryId",i)}},methods:{GetCode:function(){var t,e=window.location.href,a="wx79e4796ea285c3be";t=this.GetUrlCode().code;var i=e.substr(e.indexOf("categoryId")).split("=")[1];window.localStorage.setItem("categoryId",i),null==t||""===t?window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=".concat(a,"&redirect_uri=").concat(encodeURIComponent(e),"&response_type=code&scope=snsapi_base&state=123%23wechat_redirect"):this.GetOpenId(t)},GetUrlCode:function(){var t=location.search,e=new Object;if(-1!=t.indexOf("?"))for(var a=t.substr(1),i=a.split("&"),o=0;o<i.length;o++)e[i[o].split("=")[0]]=i[o].split("=")[1];return e},GetOpenId:function(t){console.log(t)}}}),Q=K,W=(a("034f"),Object(w["a"])(Q,H,Y,!1,null,null,null)),X=W.exports,Z=a("cf0f"),tt=a.n(Z),et=p["a"].createFromIconfontCN({scriptUrl:tt.a}),at=a("487a");f["a"].use(at),f["a"].component("my-icon",et),f["a"].component(u["a"].name,u["a"]),f["a"].component(_["b"].name,_["b"]),f["a"].component(_["b"].Item.name,_["b"].Item),f["a"].component(_["b"].Item.Meta.name,_["b"].Item.Meta),f["a"].component(d["a"].name,d["a"]),f["a"].component(l["a"].name,l["a"]),f["a"].component(r["a"].name,r["a"]),f["a"].component(s["a"].name,s["a"]),f["a"].component(n["a"].name,n["a"]),f["a"].component(c["a"].name,c["a"]),f["a"].component(c["a"].Item.name,c["a"].Item),f["a"].prototype.$message=o["a"],f["a"].prototype.$notification=i["a"],o["a"].config({duration:2}),f["a"].config.productionTip=!1,new f["a"]({render:function(t){return t(X)},router:R}).$mount("#app")},"6ace":function(t,e,a){"use strict";var i=a("c532e"),o=a.n(i);o.a},"85ec":function(t,e,a){},"9ce0":function(t,e,a){"use strict";var i=a("c3db"),o=a.n(i);o.a},b365:function(t,e,a){"use strict";var i=a("1497"),o=a.n(i);o.a},c3db:function(t,e,a){},c532e:function(t,e,a){},cf0f:function(t,e,a){a("c975"),function(t){var e,a,i,o,c,n,s,r='<svg><symbol id="cflower" viewBox="0 0 1024 1024"><path d="M306.849108 232.498238c17.553795 11.033287 35.112706 22.070668 52.6665 33.104979 12.037151 9.278317 24.077372 18.559705 36.114522 27.838022 0.50142 0.502443 1.00284 1.00284 1.505283 1.505283 23.63121-25.77299 53.67548-55.19816 102.323457-54.923914-1.75497-16.049534-3.510964-32.104185-5.265934-48.152696-1.254573-19.308765-2.508123-38.624692-3.761674-57.933457C478.675522 88.438215 432.411849 63.208601 372.305913 63.964824c-9.278317 2.508123-18.559705 5.016247-27.838022 7.52437-19.773346 7.759731-38.272675 21.321608-49.656957 37.618782-5.493108 7.863085-10.017144 18.485003-12.790304 28.590152C273.164938 169.96502 289.731242 219.542158 306.849108 232.498238zM631.877763 299.459303c11.283997-7.271614 22.573111-14.546298 33.857109-21.818935 32.431643-19.775392 65.478294-30.977525 81.256652-67.714218 32.314986-75.236542-39.721677-137.995911-111.352087-136.932696-8.776897 2.00568-17.556864 4.012384-26.332738 6.019087-26.51898 10.317996-57.189514 34.459836-66.209958 61.695131-1.001817 10.531867-2.006703 21.067828-3.00852 31.599695-3.965312 21.980617-6.951319 45.047985-13.542434 64.704674l0 2.257413C566.391283 240.658082 619.028107 272.027533 631.877763 299.459303zM382.086673 429.621804c-8.631588-24.464181-18.295692-55.411007-9.780761-88.781022 3.260254-10.030447 6.520507-20.064988 9.780761-30.095435-45.245484-9.56075-75.963089-43.183522-129.409348-42.133609-8.526187 1.25355-17.055444 2.509147-25.581632 3.761674-25.547863 7.53051-45.061288 22.670326-58.685587 42.133609-38.815027 55.450916-8.497535 123.30021 40.629349 144.457066C276.729114 488.11808 328.145134 445.348997 382.086673 429.621804zM810.945091 289.678542c-16.025998-6.885827-35.331693-8.626471-58.68661-8.275477-27.273157 11.480472-53.726645 20.311605-80.504522 30.847565-8.526187 3.260254-17.055444 6.52153-25.580608 9.780761 17.334807 38.039361 12.446473 81.277118-4.514827 114.361631 15.296381 6.018064 30.598902 12.039197 45.896306 18.057261 17.303085 8.777921 34.610262 17.556864 51.913347 26.333762 7.523347 0.25071 15.048741 0.50142 22.572088 0.75213 45.673226-0.032746 79.361489-19.157315 97.057523-47.399543C895.171378 376.558261 856.206948 309.1275 810.945091 289.678542zM501.715261 510.87948c-34.31862-4.799306-59.711963-14.426571-82.009805-30.847565-8.477069-6.243191-16.46602-21.375843-26.332738-24.828478-38.394449 40.08802-143.825686 57.450457-118.124328 149.725046 3.062755 10.994402 8.292873 20.703531 13.542434 29.342282 8.185426 13.470803 17.463744 23.527856 30.095435 32.351825 9.772574 6.825452 22.36845 12.749372 34.609239 16.553001 68.873624 21.405519 122.694413-28.448936 139.191132-75.238588C501.784846 582.12922 502.174726 544.205493 501.715261 510.87948zM692.068633 673.393807c12.871145-7.586792 27.148313-18.541285 35.362392-30.847565 48.082088-72.042803 3.946892-118.148887-45.895283-153.48672-15.293311-10.842952-32.17377-25.305339-50.41011-32.351825-27.200502 25.484418-52.43114 51.049676-103.07661 53.41863-0.172939 31.435966 0.557702 87.49268 9.780761 110.600981C557.524335 670.070108 630.936321 709.425442 692.068633 673.393807zM498.706741 960.051549l37.618782 0L536.325523 677.908634l-37.618782 0L498.706741 960.051549zM276.753673 726.062354c-24.891923-5.483898-56.945967-3.137457-84.267219-2.258437 0.401136 24.331151 6.730285 47.50392 12.791327 66.963111 34.326806 110.215194 120.281457 166.94729 266.343067 164.772764C471.944214 827.28371 382.800941 749.416248 276.753673 726.062354zM743.983004 729.069851c-96.127338 24.605398-182.551686 104.980983-180.572612 226.468918 142.578276 0.409322 226.146577-50.505277 263.334547-155.744133 7.650237-21.649066 15.045671-48.460712 15.799848-75.990718C808.561811 723.013925 772.708232 721.717396 743.983004 729.069851z"  ></path></symbol><symbol id="cliulan" viewBox="0 0 1024 1024"><path d="M511.999488 655.326313c-76.517721 0-138.76953-62.250786-138.76953-138.768507s62.251809-138.76953 138.76953-138.76953c76.516698 0 138.768507 62.251809 138.768507 138.76953S588.516186 655.326313 511.999488 655.326313zM511.999488 416.673911c-55.076386 0-99.883895 44.807509-99.883895 99.883895 0 55.075363 44.807509 99.882871 99.883895 99.882871 55.075363 0 99.882871-44.807509 99.882871-99.882871C611.88236 461.48142 567.074851 416.673911 511.999488 416.673911zM960.482873 531.446911c-7.040347 0.001023-13.8351-3.835352-17.289782-10.521634-35.639708-68.973908-99.196233-133.827985-174.370353-177.932482-76.656891-45.420469-167.369915-70.383-255.617795-70.383-0.773619 0-1.545192 0-2.317789 0-88.348164 0-179.051979 24.959461-255.640308 70.341045-75.247798 44.147476-138.804323 109.001553-174.443008 177.974437-4.929266 9.540284-16.656355 13.279445-26.198685 8.348132-9.53926-4.929266-13.277398-16.658402-8.348132-26.198685 38.922475-75.325569 107.897406-145.897881 189.240015-193.620789 41.174772-24.397666 85.84618-43.334971 132.702348-56.245002 47.355541-13.047154 95.715969-19.6045 143.847176-19.48375 48.006364-0.075725 96.396467 6.436596 143.750985 19.48375 46.856168 12.910031 91.527576 31.847336 132.775003 56.286957 81.269955 47.679929 150.244886 118.252241 189.167361 193.57781 4.929266 9.53926 1.192152 21.269419-8.348132 26.198685C966.538799 530.74697 963.488323 531.446911 960.482873 531.446911zM513.240759 795.45684c-0.859577 0-1.716084 0-2.575662 0-47.578622 0-95.531773-6.554276-142.465712-19.485797-46.856168-12.909008-91.527576-31.846312-132.773979-56.286957-81.269955-47.680952-150.244886-118.253264-189.167361-193.57781-4.929266-9.53926-1.192152-21.269419 8.348132-26.198685s21.268396-1.192152 26.198685 8.348132c35.639708 68.973908 99.19521 133.827985 174.370353 177.932482 76.656891 45.420469 167.369915 70.381977 255.617795 70.381977 0.772596 0 1.545192 0 2.317789 0 88.348164 0 179.050955-24.959461 255.639285-70.338998 75.246775-44.148499 138.803299-109.002576 174.444031-177.975461 4.930289-9.540284 16.658402-13.274328 26.199709-8.348132 9.53926 4.929266 13.277398 16.659425 8.347109 26.198685-38.923498 75.326593-107.898429 145.898905-189.241039 193.620789-41.173748 24.397666-85.84618 43.334971-132.702348 56.243979C608.8677 788.901541 560.908408 795.455817 513.240759 795.45684z"  ></path></symbol><symbol id="cmeiguihua" viewBox="0 0 1024 1024"><path d="M400.4 314.7c14.7-45.2 45.2-82.8 80.5-113.3-37-25.4-74-42.1-101.3-52.3 9.8 24.7 15.7 58.1 2.7 96.1-2.7 7.8-6.4 16.4-10.3 25.4-12.5 28.8-28 64.6-28.1 112.8-0.1 34.5 10.6 62.6 31.6 83.6 13.6 13.5 30 22.8 46.5 29.2-5-6.2-10.1-13.4-14.8-21.7-16.8-30.5-31.8-82.9-6.8-159.8z" fill="#FDCDE1" ></path><path d="M646.7 473c20.1-21.6 28.9-50.8 26.2-86.8-3.4-46.2-15.2-66.9-27.7-88.9-6.5-11.4-13.1-23.2-18.5-38.1-14.3-40.3-7.3-78.6 3.3-106.7-61.1 27-166.5 85-195.2 173.5-39 120.1 33.3 165.1 36.4 166.9 0.4 0.2 0.7 0.4 1.1 0.7 16.7 11.5 43.6 18.3 71.9 18.3 42.2 0 79.6-14.2 102.5-38.9zM510.7 178c23.7-17 48.1-31.2 70.3-42.5l-37.3-33.1c-48.2 13.4-78.7 27.2-96.4 36.9 19.7 10.1 41.1 22.6 62.5 38 0.3 0.2 0.6 0.4 0.9 0.7z" fill="#FDCDE1" ></path><path d="M737.6 686.6c-2.9-5.2-8.2-8.7-14.2-9.2-17.5-1.6-34.3-2.4-49.8-2.4-64.2 0-111.6 13.6-141.4 40.5V547.9c4 0.2 8 0.4 12 0.4 52.2 0 99.3-18.4 129.1-50.5 26.8-28.9 39.2-68.4 35.8-114.2-4-54.4-19.1-80.8-32.3-104.1-6-10.5-11.6-20.4-15.8-32.4-21.3-59.9 22.1-117.7 22.5-118.3 4.9-6.3 5.1-15 0.5-21.5s-12.8-9.3-20.4-6.9c-2.5 0.8-20.9 6.8-47.1 18.2l-56.2-49.9c-4.6-4-10.8-5.5-16.7-4-83.7 22.1-122.3 46.2-135.9 56.4-4-1.7-40.8-14.9-49.2-17.3-16.4-4.7-20.3-5.9-27.1-2.3-5.1 2.6-8.6 7.4-9.6 13s0.7 11.3 4.6 15.5c0.4 0.4 41.3 45.3 21.4 103.5-2.2 6.5-5.5 14-9.3 22.7-13.1 30.2-31 71.4-31.1 127.2-0.1 44.6 14.1 81.4 42.3 109.4 45.8 45.6 112.7 53.1 146 53.8v113.1c-29.5-29.4-78.3-44.3-145.4-44.3-15.5 0-32.3 0.8-49.8 2.4-6 0.5-11.3 4-14.2 9.2-2.9 5.2-3.1 11.5-0.5 16.9 48.2 98.1 102.7 147.8 162 147.9 19.5 0 35.8-5.7 47.9-12v165c0 10 8.1 18.2 18.2 18.2 10 0 18.2-8.1 18.2-18.2V841.3c11.6 5.5 26.5 10 43.9 10 59.2 0 113.7-49.7 162-147.9 2.7-5.3 2.6-11.6-0.4-16.8z" fill="#E66978" ></path><path d="M489.6 741c-6.9 5.2-21.9 14.5-41.6 14.5-39.2 0-79.2-35.6-116.7-103.3 6.6-0.3 13-0.4 19.2-0.4 61.2 0 104.4 13.7 125.1 39.6 15 18.9 15 40 14 49.6z" fill="#FFD976" ></path><path d="M543.7 102.3l37.3 33.1c-22.2 11.3-46.6 25.5-70.3 42.5-0.3-0.2-0.6-0.5-0.9-0.7-21.4-15.4-42.9-27.9-62.5-38 17.7-9.7 48.2-23.4 96.4-36.9zM375.6 467.1c-21.1-20.9-31.7-49.1-31.6-83.6 0.1-48.2 15.6-84 28.1-112.8 3.9-9.1 7.6-17.6 10.3-25.4 13-38 7.1-71.5-2.7-96.1 27.3 10.2 64.2 26.9 101.3 52.3-35.3 30.5-65.8 68.2-80.5 113.3-25 76.8-10 129.3 7 159.8 4.7 8.4 9.7 15.6 14.8 21.7-16.8-6.5-33.2-15.8-46.7-29.2z" fill="#FFAEBF" ></path><path d="M472.4 493.6c-0.4-0.3-0.7-0.4-1.1-0.7-3.1-1.9-75.4-46.9-36.4-166.9 28.8-88.5 134.2-146.5 195.2-173.5-10.6 28.1-17.7 66.3-3.3 106.7 5.3 15 12 26.7 18.5 38.1 12.5 21.9 24.2 42.7 27.7 88.9 2.7 36-6.1 65.2-26.2 86.8-23 24.7-60.3 38.9-102.5 38.9-28.3 0-55.2-6.9-71.9-18.3z" fill="#FFAEBF" ></path><path d="M576.1 815c-19.7 0-34.8-9.3-41.6-14.5-1-9.7-1-30.8 14.1-49.6 20.6-25.9 63.9-39.6 125.1-39.6 6.2 0 12.6 0.1 19.2 0.4C655.4 779.4 615.3 815 576.1 815z" fill="#FFD976" ></path></symbol><symbol id="chua" viewBox="0 0 1024 1024"><path d="M924.6 506.2c2.2-19.9-0.4-40.6-7-60.9-6.4-19.7-16.3-37.1-28.9-52-39.3-46.4-104.1-67-165.5-47.1-2.8 0.9-5.4 2-8.1 3.1 0.2-2.9 0.4-5.7 0.4-8.7 0-85.2-69.1-154.3-154.3-154.3s-154.3 69.1-154.3 154.3c0 2.9 0.3 5.8 0.4 8.7-2.7-1-5.3-2.2-8.1-3.1-81.1-26.3-168.1 18-194.5 99.1-26.3 81.1 18 168.1 99.1 194.5 2.8 0.9 5.6 1.5 8.4 2.3-1.8 2.2-3.7 4.4-5.4 6.7-50.1 69-34.8 165.5 34.1 215.6 69 50.1 165.5 34.8 215.6-34.1 1.7-2.4 3.2-4.8 4.7-7.3 1.6 2.4 3 4.9 4.7 7.3 50.1 69 146.6 84.2 215.6 34.1s84.2-146.6 34.1-215.6c-1.7-2.4-3.6-4.5-5.4-6.7 2.8-0.7 5.6-1.4 8.4-2.3 6.6-2.1 12.9-4.7 19-7.6-0.2 0 77-34.1 87-126z"  ></path><path d="M347 899c-37.2 0-74.7-11.3-107-34.8-76.9-55.9-97.3-161.1-49.4-241.2-85.8-36.6-131.1-133.7-101.8-224.1 29.4-90.4 123.1-142.3 214.1-121.5 8.3-93 86.6-166.1 181.7-166.1S658 184.4 666.3 277.4c30.4-7 61.8-6 91.9 2.8 34.5 10.1 64.9 29.9 88 57.2 15.3 18.1 26.8 38.8 34.2 61.5 7.6 23.4 10.4 47.6 8.3 72-0.9 10.4-10 18-20.4 17.1-10.4-0.9-18-10-17.1-20.4 1.7-19.3-0.6-38.5-6.6-57.1-5.9-18-15-34.4-27.1-48.8-38.2-45.1-99.1-62.4-155.3-44.2-1.5 0.5-3.1 1.1-4.9 1.8-0.9 0.4-1.8 0.7-2.7 1.1-6 2.3-12.7 1.4-17.9-2.3-5.2-3.8-8.1-9.9-7.7-16.3 0.1-1 0.1-2 0.2-2.9 0.1-1.9 0.2-3.6 0.2-5.2 0-79.8-64.9-144.8-144.8-144.8s-144.8 64.9-144.8 144.8c0 1.5 0.1 3.3 0.2 5.2 0.1 1 0.1 2 0.2 2.9 0.4 6.4-2.6 12.5-7.7 16.3-5.2 3.8-11.9 4.6-17.9 2.3-0.9-0.4-1.8-0.7-2.7-1.1-1.7-0.7-3.4-1.4-4.9-1.8-75.9-24.7-157.8 17-182.4 93-24.7 75.9 17 157.8 93 182.4 1.5 0.5 3.2 0.9 5 1.4 0.9 0.2 1.9 0.5 2.8 0.7 6.2 1.6 11.1 6.3 13.1 12.4 2 6.1 0.7 12.8-3.3 17.7-0.6 0.8-1.3 1.5-1.9 2.3-1.2 1.4-2.3 2.8-3.2 4-46.9 64.6-32.6 155.3 32 202.2 64.6 46.9 155.3 32.6 202.2-32 0.9-1.2 1.9-2.8 2.9-4.3 0.5-0.8 1-1.7 1.6-2.5 3.5-5.4 9.4-8.6 15.8-8.6s12.4 3.3 15.8 8.6c0.5 0.8 1.1 1.7 1.6 2.5 1 1.6 1.9 3.1 2.9 4.4 46.9 64.6 137.6 79 202.2 32 64.6-46.9 79-137.6 32-202.2-0.9-1.2-2-2.6-3.3-4.1-0.6-0.8-1.3-1.5-1.9-2.3-4-5-5.3-11.6-3.3-17.7s6.9-10.8 13.1-12.4c0.9-0.3 1.9-0.5 2.8-0.7 1.8-0.5 3.6-0.9 5-1.4 6.1-2 12.1-4.4 17.8-7.1 9.4-4.5 20.6-0.5 25.1 8.9s0.5 20.6-8.9 25.1c-2.3 1.1-4.7 2.2-7.1 3.2 47.9 80.1 27.5 185.3-49.4 241.2-32.3 23.5-69.8 34.8-107 34.8-51.3 0-102-21.5-137.6-62.3-35.3 40.7-86 62.3-137.4 62.3z"  ></path><path d="M484.7 515.2c-15.2 0-27.6 12.4-27.6 27.6 0 15.2 12.4 27.6 27.6 27.6s27.6-12.4 27.6-27.6c-0.1-15.2-12.4-27.6-27.6-27.6z m0-108.1c-7.8 0-14.1-6.3-14.1-14.1v-56.4c0-7.8 6.3-14.1 14.1-14.1s14.1 6.3 14.1 14.1V393c0 7.7-6.3 14.1-14.1 14.1z m-146.4 99.6c-1.4 0-2.9-0.2-4.4-0.7l-53.7-17.4c-7.4-2.4-11.5-10.4-9.1-17.8 2.4-7.4 10.4-11.5 17.8-9.1l53.7 17.4c7.4 2.4 11.5 10.4 9.1 17.8-1.9 6-7.4 9.8-13.4 9.8z m16.4 215.6c-2.9 0-5.8-0.9-8.3-2.7-6.3-4.6-7.7-13.4-3.1-19.7l33.2-45.7c4.6-6.3 13.4-7.7 19.7-3.1 6.3 4.6 7.7 13.4 3.1 19.7l-33.2 45.7c-2.7 3.8-7 5.8-11.4 5.8z m243.3 5.4c-4.4 0-8.7-2-11.4-5.8l-33.2-45.7c-4.6-6.3-3.2-15.1 3.1-19.7 6.3-4.6 15.1-3.2 19.7 3.1l33.2 45.7c4.6 6.3 3.2 15.1-3.1 19.7-2.5 1.9-5.4 2.7-8.3 2.7z m26.6-212.3c-6 0-11.5-3.8-13.4-9.8-2.4-7.4 1.6-15.4 9.1-17.8l53.7-17.4c7.4-2.4 15.4 1.6 17.8 9.1 2.4 7.4-1.6 15.4-9.1 17.8L629 514.7c-1.4 0.5-2.9 0.7-4.4 0.7z m213.7 50.7c-4.8 0-9.7-1.9-13.4-5.6-7.3-7.4-7.3-19.3 0.1-26.6l3.1-3.1c7.4-7.3 19.3-7.3 26.6 0.1 7.3 7.4 7.3 19.3-0.1 26.6l-3.1 3.1c-3.6 3.6-8.4 5.5-13.2 5.5z"  ></path></symbol><symbol id="ctuya_huabanfuben" viewBox="0 0 1024 1024"><path d="M886.57 199.34c-75.88-62-200.47-97-292.12-52.88-41.41 19.93-69.6 70.86-111.54 57.77-1.09-0.34-2.12-0.75-3.19-1.11-24.61-20.62-57.46-38.1-66.43-42.34-81.83-38.57-178.1-22.48-248.61 32.53C97.1 246 54.67 330.93 65.76 417.25 80.9 535.12 179.93 611.41 259.3 688.3c53.35 51.7 107.85 95.2 166.47 140.56 27.63 21.39 64.73 65.7 100.49 68.3 27.51 2 47.34-16.27 68.28-31.67 52.44-38.56 104-79 150.28-124.9 122-120.9 325.12-391.48 141.75-541.25z m-193.23 528c-38.83 35.12-81.22 76.88-127.78 100.55-33.32 16.94-55.65 6.73-80.1-11 6.85-16.76 8.8-34.65 14.18-52 6.9-22.17 16.28-43.53 23.9-65.46 1.36-3.92-4.7-5.46-6.15-1.7-7.85 20.4-17.07 40.25-24.6 60.77-6.37 17.34-8.4 35.76-14.41 53.07-7.8-5.94-15.9-12.4-24.76-18.85-2.5-1.82-4.88-3.75-7.36-5.59 14.58-30.73 26.91-62.44 43.29-92.4 2.22-4.05-4-7.67-6.19-3.62-16.18 29.24-31.43 59.52-44.35 90.5-9.31-7-18.65-14.06-27.86-21.19 2.57-20.92 15.1-41.58 23.42-60.7 7.37-16.95 14.45-34 21-51.29 1.46-3.88-4.62-5.41-6.15-1.7-10 24.29-21.12 48-32.48 71.69-5.73 11.94-11.6 23.43-13.08 36.43-23.69-18.49-47-37.29-69.9-56.63a4.06 4.06 0 0 0 4-2.65c19-42.69 33-87.49 61.25-125.33 2.68-3.59-3.49-8.41-6.26-4.83-28.75 37.19-45.7 82-64.06 124.86a5.35 5.35 0 0 0-0.24 3.45c-26.66-22.69-53-45.82-78.77-69.7l1-0.6c4.44-2.74 1.88-8.68-2.28-8.91 2.7-20.14 20.3-39.48 29.83-56.32 13-23 26-45.77 41.05-67.53 2.58-3.75-3.5-7.23-6.08-3.55-18.46 26.28-33.55 54.53-51 81.41-9.33 14.34-21.51 27.91-23.85 44.82-10.67-10-21.42-19.8-32-30a4.64 4.64 0 0 0 0.92-1.22C222.12 551 241 522.18 262 494.94c10.48-13.58 22.73-28.36 17-46.31a2.39 2.39 0 0 0-4.61 1.27c4.47 22.78-21.9 44-34.14 60.7-15.26 20.84-29.29 42.35-41 65.39-25-25.26-47-53.24-63.49-83.08 9-11.12 14.91-24 22.16-36.32 11.86-20.21 26.32-38.54 41-56.78 1.74-2.18-1.32-5.3-3.1-3.1-12 14.8-24.07 29.58-35.09 45.11-10 14.12-17.74 30.38-28.86 43.71a270.94 270.94 0 0 1-13.83-31.17c27.76-31.47 51.73-65.92 76.29-99.9 2.31-3.19-3-6.23-5.28-3.08-23.55 32.38-47 64.7-73.92 94.39-13.71-42.53-15-87.24 2.83-131.53 10.51-12.65 23.3-24.1 32.69-34.07 27.25-28.93 57-53.88 87.93-78.73 1.92-1.54-0.68-5-2.66-3.44-36 27.75-69.27 56.32-101 88.89-2.5 2.57-5.17 5.27-7.9 8A221.54 221.54 0 0 1 144 267.6c37.13-50.6 89.81-84.6 152.58-93.06a208.11 208.11 0 0 1 32.5-1.81 12.27 12.27 0 0 0 10 5.7c72.85 4.88 84.82 46.2 142.47 68.32 4.77 1.83 8.39 4.18 12.08 6.1a6.86 6.86 0 0 1-0.33 1.09c-2.93 5.09 3.93 10.46 8.14 6.28a24.25 24.25 0 0 0 3.18-4.34 21.75 21.75 0 0 0 3.89 0.22c20.71-2 34.53-26.52 48.3-38.52 55.83-48.64 116.5-58.72 187.1-41.16 58.75 14.58 129.65 47.41 159.41 104.22 36.66 70 2.6 149.23-30 212.94C828.15 581.76 766.75 661 693.34 727.36z" fill="#333333" ></path><path d="M166.49 322a451.7 451.7 0 0 0-52 68.52c-2.79 4.52 4.37 8.7 7.11 4.16a441.19 441.19 0 0 1 50-67.51c3.19-3.5-1.91-8.66-5.11-5.17zM245.5 419.21c-14.47 23.82-28.87 47.42-46 69.44-10.81 13.88-20.16 26.79-23.68 44.35-1.21 6 8.16 8.56 9.22 2.54 3.76-21.41 17.3-36 29.41-53.21 13.48-19.13 24.9-39.65 36.92-59.71 2.22-3.74-3.61-7.13-5.87-3.41zM347.74 532.7C337.07 553.33 323.6 572.35 313 593c-9.5 18.57-15.38 38.6-23.69 57.7-2.93 6.75 6.47 10.79 9.35 3.94 8.51-20.25 13.62-41.6 23.24-61.43 9.5-19.59 21.31-38 31.21-57.37 1.89-3.56-3.52-6.72-5.37-3.14zM415.58 600.61c-18.57 36.79-37.08 73.64-55 110.74a4.8 4.8 0 0 0 1.67 6.35l2.84 2c4.69 3.32 9.33-4 5.3-7.61 15.93-36.57 33.17-72.42 51-108.14 1.82-3.8-3.88-7.17-5.81-3.34z" fill="#333333" ></path></symbol></svg>',l=(e=document.getElementsByTagName("script"))[e.length-1].getAttribute("data-injectcss");if(l&&!t.__iconfont__svg__cssinject__){t.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(t){console&&console.log(t)}}function d(){n||(n=!0,o())}a=function(){var t,e,a,i,o,c=document.createElement("div");c.innerHTML=r,r=null,(t=c.getElementsByTagName("svg")[0])&&(t.setAttribute("aria-hidden","true"),t.style.position="absolute",t.style.width=0,t.style.height=0,t.style.overflow="hidden",e=t,(a=document.body).firstChild?(i=e,(o=a.firstChild).parentNode.insertBefore(i,o)):a.appendChild(e))},document.addEventListener?~["complete","loaded","interactive"].indexOf(document.readyState)?setTimeout(a,0):(i=function(){document.removeEventListener("DOMContentLoaded",i,!1),a()},document.addEventListener("DOMContentLoaded",i,!1)):document.attachEvent&&(o=a,c=t.document,n=!1,(s=function(){try{c.documentElement.doScroll("left")}catch(t){return void setTimeout(s,50)}d()})(),c.onreadystatechange=function(){"complete"==c.readyState&&(c.onreadystatechange=null,d())})}(window)}});