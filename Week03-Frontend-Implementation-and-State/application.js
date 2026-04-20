var app = new Vue({
    el:"#app",
    data:{
        msg:"Hello World",
        count:0,
        name:"",
        names:[]
    },
    methods:{
        sayhi: function(){
            this.msg="hi";
            this.count+=1;
            this.names.push(this.name);
            this.name="";
        }
    }
})