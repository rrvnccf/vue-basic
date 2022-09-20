<template>
  <h1> halaman users / data user </h1>
  <h1>{{user}}</h1>
</template>

<script>
 export default {
    data(){
      return {
        users : ""
      }
    },

    created(){
      console.log("ini lifecycle created")
      this.users = "imron"
    }
 }
</script>