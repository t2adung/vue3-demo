<template>
    <p>Count: {{ count }} | double: {{double}}</p>
    <button @click="increment">Increment</button>

    <hr>
    <Child title="Click here to show alert" @clicked="handleClick" />

    <hr>
    <p>Stored Count: {{ piniaCounter.count }}</p>
    <button @click="piniaCounter.increment">Increment</button>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Child from '../components/Child.vue';
import { useCounterStore } from "../stores/counter";

function handleClick():void {
  alert("Clicked")
}

const count = ref<number>(0)
const double = computed(() => count.value * 2)

function increment(): void {
  count.value++
}

const piniaCounter = useCounterStore()
</script>

<style scoped>

</style>