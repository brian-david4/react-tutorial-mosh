import { Box } from '@chakra-ui/react'
import React, { Children, ReactNode } from 'react'

interface ContainerProps {
    children: ReactNode;
}

const GameCardContainer = ({ children }: ContainerProps) => {
  return (
    <Box borderRadius={12} overflow={'hidden'} >
        {children}
    </Box>
  )
}

export default GameCardContainer