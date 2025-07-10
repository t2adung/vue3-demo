<template>
    <h3>History</h3>
    <ul id="list" class="list">
        <li v-for="transaction in props.transactions" :key="transaction.id" :class="transaction.amount < 0 ? 'minus' : 'plus'"> 
            {{ transaction.text }} <span>${{ transaction.amount }}</span>
            <button class="delete-btn" @click="deleteTransaction(transaction.id)">x</button>
        </li>
    </ul>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

const props = defineProps({
    transactions: {
        type: Array as PropType<{id: number; text: string; amount: number }[]>, 
        required: true, 
    }
});

const emits = defineEmits<{
    (e: 'transactionDeleted', id: number): void
}>()

const deleteTransaction = (id: number) => {
    emits('transactionDeleted', id)
}
</script>

<style scoped>

</style>