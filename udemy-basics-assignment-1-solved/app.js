const app = Vue.createApp({
  data() {
    return {
      name: 'Hardik',
      age: 22,
      imageLink: 'https://res.cloudinary.com/fleetnation/image/private/c_fit,w_1120/g_south,l_text:style_gothic2:%C2%A9%20Blue,o_20,y_10/g_center,l_watermark4,o_25,y_50/v1547329278/wdvssqelmstkfgoyxac5.jpg'
    };
  },
  methods: {
    calcAge() {
      return this.age + 5;
    },
    Random() {
      return Math.random();
    }
  }
});

app.mount('#assignment');