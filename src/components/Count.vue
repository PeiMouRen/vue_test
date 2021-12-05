<template>
    <div>
        <h1>当前求和值为{{$store.state.sum}}</h1>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">值为奇数时再加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>
export default {
    name: 'Count',
    data() {
        return {
            n: 1
        }
    },
    methods: {
        increment() {
            this.$store.dispatch('increment', this.n)
        },
        decrement() {
            //this.$store.dispatch('decrement', this.n)
            this.$store.commit('DECREMENT', this.n)
        },
        incrementOdd() {
            this.$store.dispatch('incrementOdd', this.n)
        },
        incrementWait() {
            setTimeout(() => {
                this.$store.dispatch('increment', this.n)
            }, 1000);
        },
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