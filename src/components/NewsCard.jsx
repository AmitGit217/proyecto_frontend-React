import { Card, Image, Heading, Text, Box, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NewsCard = ({ title, description, url, urlToImage, id }) => {
    const navigate = useNavigate();


    const handleClick = (id) => {
        navigate(`/searchResults/${id}`, { state: { title, description, url, urlToImage } });
    }

    console.log("NewsCard props:", {  id });
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
     
        <Box h="200px" overflow="hidden">
          <Image
            src={urlToImage ? urlToImage : "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"}
            alt={title}
            w="100%"
            h="100%"
            objectFit="cover"
            onClick={() => handleClick(id)}
          />
        </Box>
      

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