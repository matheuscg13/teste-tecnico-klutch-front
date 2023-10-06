//@ts-nocheck
import { useMainContext } from "@/contexts/main.context";
import { iInstallment, iNumberOfInstallments } from "@/interfaces/interfaces";
import { Box, Center, Input } from "@chakra-ui/react";
import { LineTable } from "./lineTable";
import { useForm } from "react-hook-form";
import { string } from "yup";

export const TableInstallments = () => {
  const {
    installments,
    setInstallments,
    partnerInstallments,
    setPartnerInstallments,
    setBodyRequest,
    bodyRequest,
    setFooterData,
    footerData,
  } = useMainContext();

  const { register, handleSubmit } = useForm<iNumberOfInstallments>();

  const onSubmitFunction = (data: any) => {
    const arr = data.number_of_installments.split(" ");
    setFooterData({
      number_of_installments: parseInt(arr[0]) as number,
      table: arr[1] as string,
      installment_value: parseInt(arr[2]) as number,
      total_value: parseInt(arr[3]) as number,
    });
    setBodyRequest({
      ...bodyRequest,
      number_of_installments: parseInt(arr[0]),
      table: arr[1] as string,
    });
  };

  if (installments.length > 0 && partnerInstallments.length > 0) {
    return (
      <>
        <Center
          flexDirection={"column"}
          as={"form"}
          onChange={handleSubmit(onSubmitFunction)}
          backgroundColor={"#F8F8F8"}
        >
          <Box
            as={"h2"}
            fontSize={"29px"}
            fontFamily={"sans-serif"}
            color={"#228A95"}
          >
            Tabela Padrão
          </Box>
          <Center display={"flex"}>
            <Box
              border={"1px solid"}
              borderColor={"#EDEDED"}
              paddingLeft={"31px"}
              paddingRight={"31px"}
              paddingBottom={"11px"}
              paddingTop={"11px"}
              fontSize={"25px"}
              fontFamily={"sans-serif"}
              color={"#777777"}
            >
              Parcela
            </Box>
            <Box
              border={"1px solid"}
              borderColor={"#EDEDED"}
              paddingLeft={"31px"}
              paddingRight={"31px"}
              paddingBottom={"11px"}
              paddingTop={"11px"}
              fontSize={"25px"}
              fontFamily={"sans-serif"}
              color={"#777777"}
            >
              Juros da parcela
            </Box>
            <Box
              border={"1px solid"}
              borderColor={"#EDEDED"}
              paddingLeft={"31px"}
              paddingRight={"31px"}
              paddingBottom={"11px"}
              paddingTop={"11px"}
              fontSize={"25px"}
              fontFamily={"sans-serif"}
              color={"#777777"}
            >
              Valor da parcela
            </Box>
            <Box
              border={"1px solid"}
              borderColor={"#EDEDED"}
              paddingLeft={"31px"}
              paddingRight={"31px"}
              paddingBottom={"11px"}
              paddingTop={"11px"}
              fontSize={"25px"}
              fontFamily={"sans-serif"}
              color={"#777777"}
            >
              Valor total
            </Box>
            <Box
              border={"1px solid"}
              borderColor={"#EDEDED"}
              paddingLeft={"31px"}
              paddingRight={"31px"}
              paddingBottom={"11px"}
              paddingTop={"11px"}
              fontSize={"25px"}
              fontFamily={"sans-serif"}
              color={"#777777"}
            >
              Comissão parceiro
            </Box>
          </Center>
          {installments.map((installment: iInstallment, i: number) => {
            return (
              <Center display={"flex"} key={i + 1}>
                <Input
                  type="radio"
                  value={`${installment.number_of_installments} ${"Default"} ${
                    installment.installment_value
                  } ${installment.total_value}`}
                  {...register("number_of_installments")}
                  key={i}
                />
                <LineTable key={i - 1} installmentData={installment} />
              </Center>
            );
          })}
        </Center>
        <Center
          flexDirection={"column"}
          as={"form"}
          onChange={handleSubmit(onSubmitFunction)}
          backgroundColor={"#F8F8F8"}
        >
          <Box
            as={"h2"}
            fontSize={"29px"}
            fontFamily={"sans-serif"}
            color={"#228A95"}
          >
            Tabela Parceiro
          </Box>
          <Center display={"flex"}>
            <Box
              border={"1px solid"}
              borderColor={"#EDEDED"}
              paddingLeft={"31px"}
              paddingRight={"31px"}
              paddingBottom={"11px"}
              paddingTop={"11px"}
              fontSize={"25px"}
              fontFamily={"sans-serif"}
              color={"#777777"}
            >
              Parcela
            </Box>
            <Box
              border={"1px solid"}
              borderColor={"#EDEDED"}
              paddingLeft={"31px"}
              paddingRight={"31px"}
              paddingBottom={"11px"}
              paddingTop={"11px"}
              fontSize={"25px"}
              fontFamily={"sans-serif"}
              color={"#777777"}
            >
              Juros da parcela
            </Box>
            <Box
              border={"1px solid"}
              borderColor={"#EDEDED"}
              paddingLeft={"31px"}
              paddingRight={"31px"}
              paddingBottom={"11px"}
              paddingTop={"11px"}
              fontSize={"25px"}
              fontFamily={"sans-serif"}
              color={"#777777"}
            >
              Valor da parcela
            </Box>
            <Box
              border={"1px solid"}
              borderColor={"#EDEDED"}
              paddingLeft={"31px"}
              paddingRight={"31px"}
              paddingBottom={"11px"}
              paddingTop={"11px"}
              fontSize={"25px"}
              fontFamily={"sans-serif"}
              color={"#777777"}
            >
              Valor total
            </Box>
            <Box
              border={"1px solid"}
              borderColor={"#EDEDED"}
              paddingLeft={"31px"}
              paddingRight={"31px"}
              paddingBottom={"11px"}
              paddingTop={"11px"}
              fontSize={"25px"}
              fontFamily={"sans-serif"}
              color={"#777777"}
            >
              Comissão parceiro
            </Box>
          </Center>
          {installments.map((installment: iInstallment, i: number) => {
            return (
              <Center display={"flex"} key={i + 1}>
                <Input
                  type="radio"
                  value={`${installment.number_of_installments} ${"Partner"} ${
                    installment.installment_value
                  } ${installment.total_value}`}
                  {...register("number_of_installments")}
                  key={i}
                />
                <LineTable key={i - 1} installmentData={installment} />
              </Center>
            );
          })}
        </Center>
      </>
    );
  }
};
