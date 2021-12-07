<template>
    <div>
      <h1>我是Home</h1>
      <template class="demo">
        <div>
          <router-link active-class="" to="/home/home1">home1</router-link><br>
          <router-link active-class="" to="/home/home2">home2</router-link>
        </div>
        <div>
        <keep-alive include="Home2">
          <router-view></router-view>
        </keep-alive>
        </div>
      </template>

    </div>
</template>

<script>
    export default {
        name: 'Home'
    }
</script>

<style>

</style>