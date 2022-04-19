const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish this course!',
            vueLink: 'https://vuejs.org/',
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.55) {
                return 'Learn Vue!';
            } else {
                return 'Master Vue!';
            }
        }
    }
});

app.mount('#user-goal');