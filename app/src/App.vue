<template>
  <div id="app">
    <navbar />
    <router-view/>
    <app-footer />
  </div>
</template>

<script>
import appFooter from './components/navigation/Footer.vue'
import Navbar from './components/navigation/Navbar.vue'


export default {
  components: { 
    Navbar,
    appFooter
  },
  
}
</script>


<style>
  body {
    background: rgb(253, 246, 251);
  }
</style>
