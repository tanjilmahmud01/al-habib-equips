import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../images/al-habib-logo.png';
import Nav from '../Nav/Nav';

const Header = () => {
    return (
        <MainHeader>
            <NavLink to='/'>
                <div className='border border-success mt-5'>
                    <img src={logo} alt="al habib logo" />
                </div>

            </NavLink>
            <Nav />
        </MainHeader>
    );
};

const MainHeader = styled.header` 
 padding: 0 4.8rem;
 height: 18rem;
 background-color:${({ theme }) => theme.colors.bg};
 display:flex;
 justify-content: space-between;
 align-items: center;
 position: relative;

 .logo{
  height: 50px;
 }

 @media (max-width:${({ theme }) => theme.media.mobile}) { 
} 
`;

export default Header;