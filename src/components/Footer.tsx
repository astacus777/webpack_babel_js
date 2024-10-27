
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#f8f9fa", padding: "20px 0" }}>
      <Container>
        <Row className="text-center">
          <Col>
            <h5>Follow us on social media</h5>
            <div style={{ fontSize: "1.5rem", marginTop: "10px" }}>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px", color: "#3b5998" }}>
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/p/Bw-xkczBBsF/" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px", color: "#E1306C" }}>
                <FaInstagram />
              </a>
              <a href="https://www.youtube.com/@rudolf_hahaha" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px", color: "#FF0000" }}>
                <FaYoutube />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="text-center" style={{ marginTop: "10px" }}>
          <Col>
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};









// export const Footer = () => {
// return (
//     <>
//     <div className="container-home">
//     <svg width="60" height="40" viewBox="0 0 200 200">
//         <rect
//           x="50"
//           y="20"
//           rx="20"
//           ry="20"
//           width="150"
//           height="150"
//           style={{
//             fill: "red",
//             stroke: "black",
//             strokeWidth: 5,
//             opacity: 0.5,
//           }}
//         />
//       </svg>
//       <p>all rights reserved</p>
//       </div>
//     </>
// )
// }

