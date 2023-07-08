import { useQuery } from "@tanstack/react-query";
import APIClient from "../../api-clients";
import ms from 'ms';
export interface Genre{
    id:number;
    name: string;
    image_background:string;
}



const useGenres = ()=>  useQuery({
    queryKey: ['genres'],
    queryFn:
     new APIClient<Genre>('/genres').getAll,
    staleTime:ms('24h'),  //24h
})
export default useGenres;
