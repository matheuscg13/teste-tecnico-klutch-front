import { Header } from "@/components/header";
import { useMainContext } from "@/contexts/main.context";
import { iDesiredValue } from "@/interfaces/interfaces";
import {
  Box,
  Center,
  Flex,
  Spacer,
  Img,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
  Input,
  Button,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { api } from "@/services/api";
import { TableInstallments } from "../components/tables";
import { Footer } from "@/components/footer";

export default function Home() {
  const { register, handleSubmit } = useForm<iDesiredValue>();
  const {
    installments,
    setInstallments,
    partnerInstallments,
    setPartnerInstallments,
    setBodyRequest,
    bodyRequest,
  } = useMainContext();

  const onSubmitFunc = async (data: any) => {
    const body = {
      desired_value: parseInt(data.desired_value),
    };
    if (body.desired_value >= 300 && body.desired_value <= 10000) {
      setBodyRequest({
        ...bodyRequest,
        desired_value: body.desired_value,
      });
      await api
        .post("/api/consult_installments/", body)
        .then(({ data }) => {
          setInstallments(data.installments_default_table);
          setPartnerInstallments(data.installments_partner_table);
        })
        .catch((err) => console.log(err));
    } else {
      alert("O valor deve ser entre R$300,00 e R$10,000");
    }
  };
  return (
    <>
      <Header text={"Simulação de taxas"}></Header>

      <Center
        flexDirection={"column"}
        fontFamily={"sans-serif"}
        fontSize={"40px"}
        color={"#228A95"}
        fontWeight={"bold"}
        gap={"18px"}
        marginTop={"20px"}
      >
        Valor desejado
        <Box display={"flex"}>
          <Box
            as="form"
            action=""
            display={"flex"}
            gap={"19px"}
            onSubmit={handleSubmit(onSubmitFunc)}
            marginBottom={"45px"}
          >
            <Input
              placeholder="R$0,00"
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
              {...register("desired_value")}
            />
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
              type="submit"
              cursor={"pointer"}
            >
              Calcular
            </Button>
          </Box>
        </Box>
      </Center>
      <TableInstallments></TableInstallments>
      <Footer></Footer>
    </>
  );
}
