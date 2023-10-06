import { iInstallment, iLineTable } from "@/interfaces/interfaces";
import { Box, Center } from "@chakra-ui/react";

export const LineTable = ({ installmentData }: iLineTable) => {
  return (
    <Center display={"flex"}>
      <Box
        border={"1px solid"}
        borderColor={"#EDEDED"}
        fontSize={"25px"}
        fontFamily={"sans-serif"}
        color={"#777777"}
        width={"146px"}
        textAlign={"center"}
        paddingBottom={"11px"}
        paddingTop={"11px"}
      >
        {installmentData.number_of_installments}
      </Box>
      <Box
        border={"1px solid"}
        borderColor={"#EDEDED"}
        paddingBottom={"11px"}
        paddingTop={"11px"}
        fontSize={"25px"}
        fontFamily={"sans-serif"}
        color={"#777777"}
        width={"248px"}
        textAlign={"center"}
      >
        {installmentData.interest}%
      </Box>
      <Box
        border={"1px solid"}
        borderColor={"#EDEDED"}
        paddingBottom={"11px"}
        paddingTop={"11px"}
        fontSize={"25px"}
        fontFamily={"sans-serif"}
        color={"#777777"}
        width={"244px"}
        textAlign={"center"}
      >
        R${installmentData.installment_value}
      </Box>
      <Box
        border={"1px solid"}
        borderColor={"#EDEDED"}
        paddingBottom={"11px"}
        paddingTop={"11px"}
        fontSize={"25px"}
        fontFamily={"sans-serif"}
        color={"#777777"}
        width={"174px"}
        textAlign={"center"}
      >
        R${installmentData.total_value}
      </Box>
      <Box
        border={"1px solid"}
        borderColor={"#EDEDED"}
        paddingBottom={"11px"}
        paddingTop={"11px"}
        fontSize={"25px"}
        fontFamily={"sans-serif"}
        color={"#777777"}
        width={"272px"}
        textAlign={"center"}
      >
        R${installmentData.comission}
      </Box>
    </Center>
  );
};
