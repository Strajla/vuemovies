import { movies } from "../services/Movies";

export const actions = {
  async fetchMovies(state) {
    const data = await movies.getAll();
    state.commit("setMovies", data);
  },

  deleteMovie(state, id) {
    console.log("akcija");
    movies.deleteMovie(id);
    console.log("akcija posle await");
    state.commit("deleteMovie", id);
  },
};
