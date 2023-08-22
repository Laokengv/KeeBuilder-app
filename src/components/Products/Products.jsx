import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import './Products.css';

function Products({ name, selected, setSelected }) {
    const history = useHistory();

    let [productsList, setProductsList] = useState([]);

    useEffect(() => {
        fetch(`/api/products/${name}`)
            .then((response) => response.json())
            .then(productsListFromServer => setProductsList(productsListFromServer))
            .catch(error => console.log(error)); // TODO: Add alert
    })
    return (
        <>
            {
                productsList.map((products, i) => (
                    <>
                        <div className="card w-96 glass">
                            {
                                selected === products.id && (
                                    <div>Selected!</div>
                                )
                            }
                            <figure><img
                                className="images"
                                style={{ width: '300px', height: 'auto' }}
                                src={`images/${products.image}`}
                            /></figure>
                            <div className='card-body'>
                                <h2 className='card-title'>{products.name}</h2>
                                <p>Profile: {products.profile}</p>
                                <p>Size: {products.size}</p>
                                <p>Type: {products.type}</p>
                                <p>Specs: {products.specifications}</p>
                                <p>Price: ${products.price}</p>
                                <div className='card-actions justify-end'>
                                    <button className='btn btn-primary' onClick={() => setSelected(products.id)}>
                                        Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                ))
            }

        </>
    )
}

export default Products;