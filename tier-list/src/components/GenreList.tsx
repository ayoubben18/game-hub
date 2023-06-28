import { HStack, List, ListItem, Image, Button } from "@chakra-ui/react";
import useGenres, { Genre } from "./hooks/useGenres";
import getCroppedImageUrl from "./services/image-url";
import GenreSkeleton from "./genreskeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const Skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return null;
  return (
    <>
      {isLoading &&
        Skeletons.map((Skeleton) => <GenreSkeleton key={Skeleton} />)}
      {!isLoading && (
        <List>
          {data.map((genre) => (
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  src={getCroppedImageUrl(genre.image_background)}
                />
                <Button
                  onClick={() => onSelectGenre(genre)}
                  fontSize="lg"
                  variant="link"
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default GenreList;
