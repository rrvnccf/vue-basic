<template>
  <h1> this is an animal</h1>
  <h1>{{animals}}</h1>
  <h1>{{fruit}}</h1>
</template>

<script>
 export default {
    data(){
      return {
        animals : "gajah",
        fruit : ""
      }
    },

    created(){
      console.log("haii")
      this.animals = "gajah"
      this.fruit = ""
    }
 }
</script>