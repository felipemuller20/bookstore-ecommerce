import { useDispatch } from 'react-redux';
import { addToCart } from '@/Redux/cartSlice';
import { successAlert } from '@/utils/alerts';

type AddToCartProps = {
  image: string;
  title: string;
  price: string;
  id: string;
};

export default function AddToCard({ image, title, price, id }: AddToCartProps) {
  const dispatch = useDispatch();

  function handleAddClick() {
    dispatch(addToCart({
      thumbnail_id: image,
      title,
      price,
      id,
    }));
    successAlert('Livro adicionado ao carrinho', '');
  }
  return (
    <button onClick={ handleAddClick }>Adicionar ao carrinho</button>
  );
}
