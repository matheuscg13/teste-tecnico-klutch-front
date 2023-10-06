import { Header } from "@/components/header";
import { Center, Box, Text, Button } from "@chakra-ui/react";
import { useMainContext } from "@/contexts/main.context";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function () {
  const router = useRouter();
  const { bodyRequest, user, footerData } = useMainContext();
  useEffect(() => {
    if (!bodyRequest.desired_value) {
      router.push("/");
    }
  }, []);
  return (
    <>
      <Header text="Detalhes da Solicitação" />
      <Center alignItems={"top"} gap={"30px"}>
        <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
          <Box
            display={"flex"}
            gap={"5px"}
            backgroundColor={"#F8F8F8"}
            borderRadius={"5px"}
            paddingX={"6px"}
            fontFamily={"sans-serif"}
            color={"#777777"}
            fontSize={"15px"}
            fontWeight={"bold"}
          >
            <Text>Solicitação gerada por</Text>

            <Text color={"#228A95"}> Sistema Credfica</Text>
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
            <Box
              display={"flex"}
              gap={"5px"}
              backgroundColor={"#F8F8F8"}
              paddingX={"6px"}
              borderRadius={"5px"}
              fontFamily={"sans-serif"}
              color={"#777777"}
              fontSize={"25px"}
              fontWeight={"bold"}
              flexDirection={"column"}
              textAlign={"center"}
            >
              <Text>Valor Total</Text>
              <Text color={"#31AC2B"}>R${bodyRequest.total_value}</Text>
            </Box>
            <Box
              display={"flex"}
              gap={"5px"}
              backgroundColor={"#F8F8F8"}
              paddingX={"6px"}
              borderRadius={"5px"}
              fontFamily={"sans-serif"}
              color={"#777777"}
              fontSize={"25px"}
              fontWeight={"bold"}
              flexDirection={"column"}
              textAlign={"center"}
            >
              <Text>Valor a Depositar</Text>
              <Text color={"#31AC2B"}>R${bodyRequest.total_value}</Text>
            </Box>
          </Box>
        </Box>
        <Box
          width={"300px"}
          display={"flex"}
          flexDirection={"column"}
          gap={"20px"}
        >
          <Box
            display={"flex"}
            gap={"5px"}
            backgroundColor={"#F8F8F8"}
            paddingX={"6px"}
            borderRadius={"5px"}
            fontFamily={"sans-serif"}
            color={"#777777"}
            fontSize={"15px"}
            fontWeight={"bold"}
          >
            <Text>Fluxo da solicitação:</Text>
            <Text color={"#228A95"}>{bodyRequest.contract}</Text>
          </Box>
          <Box
            fontFamily={"sans-serif"}
            fontSize={"15px"}
            color={"#777777"}
            fontWeight={"bold"}
            backgroundColor={"#F8F8F8"}
            borderRadius={"5px"}
            padding={"15px"}
          >
            <Box>Modalidade:</Box>
            <Center flexDirection={"column"}>
              <Text>Cartao de Crédito</Text>
              <Text>Número do cartão: {bodyRequest.card_number}</Text>
              <Text>
                Validade:{bodyRequest.card_validity} CVC:{bodyRequest.card_cvc}
              </Text>
              <Text>
                {bodyRequest.number_of_installments}parcelas de R$
                {bodyRequest.installment_value}
              </Text>
              <Text>Tabela: {bodyRequest.table}</Text>
            </Center>
          </Box>
          <Box
            fontFamily={"sans-serif"}
            fontSize={"15px"}
            color={"#777777"}
            fontWeight={"bold"}
            backgroundColor={"#F8F8F8"}
            borderRadius={"5px"}
            padding={"15px"}
          >
            <Text>Informações do cliente</Text>
            <Text>Nome:{`${user.first_name} ${user.last_name}`}</Text>
            <Text>CPF:{user.cpf}</Text>
            <Text>Banco:{user.bank_label}</Text>
            <Text>Tipo de conta:{user.account_type_label}</Text>
            <Text>Número da conta:{user.account_number}</Text>
          </Box>
          <Box
            fontFamily={"sans-serif"}
            fontSize={"15px"}
            fontWeight={"bold"}
            backgroundColor={"#E8F3F4"}
            borderRadius={"5px"}
            padding={"15px"}
          >
            <Center flexDirection={"column"} gap={"15px"}>
              <Box color={"#777777"}>Informações gerais:</Box>
              <Button
                border={"0"}
                borderRadius={"5px"}
                backgroundColor={"#EF9C4B"}
                fontFamily={"sans-serif"}
                fontSize={"15px"}
                color={"white"}
                fontWeight={"bold"}
                padding={"15px"}
              >
                Aguardando
              </Button>
              <Box display={"flex"} gap={"15px"}>
                <Button
                  border={"0"}
                  borderRadius={"5px"}
                  backgroundColor={"#BC3434"}
                  fontFamily={"sans-serif"}
                  fontSize={"15px"}
                  color={"white"}
                  fontWeight={"bold"}
                  padding={"15px"}
                >
                  Pré Aprovar
                </Button>
                <Button
                  border={"0"}
                  borderRadius={"5px"}
                  backgroundColor={"#228A95"}
                  fontFamily={"sans-serif"}
                  fontSize={"15px"}
                  color={"white"}
                  fontWeight={"bold"}
                  padding={"15px"}
                >
                  Reprovar
                </Button>
              </Box>
            </Center>
          </Box>
        </Box>
      </Center>
    </>
  );
}
