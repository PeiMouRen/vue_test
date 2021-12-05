<template>
  <div>
      <User v-show="info.users.length" v-for="user in info.users" :key="user.id" :user="user"/>
      <h1 v-show="info.isFirst">欢迎使用!</h1>
      <h1 v-show="info.isLoading">loading...</h1>
      <h1 v-show="info.errMsg">loading error: {{info.errMsg}}</h1>
  </div>
</template>

<script>
    import User from './User.vue'
    export default {
        name: 'UserList',
        components: {User},
        data() {
            return {
                info: {
                    isFirst: true,
                    isLoading: false,
                    errMsg: '',
                    users: []
                }
            }
        },
        methods: {

        },
        mounted() {
            this.$bus.$on('updateListData', (listObj) => {
                this.info = {...this.info, ...listObj} // 合并两个对象，有重复的属性以后面的对象为准
            })
            
        }

    }
    
</script>

<style>

</style>