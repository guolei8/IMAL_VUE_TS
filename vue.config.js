module.exports = {
  devServer: {
    proxy: {
      '/hce/idas/imal/api': {
        // 需要代理到的域名地址
        // 即，当遇到'/hce/idas/imal/api'时，将请求代理到'http://10.0.0.11'
        target: 'https://10.0.0.11',
        ws: true,
        changeOrigin: true
      },
      // '/bms/api/v1/': {
      //   target: ''http:xxxx.com',
      //   changeOrigin: true
      // }
    }
  },
}