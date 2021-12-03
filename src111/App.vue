<template>
  <div>
      <h1>{{msg}}</h1>
      <h2>学生的姓名是：{{studentName}}</h2>
      <School :getSchoolName="getSchoolName"/>
      <!-- <Student v-on:atguigu="getStudentName"/> -->
      <Student ref="student" @click.native="show"/>
  </div>
</template>

<script>
  import School from './components/School'
  import Student from './components/Student'
  
  export default {
    name: 'App',
    data() {
        return {
           msg: 'hello',
           studentName: ''
        }
    },
    components:{School,Student},
    methods: {
      getSchoolName(schoolName) {
        console.log(schoolName)
      },
      getStudentName(studentName,...a) {
        console.log('###', studentName, a)
        this.studentName = studentName;
      },
      show() {
        alert(123)
      }
    },
    mounted() {
      // setTimeout(() => {
      //   //this.$refs.student.$on('atguigu', this.getStudentName)
      //   this.$refs.student.$once('atguigu',  this.getStudentName)
      //   }, 5000);
      this.$refs.student.$on('atguigu',  this.getStudentName)
      
    }
    
  }
</script>

<style>

</style>