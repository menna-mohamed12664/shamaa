// localStorage.setItem("username" , "shimaa")
// localStorage.setItem("password" , "454555")

// console.log(localStorage.getItem("username") ,localStorage.getItem("password"));
// localStorage.removeItem("username")
// localStorage.clear()

let links= document.getElementById("links")
let userData= document.getElementById("user_info")
let user= document.getElementById("user")


if(localStorage.getItem("username")){
    links.remove()
    userData.style.display="flex"
    user.innerHTML=localStorage.getItem("username")
    user.style.textTransform= "uppercase";
}
// ////////////////////////////////////////
let allProducts = document.querySelector(".products")
let products = [
    {
        id:1,
        title:"Chair Modern",
        price:600,
        imagesUrl:"images/download (1).png"
    },

    {
        id:2,
        title:"Chair Modern",
        price:200,
        imagesUrl:"images/download (2).png"
    },

    {
        id:3,
        title:"Chair Modern",
        price:600,
        imagesUrl:"images/download (1).png"
    },

    {
        id:4,
        title:"Chair Modern",
        price:600,
        imagesUrl:"images/download (1).png"
    },

    {
        id:5,
        title:"Chair Modern",
        price:600,
        imagesUrl:"images/download (1).png"
    },
    {
        id:6,
        title:"Chair Modern",
        price:600,
        imagesUrl:"images/download (1).png"
    },
     {
        id:7,
        title:"Chair Modern",
        price:600,
        imagesUrl:"images/download (1).png"
    },
     {
        id:8,
        title:"Chair Modern",
        price:600,
        imagesUrl:"images/download (1).png"
    }
]

function drowProduct(){
    let y =products.map((item) =>{
        return`
            <div class="product-item">
                    <img src="${item.imagesUrl}" alt="">
                    <div class="product-desc">
                        <h2>${item.title}</h2>
                        <p>This Chair Made In EGY</p>
                         <p>${item.price}</p>
                          <div class="colors">
                          <span style="background-color: rgb(1, 73, 1);"></span>
                          <span style="background-color: black;"></span>
                          <span style="background-color: rgb(250, 221, 185);"></span>
                        </div>
                    </div> 
                    <div class="product-action">

                        <button class="add_to_cart"onclick ="addToCart(${item.id})">ADD To Cart</button>
                        <i class="fa-solid fa-heart"></i>
                     </div> 
                </div> 
        `
    })
    allProducts.innerHTML=y.join("");
}
drowProduct()
// //////////////////////////////////////////////////////
 
let viewProductsDiv=document.querySelector(".viewProduct div")
let badge = document.querySelector(".badge");
let addItem= localStorage.getItem('productInCart')? JSON.parse(localStorage.getItem('productInCart')):[];
if(addItem){
    addItem.map(item=>{
          viewProductsDiv.innerHTML += `<p>${item.title}</p>`

    })
    badge.style.display="block"
    badge.innerHTML=addItem.length
}
function addToCart(id){
    let chooseItem=products.find((item)=>item.id === id)
    viewProductsDiv.innerHTML += `<p>${chooseItem.title}</p>`

    addItem=[...addItem, chooseItem]
    localStorage.setItem("productInCart" , JSON.stringify(addItem))


    let viewProductsDivP=document.querySelectorAll(".viewProduct div p")
    badge.innerHTML=viewProductsDivP.length
     badge.style.display="block"

     viewProduct.style.display="block"


}

let cart=document.querySelector(".cart")
let viewProduct=document.querySelector(".viewProduct")
cart.addEventListener('click',()=>{
    if(viewProduct.innerHTML !=""){
        if(viewProduct.style.display=="block"){
            viewProduct.style.display="none"

        }else{
            viewProduct.style.display="block"
        }
    }
})

 
 
 