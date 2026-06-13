import { Container, Heading } from "@chakra-ui/react";



const SearchResults = () => {
  return (
    <Container>   
        <Heading as="h2" fontFamily="heading_2" fontSize="2xl" fontWeight="bold" color="white" mb={4}>
          Search Results
        </Heading>
    </Container>
  );
}

export default SearchResults;