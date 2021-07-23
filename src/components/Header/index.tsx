import { Flex, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiChevronLeft } from 'react-icons/fi';

import { LogoSvg } from '../../svg/LogoSvg';

export function Header() {
  const { asPath } = useRouter();

  return (
    <Flex position="relative" as="header" py="7" w="100%" maxW={1240} mx="auto" align="center" justify="center">
      {asPath !== '/' && (
        <Link href="/" passHref>
          <ChakraLink position="absolute" left="0" transition="filter .2s" _hover={{
            filter: 'brightness(0.8)'
          }}>
            <FiChevronLeft size={32} />
          </ChakraLink>
        </Link>
      )}
      <LogoSvg />
    </Flex>
  );
}