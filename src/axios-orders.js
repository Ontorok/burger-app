import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-nasir.firebaseio.com/'
});

export default instance;