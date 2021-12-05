<template>
  <div class="demo">
      <!-- <Catagory :title="foods.title">
          <img slot="info" src="./assets/logo.png" alt="">
          <a slot="link" href="">aaa</a>
      </Catagory> -->
      <Catagory :title="games.title">
        
        <template scope="{games}">
          <h4>{{games}}</h4>
          <ul>
           <li v-for="(item, index) in games" :key="index">{{item}}</li>
          </ul>
          
        </template>
        
      </Catagory>
      <!-- <Catagory :title="video.title">
        <video slot="info" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
         <template v-slot:link>
           <a href="">ccc</a>
         <a href="">ddd</a>
         </template>
      </Catagory> -->
  </div>
</template>

<script>
  // import School from './components/School'
  // import Student from './components/Student'
  // import axios from 'axios'
  // import Search from './components/Search.vue'
  // import UserList from './components/UserList.vue'
  import Catagory from './components/Catagory.vue'


  export default {
    name: 'App',
    components:{Catagory},
    data() {
      return {
          foods: {
            title: '美食',
            slotName: 'info'
          },
          games: {
            title: '游戏',
            contents: ['王者', '联盟', '飞车']
          },
          video: {
            title: '电影'
          }
      }
    },
    methods: {
      
    }
    
  }
</script>

<style>
  img{
    background-color: skyblue;
    width: 100%;
  }
  video{
    width:20%
  }
  .demo{
    display: flex;
    justify-content: space-around;
  }
</style>