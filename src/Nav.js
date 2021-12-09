import React from "react";
import Brand from './Brand'
import styled from 'styled-components';

const StyledNav = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 24px 0px;
  h1 {
    color: ${props => props.theme.colorWhite};
  }
  p {
    color: ${props => props.theme.colorWhite};
    text-transform: uppercase;
	  font-size: 0.8rem;
	  letter-spacing: 0.1rem;
  }
`

export default function Nav(props) {
  const { photo } = props;

  return (
    <StyledNav>
      < Brand />
      <div><p>{photo.date}</p></div>
    </StyledNav>
  );
}