import Vue from 'vue';
import Vuex from 'vuex';
import { a } from './store'
import { b } from './store2'


Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    a: a,
    b: b
  }
});