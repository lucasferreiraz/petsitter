import { Avatar, Box, Button, Divider, Flex, Icon, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdLocationPin } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { Rating } from "../../components/Rating";
import { api } from "../../services/api";

export function Sitter() {
  const [userInfo, setUserInfo] = useState<any>({});
  const navigate = useNavigate();
  
  const useQuery = () => new URLSearchParams(useLocation().search);
  let query = useQuery();

  useEffect(() => {
    const userId = query.get('id');
    api.get(`/users/${userId}`).then(response => {
      setUserInfo(response.data);
    });
  }, []);

  return (
    <Flex direction="column">
      <Header navItemSelected="" minified />
      
      <Flex direction="row" mx="20rem" my="5rem">
        <Flex direction="column" flex="1.7" mr="5">

          <Flex direction="row">
            <Avatar size="xl" mr="5" />
            <Flex direction="column">
              <Text fontSize="1.3rem" fontWeight="medium">{userInfo.name}</Text>
              <Flex fontSize="1.1rem" color="gray.400" mb="3" align="center">
                <Icon as={MdLocationPin} />
                {userInfo.address}
              </Flex>
              <Rating rating={3}/>
            </Flex>
          </Flex>

          <Box mt="2rem" bg="white" p="1.5rem" rounded="lg" shadow="md">
            <Text fontSize="1.3rem" fontWeight="medium">Sobre</Text>
            <Divider my="1" />
            <Text color="gray.500" textAlign="justify">
              {userInfo.description}
            </Text>
          </Box>

          <Box mt="2rem" bg="white" p="1.5rem" rounded="lg" shadow="md">
            <Text fontSize="1.3rem" fontWeight="medium">Como é a hospedagem</Text>
            <Divider my="1" />
            <Text color="gray.500" textAlign="justify">
              Visita ou hospedagem.
            </Text>
          </Box>

          <Box mt="2rem" bg="white" p="1.5rem" rounded="lg" shadow="md">
            <Text fontSize="1.3rem" fontWeight="medium">Preferências</Text>
            <Divider my="1" />
            <Text color="gray.500" textAlign="justify">
              Tenho mais habilidades em lidar com gatos e cachorros!
            </Text>
          </Box>

        </Flex>
        <Flex direction="column" flex="1">
          
          <Box bg="white" p="1.5rem" rounded="lg" shadow="md">
            <Flex align="center" justify="space-between">
              <Text fontSize="1.3rem" fontWeight="medium">Serviços</Text>
              <Text>{userInfo.price}</Text>
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
              Segunda | 15:00 - 18:00 <br />
              Terça | 12:00 - 18:00 <br />
              Quarta | 9:00 - 12:00 <br />
              Quinta | 9:00 - 18:00 <br />
              Sexta | 9:00 - 18:00 <br />
            </Text>
          </Box>

        </Flex>
      </Flex>
    </Flex>
  );
}