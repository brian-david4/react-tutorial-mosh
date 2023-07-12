import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'f14ceb84bc0841f587667fab9c3846f4'
    }
})
