import {types} from "../../types";
import createAsyncReducer from '../../helpers/asyncReducer';

const initialState = {
    data: []
};
export default  createAsyncReducer(types.FETCH_ALL_TODO, initialState);
