import axios from "axios"
const api = axios.create({
  baseURL: 'https://fakestoreapi.com'
})
 
api.interceptors.request.use((config) => {
  config.headers["Accept"] = "application/json"
  return config
})

export default api
