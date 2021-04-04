<template>

  <div class="container my-5 py-5 z-depth-1 height">

 
    <!--Section: Content-->
    <section class="px-md-5 mx-md-5 dark-grey-text text-center text-lg-left">

      <!--Grid row-->
      <div class="row">

        <!--Grid column-->
        <div class="col-lg-6 mb-4 mb-lg-0 d-flex align-items-center justify-content-center">

          <img src="https://images.pexels.com/photos/385997/pexels-photo-385997.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="img-fluid" alt="">

        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-6 mb-4 mb-lg-0">

          <h3 class="font-weight-bold">Välkommen till stuff.se</h3>

          <p class="font-weight-bold">Här finns allt du inte visste att du behövde som t.ex. en liten söt bil.</p>

          <p class="text-muted">Hoppa in i butiken och se vad du villhöver idag!</p>

          <router-link to="/products" class="font-weight-bold text-secondary">Butiken hittar du här</router-link>

        </div>
        <!--Grid column-->

      </div>
      <!--Grid row-->


    </section>
    <!--Section: Content-->


  </div>
</template>

<script>



export default {
  name: 'Home',
  components: {
    
  }
}
    
</script>
<style>
  .height {
    min-height: 50vh;
  }
</style>