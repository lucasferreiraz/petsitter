import { Avatar, Box, Flex, HStack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Rating } from "../Rating";

interface TagProps {
  title: string;
}
function Tag({ title }: TagProps) {
  return (
    <Box
      py="2"
      px="4"
      bg="gray.50"
      boxShadow="xs"
      rounded="3xl"
    >
      <Text
        fontSize="sm"
        fontWeight="bold"
      >
        {title}
      </Text>
    </Box>
  );
}

interface SitterCardProps {
  name: string;
  address: string;
  price: string;
  description: string;
  tags: string[];
  rating: number;
}

export function SitterCard(props: SitterCardProps) {
  const navigate = useNavigate();

  return (
    <Flex
      onClick={() => navigate('/sitter')}
      direction="column"
      p="5"
      borderRadius="md"
      bg="white"
      boxShadow="lg"
      cursor="pointer"
      transition="transform 0.2s"
      _hover={{
        transform: "translateY(-5px)",
      }}
    >
      <Flex
        align="center"
        justify="space-between"
      >
        <Flex>
          <Avatar size='lg' />
          <Flex
            direction="column"
            justify="center"
            ml="5"
          >
            <Text
              fontWeight="bold"
              fontSize="1.2rem"
            >
              {props.name}
            </Text>
            <Text
              color="gray.500"
            >
              {props.address}
            </Text>
          </Flex>
        </Flex>
        <Text
          fontWeight="medium"
          fontSize="1.4rem"
        >
          {props.price}
        </Text>
      </Flex>
      <Text my="6" color="gray.400">
        {props.description}
      </Text>
      <Flex
        justify="space-between"
      >
        <HStack spacing="3">
          {props.tags.map(tag => <Tag key={tag} title={tag} />)}
        </HStack>
        <Rating rating={props.rating} />
      </Flex>
    </Flex>
  );
}