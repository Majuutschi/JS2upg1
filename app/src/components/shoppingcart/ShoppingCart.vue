<template>
  <div>
      <shopping-cart-product v-for="item in shoppingCart" :key="item.product._id" :item="item" />

      <div v-if="shoppingCart.length < 1" class="cart-item">
        <div class="text-center mt-3"> Här var det tomt.</div>
        <div class="dropdown-divider"></div>
      </div>

      <div class="p-3">
        <div class="total-price text-end">
          <strong>Att betala:  <span class="ms-1">{{ cartTotal }} SEK</span></strong>
          <p><small>{{ cartItemCount }} st produkter</small></p>
        </div>
        <div class="d-flex justify-content-between mt-2" v-if="loggedIn">
          <router-link to="/savecart" class="btn btn-secondary">Spara kundvagn</router-link>
          <router-link to="/savecart" class="btn btn-success">Till kassan</router-link>
        </div>
        <div class="d-flex justify-content-between mt-2" v-if="!loggedIn">
          <router-link to="/register" type="button" class="btn btn-secondary">Skapa konto</router-link>
          <router-link to="/login" type="button" class="btn btn-secondary">Logga in</router-link>
        </div>
        
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ShoppingCartProduct from './ShoppingCartProduct.vue'

export default {
  components: { 
    ShoppingCartProduct 
  },
  computed: {
    ...mapGetters(['shoppingCart', 'cartItemCount', 'cartTotal', 'loggedIn'])
  }
}
</script>

<style>

</style>