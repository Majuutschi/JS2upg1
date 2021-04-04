<template>
  <div class="container mt-5 height">
        
      
        <div class="d-flex" v-if="product">
            <div class="bg-image mt-3">
                    <img :src="product.image" class="img-fluid"/>
                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>

            </div>
            <div class="card-body p-5">
                <h2 class="card-title">{{ product.name }}</h2>
                <p class="card-text">{{ product.desc }}</p>
                
                <h6>Pris: {{ product.price }} SEK</h6>
                <button class="btn btn-success mt-3" @click="addProductToCart({ product, quantity })">LÄGG I KUNDVAGNEN</button>
            </div>
        </div>
        <div class="text-center" v-else>
            <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    props: ['id'],
    data() {
        return {
            quantity: 1
        }
    },
    methods: {
        ...mapActions(['getAProduct', 'addProductToCart', 'clearProduct'])
    },
    computed: {
        ...mapGetters(['product'])
    },
    created() {
        this.getAProduct(this.id)
    },
    destroyed() {
        this.clearProduct()
    }
}
</script>

<style>

</style>