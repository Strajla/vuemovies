<template>
  <div class="hello">
    <h1>Movies</h1>

    <div>Number of selected: {{ numberOfSelectedMovies }}</div>

    <div class="card-body">
      <div class="btn-group">
        <button
          type="button"
          @click="setSortingCriteria('title')"
          class="btn btn-primary"
        >
          Sort by title
        </button>

        <button
          type="button"
          @click="setSortingCriteria('duration')"
          class="btn btn-secondary"
        >
          Sort by duration
        </button>
      </div>
    </div>

    <div class="card-body">
      <div class="btn-group">
        <button
          type="button"
          @click="setSortingDirection(-1)"
          class="btn btn-primary"
        >
          Asc
        </button>
        <button
          type="button"
          @click="setSortingDirection(1)"
          class="btn btn-secondary"
        >
          Desc
        </button>
      </div>
    </div>

    <div class="d-flex justify-content-around  flex-wrap">
      <movie-card
        v-for="movie in moviesPage"
        :key="movie.id"
        :movie="movie"
        @movie-selected="handleMovieSelected"
        :isSelected="getIsMovieSelected(movie)"
      >
      </movie-card>
      <div v-if="!filteredMovies.length">
        <h1>We are sorry, but there is no movie with this title</h1>
      </div>
    </div>

    <div class="card-body">
      <button type="button" @click="selectAll" class="btn btn-outline-dark">
        Select All
      </button>
      <button
        type="button"
        @click="deselectAll"
        class="btn btn-outline-warning"
      >
        Deselect All
      </button>
    </div>

    <pagination-buttons
      :num-of-items="sortedFilteredMovies.length"
      @current-page-changed="goToPage"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import MovieCard from "./MovieCard";
import { store } from "../vuex/store";
import PaginationButtons from "./PaginationButtons";

const PAGE_SIZE = 2;

export default {
  name: "AppMovies",
  components: {
    MovieCard,
    PaginationButtons,
  },
  data() {
    return {
      selectedMovies: [],
      sortingCriteria: "title",
      sortDirection: -1,
      currentPage: 1,
    };
  },
  computed: {
    ...mapGetters(["filteredMovies"]),
    numberOfSelectedMovies() {
      return this.selectedMovies.length;
    },
    sortedFilteredMovies() {
      return this.filteredMovies
        .map((m) => ({ ...m, duration: parseInt(m.duration) }))
        .sort((movieA, movieB) =>
          movieA[this.sortingCriteria] < movieB[this.sortingCriteria]
            ? this.sortDirection
            : -1 * this.sortDirection
        );
    },

    moviesPage() {
      return this.sortedFilteredMovies.slice(
        (this.currentPage - 1) * PAGE_SIZE,
        this.currentPage * PAGE_SIZE
      );
    },
  },
  methods: {
    ...mapActions(["fetchMovies"]),
    handleMovieSelected(movie) {
      console.log("Movie SELECTED", { movie });
      if (this.getIsMovieSelected(movie)) {
        return;
      }
      this.selectedMovies.push(movie);
    },
    getIsMovieSelected(movie) {
      return !!this.selectedMovies.find((m) => m.id == movie.id);
    },
    selectAll() {
      this.selectedMovies = this.filteredMovies.map((movie) => movie);
    },
    deselectAll() {
      this.selectedMovies = [];
    },
    setSortingCriteria(field) {
      this.sortingCriteria = field;
    },
    setSortingDirection(direction) {
      this.sortDirection = direction;
    },

    goToPage(page) {
      this.currentPage = page;
    },
  },
  created() {
    this.fetchMovies();
  },
  beforeRouteEnter(to, from, next) {
    console.log("AppMovies BeforeRouteEnter", to, from, next);
    console.log("STORE: ", { movies: store.movies });
  },
};
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
