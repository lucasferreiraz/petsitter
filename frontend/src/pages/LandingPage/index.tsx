import { Box, Button, Flex, HStack, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { CgInstagram } from "react-icons/cg";

import { Header } from "../../components/Header";
import { Logo } from "../../components/Logo";

export function LandingPage() {
  return (
    <Flex direction="column" bg="white">
      <Header navItemSelected="" minified />

      <Flex
        w="100%"
        maxWidth={1440}
        h="37rem"
        mx="auto"
        mt="2rem"
        justify="space-between"
        bgColor="#FFFCCE"
        bgImage="url('/images/hero-background.png')"
        bgSize="50rem"
        rounded="5rem"
        overflow="hidden"
      >
        <Box flex="1" pt="4rem" pl="4rem" pb="4rem">
          <Text
            fontWeight="bold"
            fontSize="4rem"
            lineHeight="60px"
            m=""
          >
            O melhor <br />
            cuidado <br />
            para seu <br />
            <Text
              fontSize="4.5rem"
              color="#12A7E6"
            >
              melhor amigo
            </Text>
          </Text>

          <Text
            fontSize="1.5rem"
            mt="1.5rem"
            mb="3rem"
            textAlign="justify"
          >
            Está esperando o quê para deixar seu pet mais <br /> feliz? Aqui você encontra o cuidado que seu <br /> pet merece!
          </Text>

          <Button
            color="black"
            bg="orange.main"
            size="lg"
            px="3rem"
            rounded="5rem"
          >
            Agendar
          </Button>
        </Box>
        <Box flex="1">
          <Image
            transform="translateY(10%)"
            src="/images/hero.png"
            h="110%"
          />
        </Box>
      </Flex>

      <Box
        w="100%"
        maxWidth={1400}
        mx="auto"
        mt="3rem"
      >
        <Text
          fontSize="1.5rem"
          fontWeight="bold"
        >
          Serviços mais populares
        </Text>

        <Flex
          mt="2rem"
          justify="space-between"
        >
          <VStack
            spacing="1rem"
            cursor="pointer"
            transition="transform 0.2s"
            _hover={{
              transform: "translateY(-5px)",
            }}
          >
            <Image src="/images/banho.png" />
            <Text color="orange.main" fontSize="1.8rem">Banho</Text>
          </VStack>
          <VStack
            spacing="1rem"
            cursor="pointer"
            transition="transform 0.2s"
            _hover={{
              transform: "translateY(-5px)",
            }}
          >
            <Image src="/images/passeio.png" />
            <Text color="orange.main" fontSize="1.8rem">Passeio</Text>
          </VStack>
          <VStack
            spacing="1rem"
            cursor="pointer"
            transition="transform 0.2s"
            _hover={{
              transform: "translateY(-5px)",
            }}
          >
            <Image src="/images/adestramento.png" />
            <Text color="orange.main" fontSize="1.8rem">Adestramento</Text>
          </VStack>
          <VStack
            spacing="1rem"
            cursor="pointer"
            transition="transform 0.2s"
            _hover={{
              transform: "translateY(-5px)",
            }}
          >
            <Image src="/images/medicacao.png" />
            <Text color="orange.main" fontSize="1.8rem">Medicação</Text>
          </VStack>
        </Flex>

        <Text
          fontSize="1.5rem"
          fontWeight="bold"
          mt="3rem"
          mb="0.5rem"
        >
          Quem somos
        </Text>
        <Box
          bgColor="#FFFCCE"
          rounded="2.5rem"
          fontSize="1.5rem"
          p="2.5rem"
        >
          Um e-commerce criado pela tech coders com a finalidade de melhorar a qualidade de vida dos pets e tornar a vida dos tutores mais prática. Unimos um profissional qualificado aos proprietários pelo tempo necessário!
        </Box>
      </Box>

      <Box
        mt="6rem"
        bg="linear-gradient(to right, #f7971e, #f9bc22)"
        px="2rem"
      >
        <Flex
          w="100%"
          maxWidth={1480}
          mx="auto"
          justify="space-between"
          align="center"
          py="1rem"
        >
          <Logo />

          <Text
            color="white"
            fontSize="1.2rem"
          >
            © 2022 PetSitter | 4002-8922
          </Text>

          <Icon as={CgInstagram} fontSize="1.8rem" color="white" />
        </Flex>
      </Box>
    </Flex>
  );
}