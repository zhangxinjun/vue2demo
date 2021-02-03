module.exports = {
  devServer:{
    // https://image.baidu.com/dadasdasdas
    proxy:{
      "":{
        target:"https://image.baidu.com",
        // changeOrigin:true,
        // pathRewrite:{
        //   "^/api":"search"
        // }
      }
    }
  }
}