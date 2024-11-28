(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{404:function(s,n,a){"use strict";a.r(n);var t=a(7),e=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"javascript-执行上下文与执行上下文栈"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#javascript-执行上下文与执行上下文栈"}},[s._v("#")]),s._v(" JavaScript 执行上下文与执行上下文栈")]),s._v(" "),n("h2",{attrs:{id:"javascript-执行上下文"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#javascript-执行上下文"}},[s._v("#")]),s._v(" JavaScript 执行上下文")]),s._v(" "),n("h3",{attrs:{id:"_1-变量声明提升"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-变量声明提升"}},[s._v("#")]),s._v(" 1. 变量声明提升")]),s._v(" "),n("ul",[n("li",[s._v("通过 var 定义(声明)的变量, 在定义语句之前就可以访问到，其值为: undefined")])]),s._v(" "),n("h3",{attrs:{id:"_2-函数声明提升"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-函数声明提升"}},[s._v("#")]),s._v(" 2. 函数声明提升")]),s._v(" "),n("ul",[n("li",[s._v("通过 function 声明的函数, 在函数声明的代码之前就可以直接调用，其值为: 函数定义(对象)")]),s._v(" "),n("li",[s._v("通过表达式的方式定义的函数不会存在变量提升")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<script type="text/javascript">\n    var a = 3;\n    function fn() {\n      // 函数内部声明了变量 a ，但是并没有赋值(通过var声明的变量会存在变量提升)，\n      // 赋值是在打印语句之后赋值的，此时也不会去函数外部寻找，因为函数内部此时声明的有变量 a\n      console.log(a);\n      var a = 4;\n    }\n    fn();\n\n    console.log(b); //undefined  变量提升\n    fn2(); //可调用  函数提升\n    // fn3() //不能  变量提升\n\n    var b = 3;\n\n    function fn2() {\n      console.log("fn2()");\n    }\n\n    var fn3 = function () {\n      console.log("fn3()");\n    };\n<\/script>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])]),n("h3",{attrs:{id:"二者的提升顺序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二者的提升顺序"}},[s._v("#")]),s._v(" 二者的提升顺序")]),s._v(" "),n("ul",[n("li",[s._v("先执行变量提升, 再执行函数提升")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<script type=\"text/javascript\">\n   //  先执行变量提升, 再执行函数提升，所以此时 a 的数据类型为 'function'\n    function a() {}\n    var a;\n    console.log(typeof a); // 'function'\n<\/script>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h2",{attrs:{id:"执行上下文"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文"}},[s._v("#")]),s._v(" 执行上下文")]),s._v(" "),n("h3",{attrs:{id:"_1-代码分类-位置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-代码分类-位置"}},[s._v("#")]),s._v(" 1. 代码分类(位置)")]),s._v(" "),n("ul",[n("li",[s._v("全局代码")]),s._v(" "),n("li",[s._v("函数(局部)代码")])]),s._v(" "),n("h3",{attrs:{id:"_2-全局执行上下文"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-全局执行上下文"}},[s._v("#")]),s._v(" 2. 全局执行上下文")]),s._v(" "),n("ul",[n("li",[s._v("在执行全局代码前将 window 确定为全局执行上下文")]),s._v(" "),n("li",[s._v("对全局数据进行预处理\n"),n("ul",[n("li",[s._v("var 定义的全局变量==>undefined, 添加为 window 的属性")]),s._v(" "),n("li",[s._v("function 声明的全局函数==>赋值(fun), 添加为 window 的方法")]),s._v(" "),n("li",[s._v("this==>赋值(window)")])])]),s._v(" "),n("li",[s._v("开始执行全局代码")])]),s._v(" "),n("h3",{attrs:{id:"_3-函数执行上下文"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-函数执行上下文"}},[s._v("#")]),s._v(" 3. 函数执行上下文")]),s._v(" "),n("ul",[n("li",[s._v("在调用函数, 准备执行函数体之前, 创建对应的函数执行上下文对象(虚拟的, 存在于栈中)")]),s._v(" "),n("li",[s._v("对局部数据进行预处理\n"),n("ul",[n("li",[s._v("形参变量==>赋值(实参)==>添加为执行上下文的属性")]),s._v(" "),n("li",[s._v("arguments==>赋值(实参列表), 添加为执行上下文的属性")]),s._v(" "),n("li",[s._v("var 定义的局部变量==>undefined, 添加为执行上下文的属性")]),s._v(" "),n("li",[s._v("function 声明的函数 ==>赋值(fun), 添加为执行上下文的方法")]),s._v(" "),n("li",[s._v("this==>赋值(调用函数的对象)")])])]),s._v(" "),n("li",[s._v("开始执行函数体代码")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<script type="text/javascript">\n    console.log(a1, window.a1);\n    window.a2();\n    console.log(this);\n\n    var a1 = 3;\n    function a2() {\n      console.log("a2()");\n    }\n    console.log(a1);\n\n    console.log("---------函数执行上下文-----------");\n    function fn(a1) {\n        console.log(a1); //2\n        console.log(a2); //undefined\n        console.log(this); //window\n        console.log(arguments); //伪数组[2,3,4,5,6]\n        console.log(Array.isArray(arguments)); //false\n        var a2 = 6;\n        function a3() {\n            console.log("a3()执行了");\n        }\n    }\n    fn(2, 3, 4, 5, 6);\n<\/script>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br")])]),n("h2",{attrs:{id:"执行上下文栈"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文栈"}},[s._v("#")]),s._v(" 执行上下文栈")]),s._v(" "),n("h3",{attrs:{id:"指向上下文栈流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#指向上下文栈流程"}},[s._v("#")]),s._v(" 指向上下文栈流程")]),s._v(" "),n("ol",[n("li",[s._v("在全局代码执行前, JS 引擎就会创建一个栈来存储管理所有的执行上下文对象")]),s._v(" "),n("li",[s._v("在全局执行上下文(window)确定后, 将其添加到栈中(压栈)")]),s._v(" "),n("li",[s._v("在函数执行上下文创建后, 将其添加到栈中(压栈)")]),s._v(" "),n("li",[s._v("在当前函数执行完后,将栈顶的对象移除(出栈)")]),s._v(" "),n("li",[s._v("当所有的代码执行完后, 栈中只剩下 window")])]),s._v(" "),n("h2",{attrs:{id:"常见面试题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常见面试题"}},[s._v("#")]),s._v(" 常见面试题")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<script type="text/javascript">\n    // 执行上下文栈中的顺序从栈顶到栈底(元素从栈顶依次出栈。插入和删除都是在栈顶操作的)依次是 f(4) ==> f(3) ==> f(2) ==> f(1) ==> window ,\n    // 出栈顺序则是后进先出，即f(4) ==> f(3) ==> f(2) ==> f(1) 依次出栈，依次执行相应的函数，最后留下全局上下文对象window，所以输出顺序是上面所写的\n    console.log("gb: " + i);\n    var i = 1;\n    foo(1);\n    function foo(i) {\n    if (i == 4) {\n        return;\n    }\n    console.log("fb:" + i);\n    foo(i + 1); //递归调用: 在函数内部调用自己\n    console.log("fe:" + i);\n    }\n    console.log("ge: " + i);\n<\/script>\n\n\x3c!--\n    1. 依次输出什么?\n    gb: undefined\n    fb: 1\n    fb: 2\n    fb: 3\n    fe: 3\n    fe: 2\n    fe: 1\n    ge: 1\n    2. 整个过程中产生了几个执行上下文?  5个  f(4) ==> f(3) ==> f(2) ==> f(1) ==> window\n--\x3e\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<script type="text/javascript">\n    if (!(b in window)) {\n    //  变量 b 不在window对象中时，条件才成立，才执行下面的语句\n    var b = 1;\n    }\n    console.log(b); // undefined\n<\/script>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<script type="text/javascript">\n    var c = 1;\n    function c(c) {\n    console.log(c);\n    var c = 3;\n    }\n\n    c(2); // 报错 Uncaught TypeError: c is not a function\n    /*   因为先进行变量提升, 再进行函数提升，此时的代码就相当于是这样的,所以才会报错( c is not a function)\n        var c;\n        function c(c) {\n            console.log(c);\n            var c = 3;\n        }\n        c = 1;\n        c(2);\n    */\n<\/script>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);