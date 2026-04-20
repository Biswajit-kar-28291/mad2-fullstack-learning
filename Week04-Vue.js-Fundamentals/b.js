var app = new Vue({
    el:"#app",
    data:{
        msg:"hello",
    },
    methods:{
        um:function(){
            this.msg="hi";
        }
    }
})