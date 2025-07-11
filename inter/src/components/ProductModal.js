import React, { useEffect, useState } from "react";
import { Modal, Button, Spinner } from "react-bootstrap";
import { fetchProductById } from "../api/mockApi";

const ProductModal = ({ show, handleClose, productId }) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (productId) {
            setLoading(true);
            fetchProductById(productId)
                .then(data => {
                    setProduct(data);
                    setLoading(false);
                })
                .catch(() => setLoading(false));
        }
    }, [productId]);

    if (!show) return null;

    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Chi tiết sản phẩm</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {loading ? (
                    <Spinner animation="border" />
                ) : product ? (
                    <>
                        <img src={product.image} alt={product.name} className="img-fluid mb-3" />
                        <h4>{product.name}</h4>
                        <p><strong>Giá:</strong> {product.price.toLocaleString()} VND</p>
                        <p>{product.fullDescription}</p>
                        <p><strong>Giảng viên:</strong> {product.instructor}</p>

                        <p><strong>Đánh giá:</strong> {product.rating}⭐</p>
                    </>
                ) : (
                    <p>Không tìm thấy sản phẩm.</p>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Đóng</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ProductModal;