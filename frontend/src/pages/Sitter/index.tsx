import { Avatar, Box, Button, Divider, Flex, Icon, Text } from "@chakra-ui/react";
import { MdLocationPin } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { Rating } from "../../components/Rating";

export function Sitter() {
  const navigate = useNavigate();

  return (
    <Flex direction="column">
      <Header navItemSelected="" minified />
      
      <Flex direction="row" mx="20rem" my="5rem">
        <Flex direction="column" flex="1.7" mr="5">

          <Flex direction="row">
            <Avatar size="xl" mr="5" />
            <Flex direction="column">
              <Text fontSize="1.3rem" fontWeight="medium">Lucas Ferreira</Text>
              <Flex fontSize="1.1rem" color="gray.400" mb="3" align="center">
                <Icon as={MdLocationPin} />
                Londres, Nova York
              </Flex>
              <Rating rating={3}/>
            </Flex>
          </Flex>

          <Box mt="2rem" bg="white" p="1.5rem" rounded="lg" shadow="md">
            <Text fontSize="1.3rem" fontWeight="medium">Sobre</Text>
            <Divider my="1" />
            <Text color="gray.500" textAlign="justify">
              Desde sempre gostei muito de animais, meu tio me escolhia quando viajava e deixava seu cachorro comigo. Sempre gostei de dar essa atenção especial a eles, é o que eu me sinto bem em fazer. O que eles precisam é de atenção e carinho e em troca recebemos o amor incondicional deles. Seu companheiro vai ser muito bem recebido e amado.
            </Text>
          </Box>

          <Box mt="2rem" bg="white" p="1.5rem" rounded="lg" shadow="md">
            <Text fontSize="1.3rem" fontWeight="medium">Como é a hospedagem</Text>
            <Divider my="1" />
            <Text color="gray.500" textAlign="justify">
              Aa
            </Text>
          </Box>

          <Box mt="2rem" bg="white" p="1.5rem" rounded="lg" shadow="md">
            <Text fontSize="1.3rem" fontWeight="medium">Preferências</Text>
            <Divider my="1" />
            <Text color="gray.500" textAlign="justify">
              Aa
            </Text>
          </Box>

        </Flex>
        <Flex direction="column" flex="1">
          
          <Box bg="white" p="1.5rem" rounded="lg" shadow="md">
            <Flex align="center" justify="space-between">
              <Text fontSize="1.3rem" fontWeight="medium">Serviços</Text>
              <Text>R$ 69,99</Text>
            </Flex>
            <Divider my="1" />
            <Flex direction="column" mt="1.2rem">
              <Button colorScheme="orange" rounded="2xl">Iniciar conversa</Button>
              <Button colorScheme="orange" mt="1.2rem" rounded="2xl" onClick={() => navigate('/contrato')}>Reservar</Button>
            </Flex>
          </Box>

          <Box mt="2rem" bg="white" p="1.5rem" rounded="lg" shadow="md">
            <Text fontSize="1.3rem" fontWeight="medium">Disponibilidade</Text>
            <Divider my="1" />
            <Text color="gray.500" textAlign="justify">
              DATA...
            </Text>
          </Box>

        </Flex>
      </Flex>
    </Flex>
  );
}