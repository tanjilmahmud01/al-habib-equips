import React, { useContext } from 'react';
import styled from 'styled-components';
import { login_context } from '../../context/login_context';
import AdminFilterSection from '../../components/AdminFilterSection/AdminFilterSection';
import Sort from '../../components/Sort/Sort';
import ProductList from '../ProductList/ProductList';
import AdminProductList from '../../components/AdminProductList/AdminProductList';

const AdminDashboard = () => {
    const {user, setUser, loading, setLoading} = useContext(login_context);
    console.log('coming from Admin Dashboard User:', user, "Loading: ", loading); 

    const handleLogOut = () => {
        setUser(null);
        setLoading(false);
        <button onClick={handleLogOut}>logout</button>
    }

    return (
        <Wrapper>
      {/* <h2>products page</h2> */}
      <div className="container grid grid-filter-column">
        <div>
          <AdminFilterSection />
        </div>

        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            {/* <h2>products list</h2> */}
            <AdminProductList/>
          </div>
        </section>
      </div>
    </Wrapper>
    );
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default AdminDashboard;