// 使用 Mock
var Mock = require('mockjs')

// 定义返回的数据
var userInfo = {
    code: 200,
    msg: '',
    data: {
        accessToken: '123456token'
    },
}

//三个参数：第一个路径，第二个请求方式post/get，第三个回调，返回值
Mock.mock(/login/, 'post', () => {
    return userInfo
})

