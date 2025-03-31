<script setup lang="ts">
import type { Product } from '@/data/mock';

// defineProps({
//     product: Object
// })
defineProps<{product: Product}>()
</script>

<template>
  <article class="card">
    <img :src="product.image" :alt="product.title" />
    <h2>{{ product.title }}</h2>
    <p>{{ product.description }}</p>
    <span>{{ product.price }}</span>
    <button type="button">Añadir a la cesta</button>
  </article>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width:  12.5rem;
  border: 0.0625rem solid gray;
  border-radius: 0.4375rem;
  padding: 0.625rem;
}
</style>
