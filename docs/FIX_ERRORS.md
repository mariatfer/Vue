# Soluciona los errores

## Ejemplo 1

Falta retornar el valor de count y sus funciones.

import { ref } from "vue";

export function useCounter() {
  const count = ref(0);

  function increment() {
    count.value++;
  }
  return {
    count,
    incremet
  }
}


## Ejemplo 2

No se debería recorrer el array con el index, si no con un identificador único, ya que el index puede cambiar si se modifica el array.

const items = ref([{id : 1, name: "Apple"}, {id : 2, name: "Banana"}, {id : 3, name: "Cherry"}])

`<\li v-for="item in items" :key="item.id"> {{ item }} </li>`

## Ejemplo 3

Si en el script está importado el componente, no encuentro ningún error.

## Ejemplo 4

No encuentro ningún error.


