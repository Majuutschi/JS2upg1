<template>
  <div class="mt-5">
      
      <shopping-cart-product v-for="item in shoppingCart" :key="item.product._id" :item="item" />

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ShoppingCartProduct from '../shoppingcart/ShoppingCartProduct.vue'
export default {
  components: { 
    ShoppingCartProduct 
  },
  computed: {
    ...mapGetters(['shoppingCart'])
  }
}
</script>

<style>

</style>