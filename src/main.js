import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import Users from './components/Users.vue'
import Hello from './components/Hello.vue'
import Done from './components/TodosDone.vue'
import Open from './components/TodosOpen.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import {store} from './store/store'

Vue.use(Vuex);
Vue.use(VueRouter);
 
const routes = [
	{ path: '/', component: Home},
	{ path: '/users/:teamId', component: Users},
	{ path: '/hello', component: Hello},
	{ path: '/open', component: Done},
	{ path: '/done', component: Open}
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
	        // console.info(this.$store.getters['a/name']);
	        console.info("CREATED", this.$store.getters.count);
        }
})
