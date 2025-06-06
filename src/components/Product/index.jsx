import React from "react";
import { useSelector } from "react-redux";
import { Box, Image, Text } from "@chakra-ui/react";
import ProductControls from "../ProductControls";
import formatMoney from "../../helpers/formatMoney";

function Product({ id }) {
  const item = useSelector((state) =>
    state.product.items.find((tmp) => tmp.id === id)
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
      <Text>{formatMoney(item.productPrice)}</Text>
      <ProductControls item={item} />
    </Box>
  );
}

export default Product;
