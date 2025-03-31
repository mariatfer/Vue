<script setup lang="ts">
import ChildComponent from '@/components/ChildComponent.vue'

function sayHiEvent(response: { message: string }) {
  console.log('Children message: ', response)
}
</script>

<template>
  <ChildComponent @sayHi="sayHiEvent" />
</template>

<style scoped lang="scss"></style>
