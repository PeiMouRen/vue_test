<template>
    <div>
        <h1>当前求和值为{{sum}}</h1>
        <h1>当前求和值放大10倍为{{bigSum}}</h1>
        <h1>我在{{school}}学习{{subject}}</h1>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">值为奇数时再加</button>
        <button @click="incrementWait(n)">等一等再加</button>

        <ul>
            <li v-for="person in persons" :key="person.id">{{person.name}}</li>
        </ul>
    </div>
</template>

<script>

import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
export default {
    name: 'Count',
    data() {
        return {
            n: 1
        }
    },
    methods: {
        ...mapMutations('countModule', {increment: 'INCREMENT', decrement: 'DECREMENT'}),
        ...mapActions('countModule', ['incrementWait', 'incrementOdd'])
    },
    computed: {
        ...mapState('countModule', ['sum', 'school', 'subject']),
        ...mapState('personModule', ['persons']),
        ...mapGetters('countModule', ['bigSum'])
    },
    mounted() {
    }
}
</script>

<style>
    button{
        margin-left: 5px;
    }
</style>