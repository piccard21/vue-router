<template>
	<div>
		<h3>Done</h3>
		<ul id="todos-done">
			<li v-for="(todo, index) in done" :key="todo.id">
				{{ todo.text }}
			</li>
		</ul>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'

	export default {
		name: 'Done',
		computed: {
			...mapGetters({
				// doneTodos: state => state.doneTodos,
				done: 'doneTodos',
			})
		}
	}
</script>

<style scoped>

</style>