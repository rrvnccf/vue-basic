<template>
  <h1>views</h1>

  <User/>

</template>

<script>

import User from "./views/User.vue"
import Client from "../client.vue"

// panggil halaman views dari difolder mana / halaman apa 

export default {
  
  components: {
    User,
    Client,
  }
}
</script>

