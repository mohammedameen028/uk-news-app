import React from 'react'
import './index.css';
import imageLoading from './Pulsing Dots.gif';

//Reusable Loader component 
const Loader = ({ loading }) => (
  loading ? (
    <div className="spinner">
      <img src={imageLoading} alt="Loading" />
    </div>
  ) : null
);
export default Loader;
