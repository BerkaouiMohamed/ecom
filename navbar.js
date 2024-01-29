let active=document.getElementsByClassName('active')
let inactive=document.getElementsByClassName('inactive')
if (localStorage.getItem('user')){
for (i of inactive){
    i.style.display='block'
}
for (i of active){
    i.style.display='none'
}
inactive[0].innerHTML=localStorage.getItem('user')
inactive[1].addEventListener('click',function(){
    localStorage.removeItem('user')
    location.pathname="login.html"
})
}
else{
    for (i of inactive){
        i.style.display='none'
    }
    for (i of active){
        i.style.display='block'
    }
}