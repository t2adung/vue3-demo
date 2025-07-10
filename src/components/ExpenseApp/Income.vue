<template>
    <div class="inc-exp-container">
        <div>
            <h4>Income</h4>
            <p id="money-plus" class="money plus">$+{{ props.income }}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p id="money-minus" class="money minus">${{ props.expenses }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    income: number | string,
    expenses: number | string,
}
const props = defineProps<Props>()
</script>

<style scoped>

</style>