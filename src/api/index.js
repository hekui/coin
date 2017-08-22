import axios from 'axios'
import {Message} from 'element-ui'
const apiContext = ''

let methods = ['get', 'post', 'delete']
// let token = ''

// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
// axios.defaults.headers.post['Content-Type'] = 'application/json'
// application/x-www-form-urlencoded
// application/json

class Api {
  constructor () {
    methods.forEach(method => {
      this[method] = (path, data = {}) => new Promise((resolve, reject) => {
        // axios.defaults.headers.common['userToken'] = token
        // axios.defaults.headers.common['token'] = token
        axios({
          method: method,
          url: apiContext + path,
          // timeout: 4500,
          data: data
        }).then(res => {  // axios[method](apiContext + path, data)
          // console.log('request:', 'get', apiContext + path)
          console.log('res', res)
          if (res.status === 200) {
            // if (res.data && res.data.status === 0) {
            if (res.data) {
              resolve(res.data)
            } else {
              reject(res.data)
            }
          }
        }).catch(error => {
          console.log('error.response', error.response)
          console.log('error.request', error.request)
          if (error.response) {
            Message({type: 'error', message: error.response.msg})
          } else {
            Message({type: 'error', message: error.message})
          }
        })
      })
    })
  }
}
export default new Api()
