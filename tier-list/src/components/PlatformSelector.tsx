import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";
import usePlatform from "./hooks/usePlatform";
import usePlatforms from "./hooks/usePlatforms";

const PlatformSelector = () => {
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const { data, error } = usePlatforms();
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);

  const platform = usePlatform(platformId);
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => setPlatformId(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
