import { Box, Container, Heading,  Input, Button } from "@chakra-ui/react";
import bgImage from "../assets/main_bg_image.jpg";
import { useForm } from "react-hook-form"
import SearchForm from "../components/SearchForm";


export default function Home() {
  const { register, handleSubmit } = useForm();

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
      <Box
        as="main"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="calc(100% - 80px)"
      >
        <Heading as="h2" fontFamily="heading_2" fontSize="2xl" fontWeight="bold" color="white" mb={4}>
          Welcome to NewsExplorer
        </Heading>
        <Heading as="h3" fontFamily="heading_2" fontSize="sm" fontWeight="normal" color="white">
          Explore the latest news from around the world.
        </Heading>
        <SearchForm />
      </Box>
    </Container>
  );
}