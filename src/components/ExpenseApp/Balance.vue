<template>
    <h4>Your balance</h4>
    <h1 id="balance">${{ props.total }}</h1>
</template>

<script setup lang="ts">

const props = defineProps<{total: number}>()

</script>

<style scoped>

</style>