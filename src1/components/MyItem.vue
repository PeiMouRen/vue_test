<template>
  <li>
        <input type="checkbox" :checked="todo.done" @click="changeTodo(todo.id)">
        <span v-show="!todo.isEdit">{{todo.name}}</span>
        <input ref="inputName" @blur="todo.isEdit = false" @keyup.enter="todo.isEdit = false" v-show="todo.isEdit" v-model="todo.name">
        <button @click="updateTodo(todo)">编辑</button>
        <button @click="delTodo(todo.id)" >删除</button>
  </li>
</template>

<script>
    import pubsub from 'pubsub-js'
    export default {
        name: 'MyItem',
        props:['todo'],
        methods:{
            changeTodo(id) {
                //this.$bus.$emit('changeChecked', id)
                pubsub.publish('changeChecked', id)
            },
            delTodo(id) {
                if (confirm('确认删除吗')) {
                    this.$bus.$emit('deleteTodo',id)
                }
                
            },
            updateTodo(todo) {
                 todo.isEdit = true
                 this.$nextTick(function() {
                     this.$refs.inputName.focus()
                 })
                 
            }
        }
    }
</script>

<style scoped>

    li button{
        display: none;
    }
    li:hover button{
        display: inline-block;
    }
    li:hover{
        background-color: hotpink;
    }
</style>
