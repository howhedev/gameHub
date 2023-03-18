import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card overflow="hidden" borderRadius="10px">
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="2em">{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
