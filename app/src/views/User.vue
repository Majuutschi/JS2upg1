<template>
  <div class="container mt-5">
      <div v-if="loggedIn">
        <h2 class="text-center">Mina sidor</h2>

        <user-page :user="user" />
      </div>
      <div class="text-center" v-if="!loggedIn">
          <h2>Sidan finns inte</h2>
          <p>Du behöver <router-link to="/login" class="text-secondary">logga in</router-link> för att se dina sidor</p>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserPage from '../components/userPage/UserPage.vue'

export default {
    components: { 
        UserPage 
    },
    computed: {
        ...mapGetters(['loggedIn'])
    }

}
</script>

<style>

</style>