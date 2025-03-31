<script setup lang="ts">
const emit = defineEmits(['sayHi'])

function sayHi() {
  emit('sayHi', { message: 'Hi this is ChildComponent!' })
}
</script>

<template>
  <button type="button" @click="sayHi">Say hi!</button>
</template>

<style scoped lang="scss"></style>
