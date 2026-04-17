var app = new Vue({
    el:"#app",
    data:{
        pass:"",
    },
    methods:{

    },
    computed:{
        u(){
            return /[A-Z]/.test(this.pass);
        },
        l(){
            return /[a-z]/.test(this.pass);
        },
        n(){
            return /[0-9]/.test(this.pass);
        },
        s(){
            return /[^a-zA-Z0-9]/.test(this.pass);
        },
    }
})