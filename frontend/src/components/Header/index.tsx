import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { Logo } from "../Logo";
import { HeaderNavigation } from "./HeaderNavigation";

export function Header() {
  return (
    <Box
      as="header"
      bg="linear-gradient(to right, #f7971e, #f9bc22)"
      px="10"
    >
      <Flex
        w="100%"
        maxWidth={1480}
        mx="auto"
        justify="space-between"
        h="14"
        borderBottom="1px solid #ffffff75"
      >
        <Logo />

        <HeaderNavigation />
      </Flex>

      <Flex
        w="100%"
        maxWidth={1480}
        mx="auto"
        align="flex-end"
        justify="space-between"
        color="white"
      >
        <Heading
          my="8rem"
          fontWeight="500"
          fontSize="2.7rem"
        >
          Procure um <b>cuidador</b> <br />
          para o seu Pet!
        </Heading>

        <Image
          src="/images/header-image.png"
          height="20rem"
        />
      </Flex>
    </Box>
  );
}