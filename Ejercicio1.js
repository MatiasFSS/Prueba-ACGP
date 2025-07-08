/*
    Problema:
    Escribe una función que reciba una lista de números enteros y devuelva una nueva lista con los números ordenados, eliminando los duplicados.

    Ejemplo:
    entrada = [4, 2, 7, 2, 4, 9, 1]
    salida = [1, 2, 4, 7, 9]
*/


function eliminarDuplicadosYOrdenar(lista) {

  const sinDuplicados = [];
  for (let i = 0; i < lista.length; i++) {
    let yaExiste = false;
    for (let j = 0; j < sinDuplicados.length; j++) {
      if (lista[i] === sinDuplicados[j]) {
        yaExiste = true;
        break;
      }
    }
    if (!yaExiste) {
      sinDuplicados.push(lista[i]);
    }
  }


  for (let i = 0; i < sinDuplicados.length; i++) {
    for (let j = 0; j < sinDuplicados.length - 1 - i; j++) {
      if (sinDuplicados[j] > sinDuplicados[j + 1]) {

        const aux = sinDuplicados[j];
        sinDuplicados[j] = sinDuplicados[j + 1];
        sinDuplicados[j + 1] = aux;
      }
    }
  }

  return sinDuplicados;
}

const entrada = [4, 2, 7, 2, 4, 9, 1];
const resultado = eliminarDuplicadosYOrdenar(entrada);
console.log(resultado);