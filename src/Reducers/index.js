import { combineReducers } from 'redux';
import DishDetailsReducer from './reducer';

export default combineReducers({
    DishDetails: DishDetailsReducer
});