import React from "react";

export default function Nav(props) {
  const { photo } = props;

  return (
    <div className='header'>
      <div className='brand'>
		    <h1>NASA</h1>
		    <p className='tagline'>Photo of the Day</p>
	    </div>
      <div><p>{photo.date}</p></div>
    </div>
  );
}