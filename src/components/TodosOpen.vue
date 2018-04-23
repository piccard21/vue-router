<template>
	<div>
		<h3>Open</h3>
		<ul id="todos-open">
			<li v-for="(todo, index) in open" :key="todo.id">
				{{ todo.text }}
			</li>
		</ul>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'

	export default {
		name: 'open',
		computed: {
			...mapGetters({
				// finishedTodos: state => state.finshedTodos,
				open: 'openTodos'
			})
		}
	}
</script>

<style scoped>
</style>