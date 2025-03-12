
const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const cartClose = document.querySelector("#cart-close");
cartIcon.addEventListener("click",()=>cart.classList.add("active"));
cartClose.addEventListener("click",()=>cart.classList.remove("active"));

const addcartButtons = document.querySelectorAll(".add-cart");
addcartButtons.forEach(button => {
    button.addEventListener("click",event =>{
        const productBox = event.target.closes(".product-box");
        addToCart(productBox);
    });
});
const cartContent = document.querySelector(".cart-content")
const addToCart = productBox =>{
    const productImgSrc = productBox.querySelector("img").src;
    const productTitle = productBox.querySelector(".product-title").textContent;
    const productPrice = productBox.querySelector(".price").textContent;
    
    const cartItems= cartContent.querySelectorAll(".cart-product-title");
    for(let items of cartItems){
        if(items.textContent === productTitle){
            alert("this item is already added to the cart.");
            return;
        }
    }
    const cartBox = document.createElement("div");
    cartBox.classList.add("cart-Box");
    cartBox.innerHTML = `
        <img src=" ${productImgSrc} " alt="" class="cart-img">
                <div class="cart-details">
                    <h3 class="cart-product-title">${productTitle}</h3>
                    <span class="cart-price">${productPrice}</span>
                    <div class="cart-quantity">
                        <button class="cart-quantity-btn">-</button>
                        <span class="cart-quantity-count">1</span>
                        <button class="cart-quantity-btn">+</button>
                    </div>
                </div>
                <i class="bi bi-trash3 cart-remove"></i> `;
    cartContent.appendChild(cartBox);
    cartBox.querySelector(".cart-remove").addEventListener("click",()=>{cartBox.remove();});
    cartBox.querySelector(".cartquantity-btn").addEventListener("click",event =>{
        const numberElement= cartBox.querySelector(".number"); 
        const number = cartBox.querySelector("#decrement");
        let quantity = numberElement.textContent;
        if(event.target.id === "decrement" && quantity > 1){
            quantity--;
            if(quantity === 1){
                document.button.style.color = "#999";
            }
        }else if(event.target.id === "increment"){ 
                    quantity ++;
                    decrementButton.style.color = "#333";
                  }
        numberElement.textContent = quantity;
    });
};
