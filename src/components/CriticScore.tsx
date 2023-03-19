import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  let color = score > 90 ? "green" : score > 75 ? "yellow" : "";
  return (
    <Badge colorScheme={color} fontSize="1.6em" px="0.4em" borderRadius="6px">
      {score}
    </Badge>
  );
};

export default CriticScore;
