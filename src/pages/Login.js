import React, { useState } from "react";

import CustomButton from "../components/CustomButton";
import { Flex, Text } from "@chakra-ui/react";
import InputText from "../components/InputText";
import PasswordText from "../components/PasswordText";
import CustomAlert from "../components/CustomAlert";

const Login = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const loginHandler = () => {
    if (userName === "" || userName === null || userName === undefined) {
      return (
        <CustomAlert
          status="warning"
          title="Мэдээлэл дутуу бөглөгдсөн!"
          description="Та нэвтрэх нэр, и-мэйл хаягаа оруулна уу"
          textColor="red.400"
          bgColor="gray.50"
        />
      );
    }

    if (password === "" || userName === null || userName === undefined) {
      return (
        <CustomAlert
          status="warning"
          title="Мэдээлэл дутуу бөглөгдсөн!"
          description="Та нууц үгээ оруулна уу"
          textColor="red.400"
          bgColor="gray.50"
        />
      );
    }
  };

  return (
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
      <Text textColor={"blue.400"} fontWeight={"bold"} mb={25} fontSize={"2xl"}>
        Нэвтрэх
      </Text>
      <InputText
        value={userName}
        setValue={setUserName}
        label="Нэвтрэх нэр эсвэл и-мэйл:"
        placeholder="Нэвтрэх нэр, и-мэйл"
      />
      <PasswordText
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
  );
};

export default Login;
