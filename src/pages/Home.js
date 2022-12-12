import { Center, Heading, Image } from "@chakra-ui/react";
import React from "react";
import NavbarMenu from "../components/NavbarMenu";

const Home = () => {
  return (
    <Center
      bgImage={
        "https://images.pexels.com/photos/3374204/pexels-photo-3374204.jpeg"
      }
      bgPosition="center"
      bgRepeat="no-repeat"
      w={"100vw"}
      h={"100vh"}
      p={5}
      pt-10
    >
      <NavbarMenu />
      <Heading
        fontStyle={"italic"}
        textAlign={"center"}
        textColor={"gray.700"}
        as="h3"
        size="3xl"
      >
        ТАНД ТУСЛАХДАА БИД ХЭЗЭЭД БАЯРТАЙ БАЙХ БОЛНО...
      </Heading>
    </Center>
  );
};

export default Home;
