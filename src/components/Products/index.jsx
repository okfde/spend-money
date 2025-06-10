import Product from "../Product";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import formatMoney from "../../helpers/formatMoney";

function Products() {
  const items = useSelector((state) => state.product.items);
  const currentMoney = useSelector((state) => state.product.currentMoney);

  return (
    <Container fluid>
      <div
        style={{
          marginTop: "0.5rem",
          marginBottom: "1rem",
          backgroundColor: "#48BB78", // entspricht green.400
          color: "white",
          height: "80px",
          zIndex: 1000,
          opacity: 1,
          position: "sticky",
          top: "0"
        }}
      >
        <h2 style={{ fontSize: "40px", fontWeight: 500, padding: "10px" }}>
          {" "}
          {formatMoney(currentMoney)}
        </h2>
      </div>

      <Row xs={1} md={3} className="g-4">
        {items.map((item) => (
          <Col key={item.id}>
            <Product id={item.id} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
