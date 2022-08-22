const app = Vue.createApp({
  data() {
    return { 
          userInput: '',
          userInput2: '',
          confirmedInput: '' 
          };
  },
  methods: {
    showAlert() {
      alert('Alerto!');
    },
    saveInput(event) {
      this.userInput = event.target.value;
    },
    saveInput2(event) {
      this.userInput2 = event.target.value;
    },
    confirmInput() {
      this.confirmedInput = this.userInput2;
    }
  }
});

app.mount('#assignment');