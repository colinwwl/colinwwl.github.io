(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1316:function(A,t,s){"use strict";s.r(t);var v=s(19),a=Object(v.a)({},(function(){var A=this,t=A.$createElement,v=A._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":A.$parent.slotKey}},[v("h1",{attrs:{id:"数据库结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据库结构"}},[A._v("#")]),A._v(" 数据库结构")]),A._v(" "),v("h3",{attrs:{id:"课程回顾"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#课程回顾"}},[A._v("#")]),A._v(" 课程回顾")]),A._v(" "),v("ol",[v("li",[A._v("事务不自动回滚与级联回滚")]),A._v(" "),v("li",[A._v("innodb锁机制的行表锁转化注意")]),A._v(" "),v("li",[A._v("MySQL对于死锁释放的规则")]),A._v(" "),v("li",[A._v("事务与锁的使用建议")]),A._v(" "),v("li",[A._v("MySQL的基础结构")])]),A._v(" "),v("h3",{attrs:{id:"_1-mysql基础结构-重点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-mysql基础结构-重点"}},[A._v("#")]),A._v(" 1. MySQL基础结构 重点")]),A._v(" "),v("p",[A._v("简单版的结构"),v("br"),A._v(" "),v("img",{attrs:{src:s(848),alt:""}})]),A._v(" "),v("pre",[A._v("\nMySQL = 客户端 + 服务端\n    客户端 = Connection(语言连接器例如：PHP-pdo，MySQLi)\n    服务端 = SQL层 + 存储引擎层\n        SQL层 = 链接/线程处理 + 查询缓存 + 分析器 + 优化器\n        存储引擎 = InnoDB + MariaDB + .....\n\nConnection：这一块其实主要是其他语言的连接，并不属于MySQL本身；主要是其他语言对于MySQL的连接操作的工具比如PHP中的：pdo，mysqli或者Navicat for MySQL\n\nSQL层：功能主要包括权限判断，SQL解析功能和查询缓存处理等。\n\n  1. 链接/线程处理：客户端通过 连接/线程层 来连接MySQL数据库，连接/线程层主要用来处理客户端的请求、身份验证和数据库安全性验证等。\n\n  2. 查询缓存和查询分析器是SQL层的核心部分，其中主要涉及查询的解析、优化、缓存、以及所有内置的函数，存储过程，触发器，视图等功能。\n\n  3. 优化器主要负责存储和获取所有存储在MySQL中的数据。\n")]),A._v(" "),v("h3",{attrs:{id:"_2-mysql物理文件类型-笔试题会问你知道的mysql日志文件类型分别是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-mysql物理文件类型-笔试题会问你知道的mysql日志文件类型分别是什么"}},[A._v("#")]),A._v(" 2. MySQL物理文件类型（笔试题会问你知道的MySQL日志文件类型分别是什么）")]),A._v(" "),v("h4",{attrs:{id:"_2-0-mysql物理文件类型-笔试题会问你知道的mysql日志文件类型分别是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-mysql物理文件类型-笔试题会问你知道的mysql日志文件类型分别是什么"}},[A._v("#")]),A._v(" 2.0 MySQL物理文件类型（笔试题会问你知道的MySQL日志文件类型分别是什么）")]),A._v(" "),v("p",[A._v("日志文件主要包括：")]),A._v(" "),v("ol",[v("li",[A._v("错误日志(Error Log)、")]),A._v(" "),v("li",[A._v("二进制日志(Binary Log)、")]),A._v(" "),v("li",[A._v("事务日志(InnoDB redo Log & undo Log)、")]),A._v(" "),v("li",[A._v("慢查询日志(Slow Query Log)、、")]),A._v(" "),v("li",[A._v("查询日志(Query Log)、")])]),A._v(" "),v("p",[A._v("数据库文件：")]),A._v(" "),v("ol",[v("li",[A._v("'.frm'文件")]),A._v(" "),v("li",[A._v("'.MYD'文件")]),A._v(" "),v("li",[A._v("'.MYI'文件")]),A._v(" "),v("li",[A._v("'.ibd'文件和'.ibdata'文件")])]),A._v(" "),v("p",[A._v("其他配置文件")]),A._v(" "),v("ol",[v("li",[A._v("系统配置文件（my.ini或者my.cnf）")]),A._v(" "),v("li",[A._v("pid,err文件")]),A._v(" "),v("li",[A._v("socket文件")])]),A._v(" "),v("h5",{attrs:{id:"_2-1-日志文件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-日志文件"}},[A._v("#")]),A._v(" 2.1 日志文件")]),A._v(" "),v("h6",{attrs:{id:"_2-1-错误日志"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-错误日志"}},[A._v("#")]),A._v(" 2.1. 错误日志")]),A._v(" "),v("p",[A._v("在mysql数据库中，错误日志功能是默认开启的。默认情况下，错误日志存储在mysql数据库的数据目录中。错误日志文件通常的名称为hostname.err。其中，hostname表示服务器主机名。")]),A._v(" "),v("p",[A._v("错误日志信息可以自己进行配置的，错误日志所记录的信息是可以通过 "),v("strong",[A._v("log_error")]),A._v(" 和 "),v("strong",[A._v("log_warnings")]),A._v(" 来定义的，其中log-error是定义是否启用错误日志的功能和错误日志的存储位置，log-warnings是定义是否将警告信息也定义至错误日志中。")]),A._v(" "),v("p",[A._v("默认情况下错误日志大概记录以下几个方面的信息：")]),A._v(" "),v("ol",[v("li",[A._v("服务器启动和关闭过程中的信息（未必是错误信息，如mysql如何启动InnoDB的表空间文件的、如何初始化自己的存储引擎的等等）、")]),A._v(" "),v("li",[A._v("服务器运行过程中的错误信息、事件调度器运行一个事件时产生的信息、在从服务器上启动服务器进程时产生的-信息")])]),A._v(" "),v("div",{staticClass:"language-bash extra-class"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[A._v("show global variables like "),v("span",{pre:!0,attrs:{class:"token string"}},[A._v("'%log_error%'")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n")])])]),v("p",[v("img",{attrs:{src:s(849),alt:""}})]),A._v(" "),v("p",[A._v("我们可以根据错误日志查找操作过程的异常情况")]),A._v(" "),v("h6",{attrs:{id:"_2-二进制日志"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-二进制日志"}},[A._v("#")]),A._v(" 2. 二进制日志")]),A._v(" "),v("p",[A._v("二进制日志，也就是我们常说的binlog。二进制日志记录了MySQL所有修改数据库的操作，然后以二进制的形式记录日志在日志文件中，其中还包括没调语句所执行的时间和消耗的资源，以及相关的事务信息。")]),A._v(" "),v("p",[A._v("默认情况下二进制日志功能是没有开启的，启动可以配置log-bin[=file_name]开启，")]),A._v(" "),v("p",[v("img",{attrs:{src:s(850),alt:""}})]),A._v(" "),v("p",[A._v("作用：")]),A._v(" "),v("ol",[v("li",[A._v("以二进制形式记录更改数据库的SQL语句（insert，update，delete，create，drop，alter等）。")]),A._v(" "),v("li",[A._v("用于MySQL主从复制。")]),A._v(" "),v("li",[A._v("增量数据备份及恢复")])]),A._v(" "),v("p",[A._v("添加配置在my.cnf或者my.ini")]),A._v(" "),v("p",[A._v("因为bug必须添加server-id数值随意指定")]),A._v(" "),v("div",{staticClass:"language-yml extra-class"},[v("pre",{pre:!0,attrs:{class:"language-yml"}},[v("code",[A._v("server"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("-")]),A._v("id=1\nlog_bin=mysql"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("-")]),A._v("bin\n")])])]),v("p",[A._v("启用该选项数据库性能降低1%，但保障数据库完整性，对于重要数据库值得以性能换完整。有些类似于oracle开启归档模式。")]),A._v(" "),v("p",[v("img",{attrs:{src:s(851),alt:""}})]),A._v(" "),v("p",[A._v("命令")]),A._v(" "),v("div",{staticClass:"language-shell extra-class"},[v("pre",{pre:!0,attrs:{class:"language-shell"}},[v("code",[A._v("-- 查看所有二进制文件信息\nshow binary logs"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n-- 查看最新二进制文件\nshow master status"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n-- 刷新日志\nflush logs"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n\n-- 查看二进制日志信息\n语法格式：SHOW BINLOG EVENTS"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),A._v("IN "),v("span",{pre:!0,attrs:{class:"token string"}},[A._v("'log_name'")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),A._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),A._v("FROM pos"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),A._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),A._v("LIMIT "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),A._v("offset,"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),A._v(" row_count"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),A._v("\n\n-- show binlog events用于在二进制日志中显示事件。如果未指定"),v("span",{pre:!0,attrs:{class:"token string"}},[A._v("'log_name'")]),A._v("，则显示第一个二进制日志。\n"),v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[A._v("help")]),A._v(" show binlog events"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("  --获取帮助信息\nshow binlog events"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("\\")]),A._v("G"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\nshow  binlog events "),v("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("in")]),A._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[A._v("'mysql-bin.000014'")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("\\")]),A._v("G"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n")])])]),v("p",[A._v("命令行查看："),v("code",[A._v("mysqlbinlog D:\\phpstudy\\PHPTutorial\\MySQL\\data\\mysql-bin.000002")])]),A._v(" "),v("p",[v("img",{attrs:{src:s(852),alt:""}})]),A._v(" "),v("p",[A._v("官网二进制文件恢复数据 https://dev.mysql.com/doc/refman/5.7/en/point-in-time-recovery.html")]),A._v(" "),v("h6",{attrs:{id:"_3-事务日志-innodb"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-事务日志-innodb"}},[A._v("#")]),A._v(" 3. 事务日志(InnoDB)")]),A._v(" "),v("p",[A._v("查看存储引擎："),v("code",[A._v("show engines")]),A._v(";")]),A._v(" "),v("p",[A._v("InnoDB引擎在线Redo日志记录了InnoDB所做的所有物理变更和事务信息。通过Redo日志和Undo信息，InnoDB大大地加强了事务的安全性。InnDB在线Redo日志默认存放在data命令下，可通过设置innodb_log_griyo_home_dir选项来更改日志文件存放位置，通过innodb_log_files_in_group选项来说何止日志的数量")]),A._v(" "),v("p",[A._v("使用事务日志，存储引擎在修改表的数据时只需要修改其内存拷贝，再把修改行为记录到持久在硬盘上的事务日志中，而不用每次都将修改的数据本身持久到磁盘。事务日志采用追加的方式，因此写日志的操作是磁盘上一小块区域内的顺序I/O，而不像随机I/O需要在磁盘的多个地方移动磁头，所以采用事务日志的方式相对来说要快得多。事务日志持久以后，内存中被修改的数据在后台可以慢慢的刷回到磁盘。目前大多数的存储引擎都是这样实现的。")]),A._v(" "),v("h6",{attrs:{id:"_4-慢查询日志"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-慢查询日志"}},[A._v("#")]),A._v(" 4. 慢查询日志")]),A._v(" "),v("p",[A._v("顾名思义，慢查询日志中记录的是执行时间较长的query，也就是我们常说的slowquery。")]),A._v(" "),v("p",[A._v("专业一点：慢查询日志是值所有SQL执行的实际超过long_query_time变量的语句和达到min_examined_row_limit条举例的语句。用户可以针对这部分语句性能调优。慢查询日志通过设置log-slow_queries[=file_name]选项开启后，将记录日志所在的路劲和名称。MySQL系统默认的慢查询日志的文件名是show.log，默认目录是data目录。")]),A._v(" "),v("p",[A._v("命令：")]),A._v(" "),v("div",{staticClass:"language-shell extra-class"},[v("pre",{pre:!0,attrs:{class:"language-shell"}},[v("code",[A._v("-- 查看慢查询是否开启\nshow variables like "),v("span",{pre:!0,attrs:{class:"token string"}},[A._v('"log_slow_queries"')]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n-- 查看慢查询日志的定义：\nshow global variables like  "),v("span",{pre:!0,attrs:{class:"token string"}},[A._v("'%slow_query_log%'")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n-- 查看long_query_time设置时间\nshow global variables like "),v("span",{pre:!0,attrs:{class:"token string"}},[A._v("'%long%'")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n-- 查看具体信息\n-- slow_query_log： off关闭状态  on开启状态\n-- slow_query_log_file  慢查询日志存放地点\nshow variables like "),v("span",{pre:!0,attrs:{class:"token string"}},[A._v('"%slow%"')]),A._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n\n")])])]),v("p",[A._v("此处：为测试不做深度分析SQL操作；")]),A._v(" "),v("p",[A._v("开启慢查询：")]),A._v(" "),v("div",{staticClass:"language-yml extra-class"},[v("pre",{pre:!0,attrs:{class:"language-yml"}},[v("code",[A._v("slow_query_log\nslow_query_log_file="),v("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),A._v("file_name"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),A._v(" 文件地址\nlong_query_time=2 "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("-")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("-")]),A._v(" 最大等待时间\n")])])]),v("p",[v("img",{attrs:{src:s(853),alt:""}})]),A._v(" "),v("p",[A._v("重启-测试")]),A._v(" "),v("p",[v("img",{attrs:{src:s(854),alt:""}})]),A._v(" "),v("p",[A._v("查询结果")]),A._v(" "),v("p",[v("img",{attrs:{src:s(855),alt:""}})]),A._v(" "),v("p",[A._v("Query_time: 0.000304表示用了0.000304秒"),v("br"),v("br"),A._v("\nLock_time: 0.000128表示锁了0.000128秒"),v("br"),v("br"),A._v("\nRows_sent: 4表示返回4行"),v("br"),v("br"),A._v("\nRows_examined: 4表示一共查了4行"),v("br"),v("br"),A._v("\nSET timestamp=UNIXTIME; 这是查询实际发生的时间和将其变成一个有用的时间，将 Unix 时间转成一个可读的时间，可以使用 date –d@日志中的时间戳：")]),A._v(" "),v("h5",{attrs:{id:"_2-2-数据文件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-数据文件"}},[A._v("#")]),A._v(" 2.2 数据文件")]),A._v(" "),v("p",[A._v("MySQL数据库会在data目录下面简历一个以数据库为名的文件夹，用来存储数据库中的表文件数据。不同的数据库引擎，每个表的扩展名也不一样，例如：MyISAM用“.MYD”作为扩展名，Innodb用“.ibd”，Archive 用“.arc”，CSV 用“.csv")]),A._v(" "),v("h6",{attrs:{id:"_2-2-1-frm-文件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-frm-文件"}},[A._v("#")]),A._v(' 2.2.1 ".frm"文件')]),A._v(" "),v("p",[A._v("无论是那种存储引擎，创建表之后就一定会生成一个以表明命名的'.frm'文件。frm文件主要存放与表相关的数据信息，主要包括表结构的定义信息。当数据库崩溃时，用户可以通过frm文件来恢复数据表结构。")]),A._v(" "),v("h6",{attrs:{id:"_2-2-2-myd"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-myd"}},[A._v("#")]),A._v(' 2.2.2 ".MYD"')]),A._v(" "),v("p",[A._v("“.MYD”文件是MyISAM存储引擎专用，存放MyISAM表的数据。每一个MyISAM表都会有一个“.MYD”文件与之对应，同样存放于所属数据库的文件夹下，和“.frm”文件在一起。")]),A._v(" "),v("h6",{attrs:{id:"_2-2-3-myi"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-3-myi"}},[A._v("#")]),A._v(' 2.2.3 ".MYI"')]),A._v(" "),v("p",[A._v("“.MYI”文件也是专属于MyISAM存储引擎的，主要存放MyISAM表的索引相关信息。对于MyISAM存储来说，可以被cache 的内容主要就是来源于“.MYI”文件中。每一个MyISAM表对应一个“.MYI”文件，存放于位置和“.frm”以及“.MYD”一样。")]),A._v(" "),v("h6",{attrs:{id:"_2-2-4-ibd-文件和ibdata文件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-4-ibd-文件和ibdata文件"}},[A._v("#")]),A._v(" 2.2.4 “.ibd”文件和ibdata文件")]),A._v(" "),v("p",[A._v("这两种文件都是存放Innodb数据的文件，之所以有两种文件来存放Innodb的数据（包括索引），是因为Innodb的数据存储方式能够通过配置来决定是使用共享表空间存放存储数据，还是独享表空间存放存储数据。独享表空间存储方式使用“.ibd”文件来存放数据，且每个表一个“.ibd”文件，文件存放在和MyISAM数据相同的位置。如果选用共享存储表空间来存放数据，则会使用ibdata文件来存放，所有表共同使用一个（或者多个，可自行配置）ibdata文件。")]),A._v(" "),v("p",[A._v("ibdata文件可以通过innodb_data_home_dir（数据存放目录）和innodb_data_file_path(配置每个文件的名称)两个参数配置组成")]),A._v(" "),v("p",[A._v("innodb_data_file_path中可以一次配置多个ibdata文件"),v("code",[A._v("#innodb_data_file_path = ibdata1:2000M;ibdata2:10M:autoextend")]),A._v(" 配置方式")]),A._v(" "),v("p",[A._v("共享表空间以及独占表空间都是针对数据的存储方式而言的。")]),A._v(" "),v("p",[A._v("共享表空间:  某一个数据库的所有的表数据，索引文件全部放在一个文件中。")]),A._v(" "),v("p",[A._v("独占表空间:  每一个表都将会生成以独立的文件方式来进行存储，每一个表都有一个.frm表描述文件，还有一个.ibd文件。其中这个文件包括了单独一个表的数据内容以及索引内容。")]),A._v(" "),v("p",[v("strong",[A._v("两者对比")])]),A._v(" "),v("p",[A._v("（1.）共享表空间：")]),A._v(" "),v("p",[A._v("优点："),v("br"),v("br"),A._v("\n可以放表空间分成多个文件存放到各个磁盘上。数据和文件放在一起方便管理。")]),A._v(" "),v("p",[A._v("缺点："),v("br"),v("br"),A._v("\n所有的数据和索引存放到一个文件中，多个表及索引在表空间中混合存储，这样对于一个表做了大量删除操作后表空间中将会有大量的空隙，特别是对于统计分析，日值系统这类应用最不适合用共享表空间。")]),A._v(" "),v("p",[A._v("（2.）独立表空间："),v("br"),v("br"),A._v("\n优点:")]),A._v(" "),v("ol",[v("li",[A._v("每个表都有自已独立的表空间。")]),A._v(" "),v("li",[A._v("每个表的数据和索引都会存在自已的表空间中。")]),A._v(" "),v("li",[A._v("可以实现单表在不同的数据库中移动。")]),A._v(" "),v("li",[A._v("空间可以回收"),v("br"),v("br"),A._v("\na)  Drop table操作自动回收表空间，如果对于统计分析或是日值表，删除大量数据后可以通过:altertable TableName engine=innodb;回缩不用的空间。"),v("br"),v("br"),A._v("\n  b)  对于使用独立表空间的表，不管怎么删除，表空间的碎片不会太严重的影响性能，而且还有机会处理。")])]),A._v(" "),v("p",[A._v("缺点：单表增加过大，如超过100个G。")]),A._v(" "),v("p",[A._v("相比较之下，使用独占表空间的效率以及性能会更高一点")]),A._v(" "),v("p",[v("strong",[A._v("共享表空间和独立表空间之间的转换")])]),A._v(" "),v("p",[A._v('show variables like "innodb_file_per_table"; ON代表独立表空间管理，OFF代表共享表空间管理；'),v("br")]),A._v(" "),v("p",[A._v("修改数据库的表空间管理方式"),v("br")]),A._v(" "),v("p",[A._v("修改innodb_file_per_table的参数值即可，但是修改不能影响之前已经使用过的共享表空间和独立表空间；"),v("br")]),A._v(" "),v("p",[A._v("innodb_file_per_table=1 为使用独占表空间"),v("br"),v("br"),A._v("\ninnodb_file_per_table=0 为使用共享表空间"),v("br")]),A._v(" "),v("h5",{attrs:{id:"_2-3-其他文件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-其他文件"}},[A._v("#")]),A._v(" 2.3 其他文件")]),A._v(" "),v("p",[v("em",[A._v("系统核心配置文件")])]),A._v(" "),v("p",[A._v("linux/mac : etc/my.cnf;windows : mysql/my.ini")]),A._v(" "),v("p",[v("img",{attrs:{src:s(856),alt:""}})]),A._v(" "),v("p",[A._v('MySQL 的系统配置文件一般都是my.cnf，默认存放在"/etc"目录下，my.cnf文件中包含多种参数选项组（group），每一种参数组都通过中括号给定了固定的组名，如“[mysqld]”组中包括了mysqld服务启动时候的初始化参数，“[client]”组中包含着客户端工具程序可以读取的参数。')]),A._v(" "),v("p",[v("em",[A._v("socket  file")])]),A._v(" "),v("p",[A._v("MySQL服务器启动后socket文件自动生成，该文件主要用来连接客户端")]),A._v(" "),v("p",[A._v("在有些时候连接MySQL会出现如下的问题："),v("br"),v("br"),A._v(" "),v("img",{attrs:{src:s(857),alt:""}})]),A._v(" "),v("p",[A._v("这个问题的解决主要是sock文件没有找到")]),A._v(" "),v("p",[v("img",{attrs:{src:s(858),alt:""}})]),A._v(" "),v("p",[A._v("通常的解决办法，可以尝试重启一下MySQL的服务器；如果不信就可以去查找mysql.sock，并在my.cnf中指定该文件的位置（移动也可以）。")])])}),[],!1,null,null,null);t.default=a.exports},848:function(A,t,s){A.exports=s.p+"assets/img/markdown-img-paste-20190413211015326.6751e313.png"},849:function(A,t){A.exports="data:image/png;base64,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"},850:function(A,t,s){A.exports=s.p+"assets/img/markdown-img-paste-20190415205547472.04d632cb.png"},851:function(A,t,s){A.exports=s.p+"assets/img/markdown-img-paste-20190415212304238.ed033ee5.png"},852:function(A,t,s){A.exports=s.p+"assets/img/markdown-img-paste-20190415213912283.9aca33fd.png"},853:function(A,t,s){A.exports=s.p+"assets/img/markdown-img-paste-20190415222737758.67eb120e.png"},854:function(A,t){A.exports="data:image/png;base64,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"},855:function(A,t,s){A.exports=s.p+"assets/img/markdown-img-paste-2019041522354522.bf4ecd91.png"},856:function(A,t,s){A.exports=s.p+"assets/img/markdown-img-paste-20190416153715150.b60b6883.png"},857:function(A,t){A.exports="data:image/png;base64,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"},858:function(A,t,s){A.exports=s.p+"assets/img/markdown-img-paste-20190416152953716.70da9ffc.png"}}]);