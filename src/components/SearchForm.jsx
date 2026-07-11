import { Box, Input, Button, Field } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { searchNews } from "../api";
import { useNavigate } from "react-router-dom";
import useLoading from "../hooks/useLoading";
import Loading from "./Loading";
import { useState } from "react";

export default function SearchForm() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { startLoading, stopLoading, isLoading } = useLoading();
  const [chosenCategory, setChosenCategory] = useState("");

  const onSubmit = async (data) => {
    startLoading();

    const searchResults = await searchNews(data.searchQuery);

    navigate("/searchResults", {
      state: { articles: searchResults.data },
    });

    localStorage.setItem(
      "searchResults",
      JSON.stringify(searchResults.data)
    );
    localStorage.setItem("searchQuery", chosenCategory);

    stopLoading();
  };

  return (
    <Box maxW="100vw" mx="auto" mt="10">
      {isLoading ? (
        <Loading />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field.Root>
            <Box
              display="flex"
              alignItems="center"
              bg="white"
              borderRadius="full"
              overflow="hidden"
              boxShadow="0 10px 30px rgba(0,0,0,0.12)"
            >
              <Input
                {...register("searchQuery")}
                onChange={(e) => setChosenCategory(e.target.value)}
                placeholder="Search"
                autoComplete="off"
                flex="1"
                h="56px"
                px="6"
                fontSize="16px"
                border="none"
                borderRadius="0"
                _focus={{
                  boxShadow: "none",
                }}
              />

              <Button
                type="submit"
                h="58px"
                minW="120px"
                border="none"
                px="8"
                flexShrink={0}
                bg="#2F71E5"
                color="white"
                borderRadius="full"
                fontWeight="600"
                _hover={{
                  bg: "brand.500",
                }}
              >
                Search
              </Button>
            </Box>
          </Field.Root>
        </form>
      )}
    </Box>
  );
}