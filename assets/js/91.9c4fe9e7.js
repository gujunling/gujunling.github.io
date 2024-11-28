(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{458:function(s,e,r){"use strict";r.r(e);var a=r(7),n=Object(a.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"docker-安装-redis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-安装-redis"}},[s._v("#")]),s._v(" Docker 安装 Redis")]),s._v(" "),e("h2",{attrs:{id:"_1-从-docker-hub-上拉取-redis-镜像到本地标签为-3-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-从-docker-hub-上拉取-redis-镜像到本地标签为-3-2"}},[s._v("#")]),s._v(" 1.从 docker hub 上拉取 redis 镜像到本地标签为 3.2")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    docker pull redis:3.2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_2-使用-redis3-2-镜像创建容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用-redis3-2-镜像创建容器"}},[s._v("#")]),s._v(" 2.使用 redis3.2 镜像创建容器")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("1.使用镜像\n    docker run -p 6379:6379 -v /gguse/myredis/data:/data -v /gguse/myredis/conf/redis.conf:/usr/local/etc/redis/redis.conf -d redis:3.2 redis-server /usr/local/etc/redis/redis.conf --appendonly yes\n\n2.在主机 /gguse/myredis/conf/redis.conf目录下新建redis.conf文件\n       vim /gguse/myredis/conf/redis.conf /redis.conf\n\n3.测试redis连接\n       docker exec -it 运行着的redis服务的容器ID redis-cli\n\n4.测试持久化文件生成\n     进入/gguse/myredis/data，可以看到存在 appendonly.aof ，进入，可以看到刚才存储的数据。\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);