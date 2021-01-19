import React from 'react';

import './searchbox.css';

export const SearchBox = props => (
  <input
    className='search-box'
    type='search'
    placeholder='search monsters'
    onChange={props.onSearchChange}
  />
);