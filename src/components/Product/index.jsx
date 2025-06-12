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
    <Button href="/spenden/?pk_campaign=spahn-shop" variant="primary" target="_blank" rel="noopener noreferrer">
      Jetzt spenden!
    </Button>
  ) : (
    <ProductControls item={item} />
  );

  return (
    <Card
      className="w-100 h-100 bg-blue-100 p-0 text-dark d-flex flex-column"
      aria-labelledby={`product-title-${item.id}`}
    >
      <Card.Img
        src={item.image}
        className="mx-auto object-fit-contain"
        style={{maxHeight: "300px", margin: "-15px"}}
        loading="lazy"
        alt={item.alternativeText}
      />
      <Card.Body className="text-center pt-0 d-flex flex-column flex-grow-1">
        <Card.Title
          id={`product-title-${item.id}`}
          className="fs-5 fw-bold lh-base"
          style={{ hyphens: "none" }}
        >
          {item.productName}
        </Card.Title>
        <Card.Text
          className="fs-5"
          aria-label={`Preis: ${price}`}
        >
          {price}
        </Card.Text>
        <section
          className="mt-auto mb-2"
        >
          {controls}
        </section>
      </Card.Body>
    </Card>
  );
}

export default Product;
