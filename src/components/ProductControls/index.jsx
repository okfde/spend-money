import React, { useEffect, useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateCount } from "../../redux/Product/productSlice";
import controlSellable from "../../helpers/controlSellable";

function ProductControls({ item }) {
  const currentMoney = useSelector((state) => state.product.currentMoney);
  const dispatch = useDispatch();

  const [count, setCount] = useState(item.count);
  const [isBuyable, setIsBuyable] = useState(true);
  const [isSellable, setIsSellable] = useState(false);

  let maximumBuy = Math.floor(currentMoney / item.productPrice);
  let maximum = Number(count) + Number(maximumBuy);

  useEffect(() => {
    dispatch(updateCount({ id: item.id, count }));
    setIsSellable(controlSellable(count));
  }, [count, dispatch, item.id]);

  useEffect(() => {
    setIsBuyable(item.productPrice <= currentMoney);
  }, [currentMoney, item.productPrice]);

  const handleChange = (value) => {
    if (value > maximum) {
      setCount(maximum);
    } else if (value < 0) {
      setCount(0);
    } else if (currentMoney === 0 && value < count) {
      setCount(value);
    } else {
      setCount(value);
    }
  };

  return (
    <Container className="d-flex justify-content-center">
      <Button
        variant="secondary"
        disabled={!isSellable}
        className="mx-1"
        style={{ width: "80px", height: "40px", opacity: !isSellable ? "0.3" : "1"}}
        onClick={() => handleChange(Number(count) - 1)}
        aria-label={`${item.productName} entfernen`}
        aria-disabled={!isSellable}
      >
        –
      </Button>

      <Form.Control
        type="number"
        className="text-center mx-1"
        style={{ width: "80px", height: "40px"}}
        value={count}
        onChange={(e) => handleChange(Number(e.target.value))}
        aria-label={`Anzahl von "${item.productName}"`}
        aria-valuemin="0"
        aria-valuemax={maximum}
        aria-valuenow={count}
        min="0"
        max={maximum}
        id={`count-input-${item.id}`}
      />

      <Button
        variant="primary"
        disabled={!isBuyable}
        className="mx-1"
        style={{ width: "80px", height: "40px", opacity: !isBuyable ? "0.3" : "1"}}
        onClick={() => handleChange(Number(count) + 1)}
        aria-label={`${item.productName} hinzufügen`}
        aria-disabled={!isBuyable}
      >
        +
      </Button>
    </Container>
  );
}

export default ProductControls;
