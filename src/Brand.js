import React from "react";
import styled from 'styled-components';
import logo from './Assets/Nasa.png';

const StyledBrand = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	img {
		height: 24px;
	}
	p {
		margin-left: 16px;
	}
`

export default function Brand(props) {

  return (
    <StyledBrand>
		<img src={logo} alt='NASA Logo'/>
		<p>Photo of the Day</p>
    </StyledBrand>
  );
}