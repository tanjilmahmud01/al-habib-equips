import React from 'react';
import styled from 'styled-components';

const Input = ({type, placeholder}) => {
    return (
        <StyledInput type={type} placeholder={placeholder}></StyledInput>
    );
};

const StyledInput = styled.input`

  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 80%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: black;
    font-weight: 600;
    font-size: 1rem;
    font-family: 'Raleway', sans-serif;
  }
`;

export default Input;