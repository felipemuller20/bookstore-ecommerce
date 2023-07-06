'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import styles from './bookid.module.css';
// Error components must be Client Components

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className={ styles.error }>
      <h2>Algo deu errado!</h2>
      <Link href="/">
        <BiArrowBack />
        Voltar à página inicial
      </Link>
    </div>
  );
}
