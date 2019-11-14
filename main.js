import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// Vue.prototype.$api = api

// API请求
// import {APIREQ} from '.common/utils/ApiUrl.js'
// 时间
// import utils from '.common/utils/utils.js'
// 上传文件
// import uploadFile from '.common/utils/uploadFile.js'



App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
