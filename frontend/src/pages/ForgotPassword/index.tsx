import { Box, Button, Flex, Heading, Icon, Image, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text } from "@chakra-ui/react";
import { MdOutlineMail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { GoEye } from 'react-icons/go';
import { GoEyeClosed } from 'react-icons/go';
import { useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";

export function ForgotPassword() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex
      direction="column"
      h="100vh"
      bg="linear-gradient(to right, #f7971e, #f9bc22)"
      align="center"
      justify="center"
    >
      <Flex
        bg="white"
        rounded="md"
        w="30rem"
        px="3rem"
        py="4rem"
        direction="column"
        align="center"
        position="relative"
      >
        <Heading color="gray.700" fontSize="1.5rem" w="100%" textAlign="left">Esqueci minha senha</Heading>
        <Flex
          mt="1"
          fontSize="sm"
          w="100%"
        >
          <Text>Confirme o seu e-mail para continuar</Text>
        </Flex>

        <Stack spacing={4} mt="3.5rem" w="100%">
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<Icon as={MdOutlineMail} color='gray.300' />}
            />
            <Input type='email' placeholder='E-mail' />
          </InputGroup>

          <Flex
            justifyContent="flex-end"
          >
            <Button
              size="lg"
              rightIcon={<Icon fontSize="1.3rem" as={BiRightArrowAlt} />}
              transition="all 0.2s"
              colorScheme="orange"
              color="white"
              mt="4"
            >
              Continuar
            </Button>
          </Flex>
        </Stack>
      </Flex>
    </Flex>
  );
}