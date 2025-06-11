import Product from "../Product";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import formatMoney from "../../helpers/formatMoney";

function Products() {
  const items = useSelector((state) => state.product.items);
  const currentMoney = useSelector((state) => state.product.currentMoney);

  return (
    <Container fluid style={{ maxWidth: "1400px" }}>
      <div
        className="mt-3 mb-3 bg-primary text-white sticky-top py-2"
        style={{
          height: "80px",
          zIndex: 1000
        }}
      >
        <h2 className="fs-1 fw-medium p-2">
          {" "}
          {formatMoney(currentMoney)}
        </h2>
      </div>

      <Row xs={1} md={2} xl={3} className="g-3">
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
