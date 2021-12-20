const head = require("./config/head.js");
const plugins = require("./config/plugins.js");
const themeConfig = require("./config/themeConfig.js");
// const path = require("path");
module.exports = {
  // theme: 'vdoing', // 使用依赖包主题
  theme: require.resolve("../../theme-vdoing"), // 使用本地主题
  // base: "/myweb-frontend/", // 设置站点根路径  github部署时仓库不是github.io的时必须的设置,不然会导致js和css加载不出来,如果是根节点则上不需要这个，必须删除，目前已成功更换为根节点
  title: "前端小记",
  description:
    "web前端技术博客,简洁至上,专注web前端学习与总结。JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github等技术文章。",
  // base: '/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  plugins,
  themeConfig,

  /* 因为现在包含了github.io和sweetheartjq.cn这两个域名，在每次打包后生成的文件名不同，所以这样配置cdn加速不行，会导致cn的域名的找不到文件，后续只存在github.io的域名时可以使用这样cdn加速 */
  /*  configureWebpack: () => {
    return {
      output: {
        publicPath:
          "https://cdn.jsdelivr.net/gh/gujunling/gujunling.github.io@gh-pages/",
      },
      resolve: {
        alias: {
          'assets': path.resolve(__dirname, "./assets"),
        },
      },
    };
  }, */
};
