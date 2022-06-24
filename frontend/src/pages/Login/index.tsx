import { Flex } from "@chakra-ui/react";
import { Header } from "../../components/Header";

export function Login() {
  return (
    <Flex direction="column">
      <Header navItemSelected="login" />
    </Flex>
  );
}