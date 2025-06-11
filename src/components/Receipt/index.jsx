import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import formatMoney from "../../helpers/formatMoney";

function Receipt() {
  const items = useSelector((state) => state.product.items);
  const filtered = items.filter((item) => item.count > 0);
  let spendMoney = 0;
  
  filtered.forEach((item) => {
    spendMoney += item.productPrice * item.count;
  });

  if (filtered.length === 0) {
    return null;
  }

  return (
    <Container className="mt-4 mb-5">
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6} xl={5}>
          <h3 className="fs-2 fw-bold mb-4">Deine Quittung</h3>

          {filtered.map((item) => (
            <Row key={item.id} className="py-2">
              <Col xs={6} className="text-start">
                <span className="fs-6">{item.productName}</span>
              </Col>
              <Col xs={2} className="text-start">
                <span>× {item.count}</span>
              </Col>
              <Col xs={4} className="text-end">
                <span className="text-primary">
                  {formatMoney(item.productPrice * item.count)}
                </span>
              </Col>
            </Row>
          ))}

          <Row className="mt-4 pt-3 border-top">
            <Col xs={6} className="text-start">
              <span className="fs-5 fw-bold">Summe</span>
            </Col>
            <Col xs={6} className="text-end">
              <span className="text-primary fs-5 fw-bold">
                {formatMoney(spendMoney)}
              </span>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Receipt;
