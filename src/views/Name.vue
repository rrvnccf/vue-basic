<template>
    <h1>{{user}}</h1>
</template>

<script>
    import axios from 'axios'
    
    export default{
        data(){
            return {
                info: null,
                user: ""
            }
        },
        mounted () {
            axios
                .get('https://1cd5wupiy7.execute-api.us-east-1.amazonaws.com/users/7878')
                .then(response => {
                    console.log(response); 
                    this.user = response.data.name
                })
                
        },
    }
</script>