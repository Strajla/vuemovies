export const mutations = {
    setMovies(state, payload) {
        state.movies = payload
    },
    deleteMovie(state,id) {
        console.log('mutacija')
        state.movies = state.movies.filter(movies => movies.id !== id);
    },
    setSearchText(state, searchText) {
        state.searchText = searchText;
    }
} 