import useGenres from "./useGenres";

const useGame = (id: number | undefined) => {
    const { data: genres } = useGenres();
    return genres?.results.find((g) => g.id === id);

}

export default useGame;