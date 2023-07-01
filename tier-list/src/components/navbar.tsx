import { HStack, Image } from "@chakra-ui/react";
import * as logo from "../assets/logo.png";
import ColorModeSwiitch from "./ColorModeSwiitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="20px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwiitch />
    </HStack>
  );
};

export default NavBar;
