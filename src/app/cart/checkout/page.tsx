'use client';

import { useRef, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import styles from './checkout.module.css';
import { errorAlert, successAlert } from '@/utils/alerts';
import { emptyCart } from '@/Redux/cartSlice';

export default function CheckoutPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const cepRef = useRef<HTMLInputElement>(null);
  const ruaRef = useRef<HTMLInputElement>(null);
  const bairroRef = useRef<HTMLInputElement>(null);
  const cidadeRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const cep = cepRef.current?.value;
    const rua = ruaRef.current?.value;
    const bairro = bairroRef.current?.value;
    const cidade = cidadeRef.current?.value;
    const email = emailRef.current?.value;
    if (email && cep && rua && bairro && cidade) {
      successAlert(`Pedido enviado para o e-mail ${email}`, 'Siga as instruções enviadas para finalizar o pedido.');
      dispatch(emptyCart());
      router.push('/');
    } else {
      errorAlert('Todos os campos precisam ser preenchidos', '');
    }
  }

  return (
    <div className={ styles.page }>
      <h1>Checkout</h1>
      <h2>Adicione as informações abaixo para concluir o pedido.</h2>
      <form className={ styles.form } onSubmit={ handleSubmit }>
        <label htmlFor="email">
          E-mail:
        </label>
        <input id="email" type="text" ref={ emailRef } />
        <label htmlFor="cep">
          CEP:
        </label>
        <input id="cep" type="text" ref={ cepRef } />
        <label htmlFor="rua">
          Rua:
        </label>
        <input id="rua" type="text" ref={ ruaRef } />
        <label htmlFor="bairro">
          Bairro:
        </label>
        <input id="bairro" type="text" ref={ bairroRef } />
        <label htmlFor="city">
          Cidade:
        </label>
        <input id="city" type="text" ref={ cidadeRef } />
        <button>Enviar</button>
      </form>
    </div>
  );
}
