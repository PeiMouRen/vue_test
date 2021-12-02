<template>
  <div>
      <MyHeader :recive="recive"/>
      <MyList :todos="todos" :changeChecked="changeChecked" :deleteTodo="deleteTodo"/>
      <MyFooter :deleteDone="deleteDone" :checkAll="checkAll" :todos="todos"/>
  </div>
</template>

<script>
  import MyHeader from './components/MyHeader'
  import MyList from './components/MyList'
  import MyFooter from './components/MyFooter'
  
  export default {
    name: 'App',
    components: {MyHeader, MyList, MyFooter},
    data() {
        return {
            // todos: [
            //     {id:'001', name:'吃饭', done:true},
            //     {id:'002', name:'睡觉', done:true},
            //     {id:'003', name:'打游戏', done:false}
            // ]
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
    // mounted() {
    //   this.todos = JSON.parse(localStorage.getItem('todos'))
    // },
    methods:{
      recive(todoObj) {
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