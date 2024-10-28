import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
    params: {
        appid: '2a50b8b9d794fcab1400ec722eb7525b',
    }
});
