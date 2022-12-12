import React, { useContext } from "react";
import { Flex, Link, List } from "@chakra-ui/react";
import HamburgerMenu from "./HamburgerMenu";
import LoginContext from "../context/LoginContext";

const NavbarMenu = () => {
  const context = useContext(LoginContext);

  return context.isLoggedIn ? (
    <Flex
      pos={"fixed"}
      top={20}
      left={0}
      height={70}
      width={"full"}
      display={"flex"}
      alignItems={"center"}
      bg={"gray.700"}
      textColor={"white"}
      p={10}
    >
      <HamburgerMenu />
      <Flex pos={"absolute"} right={0} mr={50}>
        <List>
          <Link m={2} href="/">
            Нүүр хуудас
          </Link>
          <Link m={2} href="/">
            Гарах
          </Link>
        </List>
      </Flex>
    </Flex>
  ) : (
    <Flex
      pos={"fixed"}
      top={20}
      left={0}
      height={70}
      width={"full"}
      display={"flex"}
      alignItems={"center"}
      bg={"gray.700"}
      textColor={"white"}
      p={10}
    >
      <HamburgerMenu />
      <Flex pos={"absolute"} right={0} mr={50}>
        <List>
          <Link m={2} href="/">
            Нүүр хуудас
          </Link>
          <Link m={2} href="/login">
            Нэвтрэх
          </Link>
        </List>
      </Flex>
    </Flex>
  );
};

export default NavbarMenu;
