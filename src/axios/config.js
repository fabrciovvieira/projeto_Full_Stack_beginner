import axios from 'axios'

const beiraMarFetch = axios.create({
    baseURL: "http://localhost:3000/api/",
    headers: {
        "Content-Type": "application/json",
    },
})


export default beiraMarFetch;