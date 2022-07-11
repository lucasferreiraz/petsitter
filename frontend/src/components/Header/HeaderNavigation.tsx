import { Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { ElementType } from "react";

import { BiSearch } from 'react-icons/bi';
import { FaCat } from 'react-icons/fa';
import { MdLogin } from 'react-icons/md';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth";

interface HeaderNavigationProps {
  selected: "" | "search" | "addPet" | "login";
}
interface NavItemProps {
  icon: ElementType,
  name: string,
  selected?: boolean;
  routeNavigation: string;
}

function NavItem({ icon, name, selected, routeNavigation }: NavItemProps) {
  const navigate = useNavigate();
  const { isAuthenticated, signOut } = useAuth();

  return (
    <Flex
      direction="column"
      align="center"
      cursor="pointer"
      color="white"
      opacity={selected ? "1" : "0.8"}
      h="100%"
      role="group"
      onClick={() => {
        if (isAuthenticated && name === "Sair") {
          signOut();
        } else {
          navigate(routeNavigation);
        }
      }}
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

export function HeaderNavigation({ selected }: HeaderNavigationProps) {
  const { isAuthenticated, userInfo } = useAuth();

  return (
    <HStack
      spacing="10"
    >
      <NavItem
        icon={BiSearch}
        selected={selected === "search"}
        name="Busque sitters"
        routeNavigation="/home"
      />
      <NavItem
        icon={FaCat}
        selected={selected === "addPet"}
        name={userInfo.profileType === "cuidador" ? "Ver contratos" : "Cadastrar animal"}
        routeNavigation={userInfo.profileType === "cuidador" ? "/contratos/lista" : "/"}
      />
      <NavItem
        icon={MdLogin}
        selected={selected === "login"}
        name={isAuthenticated ? 'Sair' : 'Login'}
        routeNavigation="/login"
      />
    </HStack>
  );
}