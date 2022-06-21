import { HStack, Icon } from "@chakra-ui/react";

import { AiFillStar } from 'react-icons/ai';

interface RatingProps {
  rating: number;
}

export function Rating({ rating }: RatingProps) {
  return (
    <HStack>
      <Icon fontSize="1.3rem" as={AiFillStar} color={rating > 1 ? "#ffd60a" : "gray.100"} />
      <Icon fontSize="1.3rem" as={AiFillStar} color={rating > 2 ? "#ffd60a" : "gray.100"} />
      <Icon fontSize="1.3rem" as={AiFillStar} color={rating > 3 ? "#ffd60a" : "gray.100"} />
      <Icon fontSize="1.3rem" as={AiFillStar} color={rating > 4 ? "#ffd60a" : "gray.100"} />
      <Icon fontSize="1.3rem" as={AiFillStar} color={rating > 5 ? "#ffd60a" : "gray.100"} />
    </HStack>
  );
}