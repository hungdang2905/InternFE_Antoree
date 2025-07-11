import React, { useState } from "react";
import { Button, Spinner, Alert, Row, Col } from "react-bootstrap";
import { fetchSuggestions } from "../api/mockApi";
import ProductCard from "./ProductCard";

const Suggestions = ({ onViewDetail, favorites, onToggleFavorite }) => {
    const [suggested, setSuggested] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSuggest = () => {
        setLoading(true);
        setError("");
        fetchSuggestions(1)
            .then(data => setSuggested(data))
            .catch(err => setError(err))
            .finally(() => setLoading(false));
    };

    return (
        <div className="my-4">
            <Button onClick={handleSuggest} disabled={loading}>
                {loading ? "Đang gợi ý..." : "Gợi ý sản phẩm phù hợp"}
            </Button>
            {error && <Alert variant="danger" className="mt-2">{error}</Alert>}
            <Row className="mt-4" xs={1} sm={2} md={3} lg={4}>
                {suggested.map((product) => (
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
        </div>
    );
};

export default Suggestions;

