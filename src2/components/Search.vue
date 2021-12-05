
<template>
    <div>
        <h2>search github users</h2>
        <input v-model="keyWord" type="text">
        <button @click="searchUsers">Search</button>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'Search',
        data() {
            return {
                keyWord: ''
            }
        },
        methods: {
            searchUsers() {
                this.$bus.$emit('updateListData', {isFirst:false, isLoading: true, errMsg: '', users: []})
                
                let url = `https://api.github.com/search/users?q=${this.keyWord}`;
                axios.get(url).then(
                    response => {
                        console.log('成功', response.data)
                        this.$bus.$emit('updateListData', {isLoading: false, errMsg: '', users: response.data.items})
                    },
                    error => {
                        console.log('失败', error.message)
                        this.$bus.$emit('updateListData', {isLoading: false, errMsg: error.message, users: []})
                    }
                )

            }
        }
    }
</script>

<style>

</style>