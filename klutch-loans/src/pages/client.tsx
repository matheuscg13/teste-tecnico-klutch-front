import { Header } from "@/components/header";
import { useMainContext } from "@/contexts/main.context";
import { api } from "@/services/api";
import { Text, Box, Input, Button, Center } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ClientPage() {
  const { register, handleSubmit } = useForm();
  const { user, setUser, bodyRequest, setBodyRequest } = useMainContext();
  const router = useRouter();

  useEffect(() => {
    if (!bodyRequest.desired_value) {
      router.push("/");
    }
  }, []);

  const onSubmitFunc = async (data: any) => {
    await api
      .get(`api/users/${data.cpf}`)
      .then(({ data }) => {
        setUser(data);
        setBodyRequest({
          ...bodyRequest,
          client: data.id,
        });
      })
      .catch((err) => alert("Usuário não encontrado"));
  };
  return (
    <>
      <Header text={"Solicitar Empréstimo"} />
      <Center flexDirection={"column"}>
        <Text fontFamily={"sans-serif"} fontSize={"25px"} color={"#228A95"}>
          Busque o cliente
        </Text>
        <Box as="form" onSubmit={handleSubmit(onSubmitFunc)}>
          <Input
            backgroundColor={"#F8F8F8"}
            paddingX={"31px"}
            paddingY={"11px"}
            border={"none"}
            borderTopStartRadius={"5px"}
            borderBottomStartRadius={"5px"}
            placeholder="000.000.000-00"
            fontSize={"15px"}
            fontFamily={"sans-serif"}
            fontWeight={"bold"}
            color={"#777777"}
            {...register("cpf")}
          />
          <Button
            backgroundColor={"#228A95"}
            paddingX={"31px"}
            paddingY={"11px"}
            border={"none"}
            borderTopEndRadius={"5px"}
            borderBottomEndRadius={"5px"}
            type="submit"
            color={"white"}
            fontSize={"15px"}
            fontFamily={"sans-serif"}
            fontWeight={"bold"}
            cursor={"pointer"}
          >
            Buscar
          </Button>
        </Box>
      </Center>
      {user.cpf ? (
        <Center
          flexDirection={"column"}
          marginTop={"60px"}
          backgroundColor={"#F8F8F8"}
          color={"#777777"}
          fontSize={"27px"}
          fontFamily={"sans-serif"}
        >
          <Text>Cliente encontrado:</Text>
          <Text fontSize={"27px"} fontFamily={"sans-serif"} color={"#EF9C4B"}>
            {user.cpf}
          </Text>
          <Text fontSize={"27px"} fontFamily={"sans-serif"} color={"#228A95"}>
            {`${user.first_name} ${user.last_name}`}
          </Text>
          <Button
            backgroundColor={"#228A95"}
            paddingX={"31px"}
            paddingY={"11px"}
            border={"none"}
            borderRadius={"5px"}
            color={"white"}
            fontSize={"39px"}
            fontFamily={"sans-serif"}
            fontWeight={"bold"}
            width={"390px"}
            height={"97px"}
            cursor={"pointer"}
            marginBottom={"20px"}
            onClick={(e) => {
              router.push("/card");
            }}
          >
            Solicitar
          </Button>
        </Center>
      ) : (
        <></>
      )}
    </>
  );
}
