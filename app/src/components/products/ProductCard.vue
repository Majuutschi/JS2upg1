<template>
  <div class="col">
        <div class="card container h-100">
            <div class="bg-image ripple mt-4">
                <img :src="product.image" class="img-fluid"/>
            <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
             
            </div>
            <div class="card-body">
                <h5 class="card-title">{{ product.name }}</h5>
                <p class="card-text">{{ product.desc }}</p>
                <h6 class="mb-3">Pris: {{ product.price }} SEK</h6>
                <router-link :to="{name: 'ProductDetails', params: {id: product._id}}" type="button" class="btn btn-secondary">Se produkt</router-link>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    props: ['product']
}
</script>

<style>

</style>