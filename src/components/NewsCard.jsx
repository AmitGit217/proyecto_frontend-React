import { Card, Image, Heading, Text, Box, Link } from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ArticleContext } from "../context/ArticleContext";

const NewsCard = ({ title, description, url, urlToImage, id }) => {
    const navigate = useNavigate();
    const { setSelectedArticle } = useContext(ArticleContext);


     const handleClick = () => {
    setSelectedArticle({
      title,
      description,
      url,
      urlToImage,
      id,
    });

    navigate(`/searchResults/${id}`);
  };

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
      _hover={{ shadow: "cardHover", transform: "translateY(-2px)", cursor: "pointer" }}
      onClick={() => handleClick(id)}
    >
     
        <Box h="200px" overflow="hidden">
          <Image
            src={urlToImage ? urlToImage : "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"}
            alt={title}
            w="100%"
            h="100%"
            objectFit="cover"
          />
        </Box>
      

      <Card.Body p="card-p">
        <Heading fontFamily="heading" size="md"  mb={2} lineHeight="1.3">
            {title}
        </Heading>

      </Card.Body>
    </Card.Root>
  );
};

export default NewsCard;