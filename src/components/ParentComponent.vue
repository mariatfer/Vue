<script setup lang="ts">
import ChildComponent from '@/components/ChildComponent.vue'
import { provide } from 'vue'

function sayHiEvent(response: { message: string }) {
  console.log('Children message to Parent: ', response)
}

provide('message', 'Hi this is ParentComponent!')
</script>

<template>
  <ChildComponent @sayHi="sayHiEvent" />
</template>

<style scoped lang="scss"></style>
