const app = Vue.createApp({
  data() {
    return {
      enteredValue: '',
      tasks: [],
      taskListIsVisible: true,
    };
  },
  computed: {
    buttonCaption() {
      if (this.tasks == '') return 'Hide List';
      else return this.taskListIsVisible ? 'Hide List' : 'Show List';
      
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredValue);
      this.enteredValue = '';
    },
    toggleTaskList() {
      this.taskListIsVisible = !this.taskListIsVisible;
    },
    resetTaskList(){
      this.tasks = [];
    }
  },
});

app.mount('#assignment');
