import { AnyAction, Dispatch } from 'redux';
import { successAlert } from './alerts';
import { addToCart } from '@/Redux/cartSlice';

function handleAddClick(dispatch: Dispatch<AnyAction>) {
  dispatch(addToCart({
    thumbnail_id: image,
    title,
    price,
    id,
  }));
  successAlert('Livro adicionado ao carrinho', '');
}

export default handleAddClick;
