const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    add() {
      this.counter++;
    },
    remove() {
      if (this.counter > 0){
        this.counter--;
      }
    },
    setName(event){
      this.name = event.target.value;
    },
    submitForm(event){
      alert('Submitted');
    },
    confirmInput() {
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');
