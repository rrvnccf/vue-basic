<template>
	<h2>Latihan Post</h2>
	<form @submit.prevent="latihanPost">
		<div>
			<label>Nama</label>
			<input type="text" v-model="name">
		</div>
		<div>
			<label>userId</label>
			<input type="text" v-model="userId">
		</div>
		<div>
			<button type="submit">Submit</button>
		</div>
		<h2>{{user}}</h2>
	</form>
</template>

<script>
	import axios from 'axios'
	export default{
		data(){
			return{
			name: '',
			userId: '',
			user: '',
			}
		},
		methods: {
			latihanPost(){
				axios.post("https://1cd5wupiy7.execute-api.us-east-1.amazonaws.com/users", 
				{name: this.name, userId: this.userId})

				.then ((response) => {
					console.log(response)
					this.user = response.data.name
				});
			}
		}
	}
</script>