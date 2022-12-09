import { Center, Image } from "@chakra-ui/react";
import React from "react";
import NavbarMenu from "../components/NavbarMenu";

const Home = () => {
  return (
    <Center w={"100vw"} h={"100vh"} p={5} pt-10>
      <NavbarMenu />
      <Image src="https://pngtree.com/freebackground/summer-beach-background_982371.html" />
    </Center>
  );
};

export default Home;
