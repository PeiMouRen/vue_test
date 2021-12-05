<template>
  <div>
      <h3>{{title}}</h3>
      <slot :games="games" :aa="name1"></slot>
      <slot name="link"></slot>
      
  </div>
</template>

<script>
    export default {
        name: 'Catagory',
        props: ['title'],
        data() {
            return {
                games:['aa', 'bb', 'cc'],
                name1: 'dddd'
            }
        }
    }
</script>

<style>

</style>