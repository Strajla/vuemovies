<template>

<div >
            <div class="card"  style="width: 350px; margin-bottom: 30px;">
            <img class="card-img-top" :src="movie.imageUrl" alt="Card image cap">
            <div class="card-body" :class="{'is-selected': isSelected}">
            <h5 class="card-title">{{movie.title}}</h5>
            </div>
             <ul class="list-group list-group-flush" >
            <li class="list-group-item" :class="{'is-selected':isSelected}">{{movie.genre}}</li>
            <li class="list-group-item" :class="{'is-selected':isSelected}">{{movie.duration}}</li>
            <li class="list-group-item" :class="{'is-selected':isSelected}">{{movie.director}}</li>
            <li class="list-group-item" :class="{'is-selected':isSelected}">{{movie.releaseDate}}</li>

            </ul>
                <div class="card-body" :class="{'is-selected':isSelected}">
                <button type="button" @click="onClick" class="btn btn-outline-info">Select</button>
                <button type="button" @click="deleteMovie(movie.id)" class="btn btn-danger">Delete</button>
            </div>
        </div>
    </div>
  </template>

  <script>
       import {mapActions} from 'vuex'
    export default {
    name: 'MovieCard',
    props: {
        movie:Object,
        isSelected: Boolean
    },
    methods: {
       onClick() {
           this.$emit('movie-selected', this.movie);
       },
        ...mapActions( [
            'deleteMovie'
        ])
    },

    }
  </script>

  

  <style scoped>
    img {
        height: 500px;
    }

    .is-selected {
        background-color: #5CDB94
    }

  </style>