import React from 'react';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {
    const onSearch = (e) => {
        setSearchValue(e.target.value);
    };
    return (
        <input
            className="TodoSearch"
            type="text"
            placeholder="cebolla"
            onChange={(e) => onSearch(e)}
            value={searchValue}
        />
        // <p>{searchValue}</p>
    );
}

export { TodoSearch };
