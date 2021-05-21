(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1006:function(t,s,a){t.exports=a.p+"assets/img/2021-05-15-00-19-11.bd45f2dc.png"},1007:function(t,s,a){t.exports=a.p+"assets/img/2021-05-15-08-21-59.45de9508.png"},1008:function(t,s,a){t.exports=a.p+"assets/img/2021-05-15-08-22-26.76b80bd1.png"},1009:function(t,s,a){t.exports=a.p+"assets/img/2021-05-15-08-22-36.f2171fa5.png"},1010:function(t,s,a){t.exports=a.p+"assets/img/2021-05-15-08-22-44.53077d33.png"},1011:function(t,s,a){t.exports=a.p+"assets/img/2021-05-15-08-23-33.5ea574f9.png"},1012:function(t,s,a){t.exports=a.p+"assets/img/2021-05-15-08-23-20.dce42048.png"},1013:function(t,s,a){t.exports=a.p+"assets/img/2021-05-15-08-25-14.092bab77.png"},1014:function(t,s,a){t.exports=a.p+"assets/img/2021-05-15-08-25-24.673d7298.png"},1015:function(t,s,a){t.exports=a.p+"assets/img/2021-05-15-08-27-05.ac4d44d9.png"},1016:function(t,s,a){t.exports=a.p+"assets/img/2021-05-15-08-27-47.06768e54.png"},1270:function(t,s,a){"use strict";a.r(s);var r=a(19),_=Object(r.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"事务-锁机制-秒杀"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#事务-锁机制-秒杀"}},[t._v("#")]),t._v(" 事务_锁机制_秒杀")]),t._v(" "),r("h2",{attrs:{id:"redis的事务定义"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#redis的事务定义"}},[t._v("#")]),t._v(" Redis的事务定义")]),t._v(" "),r("p",[r("img",{attrs:{src:a(1006),alt:""}})]),t._v(" "),r("p",[t._v("Redis事务是一个单独的隔离操作：事务中的所有命令都会序列化、按顺序地执行。事务在执行的过程中，不会被其他客户端发送来的命令请求所打断。")]),t._v(" "),r("p",[t._v("Redis事务的主要作用就是串联多个命令防止别的命令插队。")]),t._v(" "),r("h2",{attrs:{id:"multi、exec、discard"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#multi、exec、discard"}},[t._v("#")]),t._v(" Multi、Exec、discard")]),t._v(" "),r("p",[t._v("从输入Multi命令开始，输入的命令都会依次进入命令队列中，但不会执行，直到输入Exec后，Redis会将之前的命令队列中的命令依次执行。")]),t._v(" "),r("p",[t._v("组队的过程中可以通过discard来放弃组队。")]),t._v(" "),r("p",[r("img",{attrs:{src:a(1007),alt:""}})]),t._v(" "),r("h2",{attrs:{id:"案例"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#案例"}},[t._v("#")]),t._v(" 案例")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[r("img",{attrs:{src:a(1008),alt:""}}),t._v(" 组队成功，提交成功")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("img",{attrs:{src:a(1009),alt:""}}),t._v(" 组队阶段报错，提交失败")])]),t._v(" "),r("tr",[r("td",[r("img",{attrs:{src:a(1010),alt:""}}),t._v(" 组队成功，提交有成功有失败情况")])])])]),t._v(" "),r("h2",{attrs:{id:"事务的错误处理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#事务的错误处理"}},[t._v("#")]),t._v(" 事务的错误处理")]),t._v(" "),r("p",[t._v("组队中某个命令出现了报告错误，执行时整个的所有队列都会被取消。"),r("br"),t._v(" "),r("img",{attrs:{src:a(1011),alt:""}})]),t._v(" "),r("p",[t._v("如果执行阶段某个命令报出了错误，则只有报错的命令不会被执行，而其他的命令都会执行，不会回滚。")]),t._v(" "),r("p",[r("img",{attrs:{src:a(1012),alt:""}})]),t._v(" "),r("h2",{attrs:{id:"为什么要做成事务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么要做成事务"}},[t._v("#")]),t._v(" 为什么要做成事务")]),t._v(" "),r("p",[t._v("想想一个场景：有很多人有你的账户,同时去参加双十一抢购")]),t._v(" "),r("h2",{attrs:{id:"事务冲突的问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#事务冲突的问题"}},[t._v("#")]),t._v(" 事务冲突的问题")]),t._v(" "),r("h3",{attrs:{id:"例子"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[t._v("#")]),t._v(" 例子")]),t._v(" "),r("p",[t._v("一个请求想给金额减8000")]),t._v(" "),r("p",[t._v("一个请求想给金额减5000")]),t._v(" "),r("p",[t._v("一个请求想给金额减1000")]),t._v(" "),r("p",[r("img",{attrs:{src:a(1013),alt:""}})]),t._v(" "),r("h3",{attrs:{id:"悲观锁"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#悲观锁"}},[t._v("#")]),t._v(" 悲观锁")]),t._v(" "),r("p",[r("img",{attrs:{src:a(1014),alt:""}})]),t._v(" "),r("p",[r("strong",[t._v("悲观锁(Pessimistic Lock)")]),t._v(", 顾名思义，就是很悲观，每次去拿数据的时候都认为别人会修改，所以每次在拿数据的时候都会上锁，这样别人想拿这个数据就会block直到它拿到锁。"),r("strong",[t._v("传统的关系型数据库里边就用到了很多这种锁机制")]),t._v("，比如"),r("strong",[t._v("行锁")]),t._v("，"),r("strong",[t._v("表锁")]),t._v("等，"),r("strong",[t._v("读锁")]),t._v("，"),r("strong",[t._v("写锁")]),t._v("等，都是在做操作之前先上锁。")]),t._v(" "),r("h3",{attrs:{id:"乐观锁"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#乐观锁"}},[t._v("#")]),t._v(" 乐观锁")]),t._v(" "),r("p",[r("img",{attrs:{src:a(1015),alt:""}})]),t._v(" "),r("p",[r("strong",[t._v("乐观锁(Optimistic Lock)")]),t._v(",顾名思义，就是很乐观，每次去拿数据的时候都认为别人不会修改，所以不会上锁，但是在更新的时候会判断一下在此期间别人有没有去更新这个数据，可以使用版本号等机制。"),r("strong",[t._v("乐观锁适用于多读的应用类型，这样可以提高吞吐量")]),t._v("。Redis就是利用这种check-and-set机制实现事务的。")]),t._v(" "),r("h3",{attrs:{id:"watch-key-key"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#watch-key-key"}},[t._v("#")]),t._v(" WATCH key[key ...]")]),t._v(" "),r("p",[t._v("在执行multi之前，先执行watch key1 [key2],可以监视一个(或多个) key ，如果在事务"),r("strong",[t._v("执行之前这个(或这些) key 被其他命令所改动，那么事务将被打断。")])]),t._v(" "),r("p",[r("img",{attrs:{src:a(1016),alt:""}})]),t._v(" "),r("h3",{attrs:{id:"unwatch"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#unwatch"}},[t._v("#")]),t._v(" unwatch")]),t._v(" "),r("p",[t._v("取消 WATCH 命令对所有 key 的监视。")]),t._v(" "),r("p",[t._v("如果在执行 WATCH 命令之后，EXEC 命令或DISCARD 命令先被执行了的话，那么就不需要再执行UNWATCH 了。")]),t._v(" "),r("p",[t._v("http://doc.redisfans.com/transaction/exec.html")]),t._v(" "),r("h2",{attrs:{id:"事务三特性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#事务三特性"}},[t._v("#")]),t._v(" 事务三特性")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("单独的隔离操作")])]),t._v(" "),r("li",[r("p",[t._v("事务中的所有命令都会序列化、按顺序地执行。事务在执行的过程中，不会被其他客户端发送来的命令请求所打断。")])]),t._v(" "),r("li",[r("p",[t._v("没有隔离级别的概念")])]),t._v(" "),r("li",[r("p",[t._v("队列中的命令没有提交之前都不会实际被执行，因为事务提交前任何指令都不会被实际执行")])]),t._v(" "),r("li",[r("p",[t._v("不保证原子性")])]),t._v(" "),r("li",[r("p",[t._v("事务中如果有一条命令执行失败，其后的命令仍然会被执行，没有回滚")])])])])}),[],!1,null,null,null);s.default=_.exports}}]);