import { Box, Center, Img, Text } from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

export const Header = ({ text }: any) => {
  return (
    <header>
      <Box
        as={"nav"}
        h={"80px"}
        bgColor={"#228A95"}
        display={"flex"}
        alignItems={"center"}
        marginTop={"0"}
      >
        <HamburgerIcon boxSize={"50px"} color={"#FFFFFF"} marginLeft={"10px"} />
        <Center width={"100%"}>
          <Img src={"./assets/Grupo290.png"} alt="Logo" />
        </Center>
      </Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        marginLeft={"300px"}
        gap={"38px"}
      >
        <img src="" alt="sinal de mais" />
        <img src="" alt="fixario" />
        <Text
          fontFamily={"sans-serif"}
          fontSize={"56px"}
          color={"#228A95"}
          as={"h1"}
          width={"285px"}
        >
          {text}
        </Text>
      </Box>
    </header>
  );
};
