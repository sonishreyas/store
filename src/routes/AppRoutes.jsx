import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";


const Products = lazy(() => import("../pages/Products"));
const ProductDetail = lazy(() => import("../pages/ProductDetail"));
const RegistrationForm = lazy(() => import("../pages/RegistrationForm"));

const AppRoutes = () => {
	return (
		<Suspense fallback={<p className="loading-text">Loading page...</p>}>
            <Routes>
                <Route path="/" element={<Navigate to="/products" replace />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/form" element={<RegistrationForm />} />
                <Route path="*" element={<p>Page not found</p>} />
            </Routes>
      </Suspense>
	);
};

export { AppRoutes };
