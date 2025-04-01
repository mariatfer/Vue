<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheTitle from '@/components/TheTitle.vue'
import TheCounter from '@/components/TheCounter.vue'
import ParentComponent from '@/components/ParentComponent.vue'
import InstagramLogo from '@/components/icons/InstagramLogo.vue'
import TiktokLogo from '@/components/icons/TiktokLogo.vue'

const socialMedia = [
  {
    id: 1,
    name: InstagramLogo,
    path: '@/components/icons/InstagramLogo.vue'
  },
  {
    id: 2,
    name: TiktokLogo,
    path: '@/components/icons/TiktokLogo.vue'
  }
]
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
  <main>
    <ParentComponent />
    <component v-for="icons in socialMedia" :is="icons.name" :key="icons.id" class="social">{{ icons }}</component>
  </main>

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

.social {
  width: 3.5625rem;
  height: auto;
}
</style>
