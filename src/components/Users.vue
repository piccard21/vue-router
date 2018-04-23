<template>
	<div>

		<h1>Users</h1>
		teamId is: {{ $route.params.teamId }}
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