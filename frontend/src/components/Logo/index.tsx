import { Flex, Icon, Text } from "@chakra-ui/react";

import { IoMdPaw } from 'react-icons/io';

export function Logo() {
  return (
    <Flex
      align="center"
      fontSize="1.5rem"
      color="white"
    >
      <Icon as={IoMdPaw} mr="1" />
      <Text fontWeight="500">Petsitter</Text>
    </Flex>
  );
}