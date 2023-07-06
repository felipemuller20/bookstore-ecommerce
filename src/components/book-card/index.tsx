import Image from 'next/image';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import styles from './book-card.module.css';
import { toReal } from '@/utils/toReal';
import { roboto } from '@/utils/fonts';
import { RootState } from '@/Redux/store';
import { addToCart } from '@/Redux/cartSlice';
import { successAlert } from '@/utils/alerts';

type BookCardProps = {
  image: string;
  title: string;
  price: string;
  id: string;
};

export default function BookCard({ image, title, price, id }: BookCardProps) {
  const dispatch = useDispatch();
  const myCart = useSelector((state: RootState) => state.cart.cart);
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
    <div className={ `${styles.card} ${roboto.className}` }>
      <h2>{ title }</h2>
      <Image src={ `https://http2.mlstatic.com/D_NQ_NP_${image}-O.webp` } alt={ title } width={ 1000 } height={ 1000 } />
      <p>{ toReal(price) }</p>
      <button onClick={ handleAddClick }>Adicionar ao carrinho</button>
      <Link href={ `/book/${id}` }>
        <span>Detalhes</span>
      </Link>
    </div>
  );
}
