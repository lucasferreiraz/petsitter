import { Box, Flex } from "@chakra-ui/react";
import { Logo } from "../Logo";

export function Header() {
  return (
    <Box
      as="header"
      bg="orange.main"
    >
      <Flex
        w="100%"
        maxWidth={1480}
        mx="auto"
        align="center"
      >
        <Logo />
      </Flex>
    </Box>
  );
}