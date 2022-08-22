function getRandom(num1,num2){
    return Math.floor(Math.random()*(num1-num2))+Math.floor(num2);

}

const app = Vue.createApp({
    data(){
        return{
            monsterHealth: 100,
            playerHealth: 100,
            maxAttackHit: 11,
            minAttackHit: 6,
            currentRound: 0,
            winner: null,
            logMessages: []
        }
    },
    
    computed: {
        monsterBarStyle(){
            return {width: this.monsterHealth+'%'};
        },
        playerBarStyle(){
            return {width: this.playerHealth+'%'};
        },
        mayUseSpecialAttack(){
            return this.currentRound%3!==0;
        }
    },
    
    methods: {
        newGame(){
            this.monsterHealth= 100,
            this.playerHealth= 100,
            this.currentRound= 0,
            this.winner= null,
            this.logMessages = []
        },
        attackMonster() {
            const attackValue = getRandom(this.maxAttackHit,this.minAttackHit)
            if(this.monsterHealth-attackValue<=0) this.monsterHealth = 0;
            else this.monsterHealth -= attackValue;
            this.attackPlayer();
            this.addLogMessage('player','attack',attackValue);
            this.currentRound++;
        },
        attackPlayer() {
            const attackValue = getRandom(this.maxAttackHit-1,this.minAttackHit-1)
            if(this.playerHealth-attackValue<=0) this.playerHealth = 0;
            else this.playerHealth -= attackValue;
            this.addLogMessage('monster','attack',attackValue);
            this.currentRound++;
        },
        spattack(){
            const attackValue = getRandom(this.maxAttackHit*2,this.minAttackHit)
            this.monsterHealth -= attackValue;
            this.attackPlayer();
            this.addLogMessage('player','spattack',attackValue);
            this.currentRound++;
        },
        heal(){
            const healValue = getRandom(this.playerHealth/10,this.playerHealth/15)
            if(healValue+this.playerHealth>100) this.playerHealth = 100;
            else this.playerHealth += healValue;
            this.attackPlayer();
            this.addLogMessage('player','heal',healValue);
            this.currentRound++;
        },
        surrender(){
            this.winner = 'lost'
            this.addLogMessage('player','surrender',null)
        },
        addLogMessage(person,type,value){
            this.logMessages.unshift({
                actionBy : person,
                actionType : type,
                actionValue : value
            })
        }
    },
    watch: {
        playerHealth(value) {
            if(value <= 0 && this.monsterHealth == 0 ) {
                //draw
                this.winner = 'draw';
            }
            else if(value <= 0){
                //lost
                this.winner = 'lost';
            }
        },
        monsterHealth(value) {
            if(value <=0 && this.playerHealth == 0){
                //draw
                this.winner = 'draw';
            }
            else if(value <=0){
                //won
                this.winner = 'won';
            }
        }
    },

})

app.mount('#game')