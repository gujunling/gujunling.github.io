(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{444:function(a,s,t){"use strict";t.r(s);var n=t(7),e=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"java-集合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-集合"}},[a._v("#")]),a._v(" Java 集合")]),a._v(" "),s("h2",{attrs:{id:"分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分类"}},[a._v("#")]),a._v(" 分类")]),a._v(" "),s("ul",[s("li",[a._v("普通集合")]),a._v(" "),s("li",[a._v("同步集合")]),a._v(" "),s("li",[a._v("并发集合")])]),a._v(" "),s("h2",{attrs:{id:"普通集合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#普通集合"}},[a._v("#")]),a._v(" 普通集合")]),a._v(" "),s("h3",{attrs:{id:"connection-接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#connection-接口"}},[a._v("#")]),a._v(" Connection 接口")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gujunling.github.io/images/985104087d9f45bbbf231d503cea2096.png",alt:""}})]),a._v(" "),s("p",[s("strong",[a._v("List 有序,可重复")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("ArrayList\n优点: 底层数据结构是数组，查询快，增删慢。\n缺点: 线程不安全，效率高\n\nLinkedList\n优点: 底层数据结构是双向链表，查询慢，增删快。\n缺点: 线程不安全，效率高\n\nVector\n优点: 底层数据结构是数组，查询快，增删慢。\n缺点: 线程安全，效率低\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br")])]),s("p",[s("strong",[a._v("Set 无序,唯一")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("HashSet\n底层数据结构是哈希表。(无序,唯一)\n如何来保证元素唯一性?\n1.依赖两个方法：hashCode()和equals()\n\nLinkedHashSet\n底层数据结构是链表和哈希表。(FIFO插入有序,唯一)\n1.由链表保证元素有序\n2.由哈希表保证元素唯一\n\nTreeSet\n底层数据结构是红黑树。(唯一，有序)\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br")])]),s("h3",{attrs:{id:"map-接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#map-接口"}},[a._v("#")]),a._v(" Map 接口")]),a._v(" "),s("p",[a._v("（key-value 的键值对，key 不允许重复，value 可重复，重复时会覆盖前一个 key）")]),a._v(" "),s("p",[s("strong",[a._v("Map 中的 key：无序的、不可重复的，value：无序的、可重复的")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("HashMap：无序的，效率高，但不是线程安全的，key和value都允许为null。\n\nTreeMap：有序的，底层使用红黑树，保证按照添加的key-value对进行排序，实现排序遍历。此时考虑key的自然排序或定制排序。\n\nLinkedHashMap：作为HashMap的子类，保证在遍历map元素时，可以按照添加的顺序实现遍历。因为它在原有的HashMap底层结构基础上，添加了一对指针，指向前一个和后一个。对于频繁的遍历操作，此类执行效率高于HashMap。\n\nHashTable：线程安全的，但是效率低，不允许null值。\n\nMap 集合即没有实现于 Collection 接口，也没有实现 Iterable 接口，所以不能对 Map 集合进行 for-each 遍历。\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gujunling.github.io/images/4e8e6b5a7baf49edac64a4f9c587a1ff.png",alt:""}})]),a._v(" "),s("h2",{attrs:{id:"同步集合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#同步集合"}},[a._v("#")]),a._v(" 同步集合")]),a._v(" "),s("p",[a._v("同步集合可以简单地理解为通过 synchronized 来实现同步的集合。如果有多个线程调用同步集合的方法，它们将会串行执行。")]),a._v(" "),s("ul",[s("li",[s("ol",[s("li",[a._v("Vector 是线程安全的，源码中有很多的 synchronized 可以看出，而 ArrayList 不是。导致 Vector 效率无法和 ArrayList 相比")])])]),a._v(" "),s("li",[s("ol",{attrs:{start:"2"}},[s("li",[a._v("ArrayList 和 Vector 都采用线性连续存储空间，当存储空间不足的时候，ArrayList 默认增加为原来的 50%，Vector 默认增加为原来的一倍")])])]),a._v(" "),s("li",[s("ol",{attrs:{start:"3"}},[s("li",[a._v("Vector 可以设置 capacityIncrement，而 ArrayList 不可以，从字面理解就是 capacity 容量，Increment 增加，容量增长的参数")])])]),a._v(" "),s("li",[s("ol",{attrs:{start:"4"}},[s("li",[a._v("Stack 是继承于 Vector，基于动态数组实现的一个线程安全的栈")])])]),a._v(" "),s("li",[s("ol",{attrs:{start:"5"}},[s("li",[a._v("arrayList、vector、Stack 的共性特点：随机访问速度快，插入和移除性能较差(这是数组的特点，三者的底层均为数组实现)")])])]),a._v(" "),s("li",[s("ol",{attrs:{start:"6"}},[s("li",[a._v("HashMap 是非 synchronized 的，而 Hashtable 是 synchronized 的。这说明 Hashtable 是线程安全的，而且多个线程可以共享一个 Hashtable")])])]),a._v(" "),s("li",[s("ol",{attrs:{start:"7"}},[s("li",[a._v("由于 Hashtable 是线程安全的，也是 synchronized 的，所以在单线程环境下比 HashMap 要慢")])])]),a._v(" "),s("li",[s("ol",{attrs:{start:"8"}},[s("li",[a._v("HashMap 可以存在 null 的键值(key)和值(value),但是 Hashtable 是不可以的")])])])]),a._v(" "),s("p",[s("strong",[a._v("同步集合在单线程的环境下能够保证线程安全，但是通过 synchronized 同步方法将访问操作串行化，导致并发环境下效率低下。而且同步集合在多线程环境下的复合操作（迭代、条件运算如没有则添加等）是非线程安全，需要客户端代码来实现加锁。")])]),a._v(" "),s("h2",{attrs:{id:"并发集合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#并发集合"}},[a._v("#")]),a._v(" 并发集合")]),a._v(" "),s("p",[a._v("并发集合 是 jdk5.0 重要的特性，增加了并发包 java.util.concurrent.*。Java 内存模型、volatile 变量及 AbstractQueuedSynchronizer(简称 AQS 同步器)，是并发包众多实现的基础。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("常见的并发集合：\n\n1. ConcurrentHashMap：线程安全的HashMap的实现\n2. CopyOnWriteArrayList：线程安全且在读操作时无锁的ArrayList\n3. CopyOnWriteArraySet：基于CopyOnWriteArrayList，不添加重复元素\n4. ArrayBlockingQueue：基于数组、先进先出、线程安全，可实现指定时间的阻塞读写，并且容量可以限制\n5. LinkedBlockingQueue：基于链表实现，读写各用一把锁，在高并发读写操作都多的情况下，性能优于ArrayBlockingQueue\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);