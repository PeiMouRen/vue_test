<template>

    <div v-show="todos.length !== 0">
        <input type="checkbox" @click="checkAll" :checked="isAll">
        <span>已完成{{finishedSum}}/总共{{todos.length}}</span>
        <button @click="deleteDone">删除已完成</button>
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
            checkAll(e) {
                this.$emit('checkAll', e.target.checked)
            },
            deleteDone() {
                this.$emit('deleteDone')

            }
        },
        props:['todos']
    }
</script>

<style scoped>

</style>
