<template>
  <div class="container p-5 height">
      <h2 class="text-center mb-5">Logga in</h2>
      <form class="text-center p-5" @submit.prevent="onSubmit">
    <!-- Email input -->
    <div class="form-outline mb-4">
        <input type="email" id="email" class="form-control" v-model="email" />
        <label class="form-label" for="email">E-postadress</label>
    </div>

    <!-- Password input -->
    <div class="form-outline mb-4">
        <input type="password" id="password" class="form-control" v-model="password" />
        <label class="form-label" for="password">Lösenord</label>
    </div>

    <!-- Submit button -->
    <button type="submit" class="btn btn-secondary px-5 my-5">Logga in</button>

    <div class="text-center">Inte medlem? <router-link to="/register" class="text-secondary">Skapa konto</router-link></div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        ...mapActions(['login']),
        onSubmit() {
            if(this.email !== '' && this.password !== '') {
                let user = {
                    email: this.email,
                    password: this.password
                }

                let route = this.$route.query.redirect
                this.login({user, route})
            }
        }
    }
}
</script>

<style>

</style>