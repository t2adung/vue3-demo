import { defineStore } from "pinia"

export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 0 as number
    }),
    actions: {
        increment(): void {
            this.count++
            //localStorage.setItem('count', this.count.toString())
        }
    },
    persist: true
})