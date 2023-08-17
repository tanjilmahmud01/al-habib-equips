import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const PageNavigation = ({ title }) => {



    return (
        <Wrapper>
            <NavLink to="/">Home / {title}</NavLink>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 2.8rem;
  padding-left: 1.2rem;
  
  a {
    font-size: 2.8rem;
  }
`;

export default PageNavigation;