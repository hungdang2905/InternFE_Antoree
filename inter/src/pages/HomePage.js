import React, { useState } from "react";
import ProductList from "../components/ProductList";
import ProductModal from "../components/ProductModal";
import SearchFilter from "../components/SearchFilter";
import Suggestions from "../components/Suggestions";
import CustomToast from "../components/Toast";
import { Container } from "react-bootstrap";
import MessengerChat from "../components/MessengerChat";
import CartDropdown from "../components/CartDropdown";

const HomePage = () => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const [favorites, setFavorites] = useState(storedFavorites);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [modalProductId, setModalProductId] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const [query, setQuery] = useState("");
    const [priceRange, setPriceRange] = useState("");

    const handleViewDetail = (productId) => {
        setModalProductId(productId);
        setShowModal(true);
    };

    const toggleFavorite = (id) => {
        setFavorites((prev) => {
            const updated = prev.includes(id)
                ? prev.filter((f) => f !== id)
                : [...prev, id];
            localStorage.setItem("favorites", JSON.stringify(updated));
            setToastMessage(prev.includes(id) ? "Đã bỏ yêu thích" : "Đã thêm vào yêu thích");
            setShowToast(true);
            return updated;
        });
    };

    return (
        <Container className="mt-4">
            <div className="d-flex justify-content-end mb-3">
                <CartDropdown/>
            </div>

            <h2 className="mb-4">Danh sách sản phẩm</h2>
            <SearchFilter
                query={query}
                setQuery={setQuery}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
            />

            <ProductList
                onViewDetail={handleViewDetail}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
            />

            <Suggestions
                onViewDetail={handleViewDetail}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
            />

            <ProductModal
                show={showModal}
                handleClose={() => setShowModal(false)}
                productId={modalProductId}
            />

            <CustomToast
                show={showToast}
                message={toastMessage}
                onClose={() => setShowToast(false)}
            />
            <MessengerChat/>
        </Container>
    );
};

export default HomePage;