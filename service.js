const express = require('express')
const app = express()
const path = require('path')

// 注册模板的使用
app.engine('art', require('express-art-template'))
app.set('view options', {
  escape: false, // 禁止html转义
})
// 指定存放模板的目录
app.set('views', path.join(__dirname, 'views'))
// 指定模板的后缀
app.set('view engine', 'art')

app.get('/api/list', function (req, rsp) {
  rsp.set('Content-Type', 'application/json; charset=utf-8')

  // render是因为装了express-art-template才有的
  // 第一个参数是模板名称，用来确定本次返回的数据结构
  // 第二个参数是要渲染的数据
  rsp.render('list.art', {
    dataList: JSON.stringify(['one', 'two', 'three']) // 需要转为字符串
  })
})
app.get('/api/list.html', function (req, rsp) {
  rsp.set('Content-Type', 'text/html')

  rsp.render('list-html.art', {
    dataList: ['one', 'two', 'three']
  })
})

app.listen(8080, () => {
  console.log('localhost:8080 start')
})