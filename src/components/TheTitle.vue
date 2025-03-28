<script setup lang="ts">
defineProps<{
  propTitle: string
}>()
</script>

<template>
  <div>
    <h2 class="titles">{{ propTitle }}</h2>
  </div>
</template>

<style scoped>
.titles {
  color: rgb(21, 153, 81);
  text-align: center;
}
</style>
