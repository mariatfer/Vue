<script setup lang="ts">
import { inject } from 'vue'

const emit = defineEmits(['sayHi'])

function sayHi() {
  emit('sayHi', { message: 'Hi this is ChildComponent!' })
}

const parentMessage = inject('message')
console.log('Parent message to Children: ', parentMessage)
</script>

<template>
  <button type="button" @click="sayHi">Say hi!</button>
</template>

<style scoped lang="scss"></style>
