const request = uni_request({ // 有效配置项只有三个
    baseURL: 'http://shop_api.fang-tian.com/', //baseURL
    timeout: 15000, // 超时时间
    heaers: {
        'x-custom-header': 'x-custom-header'
    }
})

request.interceptors.request.use(config => { // 请求拦截器（可以设置多个）
    console.log('请求拦截器')
    config.headers.TEST = 'TEST'
    return config
})

request.interceptors.response.use(response => { // 响应拦截器（可以设置多个）
    const { data: res } = response
    if (res.code === 200) {
        console.log('响应拦截器')
    }
    return response
})

request.overtime = () => { // 超时钩子函数（可以设置多个）
    console.log('超时了')
}

request.get('/').then(res => {
    console.log(res)
}).catch(e => console.error(e))

// 取消一个请求
const task = request.get('/cancel') // 如果想要取消某个请求，需要在 then 之前将 request.get 方法返回的 promise 对象保存在一个变量里
task.then(res => {
    console.log(res)
}).catch(e => console.error(e)) // 网络请求失败：主动取消
task.cancel() // 在需要的时候调用 cancel 方法，会使当前网络请求取消并且使 request.get 方法返回的 promise 进入 reject 状态，可被 catch 捕获，错误信息为 【网络请求失败：主动取消】