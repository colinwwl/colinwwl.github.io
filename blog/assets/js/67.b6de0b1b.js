(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{1e3:function(a,t,s){a.exports=s.p+"assets/img/2021-05-15-16-55-58.8e9021ff.png"},1273:function(a,t,s){"use strict";s.r(t);var n=s(19),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"集群部署"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#集群部署"}},[a._v("#")]),a._v(" 集群部署")]),a._v(" "),n("h2",{attrs:{id:"环境准备"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#环境准备"}},[a._v("#")]),a._v(" 环境准备")]),a._v(" "),n("h3",{attrs:{id:"集群规划"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#集群规划"}},[a._v("#")]),a._v(" 集群规划")]),a._v(" "),n("p",[n("img",{attrs:{src:s(999),alt:""}})]),a._v(" "),n("h3",{attrs:{id:"jar包下载"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jar包下载"}},[a._v("#")]),a._v(" jar包下载")]),a._v(" "),n("p",[a._v("http://kafka.apache.org/downloads.html")]),a._v(" "),n("p",[n("img",{attrs:{src:s(1e3),alt:""}})]),a._v(" "),n("h2",{attrs:{id:"集群部署-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#集群部署-2"}},[a._v("#")]),a._v(" 集群部署")]),a._v(" "),n("p",[a._v("1）解压安装包")]),a._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("atguigu@hadoop102 software"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -zxvf kafka_2.11-0.11.0.0.tgz -C /opt/module/\n")])])]),n("p",[a._v("2）修改解压后的文件名称")]),a._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("atguigu@hadoop102 module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" kafka_2.11-0.11.0.0/ kafka\n")])])]),n("p",[a._v("3）在/opt/module/kafka目录下创建logs文件夹")]),a._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("atguigu@hadoop102 kafka"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" logs\n")])])]),n("p",[a._v("4）修改配置文件")]),a._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("atguigu@hadoop102 kafka"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" config/\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("atguigu@hadoop102 config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("vi")]),a._v(" server.properties\n\n输入以下内容：\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#broker的全局唯一编号，不能重复")]),a._v("\n\nbroker.id"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#删除topic功能使能")]),a._v("\n\ndelete.topic.enable"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#处理网络请求的线程数量")]),a._v("\n\nnum.network.threads"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#用来处理磁盘IO的现成数量")]),a._v("\n\nnum.io.threads"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#发送套接字的缓冲区大小")]),a._v("\n\nsocket.send.buffer.bytes"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("102400")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#接收套接字的缓冲区大小")]),a._v("\n\nsocket.receive.buffer.bytes"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("102400")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#请求套接字的缓冲区大小")]),a._v("\n\nsocket.request.max.bytes"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("104857600")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#kafka运行日志存放的路径")]),a._v("\n\nlog.dirs"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/opt/module/kafka/logs\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#topic在当前broker上的分区个数")]),a._v("\n\nnum.partitions"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#用来恢复和清理data下数据的线程数量")]),a._v("\n\nnum.recovery.threads.per.data.dir"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#segment文件保留的最长时间，超时将被删除")]),a._v("\n\nlog.retention.hours"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("168")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#配置连接Zookeeper集群地址")]),a._v("\n\nzookeeper.connect"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("hadoop102:2181,hadoop103:2181,hadoop104:2181\n")])])]),n("p",[a._v("5）配置环境变量")]),a._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("atguigu@hadoop102 module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("vi")]),a._v(" /etc/profile\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#KAFKA_HOME")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("KAFKA_HOME")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/opt/module/kafka\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[n("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")])]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),n("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),n("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$KAFKA_HOME")]),a._v("/bin\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("atguigu@hadoop102 module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" /etc/profile\n")])])]),n("p",[a._v("6）分发安装包")]),a._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("atguigu@hadoop102 module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ xsync kafka/\n")])])]),n("p",[a._v("​\t注意：分发之后记得配置其他机器的环境变量")]),a._v(" "),n("p",[a._v("7）分别在hadoop103和hadoop104上修改配置文件/opt/module/kafka/config/server.properties中的broker.id=1、broker.id=2")]),a._v(" "),n("p",[a._v("​\t注：broker.id不得重复")]),a._v(" "),n("p",[a._v("8）启动集群")]),a._v(" "),n("p",[a._v("依次在hadoop102、hadoop103、hadoop104节点上启动kafka")]),a._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("atguigu@hadoop102 kafka"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ bin/kafka-server-start.sh config/server.properties "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("atguigu@hadoop103 kafka"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ bin/kafka-server-start.sh config/server.properties "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("atguigu@hadoop104 kafka"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ bin/kafka-server-start.sh config/server.properties "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n")])])]),n("p",[a._v("9）关闭集群")]),a._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("atguigu@hadoop102 kafka"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ bin/kafka-server-stop.sh stop\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("atguigu@hadoop103 kafka"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ bin/kafka-server-stop.sh stop\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("atguigu@hadoop104 kafka"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ bin/kafka-server-stop.sh stop\n")])])]),n("h2",{attrs:{id:"kafka命令行操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#kafka命令行操作"}},[a._v("#")]),a._v(" Kafka命令行操作")]),a._v(" "),n("p",[a._v("1）查看当前服务器中的所有topic")]),a._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("atguigu@hadoop102 kafka"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ bin/kafka-topics.sh --zookeeper hadoop102:2181 --list\n")])])]),n("p",[a._v("2）创建topic")]),a._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("atguigu@hadoop102 kafka"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ bin/kafka-topics.sh --zookeeper hadoop102:2181 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--create --replication-factor "),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" --partitions "),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" --topic first\n")])])]),n("p",[a._v("选项说明：")]),a._v(" "),n("p",[a._v("--topic 定义topic名")]),a._v(" "),n("p",[a._v("--replication-factor  定义副本数")]),a._v(" "),n("p",[a._v("--partitions  定义分区数")]),a._v(" "),n("p",[a._v("3）删除topic")]),a._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("atguigu@hadoop102 kafka"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ bin/kafka-topics.sh --zookeeper hadoop102:2181 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n\n--delete --topic first\n")])])]),n("p",[a._v("需要server.properties中设置delete.topic.enable=true否则只是标记删除或者直接重启。")]),a._v(" "),n("p",[a._v("4）发送消息")]),a._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("atguigu@hadoop102 kafka"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ bin/kafka-console-producer.sh "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n\n--broker-list hadoop102:9092 --topic first\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("hello world\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("atguigu  atguigu\n")])])]),n("p",[a._v("5）消费消息")]),a._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("atguigu@hadoop103 kafka"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ bin/kafka-console-consumer.sh "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--zookeeper hadoop102:2181 --from-beginning --topic first\n--from-beginning：会把first主题中以往所有的数据都读取出来。根据业务场景选择是否增加该配置。\n")])])]),n("p",[a._v("6）查看某个Topic的详情")]),a._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("atguigu@hadoop102 kafka"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ bin/kafka-topics.sh --zookeeper hadoop102:2181 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--describe --topic first\n")])])])])}),[],!1,null,null,null);t.default=e.exports},999:function(a,t){a.exports="data:image/png;base64,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"}}]);