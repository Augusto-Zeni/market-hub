export function formatarTelefone(numero) {
  const apenasNumeros = numero.replace(/\D/g, '');

  return apenasNumeros.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
}