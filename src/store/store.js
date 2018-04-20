import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		count: 0,
		simpleString: 'whatever it takes ...',
		todos: [
			{id: 1, text: 'AAA', done: true},
			{id: 2, text: 'BBB', done: false},
			{id: 3, text: 'CCC', done: true}
		]
	},
	getters: {
		count(state) {
			return state.count;
		},
		simpleString(state) {
			return state.simpleString;
		},
		doneTodos: state => {
			return state.todos.filter(todo => todo.done)
		},
		openTodos: state => {
			return state.todos.filter(todo => !todo.done)
		}
	},
	mutations: {
		increment(state, val = 1) {
			state.count = state.count + val
		}
	},
	actions: {
		incrementAsync({commit, state}, val) {
			setTimeout(() => {
				commit('increment', val.add)
			}, 1000)
		}
	}
})