// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
var html = document.getElementsByTagName('html')[0]; 
var w = document.documentElement.clientWidth || document.body.clientWidth;
html.style.fontSize = w / 90 + "px"; 
console.log(html.style.fontSize = w / 90 + "px")
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
