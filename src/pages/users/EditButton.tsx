import { Button, Icon } from "@chakra-ui/react";
import { RiPencilLine } from "react-icons/ri";

export function EditButton() {
  return (
    <Button
      as="a"
      size="sm"
      fontSize="sm"
      colorScheme="purple"
      leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
    >
      Editar
    </Button>
  );
}
