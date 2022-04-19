const app = Vue.createApp({
    data() {
        return {
            fullName: 'Paulo Vítor de Medeiros Brito',
            age: 22,
            imgURL: 'https://i.pinimg.com/originals/53/c4/bb/53c4bbd67f80e907efbd05edbc6cde75.jpg',
            someText: 'Insert some text here',
        };
    },
    methods: {
        futureAge() {
            return this.age + 5;
        },
        favNumber() {
            const number = Math.random();
            return number;
        }
    },
});

app.mount('#assignment');