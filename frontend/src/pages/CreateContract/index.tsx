import { Avatar, Box, Button, ButtonGroup, Center, Divider, Flex, Heading, HStack, Icon, Input, Select, Text, Textarea } from "@chakra-ui/react";
import { BiMoney } from "react-icons/bi";
import { CgArrowRight } from "react-icons/cg";
import { MdLocationPin } from "react-icons/md";

import { Header } from "../../components/Header";
import { Rating } from "../../components/Rating";

export function CreateContract() {
  return (
    <Flex direction="column">
      <Header navItemSelected="" minified />
      
      <Flex direction="column" mx="20rem" my="5rem">
        <Heading
          fontSize="1.5rem"
        >
          Agendamento com: Lucas Ferreira
        </Heading>

        <Flex direction="row" align="center" mt="1rem" justify="space-between">
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
          <Flex direction="column">
          <Text fontSize="1.3rem" fontWeight="medium">Serviço</Text>
            <Select my="3">
              <option>Tipo de serviço</option>
            </Select>
            <Flex align="center" fontSize="1.1rem">
              <Icon as={BiMoney} mr="2" />
              R$ 60,00/dia
            </Flex>
          </Flex>
        </Flex>

        <Divider my="1rem" />

        <Text fontWeight="medium" fontSize="1.1rem">Período</Text>
        <Flex align="center">
          <Box>
            <Text>Data de início</Text>
            <Input type="text" />
          </Box>
          <Box mt="1.5rem" mx="0.8rem">
            <Icon as={CgArrowRight} fontSize="1.3rem" />
          </Box>
          <Box>
            <Text>Data de fim</Text>
            <Input type="text" />
          </Box>
          <Center mx="1rem" height='50px'>
            <Divider orientation='vertical' />
          </Center>
          <Box>
            <Text>Horário de entrada</Text>
            <Input type="text" />
          </Box>
          <Box mt="1.5rem" mx="0.8rem">
            <Icon as={CgArrowRight} fontSize="1.3rem" />
          </Box>
          <Box>
            <Text>Horário de saída</Text>
            <Input type="text" />
          </Box>
        </Flex>

        <Text mt="1.5rem" fontWeight="medium" fontSize="1.1rem">Selecione o pet</Text>
        <Select>
          <option>Ralph</option>
          <option>Billy</option>
          <option>Bartô</option>
        </Select>

        <Text mt="1.5rem" fontWeight="medium" fontSize="1.1rem">Selecione o endereço</Text>
        <Select>
          <option>Rua Guilherme Pessoa, 558</option>
          <option>Rua Rofolfo Batista, 378</option>
        </Select>

        <Text mt="1.5rem" fontWeight="medium" fontSize="1.1rem">Adicione informações</Text>
        <Textarea resize="none" />

        <ButtonGroup justifyContent="flex-end" mt="1.5rem" spacing='6'>
          <Button>Cancelar</Button>
          <Button colorScheme="orange">Agendar</Button>
        </ButtonGroup>
      </Flex>
    </Flex>
  );
}