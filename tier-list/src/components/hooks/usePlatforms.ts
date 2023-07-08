import { useQuery } from '@tanstack/react-query';
import apiClients, { FetchResponse } from "../../api-clients";

export interface Platform{
    id:number;
    name: string;
    slug: string;
}
const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn:()=> 
    apiClients
      .get<FetchResponse<Platform>>('/platforms/lists/parents')
      .then(res=>res.data),
    staleTime:Infinity
});

export default usePlatforms
