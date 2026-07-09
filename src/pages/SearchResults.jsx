import { Box, Button, Container, For, Heading, Text, Wrap } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import NewsCard from "../components/NewsCard";
import BackButton from "../components/BackButton";

const SearchResults = () => {
  const location = useLocation();

  const articles = location.state?.articles ?? [];

  return (
    <Box bg="bg.page" minH="100vh" py="section-y">
      <Container maxW="7xl">
       <BackButton />

        <Heading
          as="h1"
          color="text.heading"
          fontSize={{ base: "3xl", md: "4xl" }}
          fontFamily="heading"
          textAlign="center"
          mb={12}
        >
          Search Results
        </Heading>

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
    </Box>
  );
};

export default SearchResults;