<template>
    <div>
        <ul>
            <MyItem 
                v-for="todoObj in todos" 
                :key="todoObj.id" 
                :todo="todoObj" 
                :changeChecked="changeChecked"
                :deleteTodo="deleteTodo"
            />
        </ul>
    </div>
  
</template>

<script>
    import MyItem from './MyItem'

    export default {
        name: 'MyList',
        components:{MyItem},
        props:['todos','changeChecked','deleteTodo']
    }
</script>

<style scoped>

</style>
