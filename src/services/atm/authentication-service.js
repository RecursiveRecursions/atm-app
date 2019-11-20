import axios from 'axios';
import apiCrud from '../api/api-service.js'

const pinApi = new apiCrud({ url:'https://frontend-challenge.screencloud-michael.now.sh/api/pin/' })

export const login = (pinCode) => {

    pinApi.createEntity({ name: 'posts' })

    debugger;
    //pinApi.endpoints.posts.getOne({'pin': pinCode})
    //.then(({ data }) => console.log(data))

    // const apiUrl = 'https://frontend-challenge.screencloud-michael.now.sh/api/pin/';

    return axios.post(pinApi, { "pin": pinCode })
        .then(data => data.data.currentBalance)
        .catch(err => err.response.data.error);
}