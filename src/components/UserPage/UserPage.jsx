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
      <h2>Select a case</h2>
      <Products name="cases" />
      <Products name="keycaps" />
      <Products name="stabilizers" />
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
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}

export default UserPage;
