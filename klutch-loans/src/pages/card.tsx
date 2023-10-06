import { Header } from "@/components/header";
import { useMainContext } from "@/contexts/main.context";
import { Center, Text, Input, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function () {
  const { register, handleSubmit } = useForm();
  const { bodyRequest, setBodyRequest, user } = useMainContext();

  const router = useRouter();

  useEffect(() => {
    if (!bodyRequest.desired_value || !user.cpf) {
      //   router.push("/");
      console.log(user.cpf);
    }
  }, []);

  const onSubmitFunc = (data: any) => {
    setBodyRequest({
      ...bodyRequest,
      card_number: data.card_number,
      card_validity: data.card_validity,
      card_cvc: data.card_cvc,
    });
    router.push("/modality");
  };
  return (
    <>
      <Header text={"Solicitar Empréstimo"} />

      <Center
        flexDirection={"column"}
        gap={"20px"}
        as={"form"}
        onSubmit={handleSubmit(onSubmitFunc)}
      >
        <Text fontFamily={"sans-serif"} fontSize={"25px"} color={"#228A95"}>
          Insira os dados do Cartão:
        </Text>
        <Input
          border={"none"}
          backgroundColor={"#F8F8F8"}
          borderRadius={"5px"}
          type="text"
          width={"380px"}
          height={"51px"}
          color={"#777777"}
          textAlign={"center"}
          fontSize={"20px"}
          fontFamily={"sans-serif"}
          placeholder="Nome do titular"
        ></Input>
        <Input
          border={"none"}
          backgroundColor={"#F8F8F8"}
          borderRadius={"5px"}
          type="text"
          width={"380px"}
          height={"51px"}
          color={"#777777"}
          textAlign={"center"}
          fontSize={"20px"}
          fontFamily={"sans-serif"}
          placeholder="Número do cartão"
          {...register("card_number")}
        ></Input>
        <Input
          border={"none"}
          backgroundColor={"#F8F8F8"}
          borderRadius={"5px"}
          type="text"
          width={"380px"}
          height={"51px"}
          color={"#777777"}
          textAlign={"center"}
          fontSize={"20px"}
          fontFamily={"sans-serif"}
          placeholder="Data de validade"
          {...register("card_validity")}
        ></Input>
        <Input
          border={"none"}
          backgroundColor={"#F8F8F8"}
          borderRadius={"5px"}
          type="text"
          width={"380px"}
          height={"51px"}
          color={"#777777"}
          textAlign={"center"}
          fontSize={"20px"}
          fontFamily={"sans-serif"}
          placeholder="CVC"
          {...register("card_cvc")}
        ></Input>
        <Button
          backgroundColor={"#228A95"}
          paddingX={"31px"}
          paddingY={"11px"}
          border={"none"}
          borderRadius={"5px"}
          type="submit"
          color={"white"}
          fontSize={"39px"}
          fontFamily={"sans-serif"}
          fontWeight={"bold"}
          width={"390px"}
          height={"97px"}
          marginBottom={"20px"}
          cursor={"pointer"}
        >
          Continuar
        </Button>
      </Center>
    </>
  );
}
