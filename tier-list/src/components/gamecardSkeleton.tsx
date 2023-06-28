import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GamecardSkeleton = () => {
  return (
    <Card width="250px" padding="10px" borderRadius={10}>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GamecardSkeleton;
