import React from "react";
import { Card, Button } from "react-bootstrap";

const ProductCard = ({ product, onViewDetail, onToggleFavorite, isFavorite }) => {
    return (
        <Card className="h-100 shadow-sm">
            <Card.Img
                variant="top"
                src={product.image}
                alt={product.name}
                style={{ objectFit: "cover", height: "200px" }}
            />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.shortDescription}</Card.Text>
                <Card.Text><em>Giảng viên: {product.instructor}</em></Card.Text>
                <Card.Text><strong>{product.price.toLocaleString()} VND</strong></Card.Text>

                <div className="d-flex justify-content-between">
                    <Button variant="primary" onClick={() => onViewDetail(product.id)}>
                        Xem chi tiết
                    </Button>
                    <Button
                        variant={isFavorite ? "danger" : "outline-danger"}
                        onClick={() => onToggleFavorite(product.id)}
                        title={isFavorite ? "Bỏ yêu thích" : "Thêm yêu thích"}
                    >
                        ♥
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;