<template>

    <div v-show="todos.length !== 0">
        <input type="checkbox" @click="checkHandler" :checked="isAll">
        <span>已完成{{finishedSum}}/总共{{todos.length}}</span>
        <button @click="delDone">删除已完成</button>
    </div>

</template>

<script>
    export default {
        name: 'MyFooter',
        computed: {
            finishedSum() {
                //return this.todos.filter(todo => todo.done).length
                return this.todos.reduce((pre, current) => pre + (current.done? 1: 0), 0)
            },
            isAll() {
                return this.finishedSum === this.todos.length && this.todos.length > 0
            }
        },
        methods: {
            checkHandler(e) {
                this.checkAll(e.target.checked)
            },
            delDone() {
                this.deleteDone();

            }
        },
        props:['todos', 'checkAll','deleteDone']
    }
</script>

<style scoped>

</style>
