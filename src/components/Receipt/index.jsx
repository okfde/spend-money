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
    <Row className="mt-3">
      <Col></Col>
      <Col>
        <div>
          <h3 className="fs-2 fw-bold">Deine Quittung</h3>

          {filtered.map((item) => (
            <Row key={item.id} className="mt-3 mb-2">
              <Col className="text-start">
                <span className="fs-6">{item.productName}</span>
              </Col>
              <Col className="text-start">
                <span>× {item.count}</span>
              </Col>
              <Col className="text-end">
                <span className="text-success">
                  {formatMoney(item.productPrice * item.count)}
                </span>
              </Col>
            </Row>
          ))}

          <hr />

          <div className="d-flex justify-content-between w-100">
            <span className="text-start fs-5 fw-bold">
              TOTAL
            </span>
            <span className="text-end text-success fs-5 fw-bold mb-4">
              {formatMoney(spendMoney)}
            </span>
          </div>
        </div>
      </Col>
      <Col></Col>
    </Row>
  );
}

export default Receipt;
