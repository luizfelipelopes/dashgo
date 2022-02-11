import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps ) {
    return (
        <Flex align={"center"} >

            { showProfileData && (
                <Box mr={"4"} textAlign={"right"}>
                    <Text>Luiz Felipe C. Lopes</Text>
                    <Text color={"gray.300"} fontSize={"small"}>
                        lfelipelopesti@gmail.com
                    </Text>
                </Box>
            )}


            <Avatar size={"md"} name="Luiz Felipe Lopes" src="https://github.com/luizfelipelopes.png" />

        </Flex>
    );
}