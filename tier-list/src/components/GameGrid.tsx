import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "./hooks/useGames";
import Gamecard from "./gamecard";
import GamecardSkeleton from "./gamecardSkeleton";
import { GameQuery } from "../App";
import React from "react";

interface Props {
  gamequery: GameQuery;
}

const GameGrid = ({ gamequery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gamequery);
  const Skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={5}
      >
        {isLoading &&
          Skeletons.map((Skeleton) => <GamecardSkeleton key={Skeleton} />)}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <Gamecard key={game.id} game={game} />
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button
          marginBottom={7}
          marginLeft={2}
          disabled={isFetchingNextPage}
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage ? "Loading ..." : "Load More"}
        </Button>
      )}
    </>
  );
};

export default GameGrid;
