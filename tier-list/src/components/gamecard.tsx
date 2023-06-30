import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "./hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CreditScore from "./creditScore";
import getCroppedImageUrl from "./services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const Gamecard = ({ game }: Props) => {
  return (
    <Card width="100%" borderRadius={10} overflow="hidden" marginRight="10px">
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CreditScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          {game.name} <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default Gamecard;
