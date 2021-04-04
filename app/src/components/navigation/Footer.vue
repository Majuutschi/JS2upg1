<template>
  <div>
    <section class="mt-5">
        <!-- Footer -->
        <footer class="text-center text-white bg-secondary">
            <!-- Grid container -->
            <div class="container p-4 pb-0">
            <!-- Section: CTA -->
            <section>
                <p class="d-flex justify-content-center align-items-center">
                <span class="me-3">Inte medlem?</span>
                <router-link to="/register" type="button" class="btn btn-outline-light btn-rounded">
                    Skapa konto
                </router-link>
                </p>
            </section>
            <!-- Section: CTA -->
            </div>
            <!-- Grid container -->

            <!-- Copyright -->
            <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.5);">
            © 2021 
            <router-link to="/" class="text-white"><i class="fas fa-splotch"></i> stuff.se</router-link>
            </div>
            <!-- Copyright -->
        </footer>
        <!-- Footer -->
    </section>  
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>