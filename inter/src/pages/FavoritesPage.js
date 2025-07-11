import React, { useState, useEffect } from "react";
import Favorites from "../components/Favorites";
import ProductModal from "../components/ProductModal";
import CustomToast from "../components/Toast";
import { fetchProducts } from "../api/mockApi";
import { Container } from "react-bootstrap";
import MessengerChat from "../components/MessengerChat";

const FavoritesPage = () => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const [favorites, setFavorites] = useState(storedFavorites);
    const [products, setProducts] = useState([]);
    const [modalProductId, setModalProductId] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");

    useEffect(() => {
        fetchProducts().then(setProducts);
    }, []);

    const favoriteProducts = products.filter((p) => favorites.includes(p.id));

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
            <h2 className="mb-4">Sản phẩm yêu thích</h2>
            <Favorites
                favoriteProducts={favoriteProducts}
                onViewDetail={handleViewDetail}
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
            <MessengerChat />
        </Container>
    );
};

export default FavoritesPage;
