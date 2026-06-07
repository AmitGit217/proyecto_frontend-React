import { Box, Container, Heading } from "@chakra-ui/react";
import bgImage from "../assets/main_bg_image.jpg";

export default function Home() {
  return (
    <Container
      maxW="container.lg"
      height="100vh"
      py="section-y"
      p={0}
      backgroundImage={`
        linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
        url('${bgImage}')
      `}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundAttachment="fixed"
    >
      <Box
        as="header"
        fontSize="4xl"
        fontWeight="bold"
        textAlign="center"
        mb={8}
        borderBottom="1.5px solid"
        borderColor="#ffffff60"
      >
        <Heading
          as="h1"
          fontFamily="heading"
          fontSize="lg"
          fontWeight="bold"
          m={0}
          p="10px"
          color="white"
          textAlign="left"
        >
          NewsExplorer
        </Heading>
      </Box>
    </Container>
  );
}