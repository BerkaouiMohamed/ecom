var main= document.getElementsByTagName('main')[0]



for (i of products){
    let div =document.createElement('div')
    div.className="product"
    div.innerHTML+=`    

    <img src=${i.image} />
    <h3>${i.title}</h3>
    <p>${i.description.slice(0,100)}...</p>
    <button>add to cart</button>
`

main.appendChild(div)
}





