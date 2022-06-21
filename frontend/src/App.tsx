import { ChakraProvider } from '@chakra-ui/react';

import { theme } from './styles/theme';

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        Petsitter
      </div>
    </ChakraProvider>
  );
}
