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
    if (value > maximum && currentMoney > 0) {
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
        variant="danger"
        disabled={!isSellable}
        style={{ width: "80px", height: "40px", marginInlineStart: "16px" }}
        onClick={() => handleChange(Number(count) - 1)}
      >
        –
      </Button>

      <Form.Control
        type="number"
        style={{
          textAlign: "center",
          width: "80px",
          height: "40px"
        }}
        value={count}
        onChange={(e) => handleChange(Number(e.target.value))}
      />

      <Button
        variant="success"
        disabled={!isBuyable}
        style={{ width: "80px", height: "40px", marginInlineEnd: "16px" }}
        onClick={() => handleChange(Number(count) + 1)}
      >
        +
      </Button>
    </Container>
  );
}

export default ProductControls;
