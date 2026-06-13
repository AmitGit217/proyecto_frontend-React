import { Card, Image, Heading, Text, Box, Link } from "@chakra-ui/react";

const NewsCard = ({ title, description, url, urlToImage }) => {
  return (
    <Card.Root
      maxW="315px"
      bg="bg.card"
      borderWidth="1px"
      borderColor="border.card"
      borderRadius="md"
      overflow="hidden"
      shadow="card"
      transition="all 0.2s"
      _hover={{ shadow: "cardHover", transform: "translateY(-2px)" }}
    >
      {urlToImage ? (
        <Box h="200px" overflow="hidden">
          <Image
            src={urlToImage}
            alt={title}
            w="100%"
            h="100%"
            objectFit="cover"
          />
        </Box>
      ) : (
        <Box h="200px" bg="neutral.100" />
      )}

      <Card.Body p="card-p">
        <Heading fontFamily="heading" size="md"  mb={2} lineHeight="1.3">
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            _hover={{ textDecoration: "underline" }}
            textDecoration="none"
            color="text.heading"
            fontFamily="heading"
          >
            {title}
          </Link>
        </Heading>

        <Text fontFamily="body" fontSize="sm" color="text.body" noOfLines={3}>
          {description}
        </Text>
      </Card.Body>
    </Card.Root>
  );
};

export default NewsCard;