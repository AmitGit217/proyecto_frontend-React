import { Container, Heading, Wrap, For } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const SearchResults = () => {
  const location = useLocation();

  const articles = location.state?.articles ?? [];

  return (
    <Container>
      <Heading
        as="h2"
        fontFamily="heading_2"
        fontSize="2xl"
        fontWeight="bold"
        color="white"
        textAlign="center"
        mb={45}
        mt={0}
        pt={25}
      >
        Search Results
      </Heading>

      <Wrap  justify="center" >
        <For each={articles} fallback={<div>No results</div>}>
          {(article, index) => (
            <NewsCard
              key={article.url || index}
              title={article.title}
              description={article.description}
              url={article.url}
              urlToImage={article.image}
            />
          )}
        </For>
      </Wrap>
    </Container>
  );
};

export default SearchResults;