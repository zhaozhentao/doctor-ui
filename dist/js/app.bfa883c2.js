(function(t){function e(e){for(var s,i,l=e[0],o=e[1],c=e[2],u=0,p=[];u<l.length;u++)i=l[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,l=1;l<a.length;l++){var o=a[l];0!==n[o]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={app:0},r=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=o;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1e37":function(t,e,a){"use strict";var s=a("71a9"),n=a.n(s);n.a},"271f":function(t,e,a){},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=r(t);return a(e)}function r(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=r,t.exports=n,n.id="4678"},"490b":function(t,e,a){"use strict";var s=a("271f"),n=a.n(s);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=a("7d5e"),r=(a("157a"),a("8c4f")),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-10 col-md-offset-1"},[a("el-card",[t.loading?a("van-skeleton",{staticClass:"van-skeleton",attrs:{title:"",row:8}}):t._e(),t.loading?t._e():a("div",[a("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"本地JVM",name:"first"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.jvms}},[a("el-table-column",{attrs:{align:"center",prop:"vmid",label:"PID",width:"100px"}}),a("el-table-column",{attrs:{prop:"displayName",label:"JVM","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(e){return[a("router-link",{attrs:{to:"/jvm/"+e.row.vmid+"/vm"}},[t._v(t._s(e.row.displayName))])]}}],null,!1,3824644055)}),a("el-table-column",{attrs:{align:"center",label:"操作",width:"120px"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.connected?a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.disConnect(e.row.vmid)}}},[t._v("断开 ")]):t._e()]}}],null,!1,1970403524)})],1)],1),a("el-tab-pane",{attrs:{label:"远程连接",name:"second"}},[a("el-form",{attrs:{model:t.form}},[a("el-form-item",{attrs:{label:"Host"}},[a("el-button",{attrs:{type:"text"},on:{click:function(e){t.explain=!0}}},[t._v("说明 "),a("i",{staticClass:"el-icon-info"})]),a("el-input",{attrs:{placeholder:"ip:port"},model:{value:t.form.host,callback:function(e){t.$set(t.form,"host",e)},expression:"form.host"}})],1),a("el-form-item",{attrs:{label:"用户名"}},[a("el-input",{attrs:{placeholder:"用户名"},model:{value:t.form.userName,callback:function(e){t.$set(t.form,"userName",e)},expression:"form.userName"}})],1),a("el-form-item",{attrs:{label:"密码"}},[a("el-input",{attrs:{placeholder:"密码"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1)],1),a("div",{staticStyle:{"text-align":"right"}},[a("el-button",{attrs:{type:"primary"},on:{click:t.connect}},[t._v("确 定")])],1)],1)],1)],1)],1)],1),a("el-dialog",{attrs:{title:"远程连接说明",width:"95%",visible:t.explain},on:{"update:visible":function(e){t.explain=e}}},[a("div",{staticClass:"explain_title"},[t._v(" 不设置验证方式: ")]),a("pre",[t._v("添加启动参数\n\n-Djava.rmi.server.hostname=localhost\n-Dcom.sun.management.jmxremote\n-Dcom.sun.management.jmxremote.port=端口(远程连接时的端口)\n-Dcom.sun.management.jmxremote.authenticate=false\n-Dcom.sun.management.jmxremote.ssl=false\n\n完整例子:\njava -Djava.rmi.server.hostname=localhost \\\n  -Dcom.sun.management.jmxremote \\\n  -Dcom.sun.management.jmxremote.port=端口 \\\n  -Dcom.sun.management.jmxremote.authenticate=false \\\n  -Dcom.sun.management.jmxremote.ssl=false -jar xxx.jar\n      ")]),a("div",{staticClass:"explain_title",staticStyle:{"margin-top":"20px"}},[t._v(" 带验证方式: ")]),a("pre",[t._v("1 编辑 /usr/java/jdk1.8.0_60/jre/lib/management/jmxremote.password(jdk目录位置按实际情况)，将最后的注释去掉，并设置远程连接时的密码\n#monitorRole password\n#controlRole password\n\n2 编辑 /usr/java/jdk1.8.0_60/jre/lib/management/jmxremote.access(jdk目录位置按实际情况)，将文件最后的账号注释去掉(账号与上面的对应)\n\n3 添加启动参数启动\n-Djava.rmi.server.hostname=localhost\n-Dcom.sun.management.jmxremote\n-Dcom.sun.management.jmxremote.port=端口(远程连接时的端口)\n-Dcom.sun.management.jmxremote.authenticate=true\n-Dcom.sun.management.jmxremote.ssl=false\n      ")]),a("div",{staticClass:"explain_title",staticStyle:{"margin-top":"20px"}},[t._v(" 测试远程连接 ")]),a("pre",[t._v("Host: jvmtools.cn:9099\n用户名: controlRole\n密码: R&D\n      ")])])],1)},l=[],o=(a("ac1f"),a("5319"),a("96cf"),a("1da1")),c=a("bc3a"),d={name:"Home",data:function(){return{explain:!1,form:{host:null,userName:null,password:null},activeName:"first",loading:!0,jvms:null}},methods:{connect:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.post("/api/jvms",this.form);case 2:e=t.sent,this.$router.replace("/jvm/".concat(e.data,"/vm"));case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getJVM:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.get("/api/jvms").catch((function(t){console.log(t)}));case 2:e=t.sent,this.jvms=e.data,this.loading=!1;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),disConnect:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.delete("/api/jvms/".concat(e));case 2:this.getJVM();case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},created:function(){this.getJVM()}},u=d,p=(a("700d"),a("2877")),m=Object(p["a"])(u,i,l,!1,null,"19bd58cb",null),v=m.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-2",staticStyle:{"margin-bottom":"10px"}},[a("el-card",{attrs:{"body-style":{padding:"0px"}}},[a("table",{staticClass:"table table-hover"},[a("tbody",[a("tr",[a("div",[a("router-link",{attrs:{to:"/jvm/"+t.id+"/vm"}},[t._v("VM概要")])],1)]),a("tr",[a("div",[a("router-link",{attrs:{to:"/jvm/"+t.id+"/memory"}},[t._v("内存")])],1)]),a("tr",[a("div",[a("router-link",{attrs:{to:"/jvm/"+t.id+"/thread"}},[t._v("线程")])],1)]),a("tr",[a("div",[a("router-link",{attrs:{to:"/jvm/"+t.id+"/class"}},[t._v("堆对象统计")])],1)])])])])],1),a("div",{staticClass:"col-md-10"},[a("el-card",[a("router-view",{key:t.$route.fullPath})],1)],1)])},h=[],b={name:"Detail",data:function(){return{id:null,loading:!0}},methods:{},created:function(){this.id=this.$route.params.id}},g=b,j=(a("490b"),Object(p["a"])(g,f,h,!1,null,"37f92e42",null)),_=j.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",[a("p",{staticClass:"head"},[t._v("VM概要")]),t.loading?a("van-skeleton",{staticClass:"van-skeleton",attrs:{title:"",row:8}}):t._e(),t.loading?t._e():a("div",[a("el-row",[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[t._v("名称")])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"grid-content bg-purple-light item-content"},[t._v(" "+t._s(t.data.mainClass)+" ")])])],1),a("el-divider"),a("el-row",[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[t._v("运行时间")])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"grid-content bg-purple-light item-content"},[t._v(" "+t._s(t._f("time")(t.data.upTime))+" ")])])],1),a("el-divider"),a("el-row",[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[t._v("进程CPU时间")])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"grid-content bg-purple-light item-content"},[t._v(" "+t._s(t._f("time")(t.data.progressCpuTime))+" ")])])],1),a("el-divider"),a("el-row",[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[t._v("当前堆大小")])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"grid-content bg-purple-light item-content"},[t._v(" "+t._s(t.data.heapUsed.toFixed(2))+" MB ")])])],1),a("el-divider"),a("el-row",[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[t._v("最大堆大小")])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"grid-content bg-purple-light item-content"},[t._v(" "+t._s(t.data.heapMax.toFixed(2))+" MB ")])])],1),a("el-divider"),a("el-row",[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[t._v("提交的内存")])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"grid-content bg-purple-light item-content"},[t._v(" "+t._s(t.data.heapCommitted.toFixed(2))+" MB ")])])],1),a("el-divider"),a("el-row",[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[t._v("GC")])]),a("el-col",{attrs:{span:20}},t._l(t.data.garbageCollectInfos,(function(e){return a("div",{key:e.name,staticClass:"grid-content bg-purple-light item-content"},[t._v(" "+t._s(e.name)+"收集:"+t._s(e.count)+", 耗时:"+t._s(t._f("time")(e.time))+" ")])})),0)],1),a("el-divider"),a("el-row",[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[t._v("虚拟机")])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"grid-content bg-purple-light item-content"},[t._v(" "+t._s(t.data.vmName)+" 版本 "+t._s(t.data.vmVersion)+" ")])])],1),a("el-divider"),a("el-row",[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[t._v("处理器数")])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"grid-content bg-purple-light item-content"},[t._v(" "+t._s(t.data.availableProcessors)+" ")])])],1),a("el-divider"),a("el-row",[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[t._v("物理内存")])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"grid-content bg-purple-light item-content"},[a("div",[t._v(" 总物理内存:"+t._s(t.data.totalPhysicalMemorySize)+" MB ")]),a("div",[t._v(" 空闲物理内存:"+t._s(t.data.freePhysicalMemorySize)+" MB ")]),a("div",[t._v(" 总交换空间:"+t._s(t.data.totalSwapSpaceSize)+" MB ")]),a("div",[t._v(" 空闲交换空间:"+t._s(t.data.freeSwapSpaceSize)+" MB ")])])])],1),a("el-divider"),a("el-row",[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[t._v("JVM参数")])]),a("el-col",{attrs:{span:20}},t._l(t.data.vmArgs,(function(e){return a("div",{key:e,staticClass:"grid-content bg-purple-light item-content"},[t._v(" "+t._s(e)+" ")])})),0)],1),a("el-divider"),a("el-row",[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[t._v("类路径")])]),a("el-col",{attrs:{span:20}},t._l(t.data.classPaths,(function(e){return a("div",{key:e,staticClass:"grid-content bg-purple-light item-content"},[t._v(" "+t._s(e)+" ")])})),0)],1),a("el-divider"),a("el-row",[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[t._v("库路径")])]),a("el-col",{attrs:{span:20}},t._l(t.data.libraryPaths,(function(e){return a("div",{key:e,staticClass:"grid-content bg-purple-light item-content"},[t._v(" "+t._s(e)+" ")])})),0)],1),a("el-divider"),a("el-row",[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[t._v("引导类路径")])]),a("el-col",{attrs:{span:20}},t._l(t.data.bootstrapClassPaths,(function(e){return a("div",{key:e,staticClass:"grid-content bg-purple-light item-content"},[t._v(" "+t._s(e)+" ")])})),0)],1)],1)],1)},y=[],C=a("c1df"),k=a("bc3a"),x={name:"VM",filters:{time:function(t){var e=C.duration(t),a="";return 0!==e._data.years&&(a+=e._data.years+"年"),0!==e._data.months&&(a+=e._data.months+"月"),0!==e._data.days&&(a+=e._data.days+"日"),0!==e._data.hours&&(a+=e._data.hours+"小时"),0!==e._data.minutes&&(a+=e._data.minutes+"分钟"),0!==e._data.seconds&&(a+=e._data.seconds+"秒"),0!==e._data.milliseconds&&(a+=e._data.milliseconds+"毫秒"),a}},data:function(){return{loading:!0,timer:null,id:null,data:null}},methods:{getVmArgs:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,k.get("/api/jvms/".concat(this.id,"/vm"));case 2:e=t.sent,this.data=e.data,this.loading=!1;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.id=this.$route.params.id;var t=this;this.timer=setInterval((function(){t.getVmArgs()}),1e3)},beforeDestroy:function(){clearInterval(this.timer)}},S=x,O=(a("a9ea"),Object(p["a"])(S,w,y,!1,null,"63b190ab",null)),D=O.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",[a("p",{staticClass:"head"},[t._v("内存")]),t.loading?a("van-skeleton",{staticClass:"van-skeleton",attrs:{title:"",row:8}}):t._e(),t.loading?t._e():a("div",[a("el-row",{attrs:{type:"flex",justify:"end"}},[a("el-button",{on:{click:t.gc}},[t._v("GC")])],1),a("div",{staticClass:"row"},t._l(t.forms,(function(e){return a("div",{key:e.columns[1],staticClass:"col-md-6"},[a("ve-line",{attrs:{data:e,colors:t.colors,series:e.series}})],1)})),0)],1)],1)},z=[],T=(a("b0c0"),a("2ef0")),I=a.n(T),M=a("c3da"),$=a.n(M),N=a("5a0c"),F=a.n(N),P=a("bc3a"),L={components:{VeLine:$.a},name:"Memory",data:function(){return{loading:!0,colors:["#304ffe","#b71c1c"],id:null,timer:null,name2Form:{},forms:[]}},methods:{getMemory:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,a,s=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,P.get("/api/jvms/".concat(this.id,"/memory"));case 2:e=t.sent,this.loading=!1,a=F()().format("mm:ss"),I.a.each(e.data,(function(t){if(I.a.isEmpty(s.name2Form[t.name])){var e=F()().subtract(30,"second");s.name2Form[t.name]={columns:["time",t.name,"max"],rows:[],series:[{symbol:"none",type:"line",smooth:!1,name:t.name,data:[]},{symbol:"none",type:"line",smooth:!1,name:"max",data:[]}]};for(var n=s.name2Form[t.name],r=0;r<30;r++){var i=e.add(1,"second");n.rows.push({time:i.format("mm:ss")}),n.series[0].data.push(0),n.series[1].data.push(0),e=i}s.forms.push(s.name2Form[t.name])}var l=s.name2Form[t.name];l.rows.shift(),l.series[0].data.shift(),l.series[0].data.push(t.used/1e3/1e3),l.series[1].data.shift(),l.series[1].data.push(t.max/1e3/1e3);var o={time:a};l.rows.push(o)}));case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),gc:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,P.post("/api/jvms/".concat(this.id,"/gc"));case 2:this.$message({message:"操作成功",type:"success"});case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){var t=this;this.id=this.$route.params.id,this.timer=setInterval((function(){t.getMemory()}),1e3)},destroyed:function(){clearInterval(this.timer)}},V=L,E=Object(p["a"])(V,R,z,!1,null,"e59bb356",null),B=E.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",[a("p",{staticClass:"head"},[t._v("线程")]),a("el-row",[t.loading?a("van-skeleton",{staticClass:"van-skeleton",attrs:{title:"",row:8}}):t._e(),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[t.loading?t._e():a("ve-line",{attrs:{data:t.cpu,colors:t.colors,series:t.cpuSeries}})],1),a("div",{staticClass:"col-md-6"},[t.loading?t._e():a("ve-line",{attrs:{data:t.form,colors:t.colors,series:t.series}})],1)])],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:t.refreshThreads}},[t._v("刷新")])],1),a("el-col",{attrs:{span:12}},[a("el-button",{attrs:{icon:"el-icon-lock"},on:{click:t.getDeadThreads}},[t._v("检测死锁")])],1)],1),a("el-row",{staticStyle:{"margin-top":"20px"}},[a("el-col",{attrs:{span:10,offset:1}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.threads},on:{"row-click":t.getThreadDetail}},[a("el-table-column",{attrs:{prop:"name",label:"线程名"}}),a("el-table-column",{attrs:{prop:"state",sortable:"",label:"状态",width:"160"}})],1)],1),a("el-col",{staticStyle:{"margin-top":"60px"},attrs:{span:11,offset:1}},[a("pre",[t._v(t._s(t.threadDetail))])])],1),a("el-dialog",{attrs:{title:"死锁",visible:t.dialogShow,width:"80%"},on:{"update:visible":function(e){t.dialogShow=e}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-2"},[a("el-tree",{attrs:{data:t.deadLocks,props:t.defaultProps},on:{"node-click":t.showDeadLock}})],1),a("div",{staticClass:"col-md-8"},[a("pre",[t._v(t._s(t.deadLockThreadDetail))])])])])],1)},A=[],U=(a("99af"),a("d81d"),a("bc3a")),G={name:"Thread",components:{VeLine:$.a},data:function(){return{defaultProps:{children:"children",label:"label"},deadLocks:null,dialogShow:!1,loading:!0,id:null,timer:null,threads:[],threadDetail:null,deadLockThreadDetail:null,colors:["#304ffe","#b71c1c"],form:{columns:["time","活动线程","峰值线程"],rows:[]},cpu:{columns:["time","CPU"],rows:[]},cpuSeries:[{symbol:"none",type:"line",smooth:!1,name:"CPU",data:[]}],series:[{symbol:"none",type:"line",smooth:!1,name:"活动线程",data:[]},{symbol:"none",type:"line",smooth:!1,name:"峰值线程",data:[]}]}},methods:{getThreadsSummary:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,U.get("/api/jvms/".concat(this.id,"/threads_summary"));case 2:e=t.sent,this.loading=!1,I.a.size(this.form.rows)>=30&&(this.form.rows.shift(),this.series[0].data.shift(),this.series[1].data.shift(),this.cpu.rows.shift(),this.cpuSeries[0].data.shift()),a=F()().format("mm:ss"),this.form.rows.push({time:a}),this.series[0].data.push(e.data.activeThreadCount),this.series[1].data.push(e.data.peakThreadCount),this.cpu.rows.push({time:a}),this.cpuSeries[0].data.push(e.data.cpuUsage);case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),refreshThreads:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getThreads();case 2:this.$message({message:"操作成功",type:"success"});case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getThreads:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,U.get("/api/jvms/".concat(this.id,"/threads"));case 2:e=t.sent,this.threads=e.data;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getThreadDetail:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e),t.next=3,U.get("/api/jvms/".concat(this.id,"/threads/").concat(e.id));case 3:a=t.sent,this.threadDetail=a.data;case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getDeadThreads:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.deadLockThreadDetail=null,t.next=3,U.get("/api/jvms/".concat(this.id,"/deadlock"));case 3:if(e=t.sent,0!==I.a.size(e.data)){t.next=7;break}return this.$message({message:"没有死锁线程",type:"success"}),t.abrupt("return");case 7:this.deadLocks=I.a.map(e.data,(function(t,e){var a=I.a.map(t,(function(t){return{label:t.name,threadId:t.threadId}}));return{label:"死锁".concat(e),children:a}})),this.dialogShow=!0;case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),showDeadLock:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log(e.threadId),I.a.isNumber(e.threadId)){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,U.get("/api/jvms/".concat(this.id,"/threads/").concat(e.threadId));case 5:a=t.sent,this.deadLockThreadDetail=a.data;case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},created:function(){var t=this;this.id=this.$route.params.id,this.getThreads(),this.timer=setInterval((function(){t.getThreadsSummary()}),1e3)},destroyed:function(){clearInterval(this.timer)}},H=G,q=Object(p["a"])(H,J,A,!1,null,"0e1007aa",null),K=q.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",[a("p",{staticClass:"head"},[t._v("堆对象统计(耗时操作)")]),t.loading?a("van-skeleton",{staticClass:"van-skeleton",attrs:{title:"",row:8}}):t._e(),t.loading?t._e():a("div",[a("el-row",{attrs:{type:"flex",align:"middle"}},[a("el-col",{attrs:{span:6}},[a("el-input",{attrs:{placeholder:"ClassName"},model:{value:t.classFilter,callback:function(e){t.classFilter=e},expression:"classFilter"}})],1),a("el-col",{attrs:{offset:10,span:4}},[a("span",[t._v("总对象数:"+t._s(t.totalCount))])]),a("el-col",{attrs:{span:4}},[a("span",{},[t._v("总字节数:"+t._s(t.totalBytes))])])],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.afterFilterObjects}},[a("el-table-column",{attrs:{prop:"className",label:"ClassName"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("router-link",{attrs:{to:"/jvm/"+t.id+"/class/"+e.row.idString}},[t._v(" "+t._s(e.row.className)+" ")])]}}],null,!1,851404728)}),a("el-table-column",{attrs:{prop:"count",sortable:"",label:"数量",width:"120"}}),a("el-table-column",{attrs:{prop:"bytes",sortable:"",label:"bytes",width:"120"}})],1)],1)],1)],1)],1)},W=[],X=(a("4de4"),a("466d"),a("bc3a")),Y={name:"HeapObjects",data:function(){return{loading:!0,classFilter:"",id:null,totalCount:null,totalBytes:null,afterFilterObjects:null,objects:null}},methods:{getObjects:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,X.get("/api/jvms/".concat(this.id,"/class"));case 2:e=t.sent,this.totalCount=e.data.totalCount,this.totalBytes=e.data.totalBytes,this.objects=e.data.beans,this.afterFilterObjects=this.objects.filter((function(t){return t.className.match(a.classFilter)})),this.loading=!1;case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},watch:{classFilter:function(t){this.afterFilterObjects=this.objects.filter((function(e){return e.className.match(t)}))}},created:function(){this.id=this.$route.params.id,this.getObjects()}},Z=Y,tt=Object(p["a"])(Z,Q,W,!1,null,"50895777",null),et=tt.exports,at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",[a("p",{staticClass:"head"},[t._v("Class Detail")]),a("el-row",[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[t._v("类名")])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"grid-content bg-purple-light item-content"},[t._v(" "+t._s(t.data.className)+" ")])])],1),a("el-divider"),a("el-row",[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[t._v("父类")])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"grid-content bg-purple-light item-content"},[t._v(" "+t._s(t.data.superClassName)+" ")])])],1),a("el-divider"),a("el-row",[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[t._v("成员变量")])]),a("el-col",{attrs:{span:20}},t._l(t.data.fields,(function(e){return a("div",{key:e.name,staticStyle:{"padding-bottom":"4px"}},[t._v(" "+t._s(e.name)+" ("+t._s(e.signature)+") ")])})),0)],1),a("el-divider"),a("el-row",[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[t._v("静态成员变量")])]),a("el-col",{attrs:{span:20}},t._l(t.data.staticFields,(function(e){return a("div",{key:e.name,staticStyle:{"padding-bottom":"4px"}},[t._v(" "+t._s(e.name)+" ("+t._s(e.signature)+") : "),null==e.idString?a("span",[t._v(t._s(e.value))]):t._e(),e.idString?a("router-link",{attrs:{to:"/jvm/"+t.id+"/objects/"+e.idString}},[t._v(" "+t._s(e.value)+" ("+t._s(e.size)+" bytes) ")]):t._e()],1)})),0)],1),a("el-divider"),a("el-row",[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[t._v("实例对象")])]),a("el-col",{attrs:{span:20}},t._l(t.data.instances,(function(e){return a("div",{key:e.objectId,staticStyle:{"padding-bottom":"4px"}},[a("router-link",{attrs:{to:"/jvm/"+t.id+"/objects/"+e.objectId}},[t._v(" "+t._s(e.name)+" ("+t._s(e.size)+" bytes) ")])],1)})),0)],1),a("el-divider")],1)},st=[],nt=a("bc3a"),rt={name:"ClassDetail",data:function(){return{id:null,classId:null,data:null}},methods:{getObjectDetail:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,nt.get("/api/jvms/".concat(this.id,"/class/").concat(this.classId));case 2:e=t.sent,this.data=e.data;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.id=this.$route.params.id,this.classId=this.$route.params.classId,this.getObjectDetail()}},it=rt,lt=(a("5c0e"),Object(p["a"])(it,at,st,!1,null,"6acfa5aa",null)),ot=lt.exports,ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",[a("p",{staticClass:"head"},[t._v("Object Detail "+t._s(this.objectId))]),"Value"==t.data.type?a("el-row",[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[t._v("Value")])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"grid-content bg-purple-light item-content"},[t._v(" "+t._s(t.data.value)+" ")])])],1):t._e(),"JavaObject"==t.data.type?a("el-row",[a("el-row",[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[t._v("实例")])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"grid-content bg-purple-light item-content"},[t._v(" "+t._s(t.data.instance.name)+" ("+t._s(t.data.instance.size)+" bytes) ")])])],1),a("el-divider"),a("el-row",[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[t._v("Class")])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"grid-content bg-purple-light item-content"},[t._v(" "+t._s(t.data.class)+" ")])])],1),a("el-divider"),a("el-row",[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[t._v("成员变量")])]),a("el-col",{attrs:{span:20}},t._l(t.data.members,(function(e){return a("div",{key:e.objectId,staticStyle:{"padding-bottom":"4px"}},[t._v(" "+t._s(e.name)+" ("+t._s(e.signature)+") : "),null==e.idString?a("span",[t._v(t._s(e.value))]):t._e(),e.idString?a("router-link",{attrs:{to:"/jvm/"+t.id+"/objects/"+e.idString}},[t._v(" "+t._s(e.value)+" ("+t._s(e.size)+" bytes) ")]):t._e()],1)})),0)],1),a("el-divider")],1):t._e(),null!=t.data.referencesTo&&null!=t.data.referencesTo.referencesToThisObject?a("el-row",{staticStyle:{"margin-top":"10px"}},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[t._v("References to this object")])]),a("el-col",{attrs:{span:20}},t._l(t.data.referencesTo.referencesToThisObject,(function(e){return a("el-row",{key:e.thing.objectAddress,staticStyle:{"margin-bottom":"4px"}},[null!=e.thing.objectAddress?a("router-link",{attrs:{to:"/jvm/"+t.id+"/objects/"+e.thing.objectAddress}},[t._v(" "+t._s(e.thing.valueString)+" ("+t._s(e.thing.size)+" bytes) ")]):t._e(),null==e.thing.objectAddress?a("span",[t._v(" "+t._s(e.thing.valueString)+" ("+t._s(e.thing.size)+" bytes) ")]):t._e(),t._v(" : "+t._s(e.describe)+" ")],1)})),1)],1):t._e(),"JavaClass"==t.data.type?a("el-row",[a("el-row",[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[t._v("ClassName")])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[t._v(t._s(t.data.className))])])],1),a("el-divider"),a("el-row",[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[t._v("SuperClass")])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("router-link",{attrs:{to:"/jvm/"+t.id+"/class/"+t.data.Superclass.classAddress}},[t._v(t._s(t.data.Superclass.class))])],1)])],1),a("el-divider"),a("el-row",[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[t._v("ClassLoader")])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"grid-content bg-purple"},[a("router-link",{attrs:{to:"/jvm/"+t.id+"/objects/"+t.data.ClassLoader.objectAddress}},[t._v(t._s(t.data.ClassLoader.valueString)+"("+t._s(t.data.ClassLoader.size)+" bytes)")])],1)])],1)],1):t._e()],1)},dt=[],ut=a("bc3a"),pt={name:"ObjectDetail",data:function(){return{id:null,objectId:null,data:{}}},methods:{objectDetail:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ut.get("/api/jvms/".concat(this.id,"/objects/").concat(this.objectId));case 2:e=t.sent,this.data=e.data;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.id=this.$route.params.id,this.objectId=this.$route.params.objectId,this.objectDetail()}},mt=pt,vt=(a("1e37"),Object(p["a"])(mt,ct,dt,!1,null,"061ba31c",null)),ft=vt.exports,ht=[{path:"/jvm/:id",component:_,children:[{path:"vm",component:D},{path:"memory",component:B},{path:"thread",component:K},{path:"class",component:et},{path:"class/:classId",component:ot},{path:"objects/:objectId",component:ft}]},{path:"/*",component:v}],bt=new r["a"]({routes:ht,mode:"history"}),gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{width:"100%",overflow:"hidden"}},[a("div",{staticClass:"navbar navbar-default topnav"},[a("div",{staticClass:"container"},[a("div",{staticClass:"navbar-header"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v(" Java在线监控 ")])],1)])]),a("router-view",{staticClass:"main"})],1)},jt=[],_t={name:"App"},wt=_t,yt=(a("5c0b"),Object(p["a"])(wt,gt,jt,!1,null,null,null)),Ct=yt.exports,kt=a("5c96"),xt=a.n(kt),St=(a("0fae"),a("bc3a")),Ot=a.n(St);Ot.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",Ot.a.defaults.headers.get["Content-Type"]="application/x-www-form-urlencoded",Ot.a.defaults.transformRequest=[function(t){var e="";for(var a in t)e+=encodeURIComponent(a)+"="+encodeURIComponent(t[a])+"&";return e}],s["default"].use(r["a"]),s["default"].use(n["a"]),s["default"].use(xt.a),s["default"].config.productionTip=!1,new s["default"]({render:function(t){return t(Ct)},router:bt}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),n=a.n(s);n.a},"5c0e":function(t,e,a){"use strict";var s=a("9f7d"),n=a.n(s);n.a},"700d":function(t,e,a){"use strict";var s=a("7b25"),n=a.n(s);n.a},"71a9":function(t,e,a){},"7b25":function(t,e,a){},"9c0c":function(t,e,a){},"9f7d":function(t,e,a){},a9ea:function(t,e,a){"use strict";var s=a("b4b1"),n=a.n(s);n.a},b4b1:function(t,e,a){}});
//# sourceMappingURL=app.bfa883c2.js.map