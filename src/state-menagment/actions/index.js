import {types, COMON_TYPES} from '../types';
import {getAllTodo, addTodo, remove, update} from '../../service/http-api.service';
import {changeUpdateState, pushNewTodo, removeStateItem} from './helper';
import {allTodoListSelector} from '../selectors/todos';

export const apiActions = {
    getAllTodo: async dispatch => {
        dispatch({type: `${types.FETCH_ALL_TODO}_${COMON_TYPES.PENDING}`});
        try {
            const data = await getAllTodo();
            dispatch({
                type: `${types.FETCH_ALL_TODO}_${COMON_TYPES.DONE}`,
                payload: data
            })
        } catch (err) {
            dispatch({
                type: `${types.FETCH_ALL_TODO}_${COMON_TYPES.REJECTED}`,
                payload: err,
                error: true
            })
        }
    },


    setTodo(info) {
        return async (dispatch, getState) => {
            dispatch({type: `${types.SET_TODO}_${COMON_TYPES.PENDING}`});
            try {
                const response = await addTodo(info);
                dispatch({
                    type: `${types.FETCH_ALL_TODO}_${COMON_TYPES.DONE}`,
                    payload: pushNewTodo(allTodoListSelector, getState, response)
                });
            } catch (err) {
                dispatch({
                    type: `${types.SET_TODO}_${COMON_TYPES.REJECTED}`,
                    payload: err,
                    error: true
                })
            }
        }
    },
    updateTodo(id, bodyData) {
        return async (dispatch, getState) => {
            dispatch({type: `${types.EDIT_TODO}_${COMON_TYPES.PENDING}`});
            try {
                const response = await update(id, bodyData);
                dispatch({
                    type: `${types.FETCH_ALL_TODO}_${COMON_TYPES.DONE}`,
                    payload: changeUpdateState(allTodoListSelector, response.data, getState)
                });

            } catch (err) {
                dispatch({
                    type: `${types.EDIT_TODO}_${COMON_TYPES.REJECTED}`,
                    payload: err,
                    error: true
                })
            }
        }
    },
    removeTodo(id) {
        return async (dispatch, getState) => {
            dispatch({type: `${types.REMOVE_TODO}_${COMON_TYPES.PENDING}`});
            try {
                const response = await remove(id);

                if (response.status === 200) {
                    dispatch({
                        type: `${types.FETCH_ALL_TODO}_${COMON_TYPES.DONE}`,
                        payload: removeStateItem(allTodoListSelector, id, getState)
                    });
                }
            } catch (err) {
                dispatch({
                    type: `${types.REMOVE_TODO}_${COMON_TYPES.REJECTED}`,
                    payload: err,
                    error: true
                })
            }
        }
    }
};