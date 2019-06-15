
import Api from './Api.js'



const ARQService = {
  subscribe (email) {
    return Api.post('subnews/ARQLLC/' + email)
  }
}

export default ARQService

