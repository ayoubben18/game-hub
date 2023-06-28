import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwiitch from "./ColorModeSwiitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="20px">
      <Image src={logo} boxSize="60px" />
      <ColorModeSwiitch />
    </HStack>
  );
};

export default NavBar;
