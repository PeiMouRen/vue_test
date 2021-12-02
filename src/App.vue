<template>
  <div>
      <h1>{{msg}}</h1>
      <School :getSchoolName="getSchoolName"/>
      <!-- <Student v-on:atguigu="getStudentName"/> -->
      <Student ref="student"/>
  </div>
</template>

<script>
  import School from './components/School'
  import Student from './components/Student'
  
  export default {
    name: 'App',
    data() {
        return {
           msg: 'hello'
        }
    },
    components:{School,Student},
    methods: {
      getSchoolName(schoolName) {
        console.log(schoolName)
      },
      getStudentName(studentName,...a) {
        console.log('###', studentName, a)
      }
    },
    mounted() {
      setTimeout(() => {
        //this.$refs.student.$on('atguigu', this.getStudentName)
        this.$refs.student.$once('atguigu',  this.getStudentName)
        }, 5000);
      
    }
    
  }
</script>

<style>

</style>