import { Flex, Icon, Input } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {

    return (
        <Flex
                as="label"
                flex="1"
                py="4"
                px="8"
                ml="6"
                maxW={400}
                alignSelf="center"
                color="gray.200"
                position="relative"
                bg="gray.800"
                borderRadius="full"

            >
                <Input 
                    color="gray.50"
                    variant="unstyled"//tira a borda e o background
                    px="4"
                    mr="4"
                    placeholder="Buscar na plataforma"
                    _placeholder={{ color: 'gray.400'}}//estilização se aplica apenas no plaholder
                />

                <Icon as={RiSearchLine}/>
            </Flex>
    );
}