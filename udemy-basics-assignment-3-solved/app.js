const app = Vue.createApp({
    data(){
        return {
            number : 0,
            resetTime : 0 
        }
    },
    methods: {
        AddNum(num){
            this.number += num;
        }
    },
    computed: {
        result(){
            if(this.number<37) {return "Not much";}
            else if(this.number == 37) {return this.number;}
            else if(this.number>37) {return "Too much!!";}
            }
    },
    watch: {
        result(){
            const that = this;
            if(that.number !=0) that.resetTime = 10;
            setTimeout(function(){ 
                if(that.number !=0) that.number = 0;
            },10.0*1000)           
        },
        resetTime(){
            const that = this;
            if(this.resetTime >= 1){
                setTimeout(function(){ 
                    that.resetTime -= 1;
                },1000)
        }   
        }
    }
})

app.mount('#assignment')