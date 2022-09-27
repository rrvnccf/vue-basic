<template>
    <h1>{{info}}</h1>
</template>

<script>
    import axios from 'axios'
    
    export default{
        data(){
            return {
                info: null
            }
        },
        mounted () {
            axios
                .get('https://1cd5wupiy7.execute-api.us-east-1.amazonaws.com/users/10')
                .then(response => {console.log(response); })
                
        },
    }
</script>