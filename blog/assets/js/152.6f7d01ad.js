(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{1223:function(n,e,t){"use strict";t.r(e);var s=t(19),a=Object(s.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"映射参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#映射参数"}},[n._v("#")]),n._v(" 映射参数")]),n._v(" "),t("h3",{attrs:{id:"_1-1-analyzer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-analyzer"}},[n._v("#")]),n._v(" 1.1 analyzer")]),n._v(" "),t("p",[n._v("定义文本字段的分词器。默认对索引和查询都是有效的。")]),n._v(" "),t("p",[n._v("假设不用分词器，我们先来看一下索引的结果，创建一个索引并添加一个文档：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('\nPUT blog/_doc/1\n{\n  "title":"定义文本字段的分词器。默认对索引和查询都是有效的。"\n}\n')])])]),t("p",[n._v("查看词条向量（term vectors）")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('\nGET blog/_termvectors/1\n{\n  "fields": ["title"]\n}\n')])])]),t("p",[n._v("查看结果如下：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('\n{\n  "_index" : "blog",\n  "_type" : "_doc",\n  "_id" : "1",\n  "_version" : 1,\n  "found" : true,\n  "took" : 0,\n  "term_vectors" : {\n    "title" : {\n      "field_statistics" : {\n        "sum_doc_freq" : 22,\n        "doc_count" : 1,\n        "sum_ttf" : 23\n      },\n      "terms" : {\n        "义" : {\n          "term_freq" : 1,\n          "tokens" : [\n            {\n              "position" : 1,\n              "start_offset" : 1,\n              "end_offset" : 2\n            }\n          ]\n        },\n        "分" : {\n          "term_freq" : 1,\n          "tokens" : [\n            {\n              "position" : 7,\n              "start_offset" : 7,\n              "end_offset" : 8\n            }\n          ]\n        },\n        "和" : {\n          "term_freq" : 1,\n          "tokens" : [\n            {\n              "position" : 15,\n              "start_offset" : 16,\n              "end_offset" : 17\n            }\n          ]\n        },\n        "器" : {\n          "term_freq" : 1,\n          "tokens" : [\n            {\n              "position" : 9,\n              "start_offset" : 9,\n              "end_offset" : 10\n            }\n          ]\n        },\n        "字" : {\n          "term_freq" : 1,\n          "tokens" : [\n            {\n              "position" : 4,\n              "start_offset" : 4,\n              "end_offset" : 5\n            }\n          ]\n        },\n        "定" : {\n          "term_freq" : 1,\n          "tokens" : [\n            {\n              "position" : 0,\n              "start_offset" : 0,\n              "end_offset" : 1\n            }\n          ]\n        },\n        "对" : {\n          "term_freq" : 1,\n          "tokens" : [\n            {\n              "position" : 12,\n              "start_offset" : 13,\n              "end_offset" : 14\n            }\n          ]\n        },\n        "引" : {\n          "term_freq" : 1,\n          "tokens" : [\n            {\n              "position" : 14,\n              "start_offset" : 15,\n              "end_offset" : 16\n            }\n          ]\n        },\n        "效" : {\n          "term_freq" : 1,\n          "tokens" : [\n            {\n              "position" : 21,\n              "start_offset" : 22,\n              "end_offset" : 23\n            }\n          ]\n        },\n        "文" : {\n          "term_freq" : 1,\n          "tokens" : [\n            {\n              "position" : 2,\n              "start_offset" : 2,\n              "end_offset" : 3\n            }\n          ]\n        },\n        "是" : {\n          "term_freq" : 1,\n          "tokens" : [\n            {\n              "position" : 19,\n              "start_offset" : 20,\n              "end_offset" : 21\n            }\n          ]\n        },\n        "有" : {\n          "term_freq" : 1,\n          "tokens" : [\n            {\n              "position" : 20,\n              "start_offset" : 21,\n              "end_offset" : 22\n            }\n          ]\n        },\n        "本" : {\n          "term_freq" : 1,\n          "tokens" : [\n            {\n              "position" : 3,\n              "start_offset" : 3,\n              "end_offset" : 4\n            }\n          ]\n        },\n        "查" : {\n          "term_freq" : 1,\n          "tokens" : [\n            {\n              "position" : 16,\n              "start_offset" : 17,\n              "end_offset" : 18\n            }\n          ]\n        },\n        "段" : {\n          "term_freq" : 1,\n          "tokens" : [\n            {\n              "position" : 5,\n              "start_offset" : 5,\n              "end_offset" : 6\n            }\n          ]\n        },\n        "的" : {\n          "term_freq" : 2,\n          "tokens" : [\n            {\n              "position" : 6,\n              "start_offset" : 6,\n              "end_offset" : 7\n            },\n            {\n              "position" : 22,\n              "start_offset" : 23,\n              "end_offset" : 24\n            }\n          ]\n        },\n        "索" : {\n          "term_freq" : 1,\n          "tokens" : [\n            {\n              "position" : 13,\n              "start_offset" : 14,\n              "end_offset" : 15\n            }\n          ]\n        },\n        "认" : {\n          "term_freq" : 1,\n          "tokens" : [\n            {\n              "position" : 11,\n              "start_offset" : 12,\n              "end_offset" : 13\n            }\n          ]\n        },\n        "词" : {\n          "term_freq" : 1,\n          "tokens" : [\n            {\n              "position" : 8,\n              "start_offset" : 8,\n              "end_offset" : 9\n            }\n          ]\n        },\n        "询" : {\n          "term_freq" : 1,\n          "tokens" : [\n            {\n              "position" : 17,\n              "start_offset" : 18,\n              "end_offset" : 19\n            }\n          ]\n        },\n        "都" : {\n          "term_freq" : 1,\n          "tokens" : [\n            {\n              "position" : 18,\n              "start_offset" : 19,\n              "end_offset" : 20\n            }\n          ]\n        },\n        "默" : {\n          "term_freq" : 1,\n          "tokens" : [\n            {\n              "position" : 10,\n              "start_offset" : 11,\n              "end_offset" : 12\n            }\n          ]\n        }\n      }\n    }\n  }\n}\n')])])]),t("p",[n._v("可以看到，默认情况下，中文就是一个字一个字的分，这种分词方式没有任何意义。如果这样分词，查询就只能按照一个字一个字来查，像下面这样：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('\nGET blog/_search\n{\n  "query": {\n    "term": {\n      "title": "定"\n    }\n  }\n}\n')])])]),t("p",[n._v("无意义！！！")]),n._v(" "),t("p",[n._v("所以，我们要根据实际情况，配置合适的分词器。")]),n._v(" "),t("p",[n._v("给字段设定分词器：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('\nPUT blog {\n  "mappings": {\n    "properties": {\n      "title":{\n        "type":"text",\n        "analyzer": "ik_smart"\n      }\n    }\n  }\n}\n')])])]),t("p",[n._v("存储文档：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('\nPUT blog/_doc/1\n{\n  "title":"定义文本字段的分词器。默认对索引和查询都是有效的。"\n}\n')])])]),t("p",[n._v("查看词条向量：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('\nGET blog/_termvectors/1\n{\n  "fields": ["title"]\n}\n')])])]),t("p",[n._v("查询结果如下：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('\n{\n  "_index" : "blog",\n  "_type" : "_doc",\n  "_id" : "1",\n  "_version" : 1,\n  "found" : true,\n  "took" : 1,\n  "term_vectors" : {\n    "title" : {\n      "field_statistics" : {\n        "sum_doc_freq" : 12,\n        "doc_count" : 1,\n        "sum_ttf" : 13\n      },\n      "terms" : {\n        "分词器" : {\n          "term_freq" : 1,\n          "tokens" : [\n            {\n              "position" : 4,\n              "start_offset" : 7,\n              "end_offset" : 10\n            }\n          ]\n        },\n        "和" : {\n          "term_freq" : 1,\n          "tokens" : [\n            {\n              "position" : 8,\n              "start_offset" : 16,\n              "end_offset" : 17\n            }\n          ]\n        },\n        "字段" : {\n          "term_freq" : 1,\n          "tokens" : [\n            {\n              "position" : 2,\n              "start_offset" : 4,\n              "end_offset" : 6\n            }\n          ]\n        },\n        "定义" : {\n          "term_freq" : 1,\n          "tokens" : [\n            {\n              "position" : 0,\n              "start_offset" : 0,\n              "end_offset" : 2\n            }\n          ]\n        },\n        "对" : {\n          "term_freq" : 1,\n          "tokens" : [\n            {\n              "position" : 6,\n              "start_offset" : 13,\n              "end_offset" : 14\n            }\n          ]\n        },\n        "文本" : {\n          "term_freq" : 1,\n          "tokens" : [\n            {\n              "position" : 1,\n              "start_offset" : 2,\n              "end_offset" : 4\n            }\n          ]\n        },\n        "有效" : {\n          "term_freq" : 1,\n          "tokens" : [\n            {\n              "position" : 11,\n              "start_offset" : 21,\n              "end_offset" : 23\n            }\n          ]\n        },\n        "查询" : {\n          "term_freq" : 1,\n          "tokens" : [\n            {\n              "position" : 9,\n              "start_offset" : 17,\n              "end_offset" : 19\n            }\n          ]\n        },\n        "的" : {\n          "term_freq" : 2,\n          "tokens" : [\n            {\n              "position" : 3,\n              "start_offset" : 6,\n              "end_offset" : 7\n            },\n            {\n              "position" : 12,\n              "start_offset" : 23,\n              "end_offset" : 24\n            }\n          ]\n        },\n        "索引" : {\n          "term_freq" : 1,\n          "tokens" : [\n            {\n              "position" : 7,\n              "start_offset" : 14,\n              "end_offset" : 16\n            }\n          ]\n        },\n        "都是" : {\n          "term_freq" : 1,\n          "tokens" : [\n            {\n              "position" : 10,\n              "start_offset" : 19,\n              "end_offset" : 21\n            }\n          ]\n        },\n        "默认" : {\n          "term_freq" : 1,\n          "tokens" : [\n            {\n              "position" : 5,\n              "start_offset" : 11,\n              "end_offset" : 13\n            }\n          ]\n        }\n      }\n    }\n  }\n}\n')])])]),t("p",[n._v("然后就可以通过词去搜索了：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('\nGET blog/_search\n{\n  "query": {\n    "term": {\n      "title": "索引"\n    }\n  }\n}\n')])])]),t("h3",{attrs:{id:"_1-2-search-analyzer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-search-analyzer"}},[n._v("#")]),n._v(" 1.2 search_analyzer")]),n._v(" "),t("p",[n._v("查询时候的分词器。默认情况下，如果没有配置 search_analyzer，则查询时，首先查看有没有 search_analyzer，有的话，就用 search_analyzer 来进行分词，如果没有，则看有没有 analyzer，如果有，则用 analyzer 来进行分词，否则使用 es 默认的分词器。")]),n._v(" "),t("h3",{attrs:{id:"_1-3-normalizer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-normalizer"}},[n._v("#")]),n._v(" 1.3 normalizer")]),n._v(" "),t("p",[n._v("normalizer 参数用于解析前（索引或者查询）的标准化配置。")]),n._v(" "),t("p",[n._v("比如，在 es 中，对于一些我们不想切分的字符串，我们通常会将其设置为 keyword，搜索时候也是使用整个词进行搜索。如果在索引前没有做好数据清洗，导致大小写不一致，例如 javaboy 和 JAVABOY，此时，我们就可以使用 normalizer 在索引之前以及查询之前进行文档的标准化。")]),n._v(" "),t("p",[n._v("先来一个反例，创建一个名为 blog 的索引，设置 author 字段类型为 keyword：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('\nPUT blog {\n  "mappings": {\n    "properties": {\n      "author":{\n        "type": "keyword"\n      }\n    }\n  }\n}\n')])])]),t("p",[n._v("添加两个文档：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('\nPUT blog/_doc/1\n{\n  "author":"javaboy"\n}\n\nPUT blog/_doc/2\n{\n  "author":"JAVABOY"\n}\n')])])]),t("p",[n._v("然后进行搜索：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('\nGET blog/_search\n{\n  "query": {\n    "term": {\n      "author": "JAVABOY"\n    }\n  }\n}\n')])])]),t("p",[n._v("大写关键字可以搜到大写的文档，小写关键字可以搜到小写的文档。")]),n._v(" "),t("p",[n._v("如果使用了 normalizer，可以在索引和查询时，分别对文档进行预处理。")]),n._v(" "),t("p",[n._v("normalizer 定义方式如下：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('\nPUT blog {\n  "settings": {\n    "analysis": {\n      "normalizer":{\n        "my_normalizer":{\n          "type":"custom",\n          "filter":["lowercase"]\n        }\n      }\n    }\n  },\n  "mappings": {\n    "properties": {\n      "author":{\n        "type": "keyword",\n        "normalizer":"my_normalizer"\n      }\n    }\n  }\n}\n')])])]),t("p",[n._v("在 settings 中定义 normalizer，然后在 mappings 中引用。")]),n._v(" "),t("p",[n._v("测试方式和前面一致。此时查询的时候，大写关键字也可以查询到小写文档，因为无论是索引还是查询，都会将大写转为小写。")]),n._v(" "),t("h3",{attrs:{id:"_1-4-boost"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-boost"}},[n._v("#")]),n._v(" 1.4 boost")]),n._v(" "),t("p",[n._v("boost 参数可以设置字段的权重。")]),n._v(" "),t("p",[n._v("boost 有两种使用思路，一种就是在定义 mappings 的时候使用，在指定字段类型时使用；另一种就是在查询时使用。")]),n._v(" "),t("p",[n._v("实际开发中建议使用后者，前者有问题：如果不重新索引文档，权重无法修改。")]),n._v(" "),t("p",[n._v("mapping 中使用 boost（不推荐）：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('\nPUT blog {\n  "mappings": {\n    "properties": {\n      "content":{\n        "type": "text",\n        "boost": 2\n      }\n    }\n  }\n}\n')])])]),t("p",[n._v("另一种方式就是在查询的时候，指定 boost")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('\nGET blog/_search\n{\n  "query": {\n    "match": {\n      "content": {\n        "query": "你好",\n        "boost": 2\n      }\n    }\n  }\n}\n')])])]),t("h3",{attrs:{id:"_1-5-coerce"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-coerce"}},[n._v("#")]),n._v(" 1.5 coerce")]),n._v(" "),t("p",[n._v("coerce 用来清除脏数据，默认为 true。")]),n._v(" "),t("p",[n._v("例如一个数字，在 JSON 中，用户可能写错了：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('\n<code style="box-sizing: border-box; font-family: SFMono-Regular, Menlo, Monaco, Consolas, &quot;Liberation Mono&quot;, &quot;Courier New&quot;, monospace; font-size: inherit; color: inherit; overflow-wrap: normal; word-break: break-word; white-space: initial;">{"age":"99"}\n')])])]),t("p",[n._v("或者 ：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('\n<code style="box-sizing: border-box; font-family: SFMono-Regular, Menlo, Monaco, Consolas, &quot;Liberation Mono&quot;, &quot;Courier New&quot;, monospace; font-size: inherit; color: inherit; overflow-wrap: normal; word-break: break-word; white-space: initial;">{"age":"99.0"}\n')])])]),t("p",[n._v("这些都不是正确的数字格式。")]),n._v(" "),t("p",[n._v("通过 coerce 可以解决该问题。")]),n._v(" "),t("p",[n._v("默认情况下，以下操作没问题，就是 coerce 起作用：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('\nPUT blog {\n  "mappings": {\n    "properties": {\n      "age":{\n        "type": "integer"\n      }\n    }\n  }\n}\n\nPOST blog/_doc {\n  "age":"99.0"\n}\n')])])]),t("p",[n._v("如果需要修改 coerce ，方式如下：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('\nPUT blog\n{\n  "mappings": {\n    "properties": {\n      "age":{\n        "type": "integer",\n        "coerce": false\n      }\n    }\n  }\n}\n\nPOST blog/_doc\n{\n  "age":99\n}\n')])])]),t("p",[n._v("当 coerce 修改为 false 之后，数字就只能是数字了，不可以是字符串，该字段传入字符串会报错。")]),n._v(" "),t("h3",{attrs:{id:"_1-6-copy-to"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-copy-to"}},[n._v("#")]),n._v(" 1.6 copy_to")]),n._v(" "),t("p",[n._v("这个属性，可以将多个字段的值，复制到同一个字段中。")]),n._v(" "),t("p",[n._v("定义方式如下：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('\nPUT blog {\n  "mappings": {\n    "properties": {\n      "title":{\n        "type": "text",\n        "copy_to": "full_content"\n      },\n      "content":{\n        "type": "text",\n        "copy_to": "full_content"\n      },\n      "full_content":{\n        "type": "text"\n      }\n    }\n  }\n}\n\nPUT blog/_doc/1 {\n  "title":"你好江南一点雨",\n  "content":"当 coerce 修改为 false 之后，数字就只能是数字了，不可以是字符串，该字段传入字符串会报错。"\n}\n\nGET blog/_search {\n  "query": {\n    "term": {\n      "full_content": "当"\n    }\n  }\n}\n')])])]),t("h3",{attrs:{id:"_1-7-doc-values-和-fielddata"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-doc-values-和-fielddata"}},[n._v("#")]),n._v(" 1.7 doc_values 和 fielddata")]),n._v(" "),t("p",[n._v("es 中的搜索主要是用到倒排索引，doc_values 参数是为了加快排序、聚合操作而生的。当建立倒排索引的时候，会额外增加列式存储映射。")]),n._v(" "),t("p",[n._v("doc_values 默认是开启的，如果确定某个字段不需要排序或者不需要聚合，那么可以关闭 doc_values。")]),n._v(" "),t("p",[n._v("大部分的字段在索引时都会生成 doc_values，除了 text。text 字段在查询时会生成一个 fielddata 的数据结构，fieldata 在字段首次被聚合、排序的时候生成。")]),n._v(" "),t("table",[t("thead",[t("tr",[t("th",[n._v("doc_values")]),n._v(" "),t("th",[n._v("fielddata")])])]),n._v(" "),t("tbody",[t("tr",[t("td",[n._v("索引时创建")]),n._v(" "),t("td",[n._v("使用时动态创建")])]),n._v(" "),t("tr",[t("td",[n._v("磁盘")]),n._v(" "),t("td",[n._v("内存")])]),n._v(" "),t("tr",[t("td",[n._v("不占用内存")]),n._v(" "),t("td",[n._v("不占用磁盘")])]),n._v(" "),t("tr",[t("td",[n._v("索引速度稍微低一点")]),n._v(" "),t("td",[n._v("文档很多时，动态创建慢，占内存")])])])]),n._v(" "),t("p",[n._v("doc_values 默认开启，fielddata 默认关闭。")]),n._v(" "),t("p",[n._v("doc_values 演示：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('\nPUT users\n\nPUT users/_doc/1\n{\n  "age":100\n}\n\nPUT users/_doc/2\n{\n  "age":99\n}\n\nPUT users/_doc/3\n{\n  "age":98\n}\n\nPUT users/_doc/4\n{\n  "age":101\n}\n\nGET users/_search\n{\n  "query": {\n    "match_all": {}\n  },\n  "sort":[\n    {\n      "age":{\n        "order": "desc"\n      }\n    }\n    ]\n}\n')])])]),t("p",[n._v("由于 doc_values 默认时开启的，所以可以直接使用该字段排序，如果想关闭 doc_values ，如下：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('\nPUT users\n{\n  "mappings": {\n    "properties": {\n      "age":{\n        "type": "integer",\n        "doc_values": false\n      }\n    }\n  }\n}\n\nPUT users/_doc/1\n{\n  "age":100\n}\n\nPUT users/_doc/2\n{\n  "age":99\n}\n\nPUT users/_doc/3\n{\n  "age":98\n}\n\nPUT users/_doc/4\n{\n  "age":101\n}\n\nGET users/_search\n{\n  "query": {\n    "match_all": {}\n  },\n  "sort":[\n    {\n      "age":{\n        "order": "desc"\n      }\n    }\n    ]\n}\n')])])]),t("h3",{attrs:{id:"_1-8-dynamic"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-8-dynamic"}},[n._v("#")]),n._v(" 1.8 dynamic")]),n._v(" "),t("h3",{attrs:{id:"_1-9-enabled"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-9-enabled"}},[n._v("#")]),n._v(" 1.9 enabled")]),n._v(" "),t("p",[n._v("es 默认会索引所有的字段，但是有的字段可能只需要存储，不需要索引。此时可以通过 enabled 字段来控制：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('\nPUT blog\n{\n  "mappings": {\n    "properties": {\n      "title":{\n        "enabled": false\n      }\n    }\n  }\n}\n\nPUT blog/_doc/1\n{\n  "title":"javaboy"\n}\n\nGET blog/_search\n{\n  "query": {\n    "term": {\n      "title": "javaboy"\n    }\n  }\n}\n')])])]),t("p",[n._v("设置了 enabled 为 false 之后，就可以再通过该字段进行搜索了。")]),n._v(" "),t("h3",{attrs:{id:"_1-10-format"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-10-format"}},[n._v("#")]),n._v(" 1.10 format")]),n._v(" "),t("p",[n._v("日期格式。format 可以规范日期格式，而且一次可以定义多个 format。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('\nPUT users\n{\n  "mappings": {\n    "properties": {\n      "birthday":{\n        "type": "date",\n        "format": "yyyy-MM-dd||yyyy-MM-dd HH:mm:ss"\n      }\n    }\n  }\n}\n\nPUT users/_doc/1\n{\n  "birthday":"2020-11-11"\n}\n\nPUT users/_doc/2\n{\n  "birthday":"2020-11-11 11:11:11"\n}\n')])])]),t("ul",[t("li",[n._v("多个日期格式之间，使用 || 符号连接，注意没有空格。")]),n._v(" "),t("li",[n._v("如果用户没有指定日期的 format，默认的日期格式是 "),t("code",[n._v("strict_date_optional_time||epoch_mills")])])]),n._v(" "),t("p",[n._v("另外，所有的日期格式，可以在 "),t("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-date-format.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://www.elastic.co/guide/..."),t("OutboundLink")],1),n._v(" 网址查看。")]),n._v(" "),t("h3",{attrs:{id:"_1-11-ignore-above"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-11-ignore-above"}},[n._v("#")]),n._v(" 1.11 ignore_above")]),n._v(" "),t("p",[n._v("igbore_above 用于指定分词和索引的字符串最大长度，超过最大长度的话，该字段将不会被索引，这个字段只适用于 keyword 类型。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('\nPUT blog\n{\n  "mappings": {\n    "properties": {\n      "title":{\n        "type": "keyword",\n        "ignore_above": 10\n      }\n    }\n  }\n}\n\nPUT blog/_doc/1\n{\n  "title":"javaboy"\n}\n\nPUT blog/_doc/2\n{\n  "title":"javaboyjavaboyjavaboy"\n}\n\nGET blog/_search\n{\n  "query": {\n    "term": {\n      "title": "javaboyjavaboyjavaboy"\n    }\n  }\n}\n')])])]),t("h3",{attrs:{id:"_1-12-ignore-malformed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-12-ignore-malformed"}},[n._v("#")]),n._v(" 1.12 ignore_malformed")]),n._v(" "),t("p",[n._v("ignore_malformed 可以忽略不规则的数据，该参数默认为 false。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('\nPUT users\n{\n  "mappings": {\n    "properties": {\n      "birthday":{\n        "type": "date",\n        "format": "yyyy-MM-dd||yyyy-MM-dd HH:mm:ss"\n      },\n      "age":{\n        "type": "integer",\n        "ignore_malformed": true\n      }\n    }\n  }\n}\n\nPUT users/_doc/1\n{\n  "birthday":"2020-11-11",\n  "age":99\n}\n\nPUT users/_doc/2\n{\n  "birthday":"2020-11-11 11:11:11",\n  "age":"abc"\n}\n\nPUT users/_doc/2\n{\n  "birthday":"2020-11-11 11:11:11aaa",\n  "age":"abc"\n}\n')])])]),t("h3",{attrs:{id:"_1-13-include-in-all"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-13-include-in-all"}},[n._v("#")]),n._v(" 1.13 include_in_all")]),n._v(" "),t("p",[n._v("这个是针对  "),t("code",[n._v("_all")]),n._v("  字段的，但是在 es7 中，该字段已经被废弃了。")]),n._v(" "),t("h3",{attrs:{id:"_1-14-index"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-14-index"}},[n._v("#")]),n._v(" 1.14 index")]),n._v(" "),t("p",[n._v("index 属性指定一个字段是否被索引，该属性为 true 表示字段被索引，false 表示字段不被索引。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('\nPUT users {\n  "mappings": {\n    "properties": {\n      "age":{\n        "type": "integer",\n        "index": false\n      }\n    }\n  }\n}\n\nPUT users/_doc/1\n{\n  "age":99\n}\n\nGET users/_search\n{\n  "query": {\n    "term": {\n      "age": 99\n    }\n  }\n}\n')])])]),t("ul",[t("li",[n._v("如果 index 为 false，则不能通过对应的字段搜索。")])]),n._v(" "),t("h3",{attrs:{id:"_1-15-index-options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-15-index-options"}},[n._v("#")]),n._v(" 1.15 index_options")]),n._v(" "),t("p",[n._v("index_options 控制索引时哪些信息被存储到倒排索引中（用在 text 字段中），有四种取值：")]),n._v(" "),t("table",[t("thead",[t("tr",[t("th",[n._v("index_options")]),n._v(" "),t("th",[n._v("备注")])])]),n._v(" "),t("tbody",[t("tr",[t("td",[n._v("docs")]),n._v(" "),t("td",[n._v("只存储文档编号，默认即此")])]),n._v(" "),t("tr",[t("td",[n._v("freqs")]),n._v(" "),t("td",[n._v("在 docs 基础上，存储词项频率")])]),n._v(" "),t("tr",[t("td",[n._v("positions")]),n._v(" "),t("td",[n._v("在 freqs 基础上，存储词项偏移位置")])]),n._v(" "),t("tr",[t("td",[n._v("offsets")]),n._v(" "),t("td",[n._v("在 positions 基础上，存储词项开始和结束的字符位置")])])])]),n._v(" "),t("h3",{attrs:{id:"_1-16-norms"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-16-norms"}},[n._v("#")]),n._v(" 1.16 norms")]),n._v(" "),t("p",[n._v("norms 对字段评分有用，text 默认开启 norms，如果不是特别需要，不要开启 norms。")]),n._v(" "),t("h3",{attrs:{id:"_1-17-null-value"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-17-null-value"}},[n._v("#")]),n._v(" 1.17 null_value")]),n._v(" "),t("p",[n._v("在 es 中，值为 null 的字段不索引也不可以被搜索，null_value 可以让值为 null 的字段显式的可索引、可搜索：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('\nPUT users\n{\n  "mappings": {\n    "properties": {\n      "name":{\n        "type": "keyword",\n        "null_value": "javaboy_null"\n      }\n    }\n  }\n}\n\nPUT users/_doc/1\n{\n  "name":null,\n  "age":99\n}\n\nGET users/_search\n{\n  "query": {\n    "term": {\n      "name": "javaboy_null"\n    }\n  }\n}\n')])])]),t("h3",{attrs:{id:"_1-18-position-increment-gap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-18-position-increment-gap"}},[n._v("#")]),n._v(" 1.18 position_increment_gap")]),n._v(" "),t("p",[n._v("被解析的 text 字段会将 term 的位置考虑进去，目的是为了支持近似查询和短语查询，当我们去索引一个含有多个值的 text 字段时，会在各个值之间添加一个假想的空间，将值隔开，这样就可以有效避免一些无意义的短语匹配，间隙大小通过 position_increment_gap 来控制，默认是 100。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('\nPUT users\nPUT users/_doc/1\n{\n  "name":["zhang san","li si"]\n}\n\nGET users/_search\n{\n  "query": {\n    "match_phrase": {\n      "name": {\n        "query": "sanli"\n      }\n    }\n  }\n}\n')])])]),t("ul",[t("li",[t("code",[n._v("sanli")]),n._v(" 搜索不到，因为两个短语之间有一个假想的空隙，为 100。")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('\nGET users/_search\n{\n  "query": {\n    "match_phrase": {\n      "name": {\n        "query": "san li",\n        "slop": 101\n      }\n    }\n  }\n}\n')])])]),t("p",[n._v("可以通过 slop 指定空隙大小。")]),n._v(" "),t("p",[n._v("也可以在定义索引的时候，指定空隙：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('\nPUT users {\n  "mappings": {\n    "properties": {\n      "name":{\n        "type": "text",\n        "position_increment_gap": 0\n      }\n    }\n  }\n}\n\nPUT users/_doc/1\n{\n  "name":["zhang san","li si"]\n}\n\nGET users/_search\n{\n  "query": {\n    "match_phrase": {\n      "name": {\n        "query": "san li"\n      }\n    }\n  }\n}\n')])])]),t("h3",{attrs:{id:"_1-19-properties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-19-properties"}},[n._v("#")]),n._v(" 1.19 properties")]),n._v(" "),t("h3",{attrs:{id:"_1-20-similarity"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-20-similarity"}},[n._v("#")]),n._v(" 1.20 similarity")]),n._v(" "),t("p",[n._v("similarity 指定文档的评分模型，默认有三种：")]),n._v(" "),t("table",[t("thead",[t("tr",[t("th",[n._v("similarity")]),n._v(" "),t("th",[n._v("备注")])])]),n._v(" "),t("tbody",[t("tr",[t("td",[n._v("BM25")]),n._v(" "),t("td",[n._v("es 和 lucene 默认的评分模型")])]),n._v(" "),t("tr",[t("td",[n._v("classic")]),n._v(" "),t("td",[n._v("TF/IDF 评分")])]),n._v(" "),t("tr",[t("td",[n._v("boolean")]),n._v(" "),t("td",[n._v("boolean 模型评分")])])])]),n._v(" "),t("h3",{attrs:{id:"_1-21-store"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-21-store"}},[n._v("#")]),n._v(" 1.21 store")]),n._v(" "),t("p",[n._v("默认情况下，字段会被索引，也可以搜索，但是不会存储，虽然不会被存储的，但是  "),t("code",[n._v("_source")]),n._v("  中有一个字段的备份。如果想将字段存储下来，可以通过配置 store 来实现。")]),n._v(" "),t("h3",{attrs:{id:"_1-22-term-vectors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-22-term-vectors"}},[n._v("#")]),n._v(" 1.22 term_vectors")]),n._v(" "),t("p",[n._v("term_vectors 是通过分词器产生的信息，包括：")]),n._v(" "),t("ul",[t("li",[n._v("一组 terms")]),n._v(" "),t("li",[n._v("每个 term 的位置")]),n._v(" "),t("li",[n._v("term 的首字符/尾字符与原始字符串原点的偏移量")])]),n._v(" "),t("p",[n._v("term_vectors 取值：")]),n._v(" "),t("table",[t("thead",[t("tr",[t("th",[n._v("取值")]),n._v(" "),t("th",[n._v("备注")])])]),n._v(" "),t("tbody",[t("tr",[t("td",[n._v("no")]),n._v(" "),t("td",[n._v("不存储信息，默认即此")])]),n._v(" "),t("tr",[t("td",[n._v("yes")]),n._v(" "),t("td",[n._v("term 被存储")])]),n._v(" "),t("tr",[t("td",[n._v("with_positions")]),n._v(" "),t("td",[n._v("在 yes 的基础上增加位置信息")])]),n._v(" "),t("tr",[t("td",[n._v("with_offset")]),n._v(" "),t("td",[n._v("在 yes 的基础上增加偏移信息")])]),n._v(" "),t("tr",[t("td",[n._v("with_positions_offsets")]),n._v(" "),t("td",[n._v("term、位置、偏移量都存储")])])])]),n._v(" "),t("h3",{attrs:{id:"_1-23-fields"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-23-fields"}},[n._v("#")]),n._v(" 1.23 fields")]),n._v(" "),t("p",[n._v("fields 参数可以让同一字段有多种不同的索引方式。例如：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('\nPUT blog {\n  "mappings": {\n    "properties": {\n      "title":{\n        "type": "text",\n        "fields": {\n          "raw":{\n            "type":"keyword"\n          }\n        }\n      }\n    }\n  }\n}\n\nPUT blog/_doc/1 {\n  "title":"javaboy"\n}\n\nGET blog/_search {\n  "query": {\n    "term": {\n      "title.raw": "javaboy"\n    }\n  }\n}\n')])])])])}),[],!1,null,null,null);e.default=a.exports}}]);