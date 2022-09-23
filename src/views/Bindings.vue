//form bindings, digunakan untuk meng update data dengan menginputkan data melalui form

<template>
    <br><br>
    <p>Hai {{ nama }} !!!</p>
    <input v-model="nama" placeholder="ketikan nama anda">
    <br>

    <span>alamat {{ nama }} berada di:</span>
    <p style="white-space: pre-line;">{{ alamat }}</p>
    <textarea v-model="alamat" placeholder="Tambahkan alamat"></textarea>
    <br>

    <input type="checkbox" id="Nasi" value="Nasi" v-model="checked">
    <label for="Nasi">Nasi</label>
    <input type="checkbox" id="Kentang" value="Kentang" v-model="checked">
    <label for="Kentang">Kentang</label>
    <br>

    <input type="radio" id="one" value="One" v-model="picked">
    <label for="one">One</label>
    <br>
    <input type="radio" id="two" value="Two" v-model="picked">
    <label for="two">Two</label>
    <br>
    <span>Yang dipilih: {{ picked }}</span>

    <br>
    <select v-model="selected">
        <br>
        <option disabled value="">Pilih salah satu</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
    </select>
    <span>Yang dipilih : {{ selected }}</span>
</template>

<script>
    export default{
        data(){
            return{
                nama : "",
                alamat : "",
                checked : "",
                picked : "",
                selected : "",
            }
        }
    }
</script>