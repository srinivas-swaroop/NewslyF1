// controllers/newsController.js
import axios from "axios";
import User from "../models/User.js";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.NEWSDATA_API_KEY;
  console.log(API_KEY);
 // store in .env

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


export const getPersonalizedNewsController = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);

    if (!user || !user.preferences) {
      return res.status(400).json({ message: "No preferences set for user" });
    }

    const { categories, countries, keywords } = user.preferences;

    // Build query string
    let url = `https://newsdata.io/api/1/news?apikey=${API_KEY}&language=en`;

    if (categories?.length > 0) {
      url += `&category=${categories.join(",")}`;
    }
    if (countries?.length > 0) {
      url += `&country=${countries.join(",")}`;
    }
    if (keywords?.length > 0) {
      url += `&q=${keywords.join(" OR ")}`;
    }

    console.log(url);

    const response = await axios.get(url);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ message: "Error fetching personalized news", error: err.message });
  }
};



