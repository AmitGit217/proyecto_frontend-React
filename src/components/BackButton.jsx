import { Button } from "@chakra-ui/react";

export default function BackButton(clearLocalStorage = false) {
  return (
    <Button
      variant="ghost"
      color="action.primary"
      borderRadius="full"
      border="none"
      padding="0.5rem"
      fontWeight="semibold"
      transition="0.2s"
      onClick={() => {
        if (clearLocalStorage) {
          localStorage.clear();
        }
        window.history.back();
      }}
      _hover={{
        bg: "brand.500",
        color: "brand.50",
        cursor: "pointer",
      }}
      _active={{
        bg: "brand.100",
      }}
    >
      ← Back
    </Button>
  );
}