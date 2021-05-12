import { CHANGE_COUNTRY, CHANGE_NAME } from './types'
import axios from 'axios'

const fetchname = () => {
    return async (dispatch) => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        const name = await response.data
        dispatch({
            type: CHANGE_NAME,
            payload: name
        })
    }
}
export default fetchname