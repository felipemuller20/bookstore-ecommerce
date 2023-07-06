import { BsCart4 } from 'react-icons/bs';
import Link from 'next/link';
import { neonderthaw } from '@/utils/fonts';
import styles from './navbar.module.css';

export default function NavBar() {
  return (
    <nav className={ styles.nav }>
      <Link href="/">
        <h1 className={ neonderthaw.className }>BookStore</h1>
      </Link>
      <Link href="/cart">
        <BsCart4 className={ styles.icon } />
      </Link>
    </nav>
  );
}
