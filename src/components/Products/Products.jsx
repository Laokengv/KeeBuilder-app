import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { SelectedProductsProvider, useSelectedProducts } from '../../redux/reducers/SelectedProductsContext';

import './Products.css';

function Products({ name }) {
    const history = useHistory();

    const { selectedProducts, dispatch } = useSelectedProducts();

    let [productsList, setProductsList] = useState([]);

    useEffect(() => {
        fetch(`/api/products/${name}`)
            .then((response) => response.json())
            .then(productsListFromServer => setProductsList(productsListFromServer))
            .catch(error => console.log(error)); // TODO: Add alert
    }, [name]);

    const handleAddToSelected = (products) => {
        dispatch({ type: 'ADD_SELECTED_PRODUCT', payload: products });
    };

    return (
        <>
            {
                productsList.map((products, i) => (
                    <div key={products.id} className="card w-96 bg-base-100 shadow-x1">
                        {
                            selectedProducts.some(selectedProduct => selectedProduct.id === products.id) && (
                                <div className="selected">Selected!</div>
                            )
                        }
                        <figure className="px-10 pt-10"><img
                            className="images"
                            // style={{ width: '300px', height: 'auto' }}
                            src={`images/${products.image}`}
                        /></figure>
                        <div className='card-body items-center text-center'>
                            <h2 className='card-title'>{products.name}</h2>
                            <p>Profile: {products.profile}</p>
                            <p>Size: {products.size}</p>
                            <p>Type: {products.type}</p>
                            <p>Specs: {products.specifications}</p>
                            <p>Price: ${products.price}</p>
                            <div className='card-actions justify-end'>
                                <button className='btn btn-primary' onClick={() => handleAddToSelected(products)}>
                                    Select
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            }


        </>
    )
}

export default Products;