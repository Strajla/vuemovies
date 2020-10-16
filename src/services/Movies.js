import axios from 'axios';

class Movies {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:3000/api';
    }
    async getAll() {
        const response = await axios.get('/movies');

        return response.data
    }

    
    deleteMovie(id) {
        return this.axios.delete(`/movies/${id}`)
    }
}

export const movies = new Movies(); 