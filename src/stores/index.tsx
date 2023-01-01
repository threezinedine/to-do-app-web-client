import {
    createStore,
} from 'redux'

import {
    TaskReducer, 
} from './reducers'


const store = createStore(TaskReducer)


export default store
