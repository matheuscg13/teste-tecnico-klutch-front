import { Header } from "@/components/header";
import { Box, Button, Center, Text } from "@chakra-ui/react";
import { useMainContext } from "@/contexts/main.context";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function () {
  const { bodyRequest, footerData, user } = useMainContext();
  const router = useRouter();
  useEffect(() => {
    if (!bodyRequest.desired_value) {
      router.push("/");
    }
  }, []);
  return (
    <>
      <Header text={"Solicitar Empréstimo"} />
      <Center flexDirection={"column"} gap={"35px"}>
        <Text fontFamily={"sans-serif"} color={"#228A95"} as={"h2"}>
          Solicitação Realizada com Sucesso!
        </Text>
        <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
          <Box display={"flex"} gap={"100px"}>
            <Box
              backgroundColor={"#E8FFE3"}
              minWidth={"500px"}
              maxWidth={"500px"}
              display={"flex"}
              gap={"50px"}
              paddingY={"14px"}
              paddingX={"24px"}
              justifyContent={"space-between"}
              borderRadius={"5px"}
            >
              <Text
                fontSize={"22px"}
                fontFamily={"sans-serif"}
                color={"#228A95"}
                margin={"0"}
                display={"flex"}
                alignItems={"center"}
              >
                Valor desejado:
              </Text>
              <Text
                fontSize={"22px"}
                fontFamily={"sans-serif"}
                color={"#31AC2B"}
                margin={"0"}
                paddingY={"14px"}
                paddingLeft={"21px"}
                paddingRight={"81px"}
              >
                R${bodyRequest.desired_value}
              </Text>
            </Box>
            <Box
              backgroundColor={"#E8FFE3"}
              minWidth={"500px"}
              display={"flex"}
              gap={"50px"}
              paddingY={"14px"}
              paddingX={"24px"}
              justifyContent={"space-between"}
              borderRadius={"5px"}
            >
              <Text
                fontSize={"22px"}
                fontFamily={"sans-serif"}
                color={"#228A95"}
                margin={"0"}
                display={"flex"}
                alignItems={"center"}
              >
                Valor total do empréstimo:
              </Text>
              <Text
                fontSize={"22px"}
                fontFamily={"sans-serif"}
                color={"#31AC2B"}
                margin={"0"}
                paddingY={"14px"}
                paddingLeft={"21px"}
                paddingRight={"81px"}
              >
                R${footerData.total_value}
              </Text>
            </Box>
          </Box>
          <Box display={"flex"} gap={"100px"}>
            <Box
              backgroundColor={"#E8FFE4"}
              minWidth={"500px"}
              display={"flex"}
              gap={"50px"}
              justifyContent={"space-between"}
              paddingY={"14px"}
              paddingX={"24px"}
              borderRadius={"5px"}
            >
              <Text
                fontSize={"22px"}
                fontFamily={"sans-serif"}
                color={"#228A95"}
                margin={"0"}
                display={"flex"}
                alignItems={"center"}
              >
                Parcelas:
              </Text>
              <Text
                fontSize={"22px"}
                fontFamily={"sans-serif"}
                color={"#EF9C4B"}
                margin={"0"}
                paddingY={"14px"}
                paddingLeft={"21px"}
                paddingRight={"81px"}
              >
                {bodyRequest.number_of_installments}
              </Text>
            </Box>
            <Box
              backgroundColor={"#E8FFE4"}
              minWidth={"500px"}
              display={"flex"}
              gap={"50px"}
              paddingY={"14px"}
              paddingX={"24px"}
              justifyContent={"space-between"}
              borderRadius={"5px"}
            >
              <Text
                fontSize={"22px"}
                fontFamily={"sans-serif"}
                color={"#228A95"}
                margin={"0"}
                display={"flex"}
                alignItems={"center"}
              >
                Valor da parcela:
              </Text>
              <Text
                fontSize={"22px"}
                fontFamily={"sans-serif"}
                color={"#31AC2B"}
                margin={"0"}
                paddingY={"14px"}
                paddingLeft={"21px"}
                paddingRight={"81px"}
              >
                R${footerData.installment_value}
              </Text>
            </Box>
          </Box>
          <Box display={"flex"} gap={"100px"}>
            <Box
              backgroundColor={"#E8FFE4"}
              minWidth={"500px"}
              display={"flex"}
              gap={"50px"}
              justifyContent={"space-between"}
              paddingY={"14px"}
              paddingX={"24px"}
              borderRadius={"5px"}
            >
              <Text
                fontSize={"22px"}
                fontFamily={"sans-serif"}
                color={"#228A95"}
                margin={"0"}
                display={"flex"}
                alignItems={"center"}
              >
                Taxa de juros:
              </Text>
              <Text
                fontSize={"22px"}
                fontFamily={"sans-serif"}
                color={"#EF9C4B"}
                margin={"0"}
                paddingY={"14px"}
                paddingLeft={"21px"}
                paddingRight={"81px"}
              >
                {bodyRequest.interest_per_installment}%
              </Text>
            </Box>
            <Box
              backgroundColor={"#E8FFE4"}
              minWidth={"500px"}
              display={"flex"}
              gap={"50px"}
              paddingY={"14px"}
              paddingX={"24px"}
              justifyContent={"space-between"}
              borderRadius={"5px"}
            >
              <Text
                fontSize={"22px"}
                fontFamily={"sans-serif"}
                color={"#228A95"}
                margin={"0"}
                display={"flex"}
                alignItems={"center"}
              >
                {`${user.first_name} ${user.last_name}`}
              </Text>
            </Box>
          </Box>
          <Box
            backgroundColor={"#E8FFE4"}
            minWidth={"500px"}
            maxWidth={"500px"}
            display={"flex"}
            gap={"50px"}
            paddingY={"14px"}
            paddingX={"24px"}
            justifyContent={"center"}
            borderRadius={"5px"}
          >
            <Text
              fontSize={"22px"}
              fontFamily={"sans-serif"}
              color={"#777777"}
              margin={"0"}
              display={"flex"}
              alignItems={"center"}
              textAlign={"center"}
            >
              {`${bodyRequest.card_cvc} ${user.bank_label} ${bodyRequest.card_validity}`}
            </Text>
          </Box>
        </Box>
        <Center flexDirection={"column"}>
          <Button
            backgroundColor={"#228A95"}
            paddingX={"31px"}
            paddingY={"11px"}
            border={"none"}
            borderRadius={"5px"}
            color={"white"}
            fontSize={"20px"}
            fontFamily={"sans-serif"}
            fontWeight={"bold"}
            marginBottom={"20px"}
            cursor={"pointer"}
            onClick={(e) => {
              router.push("/detail");
            }}
          >
            Detalhe da Solicitação
          </Button>
          <Text fontFamily={"sans-serif"} fontSize={"18px"} color={"#228A95"}>
            O CredFica avaliará a solicitação
          </Text>
        </Center>
      </Center>
    </>
  );
}
