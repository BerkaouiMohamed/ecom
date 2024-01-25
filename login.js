


const submit=document.getElementById('submit')


submit.addEventListener('click',function(e){
    e.preventDefault()

const email=document.getElementById('useremail').value

const password=document.getElementById('password').value


let user=(JSON.parse(localStorage.getItem('users'))).find((e)=>e.email==email)
if(user){
    if(password==user.password){
        localStorage.setItem('user',user.name)
        document.location.pathname="/index.html"
    }
}
})
