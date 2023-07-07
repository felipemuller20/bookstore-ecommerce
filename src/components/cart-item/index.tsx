'use client';

import Image from 'next/image';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import styles from './cart.module.css';
import { toReal } from '@/utils/toReal';
import { decrementItem, incrementItem } from '@/Redux/cartSlice';

type CartItemProps = {
  title: string;
  image: string;
  price: string;
  quantity: number;
  id: string;
};

export default function CartItem({ title, image, price, quantity, id }: CartItemProps) {
  const dispatch = useDispatch();
  return (
    <div className={ styles.card }>
      <Image src={ `https://http2.mlstatic.com/D_NQ_NP_${image}-O.webp` } alt={ title } width={ 1000 } height={ 1000 } />
      <section>
        <h2>{title}</h2>
        <div className={ styles.btns }>
          <p>Quantidade: </p>
          <AiOutlineMinusCircle className={ `${styles.icon} ${styles.minusIcon}` } onClick={ () => dispatch(decrementItem(id)) } />
          <span>{quantity}</span>
          <AiOutlinePlusCircle className={ `${styles.icon} ${styles.plusIcon}` } onClick={ () => dispatch(incrementItem(id)) } />
        </div>
        <p className={ styles.unitPrice }>{ `Valor unitário: ${toReal(price)}` }</p>
        <p className={ styles.totalPrice }>{`Valor total: ${toReal(Number(Number(price) * quantity).toString())}`}</p>
      </section>
    </div>
  );
}
