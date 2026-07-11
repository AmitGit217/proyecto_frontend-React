import { Box, Input, Button, Field } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { searchNews } from "../api";
import { Navigate, useNavigate } from "react-router-dom";
import useLoading from "../hooks/useLoading";
import Loading from "./Loading";

export default function SearchForm() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { startLoading, stopLoading, isLoading } = useLoading();


  const onSubmit = async (data) => {
    startLoading();
    console.log(data.searchQuery);
    const searchResults = await searchNews(data.searchQuery);
    navigate("/searchResults", { state: { articles: searchResults.data } });
    stopLoading();
  }

  return (
    <Box maxW="100vw" mx="auto" mt="10">
      {isLoading ? <Loading /> : <form onSubmit={handleSubmit(onSubmit)}>
        <Field.Root>
          <Box
            display="flex"
            alignItems="stretch"
            borderRadius="full"
            overflow="hidden"
            boxShadow="0 10px 30px rgba(0,0,0,0.12)"
            border="none"
            bg="white"
          >
            <Input
              {...register("searchQuery")}
              placeholder="Search"
              border="none"
              autoComplete="off"
              h="52px"
              px="6"
              fontSize="md"
              _focus={{ outline: "none", boxShadow: "none" }}
              textIndent="1rem"

            />

            <Button
              type="submit"
              h="57px"
              w="120px"
              px="10"
              borderRadius="full"
              background="#2F71E5"
              color="#FFFFFF"
              border="none"
              fontWeight="600"
              _hover={{
                bg: "brand.500",
                cursor: "pointer",
              }}
           
            >
              Search
            </Button>
          </Box>
        </Field.Root>
      </form>}
      
    </Box>
  );
}