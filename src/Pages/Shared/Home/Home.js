import React from 'react';
import styled from 'styled-components';

const Home = () => {
    return (

        <Wrapper>
            <div className='mt-5'>
                <h2 className='test'>this is home</h2>
            </div>


        </Wrapper>



    );
};

const Wrapper = styled.section`
background-color: ${({ theme }) => theme?.colors?.bg};
height: 100vh;

`;

export default Home;