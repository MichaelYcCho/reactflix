import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "eedd8d97dba4b2f4046143c99b975449",
        language: "en-US"
    }
});

export default api;