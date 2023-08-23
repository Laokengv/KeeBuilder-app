import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSelectedProducts } from '../../redux/reducers/SelectedProductsContext';


function SavedBuilds() {
    const { selectedProducts } = useSelectedProducts();

    const handleDelete = (productId) => {
        dispatch({ type: 'REMOVE_SELECTED_PRODUCT', payload: { id: productId } });
    }

    return (
        <div>
            <h1>Saved Builds</h1>
            {
                selectedProducts.map(products => (
                    <div key={products.id}>
                        <img
                                className="images"
                                style={{ width: '300px', height: 'auto' }}
                                src={`images/${products.image}`}
                            />
                        <h2>{products.name}</h2>
                        <p>Profile: {products.profile}</p>
                        <p>Size: {products.size}</p>
                        <p>Type: {products.type}</p>
                        <p>Specs: {products.specifications}</p>
                        <p>Price: ${products.price}</p>
                        <button className='btn btn-primary' onCLick={() => handleDelete(products.id)}>
                            Delete
                        </button>
                        <button className='btn btn-primary'>
                            Edit
                        </button>
                    </div>
                ))
            }
        </div>
    )
}

export default SavedBuilds;