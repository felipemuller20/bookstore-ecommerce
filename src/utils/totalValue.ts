import { CartBook } from '@/Redux/cartSlice';
import { toReal } from './toReal';

export function getTotal(list: CartBook[]) {
  let total = 0;
  list.forEach((book) => {
    const value = Number(book.price) * Number(book.quantity);
    total += value;
  });
  return toReal(total.toString());
}
