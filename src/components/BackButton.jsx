import { Button } from "@chakra-ui/react";

export default function BackButton() {
  return (
    <Button
      variant="ghost"
      color="action.primary"
      borderRadius="full"
      fontWeight="semibold"
      transition="0.2s"
      onClick={() => window.history.back()}
      _hover={{
        bg: "brand.50",
        color: "action.primaryHover",
      }}
      _active={{
        bg: "brand.100",
      }}
    >
      ← Back
    </Button>
  );
}