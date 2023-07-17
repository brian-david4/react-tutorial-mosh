import { Badge } from "@chakra-ui/react";


interface CriticProps {
    score: number;
}

const CriticScore = ({ score }: CriticProps) => {
    let colour = score > 75 ? 'green.300' : score > 60 ? 'orange.200' : 'red.500';

  return(
      <Badge color={colour} fontSize={'14px'} borderRadius={'md'} paddingX="2">{score}</Badge>
  ) 
  
}

export default CriticScore;