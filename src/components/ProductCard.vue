<script setup lang="ts">
import type { ProductCard } from '@/data/mock'

defineProps<ProductCard>()
</script>

<template>
  <article class="card">
    <img :src="$props.image" :alt="$props.title" />
    <h2>{{ $props.title }}</h2>
    <p>{{ $props.description }}</p>
    <span>{{ $props.price }}</span>
    <button type="button">Añadir a la cesta</button>
  </article>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 12.5rem;
  border: 0.0625rem solid gray;
  border-radius: 0.4375rem;
  padding: 0.625rem;
}
</style>
