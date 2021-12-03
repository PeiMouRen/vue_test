<template>
    <div>
        <input @keyup.enter="addTodo" type="text" placeholder="输入任务名称，按回车键确认">
    </div>
</template>

<script>
    import {nanoid} from 'nanoid'
    export default {
        name: 'MyHeader',
        methods: {
            addTodo(event) {
                if (!event.target.value.trim()) {
                    alert('输入不可为空') 
                    return event.target.value = ''
                }
                    
                const todoObj = {id:nanoid(), name:event.target.value, done:false, isEdit:false};
                this.$emit('addTodo', todoObj)
                event.target.value = ''
            }
        }
    }
</script>

<style scoped>

</style>
