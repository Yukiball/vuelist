// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'

Vue.config.productionTip = false
/* eslint-disable no-new */
var html = document.getElementsByTagName('html')[0]; 
var w = document.documentElement.clientWidth || document.body.clientWidth;
console.log(w)
if (w<800) {
	html.style.fontSize = w / 40 + "px";
}else if(w>1500){
	html.style.fontSize = w / 100 + "px"; 
}else{
	html.style.fontSize = w / 80 + "px"; 
}

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
