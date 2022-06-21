import { useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { SitterCard } from "../../components/SitterCard";

import { sittersData, SittersDataProps } from '../../mock/sitters';

export function Home() {
  const [sitters, setSitters] = useState<SittersDataProps[]>([]);

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
      >
        <Flex
          bg="white"
          boxShadow='xl'
          p="7"
          borderRadius="md"
          transform="translateY(-50%)"
        >
          Filtragem...
        </Flex>

        <Flex
          mt="5"
        >
          <Box
            width="20rem"
          >
            Filtragem...
          </Box>

          <Box
            flex="1"
          >
            <Flex
              direction="column"
            >
              <Text mb="3">Mostrando 5 resultados</Text>
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
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}