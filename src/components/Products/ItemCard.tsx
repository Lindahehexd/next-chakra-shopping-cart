import { Flex, SimpleGrid } from "@chakra-ui/react";
import { items } from "./Merchants";
import CardLayout from "./CardLayout";

const ItemCard = () => {
  return (
    <Flex justify='center' my={8}> 
      <SimpleGrid columns={{ base: 1 , md: 2, lg: 3 }} spacing={3} p={2}>
        {items.map((item) => (
          <CardLayout key={item.id} id={item.id} imgSrc={item.image} name={item.name} price={item.price} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default ItemCard;
