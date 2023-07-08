import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "./hooks/useGames";
import Gamecard from "./gamecard";
import GamecardSkeleton from "./gamecardSkeleton";
import { GameQuery } from "../App";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gamequery: GameQuery;
}

const GameGrid = ({ gamequery }: Props) => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useGames(gamequery);
  const Skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner marginLeft={3} />}
    >
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
    </InfiniteScroll>
  );
};

export default GameGrid;
