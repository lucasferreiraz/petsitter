import { Box, Button, ButtonGroup, Flex, Heading, Icon, Input, InputGroup, InputLeftElement, InputRightElement, ScaleFade, SlideFade, Stack } from "@chakra-ui/react";
import { AiOutlineFieldNumber, AiOutlineHome } from "react-icons/ai";
import { BiDotsHorizontalRounded, BiMap } from "react-icons/bi";
import { FaCity } from "react-icons/fa";
import { FiMap } from "react-icons/fi";
import { MdLocationCity } from "react-icons/md";
import { useRegister } from "../../../hooks/useRegister";
import InputMask from "react-input-mask";

export function Address() {
  const { formStep, nextStep, prevStep } = useRegister();

  return (
    <Flex
      flex="0.5"
      bg="white"
      py="4rem"
      px="8rem"
      display={formStep !== "address" ? "none" : "inherit"}
    >
      <SlideFade
        offsetY='-25%'
        in={formStep === "address"}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
        }}
      >
        <Heading
          fontSize="1.5rem"
        >
          Adicione um endereço
        </Heading>

        <Box
          flex="1"
        >
          <Stack spacing={5} mt="3.3rem" w="100%">
            <InputGroup size="lg">
              <InputLeftElement
                pointerEvents='none'
                children={<Icon as={FiMap} color='gray.300' />}
              />
              <Input as={InputMask} mask="99999-999" placeholder='Cep' />
            </InputGroup>

            <InputGroup size="lg">
              <InputLeftElement
                pointerEvents='none'
                children={<Icon as={FaCity} color='gray.300' />}
              />
              <Input type='text' placeholder='Estado' />
            </InputGroup>

            <InputGroup size="lg">
              <InputGroup size="lg">
                <InputLeftElement
                  pointerEvents='none'
                  children={<Icon as={MdLocationCity} color='gray.300' />}
                />
                <Input type='text' placeholder='Cidade' />
              </InputGroup>

              <InputGroup size="lg" ml="5">
                <InputLeftElement
                  pointerEvents='none'
                  children={<Icon as={MdLocationCity} color='gray.300' />}
                />
                <Input type='text' placeholder='Bairro' />
              </InputGroup>
            </InputGroup>

            <InputGroup size="lg">
              <InputLeftElement
                pointerEvents='none'
                children={<Icon as={BiMap} color='gray.300' />}
              />
              <Input type='text' placeholder='Logradouro' />
            </InputGroup>

            <InputGroup size="lg">
              <InputLeftElement
                pointerEvents='none'
                children={<Icon as={AiOutlineFieldNumber} color='gray.300' />}
              />
              <Input type='number' placeholder='Número' />
            </InputGroup>

            <InputGroup size="lg">
              <InputLeftElement
                pointerEvents='none'
                children={<Icon as={BiDotsHorizontalRounded} color='gray.300' />}
              />
              <Input type='text' placeholder='Complemento' />
            </InputGroup>
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