<template>
  <div class="school">
      <h3 ref="name">{{name}}</h3>
      <h3>{{address}}</h3>
      <button @click="showDom">点我提示上方dom元素</button>
  </div>
</template>

<script>
    export default {
        name: 'School',
        data() {
            return {
                name: '尚硅谷',
                address: '北京'
            }
        },
        methods: {
            showDom() {
                console.log(this)
            }
        }
    }
</script>

<style>
    .school{
        background-color: grey;
    }
</style>