import { Flex, Img, Text, IconButton, Box, Button } from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";
import { useMainContext } from "@/contexts/main.context";
import Link from "next/link";
import { useRouter } from "next/router";

export const Footer = () => {
  const { footerData } = useMainContext();

  const router = useRouter();

  if (footerData.table) {
    return (
      <Flex
        as="footer"
        bg={"#228A95"}
        minHeight={"80px"}
        height={"80px"}
        position={"fixed"}
        left={"0"}
        bottom={"0"}
        width={"100%"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
      >
        {footerData.table == "Default" ? (
          <Box color={"white"} fontFamily={"sans-serif"} fontSize={"20px"}>
            Nome: Tabela Padrão
          </Box>
        ) : (
          <Box color={"white"} fontFamily={"sans-serif"} fontSize={"20px"}>
            Nome: Tabela Parceiro
          </Box>
        )}
        <Box color={"white"} fontFamily={"sans-serif"} fontSize={"20px"}>
          Parcelas: {footerData.number_of_installments}
        </Box>
        <Box color={"white"} fontFamily={"sans-serif"} fontSize={"20px"}>
          Valor da parcela: R${footerData.installment_value}
        </Box>
        <Button
          height={"51px"}
          width={"140px"}
          backgroundColor={"#EF9C4B"}
          border={"none"}
          borderRadius={"5px"}
          fontFamily={"sans-serif"}
          fontSize={"18px"}
          color={"white"}
          fontWeight={"bold"}
          cursor={"pointer"}
          onClick={(e) => {
            router.push("/client");
          }}
        >
          Avançar
        </Button>
      </Flex>
    );
  }
};
