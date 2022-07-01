import { Flex, Heading } from "@chakra-ui/react";
import { SelectProfileType } from "./SelectProfileType";
import { MainInformation } from "./MainInformation";
import { Address } from "./Address";
import { RegisterPet } from "./RegisterPet";
import { RegisterSitter } from "./RegisterSitter";
import { RegisterProvider } from "../../hooks/useRegister";

export function Register() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      overflow="hidden"
    >
      <Flex
        flex="1"
        align="center"
        justify="center"
      >
        <Heading>IMAGE</Heading>
      </Flex>
      
      <RegisterProvider>
        <SelectProfileType />
        <MainInformation />
        <Address />
        <RegisterPet />
        <RegisterSitter />
      </RegisterProvider>
    </Flex>
  );
}