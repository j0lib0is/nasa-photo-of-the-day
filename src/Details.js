import React from "react";
import styled from 'styled-components';

const StyledDetails = styled.div`
  padding: 48px;
	text-align: left;
  color: ${props => props.theme.coloGray};

  h3 {
  color: ${props => props.theme.colorGreyDark};
  }
  .meta {
    font-size: 0.8rem;
    padding-top: 24px;
    color: ${props => props.theme.coloGrayLight};
    font-style: italic;
  }
`

export default function Details(props) {
  const { photo } = props;

  return (
    <StyledDetails>
		  <h3>{photo.title}</h3>
		  <p>{photo.explanation}</p>
		  <p className='meta'>© Copyright {photo.copyright}</p>
    </StyledDetails>
  );
}