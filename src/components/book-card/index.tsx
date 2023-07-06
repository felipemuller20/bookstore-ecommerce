import Image from 'next/image';
import Link from 'next/link';
import styles from './book-card.module.css';
import { toReal } from '@/utils/toReal';
import { roboto } from '@/utils/fonts';
import AddToCard from '../add-to-cart';

type BookCardProps = {
  image: string;
  title: string;
  price: string;
  id: string;
};

export default function BookCard({ image, title, price, id }: BookCardProps) {
  return (
    <div className={ `${styles.card} ${roboto.className}` }>
      <h2>{ title }</h2>
      <Image src={ `https://http2.mlstatic.com/D_NQ_NP_${image}-O.webp` } alt={ title } width={ 1000 } height={ 1000 } />
      <p>{ toReal(price) }</p>
      <AddToCard id={ id } title={ title } price={ price } image={ image } />
      <Link href={ `/book/${id}` }>
        <span>Detalhes</span>
      </Link>
    </div>
  );
}
