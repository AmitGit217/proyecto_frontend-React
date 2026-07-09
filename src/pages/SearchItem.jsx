import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useContext } from "react";
import { ArticleContext } from "../context/ArticleContext";
import BackButton from "../components/BackButton";

export default function SearchItem() {
  const { selectedArticle } = useContext(ArticleContext);

  if (!selectedArticle) {
    return (
      <Box
        minH="100vh"
        bg="bg.page"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <VStack gap={4}>
          <Heading color="text.heading">
            No article selected
          </Heading>

          <Text color="text.muted">
            Go back and choose an article.
          </Text>
        </VStack>
      </Box>
    );
  }

  const publishedDate = selectedArticle.publishedAt
    ? new Date(selectedArticle.publishedAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <Box display="flex" bg="bg.page" minH="100vh" py="section-y" alignItems="center" justifyContent="center">
      <Container maxW="4xl" h="100vh"  px="section-x" maxW="500px">
        <Box
          bg="bg.card"
          borderRadius="lg"
          p="card-p"
          shadow="card"
        >
          <HStack gap={3} mb={5}>
            <Box
              w="28px"
              h="2px"
              bg="action.primary"
            />

            <Text
              color="text.source"
              fontSize="xs"
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing="0.15em"
            >
              {selectedArticle.source?.name || "Article"}
            </Text>
          </HStack>

          <Heading
            color="text.heading"
            fontSize={{
              base: "3xl",
              md: "5xl",
            }}
            mb={5}
          >
            {selectedArticle.title}
          </Heading>

          <HStack
            gap={3}
            mb={8}
            color="text.muted"
            fontSize="sm"
            flexWrap="wrap"
          >
            {selectedArticle.author && (
              <Text>{selectedArticle.author}</Text>
            )}

            {selectedArticle.author && publishedDate && (
              <Box
                w="4px"
                h="4px"
                borderRadius="full"
                bg="text.muted"
              />
            )}

            {publishedDate && (
              <Text>{publishedDate}</Text>
            )}
          </HStack>

          <Box
            overflow="hidden"
            borderRadius="lg"
            mb={8}
          >
            <Image
              src={
                selectedArticle.urlToImage ||
                "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
              }
              alt={selectedArticle.title}
              w="100%"
              h={{
                base: "220px",
                md: "460px",
              }}
              objectFit="cover"
            />
          </Box>

          <Text
            color="text.body"
            fontSize={{
              base: "lg",
              md: "xl",
            }}
            lineHeight="tall"
            maxW="680px"
            mb={10}
          >
            {selectedArticle.description}
          </Text>

          <HStack gap={4} flexWrap="wrap" alignItems="center" justifyContent="flex-start">
            <Link
              href={selectedArticle.url}
              target="_blank"
              rel="noopener noreferrer"
              _hover={{ textDecoration: "none" }}
            >
              <Button
                bg="action.primary"
                color="action.primaryText"
                borderRadius="full"
                border="none"
                px={8}
                transition="0.2s"
                _hover={{
                  bg: "brand.50",
                  color: "brand.500",
                  cursor: "pointer",

                }}
              >
                Read Full Article
              </Button>
            </Link>

            <BackButton />
          </HStack>
        </Box>
      </Container>
    </Box>
  );
}