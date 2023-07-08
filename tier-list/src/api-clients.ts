import axios from "axios";

export interface FetchResponse<T>{
    count : number;
    results: T[];
}

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key:'72e20d4ba2e249e291299a25c2b2896d'
    }
})

