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

<script>
export default {  
  watch: {
    '$route' (to, from) {
      console.info("from", from);
      console.info("to", to);
    }
  },
  created () {
    console.info("created", this.$route.params.teamId);
  },
  methods: {
  	goHome() {
  		this.$router.push('/');
  	}
  }
}
</script>