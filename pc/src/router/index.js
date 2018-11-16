import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Footer from '@/components/Footer'
import Cjian from '@/components/Cjian'
import Parsswor from '@/components/Parsswor'




//import ElementUI from 'element-ui';
//import 'element-ui/lib/theme-chalk/index.css';
//import App from './App.vue';

//Vue.use(ElementUI);


Vue.use(Router)

//vue.prototype.
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
     {
      path: '/conmmon',
      name: 'Cjian',
      component:Cjian
    },
     {
      path: '/index',
      name: 'Parsswor',
      component:Parsswor
    }
  ]
})


