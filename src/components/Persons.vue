<template>
    <div>
        <h2>当前求和值为{{sum}}</h2>
        <input type="text" placeholder="输入名称" v-model="personName">
        <button @click="addAPerson(personName)">addAPerson</button>
        <ul>
            <li v-for="person in persons" :key="person.id">{{person.name}}</li>
        </ul>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: 'Persons',
        data() {
            return {
                personName: ''
            }
        },
        computed: {
            ...mapState('countModule', ['sum']),
            ...mapState('personModule', ['persons'])
        },
        methods: {
            addAPerson(value) {
                this.$store.dispatch('personModule/addAPerson', value)
            },
           // ...mapActions('personModule', ['addAPerson'])
        },
        mounted() {
            console.log(this)
        }
    }
</script>

<style>

</style>