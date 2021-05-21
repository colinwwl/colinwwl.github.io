(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{1178:function(r,n,_){"use strict";_.r(n);var v=_(19),e=Object(v.a)({},(function(){var r=this,n=r.$createElement,_=r._self._c||n;return _("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[_("p",[r._v("一. 基本知识点"),_("br"),r._v("\n1.1 HTTP协议中几个状态码的含义:503 500 401 403 404 200 301 302。。。"),_("br"),r._v("\n200 : 请求成功，请求的数据随之返回。"),_("br"),r._v("\n301 : 永久性重定向。"),_("br"),r._v("\n302 : 暂时行重定向。"),_("br"),r._v("\n401 : 当前请求需要用户验证。"),_("br"),r._v("\n403 : 服务器拒绝执行请求，即没有权限。"),_("br"),r._v("\n404 : 请求失败，请求的数据在服务器上未发现。"),_("br"),r._v("\n500 : 服务器错误。一般服务器端程序执行错误。"),_("br"),r._v("\n503 : 服务器临时维护或过载。这个状态时临时性的。")]),r._v(" "),_("p",[r._v("1.2 Include require include_once require_once 的区别."),_("br"),r._v("\n处理失败方式不同："),_("br"),r._v("\nrequire 失败时会产生一个致命级别错误，并停止程序运行。"),_("br"),r._v("\ninclude 失败时只产生一个警告级别错误，程序继续运行。")]),r._v(" "),_("p",[r._v("include_once/require_once和include/require 处理错误方式一样，"),_("br"),r._v("\n唯一区别在于当所包含的文件代码已经存在时候，不在包含。")]),r._v(" "),_("p",[r._v("1.3 (mysql)请写出数据类型(int char varchar datetime text)的意思; 请问varchar和char有什么区别;"),_("br"),r._v("\nint : 数值类型"),_("br"),r._v("\nchar : 固定长度字符串类型"),_("br"),r._v("\nvarchar : 可变长度字符串类型"),_("br"),r._v("\ndatetime : 时期时间类型"),_("br"),r._v("\ntext : 文本类型")]),r._v(" "),_("p",[r._v("varchar和char有什么区别:"),_("br"),r._v("\na. char 长度是固定的，不管你存储的数据是多少他都会都固定的长度。"),_("br"),r._v("\n而varchar则处可变长度但他要在总长度上加1字符，这个用来存储位置。")]),r._v(" "),_("p",[r._v("b. char 固定长度，所以在处理速度上要比varchar快速很多，但是浪费存储空间，"),_("br"),r._v("\n所以对存储不大，但在速度上有要求的可以使用char类型，反之可以用varchar类型来实例。")]),r._v(" "),_("p",[r._v("1.4 error_reporting 等调试函数使用"),_("br"),r._v("\nerror_reporting() 函数能够在运行时设置php.ini中 error_reporting 指令。"),_("br"),r._v("\n所以可以再程序中随时调节显示的错误级别。"),_("br"),r._v("\n使用此函数时 display_errors必须是打开状态。"),_("br"),r._v("\n1.5 写代码来解决多进程/线程同时读写一个文件的问题。"),_("br"),r._v("\nPHP是不支持多线程的，可以使用php的flock加锁函数实现。"),_("br"),r._v('\n$fp = fopen("/tmp/lock.txt", "w+");'),_("br"),r._v("\nif (flock($fp, LOCK_EX)) { // 进行排它型锁定"),_("br"),r._v('\nfwrite($fp, "Write something here\\n");'),_("br"),r._v("\nflock($fp, LOCK_UN); // 释放锁定"),_("br"),r._v("\n} else {"),_("br"),r._v('\necho "Couldn\'t lock the file !";'),_("br"),r._v("\n}"),_("br"),r._v("\nfclose($fp);")]),r._v(" "),_("p",[r._v("1.6 写一段上传文件的代码。"),_("br"),r._v("\nupload.html")]),r._v(" "),_("p",[r._v("upload.php"),_("br"),r._v("\n$uploads_dir = '/uploads';"),_("br"),r._v('\nforeach ($_FILES["error"] as $key => $error) {'),_("br"),r._v("\nif ($error == UPLOAD_ERR_OK) {"),_("br"),r._v('\n$tmp_name = $_FILES["tmp_name"][$key];'),_("br"),r._v('\n$name = $_FILES["name"][$key];'),_("br"),r._v('\nmove_uploaded_file($tmp_name, "$uploads_dir/$name");'),_("br"),r._v("\n}"),_("br"),r._v("\n}")]),r._v(" "),_("p",[r._v("1.7 Mysql 的存储引擎,myisam和innodb的区别。"),_("br"),r._v("\na. MyISAM类型不支持事务处理等高级处理，而InnoDB类型支持."),_("br"),r._v("\nb. MyISAM类型的表强调的是性能，其执行数度比InnoDB类型更快."),_("br"),r._v("\nc. InnoDB不支持FULLTEXT类型的索引."),_("br"),r._v("\nd. InnoDB 中不保存表的具体行数，也就是说，"),_("br"),r._v("\n执行select count(*) from table时，InnoDB要扫描一遍整个表来计算有多少行，"),_("br"),r._v("\n但是MyISAM只要简单的读出保存好的行数即可."),_("br"),r._v("\ne. 对于AUTO_INCREMENT类型的字段，InnoDB中必须包含只有该字段的索引，但是在MyISAM表中，可以和其他字段一起建立联合索引。"),_("br"),r._v("\nf. DELETE FROM table时，InnoDB不会重新建立表，而是一行一行的删除。"),_("br"),r._v("\ng. LOAD TABLE FROM MASTER操作对InnoDB是不起作用的，解决方法是首先把InnoDB表改成MyISAM表，导入数据后再改成InnoDB表，"),_("br"),r._v("\n但是对于使用的额外的InnoDB特性(例如外键)的表不适用."),_("br"),r._v("\nh. MyISAM支持表锁，InnoDB支持行锁。")]),r._v(" "),_("p",[r._v("二. web 架构，安全,项目经验")]),r._v(" "),_("p",[r._v("2.1 MySQL数据库作发布系统的存储，一天五万条以上的增量，预计运维三年,怎么优化？"),_("br"),r._v("\na. 设计良好的数据库结构，允许部分数据冗余，尽量避免join查询，提高效率。"),_("br"),r._v("\nb. 选择合适的表字段数据类型和存储引擎，适当的添加索引。"),_("br"),r._v("\nc. mysql库主从读写分离。"),_("br"),r._v("\nd. 找规律分表，减少单表中的数据量提高查询速度。"),_("br"),r._v("\ne。添加缓存机制，比如memcached，apc等。"),_("br"),r._v("\nf. 不经常改动的页面，生成静态页面。"),_("br"),r._v("\ng. 书写高效率的SQL。比如 SELECT * FROM TABEL 改为 SELECT field_1, field_2, field_3 FROM TABLE.")]),r._v(" "),_("p",[r._v("2.2 对于大流量的网站,您采用什么样的方法来解决各页面访问量统计问题"),_("br"),r._v("\na. 确认服务器是否能支撑当前访问量。"),_("br"),r._v("\nb. 优化数据库访问。参考2.3"),_("br"),r._v("\nc. 禁止外部访问链接（盗链）, 比如图片盗链。"),_("br"),r._v("\nd. 控制文件下载。"),_("br"),r._v("\ne. 使用不同主机分流。"),_("br"),r._v("\nf. 使用浏览统计软件，了解访问量，有针对性的进行优化。")]),r._v(" "),_("p",[r._v("2.3 写出一个正则表达式，过虑网页上的所有JS/VBS脚本（即把标记及其内容都去掉）：（9）。"),_("br"),r._v("\n答：/<[^>]."),_("em",[r._v("?>.")]),r._v("?</>/si")]),r._v(" "),_("p",[r._v("2.4 用PHP打印出前一天的时间格式是2006-5-10 22:21:21"),_("br"),r._v("\n答：echo date('Y-m-d H:i:s', strtotime('-1 day'));")]),r._v(" "),_("p",[r._v("2.5 echo(),print(),print_r()的区别"),_("br"),r._v("\n答：echo是语言结构，无返回值;print功能和echo基本相同，不同的是print是函数，有返回值;print_r是递归打印，用于输出数组对象")]),r._v(" "),_("p",[r._v("2.6 如何实现字符串翻转？"),_("br"),r._v("\n答：.用strrev函数呗,不准用PHP内置的就自己写:")]),r._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[r._v("strrev($str)  \n{  \n    $len=strlen($str);  \n    $newstr = '';  \n    for($i=$len;$i>=0;$i--)  \n    {  \n        $newstr .= $str{$i};  \n    }  \n    return $newstr;  \n} \n")])])]),_("p",[r._v("2.7 实现中文字串截取无乱码的方法。"),_("br"),r._v("\n答：mb_substr()")]),r._v(" "),_("p",[r._v("2.8 如何用php的环境变量得到一个网页地址的内容？ip地址又要怎样得到？"),_("br"),r._v("\n答：$_SERVSR[‘REQUEST_URI’] , $_SERVER[‘REMOTE_ADDR’]")]),r._v(" "),_("p",[r._v("2.9 求两个日期的差数，例如2007-2-5 ~ 2007-3-6 的日期差数")]),r._v(" "),_("p",[r._v("答：(strtotime(‘2007-3-6’)-strtotime(‘2007-2-5’))/3600*24")]),r._v(" "),_("p",[r._v("2.10 如何通过javascript判断一个窗口是否已经被屏蔽"),_("br"),r._v("\n答：获取open()的返回值，如果是null，就是屏蔽了")])])}),[],!1,null,null,null);n.default=e.exports}}]);