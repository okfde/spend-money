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
    <Card className="w-100 h-100 bg-light p-0 text-dark d-flex align-items-center" >
      <Card.Img src={item.image} className="mx-auto object-fit-contain" style={{ maxHeight: "400px" }} />
      <Card.Body className="text-center pt-0">
        <Card.Title className="fs-4 fw-bold">
          {item.productName}
        </Card.Title>
        <Card.Text className="fs-4">{price}</Card.Text>
        {controls}
      </Card.Body>
    </Card>
  );
}

export default Product;
