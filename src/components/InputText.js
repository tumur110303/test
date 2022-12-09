import { Container, Input, Text } from "@chakra-ui/react";

const InputText = ({ value, setValue, label, placeholder, errText }) => {
  return (
    <Container style={{ margin: 10 }}>
      <Text
        ml={50}
        fontWeight="semibold"
        textAlign={"left"}
        mb="0px"
        color={"gray.500"}
      >
        {label}
      </Text>
      <Input
        borderRadius={30}
        w={300}
        h={10}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        size="sm"
      />
      <Text ml={50} fontSize={12} textAlign={"left"} mb="0px" color={"red.500"}>
        {errText}
      </Text>
    </Container>
  );
};

export default InputText;
