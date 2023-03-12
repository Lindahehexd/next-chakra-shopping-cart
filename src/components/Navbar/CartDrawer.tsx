import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Button,
  DrawerFooter,
} from "@chakra-ui/react";
import CheckoutItems from "../Cart/CheckoutItems";

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CartDrawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
      <DrawerOverlay />
      <DrawerContent bg="#E5E5DC">
        <DrawerCloseButton />
        <DrawerHeader fontWeight={700}>SHOPPING CART</DrawerHeader>
        <DrawerBody>
          <CheckoutItems />
        </DrawerBody>
        <DrawerFooter alignContent="center">
          <Button w="100%" mb={8} color="white" bg="black" _hover={{ bg: "gray.600" }}>
            Checkout
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
