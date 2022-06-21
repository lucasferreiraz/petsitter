import { Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { ElementType } from "react";

import { BiSearch } from 'react-icons/bi';
import { FaCat } from 'react-icons/fa';
import { MdLogin } from 'react-icons/md';

interface NavItemProps {
  icon: ElementType,
  name: string,
  selected?: boolean;
}

function NavItem({ icon, name, selected }: NavItemProps) {
  return (
    <Flex
      direction="column"
      align="center"
      cursor="pointer"
      color="white"
      opacity={selected ? "1" : "0.8"}
      h="100%"
      role="group"
    >
      <Flex
        align="center"
        flex="1"
      >
        <Icon as={icon} mr="2" />
        <Text>{name}</Text>
      </Flex>
      <Box
        h="1"
        borderTopLeftRadius="10"
        borderTopRightRadius="10"
        bg="white"
        transition="width 0.2s"
        width={selected ? "100%" : "0%"}
        _groupHover={{ width: "100%" }}
      ></Box>
    </Flex>
  );
}

export function HeaderNavigation() {
  return (
    <HStack
      spacing="10"
    >
      <NavItem icon={BiSearch} selected name="Busque sitters" />
      <NavItem icon={FaCat} name="Cadastrar animal" />
      <NavItem icon={MdLogin} name="Login" />
    </HStack>
  );
}