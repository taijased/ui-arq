import axios from 'axios'


let SubscribeAPI = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    'Accept': 'application/json; charset=utf-8',
    'Accept-Language': 'ru-RU,ru;q=0.5',
    'Content-Type': 'application/json',
  }
})

export default SubscribeAPI
