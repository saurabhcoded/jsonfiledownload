import axios from 'axios'
const useApi = () => {
  const endpoint = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL
  })
  return endpoint
}

export default useApi