
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchProductById } from "../api/mockApi";
import { Dropdown, Badge } from "react-bootstrap";
import { ShoppingCart } from "react-feather";

const CartDropdown = () => {
    const cartIds = useSelector((state) => state.cart.items);
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
                        <Dropdown.ItemText key={p.id}>
                            <div><strong>{p.name}</strong></div>
                            <small>{p.price.toLocaleString()} VND</small>
                        </Dropdown.ItemText>
                    ))
                )}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default CartDropdown;
