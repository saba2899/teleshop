let productsContainer = document.querySelector('.products-container');
let modalWindowHtml = document.querySelector('.modalWindow');
let test = document.querySelector('.test');
const closeBtn = document.getElementById('closeBtn');
let modalWindow;



export function fetchData() {
    fetch('https://warrior.ge/api/products')
        .then(res => res.json())
        .then(data => {
            data.forEach(products => {
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');

                let discountPrice = ``;
                let originalPrice = ``;
                if (products.discount_price !== null) {
                    originalPrice = `<p class ="original-price">${products.price} ₾ </p>`
                    discountPrice = `<span class="discount-price">${products.discount_price} ₾</span>`
                } else {
                    discountPrice = `<p class="darkPriceColor">${products.price} ₾</p>`;
                }

                productCard.innerHTML = `
            <h3 class="product-name">${products.name}</h3>
            <img src="${products.photo}" class="product-image">
            <p>${originalPrice}</p> <span>${discountPrice}</span>
            `;

                productsContainer.appendChild(productCard)

                productCard.addEventListener('click', () => {
                    modalWindow = document.createElement('div');
                    modalWindow.classList.add('modal-window');

                    test.style.display = "block";

                    modalWindow.innerHTML = `
                <h3 class="modalName">${products.name}</h3>
                <img src="${products.photo}" class="modalPhoto">
                 <button class="detailBtn">დეტალები</button>
                 <div class="additionalInfo" style="display: none;">
                    <p><span class="mainText">ფასი:</span> ${products.price} ₾</p>
                    <p><span class="mainText">ფასდაკლება:</span>${products.discount_price ? products.discount_price + ' ₾' : 'ფასდაკლება არ არის'}</p>
                    <p><span class="mainText">აღწერა:</span> ${products.description}</p>
                    <p><span class="mainText">კატეგორია:</span> ${products.category}</p>
                    <p><span class="mainText">ბრენდი:</span> ${products.brand}</p>
                    <p><span class="mainText">ფერი:</span> ${products.color}</p>
                    <p><span class="mainText">ხელმისაწვდომობა:</span> ${products.availability}</p>
                </div>
                `;



                    const detailBtn = modalWindow.querySelector('.detailBtn');
                    const additionalInfo = modalWindow.querySelector('.additionalInfo');

                    detailBtn.addEventListener('click', () => {
                        detailBtn.style.display = "none";
                        additionalInfo.style.display = "block";
                    })
                    modalWindowHtml.appendChild(modalWindow);
                });
            })
        });
    }

    export function closeAction() {
        closeBtn.addEventListener('click', () => {
            test.style.display = 'none';
            modalWindowHtml.removeChild(modalWindow);
        })
    }

