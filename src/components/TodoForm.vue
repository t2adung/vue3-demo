<template>
    <input v-model="input" @keyup.enter="addTodo" placeholder="Add task..." />
    <button @click="addTodo">Add</button>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore } from '../stores/todo'

const input = ref('')
const store = useTodoStore()

function addTodo() {
    if (input.value.trim()) {
        store.addTodo(input.value)
        input.value = ''
    }
}
</script>

<style scoped>

</style>