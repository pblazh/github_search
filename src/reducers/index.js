import { combineReducers } from 'redux'
import {searchRequestReducer, searchResultReducer} from './search_reducer'

const rootReducer = combineReducers({
  search: searchRequestReducer,
  result: searchResultReducer
})

export default rootReducer
