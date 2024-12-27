import axios from 'axios';

//Check env of the product
// console.log(process.env);

const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (urlPath, options = {}) => {
    const response = await request.get(urlPath, options);

    return response.data;
};

export default request;
