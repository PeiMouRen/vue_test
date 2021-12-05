<template>
  <div>
      <MyHeader @addTodo="addTodo"/>
      <MyList :todos="todos"/>
      <MyFooter @deleteDone="deleteDone" @checkAll="checkAll" :todos="todos"/>
  </div>
</template>

<script>
  import MyHeader from './components/MyHeader'
  import MyList from './components/MyList'
  import MyFooter from './components/MyFooter'
  import pubsub from 'pubsub-js'

  export default {
    name: 'App',
    components: {MyHeader, MyList, MyFooter},
    data() {
        return {
            todos: JSON.parse(localStorage.getItem('todos')) || []
        }
    },
    watch: {
      todos: {
        deep:true,
        handler(value) {
          localStorage.setItem('todos', JSON.stringify(value))
        }
      }
      
    },
    mounted() {
      //this.$bus.$on('changeChecked', this.changeChecked)
      this.$bus.$on('deleteTodo', this.deleteTodo)
      console.log(pubsub)
      this.subId = pubsub.subscribe('changeChecked',(msgName, data) => {
        this.changeChecked(data)
      })
    },
    beforeDestroy() {
      //this.$bus.$off('changeChecked')
      this.$bus.$off('deleteTodo')
      pubsub.unsubscribe(this.subId)
    },
    methods:{
      addTodo(todoObj) {
        console.log('我是app组件，我收到了：', todoObj)
        this.todos.unshift(todoObj)
      },
      changeChecked(id) {
        this.todos.forEach((todo) => {
          if (todo.id === id) todo.done = !todo.done
        })
      },
      deleteTodo(id) {
        for (let i = 0; i < this.todos.length; i++) {
          if (this.todos[i].id === id) {
            this.todos.splice(i, 1);
          }
        }
        
      },
      checkAll(value) {
        this.todos.forEach(todo => todo.done = value)
      },
      deleteDone() {
        this.todos = this.todos.filter(todo => !todo.done)
      }
    }
  }
</script>

<style>

</style>