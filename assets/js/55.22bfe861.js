(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{424:function(s,e,t){"use strict";t.r(e);var n=t(7),a=Object(n.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"从0到1实现一个属于自己的vscode插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从0到1实现一个属于自己的vscode插件"}},[s._v("#")]),s._v(" 从0到1实现一个属于自己的VScode插件")]),s._v(" "),e("p",[s._v("VScode是微软推出的一款轻量级代码编辑器，也是前端开发中常用的编辑器，其设计思想就是拓展性，VScode的大部分功能都可以自定义实现，通过 "),e("code",[s._v("Extension API")]),s._v("扩展实现，很多VScode的核心功能就是这样实现的，我们自然也可以利用VScode开放API进行扩展功能的开发，从而解决我们日常开发中的一些问题，提高开发效率。\n通过本文讲解，我们可以快速了解如何开发一个VS Code插件，实际操作起来还是挺简单的，遇到不熟悉或者疑问之处可以查看官方文档，文档内容写的十分全面。\n")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),e("p",[s._v("文章内容若有不足，欢迎指正。")])]),s._v(" "),e("h2",{attrs:{id:"_1-vscode插件是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-vscode插件是什么"}},[s._v("#")]),s._v(" 1. VScode插件是什么？")]),s._v(" "),e("p",[s._v("VScode是微软推出的一款轻量级代码编辑器，免费、开源而且功能强大，也是前端开发中常用的编辑器，我们作为一个前端开发者，对于此编辑器自然不陌生。在使用时我们经常会安装一些插件来协助我们进行开发，这些插件就是利用VScode给我们提供的一些开放的API的基础上进行扩展功能的开发，从而解决我们日常开发中的一些问题，提高开发效率。VScode 插件其实就是类似于一个npm包的"),e("code",[s._v("vsix")]),s._v("文件。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://gujunling.github.io/images/e442fe36174a4f48ac35ea6e878d5d3b.png",alt:"vscode插件"}})]),s._v(" "),e("p",[s._v("vscode插件开发的官方文档为："),e("a",{attrs:{href:"https://code.visualstudio.com/api",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://code.visualstudio.com/api"),e("OutboundLink")],1)]),s._v(" "),e("h2",{attrs:{id:"_2-vscode插件可以做什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-vscode插件可以做什么"}},[s._v("#")]),s._v(" 2. VScode插件可以做什么？")]),s._v(" "),e("p",[s._v("VScode插件几乎可以自定义我们的VScode编辑器的任意功能，例如：")]),s._v(" "),e("ul",[e("li",[s._v("自定义命令、快捷键、菜单;")]),s._v(" "),e("li",[s._v("自定义跳转、自动补全、悬浮提示")]),s._v(" "),e("li",[s._v("自定义颜色、图标主题")]),s._v(" "),e("li",[s._v("代码高亮、语法高亮、检查、格式化等")]),s._v(" "),e("li",[s._v("扩展工作台")]),s._v(" "),e("li",[s._v("编辑器相关(修改编辑器语言、通知、状态栏等)")]),s._v(" "),e("li",[s._v("git 功能页面可视化")]),s._v(" "),e("li",[s._v("。。。。。。")])]),s._v(" "),e("h2",{attrs:{id:"_3-如何创建一个属于自己的插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-如何创建一个属于自己的插件"}},[s._v("#")]),s._v(" 3. 如何创建一个属于自己的插件")]),s._v(" "),e("p",[s._v("上文已经简单阐述了 VScode插件是什么以及可以做什么，下面我们就来实际操作一下，做一个行动上巨人。")]),s._v(" "),e("h3",{attrs:{id:"_3-1-环境搭建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-环境搭建"}},[s._v("#")]),s._v(" 3.1 环境搭建")]),s._v(" "),e("p",[s._v("微软官方给我们提供了脚手架，通过这个脚手架我们可以快速的搭建一个简单的VScode插件。")]),s._v(" "),e("p",[e("strong",[s._v("因为npm官网安装依赖可能会有点慢，也可能安装失败，所以推荐使用阿里或腾讯镜像源仓库，具体配置命令如下：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// 设置依赖安装镜像源为淘宝镜像源(使用者较多，推荐)\nnpm config set registry https://registry.npmmirror.com/\n\n\n// 设置依赖安装镜像源为腾讯内部镜像源(不需要腾讯内网也能正常访问)\nnpm config set registry https://mirrors.tencent.com/npm/\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("通过执行下方命令安装微软官方脚手架:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("npm i -g yo generator-code\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("上述命令其实安装了两个包（yo和generator-code)，这两个包用途如下：")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("yo模块全局安装后就安装了Yeoman，Yeoman是通用型项目脚手架工具，可以根据一套模板，生成一个对应的项目结构")])]),s._v(" "),e("li",[e("p",[s._v("generator-code模块是VS Code扩展生成器，与yo配合使用才能构建项目。")])])]),s._v(" "),e("p",[s._v("上述命令执行后出现如下页面表示安装成功，可以继续执行后续操作")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://gujunling.github.io/images/065b7b2bf2d742f59e5bba6ccef86096.png",alt:"安装脚手架成功页面"}})]),s._v(" "),e("h3",{attrs:{id:"_3-2-使用脚手架搭建一个基础的vscode插件模版"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-使用脚手架搭建一个基础的vscode插件模版"}},[s._v("#")]),s._v(" 3.2 使用脚手架搭建一个基础的VScode插件模版")]),s._v(" "),e("p",[s._v("在本地的工作目录中执行下方命令使用脚手架创建插件模版项目")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("yo code\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("创建项目会开启一个交互命令行，需要先选择插件类型，控制键盘的方向键的上下来决定选择什么类型，按 Enter 键确认")])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://gujunling.github.io/images/20b6a89d9e9941a3aee01821b980afd5.png",alt:"选择插件类型"}})]),s._v(" "),e("p",[s._v("根据自己的实际需求来选择你想创建的插件类型，目前支持以下几种类型：")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("New Extension (TypeScript) ：ts 语法的项目，基础版，内置了hello world的命令")])]),s._v(" "),e("li",[e("p",[s._v("New Extension (JavaScript) : js 语法的项目，基础版，内置了hello world的命令")])]),s._v(" "),e("li",[e("p",[s._v("New Color Theme ：主题项目，内置了主题，可用来自定义主题")])]),s._v(" "),e("li",[e("p",[s._v("New Language Support：语言支持项目，内置了语法支持配置，可用来支持特殊语言")])]),s._v(" "),e("li",[e("p",[s._v("New Code Snippets：代码片段项目，内置了代码片段配置，可用来配置代码片段，输入触发字符，快速生成代码片段")])]),s._v(" "),e("li",[e("p",[s._v("New Keymap：快捷键项目，内置了快捷键配置，可用来自定义快捷键行为")])]),s._v(" "),e("li",[e("p",[s._v("New Extension Pack：插件集合项目，内置了插件集合配置，可用于定制插件集，达到快速安装一组插件")])]),s._v(" "),e("li",[e("p",[s._v("New Language Pack (Localization)：目前官方文档暂未查到localizations贡献的场景点")])]),s._v(" "),e("li",[e("p",[s._v("New Web Extension (TypeScript) : ts语法的项目， 在 VS Code for Web (包括vscode.dev和github.dev) 以及桌面和GitHub Codespaces等服务将支持该扩展")])]),s._v(" "),e("li",[e("p",[s._v("New Web Extension (JavaScript) : js 语法的项目,在 VS Code for Web (包括vscode.dev和github.dev) 以及桌面和GitHub Codespaces等服务将支持该扩展")])])]),s._v(" "),e("p",[e("strong",[s._v("web扩展可参考官方文档链接 "),e("a",{attrs:{href:"https://code.visualstudio.com/api/extension-guides/web-extensions",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://code.visualstudio.com/api/extension-guides/web-extensions"),e("OutboundLink")],1)])]),s._v(" "),e("p",[s._v("使用脚手架创建模版项目步骤详解如下图所示：")]),s._v(" "),e("p",[e("strong",[s._v("注意：插件名必须全小写，且不能有空格")])]),s._v(" "),e("p",[s._v("选择不同的插件类型时，下方交互命令行选择填写的条例不同，此处仅以创建一个ts模版项目和创建一个快捷键项目为例，其他的插件类型的大同小异，都是一些前端开发中使用到的配置，看一下就知道要怎么选择了。")]),s._v(" "),e("ul",[e("li",[s._v("使用脚手架创建一个ts的模版项目")])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://gujunling.github.io/images/b5f28f6dea6c4df7be32c4ac123b29d7.png",alt:"使用脚手架创建一个ts的模版项目详解"}})]),s._v(" "),e("ul",[e("li",[s._v("使用脚手架创建一个插件类型为快捷键模版项目")])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://gujunling.github.io/images/5cc8e5ff03c64917b63d1a6c55fb9d65.png",alt:"使用脚手架创建一个插件类型为快捷键模版项目详解"}})]),s._v(" "),e("h3",{attrs:{id:"_3-3-package-json文件详解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-package-json文件详解"}},[s._v("#")]),s._v(" 3.3 package.json文件详解")]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("字段名")]),s._v(" "),e("th",[s._v("说明")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("name")]),s._v(" "),e("td",[s._v("插件名（要求全小写，无空格）")])]),s._v(" "),e("tr",[e("td",[s._v("displayName")]),s._v(" "),e("td",[s._v("发布到 VS Code 应用市场名称")])]),s._v(" "),e("tr",[e("td",[s._v("version")]),s._v(" "),e("td",[s._v("插件版本")])]),s._v(" "),e("tr",[e("td",[s._v("publisher")]),s._v(" "),e("td",[s._v("发布者")])]),s._v(" "),e("tr",[e("td",[s._v("engines")]),s._v(" "),e("td",[s._v("vscode或其他环境依赖版本的要求")])]),s._v(" "),e("tr",[e("td",[s._v("categories")]),s._v(" "),e("td",[s._v("扩展类别")])]),s._v(" "),e("tr",[e("td",[s._v("contributes")]),s._v(" "),e("td",[s._v("插件贡献点，比如命令、快捷键、菜单等")])]),s._v(" "),e("tr",[e("td",[s._v("activationEvents")]),s._v(" "),e("td",[s._v("插件触发动作，如在打开某种语言的文件时、当某个命令被触发时")])])])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://gujunling.github.io/images/04ebda0e11a14b2bb9946915fc9b9768.png",alt:"package.json文件详解"}})]),s._v(" "),e("p",[s._v("执行命令后生成的模板项目的package.json文件如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('{\n  "name": "ggg-test",\n  "displayName": "ggg-test",\n  "description": "哈哈哈哈，一个小demo",\n  "version": "0.0.1",\n  "engines": {\n    "vscode": "^1.85.0"\n  },\n  "categories": [\n    "Other"\n  ],\n  "activationEvents": [],\n  "main": "./dist/extension.js",\n  "contributes": {\n    "commands": [\n      {\n        "command": "ggg-test.helloWorld",\n        "title": "Hello World"  \n      }\n    ]\n  }\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br")])]),e("h4",{attrs:{id:"_3-3-1-activationevents-配置项详解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1-activationevents-配置项详解"}},[s._v("#")]),s._v(" 3.3.1 activationEvents 配置项详解")]),s._v(" "),e("p",[s._v("activationEvents 配置项配置插件的激活数组，即在什么情况下插件会被激活，目前支持以下8种配置：")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("onLanguage： 当打开解析为某种语言的文件时触发")])]),s._v(" "),e("li",[e("p",[s._v("onCommand： 当调用对应命令时触发")])]),s._v(" "),e("li",[e("p",[s._v("onDebug： 在 debug 调试会话开始前，将发出此激活事件并激活感兴趣的扩展")])]),s._v(" "),e("li",[e("p",[s._v("onDebugInitialConfigurations： 在 debug 初始化配置之前触发")])]),s._v(" "),e("li",[e("p",[s._v("onDebugResolve： 在 debug 设置处理完之前触发")])]),s._v(" "),e("li",[e("p",[s._v("workspaceContains： 当打开文件夹并且该文件夹至少包含一个与glob 模式匹配的文件时触发")])]),s._v(" "),e("li",[e("p",[s._v("onFileSystem：当读取特定类型或协议中的文件或文件夹时触发")])]),s._v(" "),e("li",[e("p",[s._v("onView： 每当 VS Code 侧边栏中展开指定 id 的视图时触发，并激活感兴趣的扩展（扩展或源代码管理是内置视图的示例）")])]),s._v(" "),e("li",[e("p",[s._v("onUri： 在基于 vscode 或 vscode-insiders 协议的 url 打开时触发")])]),s._v(" "),e("li",[e("p",[s._v("onWebviewPanel： 每当 VS Code 需要恢复具有匹配的webview时触发，并且将激活感兴趣的扩展 viewType")])]),s._v(" "),e("li",[e("p",[s._v("onCustomEditor: 需要创建具有匹配的自定义编辑器时触发")])]),s._v(" "),e("li",[e("p",[s._v("onAuthenticationRequest: 当扩展请求具有匹配的身份验证会话（通过 API）时触发。注意：从 VS Code 1.74.0 开始，您的扩展提供的身份验证提供程序不需要相应的onAuthenticationRequest激活事件声明来激活您的扩展。")])]),s._v(" "),e("li",[e("p",[s._v("onStartupFinished: 在VS Code 启动后一段时间触发，类似于 * ，但不会减慢 VS Code 的启动速度，")])]),s._v(" "),e("li",[e("p",[s._v("*: 在启动 VS Code 时触发，为了保证良好的用户体验，非必须情况下不建议使用此配置")])])]),s._v(" "),e("p",[e("strong",[s._v("注意：一个扩展可以监听多个激活事件")])]),s._v(" "),e("p",[e("strong",[s._v("注意：扩展 "),e("code",[s._v("必须")]),s._v(" "),e("code",[s._v("activate()")]),s._v("从其主模块导出一个函数，并且当发出任何指定的激活事件时，VS Code "),e("code",[s._v("仅会调用该函数一次")]),s._v("。此外，扩展应该 "),e("code",[s._v("deactivate()")]),s._v("从其主模块导出一个函数，以便在 VS Code 关闭时执行清理任务。如果清理过程是异步的，则扩展必须返回 Promise 。如果清理同步运行，则 "),e("code",[s._v("deactivate()")]),s._v("扩展可能会返回 "),e("code",[s._v("undefined")]),s._v("。"),e("code",[s._v("deactivate()")])])]),s._v(" "),e("h4",{attrs:{id:"_3-3-2-contributes-贡献点-配置详解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-contributes-贡献点-配置详解"}},[s._v("#")]),s._v(" 3.3.2 contributes(贡献点)配置详解")]),s._v(" "),e("p",[s._v("contributes 配置项是整个插件的贡献点，表明这个插件有什么功能。")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("breakpoints: 断点")])]),s._v(" "),e("li",[e("p",[s._v("colors: 主题颜色")])]),s._v(" "),e("li",[e("p",[s._v("commands: 命令，通过 control + shift + p 打开命令窗口进行输入来实现的。")])]),s._v(" "),e("li",[e("p",[s._v("configuration: 通过这个配置项我们可以设置一个属性，这个属性可以在vscode的settings.json中设置，然后在插件工程中可以读取用户设置的这个值，进行相应的逻辑。")])]),s._v(" "),e("li",[e("p",[s._v("configurationDefaults: 配置可以在 setting.json 文件中配置的字段")])]),s._v(" "),e("li",[e("p",[s._v("customEditors: 自定义编辑器")])]),s._v(" "),e("li",[e("p",[s._v("debuggers: 提供一个调试器")])]),s._v(" "),e("li",[e("p",[s._v("grammars: 可以在这个配置项里设置描述语言的语法文件的路径，vscode可以根据这个语法文件来自动实现语法高亮功能")])]),s._v(" "),e("li",[e("p",[s._v("icons: 按 ID 提供新图标以及默认图标")])]),s._v(" "),e("li",[e("p",[s._v("iconThemes:  icon主题色")])]),s._v(" "),e("li",[e("p",[s._v("jsonValidation: 为特定类型的 json 文件提供验证架构")])]),s._v(" "),e("li",[e("p",[s._v("keybindings:  快捷键绑定")])]),s._v(" "),e("li",[e("p",[s._v("languages: 设置语言特点，包括语言的后缀等")])]),s._v(" "),e("li",[e("p",[s._v("menus: \t自定义编辑器菜单，包括右键菜单、头部菜单等")])]),s._v(" "),e("li",[e("p",[s._v("problemMatchers: 问题匹配器模式")])]),s._v(" "),e("li",[e("p",[s._v("problemPatterns: 问题匹配器中使用的命名问题模式")])]),s._v(" "),e("li",[e("p",[s._v("productIconThemes: 产品图标主题")])]),s._v(" "),e("li",[e("p",[s._v("resourceLabelFormatters: 资源标签格式化程序，指定如何在工作台中的任何位置显示 URI")])]),s._v(" "),e("li",[e("p",[s._v("semanticTokenModifiers: 新的语义标记修饰符，可以通过主题规则突出显示")])]),s._v(" "),e("li",[e("p",[s._v("semanticTokenScopes: 语义标记类型和修饰符以及范围之间的映射，作为后备或支持特定于语言的主题")])]),s._v(" "),e("li",[e("p",[s._v("semanticTokenTypes: 可以通过主题规则突出显示的新语义标记类型")])]),s._v(" "),e("li",[e("p",[s._v("snippets 特定语言的片段，设置语法片段相关的路径")])]),s._v(" "),e("li",[e("p",[s._v("submenus: 子菜单作为可以贡献菜单项的占位符，子菜单要求在父菜单中显示 label")])]),s._v(" "),e("li",[e("p",[s._v("taskDefinitions: 定义一个对象文字结构，该结构允许唯一地标识系统中的贡献任务")])]),s._v(" "),e("li",[e("p",[s._v("terminal: 终端")])]),s._v(" "),e("li",[e("p",[s._v("themes 颜色主题")])]),s._v(" "),e("li",[e("p",[s._v("typescriptServerPlugins: 提供 TypeScript 服务器插件，增强 VS Code 的 JavaScript 和 TypeScript 支持")])]),s._v(" "),e("li",[e("p",[s._v("views: 配置活动栏对应的view视图")])]),s._v(" "),e("li",[e("p",[s._v("viewsContainers: 可以贡献自定义视图的视图容器")])]),s._v(" "),e("li",[e("p",[s._v("viewsWelcome: 引导页，向自定义视图贡献欢迎内容")])]),s._v(" "),e("li",[e("p",[s._v("walkthroughs: 演练由标题、描述、ID 和一系列步骤组成。此外，还可以设置 when 条件来根据上下文键隐藏或显示演练。")])])]),s._v(" "),e("h3",{attrs:{id:"_3-4-extension-js文件详解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-extension-js文件详解"}},[s._v("#")]),s._v(" 3.4 extension.js文件详解")]),s._v(" "),e("p",[e("code",[s._v("extension.js")]),s._v("是插件工程的入口文件，即 "),e("code",[s._v("package.json")]),s._v("中"),e("code",[s._v("main")]),s._v("字段对应的文件(文件名可根据自己需要更改，只需要保证和package.json中main字段对应即可)，当插件被激活，即触发"),e("code",[s._v("package.json")]),s._v("中的"),e("code",[s._v("activationEvents")]),s._v("配置项时，"),e("code",[s._v("extension.js")]),s._v("文件开始执行。")]),s._v(" "),e("p",[e("code",[s._v("extension.js")]),s._v("文件将导出两个方法："),e("code",[s._v("activate")]),s._v("和"),e("code",[s._v("deactivate")]),s._v("，其执行时机如下所示：")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("activate: 插件被激活时执行的函数")])]),s._v(" "),e("li",[e("p",[s._v("deactivate: 插件被销毁时调用的方法，比如释放内存等")])])]),s._v(" "),e("p",[s._v("在 "),e("code",[s._v("extension.js")]),s._v("中对需要的功能进行注册，主要使用"),e("code",[s._v("vscode.commands.register...")]),s._v("相关的api，来为"),e("code",[s._v("package.json")]),s._v("中的"),e("code",[s._v("contributes")]),s._v("配置项中的事件绑定方法或者监听器。\n"),e("code",[s._v("vscode.commands.register...")]),s._v("相关的api主要有：")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("vscode.commands.registerCommand()  注册命令")])]),s._v(" "),e("li",[e("p",[s._v("vscode.languages.registerCompletionItemProvider()   代码补全")])]),s._v(" "),e("li",[e("p",[s._v("vscode.languages.registerCodeActionsProvider() 注册一个代码操作提供者")])]),s._v(" "),e("li",[e("p",[s._v("vscode.languages.registerCodeLensProvider()")])]),s._v(" "),e("li",[e("p",[s._v("vscode.languages.registerHoverProvider()  代码悬浮提示")])])]),s._v(" "),e("p",[e("code",[s._v("vscode.commands.registerCommand")]),s._v("用于注册命令，"),e("code",[s._v("ggg-test.helloWorld")]),s._v("为命令ID，需要与 "),e("code",[s._v("package.json")]),s._v("文件中的 "),e("code",[s._v("contributes.commands")]),s._v("数组中的 "),e("code",[s._v("command")]),s._v("后的配置一致，第二个参数为一个回调函数，当触发该命令时，弹出提示框。")]),s._v(" "),e("p",[s._v("执行命令后生成的模板项目的extension.js文件如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// 引入 vscode 核心库，提供了开发插件所需的大部分 api\nimport * as vscode from 'vscode';\n\n// 当插件被激活触发\nexport async function activate(context: vscode.ExtensionContext) {\n\n\tconsole.log('Congratulations, your extension \"ggg-test\" is now active!');\n\n\t// 调用vscode注册命令API，注册了一个名（命令唯一标识）为 ggg-test.helloWorld的命令\n  // 注意，此处注册的命令必须和 package.json文件中的 contributes.commands数组中的 command 命令配置的一致\n\tlet disposable = vscode.commands.registerCommand('ggg-test.helloWorld', () => {\n\t\t// 执行命令，会在右下角展示提示信息\n\t\tvscode.window.showInformationMessage('Hello World from ggg-test!');\n\t});\n    // 事件入栈\n\tcontext.subscriptions.push(disposable);\n}\n\n// 当插件停用时触发\nexport function deactivate() {}\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br")])]),e("h4",{attrs:{id:"_3-4-1-写一个简单的小弹窗提示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-1-写一个简单的小弹窗提示"}},[s._v("#")]),s._v(" 3.4.1 写一个简单的小弹窗提示")]),s._v(" "),e("p",[s._v("extension.js文件如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// 引入 vscode 核心库，提供了开发插件所需的大部分 api\nimport * as vscode from 'vscode';\n// 引入  node 中的 os 模块，下面使用 platform 方法获取系统\nimport * as os from 'os';\n\nimport { exec } from 'child_process';\n\n// 当插件被激活触发\nexport async function activate(context: vscode.ExtensionContext) {\n\n\tconsole.log('Congratulations, your extension \"ggg-test\" is now active!');\n\tconst key = 'sweetheartPlugin.showTip';\n\tconst showTip = vscode.workspace.getConfiguration().get(key);\n\tif (showTip) {\n\t\tconst result = await vscode.window.showInformationMessage('是否要打开作者个人网页？', '是', '否', '不再提示');\n\t\tif (result === '是') {\n\t\t\tconst commandOperation = os.platform() === 'win32' ? `start https://gujunling.github.io/` : `open https://gujunling.github.io/`;\n\t\t\texec(commandOperation);\n\t\t} else if (result === '不再提示') {\n\t\t\t//最后一个参数，为true时表示写入全局配置，为false或不传时则只写入工作区配置\n\t\t\tawait vscode.workspace.getConfiguration().update(key, false, true);\n\t\t}\n\t\t\n\t}\n\n\t// 调用vscode注册命令API，注册了一个名（命令唯一标识）为 ggg-test.helloWorld的命令\n    // 注意，此处注册的命令必须和 package.json文件中的 contributes.commands数组中的 command 命令配置的一致\n\tlet disposable = vscode.commands.registerCommand('ggg-test.helloWorld', () => {\n\t\t// 执行命令，会在右下角展示提示信息\n\t\tvscode.window.showInformationMessage('Hello World from ggg-test!');\n\t});\n    // 事件入栈\n\tcontext.subscriptions.push(disposable);\n}\n\n// 当插件停用时触发\nexport function deactivate() {}\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br")])]),e("p",[s._v("package.json文件如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('{\n  "name": "ggg-test",\n  "displayName": "ggg-test",\n  "description": "哈哈哈哈，一个小demo",\n  "version": "0.0.1",\n  "engines": {\n    "vscode": "^1.85.0"\n  },\n  "categories": [\n    "Other"\n  ],\n  "activationEvents": [],\n  "main": "./dist/extension.js",\n  "contributes": {\n    "commands": [\n      {\n        "command": "ggg-test.helloWorld",\n        "title": "Hello World"  \n      }\n    ],\n    "configuration": {\n    "title": "sweetheart-plugin",\n        "properties": {\n            "sweetheartPlugin.showTip": {\n                "type": "boolean",\n                "default": true,\n                "description": "是否在每次启动时显示提示？"\n            }\n        }\n    }\n  }\n}\n\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br")])]),e("h3",{attrs:{id:"_3-5-vscode插件生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-vscode插件生命周期"}},[s._v("#")]),s._v(" 3.5 VScode插件生命周期")]),s._v(" "),e("p",[s._v("VSCode的插件都运行在一个独立的进程里, 被称为 Extension Host, 它加载并运行插件, 让插件感觉自己好像在主进程里一样, 同时又严格限制插件的响应时间, 避免插件影响主界面进程。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://gujunling.github.io/images/dc4318c2fcc74eb7a9c027e21816e678.png",alt:""}})]),s._v(" "),e("ul",[e("li",[e("p",[s._v("1."),e("code",[s._v("activationEvents")]),s._v(":在"),e("code",[s._v("package.json")]),s._v("的"),e("code",[s._v("activationEvents")]),s._v("配置项中设置插件激活时机，这里设置的是"),e("code",[s._v("onCommand:ggg-test.helloWorld")]),s._v("，即输入命令"),e("code",[s._v("onCommand:ggg-test.helloWorld")]),s._v("时激活。")])]),s._v(" "),e("li",[e("p",[s._v("2."),e("code",[s._v("contributes")]),s._v("："),e("code",[s._v("package.json")]),s._v("中的"),e("code",[s._v("contributes")]),s._v("配置项表示这个插件增加了哪些功能，这里设置了"),e("code",[s._v("commands")]),s._v(",表示增加的命令，在这一项中声明了一个命令"),e("code",[s._v("ggg-test.helloWorld")]),s._v("。")])]),s._v(" "),e("li",[e("p",[s._v("3."),e("code",[s._v("Register")]),s._v(":在 "),e("code",[s._v("extension.js")]),s._v(" 文件中的 "),e("code",[s._v("activate(context)")]),s._v("方法中，使用"),e("code",[s._v("vscode.commands.registerCommand")]),s._v("()这一API为命令"),e("code",[s._v("ggg-test.helloWorld")]),s._v("绑定事件，绑定的事件为"),e("code",[s._v("vscode.window.showInformationMessage('Hello World from ggg-test!')")]),s._v("，即弹出弹框，显示 "),e("code",[s._v("Hello World from ggg-test!")]),s._v("。")])]),s._v(" "),e("li",[e("p",[s._v("4.在命令框中输入 "),e("code",[s._v("ggg-test.helloWorld")]),s._v("，此时插件被激活，进入"),e("code",[s._v("extension.js")]),s._v("中执行"),e("code",[s._v("activate()")]),s._v("方法，由于已经在"),e("code",[s._v("contributes")]),s._v("配置项中声明了命令"),e("code",[s._v("ggg-test.helloWorld")]),s._v(",所以在"),e("code",[s._v("activate()")]),s._v("方法中为该命令绑定一个事件，由于在命令框中输入了这个命令，所以命令绑定的事件立即被触发执行，所以在vscode的右下角弹出了弹出框。")])])]),s._v(" "),e("h3",{attrs:{id:"_3-6-发布插件到-vs-code-拓展商店"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-发布插件到-vs-code-拓展商店"}},[s._v("#")]),s._v(" 3.6 发布插件到 VS Code 拓展商店")]),s._v(" "),e("ul",[e("li",[e("ol",[e("li",[s._v("在本地安装 vsce(Visual Studio Code Extension)依赖")])])])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("npm i -g vsce\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[e("ol",{attrs:{start:"2"}},[e("li",[s._v("VS Code 使用 "),e("code",[s._v("Azure DevOps")]),s._v(" 作为其 Marketplace 服务。所以需要登录一下 "),e("code",[s._v("Azure")]),s._v("。登录后，如果之前没用过的话会要求创建一个组织，默认为邮箱前缀， "),e("a",{attrs:{href:"https://dev.azure.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Azure 网址"),e("OutboundLink")],1),s._v("，在 Azure上获取一个 access token ，在下面创建发布者时需要用到")])])])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://gujunling.github.io/images/4307478f47b14f629f18745a32cbb437.png",alt:""}})]),s._v(" "),e("p",[e("img",{attrs:{src:"https://gujunling.github.io/images/b5a5feedeebd4c4888ae5e4f9b75ff56.png",alt:""}})]),s._v(" "),e("ul",[e("li",[e("ol",{attrs:{start:"3"}},[e("li",[s._v("创建一个发布者")])])])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("vsce create-publisher (publisher name)\n// publisher name 为 package.json 中的 publisher字段的值\n// 执行后，会让输入 Personal Access Tokens\n// 将上面创建好的 Personal Access Tokens 输入\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("ul",[e("li",[e("ol",{attrs:{start:"4"}},[e("li",[s._v("登录刚才创建的发布者")])])])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("vsce login (publisher name)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[e("ol",{attrs:{start:"5"}},[e("li",[s._v("打包")])])])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("vsce package\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[e("ol",{attrs:{start:"6"}},[e("li",[s._v("发布")])])])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("vsce publish\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"_4-实现一个格式化-git-commit-message-的插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-实现一个格式化-git-commit-message-的插件"}},[s._v("#")]),s._v(" 4. 实现一个格式化 git Commit message 的插件")]),s._v(" "),e("p",[s._v("在我们的日常开发中，"),e("code",[s._v("git")]),s._v("相关操作是每天都要接触的，属于一个高频操作，我们或许会使用以下方式来提交我们的代码")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("git 原生命令")])]),s._v(" "),e("li",[e("p",[s._v("WebStorm 或 VS code 自带git工具")])]),s._v(" "),e("li",[e("p",[s._v("类似于 "),e("code",[s._v("sourceTree")]),s._v("之类的第三方工具")])]),s._v(" "),e("li",[e("p",[s._v("......")])])]),s._v(" "),e("p",[s._v("但根据不同公司的不同业务场景，代码提交格式也有不同的规范，我们手动操作不可避免的会出现问题，此时一个可以帮助我们搞定git 提交信息的插件就显得尤为重要了。")]),s._v(" "),e("h4",{attrs:{id:"_4-1-效果展示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-效果展示"}},[s._v("#")]),s._v(" 4.1 效果展示")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://static.cwoa.net/fc3aaddfb36041eaae548e445778ec91.gif",alt:"devops-commitizen.gif"}})]),s._v(" "),e("h4",{attrs:{id:"_4-2-插件获取"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-插件获取"}},[s._v("#")]),s._v(" 4.2 插件获取")]),s._v(" "),e("ul",[e("li",[s._v("插件目前已发布到 VS Code 插件应用市场，可通过在扩展商店中直接搜索 "),e("code",[s._v("devops-commitizen")]),s._v(" 获取")])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://gujunling.github.io/images/f05945693692467299b154afd0f1ba0f.png",alt:""}})]),s._v(" "),e("ul",[e("li",[s._v("可在 VS Code官方应用市场下载安装")])]),s._v(" "),e("p",[e("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=sweetheartjq.devops-commitizen",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://marketplace.visualstudio.com/items?itemName=sweetheartjq.devops-commitizen"),e("OutboundLink")],1)]),s._v(" "),e("ul",[e("li",[s._v("可通过github仓库下载打包之后的 "),e("code",[s._v("vsix")]),s._v(" 文件，目前最新版本为 "),e("code",[s._v("V1.1.1")]),s._v("，但 "),e("code",[s._v("vsix")]),s._v(" 文件不能直接拖入安装，只能从扩展的右上角选择 "),e("code",[s._v("Install from VSIX")]),s._v(" 来安装，github地址可在下方获取")])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://gujunling.github.io/images/e442fe36174a4f48ac35ea6e878d5d3b.png",alt:"devops-commitizen 插件"}})]),s._v(" "),e("h4",{attrs:{id:"_4-3-代码获取"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-代码获取"}},[s._v("#")]),s._v(" 4.3 代码获取")]),s._v(" "),e("p",[s._v("格式化 git Commit message 插件"),e("code",[s._v("devops-commitizen")]),s._v("代码已在github开源，有需要源码参考的可下载查看，若有不足之处，欢迎指正。")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/gujunling/devops-commitizen/",target:"_blank",rel:"noopener noreferrer"}},[s._v("devops-commitizen 插件github地址"),e("OutboundLink")],1)])]),s._v(" "),e("h2",{attrs:{id:"_5-参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-参考资料"}},[s._v("#")]),s._v(" 5. 参考资料")]),s._v(" "),e("ul",[e("li",[e("p",[e("a",{attrs:{href:"https://code.visualstudio.com/api",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),e("OutboundLink")],1)])]),s._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://www.jianshu.com/p/e642856f6044",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.jianshu.com/p/e642856f6044"),e("OutboundLink")],1)])]),s._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://cloud.tencent.com/developer/article/2200774",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://cloud.tencent.com/developer/article/2200774"),e("OutboundLink")],1)])])])])}),[],!1,null,null,null);e.default=a.exports}}]);