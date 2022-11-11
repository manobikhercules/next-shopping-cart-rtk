import { CartItem } from '../store/types';
import { calcTotalPrice,calcTotalCount } from './calcTotalCart';

export const getCartFromLS = () => {
  //! #fixced me 
  //! I do not know how to make localstorage in NEXT.js
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem('cart');
    const itemsCart = data ? JSON.parse(data) : [];
    const totalPrice = calcTotalPrice(itemsCart);
    const totalCount = calcTotalCount(itemsCart); 
    return {
      itemsCart: itemsCart as CartItem[],
      totalPrice,
      totalCount
    };
  } 
    const data = ''
    const itemsCart:CartItem[] = data ? JSON.parse(data) : [];
    const totalPrice = calcTotalPrice(itemsCart);
    const totalCount = calcTotalCount(itemsCart); 
    return {
      itemsCart: itemsCart,
      totalPrice,
      totalCount
    };
  

};
