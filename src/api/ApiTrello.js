import axios from 'axios';

// Example public board 

const key = '6aace92e1d69aea72db9c3e4f5d071dc';
const token = 'd62fcd159fc6433d4a9551c3c0890b8c38eb644b7f039dfdb143dc5b166424e2';
const API_URL_TRELLO = 'https://api.trello.com/1/cards?key='+ key +'&token=' + token



let ApiTrello = axios.create({
    baseURL: API_URL_TRELLO,
    headers: {
      'Accept': 'application/json; charset=utf-8',
      'Accept-Language': 'ru-RU,ru;q=0.5',
      'Content-Type': 'application/json'
    }
  })
  
export default ApiTrello;