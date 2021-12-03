<template>
    <div>
        <ul>
            <MyItem 
                v-for="todoObj in todos" 
                :key="todoObj.id" 
                :todo="todoObj" 
            />
        </ul>
    </div>
  
</template>

<script>
    import MyItem from './MyItem'

    export default {
        name: 'MyList',
        components:{MyItem},
        props:['todos']
    }
</script>

<style scoped>

</style>
