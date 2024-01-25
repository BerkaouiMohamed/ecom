var sec= document.getElementsByTagName('section')[0]

var homeprod=products.slice(0,5)
console.log(homeprod);


for (i of homeprod){
    sec.innerHTML+=`    <div class="product">

    <img src=${i.image} />
    <h3>${i.title}</h3>
    <p>${i.description.slice(0,100)}...</p>
    <button>add to cart</button>


</div>`
}


// function addtocard