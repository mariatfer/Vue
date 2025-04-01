<script setup lang="ts">
import { useCounter } from '@/composables/useCounter'
import { computed } from 'vue'

const { count, increment, decrement, isCountAboveZero, isCountBelowTen } = useCounter()

const countMultiplied = computed(() => {
  return count.value * 2;
})

</script>

<template>
  <div :class="{ counter__active: count === 10 }" class="counter">
    <h2>Counter: {{ count }}</h2>
    <h2>Counter * 2: {{ countMultiplied }} </h2>
    <button class="counter__button" @click="increment" v-if="isCountBelowTen()">Increment</button>
    <button class="counter__button" @click="decrement" v-if="isCountAboveZero()">Decrement</button>
  </div>
</template>

<style scoped>
.counter {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3em;
}
.counter__active {
  color: green;
}
.counter__button {
  min-width: 5.3125rem;
  user-select: none;
  cursor: pointer;
}
</style>
