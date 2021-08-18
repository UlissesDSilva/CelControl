import axios from 'axios'

const BASE_URL = 'https://celcontrol-api.herokuapp.com'

export const api = axios.create({
    baseURL: BASE_URL
})

