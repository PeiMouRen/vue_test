<template>
    <div>
        <a :href="user.html_url" target="_blank">
            <img :src="user.avatar_url" alt="">
        </a>
        <br>
        <span>{{user.login}}</span>
    </div>
</template>

<script>
export default {
    name: 'User',
    props:['user']
}
</script>

<style>

</style>