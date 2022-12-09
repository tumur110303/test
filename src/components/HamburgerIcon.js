import { useState } from "react";
import Hamburger from "hamburger-react";

const MenuIconCustom = () => {
  const [isOpen, setOpen] = useState(false);
  return <Hamburger size={20} toggled={isOpen} toggle={setOpen} />;
};

export default MenuIconCustom;
