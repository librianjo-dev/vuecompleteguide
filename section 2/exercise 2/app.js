const app = Vue.createApp({
    data(){
        return {
            text1: '',
            text2: '',
        }
    },
    methods:{
        alertClick (){
            alert("You clicked the alert button!");
        },
        setText(event){
            this.text1 = event.target.value;
        },
        enterText(event){
            this.text2 = event.target.value;
        }
    }
});

app.mount('#assignment')