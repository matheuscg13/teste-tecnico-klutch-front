import { Header } from "@/components/header";
import { Box, Button, Center, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function () {
  const router = useRouter();

  return (
    <>
      <Header text={"Solicitar Empréstimo"} />

      <Center flexDirection={"column"} gap={"20px"}>
        <Text fontFamily={"sans-serif"} fontSize={"25px"} color={"#228A95"}>
          Escolha a modalidade:
        </Text>

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
          onClick={(e) => router.push("/revision")}
          cursor={"pointer"}
        >
          Cartão de crédito
        </Button>
        <Text color={"#777777"} fontFamily={"sans-serif"} fontSize={"30px"}>
          Ou
        </Text>
        <Box>
          <Button
            backgroundColor={"#A7D0D5"}
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
            marginBottom={"5px"}
          >
            Crédito consignado
          </Button>
          <Text
            textAlign={"right"}
            color={"#777777"}
            fontFamily={"sans-serif"}
            fontSize={"25px"}
            margin={"0"}
          >
            Em breve.
          </Text>
        </Box>
      </Center>
    </>
  );
}
