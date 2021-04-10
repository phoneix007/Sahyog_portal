import axios from 'axios'
const instance = axios.create( {
    baseURL:'https://sahyogportal-8a512-default-rtdb.firebaseio.com/'
})

export default instance