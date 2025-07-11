import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import { Navbar, Nav, Container } from "react-bootstrap";

const AppRoutes = () => {
    return (
        <Router>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">EduCommerce AI</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Trang chủ</Nav.Link>
                            <Nav.Link as={Link} to="/favorites">Yêu thích</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container className="mt-4">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/favorites" element={<FavoritesPage />} />
                </Routes>
            </Container>
        </Router>
    );
};

export default AppRoutes;