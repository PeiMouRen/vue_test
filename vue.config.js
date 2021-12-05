module.exports = {
    // 开启服务器动态代理来解决跨域（只能代理单个服务器，当前服务器存在请求资源时，不会访问代理服务器）
    // devServer: {
    //     proxy: 'http://localhost:8003'
    // }

    devServer: {
        proxy: {
          '/studentServer': {
            target: 'http://localhost:8081',
            pathRewrite: {'^/studentServer' : ''}
           
          },
          '/schoolServer': {
            target: 'http://localhost:8082',
            pathRewrite: {'^/schoolServer' : ''}
          }
        }
      }
}