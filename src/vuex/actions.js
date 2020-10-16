import {movies} from '../services/Movies'

export const actions= {
    async fetchMovies(state) {
        const data = await movies.getAll();
        state.commit('setMovies', data);
    },

    async deleteMovie(state, payload) {
        await movies.deleteMovie(payload);
        state.commit('deleteMovie', payload)
    }
} 