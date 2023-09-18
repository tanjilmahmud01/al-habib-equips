import React from 'react';
import styled from 'styled-components';

const Button = ({ type, value }) => {
    return (
        <StyledButton type={type} value={value}>
         
        </StyledButton>
    );
};

const StyledButton = styled.input`
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 4.8rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
  font-family: 'Raleway', sans-serif;
`;

export default Button;