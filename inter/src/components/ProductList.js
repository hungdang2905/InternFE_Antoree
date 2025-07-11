import React, { useEffect, useState } from "react";
import { Row, Col, Spinner, Alert } from "react-bootstrap";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../api/mockApi";

const ProductList = ({ onViewDetail, favorites, onToggleFavorite }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchProducts()
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(err => {
                setError("Không thể tải sản phẩm");
                setLoading(false);
            });
    }, []);

    if (loading) return <Spinner animation="border" />;
    if (error) return <Alert variant="danger">{error}</Alert>;

    return (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {products.map((product) => (
                <Col key={product.id}>
                    <ProductCard
                        product={product}
                        onViewDetail={onViewDetail}
                        onToggleFavorite={onToggleFavorite}
                        isFavorite={favorites.includes(product.id)}
                    />
                </Col>
            ))}
        </Row>
    );
};

export default ProductList;