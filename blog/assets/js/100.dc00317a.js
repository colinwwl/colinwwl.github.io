(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{1319:function(t,s,a){"use strict";a.r(s);var _=a(19),v=Object(_.a)({},(function(){var t=this,s=t.$createElement,_=t._self._c||s;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"数据库基础设计与表设计"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据库基础设计与表设计"}},[t._v("#")]),t._v(" 数据库基础设计与表设计")]),t._v(" "),_("h3",{attrs:{id:"作业"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#作业"}},[t._v("#")]),t._v(" 作业")]),t._v(" "),_("p",[t._v("请完善课堂笔记 - 这节课的完整笔记在放在下一节课中")]),t._v(" "),_("h3",{attrs:{id:"_1-影响性能"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-影响性能"}},[t._v("#")]),t._v(" -1.影响性能")]),t._v(" "),_("ol",[_("li",[t._v("需求变更( 设计的时候可以多考虑 提高 程序 扩展性)")]),t._v(" "),_("li",[t._v("业务架构-程序代码-!-SQL 分层 服务化 微服务服务")]),t._v(" "),_("li",[t._v("SQL语句写")]),t._v(" "),_("li",[t._v("数据库设计问题"),_("br"),t._v("\n4.1. 数据表关系结构 (三大范式)"),_("br"),t._v("\n4.2. 数据表本身结构 (三大范式)"),_("br"),t._v("\n4.3. 数据表字段选择 (事先能够对于业务有预计的一些点)")])]),t._v(" "),_("h3",{attrs:{id:"_0-数据库关系数据库"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_0-数据库关系数据库"}},[t._v("#")]),t._v(" 0. 数据库关系数据库")]),t._v(" "),_("p",[t._v("关系数据结构 => 契合与事物实体 => 表实体抽象描述")]),t._v(" "),_("p",[t._v("关系操作 => CURD")]),t._v(" "),_("p",[t._v("完整的约束")]),t._v(" "),_("h3",{attrs:{id:"_1-三大范式-六大范式-1-5nf-bcnf"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-三大范式-六大范式-1-5nf-bcnf"}},[t._v("#")]),t._v(" 1. 三大范式 => 六大范式(1~5NF,BCNF)")]),t._v(" "),_("p",[t._v("误区:不是范式越高越就越好  好 => 结构清晰")]),t._v(" "),_("p",[t._v("早期:希望数据可以足够的小 数据量不是问题 主要分问题")]),t._v(" "),_("p",[t._v("现在:希望查询速度越快越好,同时操作越简单越好")]),t._v(" "),_("p",[t._v("1NF 属性能够必须是原子项 最小单位")]),t._v(" "),_("p",[t._v("一句话: 斤斤计较 足够的细致")]),t._v(" "),_("p",[t._v("2NF 你和我没有关系")]),t._v(" "),_("p",[t._v("比如:")]),t._v(" "),_("p",[t._v("3NF")]),t._v(" "),_("p",[t._v("上次面试有一道题是购买网络课程设计订单表 把订单所对应的的课程单独放到另一个表建立两张表好还是生成一个订单号多条记录放在一张订单表中好")]),t._v(" "),_("h3",{attrs:{id:"_2-案例-数据表的字段选择"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-案例-数据表的字段选择"}},[t._v("#")]),t._v(" 2. 案例 => 数据表的字段选择")]),t._v(" "),_("p",[t._v("面试 设计一个 登入系统")]),t._v(" "),_("p",[t._v("登入系统 => 发表对应文章表 博客 CSDN")]),t._v(" "),_("p",[t._v("功能")]),t._v(" "),_("ol",[_("li",[t._v("用户可以注册登入")]),t._v(" "),_("li",[t._v("可以发表")]),t._v(" "),_("li",[t._v("有不同的类型用户")]),t._v(" "),_("li",[t._v("根据文章查询某一个用户发表的其他文章")]),t._v(" "),_("li",[t._v("有可能有不同类型的文章")])]),t._v(" "),_("p",[t._v("表:")]),t._v(" "),_("p",[t._v("用户表,用户分组,文章,文章分组")]),t._v(" "),_("p",[t._v("系统中:一个户登入之后 自己去浏览自己的个人信息 次数不多吧")]),t._v(" "),_("p",[t._v("用户登入系统之后 -> 阅读文章")]),t._v(" "),_("p",[t._v("因为这个博主文章好,会点击博主的头像 会有哪些文章")]),t._v(" "),_("p",[t._v("根据用户的id 查询用户发表文章 然后 在进行排序")]),t._v(" "),_("p",[t._v("user,article")]),t._v(" "),_("div",{staticClass:"language-sql extra-class"},[_("pre",{pre:!0,attrs:{class:"language-sql"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v("\n  u"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("u"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("a"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("a"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("subject\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v("\n  "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("user")]),t._v(" u\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("left")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("join")]),t._v("\n  article a "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" a"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("user_id "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" u"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v("\n  u"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ? "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("代表参数"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("order")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v("\n  gmt_create\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("desc")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("limit")]),t._v("\n  "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\n\n子查询\n")])])]),_("p",[t._v("2000w => 12s"),_("br"),t._v("\nselect count(*) from admin_user;")]),t._v(" "),_("p",[t._v("实际上我们上面的查询 用户 只需要提供 用户的名称")]),t._v(" "),_("p",[t._v("违反三大范式 添加多余的一个字段")]),t._v(" "),_("div",{staticClass:"language-sql extra-class"},[_("pre",{pre:!0,attrs:{class:"language-sql"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v("\n  id"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("author"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("id"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("subject\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v("\n  article\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v("\n  user_id "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ? "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("代表参数"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),_("p",[t._v("用户改名了，文章的作者不变啊 => 带来大量修改的问题")]),t._v(" "),_("p",[t._v("分析 show status mysql数据库状态 分析 查询比例"),_("br"),t._v("\n7:10")]),t._v(" "),_("p",[t._v("select 获取内容 from user where 定位;")]),t._v(" "),_("p",[t._v("text 单独查询")]),t._v(" "),_("p",[t._v("有一些表:有一些字段可能实际项目运行中不会过多地关照这个字段")]),t._v(" "),_("p",[t._v("可以分离 出 查询次数较少的字段单独的建立数据表")]),t._v(" "),_("p",[t._v("建议")]),t._v(" "),_("ol",[_("li",[t._v("尽量不要有太多的字段")]),t._v(" "),_("li",[t._v("简单就好")]),t._v(" "),_("li",[t._v("不要有太多的关联")]),t._v(" "),_("li",[t._v("尽量不要有可以 NULL ()")])]),t._v(" "),_("p",[t._v("总结:")]),t._v(" "),_("ol",[_("li",[t._v("根据范式去设计数据库")]),t._v(" "),_("li",[t._v("根据项目功能用户操作的比例调节字段(分割)")]),t._v(" "),_("li",[t._v("根据查询业务,选择对应冗余 ( show status )")]),t._v(" "),_("li",[t._v("分离出字段较大字段")])]),t._v(" "),_("p",[_("img",{attrs:{src:a(880),alt:""}})]),t._v(" "),_("h3",{attrs:{id:"作业-可不可以多次查询优化查询效率"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#作业-可不可以多次查询优化查询效率"}},[t._v("#")]),t._v(" ? 作业 可不可以多次查询优化查询效率")]),t._v(" "),_("p",[t._v("可以执行两个查询，一个查用户表，一个查文章表"),_("br"),t._v("\n做一个数据处理")])])}),[],!1,null,null,null);s.default=v.exports},880:function(t,s,a){t.exports=a.p+"assets/img/1.183a388d.png"}}]);