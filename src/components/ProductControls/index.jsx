import React, { useEffect, useState } from "react";
import { Box, Button, Input } from "@chakra-ui/react";
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
    <Box alignItems="center" m="auto">
      <Button
        colorScheme="red"
        isDisabled={!isSellable}
        width="80px"
        height="40px"
        ms={4}
        onClick={() => handleChange(Number(count) - 1)}
      >
        –
      </Button>

      <Input
        type="number"
        textAlign="center"
        value={count}
        onChange={(e) => handleChange(Number(e.target.value))}
        width="80px"
        height="40px"
      />

      <Button
        colorScheme="green"
        isDisabled={!isBuyable}
        width="80px"
        height="40px"
        me={4}
        onClick={() => handleChange(Number(count) + 1)}
      >
        +
      </Button>
    </Box>
  );
}

export default ProductControls;
