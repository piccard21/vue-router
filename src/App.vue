<template>
	<div id="app">
		<img id="logo" src="./assets/logo.png">
		<br>
		<a :href="url">vue-router</a>

		<hr>

		<router-link to="/">Home</router-link>
		<router-link to="/users/10">Team 10</router-link>
		<router-link to="/users/12">Team 12</router-link>
		<router-link to="/hello">Hello</router-link>
		<router-link to="/open">Open</router-link>
		<router-link to="/done">Done</router-link>

		<hr>

		<router-view></router-view>

		<hr>

		<p>
			{{ simpleString }}
		</p>
		<p>
			<input type="button" :value="count" @click="increment">
			<input type="button" :value="count" @click="incrementThree">
		</p>


		<p>
			<input type="button" value="back" @click="goBack">
			<input type="button" value="forward" @click="goForward">
		</p>
	</div>
</template>

<script>

	import History from './mixins/History';

	export default {
		name: 'app',
		mixins: [History],
		data() {
			return {
				url: 'https://router.vuejs.org/en/'
			}
		},
		computed: {
			count() {
				return "increment (" + this.$store.getters.count + ")";
			},
			simpleString() {
				return this.$store.getters.simpleString;
			}
		},
		methods: {
			increment() {
				this.$store.commit('increment');
			},
			incrementThree() {
				this.$store.dispatch('incrementAsync', {
					add: 3
				});
			}
		}
	}
</script>

<style lang="scss">
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}

	#logo {
		height: 120px;
	}

	h1, h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
</style>
