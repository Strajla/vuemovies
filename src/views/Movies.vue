<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <AppMovies/>
  </div>
</template>

<script>
// @ is an alias to /src
import AppMovies from '@/components/AppMovies.vue'
export default {
  name: 'app-movies',
  components: {
    AppMovies
  }
}
</script>