import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
        console.log("Making Products call")
        fetch("https://fakestoreapi.com/products", {
			method: "GET",
		})   // Use your backend endpoint
      	.then(res => res.json())
      	.then(data => {
			console.log("Inside = ", data)
			setProducts(data);
			setLoading(false);
      	})
      	.catch(() => setLoading(false));
  }, []);

  if (loading) return <p className="loading-text">Loading products...</p>;

  return (
    <div className="products-page">
      <div className="products-grid">
        {products.length > 0 ? products.map((product) => (
          <ProductCard 
            key={product.id} 
            title={product.title} 
            price={product.price}
            image={product.image}
          />
        )) : <div>No Products</div>}
      </div>
    </div>
  );
}

export default Products;
