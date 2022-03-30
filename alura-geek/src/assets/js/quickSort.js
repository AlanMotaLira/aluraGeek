function quickSort(array, esq, dir) {
  if (array.length > 1) {
    let indiceAtual = particiona(array, esq, dir);
    if (esq < indiceAtual - 1) {
      quickSort(array, esq, indiceAtual - 1);
    }
    if (indiceAtual < dir) {
      quickSort(array, indiceAtual, dir);
    }
  }
  return array;
}

function particiona(array, esq, dir) {
  let pivo = array[Math.floor((esq + dir) / 2)];
  let atualEsq = esq; //começo do array
  let atualDir = dir; //final do array

  while (atualEsq <= atualDir) {
    while (array[atualEsq].preco < pivo.preco) {
      atualEsq++;
    }
    while (array[atualDir].preco > pivo.preco) {
      atualDir--;
    }
    if (atualEsq <= atualDir) {
      trocaLugar(array, atualEsq, atualDir);
      atualEsq++;
      atualDir--;
    }
  }

  return atualEsq;
}

function trocaLugar(array, de, para) {
  const elem1 = array[de];
  const elem2 = array[para];

  array[para] = elem1;
  array[de] = elem2;
}

export default quickSort;
