import axios from 'axios';

class Movies {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:3000/api';
    }
    async getAll() {
        const response = await axios.get('/movies');

        return response.data
    }
}

export const movies = new Movies(); 