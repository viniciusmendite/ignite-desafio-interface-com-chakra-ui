import { Flex, Heading, Text, Box, Image } from '@chakra-ui/react';
import Link from 'next/link';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function Home() {
  return (
    <Box as="main" pb="10">
      <Flex bgImage="/images/background.jpg" bgSize="cover" bgPos="center" w="100%" py="20">
        <Flex position="relative" w="100%" maxW={1240} mx="auto">
          <Flex flexDir="column">
            <Heading as="h1" color="gray.50" fontSize="4xl" fontWeight="medium">
              5 continentes, <br /> infinitas possibilidades.
            </Heading>
            <Text color="gray.200" fontSize="xl" mt="5" maxW={524}>
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Flex>
          <Box position="absolute" right="0">
            <Image src="/images/airplane.svg" alt="airplane" />
          </Box>
        </Flex>
      </Flex>

      <Box w="100%" maxW={1240} mx="auto" mt="20">
        <Flex justify="space-between">
          <Box>
            <Flex flexDir="column" align="center">
              <Image src="/images/cocktail.svg" alt="cocktail" width={20} height={20} />
              <Text as="span" mt="6" fontSize="2xl" fontWeight="semibold">vida noturna</Text>
            </Flex>
          </Box>
          <Box>
            <Flex flexDir="column" align="center">
              <Image src="/images/surf.svg" alt="surf" width={20} height={20} />
              <Text as="span" mt="6" fontSize="2xl" fontWeight="semibold">praia</Text>
            </Flex>
          </Box>
          <Box>
            <Flex flexDir="column" align="center">
              <Image src="/images/building.svg" alt="building" width={20} height={20} />
              <Text as="span" mt="6" fontSize="2xl" fontWeight="semibold">moderno</Text>
            </Flex>
          </Box>
          <Box>
            <Flex flexDir="column" align="center">
              <Image src="/images/museum.svg" alt="museum" width={20} height={20} />
              <Text as="span" mt="6" fontSize="2xl" fontWeight="semibold">clássico</Text>
            </Flex>
          </Box>
          <Box>
            <Flex flexDir="column" align="center">
              <Image src="/images/earth.svg" alt="earth" width={20} height={20} />
              <Text as="span" mt="6" fontSize="2xl" fontWeight="semibold">e mais...</Text>
            </Flex>
          </Box>
        </Flex>

        <Box>
          <Flex flexDir="column" mt="20" justify="center" align="center">
            <Box h={0.5} w={90} background="gray.400" />
            <Heading textAlign="center" mt="12" fontSize="4xl" fontWeight="medium">
              Vamos nessa? <br />
              Então escolha seu continente
            </Heading>
          </Flex>

          <Box bg="#000" mt="12">
            <Swiper
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <Link href="/continent/europa" passHref>
                  <Flex as="a" flexDir="column" align="center" bgImage="/images/continent-image.jpg" bgSize="cover" bgPosition="center" py="44" _hover={{
                    cursor: 'pointer',
                  }}>
                    <Text as="strong" fontSize="5xl" fontWeight="bold" color="gray.50">
                      Europa
                    </Text>
                    <Text as="span" color="gray.200" fontSize="2xl" fontWeight="bold">
                      O continente mais antigo.
                    </Text>
                  </Flex>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="/continent/europa" passHref>
                  <Flex as="a" flexDir="column" align="center" bgImage="/images/continent-image.jpg" bgSize="cover" bgPosition="center" py="44" _hover={{
                    cursor: 'pointer',
                  }}>
                    <Text as="strong" fontSize="5xl" fontWeight="bold" color="gray.50">
                      Europa
                    </Text>
                    <Text as="span" color="gray.200" fontSize="2xl" fontWeight="bold">
                      O continente mais antigo.
                    </Text>
                  </Flex>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="/continent/europa" passHref>
                  <Flex as="a" flexDir="column" align="center" bgImage="/images/continent-image.jpg" bgSize="cover" bgPosition="center" py="44" _hover={{
                    cursor: 'pointer',
                  }}>
                    <Text as="strong" fontSize="5xl" fontWeight="bold" color="gray.50">
                      Europa
                    </Text>
                    <Text as="span" color="gray.200" fontSize="2xl" fontWeight="bold">
                      O continente mais antigo.
                    </Text>
                  </Flex>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="/continent/europa" passHref>
                  <Flex as="a" flexDir="column" align="center" bgImage="/images/continent-image.jpg" bgSize="cover" bgPosition="center" py="44" _hover={{
                    cursor: 'pointer',
                  }}>
                    <Text as="strong" fontSize="5xl" fontWeight="bold" color="gray.50">
                      Europa
                    </Text>
                    <Text as="span" color="gray.200" fontSize="2xl" fontWeight="bold">
                      O continente mais antigo.
                    </Text>
                  </Flex>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="/continent/europa" passHref>
                  <Flex as="a" flexDir="column" align="center" bgImage="/images/continent-image.jpg" bgSize="cover" bgPosition="center" py="44" _hover={{
                    cursor: 'pointer',
                  }}>
                    <Text as="strong" fontSize="5xl" fontWeight="bold" color="gray.50">
                      Europa
                    </Text>
                    <Text as="span" color="gray.200" fontSize="2xl" fontWeight="bold">
                      O continente mais antigo.
                    </Text>
                  </Flex>
                </Link>
              </SwiperSlide>
            </Swiper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}