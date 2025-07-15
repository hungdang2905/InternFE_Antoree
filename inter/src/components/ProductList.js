import React, { useEffect, useState } from "react";
import { Row, Col, Spinner, Alert, Pagination } from "react-bootstrap";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../api/mockApi";

const ProductList = ({ onViewDetail, favorites, onToggleFavorite }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const productsPerPage = 6;
    const totalPages = Math.ceil(products.length / productsPerPage);
    const paginatedProducts = products.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
    );

    useEffect(() => {
        fetchProducts()
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(() => {
                setError("Không thể tải sản phẩm");
                setLoading(false);
            });
    }, []);

    if (loading) return <Spinner animation="border" />;
    if (error) return <Alert variant="danger">{error}</Alert>;

    return (
        <>
            <Row xs={1} md={2} className="g-4">
                {paginatedProducts.map((product) => (
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

            <div className="d-flex justify-content-center mt-4">
                <Pagination>
                    {[...Array(totalPages)].map((_, i) => (
                        <Pagination.Item
                            key={i}
                            active={i + 1 === currentPage}
                            onClick={() => setCurrentPage(i + 1)}
                        >
                            {i + 1}
                        </Pagination.Item>
                    ))}
                </Pagination>
            </div>

        </>
    );
};

export default ProductList;
