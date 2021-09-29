import Axios from 'axios';

const ApiMarvel = Axios.create({
   //  baseURL: 'https://gateway.marvel.com:443/',,
    baseURL: 'http://gateway.marvel.com/',
    timeout: 0,
    headers: {}
});



export default ApiMarvel;