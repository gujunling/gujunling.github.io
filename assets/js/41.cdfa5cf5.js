(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{410:function(s,a,n){"use strict";n.r(a);var t=n(7),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"javascript-线程机制与事件机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-线程机制与事件机制"}},[s._v("#")]),s._v(" JavaScript 线程机制与事件机制")]),s._v(" "),a("h2",{attrs:{id:"线程机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程机制"}},[s._v("#")]),s._v(" 线程机制")]),s._v(" "),a("h3",{attrs:{id:"进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程"}},[s._v("#")]),s._v(" 进程")]),s._v(" "),a("p",[s._v("程序的一次执行, 它占有一片独有的内存空间")]),s._v(" "),a("h3",{attrs:{id:"线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程"}},[s._v("#")]),s._v(" 线程")]),s._v(" "),a("p",[s._v("CPU 的基本调度单位, 是程序执行的一个完整流程，是进程内的一个独立执行单元")]),s._v(" "),a("h3",{attrs:{id:"进程与线程关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程与线程关系"}},[s._v("#")]),s._v(" 进程与线程关系")]),s._v(" "),a("ul",[a("li",[s._v("一个进程中一般至少有一个运行的线程: 主线程，进程启动后自动创建")]),s._v(" "),a("li",[s._v("一个进程中也可以同时运行多个线程, 我们会说程序是多线程运行的")]),s._v(" "),a("li",[s._v("一个进程内的数据可以供其中的多个线程直接共享")]),s._v(" "),a("li",[s._v("多个进程之间的数据是不能直接共享的")])]),s._v(" "),a("h3",{attrs:{id:"线程池"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程池"}},[s._v("#")]),s._v(" 线程池")]),s._v(" "),a("p",[s._v("保存多个线程对象的容器，实现线程对象的反复利用。")]),s._v(" "),a("h3",{attrs:{id:"多线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多线程"}},[s._v("#")]),s._v(" 多线程")]),s._v(" "),a("ul",[a("li",[s._v("优点：能有效提高 CPU 的利用率")]),s._v(" "),a("li",[s._v("缺点：\n"),a("ul",[a("li",[s._v("1.创建多线程开销")]),s._v(" "),a("li",[s._v("2.线程间切换开销")]),s._v(" "),a("li",[s._v("3.死锁与状态同步问题")])])])]),s._v(" "),a("h3",{attrs:{id:"单线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单线程"}},[s._v("#")]),s._v(" 单线程")]),s._v(" "),a("ul",[a("li",[s._v("优点：顺序编程、简单易懂")]),s._v(" "),a("li",[s._v("缺点：效率较低")])]),s._v(" "),a("h3",{attrs:{id:"补充"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#补充"}},[s._v("#")]),s._v(" 补充")]),s._v(" "),a("ul",[a("li",[s._v("浏览器都是多线程运行的")]),s._v(" "),a("li",[s._v("应用程序必须运行在某个进程的某个线程上")])]),s._v(" "),a("h2",{attrs:{id:"浏览器内核模块组成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器内核模块组成"}},[s._v("#")]),s._v(" 浏览器内核模块组成")]),s._v(" "),a("h3",{attrs:{id:"什么是浏览器内核"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是浏览器内核"}},[s._v("#")]),s._v(" 什么是浏览器内核?")]),s._v(" "),a("p",[s._v("支持浏览器运行的最核心的程序。")]),s._v(" "),a("h3",{attrs:{id:"浏览器内核由很多模块组成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器内核由很多模块组成"}},[s._v("#")]),s._v(" 浏览器内核由很多模块组成")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("主线程")]),s._v(" "),a("ul",[a("li",[s._v("JS 引擎模块：负责 JS 程序的编译与运行")]),s._v(" "),a("li",[s._v("html,css 文档解析模块 : 负责页面文本的解析")]),s._v(" "),a("li",[s._v("dom/css 模块 : 负责 dom/css 在内存中的相关处理")]),s._v(" "),a("li",[s._v("布局和渲染模块 : 负责页面的布局和效果的绘制")])])]),s._v(" "),a("li",[a("p",[s._v("分线程")]),s._v(" "),a("ul",[a("li",[s._v("定时器模块 : 负责定时器的管理")]),s._v(" "),a("li",[s._v("网络请求模块 : 负责服务器请求(常规/Ajax)")]),s._v(" "),a("li",[s._v("DOM 事件响应模块 : 负责事件的管理")])])])]),s._v(" "),a("h2",{attrs:{id:"js-线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-线程"}},[s._v("#")]),s._v(" JS 线程")]),s._v(" "),a("ul",[a("li",[s._v("js 是单线程执行的(回调函数也是在主线程)。")]),s._v(" "),a("li",[s._v("H5 提出了实现多线程的方案: Web Workers")]),s._v(" "),a("li",[s._v("只能是主线程更新界面，（因为如果是有多个线程可以操作界面，可能会出现在同一时间不同的线程执行不同的操作，导致冲突，例如：一个线程执行编辑操作，一个线程执行删除操作，如果二者同时可以进行的话，可能会出现删除了之后再次去编辑的情况，导致出错。）")])]),s._v(" "),a("h2",{attrs:{id:"定时器问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定时器问题"}},[s._v("#")]),s._v(" 定时器问题")]),s._v(" "),a("ul",[a("li",[s._v("定时器并不真正完全定时，（一般会延迟一丢丢(可以接受), 也有可能延迟很长时间(不能接受)）")]),s._v(" "),a("li",[s._v("如果在主线程执行了一个长时间的操作, 可能导致延时才处理")]),s._v(" "),a("li",[s._v("定时器回调函数是在主线程中执行的,定时器回调函数只有在运行栈中的代码全部执行完后才有可能执行,因为 JS 是单线程的")]),s._v(" "),a("li",[s._v("定时器是通过事件循环模型来实现的")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<body>\n    <button id="btn">启动定时器</button>\n\n    <script type="text/javascript">\n        document.getElementById("btn").onclick = function () {\n        let start = Date.now();\n        console.log("启动定时器前...");\n        setTimeout(function () {\n            console.log("定时器执行了", Date.now() - start);\n        }, 200);\n        console.log("启动定时器后...");\n        };\n    <\/script>\n</body>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h2",{attrs:{id:"为什么-js-要用单线程模式-而不用多线程模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么-js-要用单线程模式-而不用多线程模式"}},[s._v("#")]),s._v(" 为什么 js 要用单线程模式, 而不用多线程模式?")]),s._v(" "),a("ul",[a("li",[s._v("JavaScript 的单线程，与它的用途有关。")]),s._v(" "),a("li",[s._v("作为浏览器脚本语言，JavaScript 的主要用途是与用户互动，以及操作 DOM。")]),s._v(" "),a("li",[s._v("这决定了它只能是单线程，否则会带来很复杂的同步问题。（如果是多线程模式，例如：一个线程执行编辑操作，一个线程执行删除操作，如果二者同时可以进行的话，可能会出现删除了之后再次去编辑的情况，导致出错。）")])]),s._v(" "),a("h2",{attrs:{id:"js-事件处理机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-事件处理机制"}},[s._v("#")]),s._v(" JS 事件处理机制")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("代码分类")]),s._v(" "),a("ul",[a("li",[s._v("初始化执行代码: 包含绑定 dom 事件监听, 设置定时器, 发送 ajax 请求的代码")]),s._v(" "),a("li",[s._v("回调执行代码: 处理回调逻辑")])])]),s._v(" "),a("li",[a("p",[s._v("js 引擎执行代码的基本流程")]),s._v(" "),a("ul",[a("li",[s._v("初始化代码===>回调代码")])])]),s._v(" "),a("li",[a("p",[s._v("模型的 2 个重要组成部分")]),s._v(" "),a("ul",[a("li",[s._v("事件管理模块")]),s._v(" "),a("li",[s._v("回调队列")])])]),s._v(" "),a("li",[a("p",[s._v("模型的运转流程")]),s._v(" "),a("ul",[a("li",[s._v("执行初始化代码, 将事件回调函数交给对应模块管理")]),s._v(" "),a("li",[s._v("当事件发生时, 管理模块会将回调函数及其数据添加到回调列队中")]),s._v(" "),a("li",[s._v("只有当初始化代码执行完后(可能要一定时间), 才会遍历读取回调队列中的回调函数执行")])])])]),s._v(" "),a("h2",{attrs:{id:"h5-web-workers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#h5-web-workers"}},[s._v("#")]),s._v(" H5 Web Workers")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("目的：可以让 js 在分线程执行。通过使用 Web Workers，Web 应用程序可以在独立于主线程的后台线程中，运行一个脚本操作。这样做的好处是可以在独立线程中执行费时的处理任务，从而允许主线程（通常是 UI 线程）不会因此被阻塞/放慢。")])]),s._v(" "),a("li",[a("p",[s._v("相关 API")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("Worker: 构造函数, 加载分线程执行的 js 文件。")])]),s._v(" "),a("li",[a("p",[s._v("Worker.prototype.onmessage: 用于接收另一个线程的回调函数。")])]),s._v(" "),a("li",[a("p",[s._v("Worker.prototype.postMessage: 向另一个线程发送消息。")])]),s._v(" "),a("li",[a("p",[s._v("onmessage(event) 方法中使用 event.data 来接收主线程发送的数据。")])]),s._v(" "),a("li",[a("p",[s._v("参考链接："),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API"),a("OutboundLink")],1)])])])]),s._v(" "),a("li",[a("p",[s._v("问题:")]),s._v(" "),a("ul",[a("li",[s._v("worker 内代码不能操作 DOM 更新 UI，因为全局对象不再是 window，而是 DedicatedWorkerGlobalScope {}")]),s._v(" "),a("li",[s._v("不是每个浏览器都支持这个新特性")]),s._v(" "),a("li",[s._v("不能跨域加载 JS")])])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<body>\n    <input type="text" placeholder="数值" id="number" />\n    <button id="btn">计算</button>\n    <script type="text/javascript">\n        let input = document.getElementById("number");\n        document.getElementById("btn").onclick = function () {\n        let number = input.value;\n\n        //创建一个Worker对象\n        let worker = new Worker("worker.js");\n        // 绑定接收消息的监听\n        worker.onmessage = function (event) {\n            console.log("主线程接收分线程返回的数据: " + event.data);\n            alert(event.data);\n        };\n\n        // 向分线程发送消息\n        worker.postMessage(number);\n        console.log("主线程向分线程发送数据: " + number);\n        };\n        // console.log(this) // window\n    <\/script>\n</body>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("p",[a("code",[s._v("worker.js")]),s._v("如下")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 1 1 2 3 5 8 13 f(n) = f(n-1) + f(n-2)\nfunction fibonacci(n) {\n  return n<=2 ? 1 : fibonacci(n-1) + fibonacci(n-2)  //递归调用\n}\n\nconsole.log(this) //DedicatedWorkerGlobalScope {name: \"\", onmessage: null, onmessageerror: null, cancelAnimationFrame: ƒ, close: ƒ, …}\n\nthis.onmessage = function (event) {\n    //使用 event.data 来接收主线程发送的数据\n  let number = event.data\n  console.log('分线程接收到主线程发送的数据: '+number)\n  //计算\n  let result = fibonacci(number)\n  postMessage(result)\n  console.log('分线程向主线程返回数据: '+result)\n  // alert(result)  alert是window的方法, 在分线程不能调用\n  // 分线程中的全局对象不再是window, 所以在分线程中不可能更新界面\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);