import Cookies from 'js-cookie'
import Vue from 'vue'

const vm = new Vue()
const csrfToken = Cookies.get('csrfToken')
export default function({ $axios }) {
  $axios.onRequest(config => {
    $axios.setHeader('x-csrf-token', csrfToken)
  })
  $axios.onResponse(config => {
    if (config.data && config.data.code !== 0) {
      return Promise.reject(
        new Error((config.data && config.data.message) || '请求错误')
      )
      // return vm.$Message.error(
      //   (config.data && config.data.message) || '请求错误'
      // )
    }
    console.log(config, 'config')
  })
  $axios.onError(error => {
    vm.$Message.error((error && error.message) || '请求错误')
  })
}
