import { XMarkIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import './Cart.css'

function Cart({ cartItems, onClose, onRemoveItem, onUpdateQuantity }) {
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  const shipping = subtotal > 35 ? 0 : 9.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  return (
    <div className="cart-overlay slide-in">
      <div className="cart-panel">
        {/* Cart Header */}
        <div className="cart-header">
          <h2>Shopping Cart ({cartItems.length})</h2>
          <button className="close-button" onClick={onClose}>
            <XMarkIcon className="close-icon" />
          </button>
        </div>

        {/* Cart Content */}
        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <h3>Your cart is empty</h3>
              <p>Add some items to get started!</p>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="cart-items">
                {cartItems.map(item => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.title} className="item-image" />
                    
                    <div className="item-details">
                      <h4 className="item-title">{item.title}</h4>
                      {item.prime && <span className="prime-indicator">Prime</span>}
                      <p className="item-price">${item.price}</p>
                      
                      <div className="quantity-controls">
                        <button
                          className="quantity-btn"
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        >
                          <MinusIcon className="quantity-icon" />
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button
                          className="quantity-btn"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        >
                          <PlusIcon className="quantity-icon" />
                        </button>
                      </div>
                    </div>

                    <div className="item-actions">
                      <p className="item-total">${(item.price * item.quantity).toFixed(2)}</p>
                      <button
                        className="remove-button"
                        onClick={() => onRemoveItem(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Summary */}
              <div className="cart-summary">
                <div className="summary-line">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="summary-line">
                  <span>Shipping:</span>
                  <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="summary-line">
                  <span>Tax:</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="summary-line total">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                
                {subtotal < 35 && (
                  <p className="shipping-notice">
                    Add ${(35 - subtotal).toFixed(2)} more for FREE shipping
                  </p>
                )}
              </div>

              {/* Checkout Button */}
              <button className="checkout-button btn btn-primary">
                Proceed to Checkout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cart