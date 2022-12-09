import {
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import LoginContext from "../context/LoginContext";
import HamburgerIcon from "./HamburgerIcon";

const HamburgerMenu = () => {
  const context = useContext(LoginContext);

  return context.isLoggedIn ? (
    <Menu>
      <MenuButton
        icon={<HamburgerIcon />}
        as={IconButton}
        aria-label="Options"
        variant="outline"
      />
      <MenuList>
        <MenuItem textColor={"gray.600"}>
          <Link href="/">Нүүр хуудас</Link>
        </MenuItem>
        <MenuItem textColor={"gray.600"}>
          <Link href="/" onClick={context.setIsLoggedIn(false)}>
            Гарах
          </Link>
        </MenuItem>
      </MenuList>
    </Menu>
  ) : (
    <Menu>
      <MenuButton
        icon={<HamburgerIcon />}
        as={IconButton}
        aria-label="Options"
        variant="outline"
      />
      <MenuList>
        <MenuItem textColor={"gray.600"}>
          <Link href="/">Нүүр хуудас</Link>
        </MenuItem>
        <MenuItem textColor={"gray.600"}>
          <Link href="/login">Нэвтрэх</Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default HamburgerMenu;
