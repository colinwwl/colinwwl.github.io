(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{1262:function(s,t,a){"use strict";a.r(t);var e=a(19),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"发布和订阅"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发布和订阅"}},[s._v("#")]),s._v(" 发布和订阅")]),s._v(" "),e("h2",{attrs:{id:"什么是发布和订阅"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是发布和订阅"}},[s._v("#")]),s._v(" 什么是发布和订阅")]),s._v(" "),e("p",[s._v("Redis 发布订阅 (pub/sub) 是一种消息通信模式：发送者 (pub) 发送消息，订阅者 (sub) 接收消息。")]),s._v(" "),e("p",[s._v("Redis 客户端可以订阅任意数量的频道。")]),s._v(" "),e("h2",{attrs:{id:"redis的发布和订阅"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis的发布和订阅"}},[s._v("#")]),s._v(" Redis的发布和订阅")]),s._v(" "),e("p",[s._v("1、客户端可以订阅频道如下图")]),s._v(" "),e("p",[e("img",{attrs:{src:a(953),alt:""}})]),s._v(" "),e("p",[s._v("2、当给这个频道发布消息后，消息就会发送给订阅的客户端")]),s._v(" "),e("p",[e("img",{attrs:{src:a(954),alt:""}})]),s._v(" "),e("h2",{attrs:{id:"发布订阅命令行实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发布订阅命令行实现"}},[s._v("#")]),s._v(" 发布订阅命令行实现")]),s._v(" "),e("p",[s._v("1、 打开一个客户端订阅channel1")]),s._v(" "),e("p",[s._v("SUBSCRIBE channel1")]),s._v(" "),e("p",[e("img",{attrs:{src:a(955),alt:""}})]),s._v(" "),e("p",[s._v("2、打开另一个客户端，给channel1发布消息hello")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("publish channel1 hello\n")])])]),e("p",[e("img",{attrs:{src:a(956),alt:""}})]),s._v(" "),e("p",[s._v("返回的1是订阅者数量")]),s._v(" "),e("p",[s._v("3、打开第一个客户端可以看到发送的消息")]),s._v(" "),e("p",[e("img",{attrs:{src:a(957),alt:""}})]),s._v(" "),e("p",[s._v("注：发布的消息没有持久化，如果在订阅的客户端收不到hello，只能收到订阅后发布的消息")])])}),[],!1,null,null,null);t.default=r.exports},953:function(s,t,a){s.exports=a.p+"assets/img/2021-05-15-00-06-13.7f3036d1.png"},954:function(s,t,a){s.exports=a.p+"assets/img/2021-05-15-00-06-20.4231be0e.png"},955:function(s,t,a){s.exports=a.p+"assets/img/2021-05-15-00-06-36.30df8665.png"},956:function(s,t,a){s.exports=a.p+"assets/img/2021-05-15-00-06-45.6a89e979.png"},957:function(s,t,a){s.exports=a.p+"assets/img/2021-05-15-00-07-02.51a6d02f.png"}}]);