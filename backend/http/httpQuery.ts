import axios from "axios";

const httpQuery = axios.create({
    baseURL: 'http://localhost:8080',
})
httpQuery.defaults.headers.common['Content-Type'] = 'application/json'

export default httpQuery