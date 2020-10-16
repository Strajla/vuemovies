<template>
  <nav class="navbar navbar-light bg-light justify-content-between">
    <form class="form-inline">
      <input
        class="form-control mr-sm-2"
        type="search"
        placeholder="Search movie you want"
        aria-label="Search"
        @input="handleSearchTextChange"
      />
    </form>
    <router-link to="/" class="navbar-brand">Movies</router-link>
    <router-link to="/" class="navbar-brand">Add Movies</router-link>
  </nav>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "NavBar",
  components: {},

  computed: {
    ...mapGetters(["movies", "filteredMovies"]),
  },
  methods: {
    ...mapMutations(["setSearchText"]),
    handleSearchTextChange(event) {
      this.setSearchText(event.target.value);
    },
  },
};
</script>

<style lang="stylus" scoped></style>
