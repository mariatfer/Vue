<script setup lang="ts">
import { ref } from 'vue'
import TheTitle from './TheTitle.vue'

const count = ref(0)

function increment() {
  count.value++
}

function decrement() {
  count.value--
}
</script>

<template>
  <div>
    <TheTitle>Counter: {{ count }}</TheTitle>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<style scoped></style>
