import { Box, Button, Flex, Heading, HStack, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { Header } from "../../components/Header";

interface TableProps {
  id: string,
  ownerInfo: string,
  petInfo: string,
  date: string,
  price: number,
  status?: 'Aceito' | 'Em análise' | 'Recusado',
}

const tableTopInfo: TableProps[] = [
  {
    id: '2781',
    ownerInfo: 'Igor',
    petInfo: 'Frajola - Banho',
    date: '01/02/2022',
    price: 50
  }
];

const tableBottomInfo: TableProps[] = [
  {
    id: '3145',
    ownerInfo: 'Ana Luisa',
    petInfo: 'Pernalonga - Banho',
    date: '10/07/2022',
    price: 50,
    status: 'Aceito'
  },
  {
    id: '3146',
    ownerInfo: 'Kaiky',
    petInfo: 'Jubileu - Medicação',
    date: '11/07/2022',
    price: 120,
    status: 'Em análise'
  },
  {
    id: '3147',
    ownerInfo: 'Kalline',
    petInfo: 'Scooby - Adestramento',
    date: '12/07/2022',
    price: 100,
    status: 'Aceito'
  },
  {
    id: '3148',
    ownerInfo: 'Lucas',
    petInfo: 'Amarelinho - Medicação',
    date: '13/07/2022',
    price: 60,
    status: 'Recusado'
  },
  {
    id: '3149',
    ownerInfo: 'Maria',
    petInfo: 'Luffy - Passeio',
    date: '14/07/2022',
    price: 40,
    status: 'Aceito'
  },
];

export function ContractsList() {
  return (
    <Flex direction="column">
      <Header navItemSelected="" minified />
      
      <Box
        w="100%"
        maxWidth={1480}
        mx="auto"
        px="10"
        mt="2rem"
      >
        <Heading>Contratos</Heading>
        <Text>Você tem 5 contratos no momento.</Text>

        <HStack spacing={4} mt="2rem">
          <InputGroup w="10rem">
            <Input type='tel' placeholder='Pesquisa' />
            <InputRightElement children={<BiSearch />} />
          </InputGroup>

          <Button rightIcon={<AiOutlineMenu />}>
            Filtros
          </Button>
        </HStack>

        <TableContainer bg="#FFFCCE">
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th>#</Th>
                <Th>Proprietário</Th>
                <Th>Informações do PET</Th>
                <Th>Data</Th>
                <Th>Preço</Th>
                <Th isNumeric>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {tableTopInfo.map(info => (
                <Tr key={info.id}>
                  <Td>{info.id}</Td>
                  <Td>{info.ownerInfo}</Td>
                  <Td>{info.petInfo}</Td>
                  <Td>{info.date}</Td>
                  <Td>{info.price}</Td>
                  <Td>Em análise</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>

        <TableContainer mt="5rem">
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th>#</Th>
                <Th>Proprietário</Th>
                <Th>Informações do PET</Th>
                <Th>Data</Th>
                <Th>Preço</Th>
                <Th isNumeric>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {tableBottomInfo.map(info => (
                <Tr key={info.id}>
                  <Td>{info.id}</Td>
                  <Td>{info.ownerInfo}</Td>
                  <Td>{info.petInfo}</Td>
                  <Td>{info.date}</Td>
                  <Td>{info.price}</Td>
                  <Td>{info.status}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Flex>
  );
}