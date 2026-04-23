import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";

class YZRequest {
    constructor(baseURL, timeout) {
        this.instance = axios.create({
            baseURL,
            timeout
        })

        // 响应拦截器
        this.instance.interceptors.response.use(response => {
            return response.data
        }, error => {
            return Promise.reject(error)
        })
    }

    request(config) {
        return this.instance.request(config)
    }

    get(config) {
        return this.request({ ...config, method: 'get' })
    }

    post(config) {
        return this.request({ ...config, method: 'post' })
    }
}

export default new YZRequest(BASE_URL, TIMEOUT)