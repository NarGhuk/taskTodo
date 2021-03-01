import React from 'react';
import './search-panel.css';
import {useContextData} from '../../context';


const FilterPanel = () => {
    const {setSearchTodoName} = useContextData();
    return (
        <div className={'top-filter-panel input-field'}>
            <i className="material-icons prefix">search</i>
            <input id="icon_search" className="validate" type={'text'} onChange={(e) => setSearchTodoName(e)}/>
            <label htmlFor="icon_search">search Name</label>
        </div>
    )
};
export default FilterPanel
