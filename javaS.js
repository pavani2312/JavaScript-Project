// For search Icon
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-icon').onclick = () => {
  searchForm.classList.toggle('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
  navigation.classList.remove('active');
  registerForm.classList.remove('active');
  passwordChange.classList.remove('active');
}
// For Shopping Cart Icon
let shoppingCart = document.querySelector('.shopping-cart');
let closeCart = document.querySelector('#close-cart');
let cartIcon = document.querySelector('#cart-icon');
//Open cart
cartIcon.onclick = () => {
  shoppingCart.classList.add('active');
  searchForm.classList.remove('active');
  loginForm.classList.remove('active');
  navigation.classList.remove('active');
  registerForm.classList.remove('active');
  passwordChange.classList.remove('active');
}
//Close cart
closeCart.onclick = () => {
  shoppingCart.classList.remove('active');
}
//Buy button
const buyButtonClicked = () => {
  console.log(document.getElementsByClassName('total-price')[0].innerHTML)
  if (document.getElementsByClassName('total-price')[0].innerHTML == "₹0"){     
      alert('please add items to the cart')      
  }
  else if(document.getElementsByClassName('total-price')[0].innerHTML != "₹0"){
      alert('your order is placed');
      let cartContent = document.getElementsByClassName('cart-content')[0];
      while(cartContent.hasChildNodes()){
          cartContent.removeChild(cartContent.firstChild);
      }
      updateTotal();
    }
}
document.getElementsByClassName('btn')[0].addEventListener('click', buyButtonClicked);

//Cart Adding
if(document.readyState == 'loading'){
  document.addEventListener("DOMContentLoaded", ready);
}else{
  ready();
}
//Making Function
function ready(){
  var removeCartButtons = document.getElementsByClassName('cart-remove');
  console.log(removeCartButtons);
  for(var i = 0; i < removeCartButtons.length; i++){
    var button = removeCartButtons[i];
    button.addEventListener('click', removeCartItem);
  }
  //Quatity adding
  var quantityInputs = document.getElementsByClassName('cart-quantity');
  for(var i = 0; i < quantityInputs.length; i++){
    var input = quantityInputs[i];
    input.addEventListener('change', quantityChanged);
  }
  //Add to Cart
  var addCart = document.getElementsByClassName('add-cart');
  for(var i = 0; i < addCart.length; i++){
    var button = addCart[i];
    button.addEventListener('click', addCartClicked);
  }
}
//Add to Cart
function addCartClicked(event){
  let button = event.target;
  let shopProducts = button.parentElement
  let title = shopProducts.getElementsByClassName('product-title')[0].innerText;
  let price = shopProducts.getElementsByClassName('price')[0].innerText;
  let productImg = shopProducts.getElementsByClassName('product-img')[0].src;
  addProductToCart(title,price, productImg);
  updateTotal();
}
//Remove Items from Cart
function removeCartItem(event){
  let buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updateTotal();
}
//Quantity Changed
function quantityChanged(event){
  let input = event.target;
  if(isNaN(input.value) || input.value <=0){
    input.value = 1;
  }
  updateTotal();
}
//Adding Product to Cart Function
function addProductToCart(title,price, productImg){
  let cartShopBox = document.createElement("div");
  cartShopBox.classList.add('cart-box');
  let cartItems = document.getElementsByClassName('cart-content')[0]
  let cartItemsName = cartItems.getElementsByClassName("cart-product-title");
  for(let i = 0; i < cartItemsName.length; i++){
    if(cartItemsName[i].innerText == title){
    alert("You have already added this item to cart");
    return;
  }
  
}
let cartBoxContent = `
<img src="${productImg}" alt="" class="cart-img">
<div class="detail-box">
    <div class = "cart-product-title" >${title}</div>
    <div class="cart-price">${price}</div>
    <input type="number" value = "1" class="cart-quantity" min ="1">
</div>
<i class="fa-solid fa-trash cart-remove"></i>`;
cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener('change', quantityChanged);
}
//Update Total
function updateTotal(){
  let cartContent = document.getElementsByClassName('cart-content')[0];
  const cartBoxes = cartContent.getElementsByClassName('cart-box')
  let total = 0;
  for(let i=0; i<cartBoxes.length; i++){
    let cartBox = cartBoxes[i];
    let priceElement = cartBox.getElementsByClassName('cart-price')[0];
    let quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
    let price = parseFloat(priceElement.innerText.replace("₹",""));
    let quantity = quantityElement.value;
    total = total + price * quantity;
    //If price have paise value 
    //total = Math.round(total * 100) /100;
    
  }
  document.getElementsByClassName("total-price")[0].innerText = "₹" + total;
}
//For Login Icon
let loginForm = document.querySelector('.login-form');

document.querySelector('#user-icon').onclick = () => {
  loginForm.classList.toggle('active');
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  navigation.classList.remove('active');
  registerForm.classList.remove('active');
  passwordChange.classList.remove('active');
}

//For Registration
let registerForm = document.querySelector('.register-form');

document.querySelector('#registration').onclick = () => {
  registerForm.classList.toggle('active');
  loginForm.classList.remove('active');
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  navigation.classList.remove('active');
  passwordChange.classList.remove('active');
}
//for register to login
document.querySelector('#registered').onclick = () => {
  loginForm.classList.toggle('active');
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  navigation.classList.remove('active');
  registerForm.classList.remove('active');
  passwordChange.classList.remove('active');
}
//For Password Change
let passwordChange = document.querySelector('.password-change');

document.querySelector('#pswrdChange').onclick = () => {
  passwordChange.classList.toggle('active');
  registerForm.classList.remove('active');
  loginForm.classList.remove('active');
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  navigation.classList.remove('active');
}
//For Navigation 
let navigation = document.querySelector('.navgiation');

document.querySelector('#menu-icon').onclick = () => {
  navigation.classList.toggle('active');
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
  registerForm.classList.remove('active');
  passwordChange.classList.remove('active');
}
//Window Scroll the icons will close
window.onscroll = () => {
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
  registerForm.classList.remove('active');
  passwordChange.classList.remove('active');
  navigation.classList.remove('active');
}



