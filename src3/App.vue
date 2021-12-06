<template>
  <div>
      <Count/>
      <hr>
      <Persons/>
  </div>
</template>

<script>
  import Count from './components/Count.vue'
  import Persons from './components/Persons.vue'
  


  export default {
    name: 'App',
    components:{Count, Persons},
    data() {
      return {
         
      }
    },
    methods: {
      
    },
    mounted() {
      // console.log('app', this)
    }
    
  }
</script>

<style>
  
</style>