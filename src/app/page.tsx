'use client';

import { useEffect, useState } from 'react';
import { Book } from '@/types';
import styles from './page.module.css';
import BookCard from '@/components/book-card';
import SearchForm from '@/components/searchForm';

export default function Home() {
  const [books, setBooks] = useState<Book[] | null>([]);

  useEffect(() => {
    async function fetchData() {
      const fetchBooks = await fetch('https://api.mercadolibre.com/sites/MLB/search?category=MLB1196&offset=15&limit=35');
      const getBooks = await fetchBooks.json();
      setBooks(getBooks.results);
    }
    fetchData();
  }, []);

  function searchBooks(newBooks: Book[] | null) {
    setBooks(newBooks);
  }

  return (
    <div className={ styles.page }>
      <SearchForm searchBooks={ searchBooks } />
      <main className={ styles.list }>
        {
        books === null ? (<h1>Não há livros que correspondam à busca</h1>) : (
          books.map((book: Book) => (
            <BookCard
              key={ book.id }
              id={ book.id }
              title={ book.title }
              image={ book.thumbnail_id }
              price={ book.price }
            />
          ))
        )
      }
      </main>
    </div>
  );
}
