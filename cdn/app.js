const app = Vue.createApp({
    // template: '<h1>Hola mundo</h1>',
    // template: '<h1>Hola {{firstName}}</h1>',
    data(){ //function that returns an object 
        return {
            firstName: 'John',
            lastName: 'Smith',
            gender: 'male',
            email: 'john.smith@mail.com',
            phone: '812 365 7896',
            picture: 'https://randomuser.me/api/portraits/men/75.jpg'
        }
    },
    methods:{
        async getUser(){

            const res = await fetch ('https://randomuser.me/api')  //fetch es una función que lanza un request y espera una respuesta, sabe que en algún momento va a llegar
            const { results } = await res.json();

            console.log(results);

            this.firstName = results[0].name.first;
            this.lastName =  results[0].name.last;
            this.gender = results[0].gender;
            this.email = results[0].email;
            this.phone = results[0].phone;
            this.picture = results[0].picture.large;
        }
    }
})

app.mount('#app');