import Vuex from "vuex";
import Vue from 'vue'
import {mutations} from './mutations'
import {actions} from './actions'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        counter: 0,

        movies: [],
        searchText: ''
    },

    getters: {
        movies: ({movies}) => movies,
        filteredMovies: state =>state.movies.filter(movie =>movie.title.toLowerCase().indexOf(state.searchText.toLowerCase()) > -1)
    },

    mutations,
    actions
}) 