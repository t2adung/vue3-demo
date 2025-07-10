<script setup lang="ts">
import { reactive } from 'vue'

const state = reactive<{message: string}>({
  message: 'Hello Vue 3 + typescript'
})
</script>

<template>
  
  <h1>{{ state.message }}</h1>
  <nav>
    <router-link to="/">Trang chủ</router-link> |
    <router-link to="/about">Giới thiệu</router-link> |
    <router-link to="/counter">Counter App</router-link> | 
    <router-link to="/todoapp">Todo App</router-link> |
    <router-link to="/expenseapp">Expense Tracker App</router-link>
  </nav>
  
  <router-view /> 

</template>

<style scoped>
</style>
