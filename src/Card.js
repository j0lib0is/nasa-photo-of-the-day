import React from 'react';
import Details from './Details';
import styled from 'styled-components';

const StyledCard = styled.div`
  background-color: ${props => props.theme.colorWhite};
  box-shadow: 4px 4px 24px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  img {
    box-shadow: 4px 4px 24px rgba(0, 0, 0, 0.2);
	  width: 100%;
	  border-radius: 16px 16px 0px 0px;
  }
`

export default function Card(props) {
  const { photo } = props;

  return (
    <StyledCard>
		  <img className='photo' src={photo.hdurl} alt={photo.title} />
      < Details photo={photo} />
	  </StyledCard>
  );
}