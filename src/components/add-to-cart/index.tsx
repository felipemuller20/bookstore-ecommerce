import { useDispatch, useSelector } from 'react-redux';
import { addToCart, incrementItem } from '@/Redux/cartSlice';
import { successAlert } from '@/utils/alerts';
import { RootState } from '@/Redux/store';

type AddToCartProps = {
  image: string;
  title: string;
  price: string;
  id: string;
};

export default function AddToCard({ image, title, price, id }: AddToCartProps) {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.cart);

  function handleAddClick() {
    const alreadyInTheCart = cart.find((book) => book.id === id);
    if (alreadyInTheCart) {
      dispatch(incrementItem(id));
    } else {
      dispatch(addToCart({
        thumbnail_id: image,
        title,
        price,
        id,
        quantity: 1,
      }));
    }
    successAlert('Livro adicionado ao carrinho', '');
  }

  return (
    <button onClick={ handleAddClick }>Adicionar ao carrinho</button>
  );
}
