<template>
  <div class="container p-5 height">
      <h2 class="mb-5 text-center">Skapa konto</h2>
      <form class="p-5 text-center border" @submit.prevent="onSubmit">
        <!-- 2 column grid layout with text inputs for the first and last names -->
        <div class="row mb-4">
            <div class="col">
                <div class="form-outline">
                    <input type="text" id="firstName" class="form-control" v-model="user.firstName" />
                    <label class="form-label" for="firstName">Förnamn</label>
                </div>
            </div>
            <div class="col">
                <div class="form-outline">
                    <input type="text" id="lastName" class="form-control" v-model="user.lastName" />
                    <label class="form-label" for="lastName">Efternamn</label>
                </div>
            </div>
        </div>

        <!-- Email input -->
        <div class="form-outline mb-4">
            <input type="email" id="email" class="form-control"  v-model="user.email" />
            <label class="form-label" for="email">E-postadress</label>
        </div>

        <!-- Password input -->
        <div class="form-outline mb-4">
            <input type="password" id="password" class="form-control"  v-model="user.password" />
            <label class="form-label" for="password">Lösenord</label>
        </div>


        <!-- Submit button -->
        <button type="submit" class="btn btn-secondary px-3 my-5">Registrera konto</button>

        <div class="text-center">Redan medlem? <router-link to="/login" class="text-secondary">Logga in</router-link></div>

    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            user: {
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions(['register']),
        onSubmit() {
            if(this.user.firstName !== '' && this.user.lastName !== '' && this.user.email !== '' && this.user.password !== '') {
                this.register(this.user)
            }
        }
    }
}
</script>

<style>

</style>