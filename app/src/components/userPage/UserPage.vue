<template>
  <div>
    <div class="container mt-5">
      <h5>Mina uppgifter:</h5>
      <p>{{  }}</p>
    </div>
    <div class="container mt-5">
      <h5>Mina sparade kundvagnar:</h5>

      <user-shopping-cart /> 
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import UserShoppingCart from './UserShoppingCart.vue'

export default {
  props: ['id'],
  components: { 
    UserShoppingCart 
  },
  methods: {
    ...mapActions(['getAUser', 'clearUser'])
  },
  computed: {
    ...mapGetters(['user'])
  },
  created() {
    this.getAUser(this.id)
  },
  destroyed() {
    this.clearUser()
  }
}
</script>

<style>

</style>