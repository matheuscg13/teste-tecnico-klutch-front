import { Center, Box, Text, Button } from "@chakra-ui/react";
import { Header } from "@/components/header";
import { TableInstallments } from "@/components/tables";
import { useMainContext } from "@/contexts/main.context";
import { api } from "@/services/api";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function () {
  const { bodyRequest, setBodyRequest, footerData, user } = useMainContext();
  const router = useRouter();

  useEffect(() => {
    if (!bodyRequest.desired_value) {
      router.push("/");
    }
  }, []);
  const onClickFunc = async (e: any) => {
    const func = async () => {
      setBodyRequest({
        ...bodyRequest,
        client: user.id,
      });
    };
    await func();

    await api
      .post("/api/solicitations/", bodyRequest)
      .then(({ data }) => {
        router.push("/review");
        setBodyRequest(data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <Header text={"Solicitar empréstimo"} />
      <Center as={"form"} flexDirection={"column"}>
        <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
          <Box display={"flex"} gap={"100px"}>
            <Box
              backgroundColor={"#E8FFE3"}
              minWidth={"500px"}
              maxWidth={"500px"}
              display={"flex"}
              gap={"50px"}
              paddingY={"34px"}
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
                color={"#EF9C4B"}
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
              paddingY={"34px"}
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
                color={"#EF9C4B"}
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
              backgroundColor={"#F8F8F8"}
              minWidth={"500px"}
              display={"flex"}
              gap={"50px"}
              justifyContent={"space-between"}
              paddingY={"34px"}
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
              backgroundColor={"#F8F8F8"}
              minWidth={"500px"}
              display={"flex"}
              gap={"50px"}
              paddingY={"34px"}
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
                color={"#EF9C4B"}
                margin={"0"}
                paddingY={"14px"}
                paddingLeft={"21px"}
                paddingRight={"81px"}
              >
                R${footerData.installment_value}
              </Text>
            </Box>
          </Box>
        </Box>
        <Box
          marginTop={"30px"}
          display={"flex"}
          flexDirection={"column"}
          gap={"20px"}
        >
          <Text
            fontSize={"22px"}
            fontFamily={"sans-serif"}
            color={"#228A95"}
            margin={"0"}
            display={"flex"}
            alignItems={"center"}
          >
            Escolha o tipo de contrato:
          </Text>
          <Box display={"flex"} gap={"50px"}>
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
              width={"190px"}
              height={"57px"}
              marginBottom={"20px"}
              cursor={"pointer"}
              onClick={(e) => {
                setBodyRequest({
                  ...bodyRequest,
                  contract: "Automatico",
                });
              }}
            >
              Automático
            </Button>
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
              width={"190px"}
              height={"57px"}
              marginBottom={"20px"}
              cursor={"pointer"}
              onClick={(e) => {
                setBodyRequest({
                  ...bodyRequest,
                  contract: "Manual",
                });
              }}
            >
              Manual
            </Button>
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
              width={"190px"}
              height={"57px"}
              marginBottom={"20px"}
              cursor={"pointer"}
              onClick={(e) => onClickFunc(e)}
            >
              Concluir
            </Button>
          </Box>
        </Box>
        <TableInstallments></TableInstallments>
      </Center>
    </>
  );
}
