<template>
  <div class="hello">
    <h1>Movies</h1>

    <movie-card v-for="movie in movies" :key="movie.id" :movie="movie"> 

    </movie-card>

  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import MovieCard from './MovieCard'


export default {
  name: 'AppMovies',
  components: {
    MovieCard
  },

  computed: {
    ...mapGetters([
      'movies'
    ])
  },

  methods: {
    ...mapActions([
      'fetchMovies'
    ])
  },

  created() {
    this.fetchMovies();
  }

}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>