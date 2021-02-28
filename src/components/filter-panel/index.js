import React from 'react';
import './search-panel.css';
import ItemStatusFilter from './item-status-filter';

const FilterPanel = ({getSearchValue}) => {
    return (
        <div className={'top-filter-panel'}>
            <input onChange={()=>{}} placeholder={'search'}/>
        </div>
    )
};
export default FilterPanel
