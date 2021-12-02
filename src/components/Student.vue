<template>
  <div class="student">
      <h3 ref="name">{{name}}</h3>
      <h3>{{age}}</h3>
      <button @click="transmitStudentName">点我将学生名称传给app</button>
  </div>
</template>

<script>
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
            }
        }
    }
</script>

<style scoped>
    .student{
        background-color:crimson;
    }
</style>