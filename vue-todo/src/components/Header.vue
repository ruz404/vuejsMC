<template>
    <header>
        <!-- <h1>To Do List</h1> -->
        <h1>{{ title }}</h1>
        <Button @btn-click="$emit('toggle-add-task')" :text="showAddTask ? 'Close' : 'Add'" :color="showAddTask ? 'red' : 'green'" />
        <!-- <Button text='Update' color='blue' />
        <Button text='Delete' color='red' /> -->
    </header>
</template>

<script>
    import Button from './Button'

    export default{
        name: 'Header',
        // props: ['title'],
        props:{
            title: {
                type: String,
                default: 'Some Title'
            },
            showAddTask: Boolean
        },
        // props:{
        //     title: String,
        // },
        components: {
            Button
        }
    }
</script>

<style scoped>
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
</style>