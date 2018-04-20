<template>
	<div>

		<h1>Users</h1>
		teamId is: {{ $route.params.teamId }}
		<hr>
		<p>
			If you want to work with the params, the you have to watch them, otherwise they won't update all the time!
		</p>
		<button @click="goHome">Go Home</button>
	</div>

</template>

<script>import History from '../mixins/History';

export default {
	mixins: [History],
	created() {
		console.info("created User", this.$route.params.teamId);
	},
	methods: {}
}
</script>