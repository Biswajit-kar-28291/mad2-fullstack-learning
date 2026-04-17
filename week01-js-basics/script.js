function show(){
let Name=document.getElementById("name").value
let mail=document.getElementById("mail").value
console.log(Name)
let msg=document.getElementById("msg")

if (Name=== "" || mail===""){
msg.innerText="give coreect output please !!"
document.getElementById("name").value = "";
mail=""
}else{
    
    msg.innerText="your name is : "+ Name +"And your mail is :" + mail
}

}
