<template>
    <div id="nav">
      <router-link to="/" class="navbar-brand">Movies</router-link> 
      <router-link to="/" class="navbar-brand">Add Movies</router-link>
      <input class="form-control" placeholder="Search any movie you like" @input="handleSearchTextChange" /> 
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {

    name: 'NavBar',
    components: {
    
  },
  
  computed: {
      ...mapGetters([
          'movies',
          'filteredMovies'
      ]),
  },
    methods: {
        ...mapMutations( [
          'setSearchText'
        ]),
   handleSearchTextChange(event) {
     this.setSearchText(event.target.value)
   }
}
}
</script>

<style lang="stylus" scoped>
</style> 