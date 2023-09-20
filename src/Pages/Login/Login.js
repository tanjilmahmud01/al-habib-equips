

import React, { useContext } from 'react';
import styled from 'styled-components';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import Icon from '../../components/Icon/Icon';
import { Container } from '../../styles/Container';
import './Login.module.css';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import { login_context } from '../../context/login_context';
import { useLocation, useNavigate } from 'react-router-dom';


const Login = () => {

    const{user, setUser, loading, setLoading} = useContext(login_context);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    console.log('coming from Login route. User:', user, "Loading: ", loading);

    const FacebookBackground = "linear-gradient(to right, #0546A0 0%, #663FB6 100%)";

    const adminName = process.env.REACT_APP_admin;
    const adminPassword = process.env.REACT_APP_admin_password;
    

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        const user = {email, password};
        
        fetch('http://localhost:5000/login', {
          method:'POST',
          headers: {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
          setUser(data);
          setLoading(false);
          navigate(from, {replace: true});
        })
        .catch(err => console.log(err));


    }
    

    return (
        <div style={{margin:"0 auto",background:"linear-gradient(163deg, rgba(233,224,238,1) 15%, rgba(175,204,223,1) 44%, rgba(103,210,223,1) 51%, rgba(6,217,222,1) 72%)"}}>
        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
        <form onSubmit={handleLogin}>
        <MainContainer style={{margin:"5rem auto"}}>
        <WelcomeText>Welcome</WelcomeText>


        <InputContainer>
        <Input name='email' type="text" placeholder="Email" />
        <Input name='password' type="password" placeholder="Password" />
        </InputContainer>
        
        <ButtonContainer>
        <Button type="submit" value="LOGIN" />
        </ButtonContainer>

        <LoginWith>OR LOGIN WITH</LoginWith>

        <HorizontalRule />

        <IconsContainer>
        <Icon color={FacebookBackground}>
          <FaFacebookF />
        </Icon>

        <Icon color={FacebookBackground}>
          <FaInstagram />
        </Icon>

        <Icon color={FacebookBackground}>
          <FaTwitter />
        </Icon>

        </IconsContainer>

        <ForgotPassword>Forgot Password ?</ForgotPassword>
        </MainContainer>
        </form>
        
        </div>
       

        </div>
    );

    
};



const MainContainer = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
 
`;



const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
  font-family: 'Raleway', sans-serif;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
  
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWith = styled.h5`
  cursor: pointer;
  font-family: 'Raleway', sans-serif;
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0 3rem 0;
  width: 80%;
`;

const ForgotPassword = styled.h4`
  cursor: pointer;
  font-family: 'Raleway', sans-serif;
`;



export default Login;