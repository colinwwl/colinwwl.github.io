(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{1242:function(s,t,a){"use strict";a.r(t);var n=a(19),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"sql分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sql分析"}},[s._v("#")]),s._v(" sql分析")]),s._v(" "),n("h3",{attrs:{id:"_0-课程内容"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_0-课程内容"}},[s._v("#")]),s._v(" 0. 课程内容")]),s._v(" "),n("pre",[s._v("1. 课程回顾\n    1.1 字段选择\n    1.2 sql的执行流程\n2. SQL语句的错误使用--------(注意)\n3. 优化SQL的思路-----------(重点)\n4. explain分析------------(重点 -- 不算难 -- 就是需要记记)\n5. profiling分析----------(重点 -- 不算难 -- 就是需要记记)\n\n")]),s._v(" "),n("h3",{attrs:{id:"_1-sql的执行流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-sql的执行流程"}},[s._v("#")]),s._v(" 1. sql的执行流程")]),s._v(" "),n("p",[n("img",{attrs:{src:a(745),alt:""}})]),s._v(" "),n("p",[s._v("解析器")]),s._v(" "),n("p",[s._v("MySQL解析器由两部分组成：句法扫描器和语法规则模块。语法扫描器讲整个查询分解为多个令牌（一些不可分割的元素，列如列名称），同时语法规则模块找到一个SQL语法规则组合，该组合产生这一序列，并执行与这些规则相关的代码。最后产生一棵解析树，现在优化器可以使用。")]),s._v(" "),n("p",[s._v("设想服务器收到下列查询：")]),s._v(" "),n("div",{staticClass:"language-sql extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("state "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" table_name "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" state\n")])])]),n("p",[s._v("这条SQL语句就会通过句法扫描器检查查询字符流，将其分解为令牌，然后识别每个令牌。如下：")]),s._v(" "),n("pre",[s._v("select\ncount\n(\n*\n)\n,\nstate\nfrom\ntable_name\ngroup\nby\nstate\n")]),s._v(" "),n("p",[s._v("每个令牌都有一个类型，列如一个关键字，一个字符串，一个数字，一个操作符或一个函数名称。语法规则模块安装一系列规则与名片六相应匹配，然后找出正确的规则，而上面的SQL是select 规则（sql/sql_yacc.yy） 他相应地初始化解析树结构。")]),s._v(" "),n("p",[s._v("MySQL会通过sql/gen_lex_hash.cc 生成有效的关键字查询散列，然后通过扫描器sql/sql_lex.cc讲每个名片标记为一个关键字，一个函数名称，大量特定类型或一些在语法规则中具有某种意义的特殊符号,然后这些内容通过解析器根据语法规则创建对应的解析树。")]),s._v(" "),n("p",[s._v("（解析树主要是是lex类型对象代表，在sql/sql_lex.h中有定义 成员很多 比如：enum_sql_command sql_command 它显示我们正在执行的SQL查询类型，是select，update，delete，insert还是其他类型）")]),s._v(" "),n("p",[s._v("优化器")]),s._v(" "),n("p",[s._v("优化器接收到解析器返回的解析树的内容然后会做如下几件事情（因为优化器的内容过多暂时可以先了解做的操作即可）")]),s._v(" "),n("p",[s._v("MySQL优化器具有几个重要功能")]),s._v(" "),n("ul",[n("li",[s._v("确定使用哪个键从表中获取记录，并选择最合适该表的建。")]),s._v(" "),n("li",[s._v("(join)针对每个表确定扫描标识符比读取建更好，如果有很多记录与建值匹配，则建的优点下降，而表扫描速度更快。")]),s._v(" "),n("li",[s._v("(join)当查询中出现一个以上的表示，确定表的连接顺序")]),s._v(" "),n("li",[s._v("重写where从句，以删除死代码，减少不必要的计算，尽可能更改限制条件，以便为键使用开辟道路")]),s._v(" "),n("li",[s._v("(join)从链接中删除未使用的表")]),s._v(" "),n("li",[s._v("确定是否能将键用于order by 和 group by")]),s._v(" "),n("li",[s._v("(join)是这是用一个内部连接替换一个外部连接")]),s._v(" "),n("li",[s._v("(join)试着简化子查询，并决定其结果的高速缓存程度")]),s._v(" "),n("li",[s._v("(join)合并试图（扩大视图引用，使其成为一个宏）")])]),s._v(" "),n("p",[s._v("总结:")]),s._v(" "),n("p",[s._v("总的来说当客户端向MySQL请求一条query命令解析器模块完成请求分类，区别出是select并转发给优化器时，优化器会根据相应的规则对于query进行优化，处理掉一些常量表达式的预算，直接换掉常量值。并对query中的查询条件进行简化和转换，如去掉一些无用或显而意见的条件、结构调整等。然后分析query中的Hint(类似于标识)信息,如果有hint就会执行query的计划，没有就会读取设计对象的统计信息，根据query进行写相应的计算分析，然后再得出最后的计划。")]),s._v(" "),n("p",[s._v("优化器是一个数据库软件非常核心的功能，虽然说起来只是简单的几句话，单在MySQL内部，优化器实际上经过了很多复杂的运算分析，才得出的执行计划。对于优化器结合于后面的知··识点涉及讲解。")]),s._v(" "),n("h3",{attrs:{id:"_2-sql语句的错误使用-注意"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-sql语句的错误使用-注意"}},[s._v("#")]),s._v(" 2. SQL语句的错误使用(注意)")]),s._v(" "),n("p",[s._v("学员问题：可不可以多次查询优化查询效率 （针对join 或者 in ）")]),s._v(" "),n("p",[s._v("注意这个问题并没有很直接的正确答案，问题本身是模棱两可的 既可以多次查询也可以一起；")]),s._v(" "),n("p",[s._v("对于SQL的错误使用有两种情况就是过强和过弱 这是常常会可能出现的问题：")]),s._v(" "),n("p",[s._v("比如查询粉丝最多的前十个用户的文章总数")]),s._v(" "),n("p",[s._v("粉丝关注表：user_fans")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("Field")]),s._v(" "),n("th",[s._v("Type")]),s._v(" "),n("th",[s._v("Null")]),s._v(" "),n("th",[s._v("Key")]),s._v(" "),n("th",[s._v("Default")]),s._v(" "),n("th",[s._v("Extra")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("id")]),s._v(" "),n("td",[s._v("int(11)")]),s._v(" "),n("td",[s._v("NO")]),s._v(" "),n("td",[s._v("PRI")]),s._v(" "),n("td",[s._v("0")]),s._v(" "),n("td")]),s._v(" "),n("tr",[n("td",[s._v("user_id")]),s._v(" "),n("td",[s._v("int(11)")]),s._v(" "),n("td",[s._v("NO")]),s._v(" "),n("td"),s._v(" "),n("td",[s._v("MUL")]),s._v(" "),n("td",[s._v("NULL")])]),s._v(" "),n("tr",[n("td",[s._v("fans_id")]),s._v(" "),n("td",[s._v("int(11)")]),s._v(" "),n("td",[s._v("NO")]),s._v(" "),n("td"),s._v(" "),n("td",[s._v("MUL")]),s._v(" "),n("td",[s._v("NULL")])])])]),s._v(" "),n("p",[s._v("查询的方法")]),s._v(" "),n("p",[s._v("方案一、")]),s._v(" "),n("div",{staticClass:"language-sql extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" user_id "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v("\n    user_id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" c\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v("\n    user_fans\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v("\n    user_id\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" c "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("desc")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" fans_count"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n然后再通过循环查询出用户的id信息并输出\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fans_count"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" article "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" user_id "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ?\n")])])]),n("p",[s._v("方案二、")]),s._v(" "),n("div",{staticClass:"language-sql extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" user_id "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v("\n    user_id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" c\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v("\n    user_fans\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v("\n    user_id\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" c "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("desc")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" fans_count"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n如上内容不变\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" article "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" user_id "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("?"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" user_id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),n("p",[s._v("对比：")]),s._v(" "),n("ol",[n("li",[s._v("从MySQL执行的query数量来看第一种为 1 + 10 = 11 条，第二种为 1 + 1 =2")]),s._v(" "),n("li",[s._v("对应的交互数量11 ： 2")]),s._v(" "),n("li",[s._v("io操作对比假设一条SQL就是一个IO，第一种最少有11次IO，第二种小余或等于11次IO；如果数据非常离散就是11次；")]),s._v(" "),n("li",[s._v("复杂度：前缀的SQL不管只看第二条SQL；第一种简单一些，第二种就增加了group by")]),s._v(" "),n("li",[s._v("数据库对于结果的返回地中是11次，第二种是2次，但是第二种方法中的第二次结果是第一次的10倍")]),s._v(" "),n("li",[s._v("从应用程序的数据处理来看，第二种比第一种多了一个拼接photo_id的过程")])]),s._v(" "),n("p",[s._v("根据上面的点做对比分析：")]),s._v(" "),n("ol",[n("li",[s._v("由于MySQL不管客户端每次调教的query是相同还是不同，都需要进行完全解析这个动作主要消耗的资源师数据库主机的CPU，那么这里第一种方案和第二种方案消耗CPU的比例是11:2. query语句的解析动作在整个query语句执行过程中的整体消耗的CPU比例是比较多的；")]),s._v(" "),n("li",[s._v("网络交互对比：11:2")]),s._v(" "),n("li",[s._v("IO比 <= 1:1")]),s._v(" "),n("li",[s._v("在数据量少的情况下分组性能问题不大")])]),s._v(" "),n("p",[s._v("所以相对来说第二种会更好一点-》 这个情况就是过度的弱化SQL 或者说数据库的处理能力")]),s._v(" "),n("p",[s._v("但是如果说根据第二种方法把两条SQL合在一起呢？")]),s._v(" "),n("div",{staticClass:"language-sql extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" article "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" user_id "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" user_id "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v("\n      user_id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" c\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v("\n      user_fans\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v("\n      user_id\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" c "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("desc")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" fans_count"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" user_id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),n("p",[s._v("当然是可以执行，但是目前的这个SQL复杂度同比之前任何一条SQL都要复杂 还不是一点点的问题.....")]),s._v(" "),n("p",[s._v("从数据库的交互来说 2 ： 1，但是复杂来说不是一点点的大")]),s._v(" "),n("p",[s._v("之前其实有提过SQL语句会通过解析器分解为不同的令牌，任何生成解析树提供给优化器使用并对SQL进行计算和优化，再去执行该计划，但是因为SQL的复杂度增加，对于优化器来说分析的难度也会增加 -- 执行的计算会更多。")]),s._v(" "),n("p",[s._v("粉丝关注及其用户信息统计：user_stat")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("Field")]),s._v(" "),n("th",[s._v("Type")]),s._v(" "),n("th",[s._v("Null")]),s._v(" "),n("th",[s._v("Key")]),s._v(" "),n("th",[s._v("Default")]),s._v(" "),n("th",[s._v("Extra")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("id")]),s._v(" "),n("td",[s._v("int(11)")]),s._v(" "),n("td",[s._v("NO")]),s._v(" "),n("td",[s._v("PRI")]),s._v(" "),n("td",[s._v("0")]),s._v(" "),n("td")]),s._v(" "),n("tr",[n("td",[s._v("user_id")]),s._v(" "),n("td",[s._v("int(11)")]),s._v(" "),n("td",[s._v("NO")]),s._v(" "),n("td"),s._v(" "),n("td",[s._v("MUL")]),s._v(" "),n("td",[s._v("NULL")])]),s._v(" "),n("tr",[n("td",[s._v("fans_count")]),s._v(" "),n("td",[s._v("int(11)")]),s._v(" "),n("td",[s._v("NO")]),s._v(" "),n("td"),s._v(" "),n("td",[s._v("MUL")]),s._v(" "),n("td",[s._v("NULL")])])])]),s._v(" "),n("h3",{attrs:{id:"_3-优化sql的思路-重点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-优化sql的思路-重点"}},[s._v("#")]),s._v(" 3. 优化SQL的思路(重点)")]),s._v(" "),n("p",[s._v("query 功能的优化 -> 涉及了很多操作 不是一条SQL语句 一定要先找问题分析")]),s._v(" "),n("p",[s._v("优化SQL -> 可能会给我们数据表带来变动 => 建立索引 修改配置 => 配置影响整体")]),s._v(" "),n("p",[s._v("优化不仅仅只是只SQL语句 =>")]),s._v(" "),n("p",[s._v("索引可以提高数据表的查询的速度 => 降低写操作速度 => 索引可能我使用会失效")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("需要知道更需要去优化的功能 -> 优化更需要优化SQL")])]),s._v(" "),n("li",[n("p",[s._v("定位优化他的性能瓶颈 还可能与数据表有关系, CPU, IO操作次数()")])]),s._v(" "),n("li",[n("p",[s._v("明确目标")]),s._v(" "),n("p",[s._v("优化不是影响的局部地区,还会影响其他地区;在优化的时候 已经想到优化方案 表写入的时候次数是否频繁")]),s._v(" "),n("p",[s._v("优化在不影响功能的情况下,会牺牲某一些点,提高整体的体验 => 代码设计需要事先想好的")]),s._v(" "),n("p",[s._v("支付 =>")])])]),s._v(" "),n("p",[s._v("索引对于SQL的使用")]),s._v(" "),n("h3",{attrs:{id:"_4-explain分析-重点-不算难-就是需要记记"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-explain分析-重点-不算难-就是需要记记"}},[s._v("#")]),s._v(" 4. explain分析(重点 -- 不算难 -- 就是需要记记)")]),s._v(" "),n("div",{staticClass:"language-sql extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[s._v("\n查询的是mysql的io操作\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("like")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'innodb_data_r%'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("like")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'innodb_data_w%'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("like")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'innodb_log_wrt%'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("like")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'innodb_db'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n速度看电脑 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("ms "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("ms\n\ninnodb_data_reads "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" innodb_data_writes "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" innodb_dblwr_writes "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" innodb_log_writes "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" IO 次数\n\n查询数据表的情况\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" table_name\n查询表索引使用的情况\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" indexes "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" table_name\n命令查看数据库表的底层大小以及表结构（存储引擎，版本，数据和索引大小，行的平均长度以及行数）\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("like")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'table_name'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("desc")]),s._v(" table_name\n\n定位查看"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SQL")]),s._v("执行\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("full")]),s._v(" processlist"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n系统\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("explain")]),s._v("分析 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("profiling 利器\n")])])]),n("p",[s._v("explain在前面的内容中已经有所提到会返回mysql优化器的执行计划。可以说explain是在优化query是最直接有效第验证我们想法的工具。")]),s._v(" "),n("p",[s._v("explain 语句的基本语法如下")]),s._v(" "),n("div",{staticClass:"language-sql extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("explain")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" select_options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),n("p",[s._v("下面看一下再mysql explain功能中展示各种信息的解释：")]),s._v(" "),n("div",{staticClass:"language-yml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-yml"}},[n("code",[s._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("优化器选定的执行计划中查询的序列号。\nselect_type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("所用的查询类型，主要由以下这集中查询类型。\n  . DEPENDENT UNION"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("子查询中的UNION，且为UNION中从第二个SELECT开始的后面所有SELECT，同样依赖于外部查询的结果集。\n\n  . SIMPLE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("厨子查询或UNION之外的其他查询。\n    》explain select * from admin_user where user_id = 1 \\G;\n\n  . PRIMARY"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("子查询中最外层查询，注意并不是主键查询。\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v(". SUBQUERY")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 子查询内层查询的第一个SELECT，结果不依赖与外部查询结果集。\n    》explain select * from role where id = (select role_id from admin_user where user_id = 1) \\G;\n\n  . UNCACHEABLE SUBQUERY"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("结果集无法缓存的子查询\n\n  . UNION"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("UNION 语句中第二个SELECT开始后面的所有SELECT"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("第一个SELECT为PRIMARY。\n\n  . UNION RESULT"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("UNION 中的合并结果。\n\ntable：显示这一步所访问的数据库中的表的名称。\ntype：告诉我们对标使用的访问方式，主要包含如下几种类型。\n  . all： 全表扫描。\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v(". const")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 读常量，最多只会有一条记录匹配，由于是常量，实际上只需要读一次。\n  . eq_ref：最多只会有一条匹配结果，一般是通过主键或唯一键索引来访问\n  . fulltext：进行全文索引检索\n  . index：全索引扫描\n  . index_merge：查询中同时使用两个（或更多）索引，然后对索引结果进行和并，在读取表数据。\n  . index_subquery：子查询中的返回结果字段组合是一个索引（或索引组合），但不是一个主键或唯一索引。\n  . rang：索引范围扫描。\n  . ref：join语句中被驱动表索引引用的查询。\n  . ref_or_null：与ref的唯一区别就是使用索引引用的查询之外再增加一个空值的查询。\n  . system：系统表，表中只有一行数据：\n  . unique_subqery：子查询中的返回结果字段组合式主键或唯一约束。\nPossible_keys：该查询可以利用的索引。如果没有任何索引可以使用，就会显示程null，这项内容对优化索引时的调整非常重要。\nkey：优化器从possible_keys中选择使用的索引。\nkey_len：被选中使用索引的索引建长度。\nref：列出是通过常量，还是某个字段的某个字段来过滤的\nrows：优化其通过系统手机的统计信息估算出来的结果集记录条数\nextra：查询中每一步实现的额外细节信息。\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v(". using index")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 出现这个说明mysql使用了覆盖索引，避免访问了表的数据行，效率不错。\n  . using where ：这说明服务器在存储引擎收到行后讲进行过滤。\n  . using temporary ：这意味着mysql对查询结果进行排序的时候使用了一张临时表\n  . using filesort ：这个说明mysql会对数据使用一个外部的索引排序\n\n注意当出现using temporary 和 using filesort时候说明需要优化操作\n")])])])])}),[],!1,null,null,null);t.default=e.exports},745:function(s,t,a){s.exports=a.p+"assets/img/2.5add84b3.png"}}]);