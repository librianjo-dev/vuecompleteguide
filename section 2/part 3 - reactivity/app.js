const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullname: '',
    };
  },
  watch: {
    name(value){
      if (value === ''){
        this.fullname = '';
      }
      this.fullname = value + ' ' + 'Schwarzmüller';
    }
  },
  computed: {
    /*fullname() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Schwarzmüller';
    }*/
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
