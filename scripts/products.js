let productsContainer = document.querySelector('.products-container');


fetch('https://warrior.ge/api/products')
.then(res => res.json())
.then(data => {
    data.forEach(products => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        let discountPrice = ``;
        let originalPrice = ``;
        if(products.discount_price !== null){
            originalPrice = `<p class = "original-price">${products.price} ₾ </p>`
            discountPrice = `<span class="discount-price">${products.discount_price} ₾</span>`
        } else {
            discountPrice = `<p>${products.price} ₾</p>`;
        }

        productCard.innerHTML = `
        <h3 class="product-name">${products.name}</h3>
        <img src="${products.photo}" class="product-image">
        <p>${originalPrice}</p> <span>${discountPrice}</span>
        `;

         productsContainer.appendChild(productCard)

         productCard.addEventListener('click', () => {
            const modalWindow = document.createElement('div');
            modalWindow.classList.add('modal-window');
            
         })
    });
}
)
