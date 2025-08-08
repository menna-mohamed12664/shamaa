let allProducts = document.querySelector(".products")
let getCart=localStorage.getItem("productInCart")
if(getCart){
    let item=JSON.parse(getCart)
    drowProduct(item)

}

function drowProduct(products){ 
      let y =products.map((item) =>{
        return`
            <div class="product-item">
                    <img src="${item.imagesUrl}" alt="">
                    <div class="product-desc">
                        <h2>${item.title}</h2>
                        <p>this mobile made in chins</p>
                         <p>${item.price}</p>
                          <div class="colors">
                          <span style="background-color: rgb(1, 73, 1);"></span>
                          <span style="background-color: black;"></span>
                          <span style="background-color: rgb(250, 221, 185);"></span>
                        </div>
                    </div> 
                    <div class="product-action">
                        <button class="add_to_cart"onclick ="remove(${item.id})">Remove From Cart</button>
                     </div> 
                </div> 
        `
    })
    allProducts.innerHTML=y.join("");
}
 
 
 



 