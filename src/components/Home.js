import React from 'react';
import HomeImage from '../images/Home.png';
import SearchImage from '../images/Search.png';
import SortingImage from '../images/Sorting.png';

export const Home = () => {
  return (
    <div>
        <img className="home-image" src={HomeImage} />
        <img className="search-image" src={SearchImage} />
        <img className="sorting-image" src={SortingImage} />
    </div>
  )
}
