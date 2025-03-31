<script setup lang="ts">
import { useCounter } from '@/composables/useCounter'
import TheTitle from '@/components/TheTitle.vue'

const { count, increment, decrement, isCountAboveZero, isCountBelowTen } = useCounter()
</script>

<template>
  <div class="counter">
    <TheTitle>Counter: {{ count }}</TheTitle>
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
.counter__button {
  min-width: 5.3125rem;
  user-select: none;
  cursor: pointer;
}
</style>
