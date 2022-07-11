import { Avatar, Box, Button, ButtonGroup, Center, Divider, Flex, Heading, HStack, Icon, Input, Select, Text, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { BiMoney } from "react-icons/bi";
import { CgArrowRight } from "react-icons/cg";
import { MdLocationPin } from "react-icons/md";
import InputMask from 'react-input-mask';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Header } from "../../components/Header";
import { Rating } from "../../components/Rating";
import { api } from "../../services/api";

export function CreateContract() {
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [pet, setPet] = useState('');
  const [address, setAddress] = useState('');
  const [moreInformation, setMoreInformation] = useState('');

  async function handleSubmit() {
    const data = {
      startDate,
      endDate,
      startTime,
      endTime,
      pet,
      address,
      moreInformation,
      price: 50,
    };

    await api.post('/contracts', data);

    toast.success('Contrato enviado!');
  }

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
              <option>Adestramento</option>
              <option>Passeio</option>
              <option>Medicação</option>
              <option>Banho</option>
              <option>Hospedagem</option>
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
            <Input as={InputMask} mask="99/99/9999" value={startDate} onChange={e => setStartDate(e.target.value)} />
          </Box>
          <Box mt="1.5rem" mx="0.8rem">
            <Icon as={CgArrowRight} fontSize="1.3rem" />
          </Box>
          <Box>
            <Text>Data de fim</Text>
            <Input as={InputMask} mask="99/99/9999" value={endDate} onChange={e => setEndDate(e.target.value)} />
          </Box>
          <Center mx="1rem" height='50px'>
            <Divider orientation='vertical' />
          </Center>
          <Box>
            <Text>Horário de entrada</Text>
            <Input as={InputMask} mask="99:99" value={startTime} onChange={e => setStartTime(e.target.value)} />
          </Box>
          <Box mt="1.5rem" mx="0.8rem">
            <Icon as={CgArrowRight} fontSize="1.3rem" />
          </Box>
          <Box>
            <Text>Horário de saída</Text>
            <Input as={InputMask} mask="99:99" value={endTime} onChange={e => setEndTime(e.target.value)} />
          </Box>
        </Flex>

        <Text mt="1.5rem" fontWeight="medium" fontSize="1.1rem">Selecione o pet</Text>
        <Select onChange={e => setPet(e.target.value)}>
          <option value="Ralph">Ralph</option>
          <option value="Billy">Billy</option>
          <option value="Bartô">Bartô</option>
        </Select>

        <Text mt="1.5rem" fontWeight="medium" fontSize="1.1rem">Selecione o endereço</Text>
        <Select onChange={e => setAddress(e.target.value)}>
          <option value="Rua Guilherme Pessoa, 558">Rua Guilherme Pessoa, 558</option>
          <option value="Rua Rofolfo Batista, 378">Rua Rofolfo Batista, 378</option>
        </Select>

        <Text mt="1.5rem" fontWeight="medium" fontSize="1.1rem">Adicione informações</Text>
        <Textarea resize="none" value={moreInformation} onChange={e => setMoreInformation(e.target.value)} />

        <ButtonGroup justifyContent="flex-end" mt="1.5rem" spacing='6'>
          <Button onClick={() => navigate('/home')}>Cancelar</Button>
          <Button colorScheme="orange" onClick={handleSubmit}>Agendar</Button>
        </ButtonGroup>
      </Flex>
    </Flex>
  );
}