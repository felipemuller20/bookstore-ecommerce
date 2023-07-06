'use client';

import { BsCart4 } from 'react-icons/bs';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { neonderthaw } from '@/utils/fonts';
import styles from './navbar.module.css';
import { RootState } from '@/Redux/store';

export default function NavBar() {
  const myCart = useSelector((state: RootState) => state.cart.cart);
  return (
    <nav className={ styles.nav }>
      <Link href="/">
        <h1 className={ neonderthaw.className }>BookStore</h1>
      </Link>
      <Link href="/cart">
        {
          myCart.length > 0 && (
            <span>{myCart.length}</span>
          )
        }
        <BsCart4 className={ styles.icon } />
      </Link>
    </nav>
  );
}
