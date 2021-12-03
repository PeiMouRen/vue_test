<template>
  <div class="student">
      <h3 ref="name">{{name}}</h3>
      <h3>{{age}}</h3>
      <button @click="transmitStudentName">点我将学生名称传给app</button>
      <button @click="unbindAtguigu">点我解绑atguigu事件</button>
  </div>
</template>

<script>
    import pubsub from 'pubsub-js'
    export default {
        name: 'Student',
        data() {
            return {
                name: '张三',
                age: 18
            }
        },
        methods:{
            transmitStudentName() {
                this.$emit('atguigu', this.name, this.age)
                pubsub.publish('hello', this.name)
            },
            unbindAtguigu() {
                this.$off('atguigu')
            }
        }
    }
</script>

<style scoped>
    .student{
        background-color:crimson;
    }
</style>