import React, { useState, useContext } from "react";
import CustomButton from "../components/CustomButton";
import { Center, Collapse, Flex, Text } from "@chakra-ui/react";
import InputText from "../components/InputText";
import PasswordText from "../components/PasswordText";
import IconCircle from "../components/IconCircle";
import NavbarMenu from "../components/NavbarMenu";
import LoginContext from "../context/LoginContext";

const Login = () => {
  const context = useContext(LoginContext);

  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const loginHandler = () => {
    context.login(userName, password);
  };

  return (
    <Center
      bgImage={
        "https://images.pexels.com/photos/3374204/pexels-photo-3374204.jpeg"
      }
      bgPosition="center"
      bgRepeat="no-repeat"
      w={"100vw"}
      h={"100vh"}
    >
      <NavbarMenu />
      <Flex
        w="100vw"
        height={900}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Flex
          pos={"relative"}
          flexDirection={"column"}
          justify="center"
          alignItems={"center"}
        >
          <Collapse startingHeight={65}>
            <IconCircle
              size="2xl"
              name="Christian Nwamba"
              src="https:bit.ly/code-beast"
            />
          </Collapse>
          <Flex
            zIndex={1}
            borderRadius={35}
            bg="white"
            h={450}
            flexDirection="column"
            justifyContent={"center"}
            alignItems={"center"}
            textAlign={"center"}
            textColor={"gray.800"}
          >
            {context.errorMessage === "wrong username or password" && (
              <Text
                ml={50}
                fontSize={12}
                textAlign={"left"}
                mb="0px"
                color={"red.500"}
              >
                Нэвтрэх нэр нууц үг буруу байна.
              </Text>
            )}
            <Text
              textColor={"blue.400"}
              fontWeight={"bold"}
              mb={25}
              fontSize={"2xl"}
            >
              Нэвтрэх
            </Text>
            <InputText
              errText={context.errorMessage}
              value={userName}
              setValue={setUserName}
              label="Нэвтрэх нэр эсвэл и-мэйл:"
              placeholder="Нэвтрэх нэр, и-мэйл"
            />
            <PasswordText
              errText={context.errorMessage}
              value={password}
              setValue={setPassword}
              label="Нууц үг:"
              placeholder="Нууц үг"
            />
            <CustomButton
              text="Нэвтрэх"
              isLoading={context.isLoading}
              launch={loginHandler}
              bgcolor="green.100"
            />
          </Flex>
        </Flex>
      </Flex>
    </Center>
  );
};

export default Login;
