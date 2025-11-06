import axios from 'axios';
import * as process from 'process';

const $host = axios.create({
    baseURL: process.env.API_URL
});

export {
    $host
}
