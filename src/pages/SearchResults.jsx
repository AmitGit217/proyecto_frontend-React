import { Box, Button, Container, For, Heading, Text, Wrap } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import NewsCard from "../components/NewsCard";
import BackButton from "../components/BackButton";
import JumpUpButton from "../components/JumpUpButton";

const SearchResults = () => {
  const location = useLocation();

  const articles = location.state?.articles ?? [];

  return (
    <Box  minH="100vh" py="section-y">
      <Container maxW="7xl">
       
      <Box display="flex" alignItems="center" mb={6} justifyContent="space-between"  alignItems="center">
          <BackButton />
           <Heading
          as="h1"
          color="white"
          fontSize={{ base: "3xl", md: "4xl" }}
          fontFamily="heading"
          textAlign="center"
         margin="0 auto"
        >
          Search Results
        </Heading>
        </Box>
       

        <Wrap justify="center" gap={6}>
          <For
            each={articles}
            fallback={
              <Text color="text.muted" fontSize="lg">
                No results found.
              </Text>
            }
          >
            {(article, index) => (
              <NewsCard
                key={article.url ?? index}
                id={index}
                title={article.title}
                description={article.description}
                url={article.url}
                urlToImage={article.image}
              />
            )}
          </For>
        </Wrap>
      </Container>
      <JumpUpButton />
    </Box>
  );
};

export default SearchResults;