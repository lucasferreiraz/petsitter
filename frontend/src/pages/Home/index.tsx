import { useEffect, useState } from "react";
import { Box, Flex, Text, VStack, InputGroup, InputLeftElement, Input, Icon, Divider, Select, Button, Spinner, HStack, Center } from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { SitterCard } from "../../components/SitterCard";

import { sittersData, SittersDataProps } from '../../mock/sitters';
import { Filter } from "./Filter";

import { CgWorkAlt } from 'react-icons/cg'
import { FiMapPin } from 'react-icons/fi';
import { IoMdCalendar } from 'react-icons/io';

export function Home() {
  const [searchIsLoading, setSearchIsLoading] = useState(false);
  const [sitters, setSitters] = useState<SittersDataProps[]>([]);

  async function search() {
    setSearchIsLoading(true);
    setTimeout(() => {
      setSearchIsLoading(false);
    }, 600);
  }

  useEffect(() => {
    setSitters(sittersData);
  }, []);

  return (
    <Flex direction="column">
      <Header />

      <Box
        w="100%"
        maxWidth={1480}
        mx="auto"
        px="10"
      >
        <HStack
          bg="white"
          boxShadow='xl'
          p="3"
          borderRadius="md"
          transform="translateY(-50%)"
        >
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<Icon as={CgWorkAlt} />}
            />
            <Select variant='outline' border="none" placeholder='Serviço' pl="5" />
          </InputGroup>
          <Center height='10'>
            <Divider orientation='vertical' />
          </Center>
          <InputGroup
          >
            <InputLeftElement
              pointerEvents='none'
              children={<Icon as={FiMapPin} />}
            />
            <Input border="none" type='text' placeholder='Endereço' />
          </InputGroup>
          <Center height='10'>
            <Divider orientation='vertical' />
          </Center>
          <InputGroup
            display="flex"
            alignItems="center"
          >
            <InputLeftElement
              pointerEvents='none'
              children={<Icon as={IoMdCalendar} />}
            />
            <Input border="none" type='text' placeholder='Data' />
          </InputGroup>
          <Button w="16rem" colorScheme="orange" onClick={search} display="flex" justifyContent="center" alignItems="center">
            {searchIsLoading ? <Box><Spinner size='sm' /></Box> : 'Buscar'}
          </Button>
        </HStack>

        <Flex
          mt="5"
        >
          <Box
            width="20rem"
            pr="10"
          >
            <Filter />
          </Box>

          <Box
            flex="1"
          >
            <Text mb="3">Mostrando 5 resultados</Text>
            <VStack
              align="flex-start"
              spacing="5"
            >
              {sitters.map(sitter => (
                <SitterCard
                  key={sitter.name}
                  name={sitter.name}
                  address={sitter.address}
                  price={sitter.price}
                  description={sitter.description}
                  rating={sitter.rating}
                  tags={sitter.tags}
                />
              ))}
            </VStack>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}