import axios from 'axios';
const BASE_URL = 'https://goscrum-api.alkemy.org/';

const token =  localStorage.getItem("token")

export default axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}` 
    }
});