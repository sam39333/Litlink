

function EmptyCart({ openCart }) {
  return (
    <div className="empty-cart">
      <img
        src={"https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG38.png"}
        alt="empty-cart"
      />
      <p>Your cart is empty</p>
      <button onClick={openCart}>Keep Browsing</button>
    </div>
  );
}

export default EmptyCart;
