import { Box, Container, Heading, Text } from "@chakra-ui/react";


export default function Home() {
  return (
    <Container maxW="container.lg" height="100vh" py="section-y" padding="0" background="url('/src/assets/main_bg_image.jpg')" backgroundSize="cover" backgroundPosition="center">
        <Box 
          as="header"
          fontSize="4xl"
          fontWeight="bold"
          textAlign="center"
          mb="8"
          padding="0"
          borderBottom="1.5px solid"
          borderColor="#FFFFFF33"

        >
        <Heading
        as="h1"
        fontFamily="heading"
        fontSize="lg"
        fontWeight="bold"
        mb={4}
        textAlign="left"
        m={0}
        p="10px"
        color="white"
        >
        NewsExplorer
        </Heading>
        </Box>
    </Container>
  )
}