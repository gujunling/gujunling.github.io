(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{434:function(s,n,a){"use strict";a.r(n);var e=a(7),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"日常工作知识"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#日常工作知识"}},[s._v("#")]),s._v(" 日常工作知识")]),s._v(" "),n("h2",{attrs:{id:"_1-vue-中-v-if-和-v-for-的优先级"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-vue-中-v-if-和-v-for-的优先级"}},[s._v("#")]),s._v(" 1. Vue 中 v-if 和 v-for 的优先级")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("v-if 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回 true 值的时候被渲染。")])]),s._v(" "),n("li",[n("p",[s._v("v-for 指令基于一个数组来渲染一个列表。v-for 指令需要使用 "),n("code",[s._v("item in items")]),s._v(" 形式的特殊语法，其中 items 是源数据数组或者对象，而 item 则是被迭代的数组元素的别名，在 v-for 的时候，建议设置 key 值，并且保证每个 key 值是独一无二的，这便于 diff 算法进行优化。")])]),s._v(" "),n("li",[n("p",[s._v("Vue2 中 v-for 的优先级高于 v-if，如果两者同时出现会导致 for 循环始终被执行，浪费性能，不建议同时使用。")])]),s._v(" "),n("li",[n("p",[s._v("可以使用 template 包裹 v-for 所在的元素标签，在 template 层使用 v-if 判断。")])]),s._v(" "),n("li",[n("p",[s._v("从 Vue2 源码中查看两者的优先级（源码位置：\\vue-dev\\src\\compiler\\codegen\\index.js 大致 56 行）")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("export function genElement (el: ASTElement, state: CodegenState): string {\nif (el.parent) {\n  el.pre = el.pre || el.parent.pre\n}\nif (el.staticRoot && !el.staticProcessed) {\n  return genStatic(el, state)\n} else if (el.once && !el.onceProcessed) {\n  return genOnce(el, state)\n} else if (el.for && !el.forProcessed) {\n  return genFor(el, state)\n} else if (el.if && !el.ifProcessed) {\n  return genIf(el, state)\n} else if (el.tag === 'template' && !el.slotTarget && !state.pre) {\n  return genChildren(el, state) || 'void 0'\n} else if (el.tag === 'slot') {\n  return genSlot(el, state)\n} else {\n  // component or element\n  ...\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("Vue3 中 v-if 的优先级高于 v-for，此时两者是不可出现在同一个元素上的。")])])]),s._v(" "),n("p",[n("strong",[s._v("结论：Vue2 中 v-for 的优先级高于 v-if，Vue3 中 v-if 的优先级高于 v-for ，尽量避免在同一个元素上面同时使用 v-if 和 v-for，建议使用计算属性替代。")])]),s._v(" "),n("h2",{attrs:{id:"_2-vue2-x-中-data-为什么是一个函数而不是一个对象"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-vue2-x-中-data-为什么是一个函数而不是一个对象"}},[s._v("#")]),s._v(" 2. Vue2.x 中 data 为什么是一个函数而不是一个对象")]),s._v(" "),n("h3",{attrs:{id:"_2-1-原因"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-原因"}},[s._v("#")]),s._v(" 2.1 原因")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("Vue 根实例的时候定义 data 属性既可以是一个对象，也可以是一个函数（根实例是单例），不会产生数据污染情况。")])]),s._v(" "),n("li",[n("p",[s._v("在定义好一个组件时，Vue 最终都会通过 Vue.extend()构成组件实例，如果 data 是一个对象，会导致多个组件实例共用同一个 data 数据(多个组件实例指向同一个内存地址，不存在数据隔离)，会导致组件之间的数据互相影响，产生数据污染。")])]),s._v(" "),n("li",[n("p",[s._v("Vue 组件实例 data 必须是函数，目的是为了防止多个组件实例对象之间共用一个 data，产生数据污染。采用函数的形式， initData 初始化时会将其作为工厂函数都会返回全新 data 对象。")])])]),s._v(" "),n("h3",{attrs:{id:"_2-2-原理分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-原理分析"}},[s._v("#")]),s._v(" 2.2 原理分析")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("Vue 初始化 data （源码位置：/src/core/instance/state.js）")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("function initData (vm: Component) {\nlet data = vm.$options.data\ndata = vm._data = typeof data === 'function'\n    ? getData(data, vm)\n    : data || {}\n    ...\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("Vue 组件在创建时，自定义组件会进入 "),n("code",[s._v("mergeOptions")]),s._v(" 进行选项合并(源码位置：/src/core/util/options.js)")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Vue.prototype._init = function (options?: Object) {\n    ...\n    // merge options\n    if (options && options._isComponent) {\n    // optimize internal component instantiation\n    // since dynamic options merging is pretty slow, and none of the\n    // internal component options needs special treatment.\n    initInternalComponent(vm, options)\n    } else {\n    vm.$options = mergeOptions(\n        resolveConstructorOptions(vm.constructor),\n        options || {},\n        vm\n    )\n    }\n    ...\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("会对定义的 data 进行数据校验，此时的 VM 实例为 undefined，会进入 if 判断，若 data 类型不是 function，则会出现警告。(源码位置：/src/core/instance/init.js)")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('strats.data = function (\nparentVal: any,\nchildVal: any,\nvm?: Component\n): ?Function {\nif (!vm) {\n    if (childVal && typeof childVal !== "function") {\n    process.env.NODE_ENV !== "production" &&\n        warn(\n        \'The "data" option should be a function \' +\n            "that returns a per-instance value in component " +\n            "definitions.",\n        vm\n        );\n\n    return parentVal;\n    }\n    return mergeDataOrFn(parentVal, childVal);\n}\nreturn mergeDataOrFn(parentVal, childVal, vm);\n};\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])])])]),s._v(" "),n("h2",{attrs:{id:"_3-vue-中如何创建一个非响应式对象"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-vue-中如何创建一个非响应式对象"}},[s._v("#")]),s._v(" 3. Vue 中如何创建一个非响应式对象")]),s._v(" "),n("h3",{attrs:{id:"vue-2-中实现方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue-2-中实现方式"}},[s._v("#")]),s._v(" Vue 2 中实现方式")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("方式一：将数据定义在 Vue 实例之外（即 export default 之外）,注意，这样定义的数据不能在 template 模板内使用，且此变量会被所有实例对象共享，当其中一个实例对象修改了此数据时，另外的实例对象的数据也会被修改，且此方式可能会导致内存泄露，需要谨慎使用。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  const test = {\n      //...\n  }\n\n  export default {\n      //...\n  }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("方式二：将数据定义在 created 声明周期钩子函数中，这样定义的数据可以在 template 中使用，但数据的定义被分在了两个地方。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("export default {\ndata() {\n    return {\n    // ... //一些属性\n    }\n},\n\ncreated() {\n    this.test = {\n    // ​···  //一些属性\n    }\n}\n// ··· //一些属性\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("方式三：通过 Object.defineProperty 设置目标对象的 configurable 属性为 false，此时可以使用 this.test 访问变量并可在 template 模板中使用。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("export default {\n  data() {\n      const data = {\n      test: {\n          // ... //一些属性\n      }\n\n      //··· // 其他属性\n      }\n\n      Object.defineProperty(data, 'test', {\n      configurable: false\n      })\n\n      return data\n  }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("方式四：使用 "),n("code",[s._v("Object.freeze()或Object.preventExtensions()或Object.seal()")]),s._v(" 对数据进行冻结，冻结之后此对象再也不能被修改了。这三个方法返回传递的对象，而不是创建一个被冻结的副本。但需要注意，这三种方法都只是浅冻结即只冻结一层,如果存在嵌套对象则深层对象仍然可以改变。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("export default {\ndata() {\n    return {\n    testData: Object.freeze({})\n    }\n}\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("ul",[n("li",[n("strong",[s._v("当被冻结对象改变时，重新调用 Object.freeze()赋值")])])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("updateTestData (newTestData) {\n  this.testData = Object.freeze(newBigData)\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("方式五：将数据定义在组件的自定义属性上，此时通过 "),n("code",[s._v("this.$options.testData")]),s._v(" 就可以正常访问数据,但此时的数据也是被定义在了两个地方，且会增加调用链，如果数据更改，则需要手动调用 this.$forceUpdate()才能使模板更新。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<template>\n  <div>{{ $options.testData.test }}</div>\n</template>\n<script>\nexport default {\n  // 自定义属性\n  testData: {\n    test: 'xxx'\n  },\n\n  data() {\n    return {}\n  },\n\n  methods: {\n    doSomething() {\n      return this.$options.testData\n    }\n  }\n}\n<\/script>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])])])]),s._v(" "),n("h3",{attrs:{id:"_3-2-vue3-中实现方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-vue3-中实现方式"}},[s._v("#")]),s._v(" 3.2 Vue3 中实现方式")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("在 Vue3 中，可以使用 markRaw 标记一个对象，使其永远不会转换为 proxy。返回对象本身,具体可参考 "),n("a",{attrs:{href:"https://v3.cn.vuejs.org/api/basic-reactivity.html#markraw",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),n("OutboundLink")],1),s._v("。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("const foo = markRaw({})\n\nconsole.log(isReactive(reactive(foo))) // false\n\n// 嵌套在其他响应式对象中时也可以使用\n\nconst bar = reactive({ foo })\n\nconsole.log(isReactive(bar.foo)) // false\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])])])]),s._v(" "),n("h2",{attrs:{id:"_4-vue-nexttick-实现原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-vue-nexttick-实现原理"}},[s._v("#")]),s._v(" 4. Vue nextTick 实现原理")]),s._v(" "),n("h3",{attrs:{id:"_4-1-nexttick-是什么-为什么要有这个概念的出现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-nexttick-是什么-为什么要有这个概念的出现"}},[s._v("#")]),s._v(" 4.1 nextTick 是什么，为什么要有这个概念的出现？")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("Vue 在更新 DOM 时是异步执行的，当监听到数据发生变化的时候不会立即去更新 DOM，而是开启一个异步更新任务队列，并缓存在同一事件循环中发生的所有数据变更，如果一直修改相同数据，异步操作队列还会进行去重，在同一事件循环中的所有数据变化完成之后再统一执行更新 DOM 操作;")])]),s._v(" "),n("li",[n("p",[s._v("这种做法带来的好处就是可以将多次数据更新合并成一次，减少操作 DOM 的次数，提高性能。")])]),s._v(" "),n("li",[n("p",[s._v("Vue.nextTick 是全局方法，vm.$nickTick 是实例方法，两者使用方式类似，不同的是 vm.$nickTick 会将回调的 this 自动绑定到调用它的实例上。")])])]),s._v(" "),n("h3",{attrs:{id:"_4-2-使用场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-使用场景"}},[s._v("#")]),s._v(" 4.2 使用场景")]),s._v(" "),n("p",[s._v("如果想要在修改数据后立刻得到更新后的 DOM 结构，可以使用 Vue.nextTick()，放在 nextTick 当中的操作不会立即执行，而是等数据更新、DOM 更新完成之后再执行，")]),s._v(" "),n("p",[s._v("第一个参数为：回调函数（可以获取最近的 DOM 结构）")]),s._v(" "),n("p",[s._v("第二个参数为：执行函数上下文")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("export default {\n  data() {\n    return {\n      msg: '哈哈哈哈'\n    }\n  },\n\n  created() {\n    this.$nextTick(() => {\n      // ...DOM 更新后做某些事\n    })\n  },\n\n  methods: {\n    test() {\n      // 修改数据\n      this.msg = 'changed'\n\n      // DOM 还没有更新\n      this.$nextTick(function() {\n        // DOM 现在更新了\n        // `this` 绑定到当前实例\n        console.log('新的值', this.msg)\n      })\n    }\n  }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br")])]),n("h3",{attrs:{id:"_4-3-执行过程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-执行过程"}},[s._v("#")]),s._v(" 4.3 执行过程")]),s._v(" "),n("p",[s._v("nextTick 提供了四种异步方法 Promise.then、MutationObserver、setImmediate、setTimeout(fn,0)，优先级由高到低")]),s._v(" "),n("p",[s._v("把回调函数放入 callbacks 等待执行，callbacks 也就是异步操作队列")]),s._v(" "),n("p",[s._v("将执行函数放到微任务或者宏任务中")]),s._v(" "),n("p",[s._v("事件循环到了微任务或者宏任务，执行函数依次执行 callbacks 中的回调")]),s._v(" "),n("h2",{attrs:{id:"_5-vue-组件之间通信的方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-vue-组件之间通信的方式"}},[s._v("#")]),s._v(" 5. Vue 组件之间通信的方式")]),s._v(" "),n("h3",{attrs:{id:"_5-1-props-父传子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-props-父传子"}},[s._v("#")]),s._v(" 5.1 props 父传子")]),s._v(" "),n("h3",{attrs:{id:"_5-2-emits-子传父"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-emits-子传父"}},[s._v("#")]),s._v(" 5.2 $emits 子传父")]),s._v(" "),n("h3",{attrs:{id:"_5-3-ref-父操作子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-ref-父操作子"}},[s._v("#")]),s._v(" 5.3 ref 父操作子")]),s._v(" "),n("h3",{attrs:{id:"_5-4-provide-inject-父子或祖孙"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-provide-inject-父子或祖孙"}},[s._v("#")]),s._v(" 5.4 provide/inject 父子或祖孙")]),s._v(" "),n("ul",[n("li",[s._v("provide/ inject 是 Vue2.2.0 新增的 api, 简单来说就是父组件中通过 provide 来提供变量, 然后再子组件中通过 inject 来注入变量。")])]),s._v(" "),n("p",[s._v("假设有三个组件: A.vue、B.vue、C.vue 其中 C 是 B 的子组件，B 是 A 的子组件")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// A.vue\n\n<template>\n<div>\n    <comB></comB>\n</div>\n</template>\n\n<script>\nimport comB from '../components/test/comB.vue'\n\nexport default {\nname: 'A',\n\nprovide: {\n    for: 'demo'\n},\n\ncomponents: {\n    comB\n}\n}\n<\/script>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  // B.vue\n\n  <template>\n  <div>\n      {{ demo }}\n      <comC></comC>\n  </div>\n  </template>\n\n  <script>\n  import comC from '../components/test/comC.vue'\n\n  export default {\n  name: 'B',\n\n  inject: ['for'],\n\n  data() {\n      return {\n      demo: this.for\n      }\n  },\n  components: {\n      comC\n  }\n  }\n  <\/script>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  // C.vue\n\n  <template>\n  <div>\n      {{ demo }}\n  </div>\n  </template>\n\n  <script>\n  export default {\n  name: 'C',\n  inject: ['for'],\n  data() {\n      return {\n      demo: this.for\n      }\n  }\n  }\n  <\/script>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("h3",{attrs:{id:"_5-5-eventbus-事件总线-兄弟组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-eventbus-事件总线-兄弟组件"}},[s._v("#")]),s._v(" 5.5 eventBus 事件总线 兄弟组件")]),s._v(" "),n("p",[s._v("Vue3 不再提供$on 与 emit 函数，Vue 实例不再实现事件接口，"),n("a",{attrs:{href:"https://v3-migration.vuejs.org/breaking-changes/events-api.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("具体可查询官网"),n("OutboundLink")],1),s._v("。Vue 官方已不推荐使用全局事件总线在组件之间通信，如果想用，可以采用其他库来实现，例如 "),n("a",{attrs:{href:"https://github.com/developit/mitt",target:"_blank",rel:"noopener noreferrer"}},[s._v("mitt.js"),n("OutboundLink")],1)]),s._v(" "),n("h3",{attrs:{id:"_5-6-children-parent-父子之间传值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-6-children-parent-父子之间传值"}},[s._v("#")]),s._v(" 5.6 $children $parent 父子之间传值")]),s._v(" "),n("p",[s._v("在#app 上拿$parent得到的是new Vue()的实例，在这实例上再拿$parent 得到的是 undefined，而在最底层的子组件拿$children 是个空数组。$children 的值是数组，而$parent 是个对象。")]),s._v(" "),n("h3",{attrs:{id:"_5-7-attrs-listeners-父子或祖孙"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-7-attrs-listeners-父子或祖孙"}},[s._v("#")]),s._v(" 5.7 $attrs $listeners 父子或祖孙")]),s._v(" "),n("p",[n("strong",[s._v("Vue3 中已删除 $listeners 对象，事件监听器现在只是属性，以 on 为前缀，因此是 $attrs 对象的一部分，")])]),s._v(" "),n("h3",{attrs:{id:"_5-8-vuex"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-8-vuex"}},[s._v("#")]),s._v(" 5.8 Vuex")]),s._v(" "),n("h3",{attrs:{id:"_5-9-localstorage、sessionstorage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-9-localstorage、sessionstorage"}},[s._v("#")]),s._v(" 5.9 localStorage、sessionStorage")]),s._v(" "),n("h3",{attrs:{id:"参考链接"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[s._v("#")]),s._v(" 参考链接")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://juejin.cn/post/6844903887162310669",target:"_blank",rel:"noopener noreferrer"}},[s._v("掘金高赞文章"),n("OutboundLink")],1)])]),s._v(" "),n("h2",{attrs:{id:"_6-函数的防抖和节流"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-函数的防抖和节流"}},[s._v("#")]),s._v(" 6. 函数的防抖和节流")]),s._v(" "),n("h3",{attrs:{id:"_6-1-什么是防抖、节流"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-什么是防抖、节流"}},[s._v("#")]),s._v(" 6.1 什么是防抖、节流？")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("防抖函数的作用就是控制函数在一定时间内的执行次数。防抖意味着 N 秒内函数只会被执行一次（最后一次），如果 N 秒内再次被触发，则重新计算延迟时间。")])]),s._v(" "),n("li",[n("p",[s._v("节流函数的作用是规定一个单位时间，在这个单位时间内最多只能触发一次函数执行，如果这个单位时间内多次触发函数，只能有一次生效。")])]),s._v(" "),n("li",[n("p",[s._v("函数防抖关注一定时间连续触发的事件只在最后执行一次，而函数节流侧重于间隔时间执行,在一个单位时间内，只能触发一次函数,如果这个单位时间内触发多次函数，只有一次生效。")])]),s._v(" "),n("li",[n("p",[s._v("节流防抖就好比乘电梯，比如 delay 是 10 秒，防抖就是电梯每进来一个人就要等 10 秒再运行，而节流就是电梯保证每 10 秒可以运行一次。")])])]),s._v(" "),n("h3",{attrs:{id:"_6-2-常见使用场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-常见使用场景"}},[s._v("#")]),s._v(" 6.2 常见使用场景")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("防抖的应用场景：(防抖可能用于无法预知的用户主动行为，如用户输入内容去服务端动态搜索结果。用户打字的速度等是无法预知的，具有非规律性。)")])]),s._v(" "),n("li",[n("p",[s._v("搜索框搜索输入。只需用户最后一次输入完，再发送请求")])]),s._v(" "),n("li",[n("p",[s._v("手机号、邮箱验证输入检测")])]),s._v(" "),n("li",[n("p",[s._v("搜索联想功能")])]),s._v(" "),n("li",[n("p",[s._v("窗口大小 Resize。只需窗口调整完成后，计算窗口大小。防止重复渲染。")])]),s._v(" "),n("li",[n("p",[s._v("节流的应用场景：(节流可能用于一些非用户主动行为或者可预知的用户主动行为，如用户滑动商品橱窗时发送埋点请求、滑动固定的高度是已知的逻辑，具有规律性。)")])]),s._v(" "),n("li",[n("p",[s._v("滚动加载，加载更多或滚到底部监听")])]),s._v(" "),n("li",[n("p",[s._v("高频点击提交，表单重复提交")])])]),s._v(" "),n("h3",{attrs:{id:"_6-3-用法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-用法"}},[s._v("#")]),s._v(" 6.3 用法")]),s._v(" "),n("ul",[n("li",[s._v("防抖")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("/**\n  * @description 函数防抖\n  * @param {fn : function} 回调执行函数\n  * @param {delay : number} 延迟时间\n  * @return function\n*/\n\nexport function debounce(fn, delay = 200) {\n  let timer\n\n  return function() {\n    let that = this\n\n    let args = arguments\n\n    timer && clearTimeout(timer)\n\n    timer = setTimeout(function() {\n      fn.apply(that, args)\n    }, delay)\n  }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("ul",[n("li",[s._v("节流")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("/**\n  * @description 函数节流\n  * @param {fn : function} 回调执行函数\n  * @param {delay : number} 延迟时间\n  * @return function\n*/\n\nexport function throttle(fn, delay = 200) {\n\n  let timer\n  return function() {\n    let that = this\n\n    let args = arguments\n\n    if (timer) {\n      return\n    }\n\n    timer = setTimeout(function() {\n      fn.apply(that, args)\n\n      timer = null\n    }, delay)\n  }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br")])]),n("h3",{attrs:{id:"参考链接-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考链接-2"}},[s._v("#")]),s._v(" 参考链接")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://juejin.cn/post/6844903669389885453",target:"_blank",rel:"noopener noreferrer"}},[s._v("掘金高赞文章"),n("OutboundLink")],1)]),s._v(" "),n("h2",{attrs:{id:"_7-vue-中计算属性-computed-和-watch-的区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-vue-中计算属性-computed-和-watch-的区别"}},[s._v("#")]),s._v(" 7. Vue 中计算属性 computed 和 watch 的区别")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("computed")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("computed 会被缓存，不支持异步。")])]),s._v(" "),n("li",[n("p",[s._v("注意，computed 在****响应式****的依赖项发生变化时会触发 getter,前提是 computed 里的值必须要在 template 模板里使用，如果在模板中没有使用 computed 里的值，该计算属性中的 getter 是不会触发的。")])]),s._v(" "),n("li",[n("p",[s._v("如果使用 v-model 绑定 computed 计算后的值,再修改这个计算后的值时，会依次触发 setter --\x3e getter(不一定会触发) --\x3e updated，但并不意味着所有的修改 computed 计算后的值的操作都会依次执行这个顺序，只有在 setter 中修改了 computed 计算所依赖的响应式数据时才会触发 getter。")])])])]),s._v(" "),n("li",[n("p",[s._v("watch")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("watch 不会被缓存，可以支持异步操作。")])]),s._v(" "),n("li",[n("p",[s._v("Vue 实例会在实例化的时候调用 $watch(),")])])])])]),s._v(" "),n("h2",{attrs:{id:"_8-元素透明实现方式-有何区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8-元素透明实现方式-有何区别"}},[s._v("#")]),s._v(" 8. 元素透明实现方式，有何区别？")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("方式一：使用 opacity 设置元素的不透明度，取值从 0.0 到 1.0，值越小，越透明。")])]),s._v(" "),n("li",[n("p",[s._v("方式二：使用 rgba 设置元素的颜色，其中 a 为元素的透明度，取值从 0.0 到 1.0，0.0 表示完全透明，1.0 为完全不透明，不可继承。")])])]),s._v(" "),n("p",[n("strong",[s._v("两者都是 css3 新增的属性，opacity 会继承父元素的 opacity 属性，且子元素设置的 opacity 属性只有再小于或等于父元素的 opacity 属性值时才会生效，否则不生效。rgba 属性则只会对当前设置的元素本身生效，不会对子元素产生影响。")])]),s._v(" "),n("h2",{attrs:{id:"_9-两个一维数组合并为一个二维数组"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_9-两个一维数组合并为一个二维数组"}},[s._v("#")]),s._v(" 9. 两个一维数组合并为一个二维数组")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("let data = ['哈哈哈','嘿嘿嘿','哎呦喂']\nlet array = ['3','4','5']\n\ndata = data.map((currentValue,index)=>[currentValue,array[index]])\n\n//方式二\ndata = Array.from(data,(item,index)=> [item,array[index]])\n\nconsole.log(JSON.stringify(data))\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);