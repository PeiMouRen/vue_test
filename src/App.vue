<template>
  <div>
      <h1>spa-demo</h1>
      <template class="demo">
        <div>
          <router-link active-class="" to="/about">about</router-link><br>
          <router-link active-class="" to="/home">home</router-link>
        </div>
        <div>
          <router-view></router-view>
        </div>
      </template>
  </div>
</template>

<script>
  // import About from './components/About.vue'
  // import Home from './components/Home.vue'
  export default {
    name: 'App',
    //components: {About, Home},
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

<style  scoped>
  .demo{
    display:inline
  }
  
</style>