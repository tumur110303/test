import React from "react";
import { Button } from "@chakra-ui/react";
import { BeatLoader } from "react-spinners";

const CustomButton = ({ isLoading, bgcolor, launch, text, disabled }) => {
  return (
    <Button
      disabled={disabled}
      mt={5}
      color={"gray.500"}
      bgColor={bgcolor}
      isLoading={isLoading}
      colorScheme="green"
      spinner={<BeatLoader size={8} color="white" />}
      onClick={launch}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
