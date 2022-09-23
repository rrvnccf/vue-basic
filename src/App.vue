<template>
  <nav> 
    <router-link to="/">Home | </router-link>
    <router-link to="/about">About | </router-link>
    <router-link to="/contact">Contact | </router-link>
  </nav>

  <hr />

  <router-view />

  <hr />
  <h1>views</h1>

  <User/>
  <Animals/>
  <Text/>
  <Flowers/>
  <Render/>
  <Bindings/>

</template>

<script>

import User from "./views/User.vue"
import Client from "../client.vue"
import Animals from "./views/Animals.vue"
import Text from "./components/Text.vue"
import Flowers from "./views/Flowers.vue"
import Render from "./views/Render.vue"
import Bindings from "./views/Bindings.vue"


// panggil halaman views dari difolder mana / halaman apa 

export default {
  
  components: {
    User,
    Client,
    Animals,
    Text,
    Flowers,
    Render,
    Bindings
  }
}
</script>

