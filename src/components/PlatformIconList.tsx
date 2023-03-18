import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BsGlobe } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { Platform } from "../hooks/useGames";
interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    andoird: FaAndroid,
    mac: FaApple,
    linux: FaLinux,
    playstation: FaPlaystation,
    pc: FaWindows,
    xbox: FaXbox,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <>
      <HStack my=".5em">
        {platforms.map((platform) => (
          <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500">
            {platform.name}
          </Icon>
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;
