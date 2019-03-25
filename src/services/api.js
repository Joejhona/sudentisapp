import axios from 'axios'

const apitoken = axios.create({
    baseURL: "http://127.0.0.1:8000/gql",
    timeout: 1000,
})

//export {instance,apitoken}
export {apitoken}