import React from "react";
import { Button } from "@chakra-ui/react";
import { BeatLoader } from "react-spinners";

const CustomButton = ({ isLoading, bgcolor, launch }) => {
  return (
    <Button
      color={"gray.500"}
      bgColor={bgcolor}
      isLoading={isLoading}
      colorScheme="green"
      spinner={<BeatLoader size={8} color="white" />}
      onClick={launch}
    >
      Нэвтрэх
    </Button>
  );
};

export default CustomButton;
