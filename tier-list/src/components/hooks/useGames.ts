
import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../../App";
import APIClient, { FetchResponse } from "../../api-clients";
import { Platform } from "./usePlatforms";



export interface Game {
    id: number;
    name: string;
    background_image:string;
    parent_platforms:{platform: Platform}[];
    metacritic: number;
    rating_top: number;
  }
  

const useGames = (gameQuery:GameQuery)=>
useInfiniteQuery<FetchResponse<Game>,Error>({
  queryKey: ['games', gameQuery],
  queryFn:({pageParam = 1})=> new APIClient<Game>('/games').getAll({params: {
    genres: gameQuery.genreId,
    parent_platforms: gameQuery.platformId,
    ordering: gameQuery.sortOrder,
    search:gameQuery.searchText,
    page: pageParam
  }}),
  getNextPageParam:(lastPage,allPages)=> {
    return lastPage.next ?  allPages.length+1 : undefined
},
staleTime: Infinity 
  
})

export default useGames;