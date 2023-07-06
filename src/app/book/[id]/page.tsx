import Image from 'next/image';
import styles from './bookid.module.css';
import { toReal } from '@/utils/toReal';
import { roboto } from '@/utils/fonts';

type BookIdProps = {
  params: {
    id: string;
  }
};

export default async function BookId({ params }: BookIdProps) {
  const detailsPromise = await fetch(`https://api.mercadolibre.com/items/${params.id}`);
  const details = await detailsPromise.json();
  return (
    <div className={ `${styles.page} ${roboto.className}` }>
      <h1>
        {
          details.attributes.filter((attribute: { id: string, value_name: string }) => attribute.id === 'BOOK_TITLE')[0].value_name
        }
      </h1>
      <h2>
        {
              details.attributes.filter((attribute: { id: string, value_name: string }) => attribute.id === 'AUTHOR')[0].value_name
            }
      </h2>
      <h3>
        Publicado por:
        { ' ' }
        {
          details.attributes.filter((attribute: { id: string, value_name: string }) => attribute.id === 'BOOK_PUBLISHER')[0].value_name
        }
      </h3>
      <p>
        {
            details.attributes.filter((attribute: { id: string, value_name: string }) => attribute.id === 'PAGES_NUMBER')[0].value_name
          }
        { ' ' }
        páginas
      </p>
      <p>
        Publicado em
        { ' ' }
        {
          details.attributes.filter((attribute: { id: string, value_name: string }) => attribute.id === 'PUBLICATION_YEAR')[0].value_name
        }
      </p>
      <p>
        Preço:
        {' '}
        { toReal(details.price)}
      </p>
      <Image src={ `https://http2.mlstatic.com/D_NQ_NP_${details.thumbnail_id}-O.webp` } alt={ details.title } width={ 1000 } height={ 1000 } />
      <button>Adicionar ao carrinho</button>
    </div>
  );
}
