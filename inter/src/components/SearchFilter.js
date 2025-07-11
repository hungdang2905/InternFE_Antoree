import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const SearchFilter = ({ query, setQuery, priceRange, setPriceRange }) => {
    return (
        <Form className="mb-4">
            <Row>
                <Col md={6}>
                    <Form.Control
                        type="text"
                        placeholder="Tìm kiếm theo tên sản phẩm"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </Col>
                <Col md={6}>
                    <Form.Select
                        value={priceRange}
                        onChange={(e) => setPriceRange(e.target.value)}
                    >
                        <option value="">Tất cả mức giá</option>
                        <option value="low">Dưới 500K</option>
                        <option value="mid">500K - 1 triệu</option>
                        <option value="high">Trên 1 triệu</option>
                    </Form.Select>
                </Col>
            </Row>
        </Form>
    );
};

export default SearchFilter;