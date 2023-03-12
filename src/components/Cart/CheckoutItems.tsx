import { increase, decrease, remove, deleteAll } from "../../store/cartSlice";
import { Button, Flex, Text, Image, Icon } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { FaTrash } from "react-icons/fa";

const CheckoutItems = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleIncrease = (id: string) => {
    dispatch(increase(id));
  };

  const handleDecrease = (id: string) => {
    dispatch(decrease(id));
  };

  const hadleRemove = (id: string) => {
    dispatch(remove(id));
  };

  const handleDeleteAll = () => {
    dispatch(deleteAll());
  };

  return (
    <>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <Flex key={item.id} border="1px solid black" p={2} mb={4} fontSize={{ base: "sm" }}>
            <Flex w="35%">
              <Image src={item.imgSrc} alt={item.name} />
            </Flex>

            <Flex w="100%" align="center" my="2" justify="space-between">
              <Text ml={3} w={["74px", "100px"]}>
                {item.name}
              </Text>

              <Flex>
                <Button
                  rounded="full"
                  size="xs"
                  fontWeight={800}
                  color="white"
                  _hover={{ bg: "gray.600" }}
                  bg="black"
                  onClick={() => handleDecrease(item.id)}
                >
                  -
                </Button>

                <Text textAlign="center" w="20px">
                  {" "}
                  {item.quantity}{" "}
                </Text>
                <Button
                  rounded="full"
                  size="xs"
                  color="white"
                  bg="black"
                  _hover={{ bg: "gray.600" }}
                  onClick={() => handleIncrease(item.id)}
                >
                  +
                </Button>
              </Flex>

              <Text w="70px" textAlign="center">
                ${item.price * item.quantity}
              </Text>

              <Icon
                as={FaTrash}
                boxSize={22}
                color="black"
                cursor="pointer"
                mr={2}
                onClick={() => hadleRemove(item.id)}
              >
                Remove
              </Icon>
            </Flex>
          </Flex>
        ))
      ) : (
        <Text fontSize='lg' fontWeight={600}> Your Cart Is Empty </Text>
      )}

      {cartItems.length > 0 && (
        <Flex justify="space-between">
          <Text mt={2} fontWeight={600}>
            Total Cost: {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toLocaleString("en-US")}{" "}
            NTD
          </Text>
          <Button mt={2} onClick={handleDeleteAll} _hover={{ bg: "gray.600" }} bg="black" color="white">
            Delete All
          </Button>
        </Flex>
      )}
    </>
  );
};

export default CheckoutItems;
