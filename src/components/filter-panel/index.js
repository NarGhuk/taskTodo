import React from 'react';
import './search-panel.css';
import ItemStatusFilter from './item-status-filter';

const SearchPanel = ({getSearchValue}) => {
    return (
        <div className={'top-filter-panel'}>
            <input onChange={getSearchValue} placeholder={'search'}/>
            <ItemStatusFilter/>
        </div>
    )
};
export default SearchPanel