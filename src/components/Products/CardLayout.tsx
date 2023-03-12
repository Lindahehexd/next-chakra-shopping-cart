import { Image, Card, CardBody, Text, Heading, Stack, Flex, Button, useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { cartSlice } from "../../store/cartSlice";

type CardProp = {
  id: number;
  imgSrc: string;
  name: string;
  price: number;
};

const CardLayout = ({ imgSrc, name, price, id }: CardProp) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(cartSlice.actions.addItem({ id, name, price, imgSrc }));
    toast({
      title: "Product has been added to your cart.",
      status: "success",
      variant: " subtle",
      duration: 1000,
      containerStyle: {
        bg: "black",
        border: "1px solid #E5E5DC",
        color: "white",
        borderRadius: "lg",
      },
    });
  };

  return (
    <>
      <Card >
        <CardBody bg="#E5E5DC">
          <Flex justify="center">
            <Image src={imgSrc} alt="product" borderRadius="lg" />
          </Flex>
          <Stack mt="6" spacing="3">
            <Heading size="md">{name}</Heading>
          </Stack>
        </CardBody>
        <Flex justify="space-between" align="center" p={6}>
          <Text color="black" fontSize="2xl" fontWeight={700}>
            ${price}
          </Text>
          <Button bg="black" color="white" onClick={handleAddToCart} _hover={{ bg: "gray.600" }}>
            Add to Cart
          </Button>
        </Flex>
      </Card>
    </>
  );
};

export default CardLayout;
