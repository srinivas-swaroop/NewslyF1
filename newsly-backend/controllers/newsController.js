// controllers/newsController.js
const { getGlobalNews } = require('../services/newsService');

const getGlobalNewsController = async (req, res) => {
    try {
        const { category, page } = req.query; // optional query params
        const newsData = await getGlobalNews('en', category || '', page || 1);
        res.status(200).json(newsData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getGlobalNewsController };
