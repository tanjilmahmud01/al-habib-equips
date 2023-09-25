import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAdminFilterContext } from '../../context/admin_filter_context';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const AdminFilterSection = () => {

    const [categoryOnlyData, setCategoryOnlyData] = useState([]);

    const {
    filters:{text, category},
    updateFilterValue,
    all_products
    } = useAdminFilterContext();

    const API = "https://alhabib-server.vercel.app/categories";

    useEffect(() => {
      getCategories(API);
  }, []);
      
    const getCategories = async(url) => {
      try {
        const res = await axios.get(url);
        const all_categories = await res.data;
        const categories = all_categories.map(currElem => currElem?.category)
        setCategoryOnlyData(categories);
    } catch (error) {
        console.error(error);
    }
    }
    





    return (
        <Wrapper>
           <div className='filter-search'>
            <form onSubmit={(event) => event.preventDefault()}>
              <input 
              type="text" 
              name="text" 
              id="" 
              value={text} 
              onChange={updateFilterValue}
              placeholder='search products'
              />
            </form>
          </div>

          <div className="filter-category">
          <h3>Filter Category</h3>

          <NavLink to={'/addNewCategory'} className="btn-main">
                    <Button className="btn">Add A New Category</Button>
                  </NavLink>

          <div>
          {categoryOnlyData.map((curElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                className={curElem === category ? "active" : ""}
                onClick={updateFilterValue}>
                {curElem}
              </button>
            );
          })}
        </div>
          </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }

  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }

  .filter-color-style {
    display: flex;
    justify-content: center;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
  .btn {
    margin: 2rem 0;
    background-color: rgb(0 0 0 / 0%);
    border: 0.1rem solid rgb(98 84 243);
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(98 84 243);

    &:hover {
      background-color: rgb(98 84 243);
    }

    &:hover a {
      color: #fff;
    }
    a {
      color: rgb(98 84 243);
      font-size: 1.4rem;
    }
  }

  .btn-main .btn:hover {
    color: #fff;
  }
`;

export default AdminFilterSection;