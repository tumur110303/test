import { Collapse, Flex } from "@chakra-ui/react";
import React from "react";
import IconCircle from "../components/IconCircle";
import Login from "./Login";

const App = () => {
  return (
    <Flex
      mt={30}
      height={900}
      justifyContent={"center"}
      alignItems={"center"}
      bg={"gray.200"}
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
            src="https://bit.ly/code-beast"
          />
        </Collapse>
        <Login />
      </Flex>
    </Flex>
  );
};

export default App;
