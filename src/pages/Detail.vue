<template>
    <div>
        <span>编号：{{id}}</span>
        <span>标题:{{title}}</span>
        <hr>
    </div>
</template>

<script>
    export default {
        name: 'Detail',
        props: ['id', 'title'],
        mounted() {
            //console.log(this)
        }
    }
</script>

<style>

</style>