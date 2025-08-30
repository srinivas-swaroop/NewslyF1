// controllers/newsController.js
import axios from "axios";

const API_KEY = process.env.NEWSDATA_API_KEY; // store in .env

// 🌍 Global News
export const getGlobalNewsController = async (req, res) => {
  try {
    const response = await axios.get(
      `https://newsdata.io/api/1/news?apikey=${API_KEY}&language=en`
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ message: "Error fetching global news", error: err.message });
  }
};

// 🇮🇳 Country-Specific News
export const getCountryNewsController = async (req, res) => {
  try {
    const { country, category, page, language } = req.query;

    const response = await axios.get("https://newsdata.io/api/1/news", {
      params: {
        apikey: process.env.NEWSDATA_API_KEY,
        language: language || "en",
        country,   // will be undefined if not passed
        category,
        page,
      },
    });

    res.json(response.data);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching news", error: err.message });
  }
};

