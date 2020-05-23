// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)

// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '',
  loading: '',
  attempt: 1
})

console.log('❤❤❤ 本程序由 alexlxy 编写， github@ github.com/alexlxy ❤❤❤')

var domainCross = ['show.liluo.cc', 'show.thisummer.com']

router.beforeEach((to, from, next)=>{

  store.commit('nowStatus', 'loading')
  /*
  if(domainCross.indexOf(location.host) != -1){
    next()
  }else{
    if(to.name == 'error-110'){
      next()
    }else{
      router.openPage('/error/110')
      next()
    }
  }
  */

  next();

})

router.afterEach((to, from, next)=>{
  store.commit('nowStatus', 'end')

  setTimeout(()=>{
    store.commit('nowStatus', 'hide')
  }, 900)

  setTimeout(()=>{
    store.commit('nowStatus', 'normal')
  }, 1000)

})

Vue.config.productionTip = false

// hack for active mobile
document.addEventListener("touchstart", function(){}, true)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
