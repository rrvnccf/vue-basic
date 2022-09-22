<template>
  <h1>views</h1>

  <User/>
  <Animals/>
  <Text/>
  <Flowers/>
  <Render/>

</template>

<script>

import User from "./views/User.vue"
import Client from "../client.vue"
import Animals from "./views/Animals.vue"
import Text from "./components/Text.vue"
import Flowers from "./views/Flowers.vue"
import Render from "./views/Render.vue"


// panggil halaman views dari difolder mana / halaman apa 

export default {
  
  components: {
    User,
    Client,
    Animals,
    Text,
    Flowers,
    Render,
  }
}
</script>

