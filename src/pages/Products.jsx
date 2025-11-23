import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";

function Products() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [searchTerm, setSearchTerm] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		setLoading(true);
		setError("");

		fetch("https://fakestoreapi.com/products", {
			method: "GET",
		})
			.then((res) => {
				if (!res.ok) throw new Error("Failed to fetch products");
				return res.json();
			})
			.then((data) => {
				setProducts(data);
				setLoading(false);
			})
			.catch((err) => {
				console.error(err);
				setError("Could not load products.");
				setLoading(false);
			});
	}, []);

	const handleViewDetails = (id) => {
		navigate(`/products/${id}`);
	};

	const filteredProducts = products.filter((p) =>
		p.title.toLowerCase().includes(searchTerm.toLowerCase())
	);

	if (loading) return <p className="loading-text">Loading products...</p>;
	if (error) return <p className="error-text">{error}</p>;

	return (
		<div className="products-page">
			<div className="products-header">
				<h2>Products</h2>
				<input
					type="text"
					className="search-input"
					placeholder="Search products..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
			</div>

			<div className="products-grid">
				{filteredProducts.map((product) => (
					<ProductCard
						key={product.id}
						id={product.id}
						title={product.title}
						price={product.price}
						image={product.image}
						onViewDetails={handleViewDetails}
					/>
				))}
			</div>
		</div>
	);
}

export default Products;