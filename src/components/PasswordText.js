import {
  Button,
  Container,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

const PasswordText = ({ placeholder, label, value, setValue }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Container style={{ margin: 10 }}>
      <Text
        ml={50}
        mb="0px"
        fontWeight="semibold"
        textAlign={"left"}
        color={"gray.500"}
      >
        {label}
      </Text>

      <InputGroup w={300} h={10} ml={5} size="md">
        <Input
          borderRadius={30}
          type={show ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <InputRightElement width="4.5rem">
          <Button
            textColor={"gray.500"}
            bg={"green.100"}
            h="1.75rem"
            size="sm"
            onClick={handleClick}
          >
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </Container>
  );
};

export default PasswordText;
