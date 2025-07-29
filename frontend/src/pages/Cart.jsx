import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, Truck, Shield, CreditCard } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { gsap } from 'gsap';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, getTotalPrice, getTotalItems } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const pageRef = useRef(null);
  const cartItemsRef = useRef([]);

  useEffect(() => {
    // GSAP animation on mount
    gsap.fromTo(pageRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );

    // Animate cart items
    cartItemsRef.current.forEach((item, index) => {
      if (item) {
        gsap.fromTo(item,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.6, delay: index * 0.1, ease: "power2.out" }
        );
      }
    });
  }, [cart.length]);

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) {
      handleRemoveItem(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleRemoveItem = (productId) => {
    const itemElement = cartItemsRef.current.find(el => 
      el && el.dataset.productId === productId.toString()
    );
    
    if (itemElement) {
      gsap.to(itemElement, {
        opacity: 0,
        x: -100,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => removeFromCart(productId)
      });
    } else {
      removeFromCart(productId);
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    
    // Simulate checkout process
    setTimeout(() => {
      alert('Thank you for your order! This is a demo checkout.');
      clearCart();
      setIsCheckingOut(false);
    }, 2000);
  };

  const addToCartItemsRef = (el) => {
    if (el && !cartItemsRef.current.includes(el)) {
      cartItemsRef.current.push(el);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="cart-page" ref={pageRef}>
        <div className="container">
          <div className="empty-cart">
            <ShoppingBag size={64} />
            <h2>Your cart is empty</h2>
            <p>Add some products to get started!</p>
            <Link to="/" className="btn btn-primary">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page" ref={pageRef}>
      <div className="container">
        <div className="cart-header">
          <Link to="/" className="back-link">
            <ArrowLeft size={20} />
            Continue Shopping
          </Link>
          <h1>Shopping Cart ({getTotalItems()} items)</h1>
        </div>

        <div className="cart-content">
          <div className="cart-items">
            {cart.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="cart-item"
                data-product-id={item.id}
                ref={addToCartItemsRef}
              >
                <div className="item-image">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="item-details">
                  <Link to={`/product/${item.id}`} className="item-title">
                    {item.title}
                  </Link>
                  
                  <div className="item-price">
                    <span className="current-price">${item.price}</span>
                    {item.originalPrice && (
                      <span className="original-price">${item.originalPrice}</span>
                    )}
                  </div>

                  <div className="item-info">
                    <span className="in-stock">✓ In Stock</span>
                    {item.prime && (
                      <span className="prime-badge">Prime</span>
                    )}
                  </div>

                  <div className="item-actions">
                    <div className="quantity-controls">
                      <button
                        className="quantity-btn"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      >
                        <Minus size={16} />
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button
                        className="quantity-btn"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <button
                      className="remove-btn"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <Trash2 size={16} />
                      Remove
                    </button>
                  </div>
                </div>

                <div className="item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-card">
              <h3>Order Summary</h3>
              
              <div className="summary-line">
                <span>Items ({getTotalItems()}):</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
              
              <div className="summary-line">
                <span>Shipping & handling:</span>
                <span>FREE</span>
              </div>
              
              <div className="summary-line">
                <span>Tax:</span>
                <span>${(getTotalPrice() * 0.08).toFixed(2)}</span>
              </div>
              
              <div className="summary-total">
                <span>Order Total:</span>
                <span>${(getTotalPrice() * 1.08).toFixed(2)}</span>
              </div>

              <button
                className="btn btn-primary checkout-btn"
                onClick={handleCheckout}
                disabled={isCheckingOut}
              >
                {isCheckingOut ? (
                  <>
                    <div className="loading"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <CreditCard size={20} />
                    Proceed to Checkout
                  </>
                )}
              </button>

              <div className="benefits">
                <div className="benefit-item">
                  <Truck size={18} />
                  <span>FREE shipping on orders over $25</span>
                </div>
                <div className="benefit-item">
                  <Shield size={18} />
                  <span>30-day return policy</span>
                </div>
              </div>
            </div>

            <div className="recommendations">
              <h4>Customers also bought</h4>
              <div className="recommended-items">
                <div className="recommended-item">
                  <img src="https://images.pexels.com/photos/4513976/pexels-photo-4513976.jpeg?auto=compress&cs=tinysrgb&w=200" alt="Recommended" />
                  <div>
                    <p>Wireless Charger</p>
                    <span>$24.99</span>
                  </div>
                </div>
                <div className="recommended-item">
                  <img src="https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=200" alt="Recommended" />
                  <div>
                    <p>Smart Watch</p>
                    <span>$199.99</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;