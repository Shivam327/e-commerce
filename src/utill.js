import { cartItems } from './Pages/Cart.jsx';
import { success } from './toastify';

export const category = {
  Accessory: 'Accessory',
  Book: 'Book',
  Computer: 'Computer',
  Fashion: 'Fashion',
  Electronic: 'Electronic',
  Mobile: 'Mobile',
};

export const addToCart = (item) => {
  console.log(item);
  cartItems.push(item);
  // success();
};
