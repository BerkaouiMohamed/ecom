if(localStorage.getItem("users")){
    var users=JSON.parse(localStorage.getItem("users"))
}
else{
     var users=[]
}



const submit=document.getElementById('submit')


submit.addEventListener('click',function(e){
    e.preventDefault()
    let user={}
const username=document.getElementById('username').value
const email=document.getElementById('useremail').value
const password=document.getElementById('password').value
let test =true
for(i of users){
    if(email==i.email){
        test=false
        break
    }
}
if(test){user.name=username
user.email=email
user.password=password
users=[...users,user]
localStorage.setItem('users',JSON.stringify(users))

setTimeout(()=>{

    document.location.pathname='/login.html'
},500)
}
else{
    alert('email already used ')
}
})



