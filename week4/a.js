Vue.component('msg',{
    props:['title'],
    template:`
    <div>
    <h4 class="text-center">{{title}}</h4>
         <label for="">Enter Your Name:</label>
        <input type="text" v-model="a">
        <label for="">Enter Your Massage:</label>
        <input type="text" v-model="b">
        <button @click="sayhi()">sayhi</button>
        <p>this your data</p>
         <p v-for="i in ab">{{i.a}}:{{i.b}}</p>
         </div>
    `,
    data:function(){
        return {
        msg:"hi",
        a:'',
        b:'',
        ab:[]}
    },
    methods:{
        sayhi:function(){
            this.ab.push({"a":this.a,"b":this.b});
            this.a="";
            this.b="";
            this.$emit("add-event")
        }
    }
})

var app=new Vue({
    el:"#app",
    data: {
        count:0
    },
    methods: {
        count_g:function(){
            this.count=this.count+1;
        }
    }
    
})