<template>
  <div class="container mt-5">
      <h2 class="text-center">Spara kundvagnen</h2>

      <div v-if="!loggedIn">
          <p class="text-center">Du behöver <router-link to="/login" class="text-secondary">logga in</router-link> för att kunna spara din kundvagn.</p>
      </div>

      <div class="mt-5" v-if="loggedIn">
          <form class="p-5 border" @submit.prevent="onSubmit">

            <shopping-cart-product v-for="item in shoppingCart" :key="item.product._id" :item="item" v-model="items" />

            <div v-if="shoppingCart.length < 1" class="cart-item">
                <div class="text-center mt-3"> Här var det tomt.</div>
                <div class="dropdown-divider"></div>
            </div>

            <div class="p-3">
                <div class="total-price text-end">
                    <strong>Att betala:  <span class="ms-1">{{ cartTotal }} SEK</span></strong>
                    <p><small>{{ cartItemCount }} st produkter</small></p>
                </div>
                <div class="d-flex justify-content-between mt-5">
                    <div class="form-outline">
                        <input type="text" id="name" class="form-control" v-model="name" />
                        <label class="form-label" for="name">Namnge kundvagn</label>
                    </div>
                    <button type="submit" class="btn btn-secondary">Spara kundvagn</button>
                </div>
            </div>
          </form>

      </div>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ShoppingCartProduct from '../components/shoppingcart/ShoppingCartProduct.vue'
export default {
    data() {
        return {
            cart: {
                items: '',
                name: ''
            }
        }
    },
    components: { 
      ShoppingCartProduct 
    },
    computed: {
        ...mapGetters(['loggedIn', 'shoppingCart', 'cartItemCount', 'cartTotal', 'user'])
    },
    methods: {
        ...mapActions(['saveCart']),
        onSubmit() {
            if(this.cart.items !== '' && this.cart.name !== '') {
                this.saveCart(this.cart)
            }
        }
    }
}
</script>

<style>

</style>