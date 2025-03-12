// Cart functionality
let cart = [];

// Add to Cart function
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const product = this.closest('.product');
        const productId = product.getAttribute('data-id');
        const productName = product.querySelector('h3').textContent;
        const productPrice = product.querySelector('p').textContent;
        
        const productObj = {
            id: productId,
            name: productName,
            price: productPrice
        };

        cart.push(productObj);
        updateCartCount();
    });
});

// Update Cart Count
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

// Show Cart Modal
document.getElementById('cart').addEventListener('click', (e) => {
    if (e.target.id === 'cart') {
        closeCart();
    }
});

document.getElementById('close-cart').addEventListener('click', closeCart);

function closeCart() {
    document.getElementById('cart').style.display = 'none';
}

// Show Cart Items
document.querySelector('a[href="#cart"]').addEventListener('click', function() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.textContent = `${item.name} - ${item.price}`;
        cartItemsDiv.appendChild(cartItem);
    });

    document.getElementById('cart').style.display = 'flex';
});
