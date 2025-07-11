import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { MessageCircle } from "react-feather";

const MessengerChat = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            {/* Nút Chat nổi */}
            <Button
                variant="primary"
                style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    borderRadius: "50%",
                    width: "60px",
                    height: "60px",
                    zIndex: 9999,
                }}
                onClick={() => setShow(true)}
            >
                <MessageCircle />
            </Button>

            {/* Khung Chat */}
            <Offcanvas show={show} onHide={() => setShow(false)} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Chat với chúng tôi</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {/* Chatbot giả lập hoặc nhúng Facebook Messenger tại đây */}
                    <p>Xin chào! Bạn cần hỗ trợ gì không?</p>
                    <p><small>(Tính năng chat đang phát triển...)</small></p>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default MessengerChat;
