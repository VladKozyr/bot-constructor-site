import axios from "axios";
import {BACKEND_URL} from "../../config";

export default function client(endpointPath, {body, ...customConfig} = {}, token = '') {

    let headers = {
        'Content-Type': 'application/json'
    };

    if(token.length !== 0) {
        headers['Authorization'] = token;
    }

    const config = {
        method: body ? 'POST' : 'GET',
        ...customConfig,
        headers: {
            ...headers,
            ...customConfig.headers
        }
    };

    if (body) {
        config.data = JSON.stringify(body);
    }

    config.url = `${BACKEND_URL}/${endpointPath}`;

    console.log(config);

    return axios(config);
}