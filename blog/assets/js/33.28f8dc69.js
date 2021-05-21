(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1180:function(t,s,a){"use strict";a.r(s);var n=a(19),p=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"如何配置vscode-hyperf-yasd-docker-单元测试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何配置vscode-hyperf-yasd-docker-单元测试"}},[t._v("#")]),t._v(" 如何配置VSCode+hyperf+yasd+docker+单元测试")]),t._v(" "),n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),n("p",[n("code",[t._v("swoole")]),t._v(" 新的断点调试工具 "),n("code",[t._v("yasd")]),t._v(" 可以完美支持协程进行断点，提高开发调试效率。避免php传统调试方法 "),n("code",[t._v("var_dump(),echo")]),t._v(" 这种代码入侵性强，调试效率低的方式")]),t._v(" "),n("h3",{attrs:{id:"yasd"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#yasd"}},[t._v("#")]),t._v(" yasd")]),t._v(" "),n("p",[t._v("本文中使用docker容器系统为alpine，在改系统编译yasd会报错，所以需要修改下"),n("br"),t._v(" "),n("img",{attrs:{src:a(384),alt:""}}),n("br"),t._v("\nPS: 小编已上传修改后的源码到 "),n("code",[t._v("github")]),t._v(" : https://github.com/1206589598Colin/yasd")]),t._v(" "),n("h3",{attrs:{id:"docker"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[t._v("#")]),t._v(" docker")]),t._v(" "),n("p",[t._v("本文使用的是hyperf官方的Dockerfile文件，安装yasd的安装进行修改")]),t._v(" "),n("p",[t._v("完整Dockerfile：")]),t._v(" "),n("div",{staticClass:"language-yaml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Default Dockerfile")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @link     https://www.hyperf.io")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @document https://hyperf.wiki")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @contact  group@hyperf.io")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @license  https://github.com/hyperf-cloud/hyperf/blob/master/LICENSE")]),t._v("\n\nFROM hyperf/hyperf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("7.4"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("alpine"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("v3.11"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v('cli\nLABEL maintainer="Hyperf Developers <group@hyperf.io'),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v('" version="1.0" license="MIT" app.name="Hyperf"\n\n'),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ---------- env settings ----------")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# --build-arg timezone=Asia/Shanghai")]),t._v("\nARG timezone\n\nENV TIMEZONE=$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("timezone"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Asia/Shanghai"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \\\n    COMPOSER_VERSION=1.10.10 \\\n    APP_ENV=prod \\\n    SCAN_CACHEABLE=(true)\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# update")]),t._v("\nRUN set "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ex \\\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install composer")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token important"}},[t._v("&&")]),t._v(" wget "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("nv "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("O /usr/local/bin/composer https"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//github.com/composer/composer/releases/download/$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("COMPOSER_VERSION"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/composer.phar \\\n    "),n("span",{pre:!0,attrs:{class:"token important"}},[t._v("&&")]),t._v(" chmod u+x /usr/local/bin/composer \\\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# php info")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token important"}},[t._v("&&")]),t._v(" php "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("v \\\n    "),n("span",{pre:!0,attrs:{class:"token important"}},[t._v("&&")]),t._v(" php "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("m \\\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ---------- clear works ----------")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token important"}},[t._v("&&")]),t._v(" rm "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("rf /var/cache/apk/* /tmp/* /usr/share/man \\\n    "),n("span",{pre:!0,attrs:{class:"token important"}},[t._v("&&")]),t._v(" echo "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v('e "\\033'),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("42;37m Build Completed "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(").\\033"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v('0m\\n"\n\nENV PHPIZE_DEPS="autoconf dpkg'),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("dev dpkg file g++ gcc libc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("dev make php7"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("dev php7"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pear pkgconf re2c pcre"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("dev pcre2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("dev zlib"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v('dev libtool automake" \\\n    YASD_VERSION=0.3.2 \\\n    REMOTE_HOST=172.17.0.1\n    \n'),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# update")]),t._v("\nRUN set "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ex \\\n    "),n("span",{pre:!0,attrs:{class:"token important"}},[t._v("&&")]),t._v(" apk update \\\n    "),n("span",{pre:!0,attrs:{class:"token important"}},[t._v("&&")]),t._v(" apk add "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("no"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("cache libstdc++ openssl git bash \\\n    "),n("span",{pre:!0,attrs:{class:"token important"}},[t._v("&&")]),t._v(" apk add "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("no"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("cache $PHPIZE_DEPS libaio"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("dev openssl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("dev \\\n    "),n("span",{pre:!0,attrs:{class:"token important"}},[t._v("&&")]),t._v(" ln "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("s /usr/bin/phpize7 /usr/local/bin/phpize \\\n    "),n("span",{pre:!0,attrs:{class:"token important"}},[t._v("&&")]),t._v(" ln "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("s /usr/bin/php"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("config7 /usr/local/bin/php"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("config \\\n    "),n("span",{pre:!0,attrs:{class:"token important"}},[t._v("&&")]),t._v(" apk add "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("no"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("cache boost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("dev \\\n    "),n("span",{pre:!0,attrs:{class:"token important"}},[t._v("&&")]),t._v(" wget "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("P /usr/local/src https"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//github.com/1206589598Colin/yasd/archive/$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("YASD_VERSION"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(".tar.gz \\\n    "),n("span",{pre:!0,attrs:{class:"token important"}},[t._v("&&")]),t._v(" cd /usr/local/src \\\n    "),n("span",{pre:!0,attrs:{class:"token important"}},[t._v("&&")]),t._v(" tar "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("xzf $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("YASD_VERSION"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(".tar.gz \\\n    "),n("span",{pre:!0,attrs:{class:"token important"}},[t._v("&&")]),t._v(" cd /usr/local/src/yasd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("YASD_VERSION"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \\\n    "),n("span",{pre:!0,attrs:{class:"token important"}},[t._v("&&")]),t._v(" phpize "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("clean "),n("span",{pre:!0,attrs:{class:"token important"}},[t._v("&&")]),t._v(" phpize "),n("span",{pre:!0,attrs:{class:"token important"}},[t._v("&&")]),t._v(" ./configure "),n("span",{pre:!0,attrs:{class:"token important"}},[t._v("&&")]),t._v(" make clean "),n("span",{pre:!0,attrs:{class:"token important"}},[t._v("&&")]),t._v(" make "),n("span",{pre:!0,attrs:{class:"token important"}},[t._v("&&")]),t._v(" make install \\\n    "),n("span",{pre:!0,attrs:{class:"token important"}},[t._v("&&")]),t._v(" touch /etc/php7/conf.d/20_yasd.ini \\\n    "),n("span",{pre:!0,attrs:{class:"token important"}},[t._v("&&")]),t._v(" echo "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v('e "zend_extension=yasd\\nyasd.debug_mode=remote\\nyasd.remote_host=$'),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("REMOTE_HOST"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v('\\nyasd.remote_port=9000" '),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" /etc/php7/conf.d/20_yasd.ini \\\n    "),n("span",{pre:!0,attrs:{class:"token important"}},[t._v("&&")]),t._v(" rm "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("rf /usr/local/src/*\n\nWORKDIR /opt/www\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Composer Cache")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# COPY ./composer.* /opt/www/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# RUN composer install --no-dev --no-scripts")]),t._v("\n\nCOPY . /opt/www\nRUN composer install "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("no"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("dev "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("o "),n("span",{pre:!0,attrs:{class:"token important"}},[t._v("&&")]),t._v(" php bin/hyperf.php\n\nEXPOSE 9501\n\nENTRYPOINT "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"php"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/opt/www/bin/hyperf.php"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"start"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])])]),n("p",[t._v("修改部分")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('\nENV PHPIZE_DEPS="autoconf dpkg-dev dpkg file g++ gcc libc-dev make php7-dev php7-pear pkgconf re2c pcre-dev pcre2-dev zlib-dev libtool automake" \\\n    YASD_VERSION=0.3.2 \\\n    REMOTE_HOST=172.17.0.1\n    \n# update\nRUN set -ex \\\n    && apk update \\\n    && apk add --no-cache libstdc++ openssl git bash \\\n    && apk add --no-cache $PHPIZE_DEPS libaio-dev openssl-dev \\\n    && ln -s /usr/bin/phpize7 /usr/local/bin/phpize \\\n    && ln -s /usr/bin/php-config7 /usr/local/bin/php-config \\\n    && apk add --no-cache boost-dev \\\n    && wget -P /usr/local/src https://github.com/1206589598Colin/yasd/archive/${YASD_VERSION}.tar.gz \\\n    && cd /usr/local/src \\\n    && tar -xzf ${YASD_VERSION}.tar.gz \\\n    && cd /usr/local/src/yasd-${YASD_VERSION} \\\n    && phpize --clean && phpize && ./configure && make clean && make && make install \\\n    && touch /etc/php7/conf.d/20_yasd.ini \\\n    && echo -e "zend_extension=yasd\\nyasd.debug_mode=remote\\nyasd.remote_host=${REMOTE_HOST}\\nyasd.remote_port=9000" > /etc/php7/conf.d/20_yasd.ini \\\n    && rm -rf /usr/local/src/*\n')])])]),n("p",[t._v("注意点：")]),t._v(" "),n("ul",[n("li",[t._v("REMOTE_HOST为宿主机docker的ip地址，查看方式")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(385),alt:""}})]),t._v(" "),n("h3",{attrs:{id:"hyperf"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hyperf"}},[t._v("#")]),t._v(" hyperf")]),t._v(" "),n("p",[n("img",{attrs:{src:a(386),alt:""}})]),t._v(" "),n("h3",{attrs:{id:"vs-code"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vs-code"}},[t._v("#")]),t._v(" vs code")]),t._v(" "),n("p",[t._v("所需安装插件： "),n("code",[t._v("PHPUnit")]),t._v(" ， "),n("code",[t._v("PHP Debug")]),t._v(" ， "),n("code",[t._v("docker")])]),t._v(" "),n("p",[t._v("配置："),n("br"),t._v(" "),n("img",{attrs:{src:a(387),alt:""}}),n("br"),t._v("\n命令： "),n("code",[t._v("docker exec -t hyperf php -e vendor/bin/co-phpunit.php -c phpunit.xml")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(388),alt:""}})]),t._v(" "),n("p",[t._v("配置调试文件： "),n("code",[t._v("launch.json")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(389),alt:""}})]),t._v(" "),n("p",[n("strong",[t._v("launch.json")])]),t._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.2.0"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"configurations"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Listen for Xdebug"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"php"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"request"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"launch"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pathMappings"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"/opt/www"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${workspaceFolder}"')]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"log"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("9000")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),n("h3",{attrs:{id:"结尾"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#结尾"}},[t._v("#")]),t._v(" 结尾")]),t._v(" "),n("p",[t._v("配置到这里恭喜你，已经大功告成, 让我们来试一下吧"),n("br"),t._v(" "),n("img",{attrs:{src:a(390),alt:""}})]),t._v(" "),n("p",[t._v("第三步注意点：ctrl+shift+p后上方出现弹出，请选择 "),n("code",[t._v("phpunit Test")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(391),alt:""}})]),t._v(" "),n("p",[t._v("执行结果："),n("br"),t._v(" "),n("img",{attrs:{src:a(392),alt:""}})])])}),[],!1,null,null,null);s.default=p.exports},384:function(t,s,a){t.exports=a.p+"assets/img/20210103112116.9e50933d.png"},385:function(t,s,a){t.exports=a.p+"assets/img/20210103112812.9ce20dda.png"},386:function(t,s,a){t.exports=a.p+"assets/img/20210103113218.65ac320d.png"},387:function(t,s,a){t.exports=a.p+"assets/img/20210103113547.1ba2a2f5.png"},388:function(t,s,a){t.exports=a.p+"assets/img/20210103113842.68ef22ca.png"},389:function(t,s,a){t.exports=a.p+"assets/img/20210103114402.852ed2f6.png"},390:function(t,s,a){t.exports=a.p+"assets/img/20210103114918.64198459.png"},391:function(t,s,a){t.exports=a.p+"assets/img/20210103115042.2f8ee4f1.png"},392:function(t,s,a){t.exports=a.p+"assets/img/20210103115431.3d8da74e.png"}}]);