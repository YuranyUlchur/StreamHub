import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = '876d0650d754148bec386c2a98c11caf';

export const ApiServicesGenre = {
    fetchData: async () => {
        try {
            const response = await axios.get(`${API_URL}/genre/movie/list?api_key=${API_KEY}`);
            console.log(response)
            return response.data;
        } catch (error) {
            console.error('Error fetching movies:', error);
            throw error;
        }
    }
};

export const ApiServicesMovie = {
    fetchData: async (id) => {
        try {
            console.log(id)
            const response = await axios.get(`${API_URL}/discover/movie?sort_by=popularity.desc&with_genres=${id}&api_key=${API_KEY}`);
            console.log(response)
            return response.data;
        } catch (error) {
            console.error('Error fetching movies:', error);
            throw error;
        }
    }
};

export const ApiServicesDetails = {
    fetchData: async (id) => {
        try {
            console.log(id)
            const response = await axios.get(`${API_URL}/movie/${id}?api_key=${API_KEY}`);
            console.log(response)
            return response.data;
        } catch (error) {
            console.error('Error fetching movies:', error);
            throw error;
        }
    }
};
