<template>
    <h1>{{mangga}}</h1>
    <h1 v-if= "mangga === 1">Hanya ada satu</h1>

    <h1 v-if= "mangga > 4">Hanya ada satu</h1>
    <h1 v-else>lebih dari satu</h1>

    <h1 v-if= "mangga === 9">Hanya ada satu</h1>
    <h1 v-else-if= "mangga === 1">mangga tidak tersedia</h1>


    <h3>Today is about {{subject}}</h3>
    <button v-on:click="latihanVue()">click</button>

    <button v-on:click="haidunia()">tes</button>
    

    
</template>

<script>
    export default{
        data(){
            return{
                mangga: 1,
                subject: "render"
            }
        },
        methods: {
            latihanVue() {
                this.subject = "render"
                this.subject = this.subject + " dan handling"
            },
            haidunia() {
                this.subject = "render"
                this.subject = this.subject + " dan render"
            }
        }
    }
</script>