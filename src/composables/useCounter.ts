import { ref } from 'vue'

export function useCounter() {
  const count = ref(0)
  const NUMBER_ZERO = 0
  const NUMBER_TEN = 10
  function increment() {
    count.value++
  }

  function decrement() {
    count.value--
  }

  function isCountAboveZero() {
    return count.value > NUMBER_ZERO
  }
  function isCountBelowTen() {
    return count.value < NUMBER_TEN
  }

  return {
    count,
    increment,
    decrement,
    isCountAboveZero,
    isCountBelowTen,
  }
}
