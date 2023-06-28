import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "./hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CreditScore from "./creditScore";

interface Props {
  game: Game;
}

const Gamecard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CreditScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default Gamecard;
