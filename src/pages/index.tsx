import { Button, Flex, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../components/Form/Input";

type SignInFormData = {
  email: string;
  password: string;
}

// validações do Form
const sigInFormSchema = yup.object().shape({

  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),

});

export default function SignIn() {

  const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm({
    resolver: yupResolver(sigInFormSchema)
  }); // React Hook Form

  console.log(errors);

  // Função responsável pelo lidar com o submit
  const handleSigIn: SubmitHandler<SignInFormData> = async (values, event) => {

    // provar delay p/ visualizar o loading
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(values);

  }

  return (
      <Flex
        w="100vw"
        h="100vh"
        align="center"
        justify="center">

        <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSigIn)} //precisa envolver handleSubmit do useForm
        >

          <Stack spacing="4">

            <Input
              name="email"
              type="email"
              label="E-mail"
              error={errors.email}
              {...register('email')} />

            <Input
              name="password"
              type="password"
              label="Senha"
              error={errors.password}
              {...register('password')} />

          </Stack>


            <Button
              type="submit"
              mt="6"
              colorScheme="pink"
              size="lg"
              isLoading={isSubmitting} // atribui o isSubmitting formState p/ verificar se está submetendo. Gera loading no button
              >Entrar</Button>

        </Flex>



      </Flex>


  )
}
