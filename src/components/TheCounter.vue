<script setup lang="ts">
import { ref } from 'vue'
import TheTitle from './TheTitle.vue'

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
