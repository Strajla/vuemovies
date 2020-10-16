<template>
  <div class="hello">
    <h1>Movies</h1>

    <div class="d-flex justify-content-around  flex-wrap">
   

   <movie-card v-for="movie in filteredMovies" :key="movie.id" :movie="movie" > 

    </movie-card>
     <div v-if="!filteredMovies.length">
        <h1>We are sorry, but there is no movie with this title</h1>
    </div>

    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import MovieCard from './MovieCard'
import {store} from '../vuex/store'


export default {
  name: 'AppMovies',
  components: {
    MovieCard
  },

  computed: {
    ...mapGetters([
       'movies',
          'filteredMovies'
  
      ]),
  },

  methods: {
    ...mapActions([
      'fetchMovies'
    ])
  },

  created() {
    this.fetchMovies();
     },

     
    beforeRouteEnter(to,from, next) {
      console.log('AppMovies BeforeRouteEnter', to,from, next );
      console.log("STORE: ", {movies: store.movies} )
  }

}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

h1 {
  margin-bottom: 30px;
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