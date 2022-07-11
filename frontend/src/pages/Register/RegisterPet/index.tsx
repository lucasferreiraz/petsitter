import { Box, Button, ButtonGroup, Flex, Heading, Icon, Input, InputGroup, InputLeftElement, Select, SlideFade, Stack, Text } from "@chakra-ui/react";
import { AiOutlineIdcard, AiOutlinePhone } from "react-icons/ai";
import { FaBabyCarriage, FaCat, FaDog } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { MdOutlineMail } from "react-icons/md";
import { useRegister } from "../../../hooks/useRegister";

export function RegisterPet() {
  const { formStep, nextStep, prevStep } = useRegister();

  return (
    <Flex
      flex="0.5"
      bg="white"
      py="4rem"
      px="8rem"
      display={formStep !== "registerPet" ? "none" : "inherit"}
    >
      <SlideFade
        offsetY='25%'
        in={formStep === "registerPet"}
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
          <Text fontSize="1.5rem">Cadastre o seu Pet</Text>
        </Heading>

        <Box
          flex="1"
        >
          <Stack spacing={8} mt="3.5rem" w="100%">
            <Text fontWeight="bold">Informações do animal</Text>
            <InputGroup size="lg">
              <InputLeftElement
                pointerEvents='none'
                children={<Icon as={FaDog} color='gray.300' />}
              />
              <Input type='text' placeholder='Nome' />
            </InputGroup>

            <InputGroup size="lg">
              <Select placeholder='Tamanho'>
                <option value='pequeno'>Pequeno</option>
                <option value='pequeno'>Médio</option>
                <option value='pequeno'>Grande</option>
              </Select>
            </InputGroup>

            <InputGroup size="lg">
              <InputLeftElement
                pointerEvents='none'
                children={<Icon as={FaBabyCarriage} color='gray.300' />}
              />
              <Input type='number' placeholder='Idade' />
            </InputGroup>

            <InputGroup size="lg">
              <InputLeftElement
                pointerEvents='none'
                children={<Icon as={FaCat} color='gray.300' />}
              />
              <Input type='text' placeholder='Espécie' />
            </InputGroup>

            <Text fontWeight="bold">Fotos</Text>

            <Text fontWeight="bold">Endereço</Text>
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