import {combineReducers} from 'redux';
import styleReducer from './reducers/Style/styleReducer';

const reducers = combineReducers({
  style: styleReducer,
});
export const reducersArray = ['colorSelection', 'images', 'effects', 'addText'];
export default reducers;
