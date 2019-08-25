import Vue from 'vue';
import axios from 'axios';
const vm = new Vue();

function httpHandle(option) {
  return new Promise((resolve, reject) => {
    axios(option).then(res => resolve(res)).catch(err => {
      vm.$Message.error(err && err.message || '请求错误')
      reject(err)
    });
  })
}

const oHttp = {};

oHttp.install = function () {
  Vue.prototype.$http = httpHandle;
}
