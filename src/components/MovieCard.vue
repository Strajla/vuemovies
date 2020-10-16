<template>

<div >
        <div class="card" style="width: 350px; margin-bottom: 30px;">
            <img class="card-img-top" :src="movie.imageUrl" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">{{movie.title}}</h5>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">{{movie.genre}}</li>
            <li class="list-group-item">{{movie.duration}}</li>
            <li class="list-group-item">{{movie.director}}</li>
            <li class="list-group-item">{{movie.releaseDate}}</li>
            </ul>
            <div class="card-body">
                <button type="button" class="btn btn-success">Edit</button>
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
            movie:Object
        },

        methods: {

            ...mapActions([

                'deleteMovie'
            
            ])
        },
    }

  </script>

  <style scoped>
    img {
        height: 500px;
    }
  </style>