import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "./hooks/useGames";
import Gamecard from "./gamecard";
import GamecardSkeleton from "./gamecardSkeleton";
import { GameQuery } from "../App";

interface Props {
  gamequery: GameQuery;
}

const GameGrid = ({ gamequery }: Props) => {
  const { data, error, isLoading } = useGames(gamequery);
  const Skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={5}
      >
        {isLoading &&
          Skeletons.map((Skeleton) => <GamecardSkeleton key={Skeleton} />)}
        {data.map((game) => (
          <Gamecard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
