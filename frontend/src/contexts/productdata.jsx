import { createContext, useState } from "react";
import React from 'react';

export const context=createContext(null);

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
      category:"electronics",
      prime: true
    },
    {
      id: 2,
      title: "Smart Watch with Fitness Tracker and Heart Rate Monitor",
      price: 199.99,
      originalPrice: 299.99,
      rating: 4.7,
      reviewCount: 1523,
      category:"electronics",
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
      category:"electronics",
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
      category:"Home",
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
      category:"electronics",
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
      category:"electronics",
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
      category:"electronics",
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
      category:"electronics",
      reviewCount: 567,
      image: "https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&w=800",
      discount: 40,
      shipping: "FREE delivery tomorrow",
      prime: true
    }
  ,

  {
    id: 9,
    category: "Health & Fitness",
    image: "https://picsum.photos/seed/yoga-mat-exercise/300/200.jpg",
    title: "Yoga Mat with Carry Strap",
    price: 24.99,
    originalPrice: 39.99,
    rating: 4.5,
    reviewCount: 2100,
    discount: "37%",
    shipping: "Free Shipping"
  },
  {
    id: 10,
    category: "Pet Supplies",
    image: "https://picsum.photos/seed/cat-toy-pet/300/200.jpg",
    title: "Interactive Cat Toy",
    price: 12.99,
    originalPrice: 19.99,
    rating: 4.6,
    reviewCount: 540,
    discount: "35%",
    shipping: "$2.50"
  },
  {
    id: 11,
    category: "Baby Products",
    image: "https://picsum.photos/seed/baby-stroller-carriage/300/200.jpg",
    title: "Baby Stroller – Foldable",
    price: 99.99,
    originalPrice: 149.99,
    rating: 4.3,
    reviewCount: 875,
    discount: "33%",
    shipping: "Free Shipping"
  },
  {
    id: 12,
    category: "Office Supplies",
    image: "https://picsum.photos/seed/office-chair-ergonomic/300/200.jpg",
    title: "Ergonomic Office Chair",
    price: 149.99,
    originalPrice: 229.99,
    rating: 4.1,
    reviewCount: 620,
    discount: "35%",
    shipping: "Free Shipping"
  },
  {
    id: 13,
    category: "Automotive",
    image: "https://picsum.photos/seed/car-phone-mount-automotive/300/200.jpg",
    title: "Car Phone Mount",
    price: 19.99,
    originalPrice: 29.99,
    rating: 4.2,
    reviewCount: 1300,
    discount: "33%",
    shipping: "$3.99"
  },
  {
    id: 14,
    category: "fashion",
    image: "https://picsum.photos/seed/silver-necklace-jewelry/300/200.jpg",
    title: "Sterling Silver Necklace",
    price: 59.99,
    originalPrice: 89.99,
    rating: 4.6,
    reviewCount: 450,
    discount: "33%",
    shipping: "Free Shipping"
  },
  {
    id: 15,
    category: "Garden & Outdoor",
    image: "https://picsum.photos/seed/solar-garden-lights/300/200.jpg",
    title: "Outdoor Solar Path Lights – Set of 4",
    price: 29.99,
    originalPrice: 44.99,
    rating: 4.4,
    reviewCount: 780,
    discount: "33%",
    shipping: "$4.99"
  },
  {
    id: 16,
    category: "Music Instruments",
    image: "https://picsum.photos/seed/acoustic-guitar-music/300/200.jpg",
    title: "Acoustic Guitar Starter Kit",
    price: 129.99,
    originalPrice: 179.99,
    rating: 4.5,
    reviewCount: 540,
    discount: "28%",
    shipping: "Free Shipping"
  },
  {
    id: 17,
    category: "Video Games",
    image: "https://picsum.photos/seed/console-gaming-bundle/300/200.jpg",
    title: "Next‑Gen Console Gamer Bundle",
    price: 399.99,
    originalPrice: 449.99,
    rating: 4.8,
    reviewCount: 3120,
    discount: "11%",
    shipping: "Free Shipping"
  },
  {
    id: 18,
    category: "Art & Craft",
    image: "https://picsum.photos/seed/watercolor-paint-set/300/200.jpg",
    title: "Watercolor Paint Set – 48 Colors",
    price: 24.99,
    originalPrice: 34.99,
    rating: 4.7,
    reviewCount: 990,
    discount: "29%",
    shipping: "$2.99"
  },
  {
    id: 19,
    category: "Automotive",
    image: "https://picsum.photos/seed/led-headlight-car/300/200.jpg",
    title: "LED Headlight Conversion Kit",
    price: 79.99,
    originalPrice: 119.99,
    rating: 4.3,
    reviewCount: 430,
    discount: "33%",
    shipping: "$5.99"
  },
  {
    id: 20,
    category: "Office Gadgets",
    image: "https://picsum.photos/seed/usb-c-hub-office/300/200.jpg",
    title: "USB‑C Multiport Hub (7‑in‑1)",
    price: 39.99,
    originalPrice: 59.99,
    rating: 4.5,
    reviewCount: 1500,
    discount: "33%",
    shipping: "Free Shipping"
  },
  {
    id: 21,
    category: "fashion",
    image: "https://picsum.photos/seed/mens-running-shoes/300/200.jpg",
    title: "Men's Running Shoes",
    price: 69.99,
    originalPrice: 99.99,
    rating: 4.4,
    reviewCount: 2200,
    discount: "30%",
    shipping: "Free Shipping"
  },
  {
    id: 22,
    category: "Watches",
    image: "https://picsum.photos/seed/smart-fitness-watch/300/200.jpg",
    title: "Smart Fitness Watch",
    price: 129.99,
    originalPrice: 199.99,
    rating: 4.3,
    reviewCount: 1700,
    discount: "35%",
    shipping: "Free Shipping"
  },
  {
    id: 23,
    category: "fashion",
    image: "https://picsum.photos/seed/leather-crossbody-bag/300/200.jpg",
    title: "Leather Crossbody Bag",
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.6,
    reviewCount: 900,
    discount: "31%",
    shipping: "$3.99"
  },
  {
    id: 24,
    category: "home",
    image: "https://picsum.photos/seed/air-fryer-kitchen/300/200.jpg",
    title: "Air Fryer 5.5 Litre",
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.5,
    reviewCount: 1350,
    discount: "31%",
    shipping: "Free Shipping"
  },
  {
    id: 25,
    category: "Smart Home",
    image: "https://picsum.photos/seed/smart-light-bulbs/300/200.jpg",
    title: "Smart WiFi Light Bulb (4‑pack)",
    price: 49.99,
    originalPrice: 79.99,
    rating: 4.4,
    reviewCount: 1450,
    discount: "37%",
    shipping: "Free Shipping"
  },
  {
    id: 26,
    category: "Stationery",
    image: "https://picsum.photos/seed/fountain-pen-writing/300/200.jpg",
    title: "Premium Fountain Pen Set",
    price: 29.99,
    originalPrice: 49.99,
    rating: 4.5,
    reviewCount: 580,
    discount: "40%",
    shipping: "$2.49"
  },
  {
    id: 27,
    category: "Travel Accessories",
    image: "https://picsum.photos/seed/hard-shell-suitcase/300/200.jpg",
    title: "Hardshell Carry-On Suitcase (20″)",
    price: 119.99,
    originalPrice: 159.99,
    rating: 4.3,
    reviewCount: 710,
    discount: "25%",
    shipping: "Free Shipping"
  },
  {
    id: 28,
    category: "Photography",
    image: "https://picsum.photos/seed/mirrorless-camera/300/200.jpg",
    title: "Compact Mirrorless Camera",
    price: 499.99,
    originalPrice: 599.99,
    rating: 4.6,
    reviewCount: 890,
    discount: "17%",
    shipping: "Free Shipping"
  },
  {
    id: 29,
    category: "Fashion",
    image: "https://picsum.photos/seed/mens-denim-jacket/300/200.jpg",
    title: "Men's Denim Jacket",
    price: 49.99,
    originalPrice: 79.99,
    rating: 4.2,
    reviewCount: 1893,
    discount: "38%",
    shipping: "$4.99"
  },
  {
    id: 30,
    category: "Electronics",
    image: "https://picsum.photos/seed/wireless-headphones/300/200.jpg",
    title: "Wireless Bluetooth Headphones",
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.5,
    reviewCount: 3421,
    discount: "31%",
    shipping: "Free Shipping"
  },
  {
    id: 31,
    category: "Books",
    image: "https://picsum.photos/seed/books-stack/300/200.jpg",
    title: "Atomic Habits by James Clear",
    price: 11.99,
    originalPrice: 20.00,
    rating: 4.8,
    reviewCount: 25431,
    discount: "40%",
    shipping: "Free Shipping"
  },
  {
    id: 32,
    category: "Toys & Games",
    image: "https://picsum.photos/seed/lego-blocks-toys/300/200.jpg",
    title: "LEGO Classic Brick Box",
    price: 34.99,
    originalPrice: 49.99,
    rating: 4.9,
    reviewCount: 4234,
    discount: "30%",
    shipping: "$3.99"
  },
  {
    id: 33,
    category: "Home & Kitchen",
    image: "https://picsum.photos/seed/cookware-set-stainless/300/200.jpg",
    title: "Stainless Steel Cookware Set - 10 Pcs",
    price: 129.99,
    originalPrice: 199.99,
    rating: 4.6,
    reviewCount: 873,
    discount: "35%",
    shipping: "Free Shipping"
  },
  {
    id: 34,
    category: "Beauty & Personal Care",
    image: "https://picsum.photos/seed/skincare-products/300/200.jpg",
    title: "Organic Skincare Gift Set",
    price: 39.99,
    originalPrice: 59.99,
    rating: 4.7,
    reviewCount: 1552,
    discount: "33%",
    shipping: "$2.99"
  },
  {
    id: 35,
    category: "Sports & Outdoors",
    image: "https://picsum.photos/seed/dumbbells-gym/300/200.jpg",
    title: "Adjustable Dumbbell Set - 20 kg",
    price: 79.99,
    originalPrice: 119.99,
    rating: 4.4,
    reviewCount: 1240,
    discount: "33%",
    shipping: "Free Shipping"
  },
  {
    id: 36,
    category: "Grocery",
    image: "https://picsum.photos/seed/mixed-nuts-food/300/200.jpg",
    title: "Organic Mixed Nuts (1 kg)",
    price: 14.99,
    originalPrice: 19.99,
    rating: 4.3,
    reviewCount: 678,
    discount: "25%",
    shipping: "$1.99"
  },
  {
    id: 37,
    category: "Smart Home",
    image: "https://picsum.photos/seed/smart-home-lighting/300/200.jpg",
    title: "Smart WiFi Light Bulb (4‑pack)",
    price: 49.99,
    originalPrice: 79.99,
    rating: 4.4,
    reviewCount: 1450,
    discount: "37%",
    shipping: "Free Shipping"
  },
  {
    id: 38,
    category: "Office Gadgets",
    image: "https://picsum.photos/seed/usb-c-hub-multiport/300/200.jpg",
    title: "USB‑C Multiport Hub (7‑in‑1)",
    price: 39.99,
    originalPrice: 59.99,
    rating: 4.5,
    reviewCount: 1500,
    discount: "33%",
    shipping: "Free Shipping"
  }

];

export const ProductProvider=(props)=>{
    const [data, setdata] = useState(featuredProducts);
    console.log(data)
return(
  <context.Provider value={data}>
    {props.children}
  </context.Provider>)
}