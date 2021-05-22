//Service layer

import axios from 'axios'

const host = 'http://localhost:3001'

//Api to get the latest News
const getLatestNews = async () => await axios.get(`${host}/getLatestNews`)

//Api to get the news articles based on searched keyword 
const getSearchKeyword = async (keyword) => await axios.get(`${host}/search?keyword=${keyword}`)

export default {
    getLatestNews,
    getSearchKeyword
}