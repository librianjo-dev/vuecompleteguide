const app = Vue.createApp({
    data() {
        return {
            taskValue: '',
            tasks: [],
            toggleList: true
        };
    },
    computed: {
        buttonCaption() {
            return this.toggleList ? 'Hide List' : 'Show List';
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.taskValue);
        },
        removeTask(index) {
            this.tasks.splice(index, 1);
        },
        toggleTaskList() {
            this.toggleList = !this.toggleList;
        }
    }
});

app.mount("#assignment");