import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import Users from './Users.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter); 

const routes = [
	{ path: '/', component: Home},
	{ path: '/users/:teamId', component: Users}
];

const router = new VueRouter({
  	mode: 'history',
	routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
