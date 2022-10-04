<template>
	<h2>{{user}}</h2>
</template>

<script>
	import axios from 'axios'
    
    export default{
        data(){
            return {
                user: ""
            }
        },
        mounted () {
            axios
                .delete('https://1cd5wupiy7.execute-api.us-east-1.amazonaws.com/users/9')
                .then(response => {
                    console.log(response); 
                    this.user = response.data.message
                })
                
        },
    }
</script>