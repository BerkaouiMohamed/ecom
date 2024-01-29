var main= document.getElementsByTagName('main')[0]



for (i of products){
    let div =document.createElement('div')
    let button =document.createElement('button')
    button.innerHTML="add to cart"
    div.className="product"
    div.innerHTML+=`    

    <img src=${i.image} />
    <h3>${i.title}</h3>
    <p>${i.description.slice(0,100)}...</p>
    
`

button.setAttribute('id',i.id)
{localStorage.getItem('user')?button.addEventListener('click',function(){
console.log(button.getAttribute('id'));
    let cart=JSON.parse(localStorage.getItem('cart'))
    if (cart) {

        for (let i = 0; i < cart.length; i++) {

            if (cart[i].user == localStorage.getItem('user')) {
                var userindex = cart[i]
                var index = i

            }
            else {
                userindex = { user: localStorage.getItem('user'), mypprods: [] }
                index = cart.length
            }
        }
        {
            userindex.mypprods.find((e) => e == button.getAttribute('id')) ? null :
                userindex = {
                    user: localStorage.getItem('user'),
                    mypprods: [...userindex.mypprods, button.getAttribute('id')]

                }

            cart[index] = userindex
        }
    }
    else {
        cart = [{
            user: localStorage.getItem('user'),
            mypprods: [button.getAttribute('id')]
        }]
    }
    localStorage.setItem('cart', JSON.stringify(cart))
}) : null}
div.appendChild(button)
main.appendChild(div)
}





