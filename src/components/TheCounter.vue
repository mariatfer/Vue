<script setup lang="ts">
import { useCounterStore } from '@/stores/useCounterStore';

const counter = useCounterStore()
</script>

<template>
  <div :class="{ counter__active: counter.count === 10 }" class="counter">
    <h2>Counter: {{ counter.count }}. {{ counter.message }}</h2>
    <h2>Counter * 2: {{ counter.countMultiplied }}</h2>
    <button class="counter__button" @click="counter.increment" v-if="counter.isCountBelowTen()">Increment</button>
    <button class="counter__button" @click="counter.decrement" v-if="counter.isCountAboveZero()">Decrement</button>
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
