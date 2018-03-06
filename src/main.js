import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import Users from './components/Users.vue'
import Hello from './components/Hello.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import {store} from './mainStore' 

Vue.use(Vuex);
Vue.use(VueRouter); 
console.info(store)
 
const routes = [
	{ path: '/', component: Home},
	{ path: '/users/:teamId', component: Users},
	{ path: '/hello', component: Hello}
];

const router = new VueRouter({
  	mode: 'history',
	routes
});

new Vue({
  el: '#app',
  router,
  store,  
  render: h => h(App),
        created() {
          console.info(this.$store.getters['a/name']);
        }
})
