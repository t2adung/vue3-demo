<template>
     <h2>Expense App</h2>
    <div class="exapp-container">
        <Balance :total="total"/>
        <Income :income="+income" :expenses="+expenses"/>
        <Input @transactionSubmitted="handleTransactionSubmitted"/>
        <History :transactions="transactions" @transactionDeleted="handleTransactionDeleted"/>
    </div>
</template>    

<script setup lang="ts">
import '../assets/expenseapp/style.css'

import Balance from '../components/ExpenseApp/Balance.vue'
import Income from '../components/ExpenseApp/Income.vue'
import History from '../components/ExpenseApp/History.vue'
import Input from '../components/ExpenseApp/Input.vue'

import { computed, ref, onMounted } from 'vue';

interface Transaction {
    id: number,
    text: string, 
    amount: number,
}

const transactions = ref<Transaction[]>([])

const lastId = computed(() => {
    if (transactions.value.length === 0) return 0
    return Math.max(...transactions.value.map(t => t.id))
})


onMounted(() => {
    const saveTransactions = localStorage.getItem('transactions')

    if (saveTransactions) {
        transactions.value = JSON.parse(saveTransactions)
    }
})

const total = computed(() => {
    return transactions.value.reduce((acc, transaction) => {
        return acc + transaction.amount;
    }, 0);
})

const income = computed(() => {
    return transactions.value
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => {
        return Number(acc + transaction.amount);
    }, 0)
    .toFixed(2);
})

const expenses = computed(() => {
    return transactions.value
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => {
        return Number(acc + transaction.amount);
    }, 0)
    .toFixed(2);
})

const handleTransactionSubmitted = (transactionData: TransactionData) => {
    transactions.value.push({
        id: lastId.value + 1,
        text: transactionData.text,
        amount: transactionData.amount,
    })

    saveTransactionsToLocalStorage();

    alert('Transaction added');
}

const saveTransactionsToLocalStorage = () => {
    console.log(transactions.value);
    localStorage.setItem('transactions', JSON.stringify(transactions.value))
}

const handleTransactionDeleted = (id: number) => {

    transactions.value = transactions.value.filter(
        (transaction) => transaction.id !== id
    )

    saveTransactionsToLocalStorage()

    alert('Transaction deleted')
}
</script>

<style scoped>

</style>