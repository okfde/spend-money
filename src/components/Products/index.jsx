import Product from "../Product";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import formatMoney from "../../helpers/formatMoney";

function Products() {
  const items = useSelector((state) => state.product.items);
  const currentMoney = useSelector((state) => state.product.currentMoney);

  return (
    <Container fluid style={{ maxWidth: "1320px" }}>
      <header
        className="mt-3 mb-3 bg-primary text-white sticky-top py-2 d-flex justify-content-center align-items-center"
        style={{
          height: "80px",
          zIndex: 1000
        }}
        aria-labelledby="current-money-heading"
      >
        <h2
          id="current-money-heading"
          className="fs-1 fw-medium p-2 mb-0"
          aria-live="polite"
        >
          {formatMoney(currentMoney)}
        </h2>
        <span className="visually-hidden">Verfügbarer Betrag</span>
      </header>

      <section>
        <Row
          xs={1}
          md={2}
          xl={3}
          className="g-3"
          role="list"
          aria-label="Verfügbare Produkte"
        >
          {items.map((item) => (
            <Col
              key={item.id}
              role="listitem"
            >
              <Product id={item.id} />
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
}

export default Products;
