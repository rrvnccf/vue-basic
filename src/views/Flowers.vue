//list rendering berfungsi untuk memunculkan data yang telah kita bikin di dalam data(), 
//ini berfungsi untuk memunculkan data yang dipilih untuk dimunculkan dengan menggunakan v-for

<template>
    <h1>This is flower</h1>
    <li v-for="flower in flowers">
        {{ flower.name }} are {{flower.color}}
    </li>
</template>


<script>
export default{
    data() {
        return {
            flowers: [
                { name: "orchid", color: "blue"}, { name: "rose", color: "red"}, { name: "lavender", color: "purple"} 
                ]
        }
    }
}
    

</script>