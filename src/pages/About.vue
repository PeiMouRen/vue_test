<template>
    <h2>我是About</h2>
</template>

<script>
    export default {
        name: 'About',
        beforeRouteEnter(to, from, next) {
            console.log(1)
            console.log(to, from, next)
            next();
        },
        beforeRouteLeave(to, from, next) {
            console.log(2)
            console.log(to, from, next)
            next();
        }
    }
</script>

<style>

</style>