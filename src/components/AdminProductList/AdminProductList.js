import React from 'react';
import { useAdminFilterContext } from '../../context/admin_filter_context';
import AdminListView from '../AdminListView/AdminListView';

const AdminProductList = () => {

    const {filter_products} = useAdminFilterContext();

    return (
        <AdminListView products={filter_products}></AdminListView>
    );
};

export default AdminProductList;