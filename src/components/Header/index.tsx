import { Flex } from '@chakra-ui/react';
import { LogoSvg } from '../../svg/LogoSvg';

export function Header() {
  return (
    <Flex as="header" py="7" justify="center">
      <LogoSvg />
    </Flex>
  );
}