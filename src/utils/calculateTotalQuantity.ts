import { CartBook } from '@/Redux/cartSlice';

function calculateTotalQuantity(list: CartBook[]) {
  let total = 0;
  list.forEach((book) => {
    total += book.quantity;
  });
  return total;
}

export default calculateTotalQuantity;
