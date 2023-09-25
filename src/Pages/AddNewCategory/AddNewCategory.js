import React from 'react';

const AddNewCategory = () => {


    const addNewCategoryItem = (event) => {
        event.preventDefault();
        const form = event.target;
        const newCategory = form.categoryName.value;

        const categoryItem = {
            category: newCategory
        }

        fetch('https://alhabib-server.vercel.app/categories', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                
            },
            body: JSON.stringify(categoryItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // if(data.acknowledged){
                //     alert('Category Added Successfully')
                //     form.reset();
                    
                // }
            })
            .catch(er => console.error(er));
    }

    return (
        <div>
            <form onSubmit={addNewCategoryItem} action="">

            <h2>Please Enter New Category Name Here: </h2>
            <br />
            <input type="text" name='categoryName' placeholder='Please Enter New Category Name'/>
            <input type="submit" value="Submit" />
            </form>


         
            
        </div>
    );
};

export default AddNewCategory;