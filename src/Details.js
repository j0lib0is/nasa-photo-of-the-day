import React from "react";

export default function Details(props) {
  const { photo } = props;

  return (
    <div className='details'>
		  <h3>{photo.title}</h3>
		  <p>{photo.explanation}</p>
		  <p className='meta'>© Copyright {photo.copyright}</p>
    </div>
  );
}