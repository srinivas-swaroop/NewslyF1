

# 📰 Newsly

**Newsly** is a full-stack  (MERN) web application designed to deliver **global, regional, and personalized news feeds** through a clean and modern interface.

---

## 📁 Project Structure

```
Newsly/
├── newsly-backend/        # Backend (Node.js + Express + MongoDB)
├── newsly-frontend/       # Frontend (React)
├── .gitignore
└── README.md
```

---

## ⚡ Features

* 🌍 **Global Coverage** – Stay updated with the latest international headlines.
* 📍 **Regional Updates** – Get news relevant to your country and locality.
* ⭐ **Personalized Feeds** – Curated articles based on your chosen topics and interests.
* ⚡ **Fast & Responsive UI** – Built using modern frontend technologies.
* 📡 **Real-time API** – Backend serves dynamic data with  and .

---

## 🖥️ Tech Stack

**Frontend:**

*
* &#x20;/  (choose whichever you used)
* &#x20;(custom styling)

**Backend:**

*
*
* &#x20;/&#x20;

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/newsly.git
cd newsly
```

---

### 2. Install dependencies

**Backend**

```bash
cd newsly-backend
npm install
```

**Frontend**

```bash
cd ../newsly-frontend
npm install
```

---

### 3. Setup environment variables

Create a `.env` file inside `newsly-backend/` with your config:

```env
PORT=5000
MONGO_URI=<your-mongodb-connection-string>
NEWS_API_KEY=<your-news-api-key>
```

---

### 4. Run the project

**Start backend:**

```bash
cd newsly-backend
npm run dev
```

**Start frontend:**

```bash
cd ../newsly-frontend
npm run dev
```

Then open **[http://localhost:5173](http://localhost:5173)** (or whichever port shows) in your browser.

---

