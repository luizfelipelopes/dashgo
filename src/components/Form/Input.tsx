import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";


interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
    error?: FieldError;
}

// Converte função p/ arrow function atribuindo uma const InputBase
// passa Ref como parametro
// atribui o valor de ref no Componente Chakra Input
// tipa a const Input Base ForwardRefRenderFunction passando como generic:
// HTMLInputElement: tipo do elemento referenciado
// InputProps: tipo da props da interface
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({name, label, error = null, ...rest}, ref) => {

    return (

        //!!error = se tem valor presente vira true, se não tem valor presente vira false (se torna booleano)
        <FormControl isInvalid={!!error}>
          { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }

            <ChakraInput
            id={name}
            name={name}
            focusBorderColor="pink.500"
            bgColor="gray.900"
            variant="filled"
            _hover={{
                bgColor: 'gray.900'
            }}
            size="lg"
            ref={ref}
            {...rest}
            />

            { !!error && (
                <FormErrorMessage>
                    {error.message}
                </FormErrorMessage>
            )}
        </FormControl>
    );
}

// Cria uma const Input recebendo o InputBase através do forwardRef
export const Input = forwardRef(InputBase);