import React from "react";
import { Card, Button } from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import { addToCart, removeFromCart } from "../slices/cartSlice";

const ProductCard = ({ product, onViewDetail, onToggleFavorite, isFavorite }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const isInCart = cartItems.includes(product.id);
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
                <Button
                    variant={isInCart ? "secondary" : "success"}
                    className="mt-2"
                    onClick={() => dispatch(isInCart ? removeFromCart(product.id) : addToCart(product.id))}
                >
                    {isInCart ? "Hủy lưu" : "Lưu "}
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;