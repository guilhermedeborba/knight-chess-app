import axios from 'axios'
import Env from '../config/env'

const axiosClient = axios.create({
  baseURL: Env.apiBaseUrl,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
})

const { get, put, post } = axiosClient

export default axiosClient

export { get, put, post }
