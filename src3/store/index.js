import Vue from 'vue'
import Vuex from 'vuex'
import {nanoid} from 'nanoid'

Vue.use(Vuex)


const countModule = {
    namespaced: true,
    actions: {
        increment(context, value) {
            console.log(context)
            context.commit('INCREMENT', value)
        },
        incrementOdd(context, value) {
            if (context.state.sum  % 2) context.commit('INCREMENT', value)
        },
        incrementWait(context, value) {
            setTimeout(() => {
                context.commit('INCREMENT', value)
            }, 500);
        },
        decrement(context, value) {
            context.commit('DECREMENT', value)
        },
    },
    mutations: {
        INCREMENT(state, value){
            state.sum += value;
        },
        DECREMENT(state, value){
            state.sum -= value;
        },
    },
    getters: {
        bigSum(state) {
            return state.sum * 10;
        }
    },
    state: {
        sum: 0,
        school: '尚硅谷',
        subject: '前端',
    }
}

const personModule = {
    namespaced: true,
    actions: {
        addAPerson(context, value) {
            let person = {
                id: nanoid(),
                name: value,
                age: 20
            }
            context.commit('ADDAPERSON', person)
        }
    },
    mutations: {
        ADDAPERSON(state, value) {
            state.persons.unshift(value)
        }
    },
    getters: {

    },
    state: {
        persons: [
            {
                id: 1,
                name: '张三',
                age: 18
            },
            {
                id: 2,
                name: '李四',
                age: 19
            },
            {
                id: 3,
                name: '王五',
                age: 20
            },
        ]
    }
}


export default new Vuex.Store({
    modules: {
        countModule,
        personModule
    }
})
