<template>
    <div>
        <div :key="task.id" v-for="task in tasks">
            <!-- <h3>{{ task.text }}</h3> -->
            <Task @delete-task="$emit('delete-task', task.id)" :task="task" />
        </div>
    </div>
    
</template>

<script>
import Task from './Task'
    export default{
        name: 'Tasks',
        props:{
            tasks: Array,
        },
        components:{
            Task,
        },
        emits: ['delete-task'] //- array of events
    }
</script>

<style scoped>
    
</style>