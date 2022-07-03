import { Box, Button, ButtonGroup, Flex, Heading, Radio, RadioGroup, SlideFade, Stack, Text } from "@chakra-ui/react";
import { useRegister } from "../../../hooks/useRegister";

export function SelectProfileType() {
  const { formStep, nextStep, profileType, setProfileType } = useRegister();

  return (
    <Flex
      flex="0.5"
      bg="white"
      py="4rem"
      px="8rem"
      display={formStep !== "selectProfileType" ? "none" : "inherit"}
    >
      <SlideFade
        offsetY='-25%'
        in={formStep === "selectProfileType"}
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
          Qual será o seu tipo de perfil <br />
          no Pet Sitter?
        </Heading>

        <Box
          flex="1"
          mt="4rem"
        >
          <RadioGroup value={profileType}>
            <Stack spacing={5} direction='column'>
              <Box
                bg={profileType === "proprietario" ? "orange.main" : "gray.100"}
                p="1.5rem"
                fontWeight="bold"
                color={profileType === "proprietario" ? "white" : "gray.500"}
                cursor={profileType === "proprietario" ? "initial" : "pointer"}
                rounded="md"
                onClick={() => setProfileType('proprietario')}
                transition="all 0.2s"
              >
                <Radio
                  size='lg'
                  borderColor={profileType === "proprietario" ? "white" : "gray.500"}
                  colorScheme="orange"
                  value='proprietario'
                >
                  Proprietário
                </Radio>
                <Text
                  fontWeight="normal"
                  ml="1.75rem"
                >
                  Irá em busca de um cuidador para os seus Pets.
                </Text>
              </Box>
              <Box
                bg={profileType === "cuidador" ? "orange.main" : "gray.100"}
                p="1.5rem"
                fontWeight="bold"
                color={profileType === "cuidador" ? "white" : "gray.500"}
                cursor={profileType === "cuidador" ? "initial" : "pointer"}
                rounded="md"
                onClick={() => setProfileType('cuidador')}
                transition="all 0.2s"
              >
                <Radio
                  size='lg'
                  borderColor={profileType === "cuidador" ? "white" : "gray.500"}
                  colorScheme="orange"
                  value='cuidador'
                >
                  Cuidador
                </Radio>
                <Text
                  fontWeight="normal"
                  ml="1.75rem"
                >
                  Irá em busca de Pets para poder cuidar.
                </Text>
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
          <Button size="lg" colorScheme='blackAlpha'>Cancelar</Button>
          <Button size="lg" variant='solid' colorScheme='orange' onClick={nextStep}>Continuar</Button>
        </ButtonGroup>
      </SlideFade>
    </Flex>
  );
}