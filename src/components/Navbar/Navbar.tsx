import { Button, Container, Flex, HStack, Icon, Text, Tooltip, useDisclosure } from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import CartDrawer from "./CartDrawer";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const totalQuan = useSelector((state: RootState) => state.cart.totalQuantity);

  return (
    <Container maxW="full" pos="sticky" top={0} zIndex={2} boxShadow="md" rounded="md" bg="white">
      <Flex justify="space-between" p="3" w="96%" m="auto">
        <HStack spacing="24px">
          <Text fontWeight={700}>Redux Shopping Cart</Text>
        </HStack>

        <HStack>
          <Tooltip placement="bottom" bg="blue.500">
            <Button
              style={{ width: "3rem", height: "3rem", position: "relative" }}
              bg="black"
              color="white"
              borderRadius="full"
              onClick={onOpen}
              _hover={{ bg: "gray.600" }}
            >
              <CartDrawer isOpen={isOpen} onClose={onClose} />
              <Icon boxSize={6} as={AiOutlineShoppingCart} />
              <Flex
                borderRadius="full"
                justify="center"
                align="center"
                bg="red"
                style={{
                  color: "white",
                  width: "1.5rem",
                  height: "1.5rem",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  transform: "translate(25%, 25%)",
                }}
              >
                {totalQuan}
              </Flex>
            </Button>
          </Tooltip>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
