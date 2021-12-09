import React, { useState } from 'react';

const Nav = props => {
  const { photo } = props;

  return (
    <div className='nav'>
      <div className='brand'>
		  <img src='' alt='NASA Logo'></img>
		  <p className='tagline'>Photo of the Day</p>
	  </div>
    </div>
  );
}