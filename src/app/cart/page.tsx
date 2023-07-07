'use client';

import { useSelector } from 'react-redux';
import Link from 'next/link';
import { BiArrowBack } from 'react-icons/bi';
import { useRouter } from 'next/navigation';
import styles from './cart.module.css';
import { RootState } from '@/Redux/store';
import CartItem from '@/components/cart-item';
import { getTotal } from '@/utils/totalValue';

export default function CartPage() {
  const router = useRouter();
  const myCart = useSelector((state: RootState) => state.cart.cart);
  if (myCart.length < 1) {
    return (
      <div className={ styles.emptyPage }>
        <h1>Seu carrinho está vazio</h1>
        <Link href="/">
          <BiArrowBack />
          Voltar à página inicial
        </Link>
      </div>
    );
  }
  return (
    <div className={ styles.page }>
      <h1>Carrinho</h1>
      {
        myCart.map((cart) => (
          <CartItem
            id={ cart.id }
            quantity={ cart.quantity }
            title={ cart.title }
            image={ cart.thumbnail_id }
            price={ cart.price }
            key={ cart.id }
          />
        ))
      }
      <p className={ styles.total }>{`Valor total do carrinho: ${getTotal(myCart)}`}</p>
      <button onClick={ () => router.push('/cart/checkout') }>Finalizar compra</button>
    </div>
  );
}
