// const fn=()=>{
//   console.log1('hello')
// }

// fn()

import Vue from 'vue'
import App from './App.vue'

new Vue({
  el:'#my',
  render:c=>c(App)
})