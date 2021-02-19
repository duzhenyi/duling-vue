/**
 * 是一个可选的配置文件，如果项目的 (和 package.json 同级的) 根目录中存在这个文件，那么它会被 @vue/cli-service 自动加载
 */
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir)
}
const Timestamp = new Date().getTime();
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/', //部署到服务器用./
  outputDir: 'dist', // 打包的目录
  configureWebpack: { // webpack 配置
    output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
      filename: `[name].${process.env.VUE_APP_VERSION}.${Timestamp}.js`,
      chunkFilename: `[name].${process.env.VUE_APP_VERSION}.${Timestamp}.js`
    },
  },
  lintOnSave: true, // 在保存时校验格式
  productionSourceMap: false, // 生产环境是否生成 SourceMap，不生成.map文件
  devServer: {
    open: true, // 启动服务后是否打开浏览器
    host: '0.0.0.0',
    port: 8080, // 服务端口
    https: false,
    hotOnly: false,
    proxy: null, // 设置代理
    before: app => { }
  },
  chainWebpack: (config) => {
    //设置resolve
    config.resolve.alias
      .set('@$', resolve('src')) // @后面可以跟其他参数@xxx都代表src下面
      .set('_c', resolve('src/components'))
  },
  // ant design vue 定制css
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'border-radius-base': '2px',
            'link-color': '#1890ff', // 链接色
            'success-color': '#52c41a', // 成功色
            'warning-color': '#faad14', // 警告色
            'error-color': '#f5222d', // 错误色
            'font-size-base': '14px', // 主字号
            'heading-color': 'rgba(0, 0, 0, 0.85)', // 标题色
            'text-color': 'rgba(0, 0, 0, 0.65)', // 主文本色
            'text-color-secondary': 'rgba(0, 0, 0, 0.45)', // 次文本色
            'disabled-color': 'rgba(0, 0, 0, 0.25)', // 失效色
            'border-radius-base': '2px', // 组件/浮层圆角
            'border-color-base': '#d9d9d9', // 边框色
            'box-shadow-base': '0 2px 8px rgba(0, 0, 0, 0.15)', // 浮层阴影
          },
          javascriptEnabled: true,
        },
      },
    },
  },
}