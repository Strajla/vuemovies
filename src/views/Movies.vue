<template>
  <div class="home">

    <AppMovies/>
    <MovieCard/>
  </div>
</template>

<script>
// @ is an alias to /src
import AppMovies from '@/components/AppMovies.vue'
import MovieCard from '@/components/MovieCard'
export default {
  name: 'app-movies',
  components: {

    AppMovies,
    MovieCard
  }
}
</script>