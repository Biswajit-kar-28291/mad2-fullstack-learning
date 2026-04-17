var app = new Vue({
    el:"#app",
    data:{
        t:true,
    },
    methods:{
        toggle(){
            this.t=!this.t;

        }
        
    }
})