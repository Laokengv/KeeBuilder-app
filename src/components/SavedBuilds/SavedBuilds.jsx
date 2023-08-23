import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSelectedProducts } from '../../redux/reducers/SelectedProductsContext';
import Products from '../Products/Products';


function SavedBuilds() {
    const { selectedProducts, dispatch } = useSelectedProducts();
    const [editProductId, setEditProductId] = useState(null);

    const handleDelete = (productId) => {
        dispatch({ type: 'REMOVE_SELECTED_PRODUCT', payload: { id: productId } });
    };

    const handleEdit = (productId) => {
        setEditProductId(productId);
    };

    const handleReplace = (newProduct) => {
        dispatch({ type: 'REMOVE_SELECTED_PRODUCT', payload: { id: editProductId } });
        dispatch({ type: 'ADD_SELECTED_PRODUCT', payload: newProduct });
        setEditProductId(null);
    };


    return (
        <div>
            <h1 className="title-savedbuilds">Saved Builds</h1>
            {
                selectedProducts.map((products) => (
                    <div key={products.id} className="card w-96 bg-base-100 shadow-x1">
                        {editProductId === products.id ? (
                            <Products
                                name={products.name}
                                selected={products.id}
                                setSelected={handleReplace}
                            />
                        ) : (
                            <>
                                <figure className="px-10 pt-10"><img
                                    className="images"
                                    style={{ width: '300px', height: 'auto' }}
                                    src={`images/${products.image}`}
                                    alt={`Image of ${products.name}`}
                                /></figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{products.name}</h2>
                                    {/* <p>Profile: {products.profile}</p>
                                    <p>Size: {products.size}</p>
                                    <p>Type: {products.type}</p>
                                    <p>Specs: {products.specifications}</p>
                                    <p>Price: ${products.price}</p> */}
                                    <div className="card-actions justify-end">
                                        <button className='btn btn-primary' onClick={() => handleDelete(products.id)}>
                                            Delete
                                        </button>
                                        <button className='btn btn-primary' onClick={() => handleEdit(products.id)}>
                                            Edit
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                ))
            }
        </div>
    )
}

export default SavedBuilds;