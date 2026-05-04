// -------------------------------------------static Route------------------------------

// const home={
//     template:`<h1>this is home page </h1>`
// }

// const about={
//     template:`<h1>this is about page </h1>`
// }
// const routes=[
//     {path:"/", component:home},
//     {path:'/about', component:about}
// ]

// const router=new VueRouter({

//     mode:'hash',
//     routes
// });

// new Vue(
//     {
//         el:"#app",
//         router,
//         template:`
//         <div>
//         <router-link to='/'>home</router-link> | 
//         <router-link to="/about">about</router-link>

//         <router-view></router-view>
//         </div>
//         `
//     }
// )



// --------------------------------------------------dynamic route-------------------------------------------------------------

const home={
    template:
    `
    <div>
    <h1>This is User Page</h1>
    <router-link to="/user/1">User1</router-link> |
        <router-link to="/user/2">User2</router-link> |
            <router-link to="/user/3">User3</router-link>

    <router-view></router-view>


    </div>
    `
}
const user={
    template:
    `
    <div>
    <h1>User details page</h1>
    <p>use id: {{$route.params.id}}</p>
    <button @click=go>go home</button>



    </div>
    `,
    methods:{
    go(){
        this.$router.push("/")
    }
    }
}
const about={
    template:
    `
    <div>
    <h1>This is about  Page</h1>

    </div>
    `
}

const routes=[
    {path:"/",component:home},
    {path:"/about",component:about},
    {path:"/user/:id", component:user}
]

const router=new VueRouter({
    mode: "hash",
    routes
})

new Vue({
    el: "#app",
    router,
    template: `
        <div>
            <h1>Vue 2 Dynamic Routing</h1>

            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>

            <hr>

            <router-view></router-view>
        </div>
    `
});