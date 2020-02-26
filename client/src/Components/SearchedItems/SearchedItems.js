import React from 'react';

const SearchedItems = (props, onClick) => {
    return (
        <button onClick={props.onClickItem}>
            {props.name}
        </button>
    );
}

export default SearchedItems;
