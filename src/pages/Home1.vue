<template>
  <div>
    
    <ul>
      <li v-for="l in list" :key="l.id">
        <!-- 跳转路由并携带query参数 -->
        <!-- <router-link :to="`/home/home1/detail/${l.id}/${l.title}`">{{l.title}}</router-link> -->

        <router-link :to="{
          // 通过name和path都可设置跳转的路径
          name: 'detail',
          //path:'/home/home1/detail',
          params: {
            id: l.id,
            title: l.title
          }
        }">
          {{l.title}}
        </router-link>
        <button @click="pushShow(l)">push查看</button>
        <button @click="replaceShow(l)">replace查看</button>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: 'Home1',
        data() {
          return {
            list: [
              {id: '001', title: 'message001'},
              {id: '002', title: 'message002'},
              {id: '003', title: 'message003'}
            ],
           
          }
        },
        methods: {
          pushShow(l) {
            console.log(this)
            this.$router.push({
              name: 'detail',
              params: {
                id: l.id,
                title: l.title
              }
            })
          },
          replaceShow(l) {
            console.log(this)
            this.$router.replace({ 
              name: 'detail',
              params: {
                id: l.id,
                title: l.title
              }
            })
          }
        },
        activated() {
         console.log('Home1激活')
        },
        deactivated() {
          console.log('Home1失活')
        }
    }
</script>

<style>

</style>