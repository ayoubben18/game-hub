import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwiitch from "./ColorModeSwiitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="20px">
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <ColorModeSwiitch />
    </HStack>
  );
};

export default NavBar;
