div=document.getElementById('root')

let mycart=localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):null
if(mycart)
{ 
mycart= mycart.find((e)=>e.user==localStorage.getItem('user')?e:null)

mylistproducts= mycart.mypprods
mynewarray=products.filter((e)=>mylistproducts.find((i)=>i==e.id))

mynewarray.map((e)=>
{
    div.innerHTML+=`
    <div class ="product">

    <img src=${e.image} />
    <h3>${e.title}</h3>
    <p>${e.description.slice(0,100)}...</p>
    
    
</div>
    `
}
)
}




