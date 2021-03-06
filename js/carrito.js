const addToShoppingCartButtons = document.querySelectorAll('.cart-button')
addToShoppingCartButtons.forEach(addToCartButton => {
  addToCartButton.addEventListener('click', addToCartClicked);
});

const comprarButton = document.querySelector('.comprar-boton');
comprarButton.addEventListener('click', comprarButtonClicked)


const shoppingCartsItemsContainer = document.querySelector(
  '.shoppingCartItemsContainer'
  );


function addToCartClicked(event) {
  const button = event.target;
  const product = button.closest('.product')
  
  const productTitle = product.querySelector('.product-title').textContent;
  const productPrice = product.querySelector('.product-price').textContent;
  const productImage = product.querySelector('.product-img').src;
  
addProductToShoppingCart(productTitle, productPrice, productImage);
}

function addProductToShoppingCart(productTitle, productPrice, productImage) {

  const elementsTitle = shoppingCartsItemsContainer.getElementsByClassName('shoppingCartItemTitle');

  for (let i = 0; i < elementsTitle.length; i++) {
    if (elementsTitle[i].innerText === productTitle) {
      let elementQuantity = elementsTitle[
        i
      ].parentElement.parentElement.parentElement.querySelector(
        '.shoppingCartItemQuantity'
      );
      elementQuantity.value++;
      $('.toast').toast('show');
      updateShoppingCartTotal();
      return;
    }
  }

  const shoppingCartRow = document.createElement('div');
  const shoppingCartContent = `
  <div class="row shoppingCartItem">
  <div class="col-6">
      <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
          <img src=${productImage} class="shopping-cart-image">
          <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${productTitle}</h6>
      </div>
  </div>
  <div class="col-2">
      <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
          <p class="item-price mb-0 shoppingCartItemPrice">${productPrice}</p>
      </div>
  </div>
  <div class="col-4">
      <div
          class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
          <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
              value="1">
          <button class="btn btn-danger buttonDelete" type="button">X</button>
      </div>
  </div>
</div>`;
shoppingCartRow.innerHTML = shoppingCartContent
shoppingCartsItemsContainer.append(shoppingCartRow)

    shoppingCartRow.querySelector('.buttonDelete').addEventListener('click', removeShoppingCartItem)

  shoppingCartRow.querySelector('.shoppingCartItemQuantity').addEventListener('change', quantityChanged);

updateShoppingCartTotal()
}



function updateShoppingCartTotal() {
  let total = 0;
  const shoppingCartTotal = document.querySelector('.shoppingCartTotal');
  const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');
  
  shoppingCartItems.forEach(shoppingCartItem => {
    const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
      '.shoppingCartItemPrice'
      );
      const shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace('U$S', '')
      );
      const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
        '.shoppingCartItemQuantity'
        );
      const shoppingCartItemQuantity = Number(
        shoppingCartItemQuantityElement.value
        );
        total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
  });
  shoppingCartTotal.innerHTML = `${total.toFixed(2)}U$S`;
}


function removeShoppingCartItem(event) {
    const buttonClicked = event.target;
    buttonClicked.closest('.shoppingCartItem').remove();
    updateShoppingCartTotal();
}
function quantityChanged(event) {
    const input = event.target;
    if(input.value <= 0) {
      input.value = 1;
    }
    updateShoppingCartTotal();
}

function comprarButtonClicked() {
  shoppingCartsItemsContainer.innerHTML = '';
  updateShoppingCartTotal();
}