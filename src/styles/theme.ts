import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      "400": "#47585B",
      "300": "#999999",
      "200": "#DADADA",
      "100": "#EEEEF2",
      "50": "#F5F8FA",
    },
    yellow: {
      "200": "#FFBA08",
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.400'
      },
      ".swiper-button-prev, .swiper-button-next": {
        color: 'yellow.200',
      },
      ".swiper-pagination-bullet": {
        bg: 'gray.300',
        width: '4',
        height: '4',
      },
      ".swiper-pagination-bullet-active": {
        bg: 'yellow.200'
      }
    }
  }
});