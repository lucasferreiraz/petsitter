import { Box, Button, Flex, Heading, Icon, Image, Input, InputGroup, InputLeftElement, InputRightElement, Spinner, Stack, Text } from "@chakra-ui/react";
import { MdOutlineMail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { GoEye } from 'react-icons/go';
import { GoEyeClosed } from 'react-icons/go';
import { useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import { toast } from 'react-toastify';

export function Login() {
  const navigate = useNavigate();
  const { signIn, loading, changeLoading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
    changeLoading(true);
    await signIn({ email, password }).then(response => {
      if (response !== "success") {
        toast.dismiss();
        toast.error(response);
      }
      changeLoading(false);
    });
  }

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
        mt="6rem"
      >
        <Image
          src="/images/login-image.png"
          position="absolute"
          w="13rem"
          top="-10.9rem"
          right="1rem"
        />

        <Heading color="gray.700" fontSize="1.5rem" w="100%" textAlign="left">Faça seu login</Heading>
        <Flex
          mt="1"
          fontSize="sm"
          w="100%"
        >
          <Text>Não possui uma conta?</Text>
          <Box
            ml="0.2rem"
            as='button'
            color="orange"
            _hover={{ textDecoration: 'underline' }}
            onClick={() => navigate('/registrar')}
          >
            Registre-se aqui
          </Box>
        </Flex>

        <Stack spacing={4} mt="3.5rem" w="100%">
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<Icon as={MdOutlineMail} color='gray.300' />}
            />
            <Input type='email' placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)} />
          </InputGroup>

          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<Icon as={RiLockPasswordLine} color="gray.300" />}
            />
            <Input type={showPassword ? 'text' : 'password'} placeholder='Senha' value={password} onChange={e => setPassword(e.target.value)} />
            <InputRightElement
              cursor="pointer"
              onClick={() => setShowPassword(prevState => !prevState)}
              children={
                <Icon as={showPassword ? GoEye : GoEyeClosed} color='gray.300' />
              }
            />
          </InputGroup>
          <Box transform="translateY(-50%)">
            <Button fontSize="0.9rem" fontWeight="normal" variant='link' onClick={() => navigate('/recuperarSenha')}>Esqueci minha senha</Button>
          </Box>

          <Flex
            justifyContent="flex-end"
          >
            <Button
              size="lg"
              rightIcon={
                loading ? <Spinner /> : <Icon fontSize="1.3rem" as={BiRightArrowAlt} />
              }
              transition="all 0.2s"
              colorScheme="orange"
              color="white"
              mt="4"
              w="9rem"
              onClick={() => handleLogin()}
            >
              Continuar
            </Button>
          </Flex>
        </Stack>
      </Flex>
    </Flex>
  );
}
