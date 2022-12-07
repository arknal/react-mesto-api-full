import axios from "axios";

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://api.arknal.nomoredomains.club' : 'http://localhost:5000'

const $host = axios.create({
  baseURL: baseUrl
})

const $authHost = axios.create({
  baseURL: baseUrl
})

const authInterceptor = config => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
  return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
  $host,
  $authHost
}