import React from 'react';
import { useFilterContext } from '../../context/filter_context';
import GridView from '../../components/GridView/GridView';
import ListView from '../../components/ListView/ListView';

const ProductList = () => {
    
    const {filter_products, grid_view} = useFilterContext();
    
    if(grid_view === true){
        
        return <GridView products = {filter_products}/>
    }
    else{
        return <ListView products = {filter_products}/>
    }
};



export default ProductList;