

const initialState = {
  selectedProducts: [],
};


const productReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        selectedProducts: [...state.selectedProducts, action.payload],
      };
    default:
      return state;
  }
};

