import { HStack, Image } from '@chakra-ui/react'
import React from 'react';
import logo from '../assets/Logo/logo.webp';
import ColourModeSwitch from './ColourModeSwitch';

const NavBar = () => {
  return (
    <HStack justifyContent='space-between'>
        <Image src={logo} boxSize='60px'/>
        <ColourModeSwitch />
    </HStack>
  )
}

export default NavBar;