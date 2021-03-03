<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div class="container">
    <!-- 3. <h1>Hello World</h1> -->
    <!-- <Header /> -->
    <Header @toggle-add-task="toggleAddTask" title="To Do List" :showAddTask="showAddTask" />
    <div v-show="showAddTask">
      <AddTask @add-task="addTask" />
    </div>
    <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks" />  <!-- Este es un elemento Dinámico porque quremos que se refreshee -->
  </div>
</template>

<script>
//2. import HelloWorld from './components/HelloWorld.vue'
import Header from  './components/Header'
import Tasks from  './components/Tasks'
import AddTask from './components/AddTask'


export default {
  name: 'App',
  components: {
    //1. HelloWorld
    Header,
    Tasks,
    AddTask
  },
  data(){
    return {
      tasks: [],
      showAddTask: false
    }
  },
  methods:{
    toggleAddTask(){
      this.showAddTask = !this.showAddTask
    },
    addTask(task){
      this.tasks = [...this.tasks, task]
    },
    deleteTask(id){
      // console.log('task', id);
      if(confirm("Are you sure?")){
        //we want everything back to the list except the deleted one
        this.tasks = this.tasks.filter((task) => task.id !== id);
      }
    },
    toggleReminder(id){
      console.log("reminder ", id);
      this.tasks = this.tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task)
      //map array (manipular y regrear del array lo que queremos)
      //queremos updated tasks - por cada task, tenemos una condición de que si la task.id es igual al id seleccionado 
      //retornamos un array de objetos donde tenemos la propiedad inicial de la task para ir a la task inicial 
      //y vamos a cambiar  el reminder para lo contrario de su estado actual (si está on->off) sino no hacemos nada, solo retornamos la task inicial
    }

  },
  created(){
    this.tasks = [
      {id: 1, text: 'Revisión PSP', day: 'March 15 at 2.30', reminder: true}, {id: 2, text: 'Examen S.O', day: 'March 20 at 4.00', reminder: false}
    ]
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  font-family: Arial, Helvetica, sans-serif;
}

/* Agrega este container y borra #app*/
.container {
  max-width: 80%;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid black;
  padding: 30px;
  border-radius: 5px;
}

h1,
h3 {
  margin-bottom: 1rem;
  font-weight: normal;
}

img {
  border-radius: 50%;
  border: 5px #333 solid;
  margin-bottom: 1rem;
}

.male {
  border-color: steelblue;
  background-color: steelblue;
}

.female {
  border-color: pink;
  background-color: pink;
  color: #333;
}

button {
  cursor: pointer;
  display: flex;
  background: #333;
  color: white;
  font-size: 18px;
  border: 0;
  padding: 1rem 1.5rem;
}

button:focus {
  outline: none;
}

button:hover {
  transform: scale(0.98);
}

</style>
