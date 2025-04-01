import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export const useCounterStore = defineStore('counter', () => {
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
  const countMultiplied = computed(() => {
    return count.value * 2
  })

  const message = ref('')
  watch(
    count,
    () => {
      if (count.value === 0) {
        message.value = 'Estás en el valor mínimo'
      } else if (count.value === 10) {
        message.value = 'Estás en el valor máximo'
      } else {
        message.value = 'Estás en los parámetros adecuados'
      }
    },
    { immediate: true },
  )

  return {
    count,
    increment,
    decrement,
    isCountAboveZero,
    isCountBelowTen,
    countMultiplied,
    message,
  }
})
