import { Box, Center } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export default function Loading() {
  return (
    <Center>
      <Box
        w="40px"
        h="40px"
        border="4px solid"
        borderColor="brand.100"
        borderTopColor="brand.500"
        borderRadius="full"
        animation={`${spin} 0.8s linear infinite`}
      />
    </Center>
  );
}