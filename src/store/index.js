import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {
    increment(context, value) {
        console.log(context)
        context.commit('INCREMENT', value)
    },
    incrementOdd(context, value) {
        if (context.state.sum  % 2) context.commit('INCREMENT', value)
    },
    decrement(context, value) {
        context.commit('DECREMENT', value)
    }
};
const mutations = {
    INCREMENT(state, value){
        state.sum += value;
    },
    DECREMENT(state, value){
        state.sum -= value;
    }
};
const state = {
    sum: 0
};
export default new Vuex.Store({
    actions,
    mutations,
    state
})
