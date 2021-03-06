import { Box, Button, ButtonGroup, Flex, Heading, Icon, Input, InputGroup, InputLeftElement, InputRightElement, ScaleFade, SlideFade, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineIdcard, AiOutlinePhone } from "react-icons/ai";
import { GoEye, GoEyeClosed, GoPerson } from "react-icons/go";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useRegister } from "../../../hooks/useRegister";
import InputMask from "react-input-mask";

export function MainInformation() {
  const [showPassword, setShowPassword] = useState(false);

  const { formStep, nextStep, prevStep } = useRegister();

  return (
    <Flex
      flex="0.5"
      bg="white"
      py="4rem"
      px="8rem"
      display={formStep !== "mainInformation" ? "none" : "inherit"}
    >
      <SlideFade
        offsetY='25%'
        in={formStep === "mainInformation"}
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
          Cadastro
        </Heading>

        <Box
          flex="1"
        >
          <Stack spacing={5} mt="3.3rem" w="100%">
            <InputGroup size="lg">
              <InputLeftElement
                pointerEvents='none'
                children={<Icon as={GoPerson} color='gray.300' />}
              />
              <Input type='text' placeholder='Nome completo' />
            </InputGroup>

            <InputGroup size="lg">
              <InputLeftElement
                pointerEvents='none'
                children={<Icon as={MdOutlineMail} color='gray.300' />}
              />
              <Input type='email' placeholder='E-mail' />
            </InputGroup>

            <InputGroup size="lg">
              <InputLeftElement
                pointerEvents='none'
                children={<Icon as={AiOutlineIdcard} color='gray.300' />}
              />
              <Input as={InputMask} mask="999.999.999-99" placeholder='Cpf' />
            </InputGroup>

            <InputGroup size="lg">
              <InputLeftElement
                pointerEvents='none'
                children={<Icon as={AiOutlinePhone} color='gray.300' />}
              />
              <Input as={InputMask} mask="(99)99999-9999" placeholder='Telefone' />
            </InputGroup>

            <InputGroup size="lg">
              <InputLeftElement
                pointerEvents='none'
                children={<Icon as={RiLockPasswordLine} color="gray.300" />}
              />
              <Input type={showPassword ? 'text' : 'password'} placeholder='Senha' />
              <InputRightElement
                cursor="pointer"
                onClick={() => setShowPassword(prevState => !prevState)}
                children={
                  <Icon as={showPassword ? GoEye : GoEyeClosed} color='gray.300' />
                }
              />
            </InputGroup>

            <InputGroup size="lg">
              <InputLeftElement
                pointerEvents='none'
                children={<Icon as={RiLockPasswordLine} color="gray.300" />}
              />
              <Input type={showPassword ? 'text' : 'password'} placeholder='Confirmar senha' />
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