
import SubscribeAPI from './SubscribeAPI.js'
import API from './API';


const ARQService = {
  subscribe (email) {
    return SubscribeAPI.post('subnews/ARQLLC/' + email)
  },
  registration (data) {
    return API.post('signup', data)
  }
}

export default ARQService

