<template>
<!-- <div class="task"> -->
    <!-- Hacemos un binding de class para poder traernos si la task tiene o no reminder -->
<div @dblclick="$emit('toggle-reminder', task.id)" :class="[task.reminder ? 'reminder' : '', 'task']">   <!--Si el reminder es verdadero, agrgar clase reminder, sino omitir, siempre agregar task -->
    <h3>{{ task.text }}
        <!-- <i class="fas fa-times"></i> -->
        <i @click="onDelete(task.id)" class="fas fa-times"></i>
    </h3>
    <p>{{ task.day }}</p>
</div>
</template>

<script>
    export default{
        name: 'task',
        props:{
            task: Object,
        },
        methods:{
            onDelete(id){
                // console.log(id);
                this.$emit('delete-task', id)
            }
        }
    }
</script>

<style>
.fas{
    color: red;
}

.task{
    background: #f4f4f4;
    margin: 5px;
    padding: 10px 20px;
    cursor: pointer;
}
.reminder{
    border-left: 5px solid green;
}

.task h3{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

    
</style>