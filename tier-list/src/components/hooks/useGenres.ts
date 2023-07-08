import { useQuery } from "@tanstack/react-query";
import APIClient from "../../api-clients";

export interface Genre{
    id:number;
    name: string;
    image_background:string;
}



const useGenres = ()=>  useQuery({
    queryKey: ['genres'],
    queryFn:
     new APIClient<Genre>('/genres').getAll,
    staleTime:24*60*60*1000,  //24h
})
export default useGenres;
