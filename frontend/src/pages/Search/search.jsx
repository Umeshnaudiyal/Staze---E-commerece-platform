import React, { useContext, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import { context, ProductProvider } from '../../contexts/productdata';
 


function Search() {
    const addToRefs=useRef();
     const data=useContext(context);

    
    let {searchproducts}=useParams();
     searchproducts=searchproducts.trim().toLowerCase();
    console.log(searchproducts);
    const [searchresults, setsearchresults] = useState([]);
  useEffect(() => {
       const featured=data.filter((products)=>{
       if( products.title.toLowerCase().includes(searchproducts)||
        products.category.toLowerCase().includes(searchproducts))
        {
         return products
        }
    //   return products
    })
   setsearchresults(featured);
   
  }, [searchproducts]);
    return (
     <section className="featured-section" ref={addToRefs}>
        <div className="container">
          <h2>Search Result For {searchproducts}!</h2>
          <div className="products-grid">
            {searchresults.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
     );
}

export default Search;
