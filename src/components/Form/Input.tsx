import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";

interface InputProps extends ChakraInputProps{
    name: string;
    label?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, ...rest }, ref) => {//o (...rest) está pegando todas as propriedades restantes do input 
    return (
        <FormControl>
        {/* caso o label exista, mostre o formLabel */}
        { !!label && <FormLabel htmlFor='email'>{label}</FormLabel>}

        <ChakraInput 
          name='email' 
          id='email'
          type="email"
          focusBorderColor="pink.500"
          bgColor="gray.900"
          variant="filled"
          _hover={{
            bgColor: 'gray.900'
          }}
          size= "lg"
          {...rest}
          ref={ref}

        />
      </FormControl>
    );
}

export const Input = forwardRef(InputBase);