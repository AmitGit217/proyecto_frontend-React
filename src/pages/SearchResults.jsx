import { Box, Button, Container, For, Heading, Text, Wrap } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import NewsCard from "../components/NewsCard";
import BackButton from "../components/BackButton";
import JumpUpButton from "../components/JumpUpButton";
import { useEffect, useState } from "react";
import { fetchNextPage } from "../api";
import Loading from "../components/Loading";

const SearchResults = () => {
  const location = useLocation();
  const [articles, setArticles] = useState(location.state?.articles || []);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
  function handleScroll() {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (
      scrollTop + windowHeight >= documentHeight - 100 &&
      !loading 
    ) {
      loadMoreArticles();
    }
  }

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, [loading]);



const loadMoreArticles = async () => {
  setLoading(true);

  const newArticles = await fetchNextPage();

  setArticles(prev => {
    const existingUrls = new Set(prev.map(article => article.url));

    const uniqueArticles = newArticles.filter(
      article => !existingUrls.has(article.url)
    );

    return [...prev, ...uniqueArticles];
  });

  setLoading(false);
};
  return (
    <Box  minH="100vh" py="section-y">
      <Container maxW="7xl" display="flex" flexDirection="column" alignItems="center" px="section-x">
       
      <Box display="flex"  alignItems="center" mb={6} justifyContent="space-between" w="90%"  alignItems="center">
          <BackButton clearLocalStorage={true} />
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
        {loading && (
          <Loading />
        )}
      </Container>
      <JumpUpButton />
    </Box>
  );
};

export default SearchResults;