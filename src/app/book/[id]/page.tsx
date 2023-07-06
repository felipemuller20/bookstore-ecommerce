'use client';

import Image from 'next/image';
import { BiArrowBack } from 'react-icons/bi';
import Link from 'next/link';
import styles from './bookid.module.css';
import { toReal } from '@/utils/toReal';
import { roboto } from '@/utils/fonts';
import AddToCard from '@/components/add-to-cart';

type BookIdProps = {
  params: {
    id: string;
  }
};

export default async function BookId({ params }: BookIdProps) {
  const detailsPromise = await fetch(`https://api.mercadolibre.com/items/${params.id}`);
  const details = await detailsPromise.json();

  function getData(id: string) {
    const info = details.attributes.filter((attribute: { id: string, value_name: string }) => (
      attribute.id === id));
    if (info.length > 0) return info[0].value_name;
    return 'Não informado';
  }
  return (
    <div className={ `${styles.page} ${roboto.className}` }>
      <h1>
        {
          getData('BOOK_TITLE')
        }
      </h1>
      <h2>
        {
          getData('AUTHOR')
        }
      </h2>
      <h3>
        Publicado por:
        { ' ' }
        {
          getData('BOOK_PUBLISHER')
        }
      </h3>
      <p>
        {
          getData('PAGES_NUMBER')
        }
        { ' ' }
        páginas
      </p>
      <p>
        Publicado em
        { ' ' }
        {
          getData('PUBLICATION_YEAR')
        }
      </p>
      <Image src={ `https://http2.mlstatic.com/D_NQ_NP_${details.thumbnail_id}-O.webp` } alt={ details.title } width={ 1000 } height={ 1000 } />
      <p className={ styles.price }>
        Valor:
        {' '}
        { toReal(details.price)}
      </p>
      <AddToCard id={ params.id } price={ details.price } title={ details.title } image={ details.thumbnail_id } />
      <Link href="/">
        <BiArrowBack />
        Voltar
      </Link>
    </div>
  );
}
