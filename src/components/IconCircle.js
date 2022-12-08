import { Avatar, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";

const IconCircle = ({ size, name, src }) => {
  return (
    <Wrap pos={"absolute"} zIndex={2}>
      <WrapItem>
        <Avatar size={size} name={name} src={src} />
      </WrapItem>
    </Wrap>
  );
};

export default IconCircle;
