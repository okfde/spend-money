import React from "react";
import { useSelector } from "react-redux";
import { Button, Card } from "react-bootstrap";
import ProductControls from "../ProductControls";
import formatMoney from "../../helpers/formatMoney";

function Product({ id }) {
  const item = useSelector((state) =>
    state.product.items.find((tmp) => tmp.id === id)
  );
  const price = item.type === "donation" ? item.productText : formatMoney(item.productPrice);

  const controls = item.type === "donation" ? (
    <Button href="/jetzt-spenden" variant="primary">
      Jetzt spenden!
    </Button>
  ) : (
    <ProductControls item={item} />
  );

  return (
    <Card
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#EBF8FF",
        padding: "1rem",
        color: "black",
        border: "1px solid",
        alignItems: "center"
      }}
    >
      <Card.Img src={item.image} style={{ margin: "auto" }} />
      <Card.Body className="text-center">
        <Card.Title style={{ fontSize: "25px", fontWeight: 700 }}>
          {item.productName}
        </Card.Title>
        <Card.Text>{price}</Card.Text>
        {controls}
      </Card.Body>
    </Card>
  );
}

export default Product;
