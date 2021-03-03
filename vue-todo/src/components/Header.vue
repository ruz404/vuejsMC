<template>
    <header>
        <!-- <h1>To Do List</h1> -->
        <h1>{{ title }}</h1>
        <Button text='Add' color='green' />
        <Button text='Update' color='blue' />
        <Button text='Delete' color='red' />
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
            }
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