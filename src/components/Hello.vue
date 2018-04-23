<template>
    <div>
	    <input v-model="message" placeholder="edit me">
	    <p>Message is: {{ message }}</p>
    </div>
</template>

<script>
    export default {
	    data() {
		    return {
			    message: '',
		    }
	    },
        computed: {},
        methods: {}
    }
</script>

<style scoped>
    #registration {
        box-shadow: 1px 1px 2px 1px #ccc;
        margin: 20px;
        padding: 20px;
        display: inline-block;
        width: 300px;
        vertical-align: top;
    }

    .row h4 {
        display: inline-block;
        width: 70%;
        text-align: left;
        margin: 0 0 10px 0;
    }

    button {
        background-color: lightgreen;
        border: none;
        box-shadow: 1px 1px 1px black;
        font-size: inherit;
        text-align: right;
        cursor: pointer;
    }

    button:hover {
        background-color: green;
    }
</style>