import React from 'react';
import Search from './Search';
import './Searchpa.css';

const Popss = () => {
  const handleSearch = (query) => {
  
    console.log('Searching for:', query);
  };

  return (
    <div>
      <h1>Search Component Example</h1>
      <Search onSearch={handleSearch} />
    </div>
  );
};

export default Popss;
