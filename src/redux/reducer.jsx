import { CHANGE_COUNTRY, CHANGE_NAME } from './types'
const InititalState = {
    country: "   pakistan",
    name: []
}

const reducer = (state = InititalState, action) => {
    switch (action.type) {
        case CHANGE_COUNTRY:
            return {
                ...state, country: action.payload
            }
        case CHANGE_NAME:
            return {
                ...state, name: action.payload
            }

        default:
            return state
    }
}



export default reducer