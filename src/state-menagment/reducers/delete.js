import {types} from "../types";
import createAsyncReducer from '../helpers/asyncReducer';

const initialState = {};
export default createAsyncReducer(types.REMOVE_TODO, initialState);
