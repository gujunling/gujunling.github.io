(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{461:function(a,e,t){"use strict";t.r(e);var n=t(7),s=Object(n.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"maven-的使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maven-的使用"}},[a._v("#")]),a._v(" Maven 的使用")]),a._v(" "),e("h2",{attrs:{id:"maven-引入原因"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maven-引入原因"}},[a._v("#")]),a._v(" Maven 引入原因")]),a._v(" "),e("p",[a._v("在开发过程中我们需要引用各种 jar 包，尤其是比较大的工程，引用的 jar 包往往有几十个乃至上百个， 每用到一种 jar 包，都需要手动引入工程目录，而且经常会遇到 jar 包冲突，版本冲突。"),e("br"),a._v("\nMaven 能帮我们构建工程，管理 jar 包，编译代码，还能帮我们自动运行单元测试，打包，生成报表，甚至能帮我们部署项目，生成 Web 站点。")]),a._v(" "),e("h2",{attrs:{id:"maven-概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maven-概念"}},[a._v("#")]),a._v(" Maven 概念")]),a._v(" "),e("p",[a._v("Maven 是一个项目管理工具，它包含了一个项目对象模型 (POM：Project Object Model)，一组标准集合，一个项目生命周期(Project Lifecycle)，一个依赖管理系统(Dependency Management System)，和用来运行定义在生命周期阶段(phase)中插件(plugin)目标 (goal)的逻辑。")]),a._v(" "),e("h2",{attrs:{id:"maven-的下载安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maven-的下载安装"}},[a._v("#")]),a._v(" Maven 的下载安装")]),a._v(" "),e("h3",{attrs:{id:"maven-下载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maven-下载"}},[a._v("#")]),a._v(" Maven 下载")]),a._v(" "),e("p",[a._v("去 Maven 的官网下载 http://maven.apache.org/download.cgi")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://gujunling.github.io/images/f3515e4bfa724c828f9b4abadf400031.png",alt:""}})]),a._v(" "),e("h3",{attrs:{id:"maven-安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maven-安装"}},[a._v("#")]),a._v(" Maven 安装")]),a._v(" "),e("p",[a._v("Maven 的安装特别简单，在自己电脑上找一个不带中文字符的位置，将压缩包解压即可，解压即安装。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://gujunling.github.io/images/166d74b0f27745e68add0443dfb807c3.png",alt:""}})]),a._v(" "),e("h2",{attrs:{id:"maven-环境变量的配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maven-环境变量的配置"}},[a._v("#")]),a._v(" Maven 环境变量的配置")]),a._v(" "),e("p",[a._v("Maven 的环境变量的配置需要依赖于 java 环境，在配置 Maven 的坏境变量时首先要配置好 java 环境。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("    测试java环境变量是否配置好命令\n    java -version\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),a._v(" "),e("p",[e("img",{attrs:{src:"https://gujunling.github.io/images/3b8f0753f67e4c31b31c3f269d0a3021.png",alt:""}})]),a._v(" "),e("p",[a._v("配置系统变量 M2_HOME，选择此电脑右键---\x3e属性---\x3e高级系统设置---\x3e环境变量 ---\x3e在系统变量中选择新建---\x3e在变量名中输入 M2_HOME，在变量值中输入自己解压的 Maven 的路径。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://gujunling.github.io/images/bb9aebc105b24f2fa622382739ac128a.png",alt:""}})]),a._v(" "),e("p",[a._v("在 path 中追加配置，点击系统变量中的 path，选择新建，在输入框中输入")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("%M2_HOME%\\bin\n")])])]),a._v(" "),e("p",[e("img",{attrs:{src:"https://gujunling.github.io/images/c554d73346094cfba0cedccea85b4095.png",alt:""}})]),a._v(" "),e("p",[a._v("依次点击确定，直到窗口全部关闭。")]),a._v(" "),e("p",[a._v("测试 Maven 的环境变量配置是否成功,在命令行窗口，输入")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("mvn -v\n//出现maven的版本信息表示配置成功\n")])])]),a._v(" "),e("p",[e("img",{attrs:{src:"https://gujunling.github.io/images/4414ac4d07e04a5aa5f1c0971e0b15a6.png",alt:""}})]),a._v(" "),e("h2",{attrs:{id:"maven-仓库种类及关系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maven-仓库种类及关系"}},[a._v("#")]),a._v(" Maven 仓库种类及关系")]),a._v(" "),e("p",[a._v("本地仓库 ：用来存储从远程仓库或中央仓库下载的插件和 jar 包，项目使用一些插件或 jar 包， 优先从本地仓库查找。")]),a._v(" "),e("p",[a._v("远程仓库：如果本地需要插件或者 jar 包，如果本地仓库没有，默认去远程仓库下载。远程仓库可以在互联网内也可以在局域网内。")]),a._v(" "),e("p",[a._v("中央仓库 ：在 Maven 软件中内置一个远程仓库地址 http://repo1.maven.org/maven2 ，它是中央仓库，服务于整个互联网，它是由 Maven 团队自己维护，里面存储了非常全的 jar 包，包含了世界上大部分流行的开源项目构件。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://gujunling.github.io/images/d223eaa88c0d40418c29fe1d1efe27ea.png",alt:""}})]),a._v(" "),e("h2",{attrs:{id:"maven-常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maven-常用命令"}},[a._v("#")]),a._v(" Maven 常用命令")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("mvn clean //clean 是 maven 工程的清理命令，会删除 target 目录及内容，清除项目编译信息。\nmvn compile  //会生成target目录，将 src/main/java 下的文件编译为 class 文件输出到 target 目录下。\nmvn test   //在没有执行mvn compile 命令时，执行此命令，它也会生成target目录，然后执行src/test/java下的单元测试类。同时编译src/main/java下的文件。\nmvn package  //执行此命令对于 java 工程打成 jar 包，对于 web 工程打成 war 包。同时会完成上面的compile和test命令所完成的工作。\nmvn install  // 将 maven工程 打成 jar 包或 war 包发布到本地仓库。同时会执行上面几个命令的操作。\n")])])]),e("h2",{attrs:{id:"maven-生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maven-生命周期"}},[a._v("#")]),a._v(" Maven 生命周期")]),a._v(" "),e("p",[a._v("Maven 对项目构建过程分为三套相互独立的生命周期，请注意这里说的是“三套”，而且“相互独立”， 这三套生命周期分别是：")]),a._v(" "),e("p",[a._v("Clean Lifecycle 在进行真正的构建之前进行一些清理工作。 Default Lifecycle 构建的核心部分，编译，测试，打包，部署等等。 Site Lifecycle 生成项目报告，站点，发布站点。")]),a._v(" "),e("h2",{attrs:{id:"maven-概念模型图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maven-概念模型图"}},[a._v("#")]),a._v(" Maven 概念模型图")]),a._v(" "),e("p",[a._v("Maven 包含了一个项目对象模型 (Project Object Model)，一组标准集合，一个项目生命周期(Project Lifecycle)，一个依赖管理系统(Dependency Management System)，和用来运行定义在生命周期阶段 (phase)中插件(plugin)目标(goal)的逻辑。")]),a._v(" "),e("p",[a._v("项目对象模型 (Project Object Model) 一个 maven 工程都有一个 pom.xml 文件，通过 pom.xml 文件定义项目的坐标、项目依赖、项目信息、 插件目标等。")]),a._v(" "),e("p",[a._v("依赖管理系统(Dependency Management System) 通过 maven 的依赖管理对项目所依赖的 jar 包进行统一管理。")]),a._v(" "),e("p",[a._v("一个项目生命周期(Project Lifecycle) 使用 maven 完成项目的构建，项目构建包括：清理、编译、测试、部署等过程，maven 将这些 过程规范为一个生命周期。")]),a._v(" "),e("p",[a._v("一组标准集合 maven 将整个项目管理过程定义一组标准，比如：通过 maven 构建工程有标准的目录结构，有 标准的生命周期阶段、依赖管理有标准的坐标定义等。")]),a._v(" "),e("p",[a._v("插件(plugin)目标(goal) maven 管理项目生命周期过程都是基于插件完成的。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://gujunling.github.io/images/15de118a90b240ae97da00d49775a4e4.png",alt:""}})]),a._v(" "),e("h2",{attrs:{id:"idea-集成-maven-插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#idea-集成-maven-插件"}},[a._v("#")]),a._v(" idea 集成 Maven 插件")]),a._v(" "),e("p",[a._v("在打开项目的情况下依次选择---\x3eFile---\x3eSettings---\x3eBuild,Execution,Deployment---\x3eBuild Tools---\x3emaven")]),a._v(" "),e("p",[a._v("在没有打开项目的情况下选择---\x3eidea 启动界面下方的 Configure---\x3eSettings---\x3eBuild,Execution,Deployment---\x3eBuild Tools---\x3emaven")]),a._v(" "),e("p",[a._v("在 Maven home directory 中选择自己本地 Maven 的安装目录")]),a._v(" "),e("p",[a._v("在 User settings file 中选择本地 Maven 安装目录下的 conf 文件夹下的 settings.xml")]),a._v(" "),e("p",[a._v("Local repository 会自动检测本地仓库的位置，若无法检测出，则自己手动选择本地仓库位置。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://gujunling.github.io/images/1bc692309b89401db81cbeffade27223.png",alt:""}})]),a._v(" "),e("h2",{attrs:{id:"idea-创建基于-maven-的-web-工程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#idea-创建基于-maven-的-web-工程"}},[a._v("#")]),a._v(" idea 创建基于 Maven 的 web 工程")]),a._v(" "),e("ol",[e("li",[a._v("创建一个新的工程")])]),a._v(" "),e("p",[e("img",{attrs:{src:"https://gujunling.github.io/images/cfa50270b2cf4f46ae13a105f0d84978.png",alt:""}})]),a._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[a._v("选择 idea 提供好的 Maven 的 web 工程模板")])]),a._v(" "),e("p",[e("img",{attrs:{src:"https://gujunling.github.io/images/413af07380754460a354e344d8a2e66f.png",alt:""}})]),a._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[a._v("填写项目信息")])]),a._v(" "),e("p",[e("img",{attrs:{src:"https://gujunling.github.io/images/910a8789c3494727b4a6033b479a7e34.png",alt:""}})]),a._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[a._v("点击 next,next，Finish,等待片刻，项目创建完成，控制台中出现下图信息表示项目创建成功。")])]),a._v(" "),e("p",[e("img",{attrs:{src:"https://gujunling.github.io/images/b9d3fc615ad04c48a9f32fe0a12b4c49.png",alt:""}})]),a._v(" "),e("p",[e("strong",[e("font",{attrs:{color:"red"}},[a._v("注意，Maven 默认使用的是 tomcat6 .xxx ,此时不支持使用注解方式配置 servlet，在 tomcat7 及以后版本才支持使用注解方式配置 servlet")])],1)]),a._v(" "),e("p",[a._v("配置命令如下：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("  <build>\n    <plugins>\n      <plugin>\n        <groupId>org.apache.tomcat.maven</groupId>\n        <artifactId>tomcat7-maven-plugin</artifactId>\n        <version>2.2</version>\n      </plugin>\n      </plugins>\n  </build>\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br")])])])}),[],!1,null,null,null);e.default=s.exports}}]);