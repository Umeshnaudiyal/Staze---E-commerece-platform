import { useState, useEffect, useRef, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Truck, Shield, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { gsap } from 'gsap';
import './ProductDetail.css';
import { context } from '../contexts/productdata';


const ProductDetail = () => {
  const {id} = useParams();
  console.log(id);
  const { addToCart } = useCart();
  const [product, setproduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const pageRef = useRef(null);
  const imageRef = useRef(null);
  const data=useContext(context);


      useEffect(() => {
        const featuredProduct = [
  // Elements 1-5 (already provided with enhancements)
  {
    id: 1,
    title: "Wireless Bluetooth Headphones - Noise Cancelling",
    price: 79.99,
    originalPrice: 129.99,
    rating: 4.5,
    reviewCount: 2847,
    image:["https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800", 
      "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800",
       "https://images.pexels.com/photos/4107656/pexels-photo-4107656.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg?auto=compress&cs=tinysrgb&w=800"],
    discount: 38,
    shipping: "FREE delivery tomorrow",
    category: "electronics",
    prime: true,
    stockCount: 142,
    description: "Premium wireless headphones with active noise cancellation for immersive audio experiences. Perfect for travel, work, or leisure.",
    features: [
      "Active Noise Cancellation",
      "40-hour Battery Life",
      "Bluetooth 5.0",
      "Built-in Microphone",
      "Foldable Design"
    ],
    specifications: {
      brand: "SoundMaster",
      color: "Matte Black",
      connectivity: "Bluetooth 5.0",
      batteryLife: "40 hours",
      weight: "250g",
      driverSize: "40mm",
      noiseReduction: "Active"
    }
  },
  {
    id: 2,
    title: "Smart Watch with Fitness Tracker and Heart Rate Monitor",
    price: 199.99,
    originalPrice: 299.99,
    rating: 4.7,
    reviewCount: 1523,
    category: "electronics",
    image:[ "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=800",   "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800",
       "https://images.pexels.com/photos/4107656/pexels-photo-4107656.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg?auto=compress&cs=tinysrgb&w=800"],
    discount: 33,
    shipping: "FREE delivery tomorrow",
    prime: true,
    stockCount: 89,
    description: "Advanced smartwatch with comprehensive fitness tracking, heart rate monitoring, and smartphone notifications. Your health companion.",
    features: [
      "24/7 Heart Rate Monitoring",
      "GPS Tracking",
      "Water Resistant (50m)",
      "7-day Battery Life",
      "Sleep Analysis"
    ],
    specifications: {
      brand: "FitTech",
      color: "Silver",
      display: "AMOLED 1.4\"",
      batteryLife: "7 days",
      waterResistance: "50m",
      sensors: ["Heart Rate", "Accelerometer", "Gyroscope"],
      connectivity: "Bluetooth 5.0"
    }
  },
  {
    id: 3,
    title: "Portable Laptop Stand - Adjustable and Ergonomic",
    category: "electronics",
    price: 29.99,
    originalPrice: 49.99,
    rating: 4.3,
    reviewCount: 856,
    image: ["https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
       "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800",
       "https://images.pexels.com/photos/4107656/pexels-photo-4107656.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg?auto=compress&cs=tinysrgb&w=800"],
    discount: 40,
    shipping: "FREE delivery Wed, Jan 24",
    prime: false,
    stockCount: 210,
    description: "Ergonomic laptop stand with adjustable height and angle for improved posture and comfort during long work sessions.",
    features: [
      "6 Adjustable Height Levels",
      "Foldable Design",
      "Ventilated Platform",
      "Non-slip Base",
      "Lightweight Aluminum"
    ],
    specifications: {
      brand: "ErgoLift",
      material: "Anodized Aluminum",
      maxWeight: "10kg",
      dimensions: "Folded: 28x15x2cm",
      adjustability: "6 levels",
      color: "Space Gray"
    }
  },
  {
    id: 4,
    title: "Professional Coffee Machine with Built-in Grinder",
    price: 299.99,
    originalPrice: 449.99,
    rating: 4.6,
    reviewCount: 634,
    category: "Home",
    image: ["https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=800",
       "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800",
       "https://images.pexels.com/photos/4107656/pexels-photo-4107656.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg?auto=compress&cs=tinysrgb&w=800"],
    discount: 33,
    shipping: "FREE delivery tomorrow",
    prime: true,
    stockCount: 45,
    description: "Barista-quality coffee maker with integrated grinder for fresh beans. Programmable settings for perfect brew every time.",
    features: [
      "Built-in Conical Grinder",
      "15-bar Pressure Pump",
      "Programmable Settings",
      "Thermoblock Heating",
      "Removable Water Tank"
    ],
    specifications: {
      brand: "CaféPro",
      type: "Semi-Automatic",
      waterTank: "2L",
      pressure: "15 bar",
      power: "1450W",
      color: "Stainless Steel",
      grindSettings: "18 levels"
    }
  },
  {
    id: 5,
    title: "Ultra HD 4K Webcam for Streaming and Video Calls",
    price: 149.99,
    originalPrice: 229.99,
    rating: 4.4,
    reviewCount: 1247,
    category: "electronics",
    image: ["https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=800", "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800",
       "https://images.pexels.com/photos/4107656/pexels-photo-4107656.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg?auto=compress&cs=tinysrgb&w=800"],
    discount: 35,
    shipping: "FREE delivery tomorrow",
    prime: true,
    stockCount: 76,
    description: "Professional-grade 4K webcam with autofocus and noise-cancelling mic for crystal-clear video calls and streaming.",
    features: [
      "4K Ultra HD Resolution",
      "Auto Light Correction",
      "Noise-Cancelling Microphone",
      "Wide-angle Lens",
      "Plug-and-Play"
    ],
    specifications: {
      brand: "StreamView",
      resolution: "4K (3840x2160)",
      frameRate: "30fps",
      connectivity: "USB-C",
      autofocus: "Yes",
      mic: "Noise-Cancelling",
      fieldOfView: "90°"
    }
  },
  // Elements 6-38 (newly added enhancements)
  {
    id: 6,
    title: "Wireless Charging Pad - Fast Charge Compatible",
    price: 24.99,
    originalPrice: 39.99,
    rating: 4.2,
    reviewCount: 2134,
    category: "electronics",
    image: ["https://images.pexels.com/photos/4513976/pexels-photo-4513976.jpeg?auto=compress&cs=tinysrgb&w=800", 
      "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800",
       "https://images.pexels.com/photos/4107656/pexels-photo-4107656.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg?auto=compress&cs=tinysrgb&w=800"],
    discount: 38,
    shipping: "FREE delivery Wed, Jan 24",
    prime: false,
    stockCount: 320,
    description: "Fast wireless charging pad compatible with all Qi-enabled devices. Sleek, compact design with intelligent temperature control.",
    features: [
      "15W Fast Charging",
      "Qi Wireless Standard",
      "LED Charging Indicator",
      "Anti-Slip Surface",
      "Overcharge Protection"
    ],
    specifications: {
      brand: "ChargeTech",
      input: "QC 3.0",
      output: "15W Max",
      compatibility: "Qi-enabled devices",
      dimensions: "10x10x1cm",
      cableLength: "1.2m"
    }
  },
  {
    id: 7,
    title: "Bluetooth Speaker - Waterproof and Portable",
    price: 59.99,
    originalPrice: 89.99,
    rating: 4.5,
    reviewCount: 923,
    category: "electronics",
    image:[ "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800", 
      "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800",
       "https://images.pexels.com/photos/4107656/pexels-photo-4107656.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg?auto=compress&cs=tinysrgb&w=800"],
    discount: 33,
    shipping: "FREE delivery tomorrow",
    prime: true,
    stockCount: 155,
    description: "Portable Bluetooth speaker with IPX7 waterproof rating. Perfect for outdoor adventures and pool parties.",
    features: [
      "IPX7 Waterproof",
      "12-hour Battery Life",
      "Bluetooth 5.0",
      "Built-in Microphone",
      "TWS Pairing"
    ],
    specifications: {
      brand: "SoundWave",
      color: "Ocean Blue",
      connectivity: "Bluetooth 5.0",
      batteryLife: "12 hours",
      power: "20W",
      waterproofRating: "IPX7",
      dimensions: "18x7x7cm"
    }
  },
  {
    id: 8,
    title: "Gaming Mechanical Keyboard - RGB Backlit",
    price: 89.99,
    originalPrice: 149.99,
    rating: 4.8,
    reviewCount: 567,
    category: "electronics",
    image: ["https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&w=800",
       "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800",
       "https://images.pexels.com/photos/4107656/pexels-photo-4107656.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg?auto=compress&cs=tinysrgb&w=800"],
    discount: 40,
    shipping: "FREE delivery tomorrow",
    prime: true,
    stockCount: 89,
    description: "Professional gaming keyboard with mechanical switches and customizable RGB lighting. Designed for competitive gaming.",
    features: [
      "Mechanical Blue Switches",
      "RGB Backlighting",
      "N-Key Rollover",
      "Programmable Macros",
      "Detachable Wrist Rest"
    ],
    specifications: {
      brand: "GameMaster",
      switchType: "Mechanical Blue",
      backlight: "RGB",
      keyCount: "104",
      pollingRate: "1000Hz",
      cableLength: "1.8m",
      weight: "1.2kg"
    }
  },
  {
    id: 9,
    title: "Yoga Mat with Carry Strap",
    price: 24.99,
    originalPrice: 39.99,
 
    rating: 4.5,
    reviewCount: 2100,
    category: "Health & Fitness",
    image: "https://picsum.photos/seed/yoga-mat-exercise/300/200.jpg",
    discount: "37%",
    shipping: "Free Shipping",
    stockCount: 420,
    description: "Eco-friendly yoga mat with non-slip surface and alignment markings. Includes convenient carry strap.",
    features: [
      "Non-Slip Surface",
      "Alignment Markings",
      "Eco-Friendly TPE",
      "6mm Thickness",
      "Includes Carry Strap"
    ],
    specifications: {
      brand: "ZenFlex",
      material: "TPE",
      thickness: "6mm",
      dimensions: "183x61cm",
      weight: "1.1kg",
      color: "Purple",
      care: "Wipe Clean"
    }
  },
  {
    id: 10,
    title: "Interactive Cat Toy",
    price: 12.99,
    originalPrice: 19.99,
    rating: 4.6,
    reviewCount: 540,
    category: "Pet Supplies",
    image: "https://picsum.photos/seed/cat-toy-pet/300/200.jpg",
    discount: "35%",
    shipping: "$2.50",
    stockCount: 630,
    description: "Electronic cat toy with moving feathers and unpredictable patterns to stimulate your cat's natural hunting instincts.",
    features: [
      "Moving Feather Wand",
      "Random Movement Patterns",
      "Adjustable Speed",
      "Catnip Infused",
      "USB Rechargeable"
    ],
    specifications: {
      brand: "PetPlay",
      material: "Plastic/Feathers",
      power: "USB Rechargeable",
      runtime: "4 hours",
      dimensions: "15x15x20cm",
      weight: "250g",
      color: "Gray"
    }
  },
  {
    id: 11,
    title: "Baby Stroller – Foldable",
    price: 99.99,
    originalPrice: 149.99,
    rating: 4.3,
    reviewCount: 875,
    category: "Baby Products",
    image: "https://picsum.photos/seed/baby-stroller-carriage/300/200.jpg",
    discount: "33%",
    shipping: "Free Shipping",
    stockCount: 78,
    description: "Lightweight, foldable stroller with adjustable recline and large storage basket. Perfect for urban parents.",
    features: [
      "One-hand Fold",
      "5-point Harness",
      "Adjustable Canopy",
      "Large Storage Basket",
      "All-Terrain Wheels"
    ],
    specifications: {
      brand: "BabyGo",
      weight: "7.5kg",
      maxWeight: "25kg",
      dimensions: "Open: 85x50x100cm",
      ageRange: "Birth to 3 years",
      color: "Charcoal",
      wheels: "All-terrain with suspension"
    }
  },
  {
    id: 12,
    title: "Ergonomic Office Chair",
    price: 149.99,
    originalPrice: 229.99,
    rating: 4.1,
    reviewCount: 620,
    category: "Office Supplies",
    image: "https://picsum.photos/seed/office-chair-ergonomic/300/200.jpg",
    discount: "35%",
    shipping: "Free Shipping",
    stockCount: 95,
    description: "Adjustable office chair with lumbar support and breathable mesh back. Designed for all-day comfort.",
    features: [
      "Adjustable Lumbar Support",
      "Breathable Mesh Back",
      "Armrest Height Adjustment",
      "360° Swivel",
      "Tilt Mechanism"
    ],
    specifications: {
      brand: "ComfortPro",
      material: "Mesh/Metal",
      maxWeight: "150kg",
      dimensions: "67x65x120cm",
      color: "Black",
      assembly: "Required",
      warranty: "3 years"
    }
  },
  {
    id: 13,
    title: "Car Phone Mount",
    price: 19.99,
    originalPrice: 29.99,
    rating: 4.2,
    reviewCount: 1300,
    category: "Automotive",
    image: "https://picsum.photos/seed/car-phone-mount-automotive/300/200.jpg",
    discount: "33%",
    shipping: "$3.99",
    stockCount: 560,
    description: "Universal car phone mount with strong suction cup and adjustable arm. Securely holds phones of all sizes.",
    features: [
      "Strong Suction Cup",
      "360° Adjustable Arm",
      "One-Touch Release",
      "Compatible with All Phones",
      "Shock Absorbing"
    ],
    specifications: {
      brand: "DriveSafe",
      material: "ABS Plastic/Metal",
      maxPhoneSize: "6.7\"",
      weight: "120g",
      color: "Black",
      warranty: "1 year"
    }
  },
  {
    id: 14,
    title: "Sterling Silver Necklace",
    price: 59.99,
    originalPrice: 89.99,
    rating: 4.6,
    reviewCount: 450,
    category: "Jewelry",
    image: "https://picsum.photos/seed/silver-necklace-jewelry/300/200.jpg",
    discount: "33%",
    shipping: "Free Shipping",
    stockCount: 120,
    description: "Elegant sterling silver necklace with pendant. Hypoallergenic and perfect for everyday wear.",
    features: [
      "925 Sterling Silver",
      "Pendant Necklace",
      "Adjustable Chain",
      "Hypoallergenic",
      "Gift Box Included"
    ],
    specifications: {
      brand: "SilverLuxe",
      material: "925 Sterling Silver",
      chainLength: "18-22 inches",
      pendantSize: "1.5cm",
      clasp: "Lobster",
      weight: "4.5g",
      color: "Silver"
    }
  },
  {
    id: 15,
    title: "Outdoor Solar Path Lights – Set of 4",
    price: 29.99,
    originalPrice: 44.99,
    rating: 4.4,
    reviewCount: 780,
    category: "Garden & Outdoor",
    image: "https://picsum.photos/seed/solar-garden-lights/300/200.jpg",
    discount: "33%",
    shipping: "$4.99",
    stockCount: 210,
    description: "Solar-powered path lights with automatic dusk-to-dawn operation. Weather-resistant for outdoor use.",
    features: [
      "Solar Powered",
      "Dusk-to-Dawn Sensor",
      "Waterproof IP65",
      "LED Bulbs",
      "Ground Stake Included"
    ],
    specifications: {
      brand: "EcoLight",
      power: "Solar",
      brightness: "10 Lumens",
      runtime: "8-10 hours",
      material: "Plastic/Metal",
      dimensions: "Height: 40cm",
      color: "Warm White"
    }
  },
  {
    id: 16,
    title: "Acoustic Guitar Starter Kit",
    price: 129.99,
    originalPrice: 179.99,
    rating: 4.5,
    reviewCount: 540,
    category: "Music Instruments",
    image: "https://picsum.photos/seed/acoustic-guitar-music/300/200.jpg",
    discount: "28%",
    shipping: "Free Shipping",
    stockCount: 65,
    description: "Complete acoustic guitar starter kit with everything a beginner needs to start playing immediately.",
    features: [
      "Durable Linden Body",
      "Rosewood Fingerboard",
      "Steel Strings",
      "Gig Bag Included",
      "Tuner and Picks"
    ],
    specifications: {
      brand: "StrumMaster",
      type: "Acoustic",
      body: "Linden",
      fretboard: "Rosewood",
      strings: "Steel",
      scaleLength: "25.5\"",
      color: "Natural"
    }
  },
  {
    id: 17,
    title: "Next‑Gen Console Gamer Bundle",
    price: 399.99,
    originalPrice: 449.99,
    rating: 4.8,
    reviewCount: 3120,
    category: "Video Games",
    image: "https://picsum.photos/seed/console-gaming-bundle/300/200.jpg",
    discount: "11%",
    shipping: "Free Shipping",
    stockCount: 42,
    description: "Ultimate gaming bundle with next-gen console, two controllers, and three popular game titles.",
    features: [
      "4K Gaming",
      "Ray Tracing",
      "1TB SSD",
      "Wireless Controllers",
      "3 Pre-installed Games"
    ],
    specifications: {
      brand: "GameStation",
      storage: "1TB SSD",
      resolution: "4K",
      cpu: "8-core Custom",
      gpu: "Custom 12 TFLOPS",
      color: "Black",
      bundleIncludes: ["2 Controllers", "3 Games"]
    }
  },
  {
    id: 18,
    title: "Watercolor Paint Set – 48 Colors",
    price: 24.99,
    originalPrice: 34.99,
    rating: 4.7,
    reviewCount: 990,
    category: "Art & Craft",
    image: "https://picsum.photos/seed/watercolor-paint-set/300/200.jpg",
    discount: "29%",
    shipping: "$2.99",
    stockCount: 380,
    description: "Professional watercolor paint set with 48 vibrant colors. Perfect for artists of all skill levels.",
    features: [
      "48 Vibrant Colors",
      "High Pigment",
      "Portable Case",
      "Artist Quality",
      "Blendable"
    ],
    specifications: {
      brand: "ArtCraft",
      colors: 48,
      paintType: "Watercolor",
      format: "Tubes",
      volume: "12ml per tube",
      caseMaterial: "Plastic",
      nonToxic: "Yes"
    }
  },
  {
    id: 19,
    title: "LED Headlight Conversion Kit",
    price: 79.99,
    originalPrice: 119.99,
    rating: 4.3,
    reviewCount: 430,
    category: "Automotive",
    image: "https://picsum.photos/seed/led-headlight-car/300/200.jpg",
    discount: "33%",
    shipping: "$5.99",
    stockCount: 95,
    description: "High-performance LED headlight conversion kit with plug-and-play installation. Brighter and more efficient.",
    features: [
      "6000K Cool White",
      "Plug-and-Play",
      "Waterproof IP68",
      "Low Power Consumption",
      "H4/H7/H11 Compatible"
    ],
    specifications: {
      brand: "BrightBeam",
      type: "LED Conversion Kit",
      colorTemperature: "6000K",
      power: "36W",
      lifespan: "50,000 hours",
      material: "Aluminum",
      warranty: "2 years"
    }
  },
  {
    id: 20,
    title: "USB‑C Multiport Hub (7‑in‑1)",
    price: 39.99,
    originalPrice: 59.99,
    rating: 4.5,
    reviewCount: 1500,
    category: "Office Gadgets",
    image: "https://picsum.photos/seed/usb-c-hub-office/300/200.jpg",
    discount: "33%",
    shipping: "Free Shipping",
    stockCount: 210,
    description: "Compact USB-C hub with 7 essential ports for expanding connectivity on modern laptops.",
    features: [
      "7-in-1 Connectivity",
      "USB-C Power Delivery",
      "4K HDMI",
      "SD/TF Card Reader",
      "Compact Design"
    ],
    specifications: {
      brand: "ConnectPro",
      ports: ["HDMI", "USB-A x3", "USB-C PD", "SD", "TF"],
      dataTransfer: "5Gbps",
      resolution: "4K@30Hz",
      powerDelivery: "100W",
      dimensions: "10x4x1.5cm",
      weight: "45g"
    }
  },
  {
    id: 21,
    title: "Men's Running Shoes",
    price: 69.99,
    originalPrice: 99.99,
    rating: 4.4,
    reviewCount: 2200,
    category: "Footwear",
    image: "https://picsum.photos/seed/mens-running-shoes/300/200.jpg",
    discount: "30%",
    shipping: "Free Shipping",
    stockCount: 320,
    description: "Lightweight running shoes with responsive cushioning and breathable mesh upper. Perfect for daily runs.",
    features: [
      "Responsive Cushioning",
      "Breathable Mesh",
      "Durable Outsole",
      "Reflective Details",
      "Lace-up Closure"
    ],
    specifications: {
      brand: "RunFlex",
      type: "Running Shoes",
      material: "Mesh/Synthetic",
      sole: "Rubber",
      weight: "280g",
      color: "Black/Blue",
      sizeRange: "US 7-13"
    }
  },
  {
    id: 22,
    title: "Smart Fitness Watch",
    price: 129.99,
    originalPrice: 199.99,
    rating: 4.3,
    reviewCount: 1700,
    category: "Watches",
    image: "https://picsum.photos/seed/smart-fitness-watch/300/200.jpg",
    discount: "35%",
    shipping: "Free Shipping",
    stockCount: 110,
    description: "Advanced fitness watch with heart rate monitoring, GPS, and 20+ sport modes. Track your workouts precisely.",
    features: [
      "Heart Rate Monitoring",
      "Built-in GPS",
      "20+ Sport Modes",
      "5 ATM Water Resistance",
      "7-day Battery Life"
    ],
    specifications: {
      brand: "FitTech",
      display: "AMOLED 1.3\"",
      batteryLife: "7 days",
      waterResistance: "5 ATM",
      sensors: ["Heart Rate", "GPS", "Accelerometer"],
      connectivity: "Bluetooth 5.0"
    }
  },
]
    var featured= featuredProduct.filter((products)=>{
      if(products.id==id){
      ;
        setproduct(products);  }
    })

  

    // GSAP animation on mount
    gsap.fromTo(pageRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
  }, [id]);

 
  const handleAddToCart = () => {
    if (id) {
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
      
      // GSAP animation
      gsap.fromTo('.add-to-cart-btn',
        { scale: 1 },
        { scale: 1.05, duration: 0.1, yoyo: true, repeat: 1 }
      );
    }
  };

  const handleImageChange = (index) => {
    setSelectedImage(index);
    
    // GSAP animation for image change
    gsap.fromTo(imageRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
    );
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} size={16} fill="#FFA41C" color="#FFA41C" />);
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" size={16} fill="#FFA41C" color="#FFA41C" style={{ clipPath: 'inset(0 50% 0 0)' }} />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} size={16} color="#DDD" />);
    }

    return stars;
  };

  if (!product) {
    return (
      <div className="loading-container">
        <div className="loading"></div>
      </div>
    );
  }

  return (
    <div className="product-detail" ref={pageRef}>
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>{product.title}</span>
        </nav>

        <div className="product-content">
          <div className="product-images">
            <div className="main-image">
              <img
                ref={imageRef}
                src={product.image[selectedImage]}
                alt={product.title}
              />
              {product.discount && (
                <div className="discount-badge">-{product.discount}%</div>
              )}
            </div>
            
            <div className="image-thumbnails">
              {product.image.map((image, index) => (
                <button
                  key={index}
                  className={`thumbnail ${index === selectedImage ? 'active' : ''}`}
                  onClick={() => handleImageChange(index)}
                >
                  <img src={image} alt={`${product.title} ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="product-info">
            <h1>{product.title}</h1>
            
            <div className="product-rating">
              <div className="stars">
                {renderStars(product.rating)}
              </div>
              <span className="rating-text">{product.rating}</span>
              <span className="review-count">({product.reviewCount} reviews)</span>
            </div>

            <div className="product-pricing">
              <span className="current-price">${product.price}</span>
              {product.originalPrice && (
                <span className="original-price">${product.originalPrice}</span>
              )}
              {product.discount && (
                <span className="savings">Save {product.discount}%</span>
              )}
            </div>

            {product.prime && (
              <div className="prime-info">
                <span className="prime-badge">Prime</span>
                <span>{product.shipping}</span>
              </div>
            )}

            <div className="stock-info">
              {product.inStock ? (
                <span className="in-stock">✓ In Stock ({product.stockCount} available)</span>
              ) : (
                <span className="out-of-stock">Out of Stock</span>
              )}
            </div>

            <div className="product-actions">
              <div className="quantity-selector">
                <label>Quantity:</label>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                >
                  {[...Array(Math.min(10, product.stockCount))].map((_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </div>

              <div className="action-buttons">
                <button
                  className="btn btn-cart add-to-cart-btn"
                  onClick={handleAddToCart} >
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>
                
                <button
                  className={`btn btn-secondary favorite-btn ${isFavorite ? 'favorite' : ''}`}
                  onClick={() => setIsFavorite(!isFavorite)}
                >
                  <Heart size={20} fill={isFavorite ? '#ff4757' : 'none'} />
                  {isFavorite ? 'Favorited' : 'Add to Wishlist'}
                </button>
              </div>
            </div>

            <div className="delivery-info">
              <div className="delivery-item">
                <Truck size={20} />
                <div>
                  <strong>Free Delivery</strong>
                  <p>Arrives tomorrow, Jan 24</p>
                </div>
              </div>
              
              <div className="delivery-item">
                <RotateCcw size={20} />
                <div>
                  <strong>Free Returns</strong>
                  <p>30-day return policy</p>
                </div>
              </div>
              
              <div className="delivery-item">
                <Shield size={20} />
                <div>
                  <strong>Warranty</strong>
                  <p>2-year manufacturer warranty</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="product-details">
          <div className="details-tabs">
            <div className="tab active">Description</div>
            <div className="tab">Specifications</div>
            <div className="tab">Reviews</div>
          </div>

          <div className="tab-content">
            <div className="description">
              <h3>Product Description</h3>
              <p>{product.description}</p>
              
              <h4>Key Features</h4>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="specifications">
              <h3>Technical Specifications</h3>
              <table>
                <tbody>
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <tr key={key}>
                      <td><strong>{key}</strong></td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;