const express = require("express");
const cors = require('cors')
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

//API_KEY and PORT from .env file
const PORT = process.env.PORT || 3005;
const API_KEY = process.env.API_KEY

const HOST = 'https://newsapi.org/v2'

const app = express();
app.use(cors()) 


//API to get the latest news
app.get("/getLatestNews",(req, res) => {
    axios.get(`${HOST}/top-headlines?country=gb&apiKey=${API_KEY}`)
    .then((response) => {
        res.send(response.data)
    })
  });

//API to search based on keyword
app.get("/search", (req, res) => {
    const { keyword } = req.query
    axios.get(`${HOST}/everything?q=${keyword}&apiKey=${API_KEY}`)
    .then((response) => {
        res.send(response.data)
    })
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});