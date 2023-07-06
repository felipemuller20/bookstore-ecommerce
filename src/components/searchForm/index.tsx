'use client';

import React, { useRef } from 'react';
import styles from './form.module.css';

type SearchFormProps = {
  searchBooks: (books: any[] | null) => void;
};

export default function SearchForm({ searchBooks }: SearchFormProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const inputValue = inputRef.current?.value;
    const productPromise = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${inputValue}`);
    const products = await productPromise.json();
    const searchedBooks = products.results.filter((item: any) => item.domain_id === 'MLB-BOOKS');
    if (searchedBooks.length < 1) {
      searchBooks(null);
    } else {
      searchBooks(searchedBooks);
    }
  }

  return (
    <form className={ styles.form } onSubmit={ handleSubmit }>
      <label htmlFor="search">Buscar livro por nome:</label>
      <input id="search" ref={ inputRef } />
      <button>Buscar</button>
    </form>
  );
}
