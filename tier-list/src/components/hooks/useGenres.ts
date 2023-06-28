import { useEffect, useState } from "react";
import apiClients from "../../api-clients";
import { CanceledError } from "axios";

interface Genre{
    id:number;
    name: string;
}

interface FetchGenresResponse{
    count : number;
    results: Genre[];
}

const useGenres = ()=>{
const [genres, setGenres] = useState<Genre[]>([]);
const [error, setError] = useState("");
const [isLoading,setLoading]=useState(false);

useEffect(() => {
  const controller = new AbortController();
  setLoading(true);
  apiClients
    .get<FetchGenresResponse>("/genres",{signal:controller.signal})
    .then((res) => {setGenres(res.data.results);
    setLoading(false);})
    .catch((e) => {
      if(e instanceof CanceledError) return;
      setError(e.message);
      setLoading(false);
    });
    
    return () => controller.abort();
},[])
return {genres,error,isLoading};
}

export default useGenres;
