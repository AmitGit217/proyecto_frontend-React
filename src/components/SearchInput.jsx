import { Input } from "@chakra-ui/react";

export default function SearchInput(props) {
  return (
    <Input
      placeholder="Search for news, topics, or sources"
      size="lg"
      variant="outline"
      {...props}
    />
  );
}