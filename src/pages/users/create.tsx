import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "../../components/Form/Input";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import Link from "next/link";


type CreateUserFormData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  }

  // validações do Form
  const CreateUserFormSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    password: yup.string().required('Senha obrigatória').min(6, 'No mínimo 6 caracteres'),
    password_confirmation: yup.string().oneOf([
        null, yup.ref('password')
    ], 'As senha precisam ser iguais'),

  });


export default function CreateUser() {

    const { register, handleSubmit, formState: { isSubmitting, errors }} = useForm({
        resolver: yupResolver(CreateUserFormSchema)
    })

    const handleCreateUser: SubmitHandler<CreateUserFormData> =  async (values) =>  {
        // provar delay p/ visualizar o loading
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(values);
    }

    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box
                  as="form"
                  flex={1}
                  borderRadius={8}
                  bg={"gray.800"}
                  p={["6","8"]}
                  onSubmit={handleSubmit(handleCreateUser)}
                  >
                    <Heading size={"lg"} fontWeight={"normal"}>Criar usuário</Heading>

                    <Divider my={6} borderColor={"gray.700"} />

                    <VStack spacing={8}>
                        <SimpleGrid minChildWidth={"240px"} spacing={["6", "8"]} w={"100%"}>
                            <Input
                              name="name"
                              label="Nome completo"
                              {...register('name')}
                              error={errors.name} />

                            <Input
                              name="email"
                              type={"email"}
                              label="E-mail"
                              {...register('email')}
                              error={errors.email} />

                        </SimpleGrid>
                        <SimpleGrid minChildWidth={"240px"} spacing={["6", "8"]} w={"100%"}>
                            <Input
                              name="password"
                              type="password"
                              label="Senha"
                              {...register('password')}
                              error={errors.password} />

                            <Input
                              name="password_confirmation"
                              type="password"
                              label="Confirmação de Senha"
                              {...register('password_confirmation')}
                              error={errors.password_confirmation} />

                        </SimpleGrid>
                    </VStack>

                    <Flex mt="8" justify={"flex-end"}>
                        <HStack>
                            <Link href="/users" passHref>
                                <Button as="a" colorScheme={"whiteAlpha"}>Cancelar</Button>
                            </Link>
                            <Button
                              type="submit"
                              colorScheme={"pink"}
                              isLoading={isSubmitting}>
                                  Salvar
                            </Button>
                        </HStack>
                    </Flex>

                </Box>

            </Flex>
        </Box>
    );
}