import React from "react";
import { useSelector } from "react-redux";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import ProductControls from "../ProductControls";
import formatMoney from "../../helpers/formatMoney";

function Product({ id }) {
  const item = useSelector((state) =>
    state.product.items.find((tmp) => tmp.id === id)
  );
  const price = item.type === "donation" ? item.productText : formatMoney(item.productPrice);

  const controls = item.type === "donation" ? (
    <Button href="/jetzt-spenden" colorScheme="blue">
      Jetzt spenden!
    </Button>
  ) : (
    <ProductControls item={item} />
  );

  return (
    <Box
      w="100%"
      h="100%"
      bg="#EBF8FF"
      p={4}
      color="black"
      borderWidth="1px"
      alignItems="center"
    >
      <Image src={item.image} m="auto" />
      <Text fontSize={25} fontWeight={700}>
        {item.productName}
      </Text>
      <Text>{price}</Text>
      {controls}
    </Box>
  );
}

export default Product;
