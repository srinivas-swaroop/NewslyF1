// services/newsService.js
const axios = require('axios');

const API_KEY = process.env.NEWSDATA_API_KEY; // store your API key in .env
const BASE_URL = 'https://newsdata.io/api/1/news';

const getGlobalNews = async (language = 'en', category = '', page = 1) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                apikey: API_KEY,
                language,
                category,
                page
            }
        });
        return response.data; // contains news array, totalResults, status
    } catch (error) {
        console.error('Error fetching global news:', error.message);
        throw new Error('Failed to fetch global news');
    }
};

module.exports = { getGlobalNews };
