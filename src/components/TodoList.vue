<template>
    <ul>
        <li v-for="todo in store.todos" :key="todo.id">
            <input type="checkbox" v-model="todo.done"/>
            <span :style="{ textDecoration: todo.done ? 'line-through' : 'none'}">{{ todo.text }}</span>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { useTodoStore } from '../stores/todo'
const store = useTodoStore()

</script>

<style scoped>

</style>