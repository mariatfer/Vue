<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { mockProducts } from '@/data/mock'
import TheTitle from '@/components/TheTitle.vue'
import ProductCard from '@/components/ProductCard.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
      <TheTitle>Vue Exercise 7</TheTitle>
    </div>
  </header>
  <main class="main">
    <section class="products">
      <ProductCard v-for="product in mockProducts" :key="product.id" v-bind="product"></ProductCard>
    </section>
  </main>

  <RouterView />
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.products {
  display: flex;
  justify-content: center;
  gap: 1.25rem;
  flex-wrap: wrap;
  width: 80%;
}
.main {
  display: flex;
  justify-content: center;
}
</style>
