import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { gsap } from 'gsap';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { addToCart } = useCart();
  const cardRef = useRef(null);
  const imageRef = useRef(null);
console.log(product)
  useEffect(() => {
    // GSAP animation on mount
    gsap.fromTo(cardRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );
  }, []);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    
    // GSAP animation for add to cart
    gsap.fromTo(cardRef.current,
      { scale: 1 },
      { scale: 1.05, duration: 0.1, yoyo: true, repeat: 1, ease: "power2.inOut" }
    );
  };

  const handleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    
    // GSAP animation for favorite
    const heartIcon = e.target.closest('.favorite-btn');
    gsap.fromTo(heartIcon,
      { scale: 1 },
      { scale: 1.3, duration: 0.2, yoyo: true, repeat: 1, ease: "back.out(1.7)" }
    );
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} size={14} fill="#FFA41C" color="#FFA41C" />);
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" size={14} fill="#FFA41C" color="#FFA41C" style={{ clipPath: 'inset(0 50% 0 0)' }} />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} size={14} color="#DDD" />);
    }

    return stars;
  };
  
  return (
    <div className="product-card" ref={cardRef}>
      
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="product-image-container">
          <img
            ref={imageRef}
            src={product.image}
            alt={product.title}
            className="product-image"
            loading="lazy"
          />
          <button
            className={`favorite-btn ${isFavorite ? 'favorite' : ''}`}
            onClick={handleFavorite}
          >
            <Heart size={18} fill={isFavorite ? '#ff4757' : 'none'} />
          </button>
          {product.discount && (
            <div className="discount-badge">
              -{product.discount}%
            </div>
          )}
        </div>

        <div className="product-info">
          <h3 className="product-title">{product.title}</h3>
          
          <div className="product-rating">
            <div className="stars">
              {renderStars(product.rating)}
            </div>
            <span className="rating-count">({product.reviewCount})</span>
          </div>

          <div className="product-pricing">
            <span className="current-price">${product.price}</span>
            {product.originalPrice && (
              <span className="original-price">${product.originalPrice}</span>
            )}
          </div>

          {product.shipping && (
            <div className="shipping-info">
              <span className="shipping-text">{product.shipping}</span>
            </div>
          )}

          {product.prime && (
            <div className="prime-badge">
              <span>Prime</span>
            </div>
          )}
        </div>
      </Link>

      <div className="product-actions">
        <button className="btn btn-cart add-to-cart-btn" onClick={handleAddToCart}>
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </div>
  ); 
};

export default ProductCard;