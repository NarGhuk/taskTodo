import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {apiActions} from '../../state-menagment/actions';


const AddTodo = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const randomColor = () => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    };

    const createTodo = () => {
        if (title.length && desc.length) {
            dispatch(apiActions.setTodo({
                title: title,
                description: desc,
                color: randomColor()
            }));
        }
        setTitle('');
        setDesc('')
    };

    return (
        <div className="row">
            <div className="input-field col s6">
                <input id="title"
                       type="text"
                       className="validate"
                       value={title}
                       onChange={(e) => setTitle(e.target.value)}/>

                <label htmlFor="title">Add Todo Title</label>
            </div>
            <div className="input-field col s6">
                <input id="desc"
                       type="text"
                       className="validate"
                       value={desc}
                       onChange={(e) => setDesc(e.target.value)}/>
                <label htmlFor="desc">Add Todo Description</label>
            </div>
            <button disabled={!(title.length && desc.length)}
                    className={'btn'} onClick={createTodo}>
               create todo
            </button>
        </div>
    )
};
export default AddTodo;
