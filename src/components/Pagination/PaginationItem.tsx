import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
    number: number;
    isCurrent?: boolean;// a interrogação diz que essa props é opcional
    onPageChange: (page: number) => void;
}

export function PaginationItem({ isCurrent = false, number, onPageChange}: PaginationItemProps) {
    if (isCurrent) {
        return (
        <Button
            size="sm"
            fontSize="xs"
            width="4"
            colorScheme="pink"
            disabled
            _disabled={{
                bgColor: 'pink.500',
                cursor: 'deafult',
            }}//estilizaação para quando o componente está disabled(desabilitado)
        >
            {number}
        </Button>
        )
    }

    return (
        <Button
            size="sm"
            fontSize="xs"
            width="4"
            bg="gray.700"
            _hover={{
                bg: "gray.500"
            }}
            onClick={() => onPageChange(number)}
        >
            {number}
        </Button>
    );
}