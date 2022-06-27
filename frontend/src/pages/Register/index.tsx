import { Box, Button, ButtonGroup, Flex, Heading, Radio, RadioGroup, Stack } from "@chakra-ui/react";

export function Register() {
  return (
    <Flex
      w="100vw"
      h="100vh"
    >
      <Flex
        flex="1"
        align="center"
        justify="center"
      >
        <Heading>IMAGE</Heading>
      </Flex>
      <Flex
        flex="0.5"
        bg="white"
        py="4rem"
        px="8rem"
        direction="column"
        justify="space-between"
      >
        <Heading>
          Qual será o seu tipo de <br />
          perfil no Pet Sitter?
        </Heading>

        <Box
          flex="1"
          mt="2rem"
        >
          <RadioGroup defaultValue='proprietario'>
            <Stack spacing={5} direction='column'>
              <Box
                bg="orange.main"
                p="2rem"
                fontWeight="bold"
                color="white"
                cursor="pointer"
                rounded="md"
              >
                <Radio size='lg' value='proprietario'>
                  Proprietário
                </Radio>
              </Box>
              <Box
                bg="orange.main"
                p="2rem"
                fontWeight="bold"
                color="white"
                cursor="pointer"
                rounded="md"
              >
                <Radio size='lg' value='cuidador'>
                  Cuidador
                </Radio>
              </Box>
            </Stack>
          </RadioGroup>
        </Box>

        <ButtonGroup
          variant='outline'
          spacing='4'
          display="flex"
          justifyContent="flex-end"
        >
          <Button colorScheme='red'>Cancelar</Button>
          <Button variant='solid' colorScheme='orange'>Continuar</Button>
        </ButtonGroup>
      </Flex>
    </Flex>
  );
}