<script setup lang="ts">

const props = defineProps<{title: string}>()

const emits = defineEmits<{
  (e: 'clicked') : void
}>()
</script>

<template>
  <div @click="emits('clicked')" style="cursor: pointer;">
    {{ props.title }}
  </div>
</template>

<style scoped>

</style>
