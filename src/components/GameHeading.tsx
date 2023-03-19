import { Heading } from "@chakra-ui/react";
import { GameQuery } from "./../App";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading mb="0.5em" fontSize="3em" as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
