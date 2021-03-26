// nav
module.exports = [
  { text: "首页", link: "/" },
  {
    text: "前端",
    link: "/web/", //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: "前端文章",
        items: [
          { text: "HTML", link: "/pages/8309a5b876fc95e3/" },
          { text: "CSS", link: "/pages/e226e1/" },
          { text: "JS", link: "/pages/4aa87d/" },
          { text: "Vue", link: "/pages/14682d/" },
        ],
      },
      {
        text: "学习笔记",
        items: [
          {
            text: "《Vue》踩坑笔记",
            link: "/pages/9c81a3/",
          },
          {
            text: "TypeScript笔记",
            link: "/pages/51afd6/",
          },
          {
            text: "小程序笔记",
            link: "/note/wx-miniprogram/",
          },
          {
            text: "JS设计模式笔记",
            link: "/pages/4643cd/",
          },
        ],
      },
      {
        text: "webpack",
        link: "/pages/32a43d/",
      },
    ],
  },
  {
    text: "后端",
    link: "/backend/",
    items: [
      { text: "centos", link: "/pages/3cce56/" },
      { text: "java", link: "/pages/83ac6e/" },
      { text: "Docker", link: "/pages/5d483a/" },
      { text: "Linux", link: "/pages/442a2f/" },
      { text: "maven", link: "/pages/f6d635/" },
      { text: "MySQL", link: "/pages/b52295/" },
      { text: "其他", link: "/pages/b8f905/" },
    ],
  },
  {
    text: "技术",
    link: "/technology/",
    items: [
      { text: "技术文档", link: "/pages/9a7ee40fc232253e/" },
      { text: "GitHub部署及推送", link: "/pages/78f44a/" },
      { text: "Nodejs", link: "/pages/117708e0af7f0bd9/" },
      { text: "博客搭建", link: "/pages/41f87d890d0a02af/" },
      { text: "fullpage全屏轮播插件", link: "/pages/188fd0/" },
      { text: "svn", link: "/pages/d91022/" },
    ],
  },
  {
    text: "其他",
    link: "/more/",
    items: [
      { text: "学习", link: "/pages/c3f302a03c8daf79/" },
      { text: "系统重装", link: "/pages/696f49/" },
      { text: "友情链接", link: "/friends/" },
    ],
  },
  { text: "关于", link: "/about/" },
  {
    text: "收藏",
    link: "/pages/beb6c0bd8a66cea6/",
    // items: [
    //   { text: '网站', link: '/pages/beb6c0bd8a66cea6/' },
    //   // { text: '资源', link: '/pages/eee83a9211a70f9d/' },
    //   // { text: 'Vue资源', link: '/pages/12df8ace52d493f6/' },
    // ],
  },
  {
    text: "索引",
    link: "/archives/",
    items: [
      { text: "分类", link: "/categories/" },
      { text: "标签", link: "/tags/" },
      { text: "归档", link: "/archives/" },
    ],
  },
];
