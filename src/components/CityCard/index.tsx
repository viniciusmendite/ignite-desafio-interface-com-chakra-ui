import { Box, Image, Flex, Heading, Text } from '@chakra-ui/react';


interface ICityCardProps {
  imageUrl: string;
  country: string;
  city: string;
  countryImageUrl: string;
}

export function CityCard({ imageUrl, country, city, countryImageUrl }: ICityCardProps) {
  return (
    <Box>
      <Image borderTopRadius="4px" objectFit="cover" src={imageUrl} alt={city} height={173} w="100%" />
      <Flex align="center" justify="space-between" py="4" px="6" bgColor="white" border="1px solid #FFDC83" borderTop="0" borderBottomRadius="4px">
        <Box>
          <Heading as="h3" fontSize="xl" fontFamily="Barlow" fontWeight="semibold">{city}</Heading>
          <Text as="span" display="block" mt="3" color="gray.300" fontFamily="Barlow" fontWeight="medium">{country}</Text>
        </Box>
        <Image src={countryImageUrl} alt={country} width={30} height={30} borderRadius="50%" />
      </Flex>
    </Box>
  );
}