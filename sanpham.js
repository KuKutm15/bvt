let cartCount = 0;

function addToCart() {
  cartCount++;
  document.querySelector('.cart-count').textContent = cartCount;
}
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function () {
    const name = this.getAttribute('data-name');
    const price = parseInt(this.getAttribute('data-price'));
    addToCart(name, price);
  });
});