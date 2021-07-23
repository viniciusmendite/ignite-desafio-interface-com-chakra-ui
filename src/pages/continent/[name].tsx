import { Box, Flex, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import { FiInfo } from 'react-icons/fi';
import { CityCard } from "../../components/CityCard";

export default function Continent() {
  return (
    <Box as="main" pb="10">
      <Box bgImage="/images/europa.jpg" bgSize="cover" bgPos="center" h={500} align="flex-end" pb="16">
        <Flex w="100%" maxW={1240} mx="auto" justify={['center', 'center', 'center', 'unset']} align={['center', 'center', 'center', 'flex-end']} h="100%" px={['4', '4', '4', '4', '0']}>
          <Heading as="h1" color="gray.50" fontSize={["3xl", "5xl"]} fontWeight="semibold">
            Europa
          </Heading>
        </Flex>
      </Box>

      <Box w="100%" maxW={1240} mx="auto" px={['4', '4', '4', '4', '0']}>
        <Flex flexDir={['column', 'column', 'column', 'row']} mt={["6","6","6","20"]} justify="space-between" align="center">
          <Text maxW={['unset', 'unset', 'unset', 600]} fontSize={["sm","2xl"]} textAlign="justify">
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa
            geralmente divide-se da Ásia a leste pela divisória de águas dos
            montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro
            a sudeste
          </Text>
          <Flex justify="space-between" w="100%" pl={["0", "0", "0", "16"]} mt={["4", "4", "4", "0"]}>
            <Flex flexDir="column" align="center">
              <Text as="span" color="yellow.200" fontSize={["2xl","5xl"]} fontWeight="semibold">
                50
              </Text>
              <Text as="span" fontSize={["lg","2xl"]} fontWeight="semibold">
                países
              </Text>
            </Flex>
            <Flex flexDir="column" align="center">
              <Text as="span" color="yellow.200" fontSize={["2xl","5xl"]} fontWeight="semibold">
                60
              </Text>
              <Text as="span" fontSize={["lg","2xl"]} fontWeight="semibold">
                línguas
              </Text>
            </Flex>
            <Flex flexDir="column" align="center">
              <Text as="span" color="yellow.200" fontSize={["2xl","5xl"]} fontWeight="semibold">
                27
              </Text>
              <Flex align="center">
                <Text as="span" fontSize={["lg","2xl"]} fontWeight="semibold" mr="1.5">
                  cidades +10
                </Text>
                <FiInfo size={16} color="#b0b0b0" />
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Box mt="20">
          <Heading fontWeight="medium" fontSize={["2xl","4xl"]}>Cidades +100</Heading>

          <SimpleGrid gap="12" minChildWidth="256px" mt="10">
            <CityCard
              imageUrl="/images/londres.jpg"
              city="Londres"
              country="Reino Unido"
              countryImageUrl="/images/reino-unido.png"
            />
            <CityCard
              imageUrl="/images/paris.png"
              city="Paris"
              country="França"
              countryImageUrl="/images/franca.png"
            />
            <CityCard
              imageUrl="/images/roma.png"
              city="Roma"
              country="Itália"
              countryImageUrl="/images/italia.png"
            />
            <CityCard
              imageUrl="/images/praga.png"
              city="Praga"
              country="República Tcheca"
              countryImageUrl="/images/republica-tcheca.png"
            />
            <CityCard
              imageUrl="/images/amsterda.png"
              city="Amsterdã"
              country="Holanda"
              countryImageUrl="/images/holanda.png"
            />
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
}