import { Button, ButtonProps as ChakraButtonProps } from "@chakra-ui/react";

interface PaginationItemProps extends ChakraButtonProps {
    isCurrent?: boolean;
    number: number;
    onPageChange: (page: number) => void;
}


export function PaginationItem({
    isCurrent = false,
    number,
    onPageChange,
    ...rest
}: PaginationItemProps) {

        if(isCurrent) {
            return(

            <Button {...rest}
                size={"sm"}
                fontSize={"xs"}
                width={"4"}
                colorScheme={"pink"}
                disabled
                _disabled={{
                    bgColor: 'pink.500',
                    cursor: 'default'
                }}
            >
                {number}
            </Button>

            )
        }

        return(
            <Button {...rest}
                size={"sm"}
                fontSize={"xs"}
                width={"4"}
                bg={"gray.700"}
                _hover={{
                    bg: 'gray.500',
                }}
                onClick={() => onPageChange(number)}
            >
                {number}
            </Button>
        );



}