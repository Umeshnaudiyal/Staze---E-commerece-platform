import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, Zap, Award } from 'lucide-react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './dashboard.css';
import { useLocation, useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Dashboard= () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef(null);
  const sectionsRef = useRef([]);
  const navigate=useNavigate();

  const heroSlides = [
    {
      id: 1,
      title: "Holiday Deals Are Here",
      subtitle: "Save up to 50% on electronics, fashion, and more",
      image: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1600",
      cta: "Shop Now"
    },
    {
      id: 2,
      title: "Electronics Mega Sale",
      subtitle: "Latest gadgets at unbeatable prices",
      image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1600",
      cta: "Explore Deals"
    },
    {
      id: 3,
      title: "Fashion Forward",
      subtitle: "Trending styles for every season",
      image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1600",
      cta: "Shop Fashion"
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      title: "Wireless Bluetooth Headphones - Noise Cancelling",
      price: 79.99,
      originalPrice: 129.99,
      rating: 4.5,
      reviewCount: 2847,
      image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800",
      discount: 38,
      shipping: "FREE delivery tomorrow",
      prime: true
    },
    {
      id: 2,
      title: "Smart Watch with Fitness Tracker and Heart Rate Monitor",
      price: 199.99,
      originalPrice: 299.99,
      rating: 4.7,
      reviewCount: 1523,
      image: "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=800",
      discount: 33,
      shipping: "FREE delivery tomorrow",
      prime: true
    },
    {
      id: 3,
      title: "Portable Laptop Stand - Adjustable and Ergonomic",
      price: 29.99,
      originalPrice: 49.99,
      rating: 4.3,
      reviewCount: 856,
      image: "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
      discount: 40,
      shipping: "FREE delivery Wed, Jan 24",
      prime: false
    },
    {
      id: 4,
      title: "Professional Coffee Machine with Built-in Grinder",
      price: 299.99,
      originalPrice: 449.99,
      rating: 4.6,
      reviewCount: 634,
      image: "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=800",
      discount: 33,
      shipping: "FREE delivery tomorrow",
      prime: true
    },
    {
      id: 5,
      title: "Ultra HD 4K Webcam for Streaming and Video Calls",
      price: 149.99,
      originalPrice: 229.99,
      rating: 4.4,
      reviewCount: 1247,
      image: "https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=800",
      discount: 35,
      shipping: "FREE delivery tomorrow",
      prime: true
    },
    {
      id: 6,
      title: "Wireless Charging Pad - Fast Charge Compatible",
      price: 24.99,
      originalPrice: 39.99,
      rating: 4.2,
      reviewCount: 2134,
      image: "https://images.pexels.com/photos/4513976/pexels-photo-4513976.jpeg?auto=compress&cs=tinysrgb&w=800",
      discount: 38,
      shipping: "FREE delivery Wed, Jan 24",
      prime: false
    },
    {
      id: 7,
      title: "Bluetooth Speaker - Waterproof and Portable",
      price: 59.99,
      originalPrice: 89.99,
      rating: 4.5,
      reviewCount: 923,
      image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800",
      discount: 33,
      shipping: "FREE delivery tomorrow",
      prime: true
    },
    {
      id: 8,
      title: "Gaming Mechanical Keyboard - RGB Backlit",
      price: 89.99,
      originalPrice: 149.99,
      rating: 4.8,
      reviewCount: 567,
      image: "https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&w=800",
      discount: 40,
      shipping: "FREE delivery tomorrow",
      prime: true
    }
  ];

  const categories = [
    {
      id: 1,
      name: "Electronics",
      image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400",
      icon: <Zap size={24} />
    },
    {
      id: 2,
      name: "Fashion",
      image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400",
      icon: <TrendingUp size={24} />
    },
    {
      id: 3,
      name: "Home & Garden",
      image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=400",
      icon: <Award size={24} />
    },
    {
      id: 4,
      name: "Sports",
      image: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=400",
      icon: <TrendingUp size={24} />
    }
  ];

  useEffect(() => {
    // Hero section animation
    gsap.fromTo(heroRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
    );

    // Sections animation on scroll
    sectionsRef.current.forEach((section, index) => {
      if (section) {
        gsap.fromTo(section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    // Auto-play hero slider
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  
   
  //handling hero sliders.
  const handlecategory=(name)=>{
    navigate(`${name}`);
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="home" id='home'>
      {/* Hero Section */}
      <section className="hero" ref={heroRef}>
        <div className="hero-slider">
          {heroSlides.map((slide, index) => (
            <div  
              key={slide.id}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="hero-content">
                <div className="container">
                  <div className="hero-text">
                    <h1>{slide.title}</h1>
                    <p>{slide.subtitle}</p>
                    <button className="btn btn-primary hero-cta">
                      {slide.cta}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <button className="hero-nav hero-prev" onClick={prevSlide}>
            <ChevronLeft size={24} />
          </button>
          <button className="hero-nav hero-next" onClick={nextSlide}>
            <ChevronRight size={24} />
          </button>

          <div className="hero-indicators">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section" ref={addToRefs}>
        <div className="container">
          <h2>Shop by Category</h2>
          <div className="categories-grid">
            {categories.map((category) => (
              <div key={category.id} className="category-card" onClick={()=>{handlecategory(category.name)}}>
                <div className="category-image">
                  <img src={category.image} alt={category.name} />
                  <div className="category-overlay">
                    {category.icon}
                  </div>
                </div>
                <h3>{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-section" ref={addToRefs}>
        <div className="container">
          <h2>Featured Products</h2>
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Deals Section */}
      <section className="deals-section" id='deals' ref={addToRefs}>
        <div className="container">
          <div className="deals-header">
            <h2>Today's Deals</h2>
            <p>Limited time offers - don't miss out!</p>
          </div>
          <div className="deals-grid">
            {featuredProducts.slice(0, 4).map((product) => (
              <ProductCard key={`deal-${product.id}`} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;