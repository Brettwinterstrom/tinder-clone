import axios from 'axios';

const instance = axios.create({
    baseURL: "https://tinder-backend-forfun.herokuapp.com"
})

export default instance;