import {combineReducers} from 'redux'

import tareasReducer from './tareasReducer'

const mainReducer = combineReducers({
    tareasReducer,
    

})

export default mainReducer