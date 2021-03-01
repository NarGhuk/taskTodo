import React from 'react';
import './search-panel.css';
import {useContextData} from '../../context';


const FilterPanel = ({}) => {
    const { setSearchedCardsName} = useContextData();
    return (
        <div className={'top-filter-panel'}>
            <input onChange={(e)=>setSearchedCardsName(e)} placeholder={'search'}/>
        </div>
    )
};
export default FilterPanel
