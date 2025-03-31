<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheTitle from '@/components/TheTitle.vue'
import TheCounter from '@/components/TheCounter.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/catalogue">Catalogue</RouterLink>
      </nav>
      <TheTitle>Vue Exercise 7</TheTitle>
      <TheCounter></TheCounter>
    </div>
  </header>
  <main></main>

  <RouterView />
</template>

<style scoped>
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

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
