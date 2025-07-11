import React from "react";
import { Row, Col, Alert } from "react-bootstrap";
import ProductCard from "./ProductCard";

const Favorites = ({ favoriteProducts, onViewDetail, onToggleFavorite }) => {
    if (!favoriteProducts.length) {
        return <Alert variant="info">Bạn chưa yêu thích sản phẩm nào.</Alert>;
    }

    return (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {favoriteProducts.map((product) => (
                <Col key={product.id}>
                    <ProductCard
                        product={product}
                        onViewDetail={onViewDetail}
                        onToggleFavorite={onToggleFavorite}
                        isFavorite={true}
                    />
                </Col>
            ))}
        </Row>
    );
};

export default Favorites;