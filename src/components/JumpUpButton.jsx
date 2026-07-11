import { Box, Button, Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const JumpUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };  
    
    useEffect(() => {  
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []); 

    return (
        <Box position="fixed" bottom="20px" right="20px" zIndex="1000">
            {isVisible && (
                <Button
                    onClick={scrollToTop}
                    bg="brand.500"
                    color="white"
                    _hover={{ bg: "brand.600" }}
                    borderRadius="full"
                    p={12}
                    paddingX={17}
                    border="none"
                >
                    ↑
                </Button>
            )}
        </Box>
    );
}

export default JumpUpButton;