import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductById } from "../api/mockApi";
import { Dropdown, Badge, Button } from "react-bootstrap";
import { ShoppingCart, X } from "react-feather";
import { removeFromCart } from "../slices/cartSlice";

const CartDropdown = () => {
    const cartIds = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        Promise.all(cartIds.map((id) => fetchProductById(id)))
            .then(setProducts)
            .catch(() => setProducts([]));
    }, [cartIds]);

    return (
        <Dropdown align="end" className="position-relative">
            <Dropdown.Toggle variant="light" id="dropdown-basic" className="d-flex align-items-center">
                <ShoppingCart />
                <Badge bg="danger" className="ms-1">{cartIds.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: "300px", maxHeight: "400px", overflowY: "auto" }}>
                {products.length === 0 ? (
                    <Dropdown.ItemText>Giỏ hàng trống</Dropdown.ItemText>
                ) : (
                    products.map((p) => (
                        <Dropdown.ItemText key={p.id} className="d-flex justify-content-between align-items-start">
                            <div>
                                <strong>{p.name}</strong><br />
                                <small>{p.price.toLocaleString()} VND</small>
                            </div>
                            <Button
                                variant="outline-danger"
                                size="sm"
                                onClick={() => dispatch(removeFromCart(p.id))}
                                title="Xoá khỏi giỏ"
                            >
                                <X size={16} />
                            </Button>
                        </Dropdown.ItemText>
                    ))
                )}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default CartDropdown;
