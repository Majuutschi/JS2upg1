<template>
  <div class="container mt-5">
    <product-card-deck />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ProductCardDeck from '../components/products/ProductCardDeck.vue'

export default {
    components: {
        ProductCardDeck 
    },
    methods: {
      ...mapActions(['getAllProducts'])
    },
    created() {
      this.getAllProducts()
    }

}
</script>

<style>

</style>