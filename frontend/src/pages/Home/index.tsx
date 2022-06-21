import { useEffect, useState } from "react";
import { Box, Flex, Text, VStack, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb } from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { SitterCard } from "../../components/SitterCard";

import { sittersData, SittersDataProps } from '../../mock/sitters';
import { Filter } from "./Filter";

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
        px="10"
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