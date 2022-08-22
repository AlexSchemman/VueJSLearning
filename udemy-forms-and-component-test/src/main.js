const app = Vue.createApp({
  data(){
    return{
      userName: "",
      age: "",
      referrer: "",
      interest: [{interestNews:'false'},
                {interestTutorials:'false'},
                {interestNothing:'false'}                       
    ],
      how: "",
      dataIn: false
    }
  },
  methods: {
    capturedMessage({userName,age,referrer,interestNews,interestTutorials,interestNothing,how}){
      this.userName = userName;
      this.age = age;
      this.referrer =referrer;
      this.interest[0].interestNews =interestNews;
      this.interest[1].interestTutorials =interestTutorials;
      this.interest[2].interestNothing = interestNothing;
      this.how = how;
      if(userName) this.dataIn = true;

      console.log(this.interest[0].interestNews)
    }
    
  }

})

app.component('main-app', {
    template: `
    <form>
    <div class="form-control">
      <label for="user-name">Your Name</label>
      <input v-model="userName" name="user-name" type="text" />
    </div>
    <div class="form-control">
      <label for="age">Your Age (Years)</label>
      <input v-model="age" name="age" type="number" />
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about us?</label>
      <select v-model="referrer" name="referrer">
        <option value="Google">Google</option>
        <option value="Word of Mouth">Word of mouth</option>
        <option value="Newspaper">Newspaper</option>
      </select>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
        <input v-model="interestNews" name="interest" type="checkbox" />
        <label for="interestNews">News</label>
      </div>
      <div>
        <input v-model="interestTutorials" name="interest" type="checkbox" />
        <label for="interestTutorials">Tutorials</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <input v-model="how" value="Video" name="how" type="radio" />
        <label for="howVideo">Video Courses</label>
      </div>
      <div>
        <input v-model="how" value="Blogs" name="how" type="radio" />
        <label for="howBlogs">Blogs</label>
      </div>
      <div>
        <input v-model="how" value="Other" name="how" type="radio" />
        <label for="howOther">Other</label>
      </div>
    </div>
    <div>
      <button @click ="dataShow" type="button">Save Data</button>
    </div>
  </form>
    `,
    data() {
      return {
        userName: "",
        age: "",
        referrer: "",
        interestNews: "",
        interestTutorials: "",
        interestNothing: "",
        how: ""
      };
    },
    methods: {
      dataShow(){
          this.$emit("child-message",{userName: this.userName,
                                      age: this.age,
                                      referrer: this.referrer,
                                      interestNews: this.interestNews,
                                      interestTutorials: this.interestTutorials,
                                      interestNothing: this.interestNothing,
                                      how: this.how
                                          });
          console.log(this.how)
      },
    },
  });
  

app.mount('#app');
