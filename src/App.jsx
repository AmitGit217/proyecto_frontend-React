import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import bgImage from "./assets/main_bg_image.jpg";
import { Container } from "@chakra-ui/react";


export default function App() {
  return (
    <Container  maxW="container.lg"
          height="100%"
          py="section-y"
          p={0}
          backgroundImage={`
            linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
            url('${bgImage}')
          `}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundAttachment="fixed">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/searchResults" element={<SearchResults />} />
    </Routes>
    </Container>
  );
}