import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Products from '../Products/Products';
import { SelectedProductsProvider, useSelectedProducts } from '../../redux/reducers/SelectedProductsContext';
import { saveSelectedProducts } from '../../redux/reducers/SelectedProductsContext';

function UserPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { selectedProducts } = useSelectedProducts();

  const handleSave = () => {
    dispatch(saveSelectedProducts(selectedProducts));
  };

  return (
    <div className="container">
      <h2 className="product-header">Select a case</h2>
      <Products name="cases" />
      <h2 className="product-header">Select keycaps</h2>
      <Products name="keycaps" />
      <h2 className="product-header">Select stabilizer</h2>
      <Products name="stabilizers" />
      <h2 className="product-header">Select switches</h2>
      <Products name="switches" />

      <div className="selected-data">
        <h3>Selected Items:</h3>
        <ul>
          {selectedProducts.map(product => (
            <li key={product.id}>
              {product.name}
            </li>
          ))}
        </ul>
        <button className='btn btn-primary' onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}

export default UserPage;
