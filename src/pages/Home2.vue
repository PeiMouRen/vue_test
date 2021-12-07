<template>
  <div>
    <h4 :style="{opacity}">欢迎学习vue</h4>
    <ul>
      <li v-for="l in list" :key="l.id">
        {{l.title}}
        <input type="text">  
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: 'Home2',
        data() {
          return {
            list:[
              {id: '001', title: 'news001'},
              {id: '002', title: 'news002'},
              {id: '003', title: 'news003'}
            ],
             opacity: 1
          }
        },
         activated() {
          this.timer = setInterval(() => {
            console.log('@')
            this.opacity -= 0.05
            if (this.opacity <= 0) this.opacity = 1
          }, 50);
        },
        deactivated() {
          clearInterval(this.timer)
        }
    }
</script>

<style>

</style>