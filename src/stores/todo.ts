import { defineStore } from "pinia";

export interface Todo {
    id: number,
    text: string, 
    done: boolean,
}

export const useTodoStore = defineStore('todo', {
    state: () => ({
        todos: [] as Todo[]
    }),
    actions: {
        addTodo(text: string) {
            const newTodo: Todo = {
                id: Date.now(),
                text,
                done: false
            }

            this.todos.push(newTodo)
        },
        toggle(id: number) {
            const todo = this.todos.find(t => t.id === id)
            if (todo) todo.done = !todo.done
        },
        remove(id: number) {
            this.todos = this.todos.filter(t => t.id !== id)
        }
    },
    persist: true
})