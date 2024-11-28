(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{411:function(t,n,s){"use strict";s.r(n);var a=s(7),e=Object(a.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"正则表达式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式"}},[t._v("#")]),t._v(" 正则表达式")]),t._v(" "),n("p",[t._v("在表单验证中，使用正则表达式来验证正确与否是一个很频繁的操作，本文收集整理了15个常用的JavaScript正则表达式，其中包括用户名、密码强度、整数、数字、电子邮件地址（Email）、手机号码、身份证号、URL地址、 IPv4地址、 十六进制颜色、 日期、 QQ号码、 微信号、车牌号、中文正则。")]),t._v(" "),n("h3",{attrs:{id:"用户名正则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#用户名正则"}},[t._v("#")]),t._v(" 用户名正则")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('//用户名正则，4到16位（字母，数字，下划线，减号）\nvar uPattern = /^[a-zA-Z0-9_-]{4,16}$/;\n//输出 true\nconsole.log(uPattern.test("hahaha"));\n')])])]),n("h3",{attrs:{id:"密码强度正则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#密码强度正则"}},[t._v("#")]),t._v(" 密码强度正则")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('//密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符\nvar pPattern = /^.*(?=.{6,})(?=.*\\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;\n//输出 true\nconsole.log("=="+pPattern.test("hahaHA123#"));\n')])])]),n("h3",{attrs:{id:"整数正则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#整数正则"}},[t._v("#")]),t._v(" 整数正则")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('//正整数正则\nvar posPattern = /^\\d+$/;\n//负整数正则\nvar negPattern = /^-\\d+$/;\n//整数正则\nvar intPattern = /^-?\\d+$/;\n//输出 true\nconsole.log(posPattern.test("42"));\n//输出 true\nconsole.log(negPattern.test("-42"));\n//输出 true\nconsole.log(intPattern.test("-42"));\n')])])]),n("h3",{attrs:{id:"数字正则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数字正则"}},[t._v("#")]),t._v(" 数字正则")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('//正数正则\nvar posPattern = /^\\d*\\.?\\d+$/;\n//负数正则\nvar negPattern = /^-\\d*\\.?\\d+$/;\n//数字正则\nvar numPattern = /^-?\\d*\\.?\\d+$/;\nconsole.log(posPattern.test("42.2"));\nconsole.log(negPattern.test("-42.2"));\nconsole.log(numPattern.test("-42.2"));\n')])])]),n("h3",{attrs:{id:"email正则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#email正则"}},[t._v("#")]),t._v(" Email正则")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('//Email正则\nvar ePattern = /^([A-Za-z0-9_\\-\\.])+\\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,4})$/;\n//输出 true\nconsole.log(ePattern.test("1234567890@qq.com"));\n')])])]),n("h3",{attrs:{id:"手机号码正则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#手机号码正则"}},[t._v("#")]),t._v(" 手机号码正则")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('//手机号正则\nvar mPattern = /^1[34578]\\d{9}$/; \n//输出 true\nconsole.log(mPattern.test("15507621888"));\n')])])]),n("h3",{attrs:{id:"身份证号正则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#身份证号正则"}},[t._v("#")]),t._v(" 身份证号正则")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('//身份证号（18位）正则\nvar cP = /^[1-9]\\d{5}(18|19|([23]\\d))\\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]$/;\n//输出 true\nconsole.log(cP.test("11010519880605371X"));\n')])])]),n("h3",{attrs:{id:"url正则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#url正则"}},[t._v("#")]),t._v(" URL正则")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('//URL正则\nvar urlP= /^((https?|ftp|file):\\/\\/)?([\\da-z\\.-]+)\\.([a-z\\.]{2,6})([\\/\\w \\.-]*)*\\/?$/;\n//输出 true\nconsole.log(urlP.test("https://www.cnblogs.com/gujun1998/"));\n')])])]),n("h3",{attrs:{id:"ipv4地址正则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ipv4地址正则"}},[t._v("#")]),t._v(" IPv4地址正则")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('//ipv4地址正则\nvar ipP = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;\n//输出 true\nconsole.log(ipP.test("192.168.0.1"));\n')])])]),n("h3",{attrs:{id:"十六进制颜色正则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#十六进制颜色正则"}},[t._v("#")]),t._v(" 十六进制颜色正则")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('//RGB Hex颜色正则\nvar cPattern = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;\n//输出 true\nconsole.log(cPattern.test("#b8b8b8"));\n')])])]),n("h3",{attrs:{id:"日期正则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#日期正则"}},[t._v("#")]),t._v(" 日期正则")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('//日期正则，简单判定,未做月份及日期的判定\nvar dP1 = /^\\d{4}(\\-)\\d{1,2}\\1\\d{1,2}$/;\n//输出 true\nconsole.log(dP1.test("2017-05-11"));\n//输出 true\nconsole.log(dP1.test("2017-15-11"));\n//日期正则，复杂判定\nvar dP2 = /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/;\n//输出 true\nconsole.log(dP2.test("2017-02-11"));\n//输出 false\nconsole.log(dP2.test("2017-15-11"));\n//输出 false\nconsole.log(dP2.test("2017-02-29"));\n')])])]),n("h3",{attrs:{id:"qq号正则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#qq号正则"}},[t._v("#")]),t._v(" QQ号正则")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('//QQ号正则，5至11位\nvar qqPattern = /^[1-9][0-9]{4,10}$/;\n//输出 true\nconsole.log(qqPattern.test("1234567890"));\n')])])]),n("h3",{attrs:{id:"微信号正则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#微信号正则"}},[t._v("#")]),t._v(" 微信号正则")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('//微信号正则，6至20位，以字母开头，字母，数字，减号，下划线\nvar wxPattern = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/;\n//输出 true\nconsole.log(wxPattern.test("wohaha123_com"));\n')])])]),n("h3",{attrs:{id:"车牌号正则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#车牌号正则"}},[t._v("#")]),t._v(" 车牌号正则")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('//车牌号正则\nvar cPattern = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;\n//输出 true\nconsole.log(cPattern.test("粤S46006"));\n')])])]),n("h3",{attrs:{id:"包含中文正则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#包含中文正则"}},[t._v("#")]),t._v(" 包含中文正则")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('//包含中文正则\nvar cnPattern = /^[\\u4E00-\\u9FA5]$/;\n//输出 true\nconsole.log(cnPattern.test("大帅锅"));\n')])])]),n("p",[t._v("参考链接："),n("a",{attrs:{href:"http://caibaojian.com/form-regexp.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://caibaojian.com/form-regexp.html"),n("OutboundLink")],1)]),t._v(" "),n("h3",{attrs:{id:"其他"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("匹配中文字符的正则表达式： [u4e00-u9fa5]\n\n匹配双字节字符(包括汉字在内)：[^x00-xff]\n评注：可以用来计算字符串的长度（一个双字节字符长度计2，ASCII字符计1）\n\n匹配空白行的正则表达式：ns*r\n评注：可以用来删除空白行\n\n匹配HTML标记的正则表达式：< (S*?)[^>]*>.*?|< .*? />\n评注：网上流传的版本太糟糕，上面这个也仅仅能匹配部分，对于复杂的嵌套标记依旧无能为力\n\n匹配首尾空白字符的正则表达式：^s*|s*$\n评注：可以用来删除行首行尾的空白字符(包括空格、制表符、换页符等等)，非常有用的表达式\n\n匹配Email地址的正则表达式：w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*\n评注：表单验证时很实用\n\n匹配网址URL的正则表达式：[a-zA-z]+://[^s]*\n评注：网上流传的版本功能很有限，上面这个基本可以满足需求\n\n匹配帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线)：^[a-zA-Z][a-zA-Z0-9_]{4,15}$\n评注：表单验证时很实用\n\n匹配国内电话号码：d{3}-d{8}|d{4}-d{7}\n评注：匹配形式如 0511-4405222 或 021-87888822\n\n匹配腾讯QQ号：[1-9][0-9]{4,}\n评注：腾讯QQ号从10000开始\n\n匹配中国邮政编码：[1-9]d{5}(?!d)\n评注：中国邮政编码为6位数字\n\n匹配身份证：d{15}|d{18}\n评注：中国的身份证为15位或18位\n\n匹配ip地址：d+.d+.d+.d+\n评注：提取ip地址时有用\n\n匹配特定数字：\n^[1-9]d*$　 　 //匹配正整数\n^-[1-9]d*$ 　 //匹配负整数\n^-?[1-9]d*$　　 //匹配整数\n^[1-9]d*|0$　 //匹配非负整数（正整数 + 0）\n^-[1-9]d*|0$　　 //匹配非正整数（负整数 + 0）\n^[1-9]d*.d*|0.d*[1-9]d*$　　 //匹配正浮点数\n^-([1-9]d*.d*|0.d*[1-9]d*)$　 //匹配负浮点数\n^-?([1-9]d*.d*|0.d*[1-9]d*|0?.0+|0)$　 //匹配浮点数\n^[1-9]d*.d*|0.d*[1-9]d*|0?.0+|0$　　 //匹配非负浮点数（正浮点数 + 0）\n^(-([1-9]d*.d*|0.d*[1-9]d*))|0?.0+|0$　　//匹配非正浮点数（负浮点数 + 0）\n评注：处理大量数据时有用，具体应用时注意修正\n\n匹配特定字符串：\n^[A-Za-z]+$　　//匹配由26个英文字母组成的字符串\n^[A-Z]+$　　//匹配由26个英文字母的大写组成的字符串\n^[a-z]+$　　//匹配由26个英文字母的小写组成的字符串\n^[A-Za-z0-9]+$　　//匹配由数字和26个英文字母组成的字符串\n^w+$　　//匹配由数字、26个英文字母或者下划线组成的字符串\n\n在使用RegularExpressionValidator验证控件时的验证功能及其验证表达式介绍如下:\n只能输入数字：“^[0-9]*$”\n只能输入n位的数字：“^d{n}$”\n只能输入至少n位数字：“^d{n,}$”\n只能输入m-n位的数字：“^d{m,n}$”\n只能输入零和非零开头的数字：“^(0|[1-9][0-9]*)$”\n只能输入有两位小数的正实数：“^[0-9]+(.[0-9]{2})?$”\n只能输入有1-3位小数的正实数：“^[0-9]+(.[0-9]{1,3})?$”\n只能输入非零的正整数：“^+?[1-9][0-9]*$”\n只能输入非零的负整数：“^-[1-9][0-9]*$”\n只能输入长度为3的字符：“^.{3}$”\n只能输入由26个英文字母组成的字符串：“^[A-Za-z]+$”\n只能输入由26个大写英文字母组成的字符串：“^[A-Z]+$”\n只能输入由26个小写英文字母组成的字符串：“^[a-z]+$”\n只能输入由数字和26个英文字母组成的字符串：/^[A-Za-z0-9]+$/\n只能输入由数字、26个英文字母或者下划线组成的字符串：“^w+$”\n验证用户密码:“^[a-zA-Z]w{5,17}$”正确格式为：以字母开头，长度在6-18之间\n\n只能包含字符、数字和下划线。\n验证是否含有^%&',;=?$\"等字符：“[^%&',;=?$x22]+”\n能输入汉字：“^[u4e00-u9fa5],{0,}$”\n\n匹配中文字符的正则表达式： [u4e00-u9fa5]\n匹配双字节字符(包括汉字在内)：[^x00-xff]\n匹配空行的正则表达式：n[s| ]*r\n匹配HTML标记的正则表达式：/< (.*)>.*|< (.*) />/\n匹配首尾空格的正则表达式：(^s*)|(s*$)\n\n验证一年的12个月：“^(0?[1-9]|1[0-2])$”正确格式为：“01”-“09”和“1”“12”\n验证一个月的31天：“^((0?[1-9])|((1|2)[0-9])|30|31)$”\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br"),n("span",{staticClass:"line-number"},[t._v("35")]),n("br"),n("span",{staticClass:"line-number"},[t._v("36")]),n("br"),n("span",{staticClass:"line-number"},[t._v("37")]),n("br"),n("span",{staticClass:"line-number"},[t._v("38")]),n("br"),n("span",{staticClass:"line-number"},[t._v("39")]),n("br"),n("span",{staticClass:"line-number"},[t._v("40")]),n("br"),n("span",{staticClass:"line-number"},[t._v("41")]),n("br"),n("span",{staticClass:"line-number"},[t._v("42")]),n("br"),n("span",{staticClass:"line-number"},[t._v("43")]),n("br"),n("span",{staticClass:"line-number"},[t._v("44")]),n("br"),n("span",{staticClass:"line-number"},[t._v("45")]),n("br"),n("span",{staticClass:"line-number"},[t._v("46")]),n("br"),n("span",{staticClass:"line-number"},[t._v("47")]),n("br"),n("span",{staticClass:"line-number"},[t._v("48")]),n("br"),n("span",{staticClass:"line-number"},[t._v("49")]),n("br"),n("span",{staticClass:"line-number"},[t._v("50")]),n("br"),n("span",{staticClass:"line-number"},[t._v("51")]),n("br"),n("span",{staticClass:"line-number"},[t._v("52")]),n("br"),n("span",{staticClass:"line-number"},[t._v("53")]),n("br"),n("span",{staticClass:"line-number"},[t._v("54")]),n("br"),n("span",{staticClass:"line-number"},[t._v("55")]),n("br"),n("span",{staticClass:"line-number"},[t._v("56")]),n("br"),n("span",{staticClass:"line-number"},[t._v("57")]),n("br"),n("span",{staticClass:"line-number"},[t._v("58")]),n("br"),n("span",{staticClass:"line-number"},[t._v("59")]),n("br"),n("span",{staticClass:"line-number"},[t._v("60")]),n("br"),n("span",{staticClass:"line-number"},[t._v("61")]),n("br"),n("span",{staticClass:"line-number"},[t._v("62")]),n("br"),n("span",{staticClass:"line-number"},[t._v("63")]),n("br"),n("span",{staticClass:"line-number"},[t._v("64")]),n("br"),n("span",{staticClass:"line-number"},[t._v("65")]),n("br"),n("span",{staticClass:"line-number"},[t._v("66")]),n("br"),n("span",{staticClass:"line-number"},[t._v("67")]),n("br"),n("span",{staticClass:"line-number"},[t._v("68")]),n("br"),n("span",{staticClass:"line-number"},[t._v("69")]),n("br"),n("span",{staticClass:"line-number"},[t._v("70")]),n("br"),n("span",{staticClass:"line-number"},[t._v("71")]),n("br"),n("span",{staticClass:"line-number"},[t._v("72")]),n("br"),n("span",{staticClass:"line-number"},[t._v("73")]),n("br"),n("span",{staticClass:"line-number"},[t._v("74")]),n("br"),n("span",{staticClass:"line-number"},[t._v("75")]),n("br"),n("span",{staticClass:"line-number"},[t._v("76")]),n("br"),n("span",{staticClass:"line-number"},[t._v("77")]),n("br"),n("span",{staticClass:"line-number"},[t._v("78")]),n("br"),n("span",{staticClass:"line-number"},[t._v("79")]),n("br"),n("span",{staticClass:"line-number"},[t._v("80")]),n("br"),n("span",{staticClass:"line-number"},[t._v("81")]),n("br"),n("span",{staticClass:"line-number"},[t._v("82")]),n("br"),n("span",{staticClass:"line-number"},[t._v("83")]),n("br"),n("span",{staticClass:"line-number"},[t._v("84")]),n("br"),n("span",{staticClass:"line-number"},[t._v("85")]),n("br"),n("span",{staticClass:"line-number"},[t._v("86")]),n("br"),n("span",{staticClass:"line-number"},[t._v("87")]),n("br"),n("span",{staticClass:"line-number"},[t._v("88")]),n("br")])]),n("table",{staticClass:"reference notranslate"},[n("tbody",[n("tr",[n("th",{attrs:{width:"20%"}},[t._v("字符")]),t._v(" "),n("th",{attrs:{width:"80%"}},[t._v("描述")])]),t._v(" "),n("tr",[n("td",[t._v("\\")]),t._v(" "),n("td",[n("p",[t._v('将下一个字符标记为一个特殊字符、或一个原义字符、或一个 向后引用、或一个八进制转义符。例如，\'n\' 匹配字符 "n"。\'\\n\' 匹配一个换行符。序列 \'\\\\\' 匹配 "\\" 而 "\\(" 则匹配 "("。')])])]),t._v(" "),n("tr",[n("td",[t._v("^")]),t._v(" "),n("td",[n("p",[t._v("匹配输入字符串的开始位置。如果设置了 RegExp 对象的 Multiline 属性，^ 也匹配 '\\n' 或 '\\r' 之后的位置。")])])]),t._v(" "),n("tr",[n("td",[t._v("$")]),t._v(" "),n("td",[n("p",[t._v("匹配输入字符串的结束位置。如果设置了RegExp 对象的 Multiline 属性，$ 也匹配 '\\n' 或 '\\r' 之前的位置。")])])]),t._v(" "),n("tr",[n("td",[t._v("*")]),t._v(" "),n("td",[n("p",[t._v('匹配前面的子表达式零次或多次。例如，zo* 能匹配 "z" 以及 "zoo"。* 等价于{0,}。')])])]),t._v(" "),n("tr",[n("td",[t._v("+")]),t._v(" "),n("td",[n("p",[t._v('匹配前面的子表达式一次或多次。例如，\'zo+\' 能匹配 "zo" 以及 "zoo"，但不能匹配 "z"。+ 等价于 {1,}。')])])]),t._v(" "),n("tr",[n("td",[t._v("?")]),t._v(" "),n("td",[n("p",[t._v('匹配前面的子表达式零次或一次。例如，"do(es)?" 可以匹配 "do" 或 "does" 。? 等价于 {0,1}。')])])]),t._v(" "),n("tr",[n("td",[t._v("{n}")]),t._v(" "),n("td",[n("p",[t._v("n 是一个非负整数。匹配确定的 n 次。例如，'o{2}' 不能匹配 \"Bob\" 中的 'o'，但是能匹配 \"food\" 中的两个 o。")])])]),t._v(" "),n("tr",[n("td",[t._v("{n,}")]),t._v(" "),n("td",[n("p",[t._v("n 是一个非负整数。至少匹配n 次。例如，'o{2,}' 不能匹配 \"Bob\" 中的 'o'，但能匹配 \"foooood\" 中的所有 o。'o{1,}' 等价于 'o+'。'o{0,}' 则等价于 'o*'。")])])]),t._v(" "),n("tr",[n("td",[t._v("{n,m}")]),t._v(" "),n("td",[n("p",[t._v("m 和 n 均为非负整数，其中n <= m。最少匹配 n 次且最多匹配 m 次。例如，\"o{1,3}\" 将匹配 \"fooooood\" 中的前三个 o。'o{0,1}' 等价于 'o?'。请注意在逗号和两个数之间不能有空格。")])])]),t._v(" "),n("tr",[n("td",[t._v("?")]),t._v(" "),n("td",[n("p",[t._v("当该字符紧跟在任何一个其他限制符 (*, +, ?, {n}, {n,}, {n,m}) 后面时，匹配模式是非贪婪的。非贪婪模式尽可能少的匹配所搜索的字符串，而默认的贪婪模式则尽可能多的匹配所搜索的字符串。例如，对于字符串 \"oooo\"，'o+?' 将匹配单个 \"o\"，而 'o+' 将匹配所有 'o'。")])])]),t._v(" "),n("tr",[n("td",[t._v(".")]),t._v(" "),n("td",[n("p",[t._v("匹配除换行符（\\n、\\r）之外的任何单个字符。要匹配包括 '\\n' 在内的任何字符，请使用像\""),n("strong",[t._v("(.|\\n)")]),t._v('"的模式。')])])]),t._v(" "),n("tr",[n("td",[t._v("(pattern)")]),t._v(" "),n("td",[n("p",[t._v("匹配 pattern 并获取这一匹配。所获取的匹配可以从产生的 Matches 集合得到，在VBScript 中使用 SubMatches 集合，在JScript 中则使用 $0…$9 属性。要匹配圆括号字符，请使用 '\\(' 或 '\\)'。")])])]),t._v(" "),n("tr",[n("td",[t._v("(?:pattern)")]),t._v(" "),n("td",[n("p",[t._v("匹配 pattern 但不获取匹配结果，也就是说这是一个非获取匹配，不进行存储供以后使用。这在使用 \"或\" 字符 (|) 来组合一个模式的各个部分是很有用。例如， 'industr(?:y|ies) 就是一个比 'industry|industries' 更简略的表达式。")])])]),t._v(" "),n("tr",[n("td",[t._v("(?=pattern)")]),t._v(" "),n("td",[n("p",[t._v('正向肯定预查（look ahead positive assert），在任何匹配pattern的字符串开始处匹配查找字符串。这是一个非获取匹配，也就是说，该匹配不需要获取供以后使用。例如，"Windows(?=95|98|NT|2000)"能匹配"Windows2000"中的"Windows"，但不能匹配"Windows3.1"中的"Windows"。预查不消耗字符，也就是说，在一个匹配发生后，在最后一次匹配之后立即开始下一次匹配的搜索，而不是从包含预查的字符之后开始。')])])]),t._v(" "),n("tr",[n("td",[t._v("(?!pattern)")]),t._v(" "),n("td",[n("p",[t._v('正向否定预查(negative assert)，在任何不匹配pattern的字符串开始处匹配查找字符串。这是一个非获取匹配，也就是说，该匹配不需要获取供以后使用。例如"Windows(?!95|98|NT|2000)"能匹配"Windows3.1"中的"Windows"，但不能匹配"Windows2000"中的"Windows"。预查不消耗字符，也就是说，在一个匹配发生后，在最后一次匹配之后立即开始下一次匹配的搜索，而不是从包含预查的字符之后开始。')])])]),t._v(" "),n("tr",[n("td",[t._v("(?<=pattern)")]),t._v(" "),n("td",[t._v('反向(look behind)肯定预查，与正向肯定预查类似，只是方向相反。例如，"'),n("code",[t._v("(?<=95|98|NT|2000)Windows")]),t._v('"能匹配"'),n("code",[t._v("2000Windows")]),t._v('"中的"'),n("code",[t._v("Windows")]),t._v('"，但不能匹配"'),n("code",[t._v("3.1Windows")]),t._v('"中的"'),n("code",[t._v("Windows")]),t._v('"。')])]),t._v(" "),n("tr",[n("td",[t._v("(?<!pattern)")]),t._v(" "),n("td",[t._v('反向否定预查，与正向否定预查类似，只是方向相反。例如"'),n("code",[t._v("(?<!95|98|NT|2000)Windows")]),t._v('"能匹配"'),n("code",[t._v("3.1Windows")]),t._v('"中的"'),n("code",[t._v("Windows")]),t._v('"，但不能匹配"'),n("code",[t._v("2000Windows")]),t._v('"中的"'),n("code",[t._v("Windows")]),t._v('"。')])]),t._v(" "),n("tr",[n("td",[t._v("x|y")]),t._v(" "),n("td",[n("p",[t._v('匹配 x 或 y。例如，\'z|food\' 能匹配 "z" 或 "food"。\'(z|f)ood\' 则匹配 "zood" 或 "food"。')])])]),t._v(" "),n("tr",[n("td",[t._v("[xyz]")]),t._v(" "),n("td",[n("p",[t._v("字符集合。匹配所包含的任意一个字符。例如， '[abc]' 可以匹配 \"plain\" 中的 'a'。")])])]),t._v(" "),n("tr",[n("td",[t._v("[^xyz]")]),t._v(" "),n("td",[n("p",[t._v("负值字符集合。匹配未包含的任意字符。例如， '[^abc]' 可以匹配 \"plain\" 中的'p'、'l'、'i'、'n'。")])])]),t._v(" "),n("tr",[n("td",[t._v("[a-z]")]),t._v(" "),n("td",[n("p",[t._v("字符范围。匹配指定范围内的任意字符。例如，'[a-z]' 可以匹配 'a' 到 'z' 范围内的任意小写字母字符。")])])]),t._v(" "),n("tr",[n("td",[t._v("[^a-z]")]),t._v(" "),n("td",[n("p",[t._v("负值字符范围。匹配任何不在指定范围内的任意字符。例如，'[^a-z]' 可以匹配任何不在 'a' 到 'z' 范围内的任意字符。")])])]),t._v(" "),n("tr",[n("td",[t._v("\\b")]),t._v(" "),n("td",[n("p",[t._v("匹配一个单词边界，也就是指单词和空格间的位置。例如， 'er\\b' 可以匹配\"never\" 中的 'er'，但不能匹配 \"verb\" 中的 'er'。")])])]),t._v(" "),n("tr",[n("td",[t._v("\\B")]),t._v(" "),n("td",[n("p",[t._v("匹配非单词边界。'er\\B' 能匹配 \"verb\" 中的 'er'，但不能匹配 \"never\" 中的 'er'。")])])]),t._v(" "),n("tr",[n("td",[t._v("\\cx")]),t._v(" "),n("td",[n("p",[t._v("匹配由 x 指明的控制字符。例如， \\cM 匹配一个 Control-M 或回车符。x 的值必须为 A-Z 或 a-z 之一。否则，将 c 视为一个原义的 'c' 字符。")])])]),t._v(" "),n("tr",[n("td",[t._v("\\d")]),t._v(" "),n("td",[n("p",[t._v("匹配一个数字字符。等价于 [0-9]。")])])]),t._v(" "),n("tr",[n("td",[t._v("\\D")]),t._v(" "),n("td",[n("p",[t._v("匹配一个非数字字符。等价于 [^0-9]。")])])]),t._v(" "),n("tr",[n("td",[t._v("\\f")]),t._v(" "),n("td",[n("p",[t._v("匹配一个换页符。等价于 \\x0c 和 \\cL。")])])]),t._v(" "),n("tr",[n("td",[t._v("\\n")]),t._v(" "),n("td",[n("p",[t._v("匹配一个换行符。等价于 \\x0a 和 \\cJ。")])])]),t._v(" "),n("tr",[n("td",[t._v("\\r")]),t._v(" "),n("td",[n("p",[t._v("匹配一个回车符。等价于 \\x0d 和 \\cM。")])])]),t._v(" "),n("tr",[n("td",[t._v("\\s")]),t._v(" "),n("td",[n("p",[t._v("匹配任何空白字符，包括空格、制表符、换页符等等。等价于 [ \\f\\n\\r\\t\\v]。")])])]),t._v(" "),n("tr",[n("td",[t._v("\\S")]),t._v(" "),n("td",[n("p",[t._v("匹配任何非空白字符。等价于 [^ \\f\\n\\r\\t\\v]。")])])]),t._v(" "),n("tr",[n("td",[t._v("\\t")]),t._v(" "),n("td",[n("p",[t._v("匹配一个制表符。等价于 \\x09 和 \\cI。")])])]),t._v(" "),n("tr",[n("td",[t._v("\\v")]),t._v(" "),n("td",[n("p",[t._v("匹配一个垂直制表符。等价于 \\x0b 和 \\cK。")])])]),t._v(" "),n("tr",[n("td",[t._v("\\w")]),t._v(" "),n("td",[n("p",[t._v("匹配字母、数字、下划线。等价于'[A-Za-z0-9_]'。")])])]),t._v(" "),n("tr",[n("td",[t._v("\\W")]),t._v(" "),n("td",[n("p",[t._v("匹配非字母、数字、下划线。等价于 '[^A-Za-z0-9_]'。")])])]),t._v(" "),n("tr",[n("td",[t._v("\\xn")]),t._v(" "),n("td",[n("p",[t._v("匹配 n，其中 n 为十六进制转义值。十六进制转义值必须为确定的两个数字长。例如，'\\x41' 匹配 \"A\"。'\\x041' 则等价于 '\\x04' & \"1\"。正则表达式中可以使用 ASCII 编码。")])])]),t._v(" "),n("tr",[n("td",[t._v("\\num")]),t._v(" "),n("td",[n("p",[t._v("匹配 num，其中 num 是一个正整数。对所获取的匹配的引用。例如，'(.)\\1' 匹配两个连续的相同字符。")])])]),t._v(" "),n("tr",[n("td",[t._v("\\n")]),t._v(" "),n("td",[n("p",[t._v("标识一个八进制转义值或一个向后引用。如果 \\n 之前至少 n 个获取的子表达式，则 n 为向后引用。否则，如果 n 为八进制数字 (0-7)，则 n 为一个八进制转义值。")])])]),t._v(" "),n("tr",[n("td",[t._v("\\nm")]),t._v(" "),n("td",[n("p",[t._v("标识一个八进制转义值或一个向后引用。如果 \\nm 之前至少有 nm 个获得子表达式，则 nm 为向后引用。如果 \\nm 之前至少有 n 个获取，则 n 为一个后跟文字 m 的向后引用。如果前面的条件都不满足，若 n 和 m 均为八进制数字 (0-7)，则 \\nm 将匹配八进制转义值 nm。")])])]),t._v(" "),n("tr",[n("td",[t._v("\\nml")]),t._v(" "),n("td",[n("p",[t._v("如果 n 为八进制数字 (0-3)，且 m 和 l 均为八进制数字 (0-7)，则匹配八进制转义值 nml。")])])]),t._v(" "),n("tr",[n("td",[t._v("\\un")]),t._v(" "),n("td",[n("p",[t._v("匹配 n，其中 n 是一个用四个十六进制数字表示的 Unicode 字符。例如， \\u00A9 匹配版权符号 (?)。")])])])])]),t._v(" "),n("p",[t._v("表格来源："),n("a",{attrs:{href:"https://www.runoob.com/regexp/regexp-metachar.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("菜鸟教程"),n("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=e.exports}}]);