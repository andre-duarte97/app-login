import axios from 'axios'

const baseURL = `${process.env.VUE_APP_URL_API}`
const createClient = (options = { baseURL }) => axios.create(options)
const http = createClient()
export default http
