import { HStack, Image } from '@chakra-ui/react'
import React from 'react';
import logo from '../assets/Logo/logo.webp';
import ColourModeSwitch from './ColourModeSwitch';
import SearchInput from './SearchInput';

interface NavBarSearchProps {
  onSearch: (searchText: string) => void;
}


const NavBar = ({ onSearch }: NavBarSearchProps) => {
  return (
    <HStack justifyContent='space-between'>
        <Image src={logo} boxSize='60px'/>
        <SearchInput onSearch={onSearch}/>
        <ColourModeSwitch />
    </HStack>
  )
}

export default NavBar;