import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://api.duyiedu.com/api'
})

instance.interceptors.request.use(config => {
  config.params = {
    ...config.params,
    appkey: '15813824868_1550720522459'
  }
  return config
}, error => {
  return Promise.reject(error)
})

export default instance
