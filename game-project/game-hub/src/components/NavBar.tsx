import { HStack, Image } from '@chakra-ui/react'
import React from 'react';
import logo from '../assets/Logo/logo.webp';
import ColourModeSwitch from './ColourModeSwitch';
import SearchInput from './SearchInput';

const NavBar = () => {
  return (
    <HStack justifyContent='space-between'>
        <Image src={logo} boxSize='60px'/>
        <SearchInput />
        <ColourModeSwitch />
    </HStack>
  )
}

export default NavBar;