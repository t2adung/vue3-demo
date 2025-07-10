<template>
    <h3>Add new transaction</h3>
    <form id="form" @submit.prevent="onSubmit">
        <div class="form-control">
            <label for="text">Text</label>
            <input type="text" id="text" placeholder="Enter text" v-model="text">
        </div>
        <div class="form-control">
            <label for="amount">Amount<br/>(negative - expense, positive - income)</label> 
            <input type="text" id="amount" placeholder="Enter amount" v-model="amount">
        </div>
        <button class="btn">Add transaction</button>
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const text = ref<string>()
const amount = ref<string>()

const emit = defineEmits<{
    (e: 'transactionSubmitted', data: { text: string, amount: number }): void
}>()

const onSubmit = () => {
    if (!text.value || !amount.value) {
        alert('Both fields must be filled and valid.');
        return;
    }

    const parseAmount = parseFloat(amount.value)

    if (isNaN(parseAmount)) {
        alert('Amount must be valid number')
        return
    }
    
    const transactionData = {
        text: text.value,
        amount: parseAmount
    }

    emit('transactionSubmitted', transactionData)

    text.value = ''
    amount.value = ''
}
</script>

<style scoped>

</style>