Vue.component("data-card",{
    props:['d'],
    data(){
  return {
    info: null
  }
},
    template:
    `<div class="card me-3"style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{{d}}</h5>
    <p class="card-text">{{this.info}}</p>
    <a href="#" class="card-link" @click="remove">remove-city</a>
  </div>
</div>`,

created: function(){
    try{
   fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${this.d}`)
   .then(res=>res.json())
   .then(data =>{
    this.info=data.extract
    console.log(data);
   })
    }catch(error){
        console.log(error)
    }
},
methods:{remove(){
    this.$emit("rm",this.d);
}}

});


var app=new Vue ({
    el:'#app',
    data:{
        newData:'',
        data:[]
    },
    methods:{
        addData(){
            if (!this.newData){
                return;
            }
            this.data.push(this.newData);
            this.newData="";
        },
        removeData(i){
            this.data=this.data.filter(function(a){
                return a!=i
            })
        }
    }
})