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
    <Row>
      <Col></Col>
      <Col>
        <div className="text-center">
          <h3 style={{ fontSize: "35px", fontWeight: 700 }}>Deine Quittung</h3>

          {filtered.map((item) => (
            <Row key={item.id} className="mb-2">
              <Col>
                <span style={{ fontSize: "15px" }}>{item.productName}</span>
              </Col>
              <Col>
                <span>x {item.count}</span>
              </Col>
              <Col>
                <span style={{ color: "#2F855A" }}>
                  {formatMoney(item.productPrice * item.count)}
                </span>
              </Col>
            </Row>
          ))}

          <br />
          <hr />

          <div className="d-flex justify-content-between">
            <span style={{ fontSize: "20px", fontWeight: 700, marginLeft: "1rem" }}>
              TOTAL
            </span>
            <span style={{ color: "#38A169", fontSize: "20px", marginRight: "1.25rem", marginBottom: "1.25rem" }}>
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
