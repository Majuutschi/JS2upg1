<template>
  <!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
  <!-- Container wrapper -->
  <div class="container">
    <!-- Navbar brand -->
    <router-link to="/" class="navbar-brand"><i class="fas fa-splotch"></i> stuff.se</router-link>

    <!-- Toggle button -->
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <!-- Collapsible wrapper -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!-- Left links -->
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Startsida</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/products">Produkter</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">Om oss</router-link>
        </li>
        
      </ul>
      <!-- Left links -->
        <ul class="navbar-nav">
            <!-- Navbar dropdown -->
            <li class="nav-item dropdown me-3">
                <a class="nav-link dropdown" href="#" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false" >
                    <i class="fas fa-shopping-cart"></i>
                    <span v-show="cartItemCount" class="badge rounded-pill badge-notification bg-success">{{ cartItemCount }}</span>
                </a>
            <!-- Dropdown menu -->
                <ul class="dropdown-menu dropdown-menu-end shopping-cart" aria-labelledby="navbarDropdown">
                    <shopping-cart />
                </ul>
            </li>

            <li class="nav-item dropdown" v-if="loggedIn">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false" >
                    <i class="fas fa-user"></i>
                </a>
            <!-- Dropdown menu -->
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                  <li class="nav-item">
                      <router-link class="nav-link text-dark" to="/user">Mina sidor</router-link>
                  </li>
                </ul>
            </li>

            <li class="nav-item" v-if="!loggedIn">
              <router-link class="nav-link" to="/login">Logga in</router-link>
            </li>
            <li class="nav-item" v-if="loggedIn">
              <a href="#" class="nav-link" @click="logout">Logga ut</a>
            </li>

        </ul>
      <!-- Search form -->

    </div>
    <!-- Collapsible wrapper -->
  </div>
  <!-- Container wrapper -->
</nav>
<!-- Navbar -->
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ShoppingCart from '../shoppingcart/ShoppingCart.vue'

export default {
  components: { 
    ShoppingCart 
  },
  computed: {
    ...mapGetters(['cartItemCount', 'loggedIn'])
  },
  methods: {
    ...mapActions(['logout'])
  }

}
</script>

<style scoped>
 .shopping-cart {
     min-width: 450px;
 }
</style>