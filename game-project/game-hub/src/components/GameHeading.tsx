import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'

interface HeadingProps {
    gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: HeadingProps) => {
    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`

  return (
    <Heading marginLeft={2} as={'h1'} marginBottom={5}>{heading}</Heading>
  )
}

export default GameHeading