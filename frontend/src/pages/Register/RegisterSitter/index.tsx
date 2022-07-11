import { Box, Button, ButtonGroup, Flex, Heading, Icon, Input, InputGroup, InputLeftElement, SlideFade, Stack, Text, Textarea } from "@chakra-ui/react";
import { AiOutlineIdcard, AiOutlinePhone } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { MdOutlineMail } from "react-icons/md";
import { useRegister } from "../../../hooks/useRegister";

export function RegisterSitter() {
  const { formStep, nextStep, prevStep } = useRegister();

  return (
    <Flex
      flex="0.5"
      bg="white"
      py="4rem"
      px="8rem"
      display={formStep !== "registerSitter" ? "none" : "inherit"}
    >
      <SlideFade
        offsetY='25%'
        in={formStep === "registerSitter"}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
        }}
      >
        <Heading>
          Seja bem vindo(a), <br/>
          <Text fontSize="1.5rem">Adicione suas informações</Text>
        </Heading>

        <Box
          flex="1"
        >
          <Stack spacing={8} mt="3.5rem" w="100%">
            <Text fontWeight="bold">Fotos</Text>

            <Text fontWeight="bold">Fale um pouco sobre você</Text>
            <Textarea placeholder='Adicione um texto aqui...' resize="none" />
          </Stack>
        </Box>

        <ButtonGroup
          variant='outline'
          spacing='4'
          display="flex"
          justifyContent="flex-end"
        >
          <Button size="lg" colorScheme='red' onClick={prevStep}>Voltar</Button>
          <Button size="lg" variant='solid' colorScheme='orange' onClick={nextStep}>Continuar</Button>
        </ButtonGroup>
      </SlideFade>
    </Flex>
  );
}