import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../images/al-habib-logo.png';
import Nav from '../Nav/Nav';

const Header = () => {
    return (
        <MainHeader>
            <NavLink to='/'>
                <div className=''>
                    <img src={logo} alt="al habib logo" />
                </div>

            </NavLink>
            <Nav />
        </MainHeader>
    );
};

const MainHeader = styled.header` 
 padding: 0 4.8rem;
 height: 20rem;
 background-color:${({ theme }) => theme.colors.bg};
 background: radial-gradient(circle at -8.9% 51.2%, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 15.9%, rgb(255, 255, 255) 30.9%, rgb(255, 255, 255) 24.4%, rgb(19, 30, 37) 24.5%, rgb(19, 30, 37) 66%);
 display:flex;
 justify-content: space-between;
 align-items: center;
 position: relative;

 img{
  
 }

 @media (max-width:${({ theme }) => theme.media.mobile}) { 
    background: radial-gradient(circle at -8.9% 51.2%, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 15.9%, rgb(255, 255, 255) 55.9%, rgb(255, 255, 255) 24.4%, rgb(19, 30, 37) 24.5%, rgb(19, 30, 37) 66%);
    img{
        height:80px;
    }
} 
`;

export default Header;