import React from "react";
import Details from './Details';

export default function Cover(props) {
  const { photo } = props;

  return (
    <div className='card'>
		  <img className='photo' src={photo.hdurl} alt={photo.title} />
      < Details photo={photo} />
	  </div>
  );
}