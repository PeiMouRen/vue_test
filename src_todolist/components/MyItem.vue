<template>
  <li>
        <input type="checkbox" :checked="todo.done" @click="changeTodo(todo.id)">
        <span>{{todo.name}}</span>
        <button @click="delTodo(todo.id)" >删除</button>
  </li>
</template>

<script>
    export default {
        name: 'MyItem',
        props:['todo','changeChecked', 'deleteTodo'],
        methods:{
            changeTodo(id) {
                this.changeChecked(id)
            },
            delTodo(id) {
                if (confirm('确认删除吗')) {
                    this.deleteTodo(id)
                }
                
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
