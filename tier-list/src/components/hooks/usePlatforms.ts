import { useQuery } from '@tanstack/react-query';
import APIClient from '../../api-clients';

export interface Platform{
    id:number;
    name: string;
    slug: string;
}
const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn:
    new APIClient<Platform>('/platforms/lists/parents').getAll,
    staleTime:Infinity
});

export default usePlatforms
