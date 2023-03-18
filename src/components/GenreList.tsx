import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "./../hooks/useGenres";
import getCroppedImageUrl from "./../services/image-url";

const GenreList = () => {
  const { data } = useGenres();

  return (
    <List>
      {data.map((genre) => (
        <ListItem py="0.4em"  key={genre.id}>
          <HStack>
            <Image
              boxSize="3em"
              objectFit="cover"
              borderRadius="5px"
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize="1.2em">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
