import Vue from 'vue'
import App from './App.vue'
import router from './router'

/**
 * NEED TO COMPLETE VUE 2019 CRASH COURSE!
 */

Vue.config.productionTip = false

new Vue({
 router,
 render: h => h(App)
}).$mount('#app')
