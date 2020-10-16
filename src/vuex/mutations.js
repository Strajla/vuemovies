export const mutations = {
    setMovies(state, payload) {
        state.movies = payload
    },
    deleteMovie(state,id) {
        state.movies = state.movies.filter(movies => movies.id !== id);
    }
} 