<template>
  <div class="school">
      <h3 ref="name">{{name}}</h3>
      <h3>{{address}}</h3>
      <button @click="transmitSchoolName">点我将学校名称传给app</button>
  </div>
</template>

<script>
    import pubsub from 'pubsub-js'
    export default {
        name: 'School',
        data() {
            return {
                name: '尚硅谷',
                address: '北京'
            }
        },
        methods: {
            transmitSchoolName() {
                this.getSchoolName(this.name)
            }
        },
        props:["getSchoolName"],
        mounted() {
            this.subId = pubsub.subscribe('hello', (msgName, data) => {
                console.log("school收到了订阅的消息：", data)
            })
        },
        beforeDestroy() {
            pubsub.unsubscribe(this.subId);
        }
    }
</script>

<style scoped>
    .school{
        background-color: grey;
    }
</style>