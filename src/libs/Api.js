import axios from "axios";

class CitiesAPI {
    constructor() {
        console.log('process.env.REACT_APP_API_URI', process.env.REACT_APP_API_URI)
        this.citiesApi = axios.create({
            baseURL: process.env.REACT_APP_API_URI,
            timeout: 15000,
        });

    }

    getCities = (offset, limit, filter) =>
        this.citiesApi.get(`cities?offset=${offset}&limit=${limit}&filter=${filter}`, {
            offset, limit, filter
        });

    getCity = (id) =>
        this.citiesApi.get(`cities/${id}`);

    getMyCities = (payload = {}) =>
        this.citiesApi.get(`preferences/cities`, {
            ...payload
        });

    /* HELPERS */
    parseRequestError = error => {
        let errorParsed = {
            message: "Our service is not working for a while 😑. Sorry.",
            title: "Error"
        };
        try {
            const errorExist = error && error.response && error.response.data;
            console.log('parsedError', errorExist)
            if (
                errorExist /* && error.response.data.status === "Error" */ &&
                error.response.data.message
            ) {
                errorParsed.message = error.response.data.message;
            } else if (
                errorExist &&
                Array.isArray(error.response.data.errors) &&
                error.response.data.errors.length > 0
            ) {
                errorParsed.message = error.response.data.errors[0].description;
            } else if (error.message) {
                errorParsed.message = error.message;
                errorParsed.stack = error.stack;
            }
        } catch (error) {
            errorParsed.message = error.message;
            errorParsed.stack = error.stack;
        }
        return errorParsed;
    };
}

export default CitiesAPI;
