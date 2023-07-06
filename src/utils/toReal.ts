export function toReal(price: string) {
  const numberPrice = parseFloat(price);
  return numberPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
