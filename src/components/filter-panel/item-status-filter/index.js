import React from 'react';
import './item-status-filter.css';

const ItemStatusFilter = ({getFilterValue,filterName}) => {
    const buttons = [
        {name:'all',label:'All'},
        {name:'active',label:'Active'},
        {name:'done',label:'Done'}
    ];
        return (
            <div className="btn-group">
                {
                    buttons.map(({name,label}) => {
                      return(
                          <button type="button"
                                  className={` btn ${filterName === name? 'btn-info':'btn-outline-secondary' } `}
                                  onClick={()=>getFilterValue(name)}
                                  key={name}
                          >{label}</button>
                      )
                    })
                }
            </div>
        );
};

export default ItemStatusFilter;