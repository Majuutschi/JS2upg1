<template>
  <div class="cart-item">
      <div class="p-2 d-flex justify-content-between align-items-center">
          <div class="d-flex align-items-center">
              <img :src="item.product.image" alt="" class="img-fluid image-width">
              <div class="ms-2">
                  <div><strong>{{ item.product.name }}</strong></div>
                  <div><small>{{ item.quantity }} st x {{ item.product.price }} SEK</small></div>
              </div>
          </div>
          <div>
              <div class="btn-group btn-group-sm me-2" role="group" area-label="quantity">
                  <button class="btn btn-success" id="minus" @click.stop="subOne(item)">-</button>
                  <div class="py-1 px-2 bg-success text-white">{{ item.quantity }}</div>
                  <button class="btn btn-success" @click.stop="addOne(item)">+</button>
              </div>

              <button class="btn btn-outline-danger btn-sm" @click.stop="deleteItem(item.product._id)">X</button>
          </div>
      </div>
      <div class="dropdown-divider"></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['item'],
  methods: {
    ...mapActions(['deleteItem', 'addOne', 'subOne'])
  }
}
</script>

<style scoped>
  .image-width {
    width: 80px;
  }
</style>