var app = new Vue({
  el:"#app",
  data:{
    title:"1st",
    posts:[]
  },
  methods:{
    f(){
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res=>res.json())
      .then(data=>{
        this.posts=data
      })
    }
  },
  created: function(){
    this.f();
  }
})