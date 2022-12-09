import React, { useState, useContext } from "react";
import CustomButton from "../components/CustomButton";
import { Center, Collapse, Flex, Text } from "@chakra-ui/react";
import InputText from "../components/InputText";
import PasswordText from "../components/PasswordText";
import axios from "axios";
import IconCircle from "../components/IconCircle";
import NavbarMenu from "../components/NavbarMenu";
import LoginContext from "../context/LoginContext";

const Login = () => {
  const context = useContext(LoginContext);

  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [userNameNull, setUserNameNull] = useState("");
  const [passwordNull, setPasswordNull] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const loginHandler = () => {
    setErrorMessage("");

    if (userName === "" || userName === null || userName === undefined) {
      setUserNameNull("Нэвтрэх нэр оруулна уу!");
      return;
    } else setUserNameNull(null);

    if (password === "" || password === null || password === undefined) {
      setPasswordNull("Нууц үгээ оруулна уу!");
      return;
    } else setPasswordNull(null);

    setIsLoading(true);
    axios
      .post("http://192.168.8.64:4550", {
        username: userName,
        password: password,
      })
      .then((result) => {
        console.log("Амжилттай нэвтэрлээ!... ", result.data);
        context.setIsLoggedIn(true);
        console.log("Нэвтэрснийг context мэдсэн: ", context.isLoggedIn);
        setIsLoading(false);
      })
      .catch((error) => {
        context.setIsLoggedIn(false);
        setIsLoading(false);
        if (error.response) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage(error.message);
        }
      });

    setIsLoading(false);
  };

  return (
    <Center w={"100vw"} h={"100vh"}>
      <NavbarMenu />
      <Flex
        w={1000}
        height={900}
        justifyContent={"center"}
        alignItems={"center"}
        bg={"red.100"}
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
            {errorMessage === "wrong username or password" ? (
              <Text
                ml={50}
                fontSize={12}
                textAlign={"left"}
                mb="0px"
                color={"red.500"}
              >
                Нэвтрэх нэр нууц үг буруу байна.
              </Text>
            ) : null}
            <Text
              textColor={"blue.400"}
              fontWeight={"bold"}
              mb={25}
              fontSize={"2xl"}
            >
              Нэвтрэх
            </Text>
            <InputText
              errText={userNameNull}
              value={userName}
              setValue={setUserName}
              label="Нэвтрэх нэр эсвэл и-мэйл:"
              placeholder="Нэвтрэх нэр, и-мэйл"
            />
            <PasswordText
              errText={passwordNull}
              value={password}
              setValue={setPassword}
              label="Нууц үг:"
              placeholder="Нууц үг"
            />
            <CustomButton
              isLoading={isLoading}
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
